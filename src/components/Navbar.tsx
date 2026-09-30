import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="bg-blue-200">
            {/* desktop navbar */}
            <div className="hidden md:flex">
                this is desktop nav
            </div>
            
            {/* mobile nav */}
            <div className="md:hidden">
                this is mobile nav
            </div>
        </div>
    )
}

export default Navbar
