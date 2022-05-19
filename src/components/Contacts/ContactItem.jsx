import React, { useContext, useState, useEffect } from 'react'
import {StyledContactItem, AvatarImage, NameField, EmailField, Input } from "./StyledComponents";
import ContactContext from "../store/ContactContext";


const ContactItem = (props) => {
    const contactCtx = useContext(ContactContext)
    const [isChecked, setIsChecked] = useState(false)
    useEffect(() => {
        if (contactCtx.selectedContacts.filter((e) => e.id === props.contact.id).length > 0){
            setIsChecked(true)
        }
    }, [])
    return (
        <StyledContactItem onClick={() => {setIsChecked(old => !old); contactCtx.select(props.contact)}}>
            <div style={{display: "flex"}}>
            <AvatarImage src={props.contact.avatar} onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src="https://cdn.vectorstock.com/i/1000x1000/23/70/man-avatar-icon-flat-vector-19152370.webp";
            }}/>
                <div style={{margin: "auto 0 auto 1rem"}}>
            <NameField>{props.contact.first_name} {props.contact.last_name}</NameField>
                    <EmailField>{props.contact.email}</EmailField>
                </div>
            </div>
            <Input checked={isChecked} />
        </StyledContactItem>
    );
}

export default ContactItem;