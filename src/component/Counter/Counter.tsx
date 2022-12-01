import React from 'react';
import s from "./Counter.module.css";

export type CounterPropsType = {
    error: boolean
    count: number
    incr: () => void
    resetValue: () => void
    disableCount: boolean
    disableReset: boolean
    isChanges: boolean
}


const Counter = (props: CounterPropsType) => {
    const windowView = props.isChanges ? props.error ?

            <div className={props.error ? s.viewError : s.view}>Incorrect value</div> :
            <div className={s.view}>Click on "Set"</div> :
        <div className={props.error ? s.viewError : s.view}>{props.count}</div>
    return (
        <div className={s.counterContainer}>
            {windowView}
            <button disabled={props.disableCount} className={s.buttonCount} onClick={props.incr}>inr</button>
            <button disabled={props.disableReset} className={s.buttonCount} onClick={props.resetValue}>reset</button>
        </div>
    );
};

export default Counter;