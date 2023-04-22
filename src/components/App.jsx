import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import React, { Component } from 'react';
import BoxApp from './App.styled';
import Section from './Section/Section';
import Form from './Form/Form';
import initialContact from './data/contacts.json';
import FilterContacts from './FilterContact/FilterContact';
import ContactsList from './ContactsList/ContactsList';

class App extends Component {
  state = {
    contacts: initialContact,
    filter: '',
  };

  componentDidMount() {
    const saveContacts = JSON.parse(localStorage.getItem('CONTACTS'));
    
    if (saveContacts) {
      this.setState({ contacts: saveContacts })
    }

  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('CONTACTS', JSON.stringify(this.state.contacts))
    }
  }

  addContact = value => {
    for (const contact of this.state.contacts) {
      if (value.name === contact.name) {
        return alert(`${value.name} is already in contact`);
      } else if (value.number === contact.number) {
        return alert(`${value.name} is already in contact`);
      }
    }
    this.setState(prevState => ({
      contacts: [{ ...value, id: nanoid() }, ...prevState.contacts],
    }));
    Notiflix.Notify.success(
      'You have added a new contact to your contact list'
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  onChangeFind = e => {
    this.setState({ filter: e.target.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <BoxApp>
        <Section title="Phonebook">
          <Form onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <FilterContacts onChangeFind={this.onChangeFind} value={filter} />
          <ContactsList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </BoxApp>
    );
  }
}

export default App;
