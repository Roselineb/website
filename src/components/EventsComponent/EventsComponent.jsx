import React from 'react'
import './EventsComponent.css'

function EventsComponent() {

  let images = [
    {
      "src" : "src/assets/images/culturals.jpg",
      "alt" : "Culturals",
      "title" : "Culturals",
      "content" : "A weekend filled with music from top bands and artists."
    },
    {
      "src" : "src/assets/images/art-exhibition.jpg",
      "alt" : "Art exhibition",
      "title" : "Art Exhibition",
      "content" : "A display of the finest art from upcoming artists."
    },
    {
      "src" : "src/assets/images/science-fair.jpg",
      "alt" : "Science fair",
      "title" : "Science fair",
      "content" : "A showcase of the latest scientific discoveries and projects by students."
    },
    {
      "src" : "src/assets/images/sports-day.jpg",
      "alt" : "Sports day",
      "title" : "Sports day", 
      "content" : "An exciting day of sports activities and competitions."
    }
  ]

  return (
    <div className='events-pg-content'>
      <h1>Events</h1>
      <div className='event-list'>
        {/* <img src='src/assets/images/culturals.jpg' alt='culturals'/> */}
        {
          images && images.map((v,i) => {
            return (
              <div className='event-item'>
                <h2>{v.title}</h2>
                <img src={v.src} alt={v.alt} />
                <p>{v.content}</p>
              </div>

            )
          })
        }
      </div>
    </div>
  )
}

export default EventsComponent