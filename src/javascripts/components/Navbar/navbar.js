import utils from '../../helpers/utils';

const buildNavbar = () => {
  const domString = `
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <a href="/" class="navbar-brand">
      <h2 class="myName">John R. Johnson</h2>
    </a>
    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarCollapse">
      <div class="navbar-nav ml-auto">
        <a id="navToBio" class="nav-item nav-link" href="#bioPage">About Me</a>
        <a id="navToTechnologies" class="nav-item nav-link" href="#technologiesPage">Technologies</a>
        <a id="navToProjects" class="nav-item nav-link" href="#projectsPage">Projects</a>
      </div>
    </div>
  </nav>
  `;
  utils.printToDom('nav-div', domString);
};


export default { buildNavbar };
