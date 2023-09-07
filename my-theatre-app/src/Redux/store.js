import { configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import MovieSaga from './saga';
import rootReducer from './reducers/rootReducer';

const sagaMiddleware = createSagaMiddleware();
// const composeEnhancers = window.__redux_devtools_extension_compose__ || compose;

export default configureStore({ reducer: rootReducer , middleware: [sagaMiddleware],});

sagaMiddleware.run(MovieSaga);
