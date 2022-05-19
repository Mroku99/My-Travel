import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <div className="flex-card">
                <div className="card-image">
                    <img className="view" src={props.imageUrl}/>
                </div>
                <div>
                    <div className="flex-place">
                        <img src="./images/geo-alt-fill.svg"/>
                        <h5>{props.location}</h5>
                        <p><a href={props.googleMapsUrl}>View on Google Maps</a></p>
                    </div>
                    <h2>{props.title}</h2>
                    <p className="data">{props.startDate} - {props.endDate}</p>
                    <p className="desc">{props.description}</p>
                </div>
            </div>

        </div>
    )
}