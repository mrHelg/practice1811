import { Component } from 'react';
import InputSection from './InputSection';
import MainSection from './MainSection';
import styles from './CounterSection.module.css'

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

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.step !== this.state.step ;
  }

  render() {
    const { step } = this.state;
    return (
      <div className={styles.counterSection}>
        <MainSection step={Number(step)} />
        <InputSection updateStep={this.updateStep} />
      </div>
    );
  }
}

export default CounterSection;
