import CustomHeader from "../Components/Common/Header";
import Reviews from "../Components/Common/Reviews";
import AboutInfo from "../Components/Layouts/About/AboutInfo";
import WhyChooseUs from "../Components/Layouts/Home/WhyChooseUs";

const About = () => {
  return (
    <>
      <CustomHeader title="about us" />
      <AboutInfo />
      <div style={{ margin: "6rem 0" }}>
        <WhyChooseUs />
      </div>
      <Reviews />
    </>
  );
};

export default About;
