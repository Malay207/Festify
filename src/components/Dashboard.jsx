import { useEffect, useContext } from 'react'
import Context from '../context/contextapi/Context'
import { Link } from "react-router-dom"
import "../stylecomponent/navbar.css"
import dashboard_secretesanta from "../assets/backgroundvideo/secretesanta.png"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import chris from "../assets/backgroundvideo/christmas.png"
import image from "../assets/backgroundvideo/headig.png"
import Sendwishes from "./Sendwishes"
const Dashboard = () => {
  const context = useContext(Context)
  const { allevent, Allevent } = context
  useEffect(() => {

    Allevent()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="h-full">

      <div className=" w-screen p-4 flex flex-row justify-around items-center">
        <div className="head-text flex flex-col justify-center items-center">
          <img className="w-96 h-full" src={chris} alt="..." />
          <p className="text-center text-white font-serif font-semibold text-lg w-3/4">Make your holidays sparkle with new connections – swipe into the season of joy! 🎄✨</p>
        </div>
        <div className="head-img">
          <img className="w-80" src={image} alt="..." />
        </div>
      </div>
      <div className="dashboard-event">
        <div className="event-head text-center p-4">
          <h1 className=" upcoming-event text-3xl font-serif flex flex-col font-bold text-white">Upcoming Events
            <span className="text-sm font-semibold text-white">
              (Coming Soon)
            </span>
          </h1>
          <div className="dashboard-event-content">
            <div className="grid grid-cols-3 gap-3 ">
              {allevent.length === 0 ? "No EVENT" :
                allevent.slice(0, 3).map((item, index) => {
                  return (
                    <Card key={index} sx={{ maxWidth: 345, marginTop: "50px", marginRight: "20px", backgroundColor: "black", color: "white", fontStyle: "italic", borderRadius: "10px", border: "1px solid white", marginLeft: "30px" }}>
                      <CardActionArea>
                        <CardMedia
                          className='h-40 object-contain'
                          component="img"
                          image={item.event_img}
                          alt="no image...."
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h6" component="div" sx={{ fontStyle: "italic" }}>
                            {item.eventname}
                          </Typography>
                          <Typography gutterBottom variant="body1" sx={{ fontStyle: "italic" }} component="div">
                            {item.eventlocation}
                          </Typography>
                          <Typography variant="body2" sx={{ fontStyle: "italic", color: "blue" }}>
                            Start date: {item.eventstartdate.split("T")[0]} ({item.eventtime})
                          </Typography>
                          <Typography variant="body2" sx={{ fontStyle: "italic", color: "red" }}>
                            End date: {item.eventenddate.split("T")[0]} ({item.eventtime})
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  )

                })
              }
            </div>
            <Link to="/event">
              <button className="text-white font-semibold font-serif border-2 rounded-md text-center my-5 bg-lime-600 px-5 py-2">SEE MORE</button>
            </Link>
          </div>
          <div className="dashboard-secretesanta flex justify-center items-center">
            <h2 className="text-white font-extrabold text-4xl py-16 px-3 font-serif flex flex-col border rounded-xl w-1/2 boxsh">
              Ready to uncover your Secret Santa? 🎁 Let the holiday magic begin!
              <Link to="/secretesanta">
                <span className="text-white-600 font-semibold text-xl mt-3">CLICK HERE...</span>
              </Link>
            </h2>
            <img src={dashboard_secretesanta} alt="..." />

          </div>

          <div className="dashboard_sendwishes">
            <div className="sendwishes_head text-center p-4">
              <h1 className=" sendwishes text-4xl font-serif flex flex-col font-bold text-white">
                Send Wishes To your Loved Ones
              </h1>
              <Sendwishes />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard