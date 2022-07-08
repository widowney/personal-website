import React from 'react';
import { Timeline } from 'flowbite-react';

const Resume = () => {
    return (
        <div className="min-h-screen flex align-center justify-center m-4" id="Resume">
            <div className="mt-20">
                {/* EXPERIENCE */}
                <h1 className="m-2 text-black text-2xl dark:text-white border-b-2 font-bold">Experience</h1>
                <Timeline>
                <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                    <Timeline.Time>
                        Jul 2021 - Present
                    </Timeline.Time>
                    <Timeline.Title>
                        Technology Support Specialist Intern @ Fairfax County Public Schools
                    </Timeline.Title>
                    <Timeline.Body>
                    -Worked with a team of 110+ employees to deploy and maintain 250,000+ devices across the 13th largest school district in the country.
                    <br></br>
                    -Developed a script that logs all users who join a school network and checks their device for common inappropriate software.
                    <br></br>
                    -Automated checking devices into a database using Selenium WebDriver to automatically fill the submission form, reducing manual time spent by employees checking in devices.
                    </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                    <Timeline.Time>
                        Jan 2022 - May 2022
                    </Timeline.Time>
                    <Timeline.Title>
                        Research Assistant @ COGENT Lab VT
                    </Timeline.Title>
                    <Timeline.Body>
                    -Assisted in development of virtual reality environments designed to train EMS personnel
                    <br></br>
                    -Built and configured software to add third-party hand tracking support to the Meta Quest 2 platform via Oculus Link
                    <br></br>
                    -Combined multiple codebases into a singular cross-platform codebase that allowed software to be run via Oculus Link, Oculus Air Link, or as a standalone
                    <br></br>
                    -Languages and Software: Unity, C#, Meta Quest 2, Git, Visual Studio 2022
                    </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                </Timeline>

                {/* EDUCATION */}
                <h1 className="m-2 text-black text-2xl dark:text-white border-b-2 font-bold">Education</h1>
                <Timeline>
                <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                    <Timeline.Time>
                        Aug 2020 - May 2024(Expected)
                    </Timeline.Time>
                    <Timeline.Title>
                        B.S. Computer Science @ Virginia Tech
                    </Timeline.Title>
                    <Timeline.Body>
                    -President of ACM, Secretary of Alpha Tau Omega(America's leadership development fraternity), member of the AI & ML Club, member of Web Development Club
                    <br></br>
                    -Intramural Basketball, Football, and Soccer 
                    <br></br>
                    -Minors in Mathematics and Statistics
                    </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                    <Timeline.Time>
                        Aug 2016 - Jun 2020
                    </Timeline.Time>
                    <Timeline.Title>
                        Honors Graduate @ Lake Braddock Secondary School
                    </Timeline.Title>
                    <Timeline.Body>
                    -Member of the Computer Science, Science, Math, National, and Latin Honor Socities
                    <br></br>
                    -Varsity Letter in Basketball, Academic Letter Winner
                    </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                </Timeline>
            </div>
            <div>
                
            </div>
            
        </div>
    );
    
};

export default Resume;