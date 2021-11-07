import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    matchStatus,
    result,
    id,
  } = matchCardDetails
  return (
    <li className="match-card-list-item">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="recent-image"
      />
      <p className="recent-card-name">{competingTeam}</p>
      <p className="recent-result">{result}</p>
      <p className="recent-status">{matchStatus}</p>
    </li>
  )
}
export default MatchCard
