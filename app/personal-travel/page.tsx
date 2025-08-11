import AboutContactSection from "@/components/Ui/AboutUs";
import ServicesSection from "@/components/Ui/Servises";
import TravelEnquiry from "@/components/Travel/TravelEnquiry";
import DetailsSection2 from "@/components/Travel/DetailsSection2";
import DetailsSection1 from "@/components/Travel/DetailsSection1";
import TravelHero from "@/components/Travel/TravelHero";

export default function PersonalTravel() {
  const heroContent = {
    heading: "Your best holiday is yet to come",
    description:
      "Your best holiday is yet to come And like the many that traveled this road before you, this is going to be memorable. Welcome to Juddi Connect !",
    button: "View Services",
    href: "/personal-travel#servises",
    backgroundImage: "/Images/travelbg3.jpg",
  };

  const enquiryContent = {
    heading: "Hidden treasures, Unexplored gems",
    description:
      "The world is a wonderful place, but have you seen it all? Our travel package portfolio is filled with experiences and destinations that will blow your mind, and leave you wanting for more!",
    button: "Enquire Now",
    href: "#about",
    backgroundImage: "/Images/travelbg4.jpg",
  };

  const detailsSectionData1 = {
    heading1: "Flights & Visas? ",
    subheading1: "We get them done!",
    heading2: "",
    subheading2: "",
    description:
      "At Juddi Connect, we have understood the pain points of traveling, and it starts with getting the cheapest flight tickets, and Visa approvals. Our team will get you the best of both worlds, all you have to do is show up on time!",
    buttonText: "Learn More",
    buttonLink: "#",
    bgImage: "/Images/traveler3.jpg",
  };

  const detailsSectionData2 = {
    heading1: "A bunch that flies together,",
    subheading1: "stays together!",
    description:
      "We have an exhaustive list of hospitality partners across destinations that will sort you out with best deals for the the best views. No vacation is complete without a bed that will accept you as their own!",
    buttonText: "Contact Us",
    buttonLink: "#about",
    bgImage: "/Images/traveler4.jpg",
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
