import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Banner from '../../Components/Banner';
import FeatureCard from '../../Components/FeatureCard';

// import style
import './styles.scss';

// feature data
import data from '../../app/data/featureData';

const HomePage = () => {

    return (
        <div>
            <Header />
            <Banner />
            <div className="feature-container">
                {data.map((item, index) => {
                    return (
                        <FeatureCard
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                        />
                    );
                })}
            </div>
            <Footer />   
        </div>
    )
}

export default HomePage;