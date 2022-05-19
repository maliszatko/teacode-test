import React from 'react'

const ContactContext = React.createContext({
    selectedContacts: [],
    displayedContacts: [],
    allContacts: [],
    select: () => {},
    initialize: () => {},
    filter: () => {},
});

export default ContactContext