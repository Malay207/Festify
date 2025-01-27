import { useState } from 'react';
import './App.css';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import Event from './components/Event';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Snowfall from 'react-snowfall';
import SeceteSanta from './components/SeceteSanta';
import ResponsiveNavBar from "./components/ResponsiveNavBar";
import Sendwishes from './components/Sendwishes';
import { Toaster } from 'react-hot-toast';
import State from './context/contextapi/State';
import Secretesantaparticipentlist from './components/Secretesantaparticipentlist';
import Preloader from './components/Preloader'; // Import Preloader
import Footer from './components/Footer';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    const handlePreloaderComplete = () => {
        setIsLoading(false); // Hide preloader and show main content
    };

    return (
        <>
            {isLoading ? (
                <Preloader onComplete={handlePreloaderComplete} />
            ) : (
                <State>
                    <Router>
                        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: "transparent" }}>
                            <Snowfall snowflakeCount={150} />
                        </div>
                        <div className='content z-10'>
                            <ResponsiveNavBar />
                            <Toaster />
                            <Routes>
                                <Route path="/" element={<Dashboard />} />
                                <Route path="/event" element={<Event />} />
                                <Route path="/auth" element={<Auth />} />
                                <Route path="/secretesanta" element={<SeceteSanta />} />
                                <Route path="/sendwhishes" element={<Sendwishes />} />
                                <Route path="/participent/:id" element={<Secretesantaparticipentlist />} />
                            </Routes>
                            <Footer />
                        </div>
                    </Router>
                </State>
            )}
        </>
    );
}

export default App;
