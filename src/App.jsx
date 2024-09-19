import Footer from "./components/Footer";
import Header from "./components/Header";
import Preview from "./components/Preview";
import Editor from "./components/Editor";

function App() {
  return (
    <>
      <Header />
      <main>
        <Editor />
        <Preview />
      </main>
      <Footer />
    </>
  );
}

export default App;
