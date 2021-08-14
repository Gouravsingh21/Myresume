import Header from '../header/header';
import Footer from "./footer";
function Academic(){
	const h2style={
		color: "forestgreen",
		textShadow:"2px 2px yellow",
		fontFamily:"italic",
		marginRight: "20px",
	};
	const h3style={
		color: "navy",
		textShadow:"2px 2px cyan",
		fontFamily:"oxygen",
		marginLeft:"10px"
	};
	return(
		<div className='row p-0  m-0'>
			<div className="row">
				<Header/>
			</div>
			<div className='row text-center'>
				<h1 className="mb-5 animate__animated animate__fadeInDown display-4" 
				style={{fontFamily: "emoji",color: "darkcyan",
				textShadow:"2px 2px yellow"}}>
				ACADEMICS</h1>
			</div>
			<div className='row my-3'> 
				<h1 className="mb-3 animate__animated animate__zoomInUp text-center" 
				style={{fontFamily: "italic",color: "red",
				textShadow:"2px 2px yellow"}}>
				GRADUATION</h1>
				<div className="col-sm-6 col-6 text-end">
					<h2 className="animate__animated animate__fadeInLeft" style={h2style}>COURSE NAME :-</h2>
					<h2 className="animate__animated animate__fadeInLeft" style={h2style}>SPECIALIZATION :-</h2>
					<h2 className="animate__animated animate__fadeInLeft" style={h2style}>COLLEGE NAME :-</h2>
					<h2 className="animate__animated animate__fadeInLeft" style={h2style}>UNIVERSITY NAME:-</h2>
					<h2 className="animate__animated animate__fadeInLeft" style={h2style}>PASSOUT YEAR :-</h2>
					<h2 className="animate__animated animate__fadeInLeft" style={h2style}>EXPECTED CGPA :-</h2>
				</div>
  				<div className="col-sm-6 col-6 text-start">
  					<h2 className="animate__animated animate__fadeInRight" style={h3style}>Bachelor in Science </h2>
  					<h2 className="animate__animated animate__fadeInRight"  style={h3style}>Computer Science</h2>
  					<h2 className="animate__animated animate__fadeInRight"  style={h3style}>Dyal Sing College </h2>
  					<h2  className="animate__animated animate__fadeInRight" style={h3style}>University of Delhi(DU) </h2>
  					<h2 className="animate__animated animate__fadeInRight"  style={h3style}>May  2022</h2>
  					<h2  className="animate__animated animate__fadeInRight" style={h3style}>8.0 to 9.0</h2>
  				</div>
			</div>
			<div className='row my-3'> 
				<h1 className="mb-3 animate__animated animate__zoomInUp text-center" 
				style={{fontFamily: "italic",color: "red",
				textShadow:"2px 2px yellow"}}>
				HIGHER SECONDARY</h1>
				<div className="col-sm-6 col-6 text-end">
					<h2 className="animate__animated animate__fadeInLeft" style={h2style}>CLASS NAME :-</h2>
					<h2 className="animate__animated animate__fadeInLeft" style={h2style}>STREAM :-</h2>
					<h2 className="animate__animated animate__fadeInLeft" style={h2style}>BOARD NAME :-</h2>
					<h2 className="animate__animated animate__fadeInLeft" style={h2style}>PASSOUT YEAR :-</h2>
					<h2 className="animate__animated animate__fadeInLeft" style={h2style}>RESULT :-</h2>
				</div>
  				<div className="col-sm-6 col-6 text-start">
  					<h2 className="animate__animated animate__fadeInRight"  style={h3style}>12 Standard </h2>
  					<h2  className="animate__animated animate__fadeInRight" style={h3style}>Non-Medical(PCM)</h2>
  					<h2  className="animate__animated animate__fadeInRight" style={h3style}>CBSE </h2>
  					<h2  className="animate__animated animate__fadeInRight" style={h3style}>2019 </h2>
  					<h2  className="animate__animated animate__fadeInRight" style={h3style}>89%</h2>
  				</div>
			</div>
			<div className='row my-3'> 
				<h1 className="mb-3 animate__animated animate__zoomInUp text-center" 
				style={{fontFamily: "italic",color: "red",
				textShadow:"2px 2px yellow"}}>
				SECONDARY</h1>
				<div className="col-sm-6 col-6 text-end">
					<h2 className="animate__animated animate__fadeInLeft" style={h2style}>CLASS NAME :-</h2>
					<h2 className="animate__animated animate__fadeInLeft" style={h2style}>STREAM :-</h2>
					<h2 className="animate__animated animate__fadeInLeft" style={h2style}>BOARD NAME :-</h2>
					<h2 className="animate__animated animate__fadeInLeft" style={h2style}>PASSOUT YEAR :-</h2>
					<h2 className="animate__animated animate__fadeInLeft" style={h2style}>RESULT :-</h2>
				</div>
  				<div className="col-sm-6 col-6 text-start">
  					<h2  className="animate__animated animate__fadeInRight"  style={h3style}>10 Standard </h2>
  					<h2 className="animate__animated animate__fadeInRight"  style={h3style}>ALL Subjects</h2>
  					<h2  className="animate__animated animate__fadeInRight" style={h3style}>CBSE </h2>
  					<h2 className="animate__animated animate__fadeInRight"  style={h3style}>2017 </h2>
  					<h2 className="animate__animated animate__fadeInRight"  style={h3style}>9.5 CGPA</h2>
  				</div>
			</div>
			<Footer/>
		</div>
	);
}

export default Academic;