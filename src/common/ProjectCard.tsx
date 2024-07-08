type Props ={
    src: string,
    link: string,
    h3: string,
    p: string
}
export const ProjectCard = ({src, link, h3, p}:Props) => {
  return (
    <a href={link} target="_blank" >
    <img className="hover" src={src} alt={`${h3} logo`} />
    <h3>{h3}</h3>
    <p>{p}</p>
    </a>
  )
}
