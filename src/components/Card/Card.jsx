import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../utils/style/Color";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 350px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`;
const CardLabel = styled.span`
  color: #5843e4;
  font-size: 22px;
  font-weight: bold;
`;
export default function Card({ label, title }) {
  return (
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      {/* <img src={picture} alt="Freelance" className="w-[80px] h-[80px]" /> */}
      <span>{title}</span>
    </CardWrapper>
  );
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  //   picture: PropTypes.string,
};
