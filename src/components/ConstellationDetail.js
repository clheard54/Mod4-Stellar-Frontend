import React from 'react'

const ConstellationDetail = props => {

  const thisStar = props.star
  const STAR_NAME = props.star.Name
     
  const goToMap = () => {
    window.open(`http://www.sky-map.org/?object=${STAR_NAME}&show_box=1&zoom=2&box_color=yellow&box_width=350&box_height=350`, '_blank')     
  }

  const getPic = () => {
    fetch(`https://www.strudel.org.uk/lookUP/json/?name=${STAR_NAME}`)
    .then(resp => resp.json())
    .then(data => {
      console.log(data.image.src)
      })
    }

    return (
      !props.show ? <div></div> :  
    <div className="flex-container">
      <div className="left-column" style={{marginTop: '20px'}}>
{console.log(STAR_NAME[0].toLowerCase().concat(STAR_NAME.slice(1)))}
        <div className="content" style={{width: '90%', border: '1px solid white', margin: 'auto'}}>
          <div className="header">
            <span style={{fontSize: "33px", fontWeight: 'bolder'}}>{thisStar.Name} </span> ({thisStar.Abbr}) <br></br>
            <small>{thisStar.Pronunciation}</small>
          </div>

          <div className="meta text-wrap">
            <h4>" {thisStar.Meaning} "</h4>
          </div>
        <div className="extra content" style={{fontSize: '17px'}}>
          <span>
            Area: {thisStar.Area} (in sq°).
          </span><br></br>

          <span>
          Number of stars on the 100 Brightest Stars list: {thisStar.S}<br></br>
        Best date for viewing (constellation is on or very near the meridian at midnight): {thisStar.Date}
          </span><br></br>
          <span>
            {thisStar.V == "V" || thisStar.V == "P" ? "Visible from where you are!" : "Not visible."}
          </span><br></br>
          <br></br>
        </div>
        </div>
        <br></br>
      </div>
      <div className="right-column" style={{width: "45%"}}>
        <br></br><br></br>
          <img src={getPic()} alt="constellation"></img>
        <br></br><br></br>
      <button onClick={goToMap}>See Sky Map</button>
      </div>
      <br></br>
    </div>
  );

};

export default ConstellationDetail;
