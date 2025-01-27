import * as React from 'react';
import Context from '../context/contextapi/Context';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import interactionPlugin from '@fullcalendar/interaction';
import "../stylecomponent/event.css"
import toast from 'react-hot-toast';

export default function Eventpopupcard() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [eventdata, setEventData] = React.useState({
        title: "",
        location: "",
        startdate: "",
        enddate: "",
        time: "",
        image: ""
    });
    const context = React.useContext(Context);
    const { createevent } = context;

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setEventData((prevData) => ({
                    ...prevData,
                    image: reader.result // Base64 string
                }));
            };
        }
    };
    const handleChange = (e) => {
        setEventData({
            ...eventdata,
            [e.target.name]: e.target.value
        });
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <Button sx={{
                padding: '0.5rem 1.5rem',
                background: '#2c271ea1',
                border: '1px solid white',
                borderRadius: '8px',
                color: '#ffffff',
            }} aria-describedby={id} variant="contained" onClick={handleClick}>
                Create Event
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                sx={{ width: "50%" }}
            >
                <div className='popover_div'>
                    <div>
                        <form className="event-form" >
                            <input
                                type="text"
                                placeholder="Event Title"
                                required
                                name="title"
                                value={eventdata.title}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                placeholder="Event Location"
                                required
                                name="location"
                                value={eventdata.location}
                                onChange={handleChange}
                            />
                            <label className="text-sm text-gray-500 ml-3 mt-3 ">
                                Event Start Date
                            </label>
                            <input
                                placeholder='Event Start Date'
                                type="date"
                                required
                                name="startdate"
                                value={eventdata.startdate}
                                onChange={handleChange}
                            />
                            <label className="text-sm text-gray-500 ml-3 mt-3 ">
                                Event End Date
                            </label>
                            <input
                                placeholder='Event End Date'
                                type="date"
                                required
                                name="enddate"
                                value={eventdata.enddate}
                                onChange={handleChange}
                            />
                            <label className="text-sm text-gray-500 ml-3 mt-3 ">
                                Event Start Time
                            </label>
                            <input
                                type="time"
                                required
                                className="w-full p-2 border border-gray-300 rounded"
                                name="time"
                                value={eventdata.time}
                                onChange={handleChange}
                            />
                            <input
                                type="file"
                                accept="image/*"
                                name="image"
                                onChange={handleImageChange}
                            />
                            <button className='mt-4 mb-8 ml-3' type="submit" onClick={(e) => {
                                e.preventDefault()
                                if (localStorage.getItem('Holidaytheme') === null) {
                                    toast.error("Please login to create event")
                                }
                                else {
                                    createevent(eventdata.title, eventdata.startdate, eventdata.enddate, eventdata.location, eventdata.time, eventdata.image);
                                }
                                handleClose();
                            }}>Create Event</button>
                        </form>

                        {/* Calendar */}
                        {/* <FullCalendar
                            plugins={[dayGridPlugin, interactionPlugin]}
                            initialView="dayGridMonth"
                        // events={events.map((event) => ({ title: event.title, date: event.date }))}
                        /> */}
                    </div>
                </div>
            </Popover>
        </div>
    );
}
