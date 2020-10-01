import React from "react";

export function ScreenColor({rgbstring}){
    function trans(rgbstring) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(rgbstring);
        if (result === null) {
            return "это ошибка"
        }
        return `rgb(` + parseInt(result[1], 16)+ `, ` + parseInt(result[2], 16)+ `, ` + parseInt(result[3], 16) + `)`

    }
    return (
            <div className="rgb-block">{trans(rgbstring)}</div>
    )
}