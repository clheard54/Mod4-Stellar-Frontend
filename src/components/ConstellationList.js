import React, {Fragment} from 'react'
import { api } from '../services/api'
import ConstellationDetail from './ConstellationDetail'
import { Link } from 'react-router-dom';

export default class ConstellationList extends React.Component {
  constructor() {
    super()
    this.state = {
      constellations: [],
      detail: false,
      star: ''
    }
  }

  componentDidMount() { 
        document.getElementById('html').style.background = `url("https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1790&q=80") no-repeat center center fixed`
        document.getElementById('html').style.backgroundSize = 'cover'
    api.constellations.getConstellations().then(data => {
      this.setState({
        constellations: data
    })
  })
  }

  goBack = () => {
    this.setState(prev => {
      return {
        detail: !prev.detail,
      }
    }, () => {
    this.props.history.push('/constellations')})
  }

  handleClick = (star) => {
    this.setState(prev => {
      return {
        detail: !prev.detail,
        star: star
      }
    }, () => this.showDetail)
  }

  showDetail = () => {
    if (this.state.form === true) {
      return <ConstellationDetail {...this.props} star={this.state.star} style={{display: "block"}} goBack={this.goBack} show={this.state.detail} />
    } else {
      return <ConstellationDetail {...this.props} star={this.state.star} show={this.state.detail} goBack={this.goBack} style={{display:'none'}}/>}
  }

  renderConstellations = () => {
    return this.state.constellations.map(star => {
      return (
        <Fragment>
          <br></br>
          <div className="ui column" style={{width: '45%', border: '1px solid white', margin: 'auto'}}>
            <div
              className="ui card"
              key={star.id}
              onClick={() => this.handleClick(star)}
            >
              <div className="content">
                <div className="header">
                  <span style={{fontSize: "28px", fontWeight: 'bolder'}}>{star.Name} </span>

                  <br></br>
                </div>

                <div className="meta text-wrap">
                  <h4>" {star.Meaning} "</h4>
                </div>
              </div>
              </div>
              </div>
        </Fragment> 
        )
      })
  }


  render(){
    return (
      <div style={{color:'white'}}>
        <h2 style={{fontSize: '40px', fontFamily: 'Playfair Display cursive', fontStyle: 'oblique', textDecoration: 'none', margin: 'unset'}}>Constellations Galore</h2>
        <small>Click for more details</small>
        <div >
        {this.state.detail ? this.showDetail() : this.renderConstellations()}
        <br></br>
        </div>
      </div>
      )
    }
}
