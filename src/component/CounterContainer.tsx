import React, {useEffect, useState} from 'react';

import CounterRepresentation from "./CounterRepresentation";

const CounterContainer = () => {
    let initialState = 0
    let initialMaxValue = 5
    let [minValue, setMinValue] = useState(initialState)
    let [maxValue, setMaxValue] = useState(initialMaxValue)
    let [count, setCount] = useState(minValue)
    let [error, setError] = useState(false)
    let [isChanges, setIsChanges] = useState(false)
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
        setIsChanges(false)
        setMaxValue(setMaxValueProps)
    }
    const checkChanges = (localMaxValue: number, localMinValue: number) => {
        if (localMaxValue !== maxValue || localMinValue !== minValue) {
            setIsChanges(true)
        }

    }
    const validationInterval = (localMaxValue: number, localMinValue: number) => {
        if (localMinValue >= localMaxValue || localMinValue < 0) {
            setError(true)
        } else {
            setError(false)
        }
    }

    return (
        <div>
            <CounterRepresentation
                isChanges={isChanges}
                error={error}
                count={count}
                incr={incr}
                resetValue={resetValue}
                disableCount={disableCount}
                disableReset={disableReset}
                minValue={minValue}
                maxValue={maxValue}
                setSettingChange={setSettingChange}
                validationInterval={validationInterval}
                checkChanges={checkChanges}
            />
        </div>
    );
};

export default CounterContainer;