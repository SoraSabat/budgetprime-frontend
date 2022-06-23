import './home.scss'
import Navbar from '../Navbar/Navbar'
import Featured from '../Featured/Featured'
import List from '../List/List'

const Home = () => {
	return (
		<>
			<div className="home">
				<Navbar />
				<Featured type='movie' />
				<List />
				<List />
				<List />
				<List />
			</div>
		</>
	)
}

export default Home