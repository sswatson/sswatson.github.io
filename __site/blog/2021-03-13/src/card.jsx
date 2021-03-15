
class Card extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  render() {
    return (
      <button 
        onClick={() => this.setState({ open: !this.state.open }) }>
        { this.state.open ? this.props.ticketNumber : this.props.index }
      </button>
    );
  }

}

export default Card;