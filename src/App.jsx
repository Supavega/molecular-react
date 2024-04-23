import { Toaster } from "react-hot-toast";
import Routes from "./config/router";
import { PrimeReactProvider } from "primereact/api";
import './App.css';

function App() {
  return (
    <>
      <PrimeReactProvider>
        <Toaster position="bottom-left" reverseOrder={false} />
        <Routes />
      </PrimeReactProvider>
    </>
  );
}

export default App;
