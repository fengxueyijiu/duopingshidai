import React from 'react'

class Home extends React.Component {
  render () {
    let styles={
      h2:{
        fontSize:"42px",
        fontWeight:"700",
        marginBttom:"20px"
      }
    }
    return(
      <div className="home-container">
        <div className="home-cover">
          <div className="home-item">
            <h2 style={styles.h2}>HI,I'M<span style={{color:"#00bcd4"}}>WU JIANBO</span></h2>
            <p style={{marginBttom:"20px"}}> WEB DEVEL OPER</p>
            <button className="home-btn" > <a href="https://github.com/fengxueyijiu" style={{color:"#fff"}}>HIRE ME</a></button>
          </div>
        </div>


      </div>
    )
  }
}

export default Home;
