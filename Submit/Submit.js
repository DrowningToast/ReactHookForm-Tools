import './Submit.css'

const Submit = ({ text, color, bgColor, size, fontSize}) => {

    // CSS
    const css = 
    {
        padding : '0.3rem',
        'boxSizing': 'border-box',
        'borderRadius': '1vw',
        border: 'none',
        padding : '0.75rem'
    }

    // Apply Width and Height if props are provided
    if (size) css.width = size?.x; css.height = size?.y;
    if (color) css.color = color
    if (bgColor) css.backgroundColor = bgColor
    if (fontSize != null) css.fontSize = fontSize

    return (
        <input className="inputSubmit" type="submit" onClick={onclick} value={text ? text : "Submit"} style={css}/>
    )

}

export default Submit