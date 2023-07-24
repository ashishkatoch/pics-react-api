import './App.css';
import SearchBar from './components/SearchBar';
import ImagesList from './components/ImagesList';
import SearchSplashpi from './api';
import {useState} from 'react';
function App() {
  const[images,setImages] =useState([]);

  const handleSearchImages = async (term)=>{    
    const result = await SearchSplashpi(term);
    setImages(result);
    console.log(result);
  }
  return (
    <div className="App">
     <SearchBar onSubmit={handleSearchImages}/>
     <ImagesList images={images}/>
    </div>
  );
}

export default App;
