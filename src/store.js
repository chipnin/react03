import { createStore, combineReducers, applyMiddleware } from 'redux';

const initialState = {
	username: 'NgocTV',
}

const rootReducer = combineReducers({
	user: (state = initialState, action) => {
		console.log('In Reducer');

		switch(action.type) {
			case 'CHANGE_USERNAME':
				return {
					username: action.payload,
				};
		}

		return state;
	},
	product: (state = {}, action) => state,
	order: combineReducers({
		card: (state = {}, action) => state,
		user: (state = {}, action) => state,
		product: (state = {}, action) => state,
	}),
});

// const middlewares = [
// 	store => {
// 		return next => {
// 			return action => {
// 				console.log('In middleware', action);

// 				next(action);

// 				setTimeout(() => next({
// 						type: 'CHANGE_USERNAME',
// 						payload: 'Change name after 3 seconds',
// 					}), 3000)
// 			}
// 		}
// 	}
// ];
const middlewares = [
	store => next => action => {
		prettyMiddleware(store, next, action);
	}
];

const prettyMiddleware = (store, next, action) => {
	console.log('In middleware', action);

	next(action);

	const date = new Date();

	setTimeout(() => next({
		type: 'CHANGE_USERNAME',
		payload: 'Change name after 3 seconds, time = ' + date.getSeconds(),
	}), 3000)
}

const store = createStore(
	rootReducer,
	// initialState
	applyMiddleware(...middlewares),
);

export default store;