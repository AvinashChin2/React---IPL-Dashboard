import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamsList: [], isLoading: true, isActive: false}

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const {teamsList} = this.state
    const apiUrl = 'https://apis.ccbp.in/ipl'

    const response = await fetch(apiUrl)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.teams.map(team => ({
        name: team.name,
        id: team.id,
        teamImageUrl: team.team_image_url,
      }))
      this.setState({teamsList: updatedData, isLoading: false})
      console.log(updatedData)
    }
  }

  render() {
    const {teamsList, isLoading} = this.state
    return (
      <div className="app-container">
        <div className="content-container">
          <div className="title-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl-logo"
            />
            <h1 className="title">IPL Dashboard</h1>
          </div>
          {isLoading ? (
            <div className="loader" testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            <ul className="teams-list-container">
              {teamsList.map(eachItem => (
                <TeamCard teamListDetails={eachItem} key={eachItem.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default Home
