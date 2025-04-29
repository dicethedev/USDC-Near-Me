import HeroSection from "./hero";
import Footer from "./sections/footer";

export default function HomeView() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/image/vector-bg.png')",
      }}
    >
      <HeroSection />
      <Footer />
    </div>
  );
}
