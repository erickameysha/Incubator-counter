import React, {ChangeEvent, useState} from 'react';

type PropsType ={
    minValue:number
    maxValue: number
    setSettingChange: (setMinValueProps: number, setMaxValueProps: number) => void
}
const SettingCounter = (props: PropsType) => {

    let [settingCount, setSettingCount] = useState(props.minValue)
    let [settingMaxCount, setSettingMaxCount] = useState(props.maxValue)
    const setMaxCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let onChangeHandler = +e.currentTarget.value
        setSettingMaxCount(onChangeHandler)




    }
    const setMinCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let onChangeHandler = +e.currentTarget.value
        setSettingCount(onChangeHandler)

    }
    const buttonHandler = () => {
        props.setSettingChange(settingCount, settingMaxCount)
    }

    return (
        <div>
            Min Value <input type="number" onChange={setMinCountHandler} value={settingCount}/>
            maxValue <input type="number" onChange={setMaxCountHandler} value={settingMaxCount}/>
            <button onClick={buttonHandler}> set</button>
        </div>
    );
};

export default SettingCounter;