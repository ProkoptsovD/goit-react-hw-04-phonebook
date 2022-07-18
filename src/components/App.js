import { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import { theme } from 'theme';

import Container from './common/Container';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

import 'react-toastify/dist/ReactToastify.css';
import styles from './App.module.css';
import Empty from './Empty';
import { storage } from 'services';

export class App extends Component {
  static PHONE_BOOK_KEY = 'phonebook';

  state = {
    contacts: [],
    filter: ''
  }
  componentDidMount () {
    const contacts = storage.load(App.PHONE_BOOK_KEY) ?? [];
    this.setState({ contacts });
  }
  componentDidUpdate () {
    const { contacts } = this.state;

    storage.save(App.PHONE_BOOK_KEY, contacts);
  }
  addContact = (newContact) => {
    if (!this.isContactUnique(newContact)) {
      toast.error(`${newContact.name} is already in contacts`);
      return false;
    }
    
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact]
    }))
    return true;
  }
  deleteContact = (contactId) => this.setState(prevState => ({
    ...prevState,
    contacts: prevState.contacts.filter(({ id }) => id !== contactId)
  }))
  isContactUnique = (newContact) => !this.state.contacts.some(({ name }) => name.toLowerCase() === newContact.name.toLowerCase());
  setFilter = (e) => this.setState({ filter: e.target.value });
  
  render () {
    const { contacts, filter } = this.state;
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
            addContact={this.addContact}
          />
          
          <h2
            className={styles.title}
          >
            Contacts
          </h2>
          <Filter
            onChange={this.setFilter}
            value={filter}
          />
          {
            contacts.length
              ? <ContactList
                  deleteContact={this.deleteContact}
                  contactList={ filter ? filteredContacts : contacts}
                />
              : <Empty message="Your phonebook is empty..."/>
          }
        </Container>
        <ToastContainer />
      </ThemeProvider>
    );
  }
};
