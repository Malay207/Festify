import { useContext, useState, useEffect } from "react";
import Context from "../context/contextapi/Context";
import { Link } from "react-router-dom";
import "../stylecomponent/navbar.css"
import boyavatar from "../assets/backgroundvideo/boyavatar.jpg"
import girlavatar from "../assets/backgroundvideo/girlavatar.jpg"
const ResponsiveNavBar = () => {
    const [showPopup, setShowPopup] = useState(false)
    const context = useContext(Context)
    const { getuserdata, userData } = context

    const handleLogout = () => {
        localStorage.removeItem("Holidaytheme")
        window.location.reload()
    }
    useEffect(() => {
        if (localStorage.getItem("Holidaytheme")) {
            getuserdata();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            <nav className="nav sticky top-0 z-10">
                {/* logo */}
                <div className="flex flex-row items-center p-4 justify-around">
                    <Link to="/"> <h1 className="text-white font-extrabold text-2xl">Festify</h1></Link>
                    <div className="nav_menu_mid">
                        <ul className="flex flex-row justify-between">
                            <Link to="/event"><li className="mx-5 text-white font-bold">Events</li></Link>
                            <Link to="/secretesanta"><li className="mx-5 text-white font-bold">Gift Exchange</li></Link>
                            <Link to="/sendwhishes"><li className="mx-5 text-white font-bold">send wishes</li></Link>
                            <li className="mx-5 text-white font-bold">Games</li>
                        </ul>
                        {/* avatar */}
                    </div>
                    {
                        localStorage.getItem("Holidaytheme") ? <div className="nav_avatar flex flex-row items-center" onClick={() => setShowPopup(!showPopup)}>
                            <img src={userData.gender === "male" ? boyavatar : girlavatar} alt="avatar" />
                        </div>

                            : <div className="flex items-center">
                                <Link to="auth"><div className="mx-3 text-white border rounded-xl px-5 py-2 font-extrabold">Login</div></Link>
                                <div>

                                </div>
                            </div>
                    }
                    {showPopup && (
                        <div className="popup z-10 bg-white rounded-lg shadow-lg absolute top-16 right-4 m-3 p-5">
                            <div className="popup-content">
                                <h3 className="font-bold mb-3">Hello, {userData.name} 👋</h3>
                                <button className="text-left logout-btn font-bold bg-gray-400" onClick={handleLogout}>
                                    Log Out
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </>
    )

}
export default ResponsiveNavBar;