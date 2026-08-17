'use client';

import CanvasLoader from "./components/common/CanvasLoader";
import ScrollWrapper from "./components/common/ScrollWrapper";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Hero from "./components/hero";
import SkillsSection from "@/components/portfolio-sections/SkillsSection";
import CertificationsSection from "@/components/portfolio-sections/CertificationsSection";
import AchievementsSection from "@/components/portfolio-sections/AchievementsSection";
import Footer20 from "@/components/watermelon-ui/footer-20";

const Home = () => {
  return (
    <main className="relative w-full bg-slate-950 min-h-screen">
      <CanvasLoader>
        <ScrollWrapper>
          <Hero/>
          <Experience/>
          <Footer/>
        </ScrollWrapper>
      </CanvasLoader>
      <div className="relative z-50 bg-gradient-to-b from-sky-100/90 via-sky-50 to-white">
        <SkillsSection />
        <CertificationsSection />
        <AchievementsSection />
        <Footer20 />
      </div>
    </main>
  );
};
export default Home;
