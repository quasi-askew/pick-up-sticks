import React, { useEffect, useState } from "react";
import "./App.css";
import CandyMachine from "./components/CandyMachine";
import ThemePicker from "./components/ThemePicker";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import NoPhantom from "./components/NoPhantom";

const App = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [hasPhantom, setHasPhantom] = useState(false);

  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window;

      if (solana) {
        if (solana.isPhantom) {
          console.log("Phantom wallet found!");
          const response = await solana.connect({ onlyIfTrusted: true });


          console.log(
            "Connected with Public Key:",
            response.publicKey.toString()
          );

          setWalletAddress(response.publicKey.toString());
          setHasPhantom(true)
        }
      } else {
        setHasPhantom(false)
      }
    } catch (error) {
      console.error(error);
    }
  };

  const connectWallet = async () => {
    const { solana } = window;

    if (solana) {
      const response = await solana.connect();
      console.log("Connected with Public Key:", response.publicKey.toString());
      setWalletAddress(response.publicKey.toString());
      setHasPhantom(true)
    }
  };

  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    };

    window.addEventListener("load", onLoad);

    return () => window.removeEventListener("load", onLoad);
  }, []);

  return (
    <div className="App">
      <div className="container mx-auto px-4 lg:px-0">
        {!hasPhantom && <NoPhantom />}

        <Hero />
        
        {!walletAddress && (
          <div className="text-center my-3 pb-8">
            <button className="btn btn-primary" onClick={connectWallet}>
              Connect to Wallet
            </button>
          </div>
        )}
      </div>


      {walletAddress && <CandyMachine walletAddress={window.solana} />}

      <Footer />

      <ThemePicker />
    </div>
  );
};

export default App;
