// import prop-types
import PropTypes from 'prop-types';

import './styles.scss'

const FeatureCard = ({icon, title, description}) => {
    return (
        <div className="feature">
        <img src={icon} className="feature__icon" />
        <h3 className="feature__item-title">{title}</h3>
        <p className="feature__desc">{description}</p>
      </div>
    );
};

export default FeatureCard;

//  use
FeatureCard.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

FeatureCard.defaultProps = {
    icon: '',
    title: '',
    description: '',
};

