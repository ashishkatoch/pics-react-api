import {useState} from 'react';
function SearchBar() {
    const[term,setTerm] = useState('');
    const handleSearchImages = (event)=>{
        setTerm(event.target.value);        
    }
    return (<div>
        <form><label>Search Images</label><input onChange={handleSearchImages} type="text" value={term}/></form></div>
        );
}
export default SearchBar;