import PropTypes from 'prop-types';
import { Input, Label } from 'components/ContactForm/ContactForm.styled';
const Filter = ({ onChange, value }) => {
    return (
        <>
            <Label
                htmlFor='filter'
            >
                Find contacts by name
            </Label>
            <Input
                id="filter"
                type="text"
                name="filter"
                onChange={onChange}
                value={value}
            />
        </>
    )
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}

export default Filter;