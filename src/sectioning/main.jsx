import { useEffect, useState } from "react";
import ContactDetail from "../components/contactDetail"
import ContactForm from "../components/contactForm";
import { mockResponse } from "../utlis/mockResponse"
import { Route, Routes, useNavigate } from "react-router-dom";
import Modal from "../components/modal";
import ContactSummary from "../components/contactSummary";
import PrivacyPolicy from "../components/privacyPolicy";


const Main = () => {
    const navigate = useNavigate();
    const [fields, setFields] = useState([]);
    const [isShowModal, setIsShowModal] = useState(false);
    const [selectedContact, setSelectedContact] = useState(null);

    useEffect(() => {
        setFields(mockResponse())
    }, []);

    const handleSubmit = (contactFields) => {
        const updatedContacts = [...fields, contactFields]
        setFields(updatedContacts)
        setIsShowModal(true)
    };

    const handleClick = (e) => {
        const targetId = e.target.id;
        const selectedContact = fields.filter(field => {
        return field.id === targetId
        });
        setSelectedContact(selectedContact[0]);
    };

    const handleDelete = (id) => {
        const updatedContacts = fields.filter(field => field.id !== id);
        setFields(updatedContacts)
        setSelectedContact(null)
        navigate('/list')

    };

    return (
        <main>
            <div className="y-wrap">
                <Routes>
                    <Route path="/" element={<h1>Welcome to the Contact App</h1>} />
                    <Route path="add" element={<ContactForm action={handleSubmit} />} />
                    <Route path="list" element={<ContactSummary action={handleClick} fields={fields} />}>
                        {selectedContact && <Route path=":id" element={<ContactDetail action={handleDelete} selectedContact={selectedContact} />} />}
                    </Route>
                    <Route path="*" element={<h1>Page not Found</h1>} />
                    <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
                </Routes>
                {isShowModal && <Modal message="Contact added" handleCloseModal={setIsShowModal} />}
            </div>  
        </main>    
    );
};

export default Main
