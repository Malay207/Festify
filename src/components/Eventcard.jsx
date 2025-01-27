import { useEffect, useContext } from 'react';
import Context from '../context/contextapi/Context';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { MdDelete } from "react-icons/md";
import toast from 'react-hot-toast';


export default function Eventcard() {
  const { allevent, Allevent, deleteevent } = useContext(Context);
  useEffect(() => {
      Allevent()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className="grid grid-cols-3 gap-3 ">
        {allevent.length === 0 ? "No EVENT" :
          allevent.map((item, index) => {
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
                    <div className='mt-5 text-xl'>
                      <MdDelete onClick={() => {
                         if (localStorage.getItem('Holidaytheme') === null) {
                          toast.error("Please login to delete event")
                      }
                      else{
                        deleteevent(item._id)
                      }
                      }} />
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            )

          })
        }
      </div>
    </>
  );
}
