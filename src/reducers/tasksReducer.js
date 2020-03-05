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

		case TASK.CLEAR_ALL:
			return {
				...state,
				tasksResults: [],
			};

		default:
			return state;
	}
}
