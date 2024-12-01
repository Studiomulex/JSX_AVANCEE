import { Outlet,Link } from "react-router"
export default function Survey(){
  return(
    <div className="bg-red-300 h-dvh w-full">
      <h1>Questionnaire</h1>
      <Link to="/Client">Questionnaire Client</Link>
      <Link to="/Freelances">Questionnaire Freelance</Link>
      <Outlet/>
    </div>
  )
}