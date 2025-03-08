
import BodruddozaRedoy from './Components/BodruddozaRedoy';
import Footer from './Components/Footer'
import HayderProfile from './Components/HayderProfile';
import Navbar from './Components/Navbar'


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

        



      </main>


      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
