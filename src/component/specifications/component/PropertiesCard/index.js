import React from 'react';
import './styles.css';
import Img from '../../../../assest/images/card.png';
import Button from '../../../../assest/Style/Navbutton';
import Coin from '../../../../assest/images/coin.png';
import ownerimg from '../../../../assest/images/Ellipse.png';

const PropertiesCard = ({
	title,
	time,
	owner,
	highestOffer,
	soldOffer,
	solodOffer2,
}) => {
	return (
		<>
			<div className='PropertiesCard'>
				<div className='img-container'>
					<img alt='' src={Img} />
				</div>
				<div className='content-container'>
					<h1 className='PropertyHeading'>{title}</h1>
					<p className='PropertyTime'>{time}</p>
					<div className='ownerimg-container'>
						<img alt='' src={ownerimg} />
						<p className='PropertyOwner'>
							Owned by <span className='CHINO'>{owner}</span>
						</p>
					</div>
					<div className='PropertyOffers'>
						<div className='coin'>
							<p>Highest offer {highestOffer}</p>
							<img alt='' src={Coin} />
						</div>
						<div className='coin'>
							<p>Last sold for {soldOffer}</p>
							<img alt='' src={Coin} />
						</div>
						<div className='coin'>
							<p>Last sold for {solodOffer2}</p>
							<img alt='' src={Coin} />
						</div>
					</div>
					<div className='PropertyButtons'>
						<Button link={'/'} text={'list for sale'} />
						<Button link={'/'} text={'cancel listing'} />
					</div>
				</div>
			</div>
		</>
	);
};
export default PropertiesCard;
