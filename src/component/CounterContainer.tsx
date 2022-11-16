import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './Counter/Counter.module.css'
import Counter from "./Counter/Counter";
import SettingCounter from "./SettingCounter/SettingCounter";

const CounterContainer = () => {
    let initialState = 0
    let initialMaxValue = 5
    let [minValue, setMinValue] = useState(initialState)
    let [maxValue, setMaxValue] = useState(initialMaxValue)
    let [count, setCount] = useState(minValue)
    let [error, setError] = useState(false)
    let [errorMassage, setErrorMessage] = useState<null | string>(null)
    const incr = () => {
        if (count != maxValue) {
            setCount(count + 1)
        } else {
            setError(true)

        }
    }
    useEffect(() => {
        if (count >= maxValue) {
            setError(true)
        }



    }, [count])

    const resetValue = () => {
        setCount(minValue)
        setError(false)

    }
    let disableCount = count == maxValue || error
    let disableReset = count == minValue


    // settingCounter
    const setSettingChange = (setMinValueProps: number, setMaxValueProps: number) => {
        setMinValue(setMinValueProps)
        setCount(setMinValueProps)
        setError(false)

        setMaxValue(setMaxValueProps)
    }


    return (
        <div>
            <Counter
                error={error}
                disableReset={disableReset}
                count={count}
                incr={incr}
                resetValue={resetValue}
                disableCount={disableCount}
            />




        </div>
    );
};

export default CounterContainer;