import SetList from './ SetList'
import About from './About'

export default function Home() {
  return (
    <div className="homepage">
      <div className="row1">
        <SetList />
      </div>
      <div className="row2"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Beatles_ad_1965_just_the_beatles_crop.jpg/640px-Beatles_ad_1965_just_the_beatles_crop.jpg' alt='band photo' />
        <h2 className="home">Looking for a high-energy cover band to get your party or event rocking? Look no further than Stealing Third! With years of experience playing gigs all around town, these talented musicians know how to get a crowd up and dancing with their mix of classic and contemporary hits. With songs from the 80's, 90's, dance and country, Stealing Third's dynamic sound and engaging stage presence will keep your guests entertained and on their feet all night long. Book them for your next event and get ready for them to "steal" the show!</h2>
      </div>
      <About />
    </div>
  )
}
