import React, { useState } from 'react';
type ButtonType ={
    nameBtn:string
    dis?:boolean
    btnClass:string
    click?: () => void
  
}
export const ButtonCounter = (props:ButtonType) => {
    return (
        <div className={'btnDiv'}>
            <button className={props.btnClass} disabled={props.dis }
                    onClick={props.click}>{props.nameBtn}</button>
        </div>
    )
}

