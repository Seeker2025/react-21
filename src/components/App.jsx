import React, { Component } from 'react';

import { Finder         } from './Finder';
import { ColorPicker    } from './ColorPicker';
import { NewsSearchForm } from './Forma';
import { Clock          } from './Clock';
import { ToDate         } from './ToDate';
import { News           } from './News';      

const colorPickerOptions = [
  { label: 'red',     color: '#F44336' },
  { label: 'green',   color: '#4CAF50' },
  { label: 'blue',    color: '#2196F3' },
  { label: 'grey',    color: '#607D88' },
  { label: 'pink',    color: '#E91E63' },
  { label: 'indigo',  color: '#3F51B5' },
];

export class App extends Component{

  state = {
    input: '',
  };

  onSubmit = (val) =>{
    this.setState({ input: val},
    () => console.log(this.state.input)  
    )
  }

  render(){
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      {/* React homework template */}

      <Finder/>
      <ColorPicker options = {colorPickerOptions}/>
      
      <NewsSearchForm 
      onSubmit={this.onSubmit}
      userInput={this.state.input}
      />

      <Clock/>

      <ToDate/>

      <h2>Введіть слово для пошуку новин</h2>
      <News/>
      
    </div>
    );
  }
};
