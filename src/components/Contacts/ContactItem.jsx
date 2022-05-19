import React from 'react'
import {StyledContactItem, AvatarImage, NameField, EmailField, Input } from "./StyledComponents";

const ContactItem = (props) => {

    return (
        <StyledContactItem>
            <div style={{display: "flex"}}>
            <AvatarImage src={props.contact.avatar} onerror="this.src='https://cdn.vectorstock.com/i/1000x1000/23/70/man-avatar-icon-flat-vector-19152370.webp"/>
                <div style={{margin: "auto 0 auto 1rem"}}>
            <NameField>{props.contact.first_name} {props.contact.last_name}</NameField>
                    <EmailField>{props.contact.email}</EmailField>
                </div>
            </div>
            <Input  onClick={props.onClick} type="checkbox"/>
        </StyledContactItem>
    );
}

export default ContactItem;