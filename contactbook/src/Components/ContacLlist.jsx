import React from "react";
import { ContactCard } from "./ContactCard";

export const ContactList = ({ contacts, deleteContact }) => {
  const renderedContacts = contacts.map((contact) => (
    <ContactCard
      key={contact.id} 
      contacts={contact}
      deleteContact={deleteContact}
    />
  ));
  return <div>{renderedContacts}</div>;
};
