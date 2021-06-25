import React from 'react';
import s from './BlockC.module.css'
import InputSetting from './InputS/InputSetting';
import ButtonSetting from './buttonS/ButtonSetting';

const CounterSetting = () => {
    return (
        <div className={s.Counter}>
            <InputSetting/>
            <ButtonSetting/>
        </div>
    );
};

export default CounterSetting;