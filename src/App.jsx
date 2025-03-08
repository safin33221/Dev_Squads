import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import TawhidSection from './Components/TawhidSection';

const App = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>

      <main>
        {/* call your components inside main tag */}
        <TawhidSection></TawhidSection>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
