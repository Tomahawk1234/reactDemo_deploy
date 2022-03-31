import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title}) => {
  return (
    <header>
      <h1>{title}</h1>
      <button color='red' >Clicke Me</button>
    </header>
  )

  
}
Header.defaultProps ={
    title : PropTypes.string
}

Header.propTypes = {
    title : PropTypes.string,
  }

export default Header
