import Background from './BackgroundImage';

function Header() {
	return (
		<header>
			<Background />
			<h1 className="text-7xl tracking-[5px] uppercase text-gray-50 mt-36 text-center ">
				<b>Word</b>
				<span className="font-light"> - Analytiks</span>
			</h1>
		</header>
	);
}

export default Header;
