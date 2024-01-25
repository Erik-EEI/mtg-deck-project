import './BannerElement.css';

const BannerElement = ({ text }) => {
    return (
        <span className={'banner-element'}>
            <h1>{text}</h1>
        </span>
    );
};

export default BannerElement;