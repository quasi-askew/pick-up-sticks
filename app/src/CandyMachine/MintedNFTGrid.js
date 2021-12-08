import MintImage from "./MintImage";

const MintedNFTGrid = ({ hashTableData }) => {
  return (
    <div className="mt-4 p-8 grid justify-content-center border-4 border-light-blue-500">
      <h2 className="mb-5 block text-pink-600 font-bold text-4xl">
        🌈 Recently Minted Pick Up Sticks 🌈
      </h2>
      <div className="grid gap-2 lg:gap-4 grid-cols-2 lg:grid-cols-4">
        {hashTableData.map((item, index) => (
          <div key={index}>
            <div>{item.data.name}</div>
            <MintImage uri={item.data.uri} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MintedNFTGrid;
