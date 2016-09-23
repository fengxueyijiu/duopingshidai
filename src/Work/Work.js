import React from 'react';
import bg1 from '../images/b.jpg';
import bg2 from '../images/4.jpg';
import bg3 from '../images/a.jpg';
import bg4 from '../images/b.jpg';
import bg5 from '../images/2.jpg';
import bg6 from '../images/c.jpg';
import bg7 from '../images/d.jpg';
import bg8 from '../images/1.jpg';

class Work extends React.Component {
  render () {
    return(
      <div className="work-container">
        <div className="work-card">
          <img src={bg1} />
          <div className="work-text">
            <h3>作品一</h3>
            <p>2016.5.6</p>
          </div>
        </div>
        <div className="work-card">
          <img src={bg2} />
          <div className="work-text">
            <h3>作品二</h3>
            <p>2016.5.7</p>
          </div>
        </div>
        <div className="work-card">
          <img src={bg3} />
          <div className="work-text">
            <h3>作品三</h3>
            <p>2016.5.8</p>
          </div>
        </div>
        <div className="work-card">
          <img src={bg4} />
          <div className="work-text">
            <h3>作品四</h3>
            <p>2016.5.9</p>
          </div>
        </div>
        <div className="work-card">
          <img src={bg5} />
          <div className="work-text">
            <h3>作品五</h3>
            <p>2016.5.0</p>
          </div>
        </div>
        <div className="work-card">
          <img src={bg6} />
          <div className="work-text">
            <h3>作品六</h3>
            <p>2016.5.1</p>
          </div>
        </div>
        <div className="work-card">
          <img src={bg7} />
          <div className="work-text">
            <h3>作品七</h3>
            <p>2016.5.4</p>
          </div>
        </div>
        <div className="work-card">
          <img src={bg8} />
          <div className="work-text">
            <h3>作品八</h3>
            <p>2016.5.2</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Work;
