import { NavLink } from "react-router-dom"

const Footer = () => {
    return (
        <footer>
            <div className="y-wrap">
                <NavLink className="policy-link" to='/PrivacyPolicy'>Privacy Policy</NavLink>
            </div>
        </footer>
    )
}

export default Footer