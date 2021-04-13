import './Error.css'

const Error = ({children, color, fontSize, margin, col}) => {

    let css = {
        margin : margin ? margin : '0 0.4rem',
        fontSize : fontSize ? fontSize : '0.7rem',
        color : color ? color : 'red',
        display : 'inline-block',
        position : 'absolute',
        overflow : 'visible' ,
        whiteSpace: 'nowrap',
        margin : 0
    }

    

    return (
        <small style={css} className="outputError">
            {children ? children : "An error has been occured"}
        </small>
    )
}

export default Error