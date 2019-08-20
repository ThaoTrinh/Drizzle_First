import React from "react";
import { connect } from "react-redux";
import { DrizzleContext } from "drizzle-react";

import "./App.css";
import actions from "./modules/action";

const NOT_ENROLL = "You are not enroll on the bank yet";

class App extends React.Component {
  state = {
    balance: -1,
    amount: 0
  };

  queryBankBalance = () => {
    const { SimpleBank } = this.props;
    SimpleBank.methods
      .balance()
      .call()
      .then(b => {
        if (b == 0) b = NOT_ENROLL;
        this.setState({
          balance: b
        });
      });
  };

  deposit = () => {
    const { SimpleBank, currentAccount } = this.props;
    const { amount } = this.state;
    if (amount < 1000) {
      console.log("amount value must be bigger than 1000");
      return;
    }
    SimpleBank.methods
      .deposit()
      .send({
        from: currentAccount,
        value: amount // in wei
      })
      .then(b => {
        console.log(`deposit ${amount} success, txhash: `, b.transactionHash);
        this.queryBankBalance();
      });
  };

  enroll = () => {
    const { SimpleBank, currentAccount } = this.props;
    SimpleBank.methods
      .enroll()
      .send({
        from: currentAccount
      })
      .then(b => {
        console.log("you are enrolled, txhash: ", b.transactionHash);
        this.queryBankBalance();
      });
  };

  withdraw = () => {
    const { SimpleBank, currentAccount } = this.props;
    const { amount } = this.state;
    SimpleBank.methods
      .withdraw(amount)
      .send({
        from: currentAccount
      })
      .then(b => {
        console.log(`you withdraw ${amount}, txhash: `, b.transactionHash);
        this.queryBankBalance();
      });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  componentDidMount() {
    this.queryBankBalance();
  }

  render() {
    const { currentAccount, currentBalance } = this.props;
    const { balance, amount } = this.state;

    let balance_display = "";
    if (balance == NOT_ENROLL)
      balance_display = <button onClick={this.enroll}>Enroll now</button>;
    else balance_display = `${balance} bank money`;
    return (
      <div>
        <div>Địa chỉ của tôi: {currentAccount}</div>
        <div>Số eth đang có: {currentBalance} wei</div>
        <div>Số tiền đang có: {balance_display}</div>
        <div>
          <input
            name="amount"
            type="text"
            value={amount}
            onChange={this.handleChange}
          />
          <button onClick={this.withdraw}>Rut Tien</button>
          <button onClick={this.deposit}>Nap tien</button>
        </div>
      </div>
    );
  }
}

class AppContainer extends React.Component {
  render() {
    return (
      <DrizzleContext.Consumer>
        {({ initialized, drizzle }) => {
          if (!initialized) return <div></div>;
          const { SimpleBank } = drizzle.contracts;
          return <App SimpleBank={SimpleBank} {...this.props} />;
        }}
      </DrizzleContext.Consumer>
    );
  }
}

export default connect(({ items, accountBalances, accounts }) => {
  const currentAccount = accounts[0];
  const currentBalance = accountBalances[currentAccount];
  return {
    items,
    currentBalance,
    currentAccount
  };
})(AppContainer);
