import React, { Component } from 'react';
import {connect} from 'react-redux';

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

  lookingHistory() {
    let history = this.state.allHistory
    let winner = this.state.winning

    let name = ''
    for (let i = 0; i < history.length; i ++) {
      console.log(history[i].winner);
      if (name !== history[i].winner) {
        let obj = {
          name: history[i].winner,
          totalWin: 1,
          totalPlayed: 1
        }
        name = history[i].winner
        winner.push(obj)
      } else {
        let idx = winner.findIndex(a => a.name === name)
        winner[idx].totalPlayed++
        winner[idx].totalWin++
      }
    }

    
    console.log('skor ', winner);
  }

  render () {
    return (
      <div className="container">
        {
          this.state.loading ? <h3> NOW LOADING... </h3>
            : <div><h1>Welldone</h1>
              <button onClick={() => this.lookingHistory()}>Look Winner</button>
              
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