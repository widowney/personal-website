import React from 'react';
import { Card } from 'flowbite-react';
import { Button } from 'flowbite-react';

const Portfolio = () => {
    return (
        <div className="min-h-screen flex flex-col items-center sm:mr-16 sm:ml-16" id="Portfolio">
            <span className="text-transparent">.</span>
            <h1 className="text-3xl text-center mb-4 border-b-2 w-1/2 mt-10 dark:text-white font-bold">Portfolio</h1>
            <div className="flex w-full gap-2 flex-shrink-0 flex-wrap justify-center align-center">
                <div className="w-80">
                    <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                        </h5>
                        <div className="flex justify-center gap-4">
                            <Button>
                                Live Demo
                            </Button>
                            <Button>
                                Source Code
                            </Button>
                        </div>
                    </Card>
                </div>
                <div className="w-80">
                    <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                        </h5>
                        <div className="flex justify-center gap-4">
                            <Button>
                                Live Demo
                            </Button>
                            <Button>
                                Source Code
                            </Button>
                        </div>
                    </Card>
                </div>
                <div className="w-80">
                    <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                        </h5>
                        <div className="flex justify-center gap-4">
                            <Button>
                                Live Demo
                            </Button>
                            <Button>
                                Source Code
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;