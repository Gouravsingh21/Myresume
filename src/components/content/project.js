import Header from '../header/header';
import Footer from "./footer";
function Project(){
	return (
		<div>
			<Header/>
			<div className="row">
				<h1 className="display-4 text-center animate__animated animate__backInDown"
					style={{fontFamily: "emoji",color: "royalblue",textShadow:"3px 3px lightgreen"}}>
					MY PROJECTS
				</h1>
				<div className="col-10 mx-3">
					<h1 className="display-6 text-center animate__animated animate__backInLeft"
						style={{fontFamily: "oxygen",color: "orangered",textShadow:"2px 2px yellow"}}>
						E-Commerce Project(Beginner)
					</h1>
					<h1 className="text-success h2">AIM(My first project)</h1>
					<h5 className="text-primary">This project can help farmer to sell their crops online to the wholesaler
					 shopkeeper,dealers or direct buyers via help on online platform
					</h5>
					<h3 className="text-danger">Tech Stack Used in project</h3>
					<ol className="text-primary">
					  <li>Django</li>
					  <li>Sqlite 3 Database</li>
					  <li>Bootstrap</li>
					  <li>Javascript</li>
					  <li>CSS</li>
					</ol>
					<h3 className="text-danger">Language Used in Project</h3>
					<ol className="text-primary">
					  <li>Python</li>
					  <li>HTML</li>
					  <li>CSS</li>
					  <li>Javascript</li>
					</ol>
					<h3 className="text-danger">Features Available in thid demo project</h3>
					<ol className="text-primary">
					  <li>Buyers can signup in the website and create an account-</li>
					  <li>Buyers can use the facility of cart after creating account</li>
					  <li>Buyers can place order whatever they need as per requirement</li>
					  <li>Farmer can register himself/herself by providing the neccessary informartion like:-
						Village, Name,Age
					  </li>
					  <li>Farmer can add their multile crops like:-
						Wheat, Bajra, Rice etc
					  </li>
					</ol>
					<button className="btn btn-warning">
						<a href="http://gouravsingh21.pythonanywhere.com" className="text-outline-warning" target="blank">View MY Project</a>
					</button>
				</div>
				<div className="col-10 mt-5">
					<h1 className="display-6 text-center animate__animated animate__backInLeft"
						style={{fontFamily: "oxygen",color: "orangered",textShadow:"2px 2px yellow"}}>
						Resume Site 
					</h1>
					<h1 className="text-success h2">AIM</h1>
					<h5 className="text-primary">This project shows my Port folio for storing all relevant information regarding my technical knowledge		 
					</h5>
					<h3 className="text-danger">Tech Stack Used in project</h3>
					<ol className="text-primary">
					  <li>React</li>
					  <li>CSS</li>
					  <li>Bootstrap</li>
					  <li>HTML</li>
					</ol>
					<button className="btn btn-warning">
						<a href="/" className="text-outline-warning" target="blank">Same Project</a>
					</button>
				</div>
				<div className="col-10 mt-5">
					<h1 className="display-6 text-center animate__animated animate__backInLeft"
						style={{fontFamily: "oxygen",color: "orangered",textShadow:"2px 2px yellow"}}>
						datanalyze
					</h1>
					<h1 className="text-success h2">AIM</h1>
					<h5 className="text-primary">This project provides the data analytics on csv or excel data to the user as well as provides data visualization		 
					</h5>
					<h3 className="text-danger">Tech Stack Used in project</h3>
					<ol className="text-primary">
					  <li>Django</li>
					  <li>CSS</li>
					  <li>Bootstrap</li>
					  <li>Animations</li>
					  <li>Javascript</li>
					  <li>Sqlite</li>
					</ol>
					<button className="btn btn-warning">
						<a href="https://datanalyze.net/" className="text-outline-warning" target="blank">View Project</a>
					</button>
				</div>	
			</div>
			<Footer/>
		</div>
	);
}

export default Project;