import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const App: React.FC = (props: any) => {
    // this is an App Component.
    return (
        <div className='app'>
            <h1>Typescript React Webpack Boilerplate</h1>
            <p>by Jitendra Sharma</p>
        </div>
    );
};

export default App;
