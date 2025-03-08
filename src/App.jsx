
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'


const App = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>

      <main>
        {/* call your components inside main tag */}

        <h1>Hello every one</h1>


      </main>


      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
