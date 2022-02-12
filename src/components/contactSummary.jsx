import { NavLink, Outlet } from "react-router-dom";

const ContactSummary = ({ fields, action }) => {
    
   const contacts = fields.map(contact => {
       return (
           <li key={contact.id}>
               <NavLink id={contact.id} to={contact.id}>{contact.name}</NavLink>
           </li>
       );
    });
   
    return (
        <>
        <ul className="contacts" onClick={action}>{contacts}</ul>
            <Outlet />
        </>
    );
};

export default ContactSummary;