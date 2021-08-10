import React  from 'react';
import s from './Button.module.css'
type ButtonType ={
    nameBtn:string
    disabled?:boolean
    btnClass:string
    click?: () => void
  
}
export const ButtonCounter = React.memo((props:ButtonType) => {
    return (
        <div>
            <button className={props.btnClass} disabled={props.disabled }
                    onClick={props.click}>{props.nameBtn}</button>
        </div>
    )
})

