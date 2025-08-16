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

  return (
    <>
    {/* {Header} */}
    <CustomHeader title='Gif Searcher' description='Found and Share the perfect Gif' />

    {/* {Search} */}
    <SearchBar type='text' placeholder='Search Gif' name='GifSearcher' />

    {/* Previous Searches */}
    <PreviousSearches searches={['Goku', 'Dragon', 'Wagon']} onLabelClicked={handleTermClicked} />

    {/* Gifs */}
    <GifList Gifs={mockGifs} />
    </>
  )
}
