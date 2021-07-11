import React, { useState } from 'react';
type ButtonType ={
    nameBtn:string
    dis:boolean
    btn:string
    click: () => void
}
export const ButtonCounter = (props:ButtonType) => {
    return (
        <div className={'btnDiv'}>
            <button className={props.btn} disabled={props.dis}
                    onClick={props.click}>{props.nameBtn}</button>
        </div>
    )
}

