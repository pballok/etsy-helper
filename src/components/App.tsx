import CssBaseline from '@mui/material/CssBaseline';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Dashboard from '../routes/Dashboard';

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Dashboard />,
        },
    ]);

    return (
        <>
            <CssBaseline />
            <RouterProvider router={router} />
        </>
    );
}

export default App;