import myphoto from "../../assets/profilephoto.png";

function Jumbotron() {
	return (
		<div className='my-5 row'>
			<div className='row'>
				<div className='col-sm-6 ml-5 text-center'>
					<h4 className='text-center text-warning'>
						<em>thank you for visiting here!!!</em>
					</h4>
					<img className="img-responsive img-thumbnail" src={myphoto} alt='myphoto'/>
				</div>
				<div className='col-sm-6 text-center'>
					<h1 className="display-4 animate__animated animate__backInDown" style={{fontFamily: "emoji",color: "forestgreen",textShadow:"3px 3px lightgreen"}}>
						GOURAV SINGH
					</h1>
					<h3 className='display-6 my-2' style={{fontFamily: "italic",color: "grey"}} >  (Web Developer) </h3>
					<h2 className='display-5 my-5' style={{fontFamily: "emoji",color: "royalblue",textShadow:"3px 3px lightblue"}}>
						<em>
						A passionate Web Developer 
						specialise in django
					 	with a keen interest in Data Science 
					 	</em>
					</h2>
					<h4 className='display-6' style={{fontFamily: "ui-monospace",color: "royalblue",textShadow:"2px 2px yellow"}}>
					 My Startup <u className="text-danger"> datanalyze.net </u> provides data analytics  on big data</h4>
					<h4 className='display-6' style={{fontFamily: "ui-monospace",color: "orangered",textShadow:"2px 2px orange"}}>
					** Introvert but friendly,Hardwork 
					and extremely focus on work **</h4>
				</div>
			</div>
		</div>
	);	
}
export default Jumbotron;