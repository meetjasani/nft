import React, { useState } from 'react';
import Switch from "react-switch";

const ToggleSwitch = (props) => {

    const { label, offColor, onColor, height, width, uncheckedIcon, checkedIcon, className } = props;

    const [checked, setChecked] = useState(false)

    const handleChange = () => {
        setChecked(!checked);
    }



    return (
        <>
            <label className='d-flex flex-grow-1 justify-content-between align-items-center' >
                <span className='me-1' style={{ fontSize: '12px', fontWeight: "600" }} >{label}</span>
                <Switch
                    onChange={handleChange}
                    checked={checked}
                    offColor={'#41454E'}
                    onColor={'#03DB80'}
                    height={height}
                    width={width}
                    // uncheckedIcon={uncheckedIcon}
                    // checkedIcon={checkedIcon}
                    offHandleColor="#EBF0F0"
                    onHandleColor="#EBF0F0"
                    uncheckedIcon={<span style={{ color: '#FFF', fontSize: "10px", marginLeft: "5px" }} >Off</span>}
                    checkedIcon={<span style={{ color: '#FFF', fontSize: "10px", marginLeft: "10px" }} >On</span>}
                    activeBoxShadow="0px"
                // className={className}
                // handleDiameter={'2'}
                />
            </label>
        </>
    )
}

export default ToggleSwitch