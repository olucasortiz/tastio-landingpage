import Hero from "./components/Hero.jsx";
import Systems from "./components/Systems.jsx";
import Steps from "./components/Steps.jsx";
import Faq from "./components/Faq.jsx";
import Coupon from "./components/Coupon.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Hero />
      <main id="conteudo">
        <Systems />
        <Steps />
        <Faq />
        <Coupon />
      </main>
      <Footer />
    </>
  );
}
