import { MdArrowOutward } from "react-icons/md";

interface Props {
  alt?: string;
  video?: string;
  image?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  return (
    <div className="work-image">
      <div className="work-image-in">
        {props.link && (
          <a href={props.link} target="_blank" data-cursor="disable">
            <div className="work-link">
              <MdArrowOutward />
            </div>
          </a>
        )}
        {props.video ? (
          <video src={props.video} autoPlay muted playsInline loop />
        ) : (
          <img src={props.image} alt={props.alt} />
        )}
      </div>
    </div>
  );
};

export default WorkImage;