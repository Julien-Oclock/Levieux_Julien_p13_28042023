
const featureCard = (props) => {
    return (
        <div className="feature">
        <img src={props.icon} className="feature__icon" />
        <h3 className="feature__item-title">{props.title}</h3>
        <p className="feature__desc">{props.description}</p>
      </div>
    );
};

export default featureCard;

