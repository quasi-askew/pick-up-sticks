function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const artistColorArray = [
  {
    name: "basquiat black king catch",
    colors: ["#F08838", "#F6A7B8", "#F1EC7A", "#1D4D9F", "#F08838"],
  },
  {
    name: "basquiat dustheads",
    colors: ["#C11432", "#009ADA", "#070707", "#66A64F", "#FDD10A"],
  },
  {
    name: "albers luminous",
    colors: ["#D77186", "#61A2DA", "#6CB7DA", "#B5B5B3", "#D75725"],
  },
  {
    name: "ALBRECHT golden cloud",
    colors: ["#171635", "#00225D", "#763262", "#CA7508", "#E9A621"],
  },
  {
    name: "apple rainbow",
    colors: ["#F24D98", "#813B7C", "#59D044", "#F3A002", "#F2F44D"],
  },
];

function download(content, fileName, contentType) {
  const a = document.createElement("a");
  const file = new Blob([content], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}

const pickUpSticksData = {
  totalNFTs: 100,
  isSaveMode: true,
  creatorAddress: "4KQw4DDrPD8PJoVkZYqzCj7Z4uvTjyT8ndJN4h6sAdVy",
};

function setup() {
  for (let nftIndex = 0; nftIndex < pickUpSticksData.totalNFTs; nftIndex++) {
    let numberOfLines = getRandomNumber(10, 1000);
    let canvas = createCanvas(960, 960);

		// rarity vars
    let hasMinimalLines = Math.random() < 0.1;
    let hasGinormousLines = Math.random() < 0.1;
    let hasMoreThanNormalLines = Math.random() < 0.3;
    let hasMuchoLines = Math.random() < 0.3;
    let hasHugeStrokes = Math.random() < 0.05;

		// set rarity data
    if (hasMinimalLines) {
      numberOfLines = numberOfLines / 5;
    } else if (hasGinormousLines) {
      numberOfLines = numberOfLines * 50;
    } else if (hasMuchoLines) {
      numberOfLines = numberOfLines * 10;
    } else if (hasMoreThanNormalLines) {
      numberOfLines = numberOfLines * 5;
    }

		// random bright background color on the canvas
    let bgColor = randomColor({
      luminosity: "bright",
      format: "hex",
    });

    // Add the background color
    background(bgColor);

		// set the artist palette for the nft
    let colorPalette =
      artistColorArray[Math.floor(Math.random() * artistColorArray.length)];

    // Add lines
    for (let lineIndex = 0; lineIndex < numberOfLines; lineIndex++) {
      let color =
        colorPalette.colors[
          Math.floor(Math.random() * colorPalette.colors.length)
        ];
      let lineColor = color;

      stroke(lineColor);
      strokeWeight(hasHugeStrokes ? 20 : getRandomNumber(1, 5));
      line(
        getRandomNumber(20, 940),
        getRandomNumber(20, 940),
        getRandomNumber(20, 940),
        getRandomNumber(20, 940)
      );
    }

    // Add circles
    if (hasMinimalLines) {
      let numberOfCircles = getRandomNumber(10, 1000);
      for (let circleIndex = 0; circleIndex < numberOfCircles; circleIndex++) {
        let color =
          colorPalette.colors[
            Math.floor(Math.random() * colorPalette.colors.length)
          ];
        let circleColor = color;

        fill(circleColor);
        noStroke();

        let circleSize = getRandomNumber(10, 300);

        ellipse(
          getRandomNumber(20, 940),
          getRandomNumber(20, 940),
          circleSize,
          circleSize
        );
      }
    }

		// Save Image and Data
    if (pickUpSticksData.isSaveMode) {
      const jsonData = {
        name: `Pick Up Sticks #${nftIndex}`,
        symbol: "",
        image: `${nftIndex}.png`,
        properties: {
          files: [
            {
              uri: `${nftIndex}.png`,
              type: "image/png",
            },
          ],
          creators: [
            {
              address: pickUpSticksData.creatorAddress,
              share: 100,
            },
          ],
        },
      };

      saveCanvas(canvas, `${nftIndex}`, "png");
      saveJSON(jsonData, `${nftIndex}.json`);
    }
  }
}
