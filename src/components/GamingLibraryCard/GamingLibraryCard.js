import './GamingLibraryCard.css'

import {SecondaryButton} from '../../components/index'

const GamingLibraryCard = (props) => {
  return (
    <div className='gaming-library-card'>
        <ul>
            <li className='gaming-library-item-image'><img className='pic' src={props.image} alt="" /></li>
            <li><h4>{props.title}</h4><span>{props.category}</span></li>
            <li><h4>Date</h4><span>{props.date}</span></li>
            <li><h4>Hours</h4><span>{props.hours}</span></li>
            <li><h4>Currently</h4><span>{props.download}</span></li>

            <SecondaryButton>Download</SecondaryButton>
        </ul>
    </div>
  )
}

export default GamingLibraryCard