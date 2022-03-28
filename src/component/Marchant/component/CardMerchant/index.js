import React from 'react';
import './style.css';

const CardMerchant = ({ Img, Name }) => {
	return (
		<>
			<div className={'CardMerchant '}>
				<div className={'portion'}>
					<div className={'totalPortion mb-3'}>
						<h1>Total {Name}:</h1>
						<input type={'text'} className={'inputPortion'} />
					</div>
					<div className={'totalPortion'}>
						<h1>Remain {Name}:</h1>
						<input type={'text'} className={'inputPortion'} />
					</div>
				</div>
				<div className={'CardMarchantLogo'}>
					<img width={180} src={Img} alt={'/'} />
				</div>
				<div className={'bottomBackground'}>
					<div className={'Character'}>{Name}</div>
					<div className={'oufit'}>1200 Yen</div>
				</div>
				<div className={'MarchantPrice'}>
					<div>Buy Amount </div>
					<div className={'d-flex'}>
						<div className={'btnplus'}>-</div>
						<div className={'btnplus'}>12</div>
						<div className={'btnplus'}>+</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default CardMerchant;
