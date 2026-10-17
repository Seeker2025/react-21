import React, { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.headers.common['Authorization'] =
'Bearer';

export function News(){

    const fetchArticle = ({
        searchQuery = '',
        currentPage = 1,
        pageSize = 5,
    } = {}) =>{
        return axios
        .get(
            `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=${pageSize}&
             page=${currentPage}`,

        )
    }

    return (
        <ul>

            <li>P</li>

        </ul>
    );
}