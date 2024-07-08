import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import { ProjectCard } from "../../common/ProjectCard";
import freshBurger from '../../assets/fresh-burger.png'
import hipsster from '../../assets/hipsster.png'
import fitLift from '../../assets/fitlift.png'

export const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h2 className="sectionTitle">Projects</h2>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/albams5/react-e-commerce"
          h3="Creative Concept Design"
          p="Furniture E-commerce"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/albams5/mobee-nextjs"
          h3="Mobee"
          p="Keep track of what you watch"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/aoteron/Vibesync"
          h3="Vibesync"
          p="Music streaming App"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/albams5/Assembler-TS-Calendar"
          h3="Calendar App"
          p="Interactive calendar application"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/albams5/rick-and-morty-individual-project"
          h3="Rick & Morty Frikipedia"
          p="All you need to know about your fav show"
        />
      </div>
    </section>
  );
};
