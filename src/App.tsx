import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { makeStore } from './redux/makeStore';
import Main from './components/main/Main';

const store = makeStore();

function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<BrowserRouter>
					<Main />
				</BrowserRouter>
			</Provider>
		</div>
	);
}

export default App;
