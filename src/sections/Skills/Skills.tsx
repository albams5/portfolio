import styles from './SkillsStyles.module.css'
import checkMarkIconLight from '../../assets/checkmark-light.svg'
import checkMarkIconDark from '../../assets/checkmark-dark.svg'
import { SkillList } from '../../common/SkillList'
import { useTheme } from '../../common/ThemeContext'


export const Skills = () => {
    const {theme} = useTheme()
    const checkMarkIcon = theme === "light" ? checkMarkIconLight : checkMarkIconDark

  return (
    <section id="skills" className={styles.container}>
        <h2 className="sectionTitle">Skills</h2>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="HTML" />
            <SkillList src={checkMarkIcon} skill="CSS" />
            <SkillList src={checkMarkIcon} skill="Javascript" />
            <SkillList src={checkMarkIcon} skill="Typescript" />
            <SkillList src={checkMarkIcon} skill="GIT" />
        </div>
        <hr/>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="React" />
            <SkillList src={checkMarkIcon} skill="Next" />
            <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
            <SkillList src={checkMarkIcon} skill="Bootstrap" />
            <SkillList src={checkMarkIcon} skill="Styled Components" />
            <SkillList src={checkMarkIcon} skill="Figma" />
        </div>
        <hr/>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="NodeJS" />
            <SkillList src={checkMarkIcon} skill="ExpressJS" />
            <SkillList src={checkMarkIcon} skill="Mongoose" />
            <SkillList src={checkMarkIcon} skill="Prisma" />
            <SkillList src={checkMarkIcon} skill="MongoDB" />
            <SkillList src={checkMarkIcon} skill="PostgreSQL" />
        </div>
        <hr/>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Cloudinary" />
            <SkillList src={checkMarkIcon} skill="Auth0" />
            <SkillList src={checkMarkIcon} skill="Jenkins" />
            <SkillList src={checkMarkIcon} skill="Jest" />
            <SkillList src={checkMarkIcon} skill="Vitest" />
        </div>
        <hr/>
    </section>
  )
}
