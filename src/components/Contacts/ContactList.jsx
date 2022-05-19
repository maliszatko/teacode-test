import React, { useMemo, useEffect, useContext } from 'react'
import { sortBy } from "lodash"
import { StyledContactList, ContactSection } from "./StyledComponents";
import ContactItem from "./ContactItem";
import ContactContext from "../store/ContactContext";
import TextField from "@mui/material/TextField";

const ContactList = () => {

    const contactCtx = useContext(ContactContext)

    useEffect(() => {
        console.log("REFRESH")
        fetch('https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json')
            .then(response => { return response.json()})
            .then(data => contactCtx.initialize(data))
    }, [])
    const sortedList = useMemo(() => {
        return sortBy(contactCtx.displayedContacts, ['last_name'])
    })
    const contactitem = sortedList.map(contact => {return <ContactItem key={contact.id} onClick={contactCtx.select.bind(null, contact)} contact={contact}/>})
    const onChangeHandler = (e) => {
        contactCtx.filter(e.target.value.toLowerCase())
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