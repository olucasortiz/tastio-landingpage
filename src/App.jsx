import Hero from "./components/Hero.jsx";
import Tagline from "./components/Tagline.jsx";
import Compare from "./components/Compare.jsx";
import Product from "./components/Product.jsx";
import DeliveryDemo from "./components/DeliveryDemo.jsx";
import Steps from "./components/Steps.jsx";
import Faq from "./components/Faq.jsx";
import Coupon from "./components/Coupon.jsx";
import Footer from "./components/Footer.jsx";
import { assistencia, delivery, strip, WA_DEMO, DEMO_ASSISTENCIA } from "./content.js";

export default function App() {
  return (
    <>
      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Hero />
      <main id="conteudo">
        <Tagline />
        <Compare />
        <div id="sistemas">
          <Product
            data={assistencia}
            field="coral"
            strip={strip}
            actions={[
              { label: "Abrir a demonstração", href: DEMO_ASSISTENCIA, primary: true },
              { label: "Falar no WhatsApp", href: WA_DEMO },
            ]}
          />
          <Product
            data={delivery}
            field="sage"
            custom={DeliveryDemo}
            actions={[{ label: "Falar no WhatsApp", href: WA_DEMO, primary: true }]}
          />
        </div>
        <Steps />
        <Faq />
        <Coupon />
      </main>
      <Footer />
    </>
  );
}
