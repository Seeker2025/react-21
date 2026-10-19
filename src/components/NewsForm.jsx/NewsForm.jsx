import React, { Component } from 'react';

// export function NewsSearchForm(){
//     return (
//         <>
//         <p>S</p>
//         </>
//     )
// }

// import { Component } from "react";
// import css from './Search.module.css';

const styles = {
    // form: {
    // //  backgroundColor: 'red',
    //     marginTop:      '15px',  
    // },

    input:  {
        backgroundColor: '#386a3cd0',
        color: 'gold',
        height: '28px',
        paddingLeft: '5px',
        },

    button: {
       backgroundColor: '#2659e6',
       color:           '#fff',
       padding:         '6px 15px',
       marginLeft:      '15px',
       borderRadius:    '4px',
        },
};

export class NewsSearchForm extends Component{

    state ={
        value: '',
    }

    handleChange = (e) => {
        this.setState({ value:e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state);
        this.props.onSubmit(this.state.value)
    }

    render(){
        return (
            <>
        <form 
        // className = 'd-flex mt-2'  
        role = 'search'
        onSubmit = {this.handleSubmit}
        >
                    <input
                        style = {styles.input}
                        type = 'search'
                        placeholder='Search'
                        aria-label = 'Search'
                        onChange ={this.handleChange}
                    />

            <button type='submit' style={styles.button}>
                Шукати новини
            </button>        
        </form>
            </>
        )
    }
}