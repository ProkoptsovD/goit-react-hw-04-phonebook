import { Component } from "react";
import PropTypes from 'prop-types';
import { Form, Wrapper, AddContact, Label, Input } from './ContactForm.styled';
import { nanoid } from "nanoid";
import { storage } from "services";

class ContactForm extends Component {
    static propTypes = {
        addContact: PropTypes.func.isRequired,
    }
    static CONTACT_FORM_KEY = 'contact-form';
    state = {
        name: '',
        number: ''
    }
    componentDidMount () {
        const contact = storage.load(ContactForm.CONTACT_FORM_KEY);
        contact && this.setState(contact);
    }
    componentDidUpdate () {
        storage.save(ContactForm.CONTACT_FORM_KEY, this.state);
    }
    handleInputTypedValue = (e) => {
        const { name, value } = e.target;

        this.setState({
            [name]: value,
        })
    }
    handleFormSubmit = (e) => {
        e.preventDefault();

        const { addContact } = this.props;
        const id = nanoid();
        const { name, number } = this.state;

        const wasAdded = addContact({ id, name, number });
        
        wasAdded && this.setState({
                        name: '',
                        number: ''
                    })
    }
    render() {
        const { name, number } = this.state;

        return (
            <Form
                onSubmit={this.handleFormSubmit}
            >
                <Wrapper>
                    <Label
                        htmlFor="name"
                    >
                        Name
                    </Label>
                    <Input
                        id="name"
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
                        onChange={this.handleInputTypedValue}
                    />
                    <Label
                        htmlFor="number"
                    >
                        Number
                    </Label>
                    <Input
                        id="number"
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={number}
                        onChange={this.handleInputTypedValue}
                    />
                </Wrapper>
                <AddContact type="submit">
                    Add contact
                </AddContact>
            </Form>
        )
    }
}

export default ContactForm;