// import React from 'react'
import PropTypes from 'prop-types'

const Header = ({title}) => {
    return (
        <div>
            <h1>{title} Task Tracker</h1>
        </div>
    )
}

Header.defaultProps = {
    title: 'default props',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// css in js
// const headingStyle = {
//     color: 'red',
//     backgroundColor:'lightblue'
// }
export default Header
