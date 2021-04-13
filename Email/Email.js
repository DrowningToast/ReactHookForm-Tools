const Email = ({r, id, placeholder, color, bgColor, size, fontSize}) => {

    // CSS
    const css = 
    {
        padding : '0.3rem',
        paddingLeft : '1rem',
        'boxSizing': 'border-box',
        'borderRadius': '0.55vw',
        border : 0
        
    }
    // Apply Width and Height if props are provided
    if (size) css.width = size?.x; css.height = size?.y;
    if (color) css.color = color
    if (bgColor) css.backgroundColor = bgColor
    if (fontSize) css.fontSize = fontSize

    return (
        <input 
        {...r}
        type="email" 
        id={id} 
        className="inputEmail" 
        placeholder={placeholder ? placeholder : 'example@email.com'}
        style = {css}
        ></input>
    )
}

export default Email