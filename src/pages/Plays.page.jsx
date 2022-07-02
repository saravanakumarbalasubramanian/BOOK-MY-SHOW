import React from 'react';
import PlaysFilters from '../components/PlaysFilters/PlaysFilters.component';
import Poster from '../components/Poster/Poster.component';


const Plays = () => {
    return (
        <>
            <div className='container mx-auto px-4'>
                <div className='w-full lg:flex lg:flex-row-reverse'>
                    <div className='lg:w-3/4'>
                        <h2 className='text-2xl font-bold mb-4'>Plays in Bengaluru</h2>
                        <div className='flex flex-wrap '>
                            <div className='w-1/2 my-3 md:w-1/3 lg:w-3/12'>
                                <Poster src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/thor-love-and-thunder-et00302403-24-05-2022-12-00-43.jpg"
                                    title="Perumaale 2 & Charukesi"
                                    subtitle="Tamil ₹750"
                                />
                            </div>
                            <div className='w-1/2 my-3 md:w-1/3 lg:w-3/12'>
                                <Poster src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/thor-love-and-thunder-et00302403-24-05-2022-12-00-43.jpg"
                                    title="Perumaale 2 & Charukesi"
                                    subtitle="Tamil ₹750"
                                />
                            </div>
                            <div className='w-1/2 my-3 md:w-1/3 lg:w-3/12'>
                                <Poster src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/thor-love-and-thunder-et00302403-24-05-2022-12-00-43.jpg"
                                    title="Perumaale 2 & Charukesi"
                                    subtitle="Tamil ₹750"
                                />
                            </div>
                            <div className='w-1/2 my-3 md:w-1/3 lg:w-3/12'>
                                <Poster src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/thor-love-and-thunder-et00302403-24-05-2022-12-00-43.jpg"
                                    title="Perumaale 2 & Charukesi"
                                    subtitle="Tamil ₹750"
                                />
                            </div>
                        </div>
                    </div>



                    <div className='lg:w-3/12'>
                        <h2>Filters</h2>
                        <div>
                            <PlaysFilters title="Date" tags={["Today" , "Tomorrow" , "this Weekend"]}/>
                            <PlaysFilters title="Language" tags={["Tamil" , "Telegu" , "English"]}/>
                            <PlaysFilters title="Date" tags={["Today" , "Tomorrow" , "this Weekend"]}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Plays ;