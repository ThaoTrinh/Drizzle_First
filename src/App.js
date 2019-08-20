import React from 'react';
import { connect } from 'react-redux';

import './App.css';
import actions from './modules/action';

// const { createItemSaga, deleteItemSaga } = actions;

function App(props) {
	const { drizzleStatus, currentBalance, currentAccount } = props;

	if (!drizzleStatus.initialized)
		return <div></div>;
	
	console.log(props);
	return (
		<div>
			<div>Địa chỉ của tôi: {currentAccount}</div>
			<div>Số tiền đang có: {currentBalance} wei</div>
			<div>
				Địa chỉ người nhận
				<input />
			</div>
			<div>
				Số tiền cần chuyển
				<input />
			</div>
			<button onClick={() => {}}>Chuyển</button>
		</div>
	);
}

export default connect(({ items, drizzleStatus, web3, accountBalances, accounts }) => {
	const currentAccount = accounts[0];
	const currentBalance = accountBalances[currentAccount];
	return {
		items,
		drizzleStatus,
		web3,
		currentBalance,
		currentAccount
	};
})(App);
