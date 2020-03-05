import { gql } from 'apollo-boost';
import { API_SERVICE } from '../service/apiService';
import { TASK } from './types';
import store from '../store';

export function importAllTasks(first, skip) {
	store.dispatch({ type: TASK.IMPORT_ALL_REQUEST });
	return API_SERVICE.MYTASK_API.query({
		query: gql`
			query test($first: Int = ${first},$skip: Int = ${skip}) {
				tasks(first: $first, skip: $skip) {
					id
					title
					description 
					completed
                    dueTime
				}
               
			}
            
		`,
	})
		.then(result => {
			return store.dispatch({ type: TASK.IMPORT_ALL_SUCCESS, payload: result.data.tasks });
		})
		.catch(err => {
			console.log(err);
			store.dispatch({ type: TASK.IMPORT_ALL_FAILED });
		});
}

export function importAllCompletedTasks(input) {
	store.dispatch({ type: TASK.IMPORT_ALL_COMPLETED_REQUEST });
	return API_SERVICE.MYTASK_API.query({
		query: gql`
			query test($input: Int = ${input}) {
				tasks(first: 10, skip: $input, where: { completed: true }) {
					id
					title
					description
					completed
					dueTime
				}
                tasksConnection( where:{completed:true}) {
     		    aggregate{
                count
                    }
                 }

			}
		`,
	})
		.then(result => {
			console.log('HERE', result);
			return store.dispatch({
				type: TASK.IMPORT_ALL_COMPLETED_SUCCESS,
				payload: result.data,
			});
		})
		.catch(err => {
			console.log(err);
			store.dispatch({ type: TASK.IMPORT_ALL_COMPLETED_FAILED, payload: err });
		});
}

export function updateTask(input) {
	store.dispatch({ type: TASK.UPDATE_REQUEST });

	const { id } = input;
	delete input.id;
	console.log(id);
	return dispatch => {
		return API_SERVICE.MYTASK_API.mutate({
			variables: { input, id },
			mutation: gql`
				mutation updateTask($input: TaskUpdateInput!, $id: ID!) {
					updateTask(data: $input, where: { id: $id }) {
						id
						title
						completed
						description
						completed
						dueTime
					}
				}
			`,
		})
			.then(result => {
				console.log(result);

				dispatch({ type: TASK.CLEAR_ALL });
				importAllTasks(5, 0);
				return dispatch({ type: TASK.UPDATE_SUCCESS });
			})
			.catch(err => {
				store.dispatch({ type: TASK.UPDATE_FAILED, payload: err });
			});
	};
}

export function createTask(input) {
	store.dispatch({ type: TASK.CREATE_REQUEST });

	return API_SERVICE.MYTASK_API.mutate({
		variables: { input },
		mutation: gql`
			mutation createTask($input: TaskCreateInput!) {
				createTask(data: $input) {
					id
					title
					description
					completed
					dueTime
				}
			}
		`,
	})
		.then(result => {
			console.log('RES', result);
			return store.dispatch({ type: TASK.CREATE_SUCCESS, payload: result });
		})
		.catch(err => {
			console.log('err', err);
			store.dispatch({ type: TASK.IMPORT_ALL_FAILED });
		});
}

export function deleteTask(input) {
	store.dispatch({ type: TASK.DELETE_REQUEST });

	return API_SERVICE.MYTASK_API.mutate({
		variables: { input },
		mutation: gql`
			mutation deleteTask($input: ID!) {
				deleteTask(where: { id: $input }) {
					id
					title
					completed
				}
			}
		`,
	})
		.then(result => {
			console.log('RES', result);
			// store.dispatch({ type: TASK.CLEAR_ALL });
			// importAllTasks(5, 0);
			return store.dispatch({ type: TASK.DELETE_SUCCESS, payload: result });
		})
		.catch(err => {
			console.log('err', err);
			store.dispatch({ type: TASK.DELETE_FAILURE, payload: err });
		});
}
