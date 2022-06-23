import React, { useState } from 'react';
import './navbar.scss'
import Search from '@mui/icons-material/Search';
import Notifications from '@mui/icons-material/Notifications';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import { Input } from '@mui/material';

const Navbar = () => {

	const [showSearchInput, setShowSearchInput] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	window.onscroll = () => {
		// console.log(parseInt(window.scrollY))
		setIsScrolled(window.scrollY < 60 ? false : true);
		return () => window.onscroll = null;
	}

	return (
		<div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
			<div className='container'>
				<div className='left'>
					<img src='https://i.imgur.com/fY4xvdd.png' alt='logo' />
					<span>Homepage</span>
					<span>Series</span>
					<span>Movies</span>
					<span>New and Popular</span>
					<span>My List</span>
				</div>
				<div className='right'>
					{showSearchInput ? (<Input />) : ('')}
					<Search onClick={() => setShowSearchInput(!showSearchInput)} className='icon' />
					<span>Children</span>
					<Notifications className='icon' />
					<span><img src='https://i.imgur.com/whhjoET.jpg?1' alt='profile_img' /></span>
					<div className='profile'>
						<ArrowDropDown className='icon' />
						<div className='options'>
							<span>Settings</span>
							<span>Logout</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar


