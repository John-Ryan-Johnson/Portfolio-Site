import 'bootstrap';
import '../styles/main.scss';
import Navbar from './components/Navbar/navbar';
import Bio from './components/Bio/bio';
import Technologies from './components/Technologies/technologies';
import Projects from './components/Projects/projects';

const init = () => {
  Navbar.buildNavbar();
  $('#navToBio').on('click', Bio.buildBioSection);
  $('#navToTechnologies').on('click', Technologies.buildTechSection);
  $('#navToProjects').on('click', Projects.displayAllProjects);
};

init();
