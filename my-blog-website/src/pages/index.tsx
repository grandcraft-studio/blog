import React from 'react';
import Header from '../components/Header';

const HomePage: React.FC = () => {
    return (
        <div>
            <Header />
            <h1>Welcome to My Blog</h1>
            <p>Here you will find a collection of my thoughts and writings.</p>
            {/* List of blog posts will be rendered here */}
        </div>
    );
};

export default HomePage;