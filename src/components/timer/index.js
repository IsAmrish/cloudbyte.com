import React from "react";

class Timer extends React.Component {
  constructor(props) {
     super(props);
     this.state = { time: {}, seconds: 20 , value: -1};
     this.timer = 0;
     this.startTimer = this.startTimer.bind(this);
     this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs){
   let hours = Math.floor(secs / (60 * 60));

   let divisor_for_minutes = secs % (60 * 60);
   let minutes = Math.floor(divisor_for_minutes / 60);

   let divisor_for_seconds = divisor_for_minutes % 60;
   let seconds = Math.ceil(divisor_for_seconds);

   let obj = {
     "h": hours,
     "m": minutes,
     "s": seconds
   };
   return obj;
 }

 componentDidMount() {
   window.addEventListener('pageshow', (event) => {
     if(event.persisted) {
       window.location.reload();
     }
   })
   let timeLeftVar = this.secondsToTime(this.state.seconds);
   this.setState({ time: timeLeftVar });
   this.startTimer();
 }


 startTimer() {
   if (this.timer === 0 && this.state.seconds > 0) {
     this.timer = setInterval(this.countDown, 1000);
   }
 }

 countDown() {
   // Remove one second, set state so a re-render happens.
   let seconds = this.state.seconds - 1;
   this.setState({
     time: this.secondsToTime(seconds),
     seconds: seconds,
   });

   // Check if we're at zero.
   if (seconds === 0) {
     clearInterval(this.timer);
     window.open("https://mayadata.io","_self")
   }
 }

  render() {
    return(
      <span>
       {this.state.time.s} {this.state.time.s <= 1 ? 'second' : 'seconds'}
      </span>
    )
  }
}

export default Timer;
