import React from "react"
import { data } from "../data/data"
import { PrimaryButton } from '../components/button'
import Timer from "../components/timer"
import screen from "../assets/images/screen.png"
import mayadata from "../assets/images/mayadata-primary.svg"
class Home extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div style={{ textAlign:"center", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", maxWidth: "1000px" , height: "100vh"}}>
        <div style={{ display:"inline-flex", justifyContent: "center", alignItems: "center", flexDirection: "row"}}>
          <h1 style={{ width: "100%", marginRight: "-40px"}}>{data.mainTitle}</h1>
          <img src={mayadata} alt="mayadata" style={{ maxHeight: "40px", height: "100%", width: "100%"}} />
        </div>
        <img src={screen} alt="screen" style={{ maxWidth: "400px", width: "100%", height: "auto"}} />
        <h2>{data.title}</h2>
        <p>{data.subTitle} <Timer/></p>
        <a href="https://mayadata.io" style={{ textDecoration: "none"}}>
          <PrimaryButton>{data.buttonText}</PrimaryButton>
        </a>
      </div>
    )
  }

}

export default Home;
