import { useState } from 'react';
import "../stylecomponent/auth.css"
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const navigate = useNavigate();
    const [isSignUp, setIsSignUp] = useState(false);
    const [userdata, setUserdata] = useState({
        name: "",
        email: "",
        password: "",
        gender: ""
    });
    const handelonchange = (e) => {
        setUserdata({ ...userdata, [e.target.name]: e.target.value })
    }

    const toggleForm = () => setIsSignUp((prev) => !prev);

    const formSubmit = async (e) => {
        e.preventDefault();
        try {

            if (isSignUp) {
                if (!userdata.name || !userdata.email || !userdata.password) {
                    toast.error("Please fill all the fields below");
                    return;
                }
                const response = await fetch("https://festify-backend-pu14.onrender.com/auth/createuser", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: userdata.name,
                        email: userdata.email,
                        password: userdata.password,
                        gender: userdata.gender
                    })
                })
                setUserdata({
                    name: "",
                    email: "",
                    password: "",
                    gender: ""
                });

                const data = await response.json();
                if (!data.success) {
                    toast.error("There is any error in Serverside. Please try again Later");
                    return;
                }
                localStorage.setItem("Holidaytheme", data.token);
                toast.success("User Created Successfully");
                navigate("/");
                window.location.reload();
            }
            else {
                if (!userdata.email || !userdata.password) {
                    toast.error("Please fill all the fields below");
                    return;
                }
                const response = await fetch("https://festify-backend-pu14.onrender.com/auth/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: userdata.email,
                        password: userdata.password
                    })
                });
                setUserdata({
                    name: "",
                    email: "",
                    password: "",
                    gender: ""
                });
                const data = await response.json();
                if (!data.success) {
                    toast.error("Invalid Credentials");
                    return;
                }
                localStorage.setItem("Holidaytheme", data.token);
                toast.success("Logged In Successfully");
                navigate("/");
                window.location.reload();

            }
        } catch (error) {
            toast.error("There is any error");
            console.log(error)

        }
    }


    return (
        <>

            <div className="container">
                {/* Left Section */}
                <div >
                    <h1>{isSignUp ? "Sign Up" : "Log In"}</h1>
                    <form>
                        {isSignUp && (<div className="form-group">
                            <input type="text" name='name' value={userdata.name} onChange={handelonchange} placeholder="Username" required />
                        </div>)}

                        <div className="form-group">
                            <input type="email" name='email' value={userdata.email} onChange={handelonchange} placeholder="Email" required />
                        </div>

                        <div className="form-group">
                            <input type="password" name='password' value={userdata.password} onChange={handelonchange} placeholder="Password" required />
                        </div>
                        {isSignUp && (
                            <div className="form-group">
                                <select
                                    name="gender"
                                    value={userdata.gender}
                                    onChange={handelonchange}
                                    required
                                >
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                        )}
                        <div className='btn'>
                            <button onClick={formSubmit}>{isSignUp ? "Sign Up" : "Log In"}</button>
                            <p onClick={toggleForm}>
                                {isSignUp ? "Already have an account?" : "Want to create a new account?"}
                            </p>
                        </div>
                    </form>

                </div>

            </div>
        </>

    );
};

export default Signup;
