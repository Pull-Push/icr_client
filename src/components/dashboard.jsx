import React from "react";
import HeaderMain from "./header";
import FooterMain from "./footer";
import "../static/dashboard.css"


export default function DashboardMain(){
    return(
        <div className="mainDiv">
            <div className="headerMainDiv">
                <HeaderMain />
            </div>
            <div className="dashMainDiv">
                <h2>DASHBOARD PAGE</h2>
            </div>
            <div className="dashSubDiv">
                <div className="incidentDiv">
                    {/* iterate through all incidents and display here */}
                    <img src="https://dummyimage.com/540x540/8082a3/ffffff.png&text=INCIDENT" alt="map" />
                </div>
                <div className="mapDiv">
                    {/* map of all pins goes here */}
                    <img src="https://dummyimage.com/540x540/8082a3/ffffff.png&text=MAP+GOES+HERE" alt="map" />
                </div>
            </div>
            <div className="footerMainDiv">
                <FooterMain />
            </div>

        </div>
    )
}