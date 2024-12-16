import { useParams } from "react-router-dom";
import { Link } from "react-router";
import { useEffect } from "react";
export default function Survey() {
  const { questionNumber } = useParams();
  const questionNumberInt = parseInt(questionNumber);
  const prevQuestionNumber =
    questionNumberInt === 1 ? 1 : questionNumberInt - 1;
  const nextQuestionNumber = questionNumberInt + 1;
  useEffect(() => {
    fetch(`http://localhost:8000/survey`)
      .then((Response) => Response.json())
      .then(({ SurveyData }) => console.log(SurveyData))
      .catch((error)=>console.log(error))
  },[]);
  return (
    <div className="bg-red-300 h-dvh w-full">
      <h1>Questionnaire</h1>
      <h2>Question {questionNumber}</h2>
      <Link to={`/Survey/${prevQuestionNumber}`}>Précedent</Link>
      {questionNumberInt === 10 ? (
        <Link to="/Result">Résultat</Link>
      ) : (
        <Link to={`/Survey/${nextQuestionNumber}`}>Suivant</Link>
      )}
    </div>
  );
}
