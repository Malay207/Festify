// import React from 'react'
import { useContext, useState, useEffect } from "react"
import Context from "../context/contextapi/Context"
import "../stylecomponent/secretesanta.css"
import Secretesantagr from "./Secretesantagr"
import toast from "react-hot-toast"
// import Secretesantaparticipentlist from "./Secretesantaparticipentlist"

const SeceteSanta = () => {
    const context = useContext(Context)
    const { create_santagr, getall_santagr } = context
    const [creategroup, setcreategroup] = useState({
        grname: "",
        wishlist: "",
        name: "",
        buget: ""
    })
    const handleInputChange = (e) => {
        setcreategroup({ ...creategroup, [e.target.name]: e.target.value })
    }

    const handelsubit = async (e) => {
        if (localStorage.getItem("Holidaytheme") !== null) {
            e.preventDefault()
            await create_santagr(creategroup.grname, creategroup.name, creategroup.buget, creategroup.wishlist)
            window.location.reload();
            setcreategroup({
                grname: "",
                wishlist: "",
                buget: "",
                name: ""
            })
        }
        toast.error("Please Login First")
    }
    useEffect(() => {
        getall_santagr()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div className=' secretesatan_main w-1/2 mx-auto mt-7 mb-6  border border-white rounded-lg bg-black bg-opacity-70'>
                <h1 className='text-center text-blue-600 font-extrabold mt-3'>SeceteSanta</h1>
                <div >
                    <p className='text-white px-5 text-justify mx-5 my-5'>Get ready to spread the holiday cheer! 🎅🎁 Join our Secret Santa event and not only will you receive a surprise gift, but you&apos;ll also play the role of Secret Santa for someone else. The big reveal happens on <span className='text-red-600 font-extrabold'>December 25th</span>—let the festive fun begin!</p>
                    <form className="mx-5">
                        <div className="mb-4">
                            <input
                                type="text"
                                id="grname"
                                name="grname"
                                value={creategroup.grname}
                                onChange={handleInputChange}
                                placeholder="Enter your Group name"
                                className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                            />
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={creategroup.name}
                                onChange={handleInputChange}
                                placeholder="Enter your name"
                                className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                            />
                            <input
                                type="number"
                                id="buget"
                                name="buget"
                                value={creategroup.buget}
                                onChange={handleInputChange}
                                placeholder="Enter your max Prize Buget"
                                className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                            />
                        </div>

                        <div className="mb-4">
                            <textarea
                                id="wishlist"
                                name="wishlist"
                                value={creategroup.wishlist}
                                onChange={handleInputChange}
                                placeholder="Enter your wishlist (Write in comma separated)..."
                                rows="4"
                                className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            ></textarea>
                        </div>

                        <div className="">
                            <button
                                type="submit"
                                className="mb-5 px-6 py-2 bg-pink-900 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                                onClick={handelsubit}>
                                Ceate Group
                            </button>
                        </div>
                    </form>

                </div>
            </div>
            <div>
                <h1 className='text-center text-blue-600 font-extrabold mt-3 mb-5'>Group List</h1>

                <Secretesantagr />
            </div>
            {/* <Secretesantaparticipentlist /> */}
        </>
    )
}

export default SeceteSanta