import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import TawhidSection from './Components/TawhidSection';
import BodruddozaRedoy from './Components/BodruddozaRedoy';
import HayderProfile from './Components/HayderProfile';
import Safin from './Components/safin';

const App = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>

      <main>
        {/* call your components inside main tag */}
        <TawhidSection></TawhidSection>

        <BodruddozaRedoy />

        <HayderProfile></HayderProfile>
        <Safin />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
