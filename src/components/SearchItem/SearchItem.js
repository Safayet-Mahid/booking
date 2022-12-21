import './SearchItem.css';

const SearchItem = () => {
    return (
        <div className='searchItemContainer'>
            <img className='searchItemImg' src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1" alt="" />
            <div className="searchItemDescripion">
                <h1 className='descriptionTitle'>Tower Street Apartments</h1>
                <span className="descriptionSubTitle">500m from center</span>
                <span className='transportdesc'>Free airport taxi</span>
                <span className="featureTitle">Studio Apartment with Air conditioning</span>
                <span className="featureSubTitle">Entire Studio · 1 bathroom · 21m² 1 full bed</span>
                <span className="cancle">Free Cancellation</span>
                <span className="cancelSubTitle">You can cancel later, so lock in this great price today!</span>
            </div>
            <div className="searchItemRating">
                <div className="rating">
                    <span className='ratingTitle'>Excellent</span>
                    <button className='ratingBtn'>8.9</button>
                </div>
                <div className="ratingDetail">
                    <span className='price'>$123</span>
                    <span className='tax'>includes taxes and fees</span>
                    <button>See availability </button>
                </div>
            </div>

        </div>
    );
};

export default SearchItem;