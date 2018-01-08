import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import { slide as Menu } from 'react-burger-menu'

export default class Header extends Component {
	showSettings (event) {
    event.preventDefault();
  }
	render() {
		return (
			<header class={style.header}>
				<h1>GoodJobsHere.org</h1>
				<nav className="dn db-ns">
					<Link activeClassName={style.active} href="/">Home</Link>
					<Link href="/construction">Cities</Link>
					<Link href="/construction">Blog</Link>
					<Link activeClassName={style.active} href="/about">Contact</Link>
				</nav>
				<Link className="white mt3 pr4 fr center db dn-ns link" href="/">Home</Link>
			</header>
		);
	}
}
