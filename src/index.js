import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { gql } from 'apollo-boost';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import store from './store';

const client = new ApolloClient({
	uri: 'https://api-euwest.graphcms.com/v1/ck75bq3rr0k5i01cyf9p599sh/master',
});

// client
// 	.mutate({
// 		mutation: gql`
// 			mutation {
// 				updateTask(
// 					data: { title: "RubixTask", description: "you have an obligation to end the rubix task" }
// 					where: { id: "ck7699nkdez4g0b20kczng64q" }
// 				) {
// 					id
// 				}
// 			}
// 		`,
// 	})
// 	.then(result => console.log(result));

client
	.query({
		query: gql`
			{
				tasks {
					id
					title
				}
			}
		`,
	})
	.then(result => console.log(result));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
