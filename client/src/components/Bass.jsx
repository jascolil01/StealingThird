import { useNavigate } from 'react-router-dom'
export default function Bass() {

  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate('/About')
  }
  return (
    <div>
      <img src="" alt='profile pic' />
      <h1>Name</h1>
      <h2>dhjasd</h2>
      <h1>Instrument</h1>
      <h2>Bass</h2>
      <h1>Contact Information</h1>
      <h2>Email</h2>
      <h3><a href='mailto:josh.ascolillo@gmail.com'>fadsasd</a></h3>
      <div onClick={handleGoBack}>Go Back</div>
    </div>
  )
}
