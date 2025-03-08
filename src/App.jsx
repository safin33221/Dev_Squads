
import BodruddozaRedoy from './Components/BodruddozaRedoy';
import Footer from './Components/Footer'
import HayderProfile from './Components/HayderProfile';
import Navbar from './Components/Navbar'
import Safin from './Components/safin';


const App = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>

      <main>
        {/* call your components inside main tag */}

        <BodruddozaRedoy/>

         <HayderProfile></HayderProfile>
         <Safin/>

        



      </main>


      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
