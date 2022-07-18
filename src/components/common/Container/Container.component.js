import PropTypes from 'prop-types';
import { CenteredContainer } from './Container.styled';

const Container = ({ children, className }) => {
    return (
        <CenteredContainer
            className={`container ${className || ''}`}
        >
            {children}
        </CenteredContainer>
    )
}

Container.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}

export default Container;