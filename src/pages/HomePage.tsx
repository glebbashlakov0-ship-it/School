import Hero from "../components/Sections/Hero";
import AboutUs from "../components/Sections/AboutUs";
import CoursesPreview from "../components/Sections/CoursesPreview";
import Testimonials from "../components/Sections/Testimonials";
import CTASection from "../components/Sections/CTASection";
import ProgramExperience from "../components/Sections/ProgramExperience";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutUs />
      <ProgramExperience />
      <CoursesPreview />
      <Testimonials />
      <CTASection />
    </>
  );
}
