import { useState } from 'react'
import './Checkboxes.css'

// givenOptions = [{
//     display,
//     value
// },{
//     display,
//     value
// }]

const Checkboxes = ({givenOptions, requirements, defaultValues, color, bgColor, size, fontSize, fontColor, margin, textMargin}) => {

    let [checkboxes, setCheckboxes] = useState([])

    if (givenOptions.length === 0) return
    
    // CSS
    const css = 
    {
        padding : '0.3rem',
        paddingLeft : '1rem',
        'boxSizing': 'border-box',
        'borderRadius': '0.55vw',
        border: 'none',
        minWidth : '10px'
    }

    // Apply Width and Height if props are provided
    if (size) css.width = size?.x; css.height = size?.y;
    if (color) css.color = color
    if (bgColor) css.backgroundColor = bgColor
    if (margin) css.margin = margin

    const subCss = {
        fontSize : '1rem',
        margin : 'auto 0.4rem'
    }

    if (fontColor) subCss.fonColor = fontColor
    if (fontSize) subCss.fontSize = fontSize
    if (textMargin) subCss.margin = textMargin

    if (fontSize) css.fontSize = fontSize

    let placeholder = givenOptions.map(
        (option) => {
            return (
                <div>
                    <input id={option.display} key={option.value} 
                    type="checkbox" {...register(option.value, requirements ? requirements : null)} 
                    checked = {defaultValues[option.value] ? true : false}
                    style = {css}
                    className="inputCheckbox"
                    />
                    <label htmlFor={option.name} style={subCss}>{option.name}</label>
                </div>
            )
        }
    )

    setCheckboxes(placeholder)

    return (
        <div>
            {checkboxes}
        </div>
    )

}

export default Checkboxes