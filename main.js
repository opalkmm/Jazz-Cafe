//array of objects containing the samples
const loopSamples = [
  {
    id: "piano",
    letter: "Piano",
    src:
      "https://sampleswap.org/samples-ghost/MELODIC%20SAMPLES/KEYS%20ORGAN%20PIANO/957[kb]jazzy-minor-piano-chords.aif.mp3"
  },
  {
    id: "bass",
    letter: "Bass",
    src:
      "https://sampleswap.org/samples-ghost/MELODIC%20SAMPLES/BASS/718[kb]acoustic_jazz_bass_riff.aif.mp3"
  },
  {
    id: "mellow rhodes",
    letter: "Mellow Rhodes",
    src:
      "https://sampleswap.org/samples-ghost/MELODIC%20LOOPS/KEYS%20ORGAN%20PIANO%20LOOPS/1091[kb]152_mellow-jazzy-rhodes2.wav.mp3"
  },
   {
    id: "snare",
    letter: "Snare",
    src:
      "https://sampleswap.org/samples-ghost/DRUM%20LOOPS%20and%20BREAKS/111%20to%20120%20bpm/703[kb]118_jazzy-nice-flam-snare.wav.mp3"
  },
   {
    id: "saxophone",
    letter: "Saxophone",
    src:
      "https://sampleswap.org/samples-ghost/MELODIC%20LOOPS/HORN%20LOOPS/918[kb]090_breathy-jazz-sax-1.wav.mp3"
  },
   {
    id: "trumpet",
    letter: "Trumpet",
    src:
      "https://sampleswap.org/samples-ghost/MELODIC%20LOOPS/HORN%20LOOPS/467[kb]177_acid-jazz-trumpet-line.wav.mp3"
  },
   {
    id: "synthesizer",
    letter: "Synthesizer",
    src:
      "https://sampleswap.org/samples-ghost/MELODIC%20LOOPS/KEYS%20ORGAN%20PIANO%20LOOPS/2651[kb]125_jazzy-minor-synth-stabs.aif.mp3"
  },
   {
    id: "electronic piano",
    letter: "Electronic Piano",
    src:
      "https://sampleswap.org/samples-ghost/MELODIC%20LOOPS/KEYS%20ORGAN%20PIANO%20LOOPS/2762[kb]120_jazzy-groovy-phasing-epiano.aif.mp3"
  },
   {
    id: "percussion",
    letter: "Percussion",
    src:
      "https://sampleswap.org/samples-ghost/DRUM%20LOOPS%20and%20BREAKS/111%20to%20120%20bpm/689[kb]120_latestart-jazz-percussion.wav.mp3"
  }
  
];

class Apps extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      display: "click to play a jazz sample"
    }
  }
handleDisplay = display => this.setState({display})
  render() {
    return (
     <div className="container">
        
        <div id="display"><img id='cd' src='https://media.giphy.com/media/JmUQGMJMZNPjXmT8Tq/giphy.gif'/>  {this.state.display}</div>
        <div id='pad'>{loopSamples.map(sample => (
            
          <Pad 
            //if i want to execute the keypress too
            key={sample.id}
            id={sample.id}
            letter={sample.letter}
            src={sample.src}
            handleDisplay={this.handleDisplay}
            />
          ))}
        </div>
      </div>
    );
  }
}

class Pad extends React.Component{
  handleClick = () =>{
    this.audio.play()
    this.audio.currentTime = 0
    this.props.handleDisplay(this.props.id)
  }
  render(){
    return(
        <div id={this.props.id}
          className= 'main-pad'
          onClick={this.handleClick}>
        
          <p>{this.props.letter}</p>
          <audio src={this.props.src} 
            className="loopSamples"
            id={this.props.letter}
            ref={ref => this.audio = ref}
        ></audio>
        </div>   
    )
  }
}

ReactDOM.render(<Apps />, document.getElementById("container"));
