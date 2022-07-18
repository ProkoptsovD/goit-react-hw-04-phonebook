import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import { theme } from 'theme';
import { storage } from 'services';

import Container from './common/Container';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Empty from './Empty';

import styles from './App.module.css';
import 'react-toastify/dist/ReactToastify.css';

const PHONE_BOOK_KEY = 'phonebook';
const initializeContacts = () => storage.load(PHONE_BOOK_KEY) ?? [];

export const App = () => {
  const [ contacts, setContacts ] = useState(initializeContacts);
  const [ filter, setFilter ] = useState('');

  useEffect(() => {
    storage.save(PHONE_BOOK_KEY, contacts);

  }, [contacts]);

  const addContact = (newContact) => {

    if (!isContactUnique(newContact)) {
      toast.error(`${newContact.name} is already in contacts`);

      return false;
    }

    setContacts(prevContacts => [ newContact, ...prevContacts ]);
    return true;
  }
  const deleteContact = (contactId) => setContacts(prevContacts => prevContacts.filter(({ id }) => id !== contactId));

  function isContactUnique (newContact) {
      return !contacts.some(({ name }) => name.toLowerCase() === newContact.name.toLowerCase());
  }

    const isEmpty = contacts.length === 0;
    const filteredContacts = contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));

    return (
      <ThemeProvider theme={theme}>
        <Container>
          <h1
            className={styles.title}
          >
            Phonebook
          </h1>
          <ContactForm
            addContact={addContact}
          />
          
          <h2
            className={styles.title}
          >
            Contacts
          </h2>
          <Filter
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
          />
          {
            !isEmpty
              ? <ContactList
                  deleteContact={deleteContact}
                  contactList={ filter ? filteredContacts : contacts}
                />
              : <Empty message="Your phonebook is empty..."/>
          }
        </Container>
        <ToastContainer />
      </ThemeProvider>
    );
};
