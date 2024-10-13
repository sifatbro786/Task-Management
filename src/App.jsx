import Footer from "./HomePage/Footer";
import HeroSection from "./HomePage/HeroSection";
import Navbar from "./HomePage/Navbar";
import TaskBoard from "./HomePage/Task/TaskBoard";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <HeroSection/>
        <TaskBoard/>
      </div>
      <Footer/>
    </>
  );
}
