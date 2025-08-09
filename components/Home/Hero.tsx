import BusinessTravel from "./BusinessTravel";
import PersonalTravel from "./PersonalTravel";

export default function Hero() {
  return (
    <section className="absolute top-0 w-full min-h-screen grid grid-cols-1 md:grid-cols-2 overflow-hidden">
      <BusinessTravel />
      <PersonalTravel />
    </section>
  );
}
