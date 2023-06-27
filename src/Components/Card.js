export default function Card (props) {
    return(
        <div className="card">
        <img src={props.data.imageUrl} alt="Location"/>
            <div className="card-details">
                <div className="card-details-upper">
                    <h2>{props.data.location}</h2>
                    <div>
                        <img src="./location-icon-card.png" alt="location icon" className ="card-location-icon"/>
                        <p>{props.data.country}</p>
                        <a className="google-map"href={props.data.googleMapsUrl}>Google Maps</a>
                    </div>
                </div>
                <div className="card-details-lower">
                    <p className ="date">{props.data.startDate} - {props.data.endDate}</p>
                    <p>{props.data.description}</p>
                </div>
            </div>
        </div>
    );
}