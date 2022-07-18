import PropTypes from 'prop-types';
import Button from 'components/common/Button';
import { ContactCard, Name, Phone } from './Contact.styled';

const Contact = ({ name, number }) => {
    return (
        <ContactCard>
            <div>
                <Name>
                    {name}
                </Name>
                <Phone>
                    {number}
                </Phone>
            </div>
            <Button>
                &#9587;
            </Button>
        </ContactCard>
    )
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}

export default Contact;