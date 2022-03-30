import React from 'react';
import Backbutton from '../../assest/Style/Backbutton';
import ButtonBuy from '../../assest/Style/Navbutton';
import ConnectButton from '../../assest/Style/ConnectButton';
import PropertiesCard from './component/PropertiesCard';
import './style.css';
import Offer from './component/Offers';
import Button from '../../assest/Style/Navbutton';

const specifications = () => {
	return (
		<>
			<div className={'recruit marketPlace'}>
				<div className={'displayRecruit my-4'}>
					<div className={'row container recruitButton'}>
						<div className={'col-3 text-center'}>
							<Backbutton link={'/'} />
						</div>
						<div className={'col-4 text-center'}>
							<ButtonBuy link={'/Marketplace'} text={'Marketplace'} />
						</div>

						<div className={'col-4 text-center ConnectButton'}>
							<ConnectButton link={'/'} text={'connect wallet'} />
						</div>
					</div>
				</div>

				<div className={'container specifications '}>
					<PropertiesCard
						title='Samurai #1125'
						time='mined 1 month ago , on fri jan 07 2022'
						owner='CHINO'
						highestOffer='30'
						soldOffer='20'
						solodOffer2='20'
					/>
					<div className='Properties-container'>
						<h1>Properties</h1>
						<div className='Properties-btns'>
							<Button link={'/'} text={'TYPE SAMURAI'} />
							<Button link={'/'} text={'GENERATION 1'} />
							<Button link={'/'} text={'ALPHA SCORE 5'} />
						</div>
					</div>
					<Offer />
				</div>
			</div>
		</>
	);
};
export default specifications;
