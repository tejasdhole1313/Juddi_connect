import AboutContactSection from "@/components/Ui/AboutUs";
import ServicesSection from "@/components/Ui/Servises";
import TravelEnquiry from "@/components/Travel/TravelEnquiry";
import DetailsSection2 from "@/components/Travel/DetailsSection2";
import DetailsSection1 from "@/components/Travel/DetailsSection1";
import TravelHero from "@/components/Travel/TravelHero";

export default function BusinessTravel() {
  const heroContent = {
    heading: "Business Travel, Simplified",
    description:
      "Whether you are travelling for business, or pampering your guests, we offer comprehensive travel & stay packages that suits every destination, mood and budget.",
    button: "View Services",
    href: "",
    backgroundImage: "/Images/travelbg1.jpg",
  };

  const detailsSectionData1 = {
    heading1: "Last minute plans?",
    subheading1: "We are ready.",
    heading2: "Last minute change in plans?",
    subheading2: "We are prepared.",
    description:
      "Travelling for business is an entirely different game, with a new set of rules. We play this well.",
    buttonText: "Learn More",
    buttonLink: "#",
    bgImage: "/Images/traveler1.jpg",
  };

  const detailsSectionData2 = {
    heading1: "Flights & Visas?",
    subheading1: "We get them done!",
    description:
      "At Juddi Connect, we have understood the pain points of corporate traveling, and it starts with getting the best flights at the best rates, and the shortest notice. Visa approvals? Our team will get you the best of both worlds, all you have to do is, call us!",
    buttonText: "Contact Us",
    buttonLink: "#",
    bgImage: "/Images/traveler2.jpg",
  };

  const enquiryContent = {
    heading: "When you need to rest",
    description:
      "After cracking that meeting, or nailing that project presentation, unwinding becomes necessary. We make sure that you go to bed in an accommodation worthy of your day.",
    button: "Enquire Now",
    href: "",
    backgroundImage: "/Images/travelbg2.jpg",
  };

  return (
    <>
      <TravelHero heroContent={heroContent} />
      <DetailsSection1 detailContent={detailsSectionData1} />
      <DetailsSection2 detailContent={detailsSectionData2} />
      <TravelEnquiry heroContent={enquiryContent} />
      <ServicesSection />
      <AboutContactSection />
    </>
  );
}
