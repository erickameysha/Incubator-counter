import React, {ChangeEvent, useEffect, useState} from 'react';

export type SettingPropsType = {
    minValue: number
    maxValue: number
    setSettingChange: (setMinValueProps: number, setMaxValueProps: number) => void
    validationInterval:(localMaxValue: number, localMinValue: number) =>void
    checkChanges:(localMaxValue: number, localMinValue: number) =>void
}
const SettingCounter = (props: SettingPropsType) => {

    let [settingCount, setSettingCount] = useState(props.minValue)
    let [settingMaxCount, setSettingMaxCount] = useState(props.maxValue)
    const setMaxCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSettingMaxCount( +e.currentTarget.value)
        props.checkChanges(settingMaxCount, settingCount)
        props.validationInterval(settingMaxCount, settingCount)

    }
    const setMinCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSettingCount(+e.currentTarget.value)
        props.checkChanges(settingMaxCount, settingCount)
        props.validationInterval(settingMaxCount, settingCount)
    }
    const buttonHandler = () => {
        props.setSettingChange(settingCount, settingMaxCount)
    }
    useEffect(() => {
        props.checkChanges(settingMaxCount, settingCount)
        props.validationInterval(settingMaxCount, settingCount)
    }, [settingCount, settingMaxCount])

    return (
        <div>
            <div>
                <div>
                    <div>minValue: <input type="number" onChange={setMinCountHandler} value={settingCount}/></div>
                    <div> maxValue: <input type="number" onChange={setMaxCountHandler} value={settingMaxCount}/></div>
                </div>
                <button onClick={buttonHandler}> set</button>
            </div>
        </div>
    );
};

export default SettingCounter;