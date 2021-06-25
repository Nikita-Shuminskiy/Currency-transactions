import React, { useState } from 'react';
import s from './Button.module.css'


type ButtonType ={
    counter:number
    handleClick1: () => void
    dropping:() => void
}


const ButtonCounter = (props:ButtonType) => {
    const btnIncStyle = {
        opacity: props.counter === 5 ? 0.22 : '',
        backgroundColor: props.counter === 5 ? 'red' : 'orange',
    }
    const btnDrop = {
        opacity: props.counter <= 3 ? 0.22: '',
        backgroundColor: props.counter <= 4 ? 'orange' : 'darkred',
    }
    return (
        <div className={s.buttons}>
            <button className = {s.btnInc} style ={btnIncStyle} disabled={ props.counter === 5 ? true : false}
                     onClick={props.handleClick1}>Inc</button>
            <button className={s.btnDrop} style = {btnDrop} disabled={ props.counter > 3 ? false : true}
                    onClick={props.dropping}>Drop</button>
        </div>
    );
}

export default ButtonCounter;