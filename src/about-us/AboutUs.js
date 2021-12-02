import React, {Component} from 'react';
import soni from './images/soni.jpg';
import './about-us.css'

export default class AboutUs extends Component {
  render() {
    return (
      <div className="about-us">
        <h1 className="about-us__heading"> Shopmazing </h1>
        <div className="about-us__cards">
          <div className="about-us__cards-card">
            <img src={soni} alt="" />
            <div className="about-us__cards-card-text">
              <h2>Rushabh Soni</h2>
              <p>Software developer, background as an airline captain for over 11 years.
                Having spent over a decade and a half in a high skill, high risk industry where timely decision making is of utmost importance I hope to bring all of these valuable past experiences along with my thirst for knowledge and the need for constant innovation/self improvement into my new</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
