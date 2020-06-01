import utils from '../../helpers/utils';
import './bio.scss';

const buildBioSection = () => {
  const domString = `
  <h3 class="headingBio text-center mt-5 mb-5">About Me</h3>
    <div class="aboutContainer d-flex justify-content-center">
      <div class="aboutText mt-5 mr-5">
        <div>
          <p>Hello! I'm John, a software developer based in Nashville, TN.</p>
          <p>My passion for software development started with watching videos online.</p>
          <p>Seeing the things that people create with code and an idea is amazing to me.</p>
          <p>Working in a team environment with a common goal is a life changing experience. I enjoy the camaraderie. The continuous learning of the fundamentals and all of the new things in software help to keep my mind fresh and renewed for each challenge. Learning is my new career. If you have any questions or would like to talk, please call or email me. Thank You!
          </p>
          <hr>
        </div>
      </div>
      <div class="aboutPic mt-5 ml-5">
        <img src="https://avatars2.githubusercontent.com/u/51214463?s=460&u=bf38790b2acacad17741a86c07dfe6fab445b429&v=4" class="styledAboutPic"></img>
      </div>
    </div>
  `;
  utils.printToDom('bioPage', domString);
  utils.printToDom('technologiesPage', '');
  utils.printToDom('projectsPage', '');
};

export default { buildBioSection };
