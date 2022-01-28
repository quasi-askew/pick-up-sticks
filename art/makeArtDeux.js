function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const canvasData = {
  size: 960,
};

const colorPalettes = [
  {
    name: "basquiat black king catch",
    colors: ["#F08838", "#F6A7B8", "#F1EC7A", "#1D4D9F"],
  },
  {
    name: "basquiat dustheads",
    colors: ["#C11432", "#009ADA", "#070707", "#66A64F", "#FDD10A"],
  },
  {
    name: "all basquiat",
    colors: [
      "F08838",
      "F6A7B8",
      "F1EC7A",
      "1D4D9F",
      "F08838",
      "C11432",
      "009ADA",
      "070707",
      "66A64F",
      "FDD10A",
    ],
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
  {
    name: "ARNOLDI",
    colors: ["#C2151B", "#2021A0", "#3547B3", "#E2C43F", "#E0DCDD"],
  },
  {
    name: "AVERY",
    colors: ["#F3C937", "#7B533E", "#BFA588", "#604847", "#552723"],
  },
  {
    name: "KLINT",
    colors: ["#D6CFC4", "#466CA6", "#D1AE45", "#87240E", "#040204"],
  },
  {
    name: "BOTERO",
    colors: ["#99B6BD", "#B3A86A", "#ECC9A0", "#D4613E", "#BB9568"],
  },
  {
    name: "THE BIRTH OF VENUS BY SANDRO BOTTICELLI",
    colors: ["#BFBED5", "#7F9086", "#A29A68", "#676A4F", "#A63C24"],
  },
  {
    name: "STRIPED COLUMN BY JACK BUSH",
    colors: ["#529DCB", "#ECA063", "#71BF50", "#F3CC4F", "#D46934"],
  },
  {
    name: "LANDSCAPE WITH THE FALL OF ICARUS BY PIETER BRUEGEL",
    colors: ["#7A989A", "#849271", "#C1AE8D", "#CF9546", "#C67052"],
  },
  {
    name: "LA MARIÉE SOUS LE BALDAQUIN BY MARC CHAGALL",
    colors: ["#3F6F76", "#69B7CE", "#C65840", "#F4CE4B", "#62496F"],
  },
  {
    name: "APPARITION OF FACE AND FRUIT DISH ON A BEACH BY SALVADOR DALÍ",
    colors: ["#9BC0CC", "#CAD8D8", "#D0CE9F", "#806641", "#534832"],
  },
  {
    name: "ANTHRACITE MINUET BY GENE DAVIS",
    colors: ["#293757", "#568D4B", "#D5BB56", "#D26A1B", "#A41D1A"],
  },
  {
    name: "MYSTERY AND MELANCHOLY OF A STREET BY GIORGIO DE CHIRICO",
    colors: ["#27403D", "#48725C", "#212412", "#F3E4C2", "#D88F2E"],
  },
  {
    name: "HOMMAGE A BLÉRIOT BY ROBERT DELAUNAY",
    colors: ["4368B6", "#78A153", "#DEC23B", "#E4930A", "#C53211"],
  },
  {
    name: "SEAWALL BY RICHARD DIEBENKORN",
    colors: ["#2677A5", "#639BC1", "#639BC1", "#90A74A", "#5D8722"],
  },
  {
    name: "WOMAN, OLD MAN, AND FLOWER BY MAX ERNST",
    colors: ["#91323A", "#3A4960", "#D7C969", "#6D7345", "#554540"],
  },
  {
    name: "GRAVITY BY M.C. ESCHER",
    colors: ["#C1395E", "#AEC17B", "#F0CA50", "#E07B42", "#89A7C2"],
  },
  {
    name: "UNTITLED (APRIL 15) BY PAUL FEELEY",
    colors: ["#2C458D", "#E4DFD9", "#425B4F", "#EBAD30", "#BF2124"],
  },
  {
    name: "THE RED TOWER BY GIORGIO DE CHIRICO",
    colors: ["#2992BF", "#4CBED9", "#292C17", "#F9F6EF", "#F0742A"],
  },
  {
    name: "GIRL WITH A KITTEN BY LUCIAN FREUD",
    colors: ["#E1D2BD", "#A77E5E", "#2D291D", "#85868B", "#83774D"],
  },
  {
    name: "SUSPENDED FORMS BY TERRY FROST",
    colors: ["#EF5950", "#8D5A78", "#C66F26", "#FB6B22", "#DC2227"],
  },
  {
    name: "THE SIESTA BY PAUL GAUGUIN",
    colors: ["#21344F", "#8AAD05", "#E2CE1B", "#DF5D22", "#E17976"],
  },
  {
    name: "THE WIND BY HANS HOFMANN",
    colors: ["#1A6DED", "#2C7CE6", "#145CBF", "#162B3D", "#F9ECE4"],
  },
];

const pickUpSticksData = {
  totalNFTs: 10,
  isSaveMode: true,
  creatorAddress: "CtUaoA5v3MuLswN4NapgMmWRQZ6FT4mEQyiaoZmhuVKy",
};

function setup() {
  for (let nftIndex = 0; nftIndex < pickUpSticksData.totalNFTs; nftIndex++) {
    let numberOfLines = getRandomNumber(10, 1000);
    let canvas = createCanvas(canvasData.size, canvasData.size);

    // set the artist palette for the nft
    let colorPalette =
      colorPalettes[Math.floor(Math.random() * colorPalettes.length)];

    // Add the background color
    let colorBgIndex = Math.floor(Math.random() * colorPalette.colors.length);
    let colorBg = colorPalette.colors[colorBgIndex];
    background(colorBg);

    // rarity vars
    let hasMinimalLines = Math.random() < 0.2;
    let hasGinormousLines = Math.random() < 0.1;
    let hasMoreThanNormalLines = Math.random() < 0.3;
    let hasMuchoLines = Math.random() < 0.3;
    let hasHugeStrokes = Math.random() < 0.05;

    // set rarity data
    if (hasMinimalLines) {
      numberOfLines = numberOfLines;
    } else if (hasGinormousLines) {
      numberOfLines = numberOfLines * 50;
    } else if (hasMuchoLines) {
      numberOfLines = numberOfLines * 10;
    } else if (hasMoreThanNormalLines) {
      numberOfLines = numberOfLines * 5;
    }

    let x1 = canvasData.size;
    let y1 = 0;
    let x2 = 0;
    let y2 = 0;

    let cpx1;
    let cpy1;
    let cpx2;
    let cpy2;

    // Add lines
    for (let lineIndex = 0; lineIndex < numberOfLines; lineIndex++) {
      let colorIndex = Math.floor(Math.random() * colorPalette.colors.length);
      let color = colorPalette.colors[colorIndex];
      let lineColor = color;

      noFill();
      stroke(lineColor);
      strokeWeight(hasHugeStrokes ? 20 : getRandomNumber(1, 10));

      cpx1 = Math.floor(Math.random() * canvasData.size);
      cpy1 = Math.floor(Math.random() * canvasData.size);
      cpx2 = Math.floor(Math.random() * canvasData.size);
      cpy2 = Math.floor(Math.random() * canvasData.size);

      bezier(x1, y1, cpx1, cpy1, cpx2, cpy2, x2, y2);

      y1 = getRandomNumber(0, canvasData.size);
      y2 = getRandomNumber(0, canvasData.size);
    }

    // Add circles
    if (hasMinimalLines) {
      let colorIndex = Math.floor(Math.random() * colorPalette.colors.length);
      let color = colorPalette.colors[colorIndex];
      let numberOfCircles = getRandomNumber(1, 500);
      for (let circleIndex = 0; circleIndex < numberOfCircles; circleIndex++) {
        fill(color);
        noStroke();

        let circleSize = getRandomNumber(5, 20);

        ellipse(
          getRandomNumber(0, canvasData.size),
          getRandomNumber(0, canvasData.size),
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
      // saveJSON(jsonData, `${nftIndex}.json`);
    }
  }
}
