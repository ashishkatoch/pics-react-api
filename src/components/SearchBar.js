import { useState } from 'react';
function SearchBar({onSubmit}) {
    const[term,setTerm] = useState('');
    const handleFormSubmit = (event)=>{
        event.preventDefault();
        onSubmit(term);
    }
    const handleInputChange = (event)=>{
        setTerm(event.target.value);  
    }
    return (<div>
        <form onSubmit={handleFormSubmit}>
            <label>Search Images</label>
            <input className="searchBar" type="text" onChange={handleInputChange} value={term}/>
            </form>
        </div>
        
        );
}
export default SearchBar;