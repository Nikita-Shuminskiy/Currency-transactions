import React, { useState } from 'react'
import '../App.css'
import ButtonCounter from './Button/ButtonCounter';

type CounterType = {
    counter:number
    handleClick1: () => void
    dropping:() => void
    counter2:number
}

export const CounterComponent:React.FC<CounterType> = (props) => {
    return (
        <div className="Counter">
      <div className={'block'}>
          <p style={{
              color: 'orange'
          }}> Counter Exam Monday</p>
          <div className={'counterDisplay'} style={{
              color: props.counter === 5 ? 'red' : ''}
          }>
              <div> {props.counter}</div>
              {/* <div> {props.counter2}</div>*/}
          </div>
          <ButtonCounter counter={props.counter} handleClick1={props.handleClick1} dropping={props.dropping}/>
          {/* <ButtonCounter counter={props.counter2}  handleClick1={props.handleClick2} dropping={props.dropping2} />*/}
      </div>
        </div>
    );
}

