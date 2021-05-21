// import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color, text}) => {
    const onClick = () => {
        console.log('click');
    }
    return (
        <button onClick={onClick} style={{ backgroundColor: color }} className='btn'>{text}</button>
    )
}

Button.defaultProps = {
    color: 'stealblue',
}

Button.prototype = {
    text: PropTypes.string,
    color: PropTypes.string
}
export default Button
