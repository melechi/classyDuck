import Duck from '../Duck';
import {
	// IState,
	TState,
	IAction,
	// TRArray,
	// IDuck,
} from '../types';

describe('With a simple test duck', () => {
	
	// interface ImyDuckState {
	// 	records: TRArray
	// };
	// interface ImyDuck extends IDuck{
	// 	initialState: ImyDuckState
	// };
	const myDuck=new Duck
	(
		{
			namespace:	'duck-test',
			store: 		'simple-CRUD',
			types:
			[
				'TEST_ACTION_CREATE',
				'TEST_ACTION_READ',
				'TEST_ACTION_UPDATE',
				'TEST_ACTION_DELETE',
			],
			initialState: {
				records: [],
			},
			reducer: (state: TState, action: IAction, duck: Duck) =>
			{
				switch (action.type)
				{
					case duck.types['TEST_ACTION_CREATE']:	return action.query;
					case duck.types['TEST_ACTION_READ']:	return action.query;
					case duck.types['TEST_ACTION_UPDATE']:	return action.query;
					case duck.types['TEST_ACTION_UPDATE']:	return action.query;
					default:                      			return state;
				}
			},
			actions: (duck: Duck) =>
			(
				{
					setVisibilitySearch: (query: string) =>
					({
							type: duck.types['SET_VISIBILITY_SEARCH'],
							query
					})
				}
			)
		}
	);
	
	test('check that all action types are created correctly', () => {
		expect(myDuck.namespace).toEqual('duck-test');
		expect(myDuck.store).toEqual('simple-CRUD');
		expect(myDuck.types).toEqual
		(
			{
				'TEST_ACTION_CREATE': 'duck-test/simple-CRUD/TEST_ACTION_CREATE',
				'TEST_ACTION_READ': 'duck-test/simple-CRUD/TEST_ACTION_READ',
				'TEST_ACTION_UPDATE': 'duck-test/simple-CRUD/TEST_ACTION_UPDATE',
				'TEST_ACTION_DELETE': 'duck-test/simple-CRUD/TEST_ACTION_DELETE',
			}
		);
	});
});