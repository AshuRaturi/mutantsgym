import React from 'react'
import BannerImg from '../assets/banner.jpg'
import { Bike, Dumbbell, Heart, Users } from 'lucide-react';

const BgStyle = {
    backgroundImage: `url(${BannerImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%"
};

const Services = () => {

    const servicesJson = [
        {
            title: "Strength Training",
            description: "Build muscle and increase your strength with our expert-led weight training programs.",
            icon: Dumbbell,
        },
        {
            title: "Zumba / Yoga Classes",
            description: "Join our energetic zumba classes for a fun and motivating workout experience.",
            icon: Users,
        },
        {
            title: "Cardio Fitness",
            description: "Improve your cardiovascular health with our state-of-the-art cardio equipment and classes.",
            icon: Heart,
        },
        {
            title: "Boxing Classes",
            description: "Pedal your way to fitness with our high-intensity spin classes led by certified instructors.",
            icon: Bike,
        },
    ]
    return (
        <div id='service' style={BgStyle} className='dark:bg-black dark:text-white'>
            <div className='px-6 bg-white/10 dark:bg-black/60 md:px-0'>
                <div className='max-w-7xl mx-auto min-h-[620px] flex items-center'>
                    <div className='w-full mx-auto space-y-5 md:w-1/2'>
                        <h1 className='mb-12 text-4xl font-bold text-center text-yellow-500'>Our Services</h1>
                        <div className='grid grid-cols-2 gap-7'>
                            {
                                servicesJson.map((service) => {
                                    return <div>
                                        <div className='flex flex-col items-center gap-4 text-center md:flex-row md:text-start'>
                                            <div className='w-12 h-12 bg-slate-100 dark:bg-[#28282B] text-yellow-500 rounded-full flex items-center justify-center md:mb-4'>
                                                <service.icon className='w-6 h-6 text-primary-foreground' />
                                            </div>
                                            <div className='flex-1'>
                                                <h3 className='text-xl font-semibold text-white'>{service.title}</h3>
                                                <p className='mt-2 text-sm text-gray-400 dark:text-gray-400'>{service.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>

                    <div className='md:w-1/2'></div>
                </div>
            </div>
        </div>
    )
}

export default Services
