import { TASK } from '../actions/types';

const initialState = {
	searchTasksResults: [],
	totalSearchResults: 0,
	currentSearchPageOffset: 0,
	searchResultsPageSize: 20,
	searchLoading: false,
	createLoading: false,
	deleteLoading: false,
};

export default function navigateToInATNbodyReducer(state = initialState, action) {
	switch (action.type) {
		case TASK.IMPORT_ALL_SUCCESS:
			return {
				...state,
			};

		default:
			return state;
	}
}
