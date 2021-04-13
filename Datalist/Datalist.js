import {useEffect, useState} from 'react'

// givenOptions = [
//     optionA, optionB
// ]

const Datalist = ({r, givenOptions, id, placeholder, size, color, bgColor, fontSize, }) => {
    let [options, setOptions] = useState([])

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

    useEffect(
        () => {
            let temp = givenOptions.map(
                (option) => {
                    return (
                        <option key={option} value={option}></option>
                    )
                }
            )
            setOptions(temp)
        },[]
    )

    console.log(r)

    return (
        <div className="inputDatalistContainer">
            <input id={id} className="inputDatalist" style={css} type="datalist" {...r} list={`_${id}`} placeholder={placeholder ? placeholder : "Suggests available . . ."} />
            <datalist id={`_${id}`}>
                {options}
            </datalist>
        </div>
    )

}

export default Datalist