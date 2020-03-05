import { TASK } from '../actions/types';

const initialState = {
	tasksResults: [],
	completedTasks: [],
	pageSize: 10,
	completedTasksCount: 0,
	searchLoading: false,
	createLoading: false,
	deleteLoading: false,
};

export default function tasksReducer(state = initialState, action) {
	switch (action.type) {
		case TASK.IMPORT_ALL_SUCCESS:
			const { tasksResults } = state;
			return {
				...state,
				tasksResults: [...tasksResults, ...action.payload],
			};

		case TASK.IMPORT_ALL_COMPLETED_SUCCESS:
			return {
				...state,
				completedTasks: [...action.payload.tasks],
				completedTasksCount: action.payload.tasksConnection.aggregate.count,
			};

		case TASK.UPDATE_SUCCESS:
			return {
				...state,
			};

		case TASK.CREATE_SUCCESS:
			const tempCreateArray = state.tasksResults;
			console.log(tempCreateArray);
			tempCreateArray.push(action.payload.data.createTask);
			console.log(tempCreateArray);

			return {
				...state,
				tasksResults: tempCreateArray,
			};

		case TASK.DELETE_SUCCESS:
			const tempArray = state.tasksResults.filter(value => {
				return value.id !== action.payload.data.deleteTask.id;
			});
			return {
				...state,
				tasksResults: tempArray,
			};
		case TASK.CLEAR_ALL:
			return {
				...state,
				tasksResults: [],
			};

		default:
			return state;
	}
}
