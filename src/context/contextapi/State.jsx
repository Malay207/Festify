import { useState } from 'react'
import PropTypes from 'prop-types'
import Context from './Context'
import toast from 'react-hot-toast'

const State = (props) => {
    const [userData, setUserData] = useState({})
    const event = []
    const group = []
    const useringroup = []
    const [allevent, setallevent] = useState(event)
    const [allgroup, setallgroup] = useState(group)
    const [alluseringroup, setalluseringroup] = useState(useringroup)
    const link = "https://festify-backend-pu14.onrender.com"
    const getuserdata = async () => {
        try {
            const response = await fetch(`${link}/auth/userdata`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("Holidaytheme")
                }
            });
            const data = await response.json();
            setUserData(data);
        } catch (error) {
            console.log(error);

        }
    }
    const createevent = async (eventname, eventstartdate, eventenddate, eventlocation, eventtime, event_img) => {
        const response = await fetch(`${link}/event/createevent`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("Holidaytheme")
            },
            body: JSON.stringify({
                eventname,
                eventstartdate,
                eventenddate,
                eventlocation,
                eventtime,
                event_img
            })
        });
        const data = await response.json();
        if (!data.Sucess) {
            toast.error("Ther is any error, please try again later");
        }
        toast.success("Event added successfully")
        setallevent(allevent.concat(data.newEvent));
    }
    const Allevent = async () => {
        try {
            const response = await fetch(`${link}/event/allevent`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const data = await response.json();
            setallevent(data);
        }
        catch (error) {
            console.log(error);
            toast.error("There is any error");
        }

    }
    //delete event
    const deleteevent = async (id) => {
        try {
            const response = await fetch(`${link}/event/deleteevent/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("Holidaytheme")
                }
            });
            const data = await response.json();
            if (!data.Sucess) {
                toast.error("There is any error, please try again later");
                return;
            }
            toast.success("Event deleted successfully")
            setallevent(allevent.filter((event) => event._id !== id));
        } catch (error) {
            console.log(error);
            toast.error("There is any error");
        }
    }
    //send wishes
    const Wishes = async (userName, userEmail, message) => {
        try {
            const response = await fetch(`${link}/wishes/sendwishes`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("Holidaytheme")
                },
                body: JSON.stringify({
                    userName,
                    userEmail,
                    message
                })
            });
            const data = await response.json();
            if (!data.success) {
                toast.error("There is any error, please try again later");
                return;
            }
            toast.success("Message sent successfully")
        } catch (error) {
            console.log(error);
            toast.error("There is any error");
        }
    }
    const create_santagr = async (group_name, name, buget, wishlist) => {
        try {
            const response = await fetch(`${link}/secretegift/creategroup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("Holidaytheme")
                },
                body: JSON.stringify({
                    group_name,
                    name,
                    buget,
                    wishlist

                })

            });
            const data = await response.json();
            if (!data.Sucess) {
                toast.error("There is any error, please try again later");
                return;
            }
            setallgroup(allgroup.concat(data.newgr));

        } catch (error) {
            console.log(error);
            toast.error("There is any error, please try again later");

        }
    }
    const getall_santagr = async () => {
        try {
            const response = await fetch(`${link}/secretegift/getallgroup`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const data = await response.json();
            if (!data.sucess) {
                toast.error("There is any error, please try again later");
                return;
            }
            setallgroup(data.allGroup);
        } catch (error) {
            console.log(error);
            toast.error("There is any error, please try again later");
        }
    }
    const joingroup_santagr = async (group_id, wishlist) => {
        try {
            const response = await fetch(`${link}/secretegift/joingroup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("Holidaytheme")
                },
                body: JSON.stringify({
                    group_id,
                    wishlist
                })
            });
            const data = await response.json();
            if (!data.sucess) {
                toast.error("There is any error, please try again later");
                return;
            }
            toast.success("You have joined the group");
        } catch (e) {
            console.log(e);
            toast.error("There is any error, please try again later");

        }
    }
    const alluseringr_santagr = async (gr_id) => {
        try {
            const response = await fetch(`${link}/secretegift/getalluseringroup/${gr_id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const data = await response.json();
            if (!data.sucess) {
                toast.error("There is any error, please try again later");
                return;
            }
            setalluseringroup(data.userInGroup);

        } catch (error) {
            console.log(error);
            toast.error("There is any error, please try again later");
        }
    }
    return (
        <Context.Provider value={{ getuserdata, userData, createevent, allevent, Allevent, deleteevent, Wishes, create_santagr, getall_santagr, joingroup_santagr ,alluseringroup,allgroup,alluseringr_santagr }}>
            {props.children}
        </Context.Provider>
    )
}
State.propTypes = {
    children: PropTypes.any.isRequired,
}

export default State
