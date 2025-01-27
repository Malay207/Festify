import { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../stylecomponent/Preloader.css'; // Add styles for preloader

const Preloader = ({ onComplete }) => {
    useEffect(() => {
        // Simulate a delay before showing the main content
        const timer = setTimeout(() => {
            onComplete();
        }, 4000); // 3 seconds delay

        return () => clearTimeout(timer); // Cleanup
    }, [onComplete]);

    return (
        <div className="preloader">
            <h1 className="preloader-text"><span>Welcome</span> <span>to</span> <span>Festify</span></h1>
        </div>
    );
};
Preloader.propTypes = {
    onComplete: PropTypes.func.isRequired,
};

export default Preloader;

