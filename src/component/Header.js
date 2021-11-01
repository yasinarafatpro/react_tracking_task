import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title1 }) => {
    const onClick=()=>{
        console.log('click')
    }
    return (
        <header className='header'> 
            <h1>{title1}</h1>
            <Button 
            color='green'
            text='click!'
            onClick={onClick}
            />
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
