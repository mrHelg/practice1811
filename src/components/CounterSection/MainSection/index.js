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
      return isAddMode
        ? { value: value + props.step }
        : { value: value - props.step };
    });
  };

  handleChangeMode = () => {
    const { isAddMode } = this.state;
    this.setState({ isAddMode: !isAddMode });
  };

  handleReset = () => {
    this.setState((state, props) => {
      return { value: 0 };
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextState.value !== this.state.value ||
      nextState.isAddMode !== this.state.isAddMode ||
      nextProps.step !== this.props.step
    );
  }

  render() {
    const { value, isAddMode } = this.state;
    const { step } = this.props;
    return (
      <>
        <h2>{value}</h2>
        <div className={styles.btnSection}>
          <button className={styles.btn} onClick={this.handleOperation}>
            {isAddMode ? 'Add' : 'Reduce'}
          </button>
          <button className={styles.btn} onClick={this.handleChangeMode}>
            Change
          </button>
          <button className={styles.btn} onClick={this.handleReset}>
            Reset
          </button>
        </div>
        <p>Step: {step}</p>
      </>
    );
  }
}

export default MainSection;
