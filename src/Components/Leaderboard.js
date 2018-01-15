import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { dataPlayer, getDataPlayer } from '../actions'

class LeaderBoard extends Component {
  constructor () {
    super ()
    this.state = {
      dataPlayers: null,
      loading: true
    }
  }

  componentWillMount() {
    this.props.fetchDataPlayers()
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataPlayers: nextProps.listPlayer,
      loading: false
    })
  }

  render () {
    const records = this.state.dataPlayers
    return (
      <div className='col-md-8 offset-md-2 login-page history'>
        {this.state.loading ? <div className='loading'><h3> NOW LOADING... </h3></div> :
        <div>
          <h1>LEADERBOARD</h1>
          <div className='list-room'>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name </th>
                  <th scope="col">Score</th>
                </tr>
              </thead>
              {records.sort((a, b) => b.score - a.score).map((played) => {
                return <tbody>
                  <tr className="table-primary">
                    <td>{played.name}</td>
                    <td>{played.score}</td>
                  </tr>
                </tbody>
              })}
            </table>
          </div>
          </div>
          }
        <Link to="/"><button className="back-button"></button></Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    listPlayer: state.historyReducer.dataPlayers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setDataPlayer: (params) => {
      dispatch(dataPlayer(params))
    },
    fetchDataPlayers: () => {
      dispatch(getDataPlayer())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoard)