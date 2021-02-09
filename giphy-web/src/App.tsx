import React, { useEffect, useState } from 'react';
import ResultSection from './image-explorer/ResultSection';
import SearchField from './query-section/SearchField'
import axios from 'axios'

function App() {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(); 

  useEffect(() => {
    // TODO: Move out into configuration. Save the value we get from onSearchFieldChange in state and use it as the q parameter 
    axios.get('https://api.giphy.com/v1/stickers/search', 
      { params: { q: "cat", limit: 3, rating: "g", api_key: "1bkG7ky5cmw5SLyvNfElcR1iYVzs38Zq" }}).then((result: any) => {
        console.log(result)
        const data = result.data.data
        const resultArray = data.map((dataEntry: any) => ( {url: dataEntry.embed_url, id: dataEntry.id } ))

        setResults(resultArray)
      console.log(result)
    }).catch(error => {
      setError(error)
    })
  }, [])

  const onSearchFieldChange = (newValue: string) => {
    console.log("Not implemented yet")
  }

  // TODO: Extend this with the text field to display text and the dropdown determining where to show the text. Also make the pagination buttons 
  return error ? <div>Something went wrong</div> : (
    <React.Fragment>
      <SearchField onDebouncedChange={onSearchFieldChange} />
      <ResultSection results={results} />
    </React.Fragment>
  );
}

export default App;
