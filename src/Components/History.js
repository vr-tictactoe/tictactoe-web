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
    let win = this.state.winning
    let obj = {
      name: '',
      totalWin: 0,
      totalPlayed: 0
    }

    history.forEach(played => {
      if (obj.name !== played.winner) {
        win.push(obj)
        obj.name = played.winner
        obj.totalPlayed = 1
        obj.totalWin = 1
        console.log('cek pemenang',obj.name);
      } else {
        console.log('cek kemenangan', obj);
        obj.totalPlayed++
        obj.totalWin++
      }
    })
    console.log('hasilnya', win);
  }

  render () {
    return (
      <div className="container">
        {
          this.state.loading ? <h3> NOW LOADING... </h3>
            : <div><h1>Welldone</h1>
              <button onClick={() => this.lookingHistory()}>Look Winner</button></div>
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