import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    teamMatches: {},
    latestMatchDetails: {},
    recentMatches: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {teamMatches, isLoading} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedData = {
      teamBannerUrl: data.team_banner_url,
    }
    const latestMatchUpdated = {
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      firstInnings: data.latest_match_details.first_innings,
      id: data.latest_match_details.id,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      matchStatus: data.latest_match_details.match_status,
      result: data.latest_match_details.result,
      secondInnings: data.latest_match_details.second_innings,
      umpires: data.latest_match_details.umpires,
      venue: data.latest_match_details.venue,
    }
    const updatedRecentMatches = data.recent_matches.map(eachItem => ({
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      date: eachItem.date,
      firstInnings: eachItem.first_innings,
      id: eachItem.id,
      manOfTheMatch: eachItem.man_of_the_match,
      matchStatus: eachItem.match_status,
      result: eachItem.result,
      secondInnings: eachItem.second_innings,
      umpires: eachItem.umpires,
      venue: eachItem.venue,
    }))
    this.setState({
      teamMatches: updatedData,
      latestMatchDetails: latestMatchUpdated,
      recentMatches: updatedRecentMatches,
      isLoading: false,
    })
  }

  renderColorDetails = () => {
    const {id} = this.props
    if (id === 'KKR') {
      const className = 'kkr-bg'
    } else if (id === 'RCB') {
      const className = 'rcb-bg'
    } else if (id === 'KXP') {
      const className = 'kxp-bg'
    } else if (id === 'CSK') {
      const className = 'csk-bg'
    } else if (id === 'RR') {
      const className = 'rr-bg'
    } else if (id === 'MI') {
      const className = 'mi-bg'
    } else if (id === 'SH') {
      const className = 'sh-bg'
    } else if (id === 'DC') {
      const className = 'dc-bg'
    }
  }

  render() {
    const {
      teamMatches,
      latestMatchDetails,
      recentMatches,
      isLoading,
    } = this.state
    const special = this.renderColorDetails
    return isLoading ? (
      <div testid="loader">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    ) : (
      <div className="team-container">
        <div className="total-container">
          <div className="image-container">
            <img
              src={teamMatches.teamBannerUrl}
              alt="team banner"
              className="team-banner"
            />
          </div>
          <div className="team-content-container">
            <h1 className="latest-matches">Latest Matches</h1>
            <div className="latest-matches-container">
              <LatestMatch
                latestDetails={latestMatchDetails}
                key={latestMatchDetails.id}
              />
            </div>
            <ul className="match-card-container">
              {recentMatches.map(eachMatch => (
                <MatchCard matchCardDetails={eachMatch} key={eachMatch.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default TeamMatches
