import { h, Component } from 'preact';
import style from './style';

import * as FontAwesome from 'react-icons/lib/fa'

export default class About extends Component {

	render() {

		return (
			<div className={`${style.contact} h-100`}>
					<FontAwesome.FaPhone className="f-6 mt5"/>
					<h1 className="">Contact Us</h1>
					<h3 className="i">For all inquiries, please call:</h3>
					<h4>Brian Bullen | Director of Business Development</h4>
					<p>Office: (818) 884-8966 x1108 | Cell: (213) 309-5918</p>
					<p>21201 Victory Blvd. #235 Canoga Park, CA 91303</p>
					<a href="mailto:brian@sendersgroup.com">brian@sendersgroup.com</a>
			</div>

		);
	}
}
