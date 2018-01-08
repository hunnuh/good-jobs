import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Footer from './footer';
import Home from '../routes/home';
import Program from '../routes/program';
import Construction from '../routes/construction';
import About from '../routes/about';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
		if (typeof window !== "undefined") {
			window.scrollTo(0, 0);
		}

	};

	render() {
		return (
			<div id="app" className="">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Construction path="/construction"/>
					<About path="/about"/>
					<Program path="/program/:program/:city" />
				</Router>
				<Footer />
			</div>
		);
	}
}
