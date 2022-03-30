import React from 'react';
import './style.css';
import Backbutton from '../../assest/Style/Backbutton';
import ButtonBuy from '../../assest/Style/Navbutton';
import ConnectButton from '../../assest/Style/ConnectButton';
import Img from '../../assest/images/6.png';
const Stake = () => {
	let data = [1, 2, 3, 4, 5];

	return (
		<>
			<div className={'recruit stack'}>
				<div className={'displayRecruit mt-4'}>
					<div className={'row container recruitButton'}>
						<div className={'col-4 text-center'}>
							<Backbutton link={'/'} />
						</div>
						<div className={'col-4 text-center'}>
							<ButtonBuy link={'/'} text={'Stake'} />
						</div>
						<div className={'col-4 text-center'}>
							<ConnectButton link={'/'} text={'connect wallet'} />
						</div>
					</div>
				</div>

				<div className='items-container'>
					<div className={'StackV container'}>
						<div className={'stackDiv'}>
							<div className={'stake'}>Stack - 30</div>
							<div className={'stake'}>unStack - 30</div>
						</div>
						<div className={'d-flex justify-content-center align-items-center'}>
							<ConnectButton link={'/'} text={'CLAIM $YEN'} />
							<ConnectButton link={'/'} text={'CLAIM $YEN & UNSTAKE'} />
						</div>
					</div>

					<div
						className={'my-5'}
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<div className={'textStake'}>
							you can only unstake if ronin collected at least 2$ bribe
						</div>
						<div
							className={'d-flex justify-content-sm-between align-items-center'}
						>
							<div className={'stakes ronin-12'}>ronin - 12</div>
							<div className={'stakes'}>select all</div>
							<div
								style={{
									fontSize: '20px',
									marginLeft: '20px',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<div className='checkbox'>
									<input
										style={{
											padding: '2px',
											width: '9px',
										}}
										type='checkbox'
										name='check-portion'
									/>
								</div>
								<label
									className='checkboxLabel'
									style={{ color: 'red', padding: '10px' }}
								>
									USE POTION
								</label>
								<div className='checkbox'>
									<input
										style={{
											padding: '2px',
											marginLeft: '15px',
											width: '9px',
										}}
										type='checkbox'
										name='check-CROSSBOW'
									/>
								</div>
								<label
									className='checkboxLabel'
									style={{ color: 'red', padding: '10px' }}
								>
									USE CROSSBOW
								</label>
							</div>
						</div>
						<div
							className={'row m-4'}
							style={{
								display: 'flex',
								justifyContent: 'center',
								maxWidth: '1000px',
							}}
						>
							{data.map((item) => {
								return (
									<div
										style={{
											margin: '10px',
											width: '180px',
											height: '270px',
											backgroundColor: '#010414',
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
											textAlign: 'center',
											borderRadius: '20px',
											color: 'white',
											border: '2px solid white',
										}}
									>
										<div style={{}}>
											<div
												style={{
													display: 'flex',
													justifyContent: 'space-around',
													alignItems: 'center',
												}}
											>
												<h1>NFT ID:1</h1>
												<img
													style={{ borderRadius: '5px' }}
													src='checkbox.png'
													width='25px'
													alt='checkbox'
												/>
											</div>

											<img
												style={{
													borderRadius: '30px',
													padding: '10px',
												}}
												width='120px'
												height='130px'
												src='dog.jpg'
												alt={'/'}
											/>

											<h3>
												Reward:{' '}
												<span style={{ paddingLeft: '26px' }}>458.2677</span>
											</h3>
											<h3>
												RemainTime:{' '}
												<span style={{ paddingLeft: '0px' }}>
													25days, 4hrs, 15mins
												</span>
											</h3>
										</div>
									</div>
								);
							})}

							{/* <div className={"col-lg-2 col-md-3 col-sm-4"}>
                <div className={"stackeImg"}>
                  <img width="80" src={Img} alt={"/"} />
                  <div className={"stakeText"}>#1.6541098641</div>
                </div>
              </div>
              <div className={"col-lg-2 col-md-3 col-sm-4"}>
                <div className={"stackeImg"}>
                  <img width="80" src={Img} alt={"/"} />
                  <div className={"stakeText"}>#1.6541098641</div>
                </div>
              </div>
              <div className={"col-lg-2 col-md-3 col-sm-4"}>
                <div className={"stackeImg"}>
                  <img width="80" src={Img} alt={"/"} />
                  <div className={"stakeText"}>#1.6541098641</div>
                </div>
              </div>
              <div className={"col-lg-2 col-md-3 col-sm-4"}>
                <div className={"stackeImg"}>
                  <img width="80" src={Img} alt={"/"} />
                  <div className={"stakeText"}>#1.6541098641</div>
                </div>
              </div>
              <div className={"col-lg-2 col-md-3 col-sm-4"}>
                <div className={"stackeImg"}>
                  <img width="80" src={Img} alt={"/"} />
                  <div className={"stakeText"}>#1.6541098641</div>
                </div>
              </div>
              <div className={"col-lg-2 col-md-3 col-sm-4"}>
                <div className={"stackeImg"}>
                  <img width="80" src={Img} alt={"/"} />
                  <div className={"stakeText"}>#1.6541098641</div>
                </div>
              </div>
              <div className={"col-lg-2 col-md-3 col-sm-4"}>
                <div className={"stackeImg"}>
                  <img width="80" src={Img} alt={"/"} />
                  <div className={"stakeText"}>#1.6541098641</div>
                </div>
              </div> */}
						</div>
						<div
							className={'d-flex justify-content-sm-between align-items-center'}
						>
							<div className={'stakes ronin-12'}>samurai - 12</div>
							<div className={'stakes'}>select all</div>
							<div
								style={{
									fontSize: '20px',
									marginLeft: '20px',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<input
									style={{ padding: '2px', width: '9px' }}
									type='checkbox'
									name='use-portion'
								/>
								<label style={{ color: 'red', padding: '10px' }}>
									USE CROSSBOW
								</label>
							</div>
						</div>
						<div
							className={'row m-4'}
							style={{
								display: 'flex',
								justifyContent: 'center',
								maxWidth: '1000px',
							}}
						>
							{data.map((item) => {
								return (
									<div
										style={{
											margin: '10px',
											width: '180px',
											height: '250px',
											backgroundColor: '#010414',
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
											textAlign: 'center',
											borderRadius: '20px',
											color: 'white',
											border: '2px solid white',
										}}
									>
										<div style={{}}>
											<div
												style={{
													display: 'flex',
													justifyContent: 'space-around',
													alignItems: 'center',
												}}
											>
												<h1>NFT ID:1</h1>
												<img
													style={{ borderRadius: '5px' }}
													src='checkbox.png'
													width='25px'
													alt='checkbox'
												/>
											</div>

											<img
												style={{
													borderRadius: '30px',
													padding: '10px',
												}}
												width='120px'
												height='130px'
												src='dog.jpg'
												alt={'/'}
											/>

											<h3>
												Reward:{' '}
												<span style={{ paddingLeft: '26px' }}>458.2677</span>
											</h3>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Stake;
