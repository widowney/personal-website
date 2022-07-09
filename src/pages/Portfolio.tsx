import React from 'react';
import { Card } from 'flowbite-react';
import { Button } from 'flowbite-react';
import ResumeGenerator from '../images/resumegenerator.png';
import UserAPI from '../images/user-api.png'
import PersonalWebsite from '../images/personalwebsite.png'

const Portfolio = () => {
    return (
        <div className="min-h-screen flex flex-col items-center sm:mr-16 sm:ml-16" id="Portfolio">
            <span className="text-transparent">.</span>
            <h1 className="text-3xl text-center mb-4 border-b-2 w-1/2 mt-10 dark:text-white font-bold">Portfolio</h1>
            <div className="flex w-full gap-2 flex-shrink-0 flex-wrap justify-center align-center h-80" id="portfolio-cards">
                <div className="w-80">
                    <Card imgSrc={PersonalWebsite}>
                        <div className="flex flex-wrap gap-1 justify-center">
                            <span className="text-xs rounded-md bg-slate-200 p-1">TypeScript</span>
                            <span className="text-xs rounded-md bg-slate-200 p-1">ReactJS</span>
                            <span className="text-xs rounded-md bg-slate-200 p-1">Tailwind CSS</span>
                            <span className="text-xs rounded-md bg-slate-200 p-1">NPM</span>
                        </div>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Personal Website
                        </h5>
                        <div className="flex justify-center gap-4">
                            <div onClick={() => {window.location.assign("#")}}>
                                <Button>
                                    Live Demo
                                </Button>
                            </div>
                            <div onClick={() => {window.location.assign("https://github.com/wrdowney/wrdowney.github.io");}}>
                                <Button>
                                    Source Code
                                </Button>
                            </div>
                            
                        </div>
                    </Card>
                </div>
                <div className="w-80">
                    <Card imgSrc={UserAPI}>
                        <div className="flex flex-wrap gap-1 justify-center">
                            <span className="text-xs rounded-md bg-slate-200 p-1">JavaScript</span>
                            <span className="text-xs rounded-md bg-slate-200 p-1">Express</span>
                            <span className="text-xs rounded-md bg-slate-200 p-1">Nodemon</span>
                            <span className="text-xs rounded-md bg-slate-200 p-1">NPM</span>
                        </div>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        REST User API
                        </h5>
                        <div className="flex justify-center gap-4">
                            <div>
                                <Button disabled={true}>
                                    Live Demo
                                </Button>
                            </div>
                            <div onClick={() => {window.location.assign("https://github.com/wrdowney/user-api");}}>
                                <Button>
                                    Source Code
                                </Button>
                            </div>
                            
                        </div>
                    </Card>
                </div>
                <div className="w-80 h-full">
                    <Card imgSrc={ResumeGenerator}>
                        <div className="flex flex-wrap gap-1 justify-center">
                            <span className="text-xs rounded-md bg-slate-200 p-1">JavaScript</span>
                            <span className="text-xs rounded-md bg-slate-200 p-1">ReactJS</span>
                            <span className="text-xs rounded-md bg-slate-200 p-1">Tailwind CSS</span>
                            <span className="text-xs rounded-md bg-slate-200 p-1">NPM</span>
                        </div>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Resume Generator
                        </h5>
                        <div className="flex justify-center gap-4">
                            <div onClick={() => {window.location.assign("https://wrdowney.github.io/cv-project/");}}>
                                <Button>
                                    Live Demo
                                </Button>
                            </div>
                            <div onClick={() => {window.location.assign("https://github.com/wrdowney/cv-project");}}>
                                <Button>
                                    Source Code
                                </Button>
                            </div>
                            
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;