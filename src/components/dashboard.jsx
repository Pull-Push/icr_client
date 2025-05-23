import React from "react";
import HeaderMain from "./header";
import FooterMain from "./footer";

export default function DashboardMain(){
    return(
        <div className="mainDiv">
            <div className="headerMainDiv">
                <HeaderMain />
            </div>
            <div className="dashMainDiv">
                <h2>THIS IS THE DASHBOARD</h2>
            </div>
            <div className="footerMainDiv">
                <FooterMain />
            </div>

        </div>
    )
}