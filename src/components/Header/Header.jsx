import { Link } from "react-router";
import styled from "styled-components";
const StyledLink = styled(Link)`
  color: #8186a0;
  padding: 15px;
  text-decoration: none;
  font-size: 18px;
`;
export default function Header() {
  return (
    <nav>
      <StyledLink to="/">Accueil</StyledLink>
      <StyledLink to="/Survey/1">Questionnaire</StyledLink>
      <StyledLink to="/Freelances">Profils</StyledLink>
    </nav>
  );
}
