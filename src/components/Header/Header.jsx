import { Link } from "react-router";
export default function Header() {
  return (
    <nav>
      <Link to="/" className="bg-red-400">Accueil</Link>
      <Link to="/Survey">Questionnaire</Link>
      <Link to="/Freelances">Profils</Link>
    </nav>
  );
}
