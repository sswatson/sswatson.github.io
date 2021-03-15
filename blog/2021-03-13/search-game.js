var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var randLotteryCard = function randLotteryCard() {
  var s = Math.round(20 + 10 * Math.sqrt(Math.random())) + '-';
  for (var i = 0; i < 2; i++) {
    s += Math.round(100 * Math.random()) + "-";
  }
  return s.slice(0, -1);
};

var Card = function (_React$Component) {
  _inherits(Card, _React$Component);

  function Card(props) {
    _classCallCheck(this, Card);

    var _this = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this, props));

    _this.state = { open: false };
    return _this;
  }

  _createClass(Card, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "button",
        {
          style: {
            position: "relative",
            height: "40px",
            width: "70px",
            backgroundColor: this.state.open && this.props.target ? "teal" : "white",
            textAlign: "center",
            margin: "12px",
            borderRadius: "2px",
            border: "1px solid #343434",
            paddingTop: "8px",
            paddingBottom: "8px",
            color: this.state.open ? this.props.target ? "white" : "black" : "gray",
            boxShadow: "4px -2px 1px #EFEFEF, 4px 2px 1px #EFEFEF, -4px 2px 1px #EFEFEF"
          },
          onClick: function onClick() {
            return _this2.setState({ open: !_this2.state.open });
          } },
        React.createElement(
          "div",
          { style: {
              position: "absolute",
              width: "100%",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: this.state.open ? 14 : 20
            }
          },
          this.state.open ? this.props.ticketNumber : this.props.index
        )
      );
    }
  }]);

  return Card;
}(React.Component);

var SearchGame = function (_React$Component2) {
  _inherits(SearchGame, _React$Component2);

  function SearchGame(props) {
    _classCallCheck(this, SearchGame);

    var _this3 = _possibleConstructorReturn(this, (SearchGame.__proto__ || Object.getPrototypeOf(SearchGame)).call(this, props));

    _this3.cards = [];
    for (var i = 0; i < 100; i++) {
      _this3.cards.push(randLotteryCard());
    }
    _this3.cards = _this3.cards.sort();
    pick = function pick(arr) {
      return arr[arr.length * Math.random() | 0];
    };
    _this3.state = {
      selectedCard: pick(_this3.cards)
    };
    return _this3;
  }

  _createClass(SearchGame, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      return React.createElement(
        React.Fragment,
        null,
        React.createElement(
          "div",
          {
            style: { marginBottom: "12px" } },
          React.createElement(
            "button",
            {
              style: {
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
                boxShadow: "4px -2px 1px #EFEFEF, 4px 2px 1px #EFEFEF, -4px 2px 1px #EFEFEF"
              },
              onClick: function onClick() {
                return _this4.setState({ showSelectedCard: true });
              } },
            this.state.showSelectedCard ? "Winning ticket: " + this.state.selectedCard : "Reveal the winning ticket!"
          )
        ),
        this.cards.map(function (card, i) {
          return React.createElement(Card, {
            ticketNumber: card,
            index: i + 1,
            key: i,
            target: card === _this4.state.selectedCard
          });
        })
      );
    }
  }]);

  return SearchGame;
}(React.Component);

var domContainer = document.querySelector('#binary-search-game');
ReactDOM.render(React.createElement(SearchGame, null), domContainer);