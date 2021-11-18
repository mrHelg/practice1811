import { Component } from 'react';
import InputSection from './InputSection';
import MainSection from './MainSection';

class CounterSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
    };
  }

  updateStep = (currentStep) => {
    this.setState({step: currentStep});
  };

  render() {
    const { step } = this.state;
    return (
      <>
        <MainSection step={Number(step)} />
        <InputSection updateStep={this.updateStep} />
      </>
    );
  }
}

export default CounterSection;
