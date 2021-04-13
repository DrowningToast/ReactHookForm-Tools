const Tel = ({r, id, placeholder, color, bgColor, size, fontSize}) => {

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
        type="tel"
        {...r}
        id={id} 
        className="inputTel" 
        placeholder={placeholder ? placeholder : '01234567899'}
        pattern={/^[0-9]*$/i}
        style = {css}
        ></input>
    )
}

export default Tel