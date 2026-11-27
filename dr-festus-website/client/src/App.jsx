import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Parts from './components/Parts.jsx';
import Gallery from './components/Gallery.jsx';
import About from './components/About.jsx';
import BookingForm from './components/BookingForm.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import FloatingContact from './components/FloatingContact.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Parts />
        <Gallery />
        <About />
        <BookingForm />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
