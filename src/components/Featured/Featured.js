import React from 'react'
import './featured.scss'

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Featured = ({ type }) => {
	return (
		<div className='featured'>
			{type && (
				<div className='category'>
					<span>{type === 'movie' ? 'Movies' : 'Series'}</span>
					<select name='genre' id='genre'>
						<option>Genre</option>
						<option value='adventure'>Adventure</option>
						<option value='comedy'>Comedy</option>
						<option value='crime'>Crime</option>
						<option value='fantasy'>Fantasy</option>
						<option value='historical'>Historical</option>
						<option value='horror'>Horror</option>
						<option value='romance'>Romance</option>
						<option value='sci-fi'>Sci-Fi</option>
						<option value='thriller'>Thriller</option>
						<option value='western'>Western</option>
						<option value='animation'>Animation</option>
						<option value='drama'>Drama</option>
						<option value='documentary'>Documentary</option>
					</select>
				</div>
			)}
			<img src="https://i.imgur.com/skLpcTQ.jpg?1" alt="castlevania" />
			<div className='info'>
				<img src="https://i.imgur.com/HJUl2AT.png" alt="info-img" />
				<span className='desc'>
					Inspired by the popular video game series, this anime series is a dark medieval fantasy.
					It follows the last surviving member of the disgraced Belmont clan, Trevor Belmont,
					trying to save Eastern Europe from extinction at the hands of Vlad Dracula Tepes.
					As Dracula and his legion of vampires prepare to rid the world of humanity's stain,
					Belmont is no longer alone, and he and his misfit comrades race to find a way to save mankind
					from the grief-maddened Dracula.
				</span>
				<div className='buttons'>
					<button className='play'>
						<PlayArrowIcon />
						<span>Play</span>
					</button>
					<button className='moreInfo'>
						<InfoOutlinedIcon />
						<span>Info</span>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Featured