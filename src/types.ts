import Duck from './Duck';

interface TRArray extends Array<TRMapValue> {};
type TRMapValue = string | number | boolean | TRMap | TRArray;
interface TRMap extends Map<string | number,TRMapValue> {};
type TSafeParams = string | number | TRArray | TRMap;
interface IActionMap
{
	[propName: string]: TAction
};
interface IAction
{
	type: string,
	[propName: string]: TSafeParams;
}
type TActionsDuckInjector = (duck: Duck) => IActionMap;
type TAction = (input: TSafeParams) => IAction;

interface ITypes
{
	[propName: string]: string
}
type TActionTypes = string[];
type TState = TRMap | TRArray | string | number | IState;
interface IState {
	[propName: string]: TState
}

type TReducerReturn = TSafeParams | TState;
type TReducer = (state: TState, action: IAction) => TReducerReturn;
type TDuckReducer = (state: TState, action: IAction, duck: Duck) => TReducerReturn;
type TDuckList = Duck[];
interface IDuck
{
	namespace: string,
	store: string,
	types: TActionTypes,
	initialState: TState,
	reducer: TDuckReducer,
	actions: TActionsDuckInjector;
};

export {
	TSafeParams,
	TRMapValue,
	TRMap,
	TRArray,
	TActionTypes,
	IAction,
	IActionMap,
	TState,
	IState,
	TReducerReturn,
	TDuckReducer,
	TActionsDuckInjector,
	ITypes,
	TReducer,
	TDuckList,
	IDuck,
};
