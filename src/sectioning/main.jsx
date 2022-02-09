import { useState } from "react";
import Contact from "../components/contact"
import ContactForm from "../components/contactForm";
import { mockResponse } from "../utlis/mockResponse"

const Main = () => {
    const response = mockResponse();
    // const [fields, setFields] = useState({
    //     name: '',
    //     address: '',
    //     zipCode: '',
    //     phone: '',
    //     email: ''
    // });

    const [fields, setFields] = useState();

    // const handleSubmit = (e, name, address, zipCode, phone, email) => {
    //     e.preventDefault();
    //     setFields({ name, address, zipCode, phone, email });
    // };

    const handleSubmit = (e, contactFields) => {
        e.preventDefault();
        setFields(contactFields)
    }

    const contacts = response.map((contact, index) => {
        return (
            <Contact contact={contact} key={index} />
        )
    });


    // return (
    //     <>
    //         <ContactForm action={handleSubmit} />
    //         <li>
    //             <h2>
    //                 {fields.name}
    //             </h2>
    //             <p>
    //                 {fields.address}
    //             </p>
    //             <p>
    //                 {fields.zipCode}
    //             </p>
    //             <p>
    //                 {fields.phone}
    //             </p>
    //             <p>
    //                 {fields.email}
    //             </p>
    //         </li>
    //             <ul>
    //                 {contacts}
    //             </ul>
    //     </>
    // );

    return (
        <>
            <ContactForm action={handleSubmit} />
            
             <ul>
                { fields && <Contact contact={fields} /> }
            </ul>
            
            <ul>{contacts}</ul>
        </>
    )
};

export default Main