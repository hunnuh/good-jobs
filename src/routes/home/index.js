import { h, Component } from 'preact';
import style from './style';
import * from 'tachyons';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<h1 className="">Home</h1>
				<p>This is the Home component.</p>
			</div>
		);
	}
}
