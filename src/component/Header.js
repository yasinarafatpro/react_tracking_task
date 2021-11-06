import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title1,onAdd,showAdd}) => {
    return (
        <header className='header'> 
            <h1>{title1}</h1>
            <Button 
            color={showAdd ?'red':'green'}
            text={showAdd ? 'Close' :'Add new Task'}
            onClick={onAdd}
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
