import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { Form, Wrapper, AddContact, Label, Input } from './ContactForm.styled';
import { nanoid } from "nanoid";
import { storage } from "services";

const CONTACT_NAME_KEY = 'contact-name';
const CONTACT_NUMBER_KEY = 'contact-number';

const initializeName = () => storage.load(CONTACT_NAME_KEY) ?? '';
const initializeNumber = () => storage.load(CONTACT_NUMBER_KEY) ?? '';

const ContactForm = ({ addContact }) => {
    const [ name, setName ] = useState(initializeName);
    const [ number, setNumber ] = useState(initializeNumber);

    const contactMap = {
        'name': (name) => setName(name),
        'number': (number) => setNumber(number)
    }

    useEffect(() => {
        storage.save(CONTACT_NAME_KEY, name);
        storage.save(CONTACT_NUMBER_KEY, number);
    }, [name, number]);

    const handleInputTypedValue = (e) => {
        const { name, value } = e.target;

        contactMap[name](value);
    }

    const reset = () => {
        setName('');
        setNumber('');
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();

        const id = nanoid();
        const wasAdded = addContact({ id, name, number });
        
        wasAdded && reset();
    }

    return (
        <Form
            onSubmit={handleFormSubmit}
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
                    onChange={handleInputTypedValue}
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
                    onChange={handleInputTypedValue}
                />
            </Wrapper>
            <AddContact type="submit">
                Add contact
            </AddContact>
        </Form>
    )
}

ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired,
}

export default ContactForm;