import { h, Component } from 'preact';
import style from './style';

import * as FontAwesome from 'react-icons/lib/fa'

export default class Construction extends Component {

	render() {

		return (
			<div className={`${style.construction} pa4`}>
					<FontAwesome.FaWrench className="f-6 mt5"/>
					<h1 className="">Under Construction</h1>
					<h3 className="i">please check back later...</h3>

			</div>

		);
	}
}
