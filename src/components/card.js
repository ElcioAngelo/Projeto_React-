import './card.css'

const card = ({cardTitle, cardText, cardImage}) => {
    return (
        <div className="card">
        <img alt={cardTitle}>{cardImage}</img>
        <div className="container">
            <h3>{cardTitle}</h3>
            <p>{cardText}</p>
            </div>
        </div>          
    );
}

export default card;