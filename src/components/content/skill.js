import Header from '../header/header';
import Footer from "./footer";
function Skill(){
	return(
		<div className='row'>
			<Header/>
			<div className='row text-center my-3'>
				<h1 className="display-4 animate__animated animate__backInDown" style={{fontFamily: "emoji",color: "royalblue",textShadow:"3px 3px lightgreen"}}>
					GOURAV SINGH
				</h1>
			</div>
			<div className='row my-3'>
				<h2 className='display-5 text-center' style={{fontFamily: "italic",color: "green",textShadow:"2px 2px yellow"}}>MY SKILLS</h2>
				<h1 className="mb-3 animate__animated animate-fade text-center" 
				style={{fontFamily: "emoji",color: "#B29700",
				textShadow:"2px 2px yellow"}}>
				Sql Godlen badge(Hackerrank)</h1>
				<h1 className="mb-3 animate__animated animate-fade text-center" 
				style={{fontFamily: "emoji",color: "silver",
				textShadow:"2px 2px silver"}}>
				Problem Solving silver badge(Hackerrank)</h1>
			</div>

			<div className='row'>
				<div className='row text-center my-3'>
					<h1 className="mb-3 animate__animated animate-fade" 
					style={{fontFamily: "emoji",color: "red",
					textShadow:"2px 2px yellow"}}>
					HTML</h1>
					<div className='col'>
						<h3>Proficency</h3>
					</div>
					<div className='col'>
						<h3>Intermediate</h3>
					</div>
					<div className="col">
						<i className="fa fa-star" aria-hidden="true"></i>
						<i className="fa fa-star" aria-hidden="true"></i>
						<i className="fa fa-star" aria-hidden="true"></i>
						<i className="fa fa-star" aria-hidden="true"></i>
						<i className="fa fa-star-half-o" aria-hidden="true"></i>
					</div>
				</div>
				<div className='row text-center my-3'>
					<h1 className="mb-3 animate__animated animate-fade" 
					style={{fontFamily: "emoji",color: "red",
					textShadow:"2px 2px yellow"}}>
					CSS</h1>
					<div className='col'>
						<h3>Proficency</h3>
					</div>
					<div className='col'>
						<h3>Basic</h3>
					</div>
					<div className="col">
						<i className="fa fa-star" aria-hidden="true"></i>
						<i className="fa fa-star" aria-hidden="true"></i>
						<i className="fa fa-star-half-o" aria-hidden="true"></i>
					</div>
				</div>
				<div className='row text-center my-3'>
					<h1 className="mb-3 animate__animated animate-fade" 
					style={{fontFamily: "emoji",color: "red",
					textShadow:"2px 2px yellow"}}>
					Python</h1>
					<div className='col'>
						<h3>Proficency</h3>
					</div>
					<div className='col'>
						<h3>Intermediate</h3>
					</div>
					<div className="col">
						<i className="fa fa-star" aria-hidden="true"></i>
						<i className="fa fa-star" aria-hidden="true"></i>
						<i className="fa fa-star" aria-hidden="true"></i>
						<i className="fa fa-star" aria-hidden="true"></i>
						<i className="fa fa-star-half-o" aria-hidden="true"></i>
					</div>
				</div>
				<div className='row text-center my-3'>
					<h1 className="mb-3 animate__animated animate-fade" 
					style={{fontFamily: "emoji",color: "red",
					textShadow:"2px 2px yellow"}}>
					Django</h1>
					<div className='col'>
						<h3 className=''>Proficency</h3>
					</div>
					<div className='col'>
						<h3>Advance</h3>
					</div>	
					<div className="col">
						<i className="fa fa-star" aria-hidden="true"></i>
						<i className="fa fa-star" aria-hidden="true"></i>
						<i className="fa fa-star" aria-hidden="true"></i>
						<i className="fa fa-star" aria-hidden="true"></i>
						<i className="fa fa-star" aria-hidden="true"></i>
					</div>
				</div>
				<div className='row text-center my-3'>
					<h1 className="mb-3 animate__animated animate-fade" 
					style={{fontFamily: "emoji",color: "red",
					textShadow:"2px 2px yellow"}}>
					Flask</h1>
					<div className='col'>
						<h3 className=''>Proficency</h3>
					</div>
					<div className='col'>
						<h3>Intermediate</h3>
					</div>	
					<div className="col">
						<i className="fa fa-star" aria-hidden="true"></i>
						<i className="fa fa-star" aria-hidden="true"></i>
						<i className="fa fa-star" aria-hidden="true"></i>
						<i className="fa fa-star" aria-hidden="true"></i>
						<i className="fa fa-star-half-o" aria-hidden="true"></i>
					</div>
				</div>
				<div className='row text-center my-3'>
					<h1 className="mb-3 animate__animated animate-fade" 
					style={{fontFamily: "emoji",color: "red",
					textShadow:"2px 2px yellow"}}>
					SQL</h1>
					<div className='col'>
						<h3 className=''>Proficency</h3>
					</div>
					<div className='col'>
						<h3>Advacnce</h3>
					</div>	
					<div className="col">
						<i className="fa fa-star" aria-hidden="true"></i>
						<i className="fa fa-star" aria-hidden="true"></i>
						<i className="fa fa-star" aria-hidden="true"></i>
						<i className="fa fa-star" aria-hidden="true"></i>
						<i className="fa fa-star" aria-hidden="true"></i>
					</div>
				</div>
				<div className='row text-center my-3'>
					<h1 className="mb-3 animate__animated animate-fade" 
					style={{fontFamily: "emoji",color: "red",
					textShadow:"2px 2px yellow"}}>
					React</h1>
					<div className='col'>
						<h3 className=''>Proficency</h3>
					</div>
					<div className='col'>
						<h3>Basic</h3>
					</div>	
					<div className="col">
						<i className="fa fa-star" aria-hidden="true"></i>
						<i className="fa fa-star" aria-hidden="true"></i>
						<i className="fa fa-star" aria-hidden="true"></i>
					</div>
				</div>
			</div>
			<Footer/>
		</div>
	);
}

export default Skill;
