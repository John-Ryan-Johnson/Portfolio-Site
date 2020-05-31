import './projectCard.scss';

const projectCardBuilder = (project) => {
  let domString = '';
  if (project.available === true) {
    domString += `
    <div class="card-container">
      <div class="front">
        <img src="${project.screenshot}" alt="project image">
      </div>
      <div class="back">
        <h4 class="mt-3 mb-5">${project.title}</h4>
        <p>${project.description}</p>
        <hr></hr>
        <p class="mb-5">${project.technologiesUsed}</p>
        <a class="mr-2" href="${project.url}">Go To App</a>
        <a class="ml-2" href="${project.githubUrl}"><i class="fab fa-github fa-lg fa-2x"></i></a>
      </div>
    </div>`;
  }
  return domString;
};

export default { projectCardBuilder };
