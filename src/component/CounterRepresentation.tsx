import React from 'react';
import SettingCounter, {SettingPropsType} from "./SettingCounter/SettingCounter";
import Counter, {CounterPropsType} from "./Counter/Counter";
import s from './Representation.module.css'

type CounterRepresentationPropsType = {
    error: boolean
    count: number
    incr: () => void
    resetValue: () => void
    disableCount: boolean
    disableReset: boolean
    minValue: number
    maxValue: number
    isChanges:boolean
    setSettingChange: (setMinValueProps: number, setMaxValueProps: number) => void
    validationInterval:(localMaxValue: number, localMinValue: number) =>void
    checkChanges:(localMaxValue: number, localMinValue: number) =>void
}

const CounterRepresentation = (props: CounterRepresentationPropsType) => {
    return (
        <div className={s.container}>
            <Counter
                error={props.error}
                count={props.count}
                incr={props.incr}
                resetValue={props.resetValue}
                disableCount={props.disableCount}
                disableReset={props.disableReset}
                isChanges={props.isChanges}
            />
            <SettingCounter
                minValue={props.minValue}
                maxValue={props.maxValue}
                setSettingChange={props.setSettingChange}
                checkChanges={props.checkChanges}
                validationInterval={props.validationInterval}
            />


        </div>
    );
};

export default CounterRepresentation;