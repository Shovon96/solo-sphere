import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCards';

const TabCategory = () => {
    return (
        <div>
            <Tabs>
                <div className='container px-6 py-10 mx-auto'>
                    <h1 className='text-3xl text-center font-lato font-semibold'>Brows By Cetegory</h1>
                    <p className='max-w-2xl text-center my-6 mx-auto text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, asperiores suscipit! Obcaecati animi molestiae id minima autem magnam? Provident voluptatem, quasi iure, hic totam odio quidem quam nihil aspernatur nam dolores optio perspiciatis, incidunt rerum consequuntur omnis eos fugiat. Magnam!</p>
                    <div className='flex items-center justify-center'>
                        <TabList>
                            <Tab>Web Design</Tab>
                            <Tab>Graphics Design</Tab>
                            <Tab>Digital Marketing</Tab>
                        </TabList>
                    </div>

                    <TabPanel>
                        <h2><JobCard /></h2>
                    </TabPanel>
                    <TabPanel>
                        <h2><JobCard /></h2>
                    </TabPanel>
                    <TabPanel>
                        <h2><JobCard /></h2>
                    </TabPanel>
                </div>
            </Tabs>
        </div>
    );
};

export default TabCategory;