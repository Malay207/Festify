import { useState, useContext } from 'react';
import Context from '../context/contextapi/Context';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { FaShareAlt, FaWhatsapp, FaTelegram, FaLink } from "react-icons/fa";
import { closeButtonStyle, modalStyle, modalContentStyle, copyButtonStyle, iconStyle, iconsStyle } from "../stylecomponent/santa"

export default function Secretesantagr() {
  const { allgroup} = useContext(Context)
  const [share, setShare] = useState(false)
  const message = "Check out this amazing Secret Santa app!";
  const appLink = "https://festify-backend-pu14.onrender.com/secretesanta/"; // Your app's URL
  const link = "https://api.whatsapp.com/send?text=" + encodeURIComponent(`${message} ${appLink}`);
  const handleCopyLink = () => {
    navigator.clipboard.writeText(link); // Copies the link to clipboard
    alert("Link copied to clipboard!");
  };
  return (
    <>
      <div className='grid grid-cols-3 gap-3 '>
        {allgroup.map((gr) => {
          return (<Card key={gr._id} sx={{ maxWidth: 345, margin: "auto", width: "100%", marginBottom: "20px" }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" >
                {gr.group_name}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Prize Buget:{gr.buget}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`/participent/${gr.group_id}`}><Button size="small" >Join</Button></Link>
              <Button size="large" onClick={(e) => {
                e.preventDefault()
                setShare(!share)
              }}><FaShareAlt /></Button>
            </CardActions>
          </Card>)
        })
        }
        {
          share && <div style={modalStyle}>
            <div style={modalContentStyle}>
              <h3>Share This Link</h3>
              <div style={iconsStyle}>
                {/* WhatsApp Share Icon */}
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(appLink)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={iconStyle}
                >
                  <FaWhatsapp size={30} />
                </a>

                {/* Telegram Share Icon */}
                <a
                  href={`https://t.me/share/url?url=${encodeURIComponent(link)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={iconStyle}
                >
                  <FaTelegram size={30} />
                </a>

                {/* Copy Link Icon */}
                <Button onClick={handleCopyLink} style={copyButtonStyle}>
                  <FaLink size={20} /> Copy Link
                </Button>
              </div>
              <Button onClick={() => setShare(!share)} style={closeButtonStyle}
              >
                Close
              </Button>
            </div>
          </div>
        }


      </div>
    </>
  );
}
