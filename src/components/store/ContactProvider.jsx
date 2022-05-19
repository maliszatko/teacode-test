import ContactContext from "./ContactContext";
import { useReducer } from 'react'
import { filter } from 'lodash'

const defaultContactState = {
    selectedContacts: [],
    displayedContacts: [],
    allContacts: [],
}

const contactReducer = (state, action) => {
    switch (action.type) {
        case "CLICK":
            if (state.selectedContacts.includes(action.contact)){
                return {selectedContacts: state.selectedContacts.filter(el => {return el !== action.contact}), displayedContacts: state.displayedContacts}
            }
            else {
                const updatedItems = state.selectedContacts.concat(action.contact);
                return {selectedContacts: updatedItems, displayedContacts: state.displayedContacts, allContacts: state.allContacts}
            }
        case "INITIALIZE":
            return {selectedContacts: state.selectedContacts, displayedContacts: action.contacts, allContacts: action.contacts}
        case "FILTER":
            const filteredContacts = filter(state.allContacts, v => v.first_name.toLowerCase().includes(action.searchTerm))
            return {selectedContacts: state.selectedContacts, displayedContacts: filteredContacts, allContacts: state.allContacts}

    }
}

export const ContactProvider = (props) => {
    const [state, dispatch] = useReducer(contactReducer, defaultContactState);
    console.log(state)
    const selectContactHandler = (contact) => {
        dispatch({type: "CLICK", contact: contact})
    }
    const initializeContactHandler = (data) => {
        dispatch({type: "INITIALIZE", contacts: data})
    }
    const filterContactHandler = (contact) => {
        dispatch({type: "FILTER", searchTerm: contact})
    }

    const cartContext={
        selectedContacts: state.selectedContacts,
        displayedContacts: state.displayedContacts,
        allContacts: state.allContacts,
        select: selectContactHandler,
        initialize: initializeContactHandler,
        filter: filterContactHandler,
    }
    return <ContactContext.Provider value={cartContext}>{props.children}</ContactContext.Provider>
}

export default ContactProvider;