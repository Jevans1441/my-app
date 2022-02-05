import { useState } from "react";
import Contact from "../components/contact"
import ContactForm from "../components/contactForm";
import { mockResponse } from "../utlis/mockResponse"

const Main = () => {
    const response = mockResponse();
    const [fields, setFields] = useState();

    const handleSubmit = (e, name) => {
        e.preventDefault();
        setFields(name)
    };

    const contacts = response.map((contact, index) => {
        return (
            <Contact contact={contact} key={index} />
        )
    });


    return (
        <>
            <ContactForm action={handleSubmit} />
            <p>{fields}</p>
            <ul>{contacts}</ul>
        </>
    );
};

export default Main