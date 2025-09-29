import './App.css';
import './styles/theme.css';
import Layout from './components/layout/Layout';
import HeroSection from './components/sections/HeroSection';
import EndoClearSection from './components/sections/EndoClearSection';
import AboutSection from './components/sections/AboutSection';
import TissueEngineeringSection from './components/sections/TissueEngineeringSection';
import CorneaImportanceSection from './components/sections/CorneaImportanceSection';
import WhyEndoClearSection from './components/sections/WhyEndoClearSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  return (
    <Layout>
      <HeroSection />
      <EndoClearSection />
      <AboutSection />
      <TissueEngineeringSection />
      <CorneaImportanceSection />
      <WhyEndoClearSection />
      <ContactSection />
    </Layout>
  );
}

export default App;