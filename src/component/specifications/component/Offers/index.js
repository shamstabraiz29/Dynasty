import React from 'react';
import './styles.css';
import Coin from '../../../../assest/images/coin.png';
import ownerimg from '../../../../assest/images/Ellipse.png';

const Offer = () => {
	const table = [
		{
			onwer: 'Owned by CHINO',
			amount: '30',
			time: '2/14/2022 10:11 AM',
			active: 'Active',
			accept: 'ACCEPT',
		},
		{
			onwer: 'Owned by CHINO',
			amount: '20',
			time: '2/14/2022 10:11 AM',
			active: 'Active',
			accept: 'ACCEPT',
		},
		{
			onwer: 'Owned by CHINO',
			amount: '10',
			time: '2/14/2022 10:11 AM',
			active: 'Active',
			accept: 'ACCEPT',
		},
	];

	const listItems = table.map((e, index) => {
		return (
			<tr key={index}>
				<td>
					<img alt='' className='ownerImg' src={ownerimg} />
					{e.onwer}
				</td>
				<td className='CoinImg'>
					{e.amount}
					<img alt='' src={Coin} />
				</td>
				<td>{e.time}</td>
				<td>{e.active}</td>
				<td>
					<span className='action'>{e.accept}</span>
				</td>
			</tr>
		);
	});
	return (
		<>
			<div className='OfferMain'>
				<h1>OFFERS</h1>
				<table>
					<tr>
						<th>FROM</th>
						<th>PRICE</th>
						<th>DATE</th>
						<th>STATUS</th>
						<th>ACTION</th>
					</tr>
					{listItems}
				</table>
			</div>
		</>
	);
};
export default Offer;
