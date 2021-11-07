import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamListDetails} = props
  const {name, id, teamImageUrl} = teamListDetails
  return (
    <li>
      <Link to={`/team-matches/${id}`} className="link-item">
        <button type="button" className="list-item-container">
          <img src={teamImageUrl} alt={name} className="team-image" />
          <p className="team-name">{name}</p>
        </button>
      </Link>
    </li>
  )
}
export default TeamCard
