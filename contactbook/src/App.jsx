import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Import uuidv4

import "./App.css";
import { Header } from "./Components/Header";
import { AddContact } from "./Components/Addcontact";
import { ContactList } from "./Components/ContacLlist";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  // Retrieving contacts from local storage
  const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  // Initialize state with retrieved contacts if available, otherwise initialize with an empty array

  const [contacts, setContacts] = useState(retrieveContacts || []);

  const addContact = (newContact) => {
    newContact.id = uuidv4();
    setContacts([...contacts, newContact]);
  };

  // Store contacts in local storage whenever contacts state changes
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  //delete item function
  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <>
      <Header />
      <AddContact addContact={addContact} />
      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </>
  );
}

export default App;
