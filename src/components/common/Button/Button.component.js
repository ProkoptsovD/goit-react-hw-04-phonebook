import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

const Button = ({ children, onClick }) => {
    return (
        <Btn
            onClick={onClick}
        >
            {children}
        </Btn>
    )
};

Button.propTypes = {
    children: PropTypes.any,
    onClick: PropTypes.func
}

export default Button;