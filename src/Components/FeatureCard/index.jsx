
// imoport scss
import './styles.scss';

const featureCard = ({icon, title, description}) => {
    return (
        <div className="feature">
        <img src={icon} className="feature__icon" />
        <h3 className="feature__item-title">{title}</h3>
        <p className="feature__desc">{description}</p>
      </div>
    );
};

export default featureCard;

