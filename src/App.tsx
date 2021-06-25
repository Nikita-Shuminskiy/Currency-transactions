import React, {useState } from 'react';
import "./App.css";
import { CounterComponent } from './DisplayCounter/CounterComponent';
import CounterSetting from './DisplayCounter/SettingCounter/BlockCounterSetting';

const App = () => {
    let initCount = 0
    const [counter, setCounter] = useState(initCount)
    const [counter2, setCounter2] = useState(0)


    const handleClick1 = () => {
        if (counter <=4){
          return setCounter(counter + 1)
        }
        setCounter(initCount)

    }
    const dropping = () => {
        if (counter <= 5) {
            setCounter(initCount)
        }
    }
/*
    const handleClick2 = () => {
        if (counter <=4){
          return (
              setCounter2(counter2 + 1)
          )
        }
        setCounter(0)

    }
    const dropping2 = () => {
        if (counter <= 5) {
            setCounter2(0)
        }
    }
*/
    return (
        <div className={'App-block'}>
            <CounterComponent  counter={counter} counter2={counter2} handleClick1={handleClick1} dropping={dropping}/>
            <CounterSetting/>
        </div>
    )
}

export default App
