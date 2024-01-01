import './App.css';
import { Provider } from 'react-redux';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

function App() {
	const appRouter = createBrowserRouter([
		{
			path: '/',
			element: <Body />,
			children: [
				{
					path: '/',
					element: <MainContainer />,
				},
				{
					path: 'watch',
					element: <WatchPage />,
				},
			],
		},
	]);

	return (
		<Provider store={store}>
			<div>
				<Header />
				<RouterProvider router={appRouter} />
				<Footer />
			</div>
		</Provider>
	);
}

export default App;
