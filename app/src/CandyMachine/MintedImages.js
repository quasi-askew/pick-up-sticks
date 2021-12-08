const MintedImages = ({ images }) => (
  <div className="mt-4 p-8 grid justify-content-center border-4 border-light-blue-500">
    <h2 className="mb-5 block text-pink-600 font-bold text-4xl">
      🌈 Pick Up Sticks Mint Gallery 🌈
    </h2>
    <div className="grid gap-2 lg:gap-4 grid-cols-2 lg:grid-cols-4">
      {images.map((mint, index) => (
        <div className="stickImage" key={index}>
          <img src={mint} alt={`Minted NFT ${mint}`} />
        </div>
      ))}
    </div>
  </div>
);

export default MintedImages;
