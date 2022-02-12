import { useEffect, useState } from "react";
import ContactDetail from "../components/contactDetail"
import ContactForm from "../components/contactForm";
import { mockResponse } from "../utlis/mockResponse"
import { Route, Routes } from "react-router-dom";
import Modal from "../components/modal";
import ContactSummary from "../components/contactSummary";


const Main = () => {
    const [fields, setFields] = useState([]);
    const [isShowModal, setIsShowModal] = useState(false)

    useEffect(() => {
        setFields(mockResponse())
    }, []);

    const handleSubmit = (contactFields) => {
        const updatedContacts = [...fields, contactFields]
        setFields(updatedContacts)
        setIsShowModal(true)
    };

    return (
        <>
            <Routes>
                <Route path="/" element={<h1>Welcome to the Contact App</h1>} />
                <Route path="add" element={<ContactForm action={handleSubmit} />} />
                <Route path="list" element={<ContactSummary fields={fields} />}>
                    <Route path=":id" element={<ContactDetail />} />
                </Route>
                <Route path="*" element={<h1>Error 404</h1>} />
            </Routes>
            {isShowModal && <Modal message="Contact added" handleCloseModal={setIsShowModal} />}
        </>            
    );
};

export default Main