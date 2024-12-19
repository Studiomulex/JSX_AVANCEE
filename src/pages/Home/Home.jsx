import { Link } from "react-router";
import homeIllustration from "../../assets/home-illustration.svg";
import "../../App.css";
export default function Home() {
  return (
    <div className="h-[90dvh] flex justify-center items-center">
      <section className=" bg-slate-100 w-5/6 h-5/6 flex items-center justify-between self-end p-8 rounded-xl">
        <div className="h-full w-6/12 p-4 font-serif flex flex-col gap-4">
          <h1 className="text-[2em]">
            Repérez vos besoins,
            <br /> on s’occupe du reste, <br /> avec les meilleurs talents
          </h1>
          <Link to="/Survey/1" className="bg-blue-600 p-2 w-40 text-white">
            Faire le test
          </Link>
        </div>
        <div>
          <img
            src={homeIllustration}
            alt="img-home"
            className="w-[450px] h-[450px]"
          />
        </div>
      </section>
    </div>
  );
}
 