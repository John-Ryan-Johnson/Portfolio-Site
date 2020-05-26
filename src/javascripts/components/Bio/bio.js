import utils from '../../helpers/utils';
import './bio.scss';

const buildBioSection = () => {
  const domString = `
  <h3 class="headingBio text-center mt-5 mb-5">About Me</h3>
    <div class="aboutContainer d-flex justify-content-center">
      <div class="aboutText mt-5 mr-5">
        <div>
          <p>Hello! I'm John, a software developer based in Nashville, TN.</p>
          <p></p>
          <p></p>
        </div>
      </div>
      <div class="aboutPic ml-5">
        <img src="https://avatars2.githubusercontent.com/u/51214463?s=460&u=bf38790b2acacad17741a86c07dfe6fab445b429&v=4" class="styledAboutPic"></img>
      </div>
    </div>
  `;
  utils.printToDom('bioPage', domString);
  utils.printToDom('technologiesPage', '');
  utils.printToDom('projectsPage', '');
};

export default { buildBioSection };
