import { Link } from "react-router-dom"

const EVENTS = [
  {
    id: '1',
    title: 'Event 1'
  },
  {
    id: '2',
    title: 'Event 2'
  }
]

function EventsPage() {
  return (
    <>
    <h1>Welcome to Events Page</h1>
    <ul>
      {EVENTS.map(eve => 
        <li key={eve.id}>
          <Link to={eve.id}>{eve.title}</Link>
        </li>
      )}
    </ul>
    </>
  )
}

export default EventsPage