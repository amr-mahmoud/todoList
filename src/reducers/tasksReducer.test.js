import { TASK } from '../actions/types';
import tasksReducer from './tasksReducer';

const initialState = {
	tasksResults: [],
	completedTasks: [],
	pageSize: 10,
	completedTasksCount: 0,
	searchLoading: false,
	createLoading: false,
	deleteLoading: false,
};

const tempTaskResults = [
	{ id: '3', title: 'first', descripition: 'description', completed: false, dueTime: '26/10/2019' },
];

const dummyState = {
	tasksResults: [
		{ id: '1', title: 'first', descripition: 'description', completed: false, dueTime: '26/10/2019' },
		{ id: '2', title: 'first2', descripition: 'description', completed: false, dueTime: '26/10/2019' },
	],
	completedTasks: [],
	pageSize: 10,
	completedTasksCount: 0,
	searchLoading: false,
	createLoading: false,
	deleteLoading: false,
};
describe('tasksReducer', () => {
	it('should return the initial state', () => {
		expect(tasksReducer(undefined, {})).toEqual(initialState);
	});

	it('should handle Import regulary ', () => {
		expect(
			tasksReducer(initialState, {
				type: TASK.IMPORT_ALL_SUCCESS,
				payload: tempTaskResults,
			})
		).toEqual({
			completedTasks: [],
			pageSize: 10,
			completedTasksCount: 0,
			searchLoading: false,
			createLoading: false,
			deleteLoading: false,
			tasksResults: tempTaskResults,
		});
	});

	it('should handle Import regulary and appends the data to the existing array ', () => {
		expect(
			tasksReducer(
				{
					tasksResults: [
						{ id: '1', title: 'first', descripition: 'description', completed: false, dueTime: '26/10/2019' },
						{ id: '2', title: 'first2', descripition: 'description', completed: false, dueTime: '26/10/2019' },
					],
					completedTasks: [],
					pageSize: 10,
					completedTasksCount: 0,
					searchLoading: false,
					createLoading: false,
					deleteLoading: false,
				},
				{
					type: TASK.IMPORT_ALL_SUCCESS,
					payload: tempTaskResults,
				}
			)
		).toEqual({
			completedTasks: [],
			pageSize: 10,
			completedTasksCount: 0,
			searchLoading: false,
			createLoading: false,
			deleteLoading: false,
			tasksResults: [
				{ id: '1', title: 'first', descripition: 'description', completed: false, dueTime: '26/10/2019' },
				{ id: '2', title: 'first2', descripition: 'description', completed: false, dueTime: '26/10/2019' },
				...tempTaskResults,
			],
		});
	});

	it('should handle delete task ', () => {
		expect(
			tasksReducer(
				{
					tasksResults: [
						{ id: '1', title: 'first', descripition: 'description', completed: false, dueTime: '26/10/2019' },
						{ id: '2', title: 'first2', descripition: 'description', completed: false, dueTime: '26/10/2019' },
					],
					completedTasks: [],
					pageSize: 10,
					completedTasksCount: 0,
					searchLoading: false,
					createLoading: false,
					deleteLoading: false,
				},
				{
					type: TASK.DELETE_SUCCESS,
					payload: { id: '2' },
				}
			)
		).toEqual({
			completedTasks: [],
			pageSize: 10,
			completedTasksCount: 0,
			searchLoading: false,
			createLoading: false,
			deleteLoading: false,
			tasksResults: [{ id: '1', title: 'first', descripition: 'description', completed: false, dueTime: '26/10/2019' }],
		});
	});

	it('should handle create task ', () => {
		const newTask = { id: '333', title: 'first', descripition: 'description', completed: false, dueTime: '26/10/2019' };
		expect(
			tasksReducer(dummyState, {
				type: TASK.CREATE_SUCCESS,
				payload: newTask,
			})
		).toEqual({
			completedTasks: [],
			pageSize: 10,
			completedTasksCount: 0,
			searchLoading: false,
			createLoading: false,
			deleteLoading: false,
			tasksResults: [
				{ id: '1', title: 'first', descripition: 'description', completed: false, dueTime: '26/10/2019' },
				{ id: '2', title: 'first2', descripition: 'description', completed: false, dueTime: '26/10/2019' },
				{ id: '333', title: 'first', descripition: 'description', completed: false, dueTime: '26/10/2019' },
			],
		});
	});
});
