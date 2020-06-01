import utils from '../../helpers/utils';
import './technologies.scss';

const buildTechSection = () => {
  const domString = `
    <h3 class="headingTech text-center mt-5">Technologies</h3>
      <ul class="techSection d-flex flex-wrap justify-content-center">
        <li><img class="tech-item" src="https://img.icons8.com/color/144/000000/html-5.png"/></li>
        <li><img class="tech-item" src="https://img.icons8.com/color/144/000000/css3.png"/></li>
        <li><img class="tech-item" src="https://img.icons8.com/color/144/000000/sass.png"/></li>
        <li><img class="tech-item" src="https://img.icons8.com/color/144/000000/bootstrap.png"/></li>
        <li><img class="tech-item" src="https://img.icons8.com/dusk/144/000000/webpack.png"/></li>
        <li><img class="tech-item" src="https://img.icons8.com/color/144/000000/git.png"/></li>
        <li><img class="tech-item" src="https://img.icons8.com/color/144/000000/github--v1.png"/></li>
        <li><img class="tech-item" src="https://icons.iconarchive.com/icons/sicons/basic-round-social/512/jquery-icon.png"/></li>
        <li><img class="tech-item" src="https://img.icons8.com/color/144/000000/javascript.png"/></li>
        <li><img class="tech-item" src="https://img.icons8.com/officel/144/000000/react.png"/></li>
      </ul>
  `;
  utils.printToDom('technologiesPage', domString);
  utils.printToDom('bioPage', '');
  utils.printToDom('projectsPage', '');
};

export default { buildTechSection };
