import { useState, useEffect, useCallback } from "react";

const MintImage = ({ uri }) => {
  const [image, setImage] = useState(null);

  const getImage = useCallback(async () => {
    const response = await fetch(uri);
    const parse = await response.json();
    setImage(parse.image);
  }, [uri]);

  useEffect(() => {
    if (!image) {
      getImage();
    }
  }, [image, getImage]);

	if (!image) {
		return null
	}

  return (
    <div className="stickImage">
      <img src={image} alt="" />
    </div>
  );
};

export default MintImage;
