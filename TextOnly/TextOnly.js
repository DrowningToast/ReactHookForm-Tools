const TextOnly = ({r, id, placeholder, color, bgColor, size, fontSize}) => {

    // CSS
    const css = 
    {
        padding : '0.3rem',
        paddingLeft : '1rem',
        'boxSizing': 'border-box',
        'borderRadius': '0.55vw',
        border: 'none',
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
        className="inputTextOnly" 
        placeholder={placeholder ? placeholder : 'Alphabetical Only'}
        pattern = {/^[A-Za-z]+$/i}
        style = {css}
        ></input>        
    )
}

export default TextOnly