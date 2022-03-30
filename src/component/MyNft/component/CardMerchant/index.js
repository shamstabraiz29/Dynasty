import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Img from '../../../../assest/images/img1.png';
const CardMarket = () => {
	return (
		<>
			<Link to='/specifications'>
				<div className={'CardMarket'}>
					<div className={'CardMarchantLogo'}>
						<img width={200} src={Img} alt={'/'} />
					</div>
					<div className={''}>
						<div className={'sumari'}>Samurai #1125</div>
					</div>
					<div className={'highOffer'}>
						<div className={'priceOffer'}>
							$30<span className={'spanOffer'}>(highest offer)</span>
						</div>
						<div>$125</div>
					</div>
				</div>
			</Link>
		</>
	);
};
export default CardMarket;
