import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<h1>GoodJobsHere.org</h1>
				<nav>
					<Link activeClassName={style.active} href="/">Home</Link>
					<Link href="/construction">Cities</Link>
					<Link href="/construction">Blog</Link>
					<Link activeClassName={style.active} href="/about">Contact</Link>
				</nav>
			</header>
		);
	}
}
