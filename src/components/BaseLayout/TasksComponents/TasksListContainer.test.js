import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import { TasksListContainer } from './TasksListContainer';
import TaskList from '../TasksComponents/components/TasksLists';
import TaskItem from './components/components/TaskItem';
import { Loader } from 'semantic-ui-react';
import { Title } from './components/components/TaskItem.style';
configure({ adapter: new Adapter() });

describe('', () => {
	let TasksListContainerWrapper;

	const InitialProps = {
		tasksReducer: {
			tasksResults: [
				{ id: '1', title: 'first', descripition: 'description', completed: false, dueTime: '26/10/2019' },
				{ id: '2', title: 'second', descripition: 'description', completed: false, dueTime: '26/10/2019' },
				{ id: '3', title: 'third', descripition: 'description', completed: false, dueTime: '26/10/2019' },
			],
			completedTasks: [],
			pageSize: 10,
			completedTasksCount: 0,
			searchLoading: false,
			createLoading: false,
			deleteLoading: false,
		},
	};
	beforeEach(() => {
		TasksListContainerWrapper = mount(<TasksListContainer {...InitialProps} />);
	});

	it('ContractContainer renders', () => {
		expect(TasksListContainerWrapper).not.toBeNull();
	});

	it('ContractContainer renders No taskResults then show loader no break', () => {
		const dummyProps = {
			tasksReducer: {
				tasksResults: [],
				completedTasks: [],
				pageSize: 10,
				completedTasksCount: 0,
				searchLoading: false,
				createLoading: false,
				deleteLoading: false,
			},
		};

		TasksListContainerWrapper = mount(<TasksListContainer {...dummyProps} />);
		expect(TasksListContainerWrapper.containsMatchingElement(<TaskList />)).toBeFalsy();
		expect(
			TasksListContainerWrapper.containsMatchingElement(
				<Loader active={true} content="Waiting for New Tasks to Arrive"></Loader>
			)
		).toBeTruthy();
	});

	it('ContractContainer renders taskResults no loader', () => {
		// console.log(TasksListContainerWrapper.debug());
		expect(
			TasksListContainerWrapper.containsMatchingElement(
				<Loader active={true} content="Waiting for New Tasks to Arrive"></Loader>
			)
		).toBeFalsy();
		expect(TasksListContainerWrapper.containsMatchingElement(<TaskList />)).toBeTruthy();

		expect(
			TasksListContainerWrapper.find(TaskItem)
				.at(0)
				.find(Title)
				.text()
		).toEqual('first');

		expect(
			TasksListContainerWrapper.find(TaskItem)
				.at(1)
				.find(Title)
				.text()
		).toEqual('second');

		expect(
			TasksListContainerWrapper.find(TaskItem)
				.at(2)
				.find(Title)
				.text()
		).toEqual('third');
	});
});
