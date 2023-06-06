import SearchBar from "./SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";
import { useState } from "react";

function App() {
  const [images, setImage] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);

    setImage(result);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;

//E7rnUj6xnP01a-WcjfvDlyTaPMROM1kT0QTMcmDNrkQ
//tsq42hYgiW6eZAsm5YEulAHaO5y7n1BFX9sCwcVzptE
