import git from "../../assets/git.png";
import linked from "../../assets/ln.png";
import gmail from "../../assets/gm.png";

function Footer() {
  return (
    <div className="row mt-5 bg-secondary">
      <div className="col text-end">
        <a href="https://github.com/Gouravsingh21" target="blank">
          <img src={git} alt  ="github icon"/>
        </a>
      </div>
      <div className="col text-center">
        <a href="https://linkedin.com/in/gourav-singh-2106/" target="blank">
            <img src={linked} alt="linked in icon"/>
        </a>
      </div>
      <div className="col text-start" >
        <a href="mailto:gouravgreatji@gmail.com" target="blank">
          <img src={gmail} alt="gmail icon" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
