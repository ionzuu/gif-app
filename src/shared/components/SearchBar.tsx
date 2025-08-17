import { useEffect, useState } from "react";

interface Props {
    name: string;
    placeholder?: string;
    type: string;
    onQuery: (query: string) => void
}

export const SearchBar = ({name, placeholder = 'Search', type, onQuery}: Props) => {

  const [query, setQuery] = useState('');

  useEffect( () => {
    const timeoutId = setTimeout(()=>{
      onQuery(query);
    },700);

    return () => {
      clearTimeout(timeoutId);
    }
  }, [query, onQuery])

  const handleSearch = () => {
    onQuery(query)
    setQuery('')
  }

  const handleKeyDown = (event:  React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter'){
      handleSearch();
    }
  }

  return (
    <div className="search-container">
        <input 
          type={type}
          placeholder={placeholder}
          name={name}
          id=""
          value={query}
          onChange={(event) => setQuery(event.target.value)}  
          onKeyDown={(event) => handleKeyDown(event)}
        />
        <button
        onClick={handleSearch}
        >Search</button>
    </div>
  )
}
