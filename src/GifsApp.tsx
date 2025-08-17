import { useState } from 'react'
import { GifList } from './gifs/components/GifList.tsx'
import { PreviousSearches } from './gifs/components/PreviousSearches.tsx'
import { mockGifs } from './mock-data/gifs.mock'
import { CustomHeader } from './shared/components/CustomHeader.tsx'
import { SearchBar } from './shared/components/SearchBar.tsx'

export const GifsApp = () => {

  const [previousTerms, setPreviousTerms] = useState(['goku']);

  const handleTermClicked = (term:string) => {
    console.log(term)
  }

  const handleSearch = (query: string = '') => {
    query = query.trim().toLowerCase();
    console.log('New Query:', query)

    if(query.length === 0) return

    if(previousTerms.includes(query)) return

    setPreviousTerms([query, ...previousTerms].splice(0,7))
  }

  return (
    <>
    {/* {Header} */}
    <CustomHeader title='Gif Searcher' description='Found and Share the perfect Gif' />

    {/* {Search} */}
    <SearchBar
      type='text'
      placeholder='Search Gif'
      name='GifSearcher'
      onQuery = { (query:string) => handleSearch(query)}
      />

    {/* Previous Searches */}
    <PreviousSearches searches={previousTerms} onLabelClicked={(term:string) => handleTermClicked(term)} />

    {/* Gifs */}
    <GifList Gifs={mockGifs} />
    </>
  )
}
