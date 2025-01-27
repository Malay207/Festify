import { useState, useContext } from 'react'
import Context from '../context/contextapi/Context'
import "../stylecomponent/sendwish.css"
import toast from 'react-hot-toast'
const Sendwishes = () => {
    const { Wishes } = useContext(Context)
    const [wish_userdata, setWish_userdata] = useState({
        name: "",
        email: "",
        message: ""
    })
    const handleInputChange = (e) => {
        setWish_userdata({ ...wish_userdata, [e.target.name]: e.target.value })
    }
    const handelsubmit = async () => {
        try {
            await Wishes(wish_userdata.name, wish_userdata.email, wish_userdata.message)
            setWish_userdata({
                name: "",
                email: "",
                message: ""
            })
        } catch (error) {
            console.error(error);
            alert("Failed to send wish")
        }
    }
    return (
        <>
            <div className="main">
                <div className="container">
                    {/* left */}
                    <div className="left">
                        <h1 >Send Wishes</h1>
                        <p className="text-white">Share your love with your loved ones by filling out our simple form below.</p>
                        {/* form */}
                        <form className="flex flex-col">
                            <input className="mb-3 text-white" type="text" placeholder="Your Name" name='name' value={wish_userdata.name} required onChange={handleInputChange} />
                            <input className="mb-5 text-white" type="email" placeholder="Your Email" name='email' value={wish_userdata.email} required onChange={handleInputChange} />
                            <textarea className="mb-5 " rows={6} placeholder="Write your message..." name='message' value={wish_userdata.message} required onChange={handleInputChange}></textarea>
                            <button className="mb-3 w-1/2 m-auto" type="submit" onClick={(e) => {
                                e.preventDefault()
                                if(localStorage.getItem("Holidaytheme")!==null) {
                                handelsubmit()
                                } else {
                                    toast.error("Please login to send wish")
                                }
                            }}>Send Wishes</button>
                        </form>
                    </div>
                    {/* right */}

                </div>
            </div>

        </>
    )
}

export default Sendwishes