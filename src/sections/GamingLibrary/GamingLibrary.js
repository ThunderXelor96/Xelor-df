import './GamingLibrary.css'
import {GamingLibraryCard, SectionHeader, SectionWrapper} from '../../components/index'

import GamingLibraryData from '../../Data/GamingLibraryData'



const GamingLibrary = () => {

  const cards = GamingLibraryData.map(card => {
    return <GamingLibraryCard key={card.id} image={card.image} title={card.title} category={card.category} date={card.date} hours={card.hours} download={card.download} />
})

  return (
    <>
    <SectionWrapper>
        <SectionHeader>Gaming Library</SectionHeader>
        <div className='gaming-library-cards'>
            {cards}
        </div>
    </SectionWrapper>
  </>
  )
}

export default GamingLibrary