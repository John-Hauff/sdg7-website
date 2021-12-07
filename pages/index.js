import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Media from "../components/Media";
import Documentation from "../components/Documentation";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <Layout pageTitle="The Smart Bird Feeder - Senior Design Group 7">
      <Header />
      <Hero />
      <Feature />
      <Media />
      <Documentation />
      <Gallery />
      <About />
      <Footer />
    </Layout>
  );
};
export default Index;
