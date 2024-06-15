import {
  faAws,
  faDocker,
  faFacebook,
  faGithub,
  faGitlab,
  faJava,
  faJs,
  faLinkedin,
  faReact,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAddressBook,
  faAward,
  faBriefcase,
  faBuilding,
  faCode,
  faCube,
  faDatabase,
  faDiagramProject,
  faLeaf,
  faPhone,
  faProjectDiagram,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const getIcons = (title) => {
  title = title.toLowerCase();
  switch (title) {
    case "about me":
      return <FontAwesomeIcon icon={faUser} />;

    case "experiences":
      return <FontAwesomeIcon icon={faBriefcase} />;

    case "skills":
      return <FontAwesomeIcon icon={faCode} />;

    case "projects":
      return <FontAwesomeIcon icon={faDiagramProject} />;

    case "address":
      return <FontAwesomeIcon icon={faAddressBook} />;

    case "phone number":
      return <FontAwesomeIcon icon={faPhone} />;

    case "github":
      return <FontAwesomeIcon icon={faGithub} />;

    case "facebook":
      return <FontAwesomeIcon icon={faFacebook} />;

    case "linkedin":
      return <FontAwesomeIcon icon={faLinkedin} />;

    case "twitter":
      return <FontAwesomeIcon icon={faTwitter} />;

    case "achievement":
      return <FontAwesomeIcon icon={faAward} />;

    case "office":
      return <FontAwesomeIcon icon={faBuilding} />;

    default:
      return <FontAwesomeIcon icon={faCube} />;
  }
};

const getSkillIcons = (title) => {
  title = title.toLowerCase();

  if (title.indexOf("java") > -1) return <FontAwesomeIcon icon={faJava} />;
  if (title.indexOf("react") > -1) return <FontAwesomeIcon icon={faReact} />;
  if (title.indexOf("rdbms") > -1) return <FontAwesomeIcon icon={faDatabase} />;
  if (title.indexOf("mongo db") > -1)
    return <FontAwesomeIcon icon={faDatabase} />;
  if (title.indexOf("gitlab") > -1) return <FontAwesomeIcon icon={faGitlab} />;
  if (title.indexOf("spring") > -1) return <FontAwesomeIcon icon={faLeaf} />;
  if (title.indexOf("docker") > -1) return <FontAwesomeIcon icon={faDocker} />;
  if (title.indexOf("express js") > -1) return <FontAwesomeIcon icon={faJs} />;
  if (title.indexOf("aws") > -1) return <FontAwesomeIcon icon={faAws} />;
  if (title.indexOf("microservice") > -1)
    return <FontAwesomeIcon icon={faProjectDiagram} />;
  return <FontAwesomeIcon icon={faCube} />;
};

export { getIcons, getSkillIcons };
