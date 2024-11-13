import SmashCards from "../Cards/Cards";
import { Footer } from "../homepage/footer";
import { NavBar } from "../homepage/navbar";

export default function GamePage() {
  return (
    <>
      <NavBar />
      <SmashCards />
      <Footer />;
    </>
  );
}
