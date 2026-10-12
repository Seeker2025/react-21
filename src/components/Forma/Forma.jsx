import React, { useState } from 'react';

export function NewsSearchForm({ onSubmit }){
    const [query, setQuery] = useState('');
    const handleChange = e => setQuery(e.currentTarget.value);

    const handleSubmit = e => {
        e.preventDefault();

        onSubmit(query);
        setQuery('');
    }

    return (
        <form onSubmit={handleSubmit}>

        </form>
    );
}