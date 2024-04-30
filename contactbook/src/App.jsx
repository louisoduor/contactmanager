import { useEffect, useState } from "react";

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
    setContacts([...contacts, newContact]);
  };

  // Store contacts in local storage whenever contacts state changes
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <Header />
      <AddContact addContact={addContact} />
      <ContactList contacts={contacts} />
    </>
  );
}

export default App;
