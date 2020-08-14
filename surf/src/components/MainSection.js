import React from 'react';
import '../App.css';

function MainSection() {
    const surf_data_url = "http://127.0.0.1:5000/api/surf-data"

    fetch(surf_data_url)
        .then(response => response.json())
        .then(surf_spots => {

            console.log(surf_spots);
            const beaches = [];

            Object.keys(surf_spots).forEach(function(beach) {
                beaches.push(beach);
            });

            //beaches[i] = "Trestles"
            //surf_spots["Trestles"] = "San Clemente, California"

            for(let i = 0; i < beaches.length; i++){
                console.log(i + "\t" + beaches[i] + ":\t" + surf_spots[beaches[i]]);
            }
        });

    return (
        <div className="main-section">
            
        </div>
    );
}

export default MainSection;