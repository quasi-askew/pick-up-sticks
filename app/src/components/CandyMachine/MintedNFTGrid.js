import MintImage from "./MintImage";

const MintedNFTGrid = ({ hashTableData }) => {
	return (
		<div className="bg-secondary">
			<div className="container mx-auto py-8 lg:px-0 mt-4">
				<div className="grid justify-content-center">
					<h2 className="mb-5 block font-bold text-4xl">
						🌈 Recently Minted Pick Up Sticks 🌈
					</h2>
					<div className="grid gap-2 lg:gap-4 grid-cols-2 lg:grid-cols-3">
						{hashTableData.map((item, index) => {
							return (
								<div key={index} className="card bordered">
									<figure>
										<MintImage uri={item.data.uri} />
									</figure>
									<div className="card-body">
										<h2 className="card-title">{item.data.name}</h2>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MintedNFTGrid;
