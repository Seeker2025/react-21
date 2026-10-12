import React, { Component } from 'react';

import { Finder         } from './Finder';
import { ColorPicker    } from './ColorPicker';
import { NewsSearchForm } from './Forma';

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
    this.setState({ input: val})
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
      <NewsSearchForm onSubmit={this.onSubmit}/>
      
    </div>
    );
  }
};
