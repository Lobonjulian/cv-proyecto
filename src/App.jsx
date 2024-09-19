import Footer from "./components/Footer";
import Header from "./components/Header";
import Preview from "./components/Preview";
import Secciones from "./components/Secciones";

function App() {
  return (
    <>
      <Header />
      <main>
        <Secciones />
        <Preview />
      </main>
      <Footer />
    </>
  );
}

export default App;
