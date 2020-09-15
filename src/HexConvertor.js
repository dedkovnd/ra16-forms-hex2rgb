import React, {useState} from "react";
import {ScreenColor} from "./ColorsScreen";

export function Convertor(props) {
    const [form, setForm] = useState({
        name: "#22aa11"
    });

    const handleSubmit = evt => {
        evt.preventDefault()
        console.log(form.name)
    }
    const handleChangeSubmit = evt => {
        evt.persist()
        setForm(prevForm=>({...prevForm, name: evt.target.value}))
    }
    return (
        <div className="back" style={{backgroundColor: form.name}}>
            <div className="main">
                <form className="hex-form" onSubmit={handleSubmit}>
                    <input id="hex" name="hex" value={form.name} onChange={handleChangeSubmit}/>
                </form>
                <ScreenColor rgbstring={form.name}/>
            </div>
        </div>
    )
}