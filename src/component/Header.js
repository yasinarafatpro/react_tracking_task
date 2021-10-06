import PropTypes from 'prop-types'

const Header = ({ title1 }) => {
    return (
        <header className='header'> 
            <h1>{title1}</h1>
            <h1>{title1}</h1>
        </header>
    )
}
Header.defaultProps = {
    title1: 'Task Tracker'
}
Header.propTypes = {
    title1: PropTypes.string.isRequired,
}
// const headStyling ={
//     color:'red',
// }

export default Header
