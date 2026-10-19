import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { NewsSearchForm } from 'components/NewsForm.jsx'

axios.defaults.headers.common['Authorization'] =
'Bearer c7cfa9764acc40e0977baf4dd8dae782';

    const styles = {
        ref: {
            color: '#c67a7a',
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
            // console.log(response.data.articles);
            return response.data.articles;
        })
    }

export function News(){
    const [ article, setArticles ]       = useState([]);
    const [ query, setQuery ]             = useState('');
    const [ currentPage, setCurrentPage ] = useState(1);

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
      console.error(
        'Ошибка NewsAPI:',
        error.response?.data || error.message
      );
    });
    }, [currentPage, query]);

    const onChangeQuery = query =>{
        setQuery(query);
        setCurrentPage(1);
        setArticles([]);
    }

        return (
            <>
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
            </>
);
}

    

   
