import React, { Component } from "react";
import {logout} from '../../helpers/auth'

import './Dashboard.scss'
import PanelBars from '../PanelBars.js' 

export default class Dashboard extends Component{

    render(){
        return(
            <div className="Panel-dashboard">
                <PanelBars content = {[                
                    <div className="panel-sections" key={1}>
                        <div className="panel-sections__disk">
                            <h1>2.3/5 GB</h1>
                        </div>
                        <div className="panel-sections__account">
                            <h1>2.3/5 GB</h1>
                            <p onClick = {() => {
                                logout()
                            }}>Logout</p>
                        </div>
                    </div>
                ]}/>
            </div>
            
        )
    }

}