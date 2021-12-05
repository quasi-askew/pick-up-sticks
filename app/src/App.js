import React, { useEffect, useState } from "react";
import "./App.css";
import twitterLogo from "./assets/twitter-logo.svg";
import CandyMachine from "./CandyMachine";
import gif from "./assets/pickupsticks.gif";
import randomColor from "randomcolor";

// Constants
const TWITTER_HANDLE = "_buildspace";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [themeColors, setThemeColors] = useState({
    text: "#ffffff",
    background: "#000000",
    button: "linear-gradient(to right, #4880EC, #019CAD)",
    buttonText: "#000000",
  });

  // Actions

  /*
   * Declare your function
   */
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

          /*
           * Set the user's publicKey in state to be used later!
           */
          setWalletAddress(response.publicKey.toString());
        }
      } else {
        alert("Solana object not found! Get a Phantom Wallet 👻");
      }
    } catch (error) {
      console.error(error);
    }
  };

  /*
   * Let's define this method so our code doesn't break.
   * We will write the logic for this next!
   */
  const connectWallet = async () => {
    const { solana } = window;

    if (solana) {
      const response = await solana.connect();
      console.log("Connected with Public Key:", response.publicKey.toString());
      setWalletAddress(response.publicKey.toString());
    }
  };

  /*
   * We want to render this UI when the user hasn't connected
   * their wallet to our app yet.
   */
  const renderNotConnectedContainer = () => (
    <button
      className="cta-button connect-wallet-button"
      onClick={connectWallet}
      style={{
        backgroundImage: themeColors.button,
        color: themeColors.buttonText,
      }}
    >
      Connect to Wallet
    </button>
  );

  /*
   * When our component first mounts, let's check to see if we have a connected
   * Phantom Wallet
   */
  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    };
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  useEffect(() => {
    let buttonBgLeft = randomColor({
      luminosity: "dark",
    });
    let buttonBgRight = randomColor({
      luminosity: "dark",
    });
    setThemeColors({
      text: randomColor({
        luminosity: "dark",
      }),
      background: randomColor({
        luminosity: "light",
        format: "rgba",
        alpha: 0.3,
      }),
      button: `linear-gradient(left, ${buttonBgLeft}, ${buttonBgRight})`,
      buttonText: randomColor({
        luminosity: "light",
      }),
    });
  }, []);

  return (
    <div
      className="App"
      style={{
        color: themeColors.text,
        background: themeColors.background,
      }}
    >
      <div className="container">
        <div className="header-container">
          <div className="pickupsticks-gif-container">
            <img src={gif} alt="Pick up sticks" />
          </div>
          <h1 className="header">Pick Up Sticks</h1>
          {/* Add the condition to show this only if we don't have a wallet address */}
          {!walletAddress && renderNotConnectedContainer()}
        </div>
        {walletAddress && <CandyMachine walletAddress={window.solana} />}
        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built on @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
