import { Component } from 'react';
import styles from './MainSection.module.css';

class MainSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      isAddMode: true,
    };
  }

  handleOperation = () => {
    this.setState((state, props) => {
      let { value, isAddMode } = state;
      if (isAddMode) {
        return { value: value + props.step };
      } else {
        return { value: value - props.step };
      }
    });
  };

  handleStepChange = ({ target: { value } }) => {
    this.setState({ step: value });
  };

  handleChangeMode = () => {
    const { isAddMode } = this.state;
    this.setState({ isAddMode: !isAddMode });
  };

  render() {
    const { value, isAddMode } = this.state;
    const { step } = this.props;
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
      </>
    );
  }
}

export default MainSection;
