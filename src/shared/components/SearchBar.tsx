interface Props {
    name: string;
    placeholder?: string;
    type: string;
}

export const SearchBar = ({name, placeholder = 'Search', type}: Props) => {
  return (
    <div className="search-container">
        <input type={type} placeholder={placeholder} name={name} id="" />
        <button>Search</button>
    </div>
  )
}
