import Header from "@layout/header/Header";
import MobileMenu from "@layout/mobile-menu/MobileMenu";
import Sidebar from "@layout/sidebar/Sidebar";

function App() {
  return (
    <div className="flex flex-col h-screen w-full md:flex-row">
      <MobileMenu />
      <Sidebar />
      <Header />
    </div>
  );
}

export default App;
