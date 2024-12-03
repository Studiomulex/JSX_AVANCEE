import PropTypes from "prop-types";
import styled from "styled-components";
export default function Card({ label, title}) {
  const CardLabel=styled.span``
  return (
    <div className="flex flex-col p-6">
      <CardLabel>{label}</CardLabel>
      {/* <img src={picture} alt="Freelance" className="w-[80px] h-[80px]" /> */}
      <span>{title}</span>
    </div>
  );
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
//   picture: PropTypes.string,
};
