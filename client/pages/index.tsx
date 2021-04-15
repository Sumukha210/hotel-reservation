import About from "../Components/Layouts/About/AboutInfo";
import Header from "../Components/Layouts/Home/Header";
import WhyChooseUs from "../Components/Layouts/Home/WhyChooseUs";
import ExploreGallery from "../Components/Layouts/Home/ExploreGallery";
import Reviews from "../Components/Common/Reviews";
import FeaturedRooms from "../Components/Layouts/Home/FeaturedRooms";
import Services from "../Components/Layouts/Home/Services";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <About />
      <Services />
      <FeaturedRooms />
      <Reviews />
      <WhyChooseUs />
      <ExploreGallery />
    </div>
  );
};

export default Home;
