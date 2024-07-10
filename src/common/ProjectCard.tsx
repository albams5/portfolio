type Props = {
  src: string;
  link: string;
  h3: string;
  p: string;
  deploy?: string;
  comment?: string;
};
export const ProjectCard = ({ src, link, h3, p, deploy, comment }: Props) => {
  return (
    <a href={link} target="_blank">
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
      {deploy && (
          <a href={deploy} target="_blank"><p>Deployed Project</p></a>
      )}
      <p style={{ fontSize: '12px' }}>{comment && comment}</p>
    </a>
  );
};
