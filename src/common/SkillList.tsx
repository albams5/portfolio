type Props = {
    src: string,
    skill: string
}

export const SkillList = ({src, skill}:Props) => {
  return (
    <span>
      <img src={src} alt="Checkmark icon" />
      <p>{skill}</p>
    </span>
  );
};
