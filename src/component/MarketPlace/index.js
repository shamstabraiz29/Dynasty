import React from 'react';
import './style.css';
import Backbutton from '../../assest/Style/Backbutton';
import ButtonBuy from '../../assest/Style/Navbutton';
import ConnectButton from '../../assest/Style/ConnectButton';
import CardBank from '../bank/component/Card';
import CardMerchant from './component/CardMerchant';
import CardMarket from './component/CardMerchant';
import NavbarSelector from './component/Navbar';

const MarcketPlace = () => {
	return (
		<>
			<div className={'recruit marketPlace'}>
				<div className={'displayRecruit my-4'}>
					<div className={'row container recruitButton'}>
						<div className={'col-4 text-center'}>
							<Backbutton link={'/'} />
						</div>
						<div className={'col-4 text-center'}>
							<ButtonBuy link={'/'} text={'Marketplace'} />
						</div>
						<div id='connectButton' className={'col-4 text-center c'}>
							<ConnectButton link={'/mynft'} text={'my nft'} />
							<ConnectButton
								className='wallet-btn'
								link={'/'}
								text={'connect wallet'}
							/>
						</div>
					</div>
				</div>
				<div className={'navbarSelect container'}>
					<div className='main'>
						<NavbarSelector text={'floor price'} price={'$55'} />

						<NavbarSelector text={'Highest Sale price'} price={'$55'} />

						<NavbarSelector text={'Total sale volume'} price={'$55'} />
					</div>
					<div className='filter-main'>
						<div className='b'>
							<NavbarSelector text={'Price (lowest to highest)'} />
						</div>{' '}
						<div className='filter'>
							<NavbarSelector text={'filter '} />
						</div>
					</div>
				</div>
				<div className={'container'}>
					<div className={'row'}>
						<div className={'col-lg-2 col-md-6 col-sm-3 col-6'}>
							<CardMarket />
						</div>
						<div className={'col-lg-2 col-md-6 col-sm-3 col-6'}>
							<CardMerchant />
						</div>
						<div className={'col-lg-2 col-md-6 col-sm-3 col-6'}>
							<CardMerchant />
						</div>
						<div className={'col-lg-2 col-md-6 col-sm-3 col-6'}>
							<CardMerchant />
						</div>
						<div className={'col-lg-2 col-md-6 col-sm-3 col-6'}>
							<CardMerchant />
						</div>
						<div className={'col-lg-2 col-md-6 col-sm-3 col-6'}>
							<CardMerchant />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default MarcketPlace;
