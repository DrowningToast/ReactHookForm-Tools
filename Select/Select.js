import {useState} from 'react'

const Select = ({r, id, color, bgColor, size, fontSize, visibleSize, givenOptions}) => {

    let [options, setOptions] = useState([])
    let temp = []
    
    // CSS
    const css = 
    {
        padding : '0.3rem',
        paddingLeft : '1rem',
        'boxSizing': 'border-box',
        'borderRadius': '0.55vw',
        border: 'none',
        minWidth : '50px'
    }

    // Apply Width and Height if props are provided
    if (size) css.width = size?.x; css.height = size?.y;
    if (color) css.color = color
    if (bgColor) css.backgroundColor = bgColor
    if (fontSize) css.fontSize = fontSize

    // Distribute givenOptions items to array of JSX in "options" state
    if (options.length === 0) {
        givenOptions?.forEach(
            (option)=>{
                let newOption = (
                    <option key={option.value} value={option.value}>{option.display}</option>
                )
                temp.push(newOption)
            }
        )
        setOptions(temp)
    }
    

    return (
        <select style={css} {...r} id={id} className="inputSelect" size={visibleSize}>
            {options}
        </select>
    )

}

export default Select