import { useState } from 'react';
import css from './Color.module.css';
import classNames from 'classnames';

// console.log(css);

export function  ColorPicker({ options }){
    const [ activeOptIdx, setActiveOptIndx ] = useState(4);

    const setActive = index => {
        setActiveOptIndx( index );
    };

    const makeOptionClassName = index => {
        return classNames(css.ColorPicker__option, {
            [css['ColorPicker__option--active']]: index === activeOptIdx,
        });
    };

    const { label } = options[ activeOptIdx ];

    return (
        <div>
            <h2>Color Picker</h2>
            <p>Обраний колір: <b>{ label }</b></p>
                {options.map(({ label, color}, index)=>(
                    <button
                    key        = {label}
                    type       = "button"
                    className  = {makeOptionClassName(index)}
                    style      = {{backgroundColor: color}}
                    onClick    = {() => setActive(index)}
                    aria-label = {label}
                    ></button>
                ))}
        </div>
    )
}