import styles from "./ProjectsStyles.module.css";
import ecommerce from "../../assets/creative-concept-design.png";
import { ProjectCard } from "../../common/ProjectCard";
import mobee from '../../assets/mobee.png'
import vibesync from '../../assets/vibesync.png'
import calendar from '../../assets/calendar.png'
import rick from '../../assets/rick.png'

export const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h2 className="sectionTitle">Projects</h2>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={ecommerce}
          link="https://github.com/albams5/react-e-commerce"
          h3="Creative Concept Design"
          p="Furniture E-commerce"
        />
        <ProjectCard
          src={mobee}
          link="https://github.com/albams5/mobee-nextjs"
          h3="Mobee"
          p="Keep track of what you watch"
        />
        <ProjectCard
          src={vibesync}
          link="https://github.com/aoteron/Vibesync"
          h3="Vibesync"
          p="Music streaming App"
        />
        <ProjectCard
          src={calendar}
          link="https://github.com/albams5/Assembler-TS-Calendar"
          h3="Calendar App"
          p="Interactive calendar application"
        />
        <ProjectCard
          src={rick}
          link="https://github.com/albams5/rick-and-morty-individual-project"
          h3="Rick & Morty Frikipedia"
          p="All you need to know about your fav show"
        />
      </div>
    </section>
  );
};
