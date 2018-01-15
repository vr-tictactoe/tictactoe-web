import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {getHistory, getHistoryAPI} from '../actions';

class History extends Component {
  constructor () {
    super ()
    this.state = {
      allHistory: [],
      loading: true
    }
  }

  componentWillMount() {
    this.props.fetchHistory()
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      allHistory: nextProps.history,
      loading: false
    })
  }

  render () {
    return (
      <div  className='col-md-8 offset-md-2 login-page history'>
        {
          this.state.loading ? <div className='loading'><h3> NOW LOADING... </h3></div>
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
              <br/>
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