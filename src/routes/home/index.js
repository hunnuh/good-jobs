import { h, Component } from 'preact';
import style from './style';
import tachyons from 'tachyons';
import { Link } from 'preact-router/match';
import Select from 'react-select';
import 'react-select/dist/react-select.css';



export default class Home extends Component {

	state = {
    selectedCity: '',
		selectedProgram: '',
		buttonEnabled: false
  }


  handleCityChange = (selectedCity) => {
    this.setState({ selectedCity });
    console.log(`Selected: ${selectedCity.label}`);
	}

	handleProgramChange = (selectedProgram) => {
    this.setState({ selectedProgram });
    console.log(`Selected: ${selectedProgram.label}`);
  }

	componentDidUpdate(nextps, nextst){
		if (this.state.selectedCity && this.state.selectedProgram){
			if (!this.state.buttonEnabled){
				this.setState({buttonEnabled: true})
			}

			console.log(this.state.buttonEnabled)
		}
	}

	render() {

		const { selectedCity, selectedProgram, buttonEnabled } = this.state;
  	const city = selectedCity && selectedCity.value;
		const program = selectedProgram && selectedProgram.value;
		const linkurl = "/program/" + program + "/" + city;

		return (
			<div class={`${style.home} ${style.tile}`}>
				<div class={`w-100 pt4`}>
					<div class={`${style.hero} w-100 vh-75-ns flex flex-row justify-end-ns justify-center shadow-5 cover bg-bottom z-4`} >
						<div class={`w-33-l w-50-m h-100 pa4 mr5 mt1 flex flex-column justify-center`}>
							<div class={`${style.panel} w-100 mt0-ns mt5 pa4 shadow-3 flex flex-column justify-between overflow-y-scroll overflow-y-hidden-ns` }>
								<h1 class={`${style.roboto} ma0 white f4-m f1-ns fw9 b `}>EARN WHILE</h1>
								<h1 class={`${style.roboto} ma0 white f4-m f1-ns fw9 b `}>YOU LEARN!</h1>
								<h2 class={`mv2 white f3-l f4 `}>Up to $27/hr in the construction industry</h2>
								<p class={`mv2 white f4-l f6 lh-copy dn db-l`}>Train for a career in construction, making money while you're still in school. Find out about the exciting Building Trades Apprenticeship programs.</p>
								<div className="mw5-l mv4 ">
									<Link href="/about" class={`${style.gjhblue} grow pointer mt0-ns pa3 br3 white f4 mt5 link grow pointer`}>Learn more</Link>
								</div>
							</div>
						</div>
					</div>
					<div class={` w-100 h5-ns mb4 flex flex-column justify-start z-2 `} >
						<div class={`${style.shadow} absolute w-100`}></div>
						<h1 className=" mt5 self-center tc tl-l ph2">Search for Programs in Your Area Now!</h1>
						<div className="w-80 flex flex-row-ns flex-column justify-between self-center mb5">
							<legend className="ph0 mh0 fw6 clip">Sign Up</legend>
							<div className="w-25-ns w-100 self-center">
								<label className="db fw4 lh-copy f6" for="email-address">Email address</label>
								<input className="pa2 input-reset ba br3 w-100 measure" type="email" name="email-address"  id="email-address"/>
							</div>
							<div className="w-25-ns w-100 mt3 self-center">
								<label className="db fw4 lh-copy f6" >City</label>
								<Select
									className="mb3"
									name="city-selector"
									value={city}
									clearable={false}
									searchable={false}
									onChange={this.handleCityChange}
									placeholder="Select City..."
									options={[
										{ value: 'sf', label: 'San Francisco' },
										{ value: 'la', label: 'Los Angeles' },
									]}
								/>
							</div>
							<div className="w-25-ns w-100 mt3 self-center">
								<label className="db fw4 lh-copy f6" >Program</label>
								<Select
									className="mb3"

									name="program-selector"
									value={program}
									clearable={false}
									onChange={this.handleProgramChange}
									placeholder="Select Program..."
									searchable={false}
									options={[
										{ value: 'plumbing', label: 'Plumbing' },
										{ value: 'electrical', label: 'Electrical' },
									]}
								/>
							</div>
							{!buttonEnabled && <div class={`bg-gray shadow-3 pv3-l pv2 ph4-l ph3 br2 white f3-l f5 mt4 link self-center`} onClick={() => console.log(buttonEnabled)}>Find Jobs</div>}
							{buttonEnabled && <Link class={`${style.gjhblue} shadow-3 pv3-l pv2 ph4-l ph3 br2 white f3-l f5 mt4 link grow pointer self-center`} href={linkurl} onClick={() => console.log(linkurl)}>Find Jobs</Link>}

						</div>
					</div>
				</div>
			</div>
		);
	}
}
