import React from 'react';

const Blogs = () => {
    return (
        <div className='grid grid-cols-2 px-20 py-10 gap-10 bg-black'>
            <div className='bg-gray-800 p-3 text-white rounded-md'>
                <h4 className='text-2xl mb-2'>What is difference between SQL and NoSQL</h4>
                <p>SQL is the programming language used to interface with relational databases. Relational databases model data as records in rows and tables with logical links between them. NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
            </div>
            <div className='bg-gray-800 p-3 text-white rounded-md'>
                <h4 className='text-2xl mb-2'>What is JWT, how does it work?</h4>
                <p>JWT means JSON Web Token. It is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key or a public key pair by the Identity Provider.</p>
            </div>
            <div className='bg-gray-800 p-3 text-white rounded-md'>
                <h4 className='text-2xl mb-2'>What is the difference between Javascript and NodeJS?</h4>
                <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Nodejs is a JavaScript runtime, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
            </div>
            <div className='bg-gray-800 p-3 text-white rounded-md'>
                <h4 className='text-2xl mb-2'>How does NodeJS handle multiple requests at the same time?</h4>
                <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
            </div>
        </div>
    );
};

export default Blogs;