import React from 'react';

const categories = [
    {
        id: 1,
        title: "Lash Extensions",

    }
]

const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className="content">
                    <div className="title">Lash Extensions</div>
                    <span className="subtitle">Book Now</span>
                </div>
            </div>

        </div>
    </div>
);

export default HomePage;