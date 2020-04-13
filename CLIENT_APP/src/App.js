import React, { Component, useState, useEffect } from 'react';
import Smrtprk_app from './SmartPark';
import logo from './logo.png';
import './style.css';

const The_app = () => {
	return (
		<div style={{ maxHeight: '100vh', overflow: 'hidden' }}>
			<nav class='navbar sticky-top navbar-dark fade-in-top' style={{ zIndex: '1' }}>
				<a class='' href='#'>
					<span class='logo-icon'>
						<i class='fas fa-car p1' />
						<sup>
							<small>
								<i class='fas fa-wifi p2' />
							</small>
						</sup>
					</span>{' '}
					Smart Parking
				</a>
				<button
					class='navbar-toggler'
					type='button'
					data-toggle='drawer'
					data-target='#dw-s2'
					style={{ border: 'none' }}
				>
					<span class='material-icons'> menu </span>
				</button>
			</nav>
			<div class='bmd-layout-container bmd-drawer-f-l bmd-drawer-overlay bg-dark' style={{ overflow: 'hidden' }}>
				<div
					id='dw-s2'
					class='bmd-layout-drawer bg-faded bg-dark'
					style={{ zIndex: '9999999', marginTop: '-30px', minHeight: '105vh' }}
				>
					<ul class='list-group'>
						<br />

						<div className='container-fluid'>
							<p class='list-group-item text-muted'>
								{' '}
								<sub>ABOUT</sub>{' '}
							</p>
							<div className='card'>
								<a
									class='list-group-item'
									href={'https://github.com/arunabharjun/IOT-SmartParking-IIITG'}
									style={{ color: 'unset' }}
									target='_blank'
								>
									<i class='fab fa-github' /> Github
								</a>
							</div>

							<div class=''>
								<br />
								<p class='list-group-item text-muted'>
									{' '}
									<sub>TEAM</sub>{' '}
								</p>
								<a href='https://github.com/arunabharjun' target='_blank' class='list-group-item card'>
									Arunabh Arjun
									<br />
									<span>
										<sub>1902007</sub>
									</span>
								</a>
								<br />
								<a href='#' class='list-group-item card'>
									Arindan Deb Nath
									<br />
									<span>
										<sub>1902006</sub>
									</span>
								</a>
								<br />
								<a href='#' class='list-group-item card'>
									Kaustav Kumar Nath
									<br />
									<span>
										<sub>1902015</sub>
									</span>
								</a>
								<br />
								<br />
								<div className='card' />
								<br />
								<p className='text-muted container-fluid'>
									<small>
										<b>
											INDIAN INSTITUTE OF INFORMATION TECHNOLOGY <br />GUWAHATI
										</b>
									</small>
								</p>
							</div>
						</div>
					</ul>
				</div>
				<main class='bmd-layout-content' style={{ maxHeight: '95vh', overflowY: 'scroll' }}>
					<div class='container center_itm'>
						<br />
						<Smrtprk_app />
						<br />
						{/* Main content Here */}
					</div>
				</main>
			</div>
		</div>
	);
};

const App = () => {
	return <The_app />;
};

export default App;
