import React from 'react';
import './style.css';
import Backbutton from '../../assest/Style/Backbutton';
import ButtonBuy from '../../assest/Style/Navbutton';
import ConnectButton from '../../assest/Style/ConnectButton';
import CardBank from '../bank/component/Card';
import CardMerchant from './component/CardMerchant';
import Img1 from '../../assest/images/Marchent/crossbow.png';
import Img2 from '../../assest/images/Marchent/shield.png';
import Img3 from '../../assest/images/Marchent/potions.png';

const Marchant = () => {
	return (
		<>
			<div className={'recruit merchent'}>
				<div className={'displayRecruit mt-4 mb-5'}>
					<div className={'row container recruitButton'}>
						<div className={'col-4 text-center'}>
							<Backbutton link={'/'} />
						</div>
						<div className={'col-4 text-center'}>
							<ButtonBuy link={'/'} text={'Merchant'} />
						</div>
						<div className={'col-4 text-center'}>
							<ConnectButton link={'/'} text={'connect wallet'} />
						</div>
					</div>
				</div>
				<div className={'container'}>
					<div className={'row'}>
						<div className={'col-lg-3 col-md-4 col-sm-4 col-6'}>
							<CardMerchant Img={Img3} Name={'potions'} />
						</div>
						<div className={'col-lg-3 col-md-4 col-sm-4 col-6'}>
							<CardMerchant Img={Img1} Name={'ronin crossbows'} />
						</div>

						<div className={'col-lg-3 col-md-4 col-sm-4 col-6'}>
							<CardMerchant Img={Img1} Name={'samurai crossbows'} />
						</div>
						<div className={'col-lg-3 col-md-4 col-sm-4 col-6'}>
							<CardMerchant Img={Img2} Name={'shields'} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Marchant;
