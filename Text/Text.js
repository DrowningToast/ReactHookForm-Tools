import './Text.css'

const Text = ({r, id, placeholder, color, bgColor, size, fontSize}) => {

    // CSS
    const css = 
    {
        padding : '0.3rem',
        paddingLeft : '1rem',
        'boxSizing': 'border-box',
        'borderRadius': '0.55vw',
        border: 'none',
        width : '10rem'
    }

    // Apply Width and Height if props are provided
    if (size) css.width = size?.x; css.height = size?.y;
    if (color) css.color = color
    if (bgColor) css.backgroundColor = bgColor
    if (fontSize) css.fontSize = fontSize

    return (
        <input 
        {...r}
        id={id} 
        className="inputText" 
        placeholder={placeholder ? placeholder : 'Text'}
        style = {css}
        ></input>
    )
}

export default Text