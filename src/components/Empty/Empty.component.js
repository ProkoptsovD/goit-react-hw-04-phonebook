import PropTypes from 'prop-types';
import { Message } from "./Empty.styled";

const Empty = ({ message }) => {
    return (
        <Message>
            {message}
        </Message>
    )
}

Empty.propTypes = {
    message: PropTypes.string.isRequired,
}

export default Empty;