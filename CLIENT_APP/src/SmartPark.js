import React, { Component, useState, useEffect } from 'react';

import sortJsonArray from 'sort-json-array';

const Smrtprk_app = () => {
	const [
		data,
		setNews
	] = useState([]);

	const [
		url,
		setUrl
	] = useState(`http://localhost:8080/api/get_data`);

	const [
		loading,
		setLoading
	] = useState(false);

	const fetchNews = () => {
		setLoading(true);
		fetch(url)
			.then((result) => result.json())
			.then(
				(data) => (
					setNews(sortJsonArray(data, 'slot_no', 'asc')),
					setLoading(false),
					console.log('HERE', sortJsonArray(data, 'created_at', 'des'))
				)
			)
			.catch((error) => console.error(error));
	};

	useEffect(
		() => {
			fetchNews();
		},
		[
			url
		]
	);

	const getAvlCount = () => {
		let c = 0;
		for (let i = 0; i < data.length; i++) {
			if (data[i].status === 'Available') {
				++c;
			}
		}
		return c;
	};

	//2020-02-21

	const showLoading = () => (
		<div>
			{loading ? (
				<div>
					<div class='card'>
						<div className='card-body'>
							<div class='animate a4' />
							<div class='animate a4' />
						</div>
					</div>
					<br />
					<div class='card'>
						<div className='card-body'>
							<div class='animate a1' />
							<div class='animate a2' />
							<div class='animate a3' />
						</div>
					</div>
					<br />
					<div class='card'>
						<div className='card-body'>
							<div class='animate a1' />
							<div class='animate a2' />
							<div class='animate a3' />
						</div>
					</div>
					<br />
					<div class='card'>
						<div className='card-body'>
							<div class='animate a1' />
							<div class='animate a2' />
							<div class='animate a3' />
						</div>
					</div>
					<br />
				</div>
			) : (
				''
			)}
		</div>
	);

	const refreshPage = () => {
		window.location.reload(false);
	};

	const nwesFeed = () => (
		<div>
			{/* {console.log('LOOK AT THIS', sortJsonArray([news], 'created_at', 'desc'))} */}
			<button
				type='button'
				class='btn btn-primary bmd-btn-fab btn-raised refresh-btn fade-in-right'
				onClick={refreshPage}
			>
				<i class='material-icons'>refresh</i>
			</button>
			<div className='card fade-in-bottom'>
				<div class='top-summary'>SUMMARY</div>
				<div className='card-body'>
					<i class='fas fa-table' />
					<sub>
						<i class='fas fa-sort-numeric-down' />
					</sub>{' '}
					Total Slots <span class='badge badge-pill badge-dark'> {data.length} </span>
					<hr />
					<i class='fas fa-car' /> Available Slots
					<span class='badge badge-pill badge-dark'> {getAvlCount()} </span>
				</div>
			</div>
			<br />
			{data.map((parks, index) => {
				return (
					<div>
						<div class={`card fade-in-bottom ${parks.status === 'Available' ? 'avl' : 'occ'}`}>
							<div key={index} class='card-body'>
								<p className='slot_no'>SLOT {parks.slot_no}</p>
								<hr />
								<p className=''>
									<i className={`fas ${parks.status === 'Available' ? 'fa-car' : 'fa-ban'}`} />{' '}
									{parks.status}
								</p>
								<p className=''>
									<i class='fas fa-map-marker-alt' /> {parks.place}
								</p>
								<hr />
								<span class='navi'>
									<center>
										<a href={parks.nav} target='_blank'>
											Navigate <i class='fas fa-directions' />
										</a>
									</center>
								</span>
							</div>
						</div>

						<br />
					</div>
				);
			})}
			<center>
				<hr />
				<p className='text-muted'>
					<small>
						<small>- IIIT Guwahati -</small>
					</small>
				</p>
			</center>
			<br />
		</div>
	);

	return (
		<div>
			{showLoading()}
			{nwesFeed()}
		</div>
	);
};

export default Smrtprk_app;
