import 'bootstrap';
import '../styles/main.scss';
import Navbar from './components/Navbar/navbar';
import Bio from './components/Bio/bio';
import Projects from './components/Projects/projects';

const init = () => {
  Navbar.buildNavbar();
  $('#navToBio').on('click', Bio.buildBioSection);
  $('#navToProjects').on('click', Projects.displayAllProjects);
};

init();
