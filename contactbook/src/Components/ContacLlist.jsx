import React from "react";
import { ContactCard } from "./ContactCard";

export const ContactList = ({ contacts, deleteContact }) => {
  const renderedContacts = contacts.map((contacts) => {
    return (
      <>
        <ContactCard
          key={contacts.id}
          contacts={contacts}
          deleteContact={deleteContact}
        />
      </>
    );
  });
  return <div>{renderedContacts}</div>;
};
