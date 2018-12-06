import { combineReducers, Reducer, ReducersMapObject } from 'redux';

import {
	TState,
	// IState,
	TReducerReturn,
	TDuckReducer,
	ITypes,
	IActionMap,
	IAction,
	TDuckList,
	IDuck,
} from './types';

export default class Duck
{
	public readonly namespace: string;
	public readonly store: string;
	public readonly initialState: TState;
	public types:ITypes = {};
	public actions:IActionMap = {};
	
	private readonly _reducer: TDuckReducer;
	
	constructor(options: IDuck)
	{
		this.namespace = options.namespace;
		this.store = options.store;
		this.initialState = options.initialState;
		
		for (let thisType of options.types)
		{
			this.types[thisType]=`${this.namespace}/${this.store}/${thisType}`;
		}
		
		this._reducer = options.reducer;
		
		this.actions=options.actions(this);
	}
	
	public reducer(state: TState, action: IAction):TReducerReturn
	{
		if (typeof state === 'undefined'|| state === undefined)
		{
			state=this.initialState;
		}
		return this._reducer(state, action, this);
	}
	
	public static combineReducers(ducks: TDuckList, nonDuckReducers: ReducersMapObject):Reducer
	{
		const reducers={};
		ducks.forEach
		(
			(duck: Duck)=>
			{
				reducers[duck.store]=duck.reducer.bind(duck);
			}
		);
		const combined=
		{
			...reducers,
			...nonDuckReducers
		};
		return combineReducers(combined);
	}
}
