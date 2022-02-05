import Contact from "../components/contact"
import Counter from "../components/counter";
import { mockResponse } from "../utlis/mockResponse"

const Main = () => {
    const response = mockResponse();
    const contacts = response.map((contact, index) => {
        return (
            <Contact contact={contact} key={index} />
        )
       });


    return (
        <>
            <Counter />
            <ul>{contacts}</ul>
        </>
    )
}

export default Main