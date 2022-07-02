import { useState } from "react";
import "./list.scss"
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ListItem from "../ListItem/ListItem";
import { useRef } from "react";

const List = () => {

	const [isMoved, setIsMoved] = useState(false)
	const [slideNumber, setSlideNumber] = useState(0)

	const listRef = useRef()

	const handleClick = (direction) => {
		setIsMoved(true)
		let distance = listRef.current.getBoundingClientRect().x - 50
		if (direction === "left" && slideNumber > 0) {
			setSlideNumber(slideNumber - 1)
			listRef.current.style.transform = `translateX(${230 + distance}px)`
			if (slideNumber === 1) setIsMoved(false)
		}
		if (direction === "right" && slideNumber < 2) {
			setSlideNumber(slideNumber + 1)
			listRef.current.style.transform = `translateX(${-230 + distance}px)`
		}
	}

	return (
		<div className="list">
			<span className="listTitle">Continue Watching</span>
			<div className="wrapper">
				<ArrowBackIosNewOutlinedIcon className="sliderArrow left" onClick={() => handleClick("left")}
					style={{ display: !isMoved && 'none' }}
				/>
				<div className="container" ref={listRef}>
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
				</div>
				<ArrowForwardIosOutlinedIcon className="sliderArrow right" onClick={() => handleClick("right")} />
			</div>
		</div>
	)
}

export default List