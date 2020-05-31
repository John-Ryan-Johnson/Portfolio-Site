import './projects.scss';
import utils from '../../helpers/utils';
import projectsData from '../../helpers/data/projectsData';
import projectCard from '../projectCard/projectCard';

const displayAllProjects = () => {
  let domString = '<h3 class="headingProjects text-center mt-5 mb-1">Projects</h3>';
  domString += '<div class="d-flex flex-wrap justify-content-center">';
  projectsData.getAllProjects()
    .then((projects) => {
      projects.forEach((project) => {
        domString += projectCard.projectCardBuilder(project);
      });
      domString += '</div>';
      utils.printToDom('projectsPage', domString);
      utils.printToDom('bioPage', '');
      utils.printToDom('technologiesPage', '');
    })
    .catch((error) => console.error(error));
};

export default { displayAllProjects };
