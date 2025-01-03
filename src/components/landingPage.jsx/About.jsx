import AboutHeader from "../../components/about/AboutHeader"
import AboutHero from "../../components/about/AboutHero"

const About = () => {
  return (
    <div className="px-5 py-12 md:p-20 space-y-8 md:space-y-10" id="about">
      <AboutHeader/>
      <AboutHero/>
    </div>
  )
}

export default About