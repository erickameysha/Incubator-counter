import React from 'react';
import s from "./Counter.module.css";

type PropsType = {
    error: boolean
    count: number
    incr: ()=> void
    resetValue : ()=> void
    disableCount: boolean
    disableReset: boolean
}


const Counter = (props: PropsType) => {
    return (
        <div>
            {
                props.error  ? <div className={s.viewError}>{props.count}</div>: <div className={s.view}>{props.count}</div>
            }






            <button disabled={props.disableCount} onClick={props.incr}>+</button>
            <button disabled={props.disableReset} onClick={props.resetValue}>0</button>
        </div>
    );
};

export default Counter;