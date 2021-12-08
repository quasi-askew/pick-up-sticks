import React, { useEffect, useState } from "react";
import "./App.css";
import CandyMachine from "./CandyMachine";
import gif from "./assets/pickupsticks.gif";
import morie from "./assets/morie.jpeg";
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
                );
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
      <footer className="mt-10 p-10 footer bg-primary text-primary-content footer-center">
        <div>
          <p>
            Love to <a href="https://buildspace.so/">_buildspace</a>
          </p>
        </div>
        <div>
          <div className="avatar">
            <div className="mb-8 w-24 h-24 mask mask-decagon">
              <img src={morie} alt="Morie #1571" />
            </div>
          </div>
          <div className="grid grid-flow-col gap-4">
            <a href="https://twitter.com/q_nitrof">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
