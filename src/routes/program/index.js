import { h, Component } from 'preact';
import style from './style';
import rawdata from './_data.json'

import * as FontAwesome from 'react-icons/lib/fa'



export default class Program extends Component {
	state = {
		time: Date.now(),
		data: rawdata.programs[this.props.program]
	};

	// gets called when this route is navigated to
	componentDidMount() {

		// start a timer for the clock:
		this.timer = setInterval(this.updateTime, 1000);
	}

	// gets called just before navigating away from the route
	componentWillUnmount() {
		clearInterval(this.timer);
	}

	// update the current time
	updateTime = () => {
		this.setState({ time: Date.now() });
	};

	increment = () => {
		this.setState({ count: this.state.count+1 });
	};

	render({ program, city }, { time, data }) {
		console.log(city)
		const programNames = {
			"electrical": "Electrical",
			"plumbing": "Plumbing"
		}
		const cityNames = {
			"la": "Los Angeles",
			"sf": "San Francisco"
		}

		const programDescBullets = data.programDesc.map((bullet) =>
			<li className="mb2">{bullet}</li>
		);
		const programReqsBullets = data.programReqs.map((bullet) =>
			<li className="mb2">{bullet}</li>
		);
		const addlInfo = data.additional.map((bullet) =>
			<p>{bullet}</p>
		);
		return (
			<div class={style.program}>
				<div className="center mw8 flex flex-row-ns flex-column justify-center mb4">


					<div className="w-60-ns w-100 ph3">
						<h1 className="f1-ns f2 mb2">{data.title} </h1>
						<h2 className="f3 mv2">Program: {programNames[program]}</h2>
						<span className="f3 fw6 ">{ cityNames[city] } // </span>
						<span className="f3 i">{data.headline}</span>
						<hr className="mv4"/>
						<h2>About this position:</h2>
						<p>{data.blurb}</p>
						<hr className="mv4"/>
						<h2>Apprenticeship:</h2>
						<h3>The {data.title} Apprentice program involves:</h3>
						<ul>{programDescBullets}</ul>
						<h3>Requirements for application:</h3>
						<ul>{programReqsBullets}</ul>
						{addlInfo}
						<hr className="mv4"/>
						<h3>Call for dates and times of application:</h3>
						<p className="mv0">{data.contact.name}</p>
						<p className="mv0">{data.contact.address}</p>
						<p className="mv0">{cityNames[city]}, CA</p>
						<p className="mt0 mb2">{data.contact.phone}</p>
						<a href={data.contact.web}>{data.contact.web}</a>
					</div>

					<div className="w-40-ns w-100 flex flex-column ">
						<div className="fixed-ns self-center-ns pa3 ">
							<img className="" src={data.img}/>
							<div className="w-100 h3 flex flex-column justify-center">
								{cityNames[city]}, CA // {data.contact.phone}
							</div>
							<div className="w-100 h3 bt bb b--gray flex flex-row items-center justify-between mv2">
								<div className="flex flex-row w4 h2 items-center self-center justify-between f3">
									<FontAwesome.FaLinkedin />
									<FontAwesome.FaFacebook />
									<FontAwesome.FaEnvelope />

								</div>
								<button class={`${style.gjhblue} w4 pa2 br3 white f5 link grow pointer self-center`}>Learn more...</button>
							</div>
						</div>
					</div>

				</div>
			</div>
		);
	}
}
