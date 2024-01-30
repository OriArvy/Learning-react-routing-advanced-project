import { useParams } from "react-router-dom"

function EventDetailPage() {
  const params = useParams();

  console.log(params)
  return (
    <>
      <h1>Welcome to Event Detail page</h1>
      <p>Event ID: {params.eventId}</p>
    </>
  )
}

export default EventDetailPage