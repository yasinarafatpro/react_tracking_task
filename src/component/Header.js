import PropTypes from 'prop-types'

const Header = ({title1}) => {
    return (
        <h1>{title1}</h1>
        )
}
Header.defaultProps={
    title1:'hello from Header'
}
Header.propTypes = {
    title1 : PropTypes.string,
}

export default Header
