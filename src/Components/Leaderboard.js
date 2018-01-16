import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';

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
        {this.state.loading ? <div className='loading'>
          <ReactLoading style={{'alignItem': 'center'}} height='50' type="spin" color="#5a4263" />
        </div> :
        <div>
          <h1>LEADERBOARD</h1>
          <div className='list-room'>
            <table className="table vr-table">
              <thead>
                <tr>
                  <th scope="col">#Rank </th>
                  <th scope="col">Name </th>
                  <th scope="col">Score</th>
                </tr>
              </thead>
              {records.sort((a, b) => b.score - a.score).map((played, idx) => {
                return <tbody key={idx}>
                  <tr className="table-primary">
                    <td>{idx+= 1}</td>
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