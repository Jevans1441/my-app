
const ContactDetail = ({ selectedContact }) => {
    const { name, address, city, state, zipCode, phone, email } = selectedContact;
    return (
        <>
            {
                selectedContact && (
                    <li>
                        <h2>{name}</h2>
                        <p>{address}</p>
                        <p>{city}, {state}</p>
                        <p>{zipCode}</p>
                        <p>{phone}</p>
                        <p>{email}</p>
                    </li>
                )}
        </>
    );
};

export default ContactDetail;