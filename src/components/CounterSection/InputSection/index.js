import React, { Component } from 'react';

class InputSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
    };
  }

  handleStepChange = ({ target: { value: currentStep } }) => {
    this.setState({ step: currentStep });
    this.props.updateStep(currentStep);
  };
 
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.step !== this.state.step ;
  }

  render() {
    const { step } = this.state;
    return (
      <>
        <input
          type="number"
          min="1"
          name="step"
          value={step}
          onChange={this.handleStepChange}
        />
      </>
    );
  }
}

export default InputSection;
