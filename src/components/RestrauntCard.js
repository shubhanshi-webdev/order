import {CDN_URL} from '../utilits/constants';

const Restraunt = (props) => {
    const {foodname} = props;
    const {name, cloudinaryImageId ,cuisines, avgRating,costForTwo } =foodname.info;
    return(
        <div className='restraunt-card'>
            <div className='res-img'>
                <img src={CDN_URL + cloudinaryImageId} />
            </div>
            <div className='res-info'>
                <p className='res-name'>{name}</p>
                <p className='res-cusine'>{cuisines.join(', ')}</p>
                <p className='rating'>{avgRating}</p>
                <p className='delivery-time'>{foodname.info.sla.slaString}</p>
                <span className='cost'>{costForTwo}</span>
            </div>
        </div>
    )
}

export default Restraunt;