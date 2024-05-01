import React from "react";

export const ContactCard = ({ contacts, deleteContact, key }) => {
  const handleDelete = () => {
    deleteContact(contacts.id);
  };
  return (
    <div key={key} className="flex items-start ">
      <img
        src="https://static.vecteezy.com/system/resources/previews/000/550/535/original/user-icon-vector.jpg"
        style={{
          width: "50px",
          height: "50px",
        }}
      />
      <div
        className="divide-y divide-gray-200 dark:divide-gray-700"
        style={{
          marginLeft: "17px",
        }}
      >
        <h1 className="text-sm font-medium text-gray-900 truncate dark:text-white">
          {contacts.name}
        </h1>
        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
          {contacts.email}
        </p>
      </div>
      <div>
        <img
          src="https://www.nicepng.com/png/detail/208-2086588_trash-can-icon.png"
          style={{
            width: "20px",
            height: "20px",
            marginTop: "7px",
            marginLeft: "170px",
          }}
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};
