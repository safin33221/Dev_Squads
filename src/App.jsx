
import Footer from './Components/Footer'
import KhairunProfile from './Components/KhairunProfile';
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>

      <main>
        {/* call your components inside main tag */}
        <KhairunProfile></KhairunProfile>
    
      </main>


      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
