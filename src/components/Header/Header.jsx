import { Link } from "react-router";
import styled from "styled-components";
import colors from "../../utils/style/Color";
import logo from "../../assets/dark-logo.png";
const StyledLink = styled(Link)`
  color: black;
  font-weight: 500;
  font-family: serif;
  padding: 15px;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.isFullLink &&
    `color: white;background-color:${colors.primary};padding:10px 10px`}
`;
export default function Header() {
  return (
    <div className="flex flex-row bg-white items-center justify-between h-[10dvh]">
      <img src={logo} alt="" className="w-[100px] h-[40px] translate-x-12" />
      <nav className="-translate-x-14">
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/Freelances">Profils</StyledLink>
        <StyledLink to="/Survey/1" isFullLink>
          Faire le test
        </StyledLink>
      </nav>
    </div>
  );
}
