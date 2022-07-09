import React from 'react';

const About = () => {
    return (
        <div className="min-h-3/4 w-full" id="About">
            <span className="text-transparent">.</span>
            <div className=" border-2 p-4 shadow-md rounded-md xl:mr-48 xl:ml-48 m-4 mt-16">
                <h1 className="text-black text-lg dark:text-white border-b-2 mb-4">About</h1>
                <div className="mr-12 ml-12 leading-8">
                    <h2 className="text-black text-2xl dark:text-white text-center font-bold"> Hi there, I'm Will Downey</h2>
                    <p className="text-center dark:text-white ">
                        I'm a Computer Science student and aspiring Software Developer at Virginia Tech.
                        <br></br>
                        Some things I'm currently working on:
                        <ul>
                            <li>-Building a full-stack cashier application for a local snack bar business</li>
                            <li>-Learning backend web development</li>
                            <li>-Taking a linear algebra course</li>
                        </ul>
                    </p>
                </div>
                
                <div>
                    <h2 className="text-black text-xl dark:text-white border-b-2">Skills:</h2>
                    <div className="flex m-2 sm:m-10 flex-wrap justify-center gap-4">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain.svg"
                            alt="Java"
                            className="w-10 sm:w-20 rounded-md shadow-md"
                        />     
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
                            alt="JavaScript"
                            className="w-10 sm:w-20 rounded-md shadow-md"
                        />
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
                            alt="TypeScript"
                            className="w-10 sm:w-20 rounded-md shadow-md"
                        />
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg"
                            alt="C"
                            className="w-10 sm:w-20 rounded-md shadow-md"
                        />  
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg"
                            alt="C#"
                            className="w-10 sm:w-20 rounded-md shadow-md"
                        /> 
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                            alt="React"
                            className="w-10 sm:w-20 rounded-md shadow-md"
                        />
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                            alt="Node.js"
                            className="w-10 sm:w-20 rounded-md shadow-md"
                        />  
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                            alt="Express"
                            className="w-10 sm:w-20 rounded-md shadow-md"
                        />
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                            alt="MongoDB"
                            className="w-10 sm:w-20 rounded-md shadow-md"
                        />
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                            alt="Git"
                            className="w-10 sm:w-20 rounded-md shadow-md"
                        />                              
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
                            alt="Npm"
                            className="w-10 sm:w-20 rounded-md shadow-md"
                        />                              
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
                            alt="Jest"
                            className="w-10 sm:w-20 rounded-md shadow-md"
                        />
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
                            alt="HTML"
                            className="w-10 sm:w-20 rounded-md shadow-md"
                        />
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
                            alt="CSS3"
                            className="w-10 sm:w-20 rounded-md shadow-md"
                        />    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;