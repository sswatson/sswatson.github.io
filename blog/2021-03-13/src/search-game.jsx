const randLotteryCard = () => {
  let s = Math.round(20 + 10*Math.sqrt(Math.random())) + '-';
  for (let i = 0; i < 2; i++) { 
    s += Math.round(10+90*Math.random()) + "-";
  }
  return s.slice(0, -1);
}

class Card extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  render() {
    return (
      <button 
        style={{ 
          position: "relative",
          height: "40px",
          width: "70px",
          backgroundColor: (this.state.open && this.props.target) ? "teal" : "white",
          textAlign: "center",
          margin: "12px",
          borderRadius: "2px",
          border: "1px solid #343434",
          paddingTop: "8px",
          paddingBottom: "8px",
          color: this.state.open ? (this.props.target ? "white" : "black") : "gray",
          boxShadow: "4px -2px 1px #EFEFEF, 4px 2px 1px #EFEFEF, -4px 2px 1px #EFEFEF",
        }}
        onClick={() => this.setState({ open: !this.state.open }) }>
          <div style={{
            position: "absolute", 
            width: "100%", 
            top: "50%", 
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: this.state.open ? 14 : 20,
          }}
          > 
          { this.state.open ? this.props.ticketNumber : this.props.index }
          </div>
      </button>
    );
  }

}

class SearchGame extends React.Component {
  constructor(props) {
    super(props);
    this.cards = [];
    for (let i = 0; i < 100; i++) {
      this.cards.push(randLotteryCard());
    }
    this.cards = this.cards.sort();
    pick = (arr) => arr[arr.length * Math.random() | 0];
    this.state = {
      selectedCard: pick(this.cards),
    }
  }

  render() {
    return (<React.Fragment>
      <div
        style={{marginBottom: "12px"}}>
        <button
          style={{ 
            position: "relative",
            height: "60px",
            width: "250px",
            textAlign: "center",
            margin: "12px",
            borderRadius: "2px",
            border: "1px solid #343434",
            backgroundColor: "white",
            paddingTop: "8px",
            paddingBottom: "8px",
            color: "teal",
            boxShadow: "4px -2px 1px #EFEFEF, 4px 2px 1px #EFEFEF, -4px 2px 1px #EFEFEF",
          }}
          onClick={() => this.setState({ showSelectedCard: true })}>
          { this.state.showSelectedCard ? ("Winning ticket: " + this.state.selectedCard) : "Reveal the winning ticket!" }
        </button>
      </div>
      { this.cards.map((card, i) => 
        <Card 
          ticketNumber={ card } 
          index={ i + 1 } 
          key={ i }
          target={ card === this.state.selectedCard }
        />
      ) }
    </React.Fragment>);
  }
}

const domContainer = document.querySelector('#binary-search-game');
ReactDOM.render(<SearchGame />, domContainer);