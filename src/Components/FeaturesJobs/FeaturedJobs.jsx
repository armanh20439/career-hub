import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Job from '../Job/Job';

const FeaturedJobs = () => {
    const [jobs,setJobs]=useState([]);
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data));
    },[])
    return (
        <div className="">
            <div className='text-center'>
                <h1>{jobs.length}</h1>
                <h2 className="text-5xl">Featured Jobs: </h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-2 gap-6'>
                {
                    jobs.map(job=> <Job
                            key={Job.ID} job={job}
                    ></Job>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;