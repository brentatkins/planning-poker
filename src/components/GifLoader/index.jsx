import React, { useState, useEffect } from "react";
import { useInterval } from "../../utils/useInterval";

const giphySettings = {
  baseUrl: "https://api.giphy.com/v1/gifs",
  apiKey: process.env.REACT_APP_GIPHY_API_KEY
};

export const GifLoader = ({ searchTerm, refreshPeriod }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  useInterval(() => {
    setRefreshTrigger(refreshTrigger + 1);
  }, refreshPeriod);

  useEffect(() => {
    async function loadGiphy() {
      const giphyUrl = `${giphySettings.baseUrl}/random?api_key=${giphySettings.apiKey}&tag=${searchTerm}&rating=pg`;
      const response = await fetch(giphyUrl);
      const json = await response.json();
      setImageUrl(json.data.image_url);
    }

    loadGiphy();
  }, [searchTerm, refreshTrigger]);

  return (
    imageUrl && (
      <img
        src={imageUrl}
        style={{ maxWidth: "100%", maxHeight: "100%" }}
        alt="giphy"
        className="img-thumbnail"
      />
    )
  );
};
