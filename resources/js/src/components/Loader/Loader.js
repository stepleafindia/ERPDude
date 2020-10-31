import React from 'react';
import { appBaseUrl } from '../../Utils';
import './loader.css';

export default function Loader(props) {	
    return(
        <div className="loader-container">
            <img src={appBaseUrl+"/images/loader.gif"} alt="Loading..." className="loader-image" title="Loading..."/>
        </div>
    );
}