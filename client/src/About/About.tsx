import "./About.css";
import { useEffect, useState } from "react";
import { Footer } from "../components/homepage/footer";
import { NavBar } from "../components/homepage/navbar";

type TeamMember = {
  name: {
    first: string;
    last: string;
    paragraph: string;
  };
  id: number;
  linkedin: string;
  picture: {
    medium: string;
  };
};

export default function About() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/teamMembers`)
      .then((response) => response.json())
      .then((data) => setTeamMembers(data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des données :", error),
      );
  }, []);

  return (
    <>
      <NavBar />
      <main>
        {teamMembers.length > 0 ? (
          teamMembers.map((member, i) => (
            <article
              key={member.id}
              className={`team-member ${i % 2 === 0 ? "left" : "right"}`}
            >
              <img
                src={
                  member.picture.medium.startsWith("http")
                    ? member.picture.medium
                    : `${import.meta.env.VITE_API_URL}${member.picture.medium}`
                }
                alt={`${member.name.first} ${member.name.last}`}
              />
              <section className="text-container">
                <h2>
                  {member.name.first} {member.name.last}
                </h2>
                <p>Profil LinkedIn :</p>
                <p>{member.name.paragraph}</p>
              </section>
            </article>
          ))
        ) : (
          <p>Chargement des membres de l'équipe...</p>
        )}
      </main>
      <Footer />
    </>
  );
}
