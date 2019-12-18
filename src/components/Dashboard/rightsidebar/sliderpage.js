import React from "react";
import Range from "./sliderComponent";
class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rangeVal: 0
    };
    this.updateRange = this.updateRange.bind(this);
  }

  updateRange(val) {
    this.setState({
      rangeVal: val
    });
  }

  render() {
    const { rangeVal } = this.state;
    return <Range range={rangeVal} updateRange={this.updateRange} />;
  }
}

export default Slider;
