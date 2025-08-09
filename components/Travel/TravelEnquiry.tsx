import HeroContent from "../Ui/HeroContent";

type HeroContentType = {
  heading: string;
  description: string;
  button: string;
  href: string;
  backgroundImage: string;
};

type TravelHeroProps = {
  heroContent: HeroContentType;
};

export default function TravelEnquiry({ heroContent }: TravelHeroProps) {
  return (
    <section
      className="w-full h-screen flex justify-endt items-center px-6 lg:px-16 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${heroContent.backgroundImage})` }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="hidden md:block"></div>
        <HeroContent
          heading={heroContent.heading}
          description={heroContent.description}
          buttonText={heroContent.button}
          href={heroContent.href}
        />
      </div>
    </section>
  );
}
