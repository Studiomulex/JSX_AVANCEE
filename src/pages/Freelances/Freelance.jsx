// import DefaultPicture from "../../assets/profile.png";
import Card from "../../components/Card/Card";
import styled from "styled-components";
const freelanceProfiles = [
  {
    name: "Jane Doe",
    jobTitle: "Devops",
    // picture: DefaultPicture,
  },
  {
    name: "John Doe",
    jobTitle: "Developpeur frontend",
    // picture: DefaultPicture,
  },
  {
    name: "Jeanne Biche",
    jobTitle: "Développeuse Fullstack",
    // picture: DefaultPicture,
  },
];

const CardContainer = styled.div`
  display: grid;
  gap: 14px;
  grid-template-rows: 100px 100px;
  grid-template-columns: repeat(1, 1fr);
  background-color:white;
`;
export default function Freelances() {
  return (
    <div>
      <h1>Freelances.</h1>
    <CardContainer>
    {freelanceProfiles.map((profile, index) => (
        <Card
          key={`${profile.name}-${index}`}
          label={profile.jobTitle}
          //   picture={profile.picture}
          title={profile.name}
        />
      ))}
    </CardContainer>
    </div>
  );
}
