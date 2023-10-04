import NavBar from "./Components/NavBar";
import MainSection from "./Sections/MainSection";

const App = () => {
  return (
    <>
      <NavBar />
      <main className="px-16 bg-blue-200 py-10 w-full">
        <MainSection />
      </main>
    </>
  );
};

export default App;
