import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Spinner from 'react-spinkit'

import {getHistory, getHistoryAPI} from '../actions';

class History extends Component {
  constructor () {
    super ()
    this.state = {
      allHistory: [],
      loading: true,
      winning: []
    }
  }

  componentWillMount() {
    console.log('=============component will mount');
    this.props.fetchHistory()
  }

  componentWillReceiveProps(nextProps) {
    console.log('=======status props history', nextProps.history);
    this.setState({
      allHistory: nextProps.history,
      loading: false
    })
  }

  // lookingHistory() {
  //   let history = this.state.allHistory
  //   let winner = this.state.winning
  //   let counter = []
  //   console.log('lalallalalalalala');

  //   let name = ''
  //   history.forEach(played => {
  //     if (played.winner !== name) {
  //       console.log('masuk kondisi true gak?');
  //       let obj = {
  //         name: played.winner,
  //         playCount: 1
  //       }
  //       counter.push(obj)
  //       name = played.winner
  //     } else if (name === played.winner) {
  //       console.log('masuk kondisi else gak?');
  //       let player = winner.filter(win => {
  //         return win.name === name
  //       })
  //       console.log(player);
  //       player[0].playCount++
  //     } else if (name === played.player1 || name === played.player2) {
  //       let player = winner.filter(win => win.name === name)
  //       player[0].playCount++
  //     }
  //   })
  //   console.log(winner);
  // }

  render () {
    return (
      <div  className='col-md-8 offset-md-2 login-page history'>
        {
          this.state.loading ? <div className='loading'><Spinner name="ball-pulse-sync" color="#fff" fadeIn="none"/></div>
            : <div><h1>THE RECORDS</h1>
              <div className='list-room'>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Player 1</th>
                    <th scope="col">Player 2</th>
                    <th scope="col">Winner</th>
                  </tr>
                </thead>
                {this.state.allHistory.map((played) => {
                  return <tbody>
                  <tr className="table-primary">
                    <td>{played.player1}</td>
                    <td>{played.player2}</td>
                    <td>{played.winner}</td>
                  </tr>
                </tbody>
              })}
              </table>
              </div>
              <Link to="/"><button className="back-button"></button></Link>
              </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('ini state to props', state.historyReducer);
  return {
    history: state.historyReducer.players
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dipatchHistory: (params) => {
      console.log('===============get history');
      dispatch(getHistory(params))
    },
    fetchHistory: () => {
      console.log('===============fetch API');
      dispatch(getHistoryAPI())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(History)