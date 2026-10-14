import React, { useState } from 'react';

const styles = {
    form: {
    //  backgroundColor: 'red',
        marginTop:      '15px',  
    },

    input: {
       backgroundColor: 'grey',
    },

    button: {
       backgroundColor: '#2659e6',
       color:           '#fff',
       padding:         '6px 15px',
       marginLeft:      '15px',
       borderRadius:    '4px',
    },
};

export function NewsSearchForm({ onSubmit, userInput }){
    const [query, setQuery] = useState('');
    const handleChange = e => setQuery(e.currentTarget.value);

                              const handleSubmit = e => {
                                    e.preventDefault();

                                    onSubmit(query);
                                    setQuery('');
                                }

    return (
             <>

    <form style = {styles.form} onSubmit={handleSubmit}>

    <input 
    style = {styles.input}
    type="text"
    value={query}
    onChange={handleChange}/>

    <button
    style = {styles.button}
    type ="submit"
    >
    Шукати
    </button>

    </form>

    <h2>Ви щось надрукували</h2>
    <p>{userInput}</p>
    
             </>
    );
}