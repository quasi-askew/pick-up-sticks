import React, { useEffect, useState } from "react";
import "./App.css";
import CandyMachine from "./CandyMachine";
import gif from "./assets/pickupsticks.gif";
import { themeChange } from "theme-change";

// Constants
const themes = [
	"cyberpunk",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
];

const App = () => {
  const [walletAddress, setWalletAddress] = useState(null);

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
    themeChange(false);
  }, []);

  return (
    <div className="App">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="my-5 flex place-content-center">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Choose your look</span>
              <div className="label-text-alt">
                Pick like there's no tomorrow
              </div>
            </label>
            <select className="select w-full" data-choose-theme>
              {themes.map((theme) => {
								return (
									<option key={theme} value={theme}>
										{theme}
									</option>
								)
							})}
            </select>
          </div>
        </div>
        <div className="pickupsticks-gif-container">
          <img src={gif} alt="Pick up sticks" />
        </div>
        <div className="text-center">
          <h1 className="tracking-tight font-extrabold">
            <span className="block xl:inline text-6xl">Pick Up Sticks</span>
            <span className="block mt-2">
              <a href="https://p5js.org/">using p5.js</a>
            </span>
          </h1>
        </div>
        {/* Add the condition to show this only if we don't have a wallet address */}
        {!walletAddress && (
          <div className="text-center mt-3">
            <button className="btn btn-primary" onClick={connectWallet}>
              Connect to Wallet
            </button>
          </div>
        )}
        {walletAddress && <CandyMachine walletAddress={window.solana} />}
      </div>
    </div>
  );
};

export default App;
