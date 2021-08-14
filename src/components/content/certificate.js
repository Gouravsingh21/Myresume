import python from "../../assets/pythonbasic.png";
import html from "../../assets/html.JPG";
import ai from "../../assets/element_ai.JPG";
import python_web from "../../assets/python_web_data.png";
import python_data from "../../assets/python_database.png";
import hack from "../../assets/hack.JPG";
import Footer from "./footer";

import Header from '../header/header';
function Certificat(){
	return(
		<div className="row">
			<Header/>
			<div className="row text-center">
				<div className="card text-center my-5 mx-3" style={{width:"600px",backgroundColor:"lightblue"}}>
					<div className="card-body">
						<h1 className="card-title display-4">Python Basic Course</h1>
						<img src={python} className="card-img-top" alt="python_basic_certificate" />
						<h5 className="card-text my-3 ">In this Course I learn about the basic of programming , 
						loops, nested loops, conditional statemend ,try ,except ,classes
						and objects in python</h5>
						<a href="https://coursera.org/share/44803d9bb9f4fd9e425fc9a85c29d757" target="blank" className="btn btn-primary">Visit official page</a>
					</div>
				</div>
				<div className="card text-center my-5 mx-3" style={{width:"600px",backgroundColor:"lightblue"}}>
					<div className="card-body">
						<h1 className="card-title display-4">Python Basic Assessment</h1>
						<img src={hack} className="card-img-top" alt="python_basic_certificate" />
						<h5 className="card-text my-3 ">Assesment given on Hackerrank for Python</h5>
						<a href="https://www.hackerrank.com/certificates/bab5a65b981b" target="blank" className="btn btn-primary">Visit official page</a>
					</div>
				</div>
				<div className="card text-center my-5 mx-3" style={{width:"600px",backgroundColor:"lightblue"}}>
					<div className="card-body">
						<h1 className="card-title display-4">Database with python</h1>
						<img src={python_data} className="card-img-top" alt="python_basic_certificate" />
						<h5 className="card-text my-3 ">In this Course I learn about the controlling and managing the database
						with the help of python learn to do sql queries in python to create table, add row, add coloumn,
						access data etc..</h5>
						<a href="https://coursera.org/share/440c1a69c6f68ac7b0847ab1abe11211" target="blank" className="btn btn-primary">Visit official page</a>
					</div>
				</div>
				<div className="card text-center my-5 mx-3" style={{width:"600px",backgroundColor:"lightblue"}}>
					<div className="card-body">
						<h1 className="card-title display-4">Elements of Artificial Intelligence</h1>
						<img src={ai} className="card-img-top" alt="python_basic_certificate" />
						<h5 className="card-text my-3 ">In this Course I learn about the basics and elements of AI types of 
						machine learning modules,decision tree, Bay's probability law, neural networking and problem solving
						</h5>
						<h5 className="display-6 text-success font-weight-bold">University of Helsinki</h5>
					</div>
				</div>
				<div className="card text-center my-5 mx-3" style={{width:"600px",backgroundColor:"lightblue"}}>
					<div className="card-body">
						<h1 className="card-title display-4">Access Web data using python</h1>
						<img src={python_web} className="card-img-top" alt="python_basic_certificate" />
						<h5 className="card-text my-3 ">In this Course I learn about the web scrapping how to fetch
						data from the internet using python and how to parse the response the webpages
						</h5>
						<a href="https://coursera.org/share/01c33f0dae78f52b0e22f6a271f93b97" target="blank" className="btn btn-primary">Visit official page</a>
					</div>
				</div>
				<div className="card text-center my-5 mx-3" style={{width:"600px",backgroundColor:"lightblue"}}>
					<div className="card-body">
						<h1 className="card-title display-4">HTML, CSS and Javascript</h1>
						<img src={html} className="card-img-top" alt="python_basic_certificate" />
						<h5 className="card-text my-3 ">In this Course I learn about the basic of html tags 
						,css properties using inline ,external  css, media queries, Javascript, add ajax request. 
						</h5>
						<a href="https://coursera.org/share/d147bda8174647b52b02003e2face81a" target="blank" className="btn btn-primary">Visit official page</a>
					</div>
				</div>
			</div>
			<Footer/>
		</div>
	);
}

export default Certificat;