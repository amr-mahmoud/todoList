import { gql } from 'apollo-boost';
import { API_SERVICE } from '../service/apiService';
import { TASK } from './types';
import store from '../store';

export function importAllTasks() {
	store.dispatch({ type: TASK.IMPORT_ALL_REQUEST });
	return API_SERVICE.MYTASK_API.query({
		query: gql`
			{
				tasks {
					id
					title
				}
			}
		`,
	})
		.then(result => {
			return store.dispatch({ type: TASK.IMPORT_ALL_SUCCESS, payload: result });
		})
		.catch(err => {
			console.log(err);
			store.dispatch({ type: TASK.IMPORT_ALL_FAILED });
		});
}
