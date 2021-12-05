function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function download(content, fileName, contentType) {
  const a = document.createElement("a");
  const file = new Blob([content], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}

const pickUpSticksData = {
  totalNFTs: 30,
  isSaveMode: true,
  creatorAddress: "4KQw4DDrPD8PJoVkZYqzCj7Z4uvTjyT8ndJN4h6sAdVy",
};

async function setup() {
  for (let nftIndex = 0; nftIndex < pickUpSticksData.totalNFTs; nftIndex++) {
    let numberOfLines = getRandomNumber(10, 1000);
    let numberOfCircles = getRandomNumber(50, 500);
    let canvas = createCanvas(960, 960);
    let bgColor = randomColor({
      luminosity: "light",
      format: "hex",
    });

    // Add the background color
    background(bgColor);

    // Add lines
    for (let lineIndex = 0; lineIndex < numberOfLines; lineIndex++) {
      let lineColor = randomColor({
        luminosity: "bright",
        format: "hex",
      });

      stroke(lineColor);
      strokeWeight(getRandomNumber(1, 20));
      line(
        getRandomNumber(0, 960),
        getRandomNumber(0, 960),
        getRandomNumber(0, 960),
        getRandomNumber(0, 960)
      );
    }

    // Add circles
    for (let circleIndex = 0; circleIndex < numberOfCircles; circleIndex++) {
      let circleColor = randomColor({
        luminosity: "bright",
        format: "hex",
      });

      fill(circleColor);
      noStroke();

      let circleSize = getRandomNumber(1, 20);

      ellipse(
        getRandomNumber(0, 960),
        getRandomNumber(0, 960),
        circleSize,
        circleSize
      );
    }

    if (pickUpSticksData.isSaveMode) {
      // Save Data
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

      // Save Image
      await saveCanvas(canvas, `${nftIndex}`, "png");

      await download(
        JSON.stringify(jsonData),
        `${nftIndex}.json`,
        "text/plain"
      );
    }
  }
}
