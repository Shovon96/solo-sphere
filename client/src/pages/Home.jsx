import { useLoaderData } from "react-router-dom";
import Carousel from "../components/Carousel";
import TabCategory from "../components/TabCategory";


const Home = () => {

    const jobs = useLoaderData()
    // console.log(jobs);

    return (
        <div>
            <Carousel />
            <TabCategory jobs={jobs} />
        </div>
    );
};

export default Home;