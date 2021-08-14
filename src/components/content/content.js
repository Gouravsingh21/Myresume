import academics from '../../assets/Academic.png';
import Certificate from "../../assets/Certificate.png";
import Project from "../../assets/Projects.png";
import skill from "../../assets/skills.png";
import {Link} from 'react-router-dom';

function Content() {
	return (
		<div className='container-fluid '>
			<div className='row text-center '>
			
				<div className='col mt-5 d-flex justify-content-center'>
					<Link to="/skill">
						<div className="card " style={{width: "20rem"}}>
						  <img src={skill} className="card-img-top" style={{width: "20rem" ,height:'15rem'}} alt="skills"/>
						  <div className="card-body">
						    <h5 className="card-title">Skills</h5>
						  </div>
						</div>
					</Link>
				</div>

				<div className='col mt-5 d-flex justify-content-center'>
					<Link to="/academic">
						<div className="card " style={{width: "20rem"}}>
						  <img src={academics} className="card-img-top" style={{width: "20rem" ,height:'15rem'}} alt="academics"/>
						  <div className="card-body">
						    <h5 className="card-title">Academics</h5>
						  </div>
						</div>
					</Link>
				</div>

			</div>

			<div className='row text-center'>

				<div className='col mt-5 d-flex justify-content-center'>
					<Link to="certificate/">
						<div className="card" style={{width: "20rem"}}>
						  <img src={Certificate} className="card-img-top" style={{width: "20rem" ,height:'15rem'}} alt="Certificate"/>
						  <div className="card-body">
						    <h5 className="card-title">Certificates/Achcievments</h5>
						  </div>
						</div>
					</Link>
				</div>

				<div className='col mt-5 d-flex justify-content-center'>
					<Link to="project/">
						<div className="card" style={{width: "20rem"}}>
						  <img src={Project} className="card-img-top"  style={{width: "20rem" ,height:'15rem'}} alt="project"/>
						  <div className="card-body">
						    <h5 className="card-title">Projects</h5>
						  </div>
						</div>
					</Link>
				</div>

			</div>
		</div>
	);
}

export default Content;