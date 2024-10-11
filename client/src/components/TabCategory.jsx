import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCards';
import { useEffect, useState } from 'react';
import axios from 'axios';


const TabCategory = () => {

    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs`);
            setJobs(data)
        }
        getData()
    }, [])

    return (
        <div>
            <Tabs>
                <div className='container px-6 py-10 mx-auto'>
                    <h1 className='text-3xl text-center font-lato font-semibold'>Brows By Cetegory</h1>
                    <p className='max-w-2xl text-center my-6 mx-auto text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, asperiores suscipit! Obcaecati animi molestiae id minima autem magnam? Provident voluptatem, quasi iure, hic totam odio quidem quam nihil aspernatur nam dolores optio perspiciatis, incidunt rerum consequuntur omnis eos fugiat. Magnam!</p>
                    <div className='flex items-center justify-center'>
                        <TabList>
                            <Tab>Web Development</Tab>
                            <Tab>Graphics Design</Tab>
                            <Tab>Digital Marketing</Tab>
                        </TabList>
                    </div>

                    <TabPanel>
                        <div className='grid grid-cols-1 gap-8 mt-6 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                            {
                                jobs?.filter(jobCat => jobCat.category === 'Web development')?.map(job => (
                                    <JobCard key={job?._id} job={job} />
                                ))
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 gap-8 mt-6 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                            {
                                jobs?.filter(jobCat => jobCat.category === 'Graphics design')?.map(job => (
                                    <JobCard key={job?._id} job={job} />
                                ))
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 gap-8 mt-6 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                            {
                                jobs?.filter(jobCat => jobCat.category === 'Digital marketing')?.map(job => (
                                    <JobCard key={job?._id} job={job} />
                                ))
                            }
                        </div>
                    </TabPanel>
                </div>
            </Tabs>
        </div>
    );
};

export default TabCategory;