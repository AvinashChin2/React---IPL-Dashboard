import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamListDetails} = props
  const {name, id, teamImageUrl} = teamListDetails
  return (
    <>
      <Link to={`/team-matches/${id}`} className="link-item">
        <button type="button" className="list-item-container">
          <img src={teamImageUrl} alt={name} className="team-image" />
          <h1 className="team-name">{name}</h1>
        </button>
      </Link>
    </>
  )
}
export default TeamCard
