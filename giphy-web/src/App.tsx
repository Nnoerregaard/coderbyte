import React, { useEffect, useState } from 'react';
import ResultSection from './image-explorer/ResultSection';
import axios from 'axios'

function App() {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    // TODO: Move out into configuration, and lift state when we get to the query section
    axios.get('https://api.giphy.com/v1/stickers/search', 
      { params: { q: "cat", limit: 3, rating: "g", api_key: "1bkG7ky5cmw5SLyvNfElcR1iYVzs38Zq" }}).then((result: any) => {
        const data = result.data.data
        const urlArray = data.map((dataEntry: any) => dataEntry.url)
        setImageUrls(urlArray)
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <ResultSection urls={imageUrls} />
  );
}

export default App;
