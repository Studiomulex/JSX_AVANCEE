import PropTypes from "prop-types";

export default function Card({ label, title}) {
  return (
    <div className="flex flex-col p-6">
      <span>{label}</span>
      {/* <img src={picture} alt="Freelance" className="w-[80px] h-[80px]" /> */}
      <span>{title}</span>
    </div>
  );
}

Card.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string,
//   picture: PropTypes.string,
};
