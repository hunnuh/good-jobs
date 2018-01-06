import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import * as FontAwesome from 'react-icons/lib/fa'

export default class Footer extends Component {
	render() {
		return (
			<footer class={style.footer}>
				<h1>© Senders Group</h1>
				<nav className="white dn db-ns">
					<Link href="/">Terms</Link>
					<Link activeClassName={style.active} href="/about">Contact</Link>
					<div className="mh4 w4 f4 dib">
						<FontAwesome.FaLinkedin className="mh2"/>
						<FontAwesome.FaFacebook className="mh2"/>
						<FontAwesome.FaEnvelope className="mh2"/>
					</div>
				</nav>
			</footer>
		);
	}
}
