import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LuBeer } from "react-icons/lu";

import { NewsSearchForm } from 'components/NewsForm.jsx'

axios.defaults.headers.common['Authorization'] =
'Bearer c7cfa9764acc40e0977baf4dd8dae782';

    const styles = {
        ref: {
            color:    '#c67a7a',
        },

        p: {
            color:    'red',
            fontSize: '1.2em'
        }
    };


    const fetchArticle = ({
        searchQuery = '',
        currentPage = 1,
        pageSize    = 5,
    } = {}) =>{

        return axios
        .get('https://newsapi.org/v2/everything', {
      params: {
        q: searchQuery,
        pageSize,
        page: currentPage,
      }})

       
        .then(response=>{
            console.log(response.data.articles);

            if (response.data.articles.length === 0) {
                //Так створюємо об'єкт помилки і прокидаємо його в catch
                throw new Error('За вашим запитом новини не знайдено');
            }

            return response.data.articles;
        })
    }

export function News(){
    const [ article, setArticles ]        = useState([]);
    const [ query, setQuery ]             = useState('');
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ isLoading, setIsLoading ]     = useState(false);
    const [ error, setError ]             = useState(null);  

    useEffect(()=>{
         if (!query.trim()) {
            return;
            }
    fetchArticle({ searchQuery: query, currentPage }).then(
        responseArticles =>{
        setArticles(prevArticles => [...prevArticles, ...responseArticles]);
        // setCurrentPage(prevCurrentpage => prevCurrentpage + 1);
        },
    )
    .catch(error => {
      setError(error.message)   
      console.error(
        'Ошибка NewsAPI:',
        error.response?.data || error.message
      );

    })
    .finally(() => setIsLoading(false))
    }, [/*currentPage*/, query]);

    const onChangeQuery = query =>{
        setQuery(query);
        setCurrentPage(1);
        setArticles([]);
        setError(null);
    }

        return (
            <>
            { error && <p style={styles.p}>{error}</p> }

            <NewsSearchForm onSubmit = {onChangeQuery} />
    <ul>
        {
            article.map(({ title, url }) => (
    <li key = {title}>
        <a href = {url} style = {styles.ref} target = "_blank" rel = "noopener noreferrer">
            {title}
        </a>
    </li>
            ))
        }
    </ul>

    {
        isLoading && (
        <p style = {{ fontSize: 24, display: 'flex', alignItems: 'center'}}>
            Завантажуємо...
            <span
            arial-label = "Иконка"
            role = "img"
            style = {{ fontSize: 32, marginLeft: 10 }}
            >

                        <LuBeer />
                        

            </span>
        </p>
        )
    }
            </>
);
}

    

   
