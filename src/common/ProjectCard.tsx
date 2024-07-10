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
    <section>
      <img src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
      <button><a href={link} target="_blank">Github</a></button>
      {deploy && (
          <button><a href={deploy} target="_blank">Deployed Project</a></button>
      )}
      <p style={{ fontSize: '12px' }}>{comment && comment}</p>
    </section>
  );
};
