import React from "react";
import { ContactCard } from "./ContactCard";

export const ContactList = ({ contacts }) => {
  const renderedContacts = contacts.map((contacts, index) => {
    return (
      <>
        <ContactCard key={index} contacts={contacts} />
      </>
    );
  });
  return <div>{renderedContacts}</div>;
};
