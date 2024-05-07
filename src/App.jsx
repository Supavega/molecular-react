import { Toaster } from "react-hot-toast";
import Routes from "./config/router";
import { PrimeReactProvider } from "primereact/api";
import { createGlobalStyle } from "styled-components";
import 'primeicons/primeicons.css';

const GlobalStyle = createGlobalStyle`
  body {
    min-height: 100vh;
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, sans-serif,;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <PrimeReactProvider>
        <Routes />
        {/* <Toaster position="bottom-left" reverseOrder={false} /> */}
      </PrimeReactProvider>
    </>
  );
}

export default App;
