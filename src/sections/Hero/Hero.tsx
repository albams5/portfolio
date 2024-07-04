import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'

export const Hero = () => {
    const {theme, toggleTheme} = useTheme()
    const themeIcon = theme === "light" ? sun : moon
    const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark
    const githubIcon = theme === "light" ? githubLight : githubDark


  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImg} alt="Profile picture of Alba Martín"/>
            <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme} /> 
        </div>
        <div className={styles.info}>
            <h1>
                Alba <br/> Martín
            </h1>
            <h2>Fullstack Developer</h2>
            <span>
                <a href="https://github.com/" target="_blank">
                <img src={githubIcon} alt="Github Icon" />
                </a>
                <a href="https://linkedin.com/" target="_blank">
                <img src={linkedinIcon} alt="Linkedin Icon" />
                </a>
            </span>
            <p> I am excited to explore new opportunities and contribute to the development of innovative projects in the software development world.</p>
            <a href={CV} download="Alba_Resume.pdf">
                <button className="hover">Resume</button>
            </a>
        </div>
    </section>
  )
}
