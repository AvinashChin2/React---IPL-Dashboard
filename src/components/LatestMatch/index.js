import './index.css'

const LatestMatch = props => {
  const {latestDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    id,
    manOfTheMatch,
    matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestDetails
  return (
    <div className="team-match-list-item">
      <div className="inside-content-container">
        <div className="first-box">
          <div className="content-team">
            <p className="latest-content-name">{competingTeam}</p>
            <p className="latest-date">{date}</p>
            <p className="latest-venue">{venue}</p>
            <p className="latest-result">{result}</p>
          </div>
          <div className="team-image-box">
            <img
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
              className="latest-logo"
            />
          </div>
        </div>
        <hr className="horizontal-line" />
        <div className="second-box">
          <p className="latest-bold">First Innings</p>
          <p className="latest-all">{firstInnings}</p>
          <p className="latest-bold">Second Innings</p>
          <p className="latest-all">{secondInnings}</p>
          <p className="latest-bold">Man Of The Match</p>
          <p className="latest-all">{manOfTheMatch}</p>
          <p className="latest-bold">Umpires</p>
          <p className="latest-all">{umpires}</p>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
