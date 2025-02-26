import Header from "./header";
import Pomo from "./Pomo";
import Footer from "./Footer";

function App() {
  return (
    <div className="flex h-screen flex-col items-center justify-between">
      <Header />
      <Pomo />
      <Footer />
    </div>
  );
}

export default App;
