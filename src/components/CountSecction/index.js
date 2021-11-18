import { Component } from 'react';
import styles from './CountSection.module.css';

class CounterSection extends Component {
  constructor(props) {
    super(props);
    const { initValue, initStep } = this.props;
    this.state = {
      value: initValue,
      step: initStep,
      isAddMode: true,
    };
  }

  handleOperation = () => {
    let { value, step, isAddMode } = this.state;
    if (isAddMode) {
      value += +step;
    } else {
      value -= +step;
    }
    this.setState({ value: value, step: step });
  };

  handleStepChange = ({ target: { value } }) => {
    if (value <= 0) {
      value = this.props.initStep;
    }
    this.setState({ step: value });
  };

  handleChangeMode = () => {
    const { isAddMode } = this.state;
    this.setState({ isAddMode: !isAddMode });
  };

  render() {
    const { value, step, isAddMode } = this.state;

    return (
      <>
        <h2>{value}</h2>
        <>
          <button className={styles.btn} onClick={this.handleOperation}>
            {isAddMode ? 'Add' : 'Reduce'}
          </button>
          <button className={styles.btn} onClick={this.handleChangeMode}>
            Change
          </button>
        </>
        <p>Step: {step}</p>
        <input
          type="number"
          name="step"
          value={step}
          onChange={this.handleStepChange}
          // pattern="^[1-9][0-9]*$"
        />
      </>
    );
  }
}

export default CounterSection;
