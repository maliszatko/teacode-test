import React, { useEffect, useContext } from 'react'
import { StyledContactList, ContactSection } from "./StyledComponents";
import ContactItem from "./ContactItem";
import ContactContext from "../store/ContactContext";
import TextField from "@mui/material/TextField";
import { trackPromise } from 'react-promise-tracker';


const ContactList = () => {

    const contactCtx = useContext(ContactContext)
    console.log(contactCtx.selectedContacts.map(contact => contact.id))

    useEffect(() => {
        trackPromise(fetch('https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json')
            .then(response => { return response.json()})
            .then(data => contactCtx.initialize(data)))
    }, [])
    const contactitem = contactCtx.displayedContacts.map(contact => {return <ContactItem key={contact.id} contact={contact}/>})
    const onChangeHandler = (e) => {
        setTimeout(() => contactCtx.filter(e.target.value.toLowerCase()), 500)
        return () => {}
    }
    return (
        <ContactSection>
            <TextField
                id="outlined-basic"
                variant="outlined"
                fullWidth
                label="Search"
                onChange={onChangeHandler}
            />
            <StyledContactList>{contactitem}</StyledContactList>
        </ContactSection>
    );
}

export default ContactList;