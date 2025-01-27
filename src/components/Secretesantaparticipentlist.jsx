import { useContext, useEffect, useState } from "react";
import Context from "../context/contextapi/Context"
import "../stylecomponent/navbar.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useParams } from "react-router-dom";
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import toast from "react-hot-toast";



const Secretesantaparticipentlist = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [joingroupdata, setjoingroupdata] = useState({
        wishlist: ''
    })
    const context = useContext(Context)
    const { alluseringroup, alluseringr_santagr, joingroup_santagr } = context
    const { id } = useParams()
    useEffect(() => {
        alluseringr_santagr(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])
    const handleInputChange = (e) => {
        setjoingroupdata({ ...joingroupdata, [e.target.name]: e.target.value });
    };
    const handleClick = (event) => {
        if (localStorage.getItem("Holidaytheme") !== null) {
            setAnchorEl(event.currentTarget);
        } else {
            toast.error("Please Login First!");
        }
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const ids = open ? 'simple-popover' : undefined;

    return (
        <>
            <div className='secreteparticipent'>
                <TableContainer   >
                    <Table sx={{ minWidth: 650, alignContent: "center" }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell >Name</TableCell>
                                <TableCell >Wishlist</TableCell>
                                <TableCell  >Secretsanta</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {alluseringroup.map((useringr) => (
                                <TableRow
                                    key={useringr._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, color: "white" }}
                                >
                                    <TableCell component="th" scope="row">
                                        {useringr.name}
                                    </TableCell>
                                    <TableCell  >{useringr.wishlist}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div>
                    <Button sx={{ background: "white", border: "1px solid grey", color: "grey", marginLeft: "5px" }} aria-describedby={ids} type="button" onClick={handleClick}>
                        Add into the group
                    </Button>
                    <Popover
                        id={ids}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                    >
                        <div className="flex flex-col w-full justify-between items-center" >
                            <input type="text" name="wishlist"
                                value={joingroupdata.wishlist}
                                onChange={handleInputChange}
                                className="p-5 placeholder:text-gray-700" placeholder="Enter the wishlist" autoFocus />
                            <button className={joingroupdata.wishlist.length <= 4 ? "bg-orange-200 my-5" : "bg-orange-700 my-5"} disabled={
                                joingroupdata.wishlist.length <= 4 ? true : false
                            } onClick={(e) => {
                                e.preventDefault();
                                joingroup_santagr(id, joingroupdata.wishlist)
                                console.log("hello")
                                window.location.reload();

                            }}>Submit</button>
                        </div>
                    </Popover>
                </div>


                {/* \end{code} */}


            </div>

        </>
    )
}

export default Secretesantaparticipentlist