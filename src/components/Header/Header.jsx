import { Link } from "react-router";
import styled from "styled-components";
import colors from "../../utils/style/Color";
const StyledLink = styled(Link)`
  color: #8186a0;
  padding: 15px;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.isFullLink &&
    `color: white; border-radius: 30px; background-color:${colors.primary}`}
`;
export default function Header() {
  return (
    <nav>
      <StyledLink to="/">Accueil</StyledLink>
      <StyledLink to="/Freelances">Profils</StyledLink>
      <StyledLink to="/Survey/1" isFullLink>
        Faire le test
      </StyledLink>
    </nav>
  );
}
