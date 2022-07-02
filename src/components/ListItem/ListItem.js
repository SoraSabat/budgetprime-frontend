import './listItem.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const ListItem = () => {
	return (
		<div className="listItem">
			<img src="https://i.imgur.com/rdOBjKf.jpg" alt="listItem" />
			<div className="itemInfo">
				<div className="icons">
					<PlayArrowIcon />
				</div>
			</div>
		</div>
	)
}

export default ListItem