import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component
{
    render()
    {
        return (
            <div className="jumbotron">
                <h1>Kiran Learning </h1>
                <p>This is my first attempt in learning rect</p>
                <Link to="about" className ="btn btn-primary btn-lg">Learn more </Link>
            </div>
        );
    }
}

export default HomePage;