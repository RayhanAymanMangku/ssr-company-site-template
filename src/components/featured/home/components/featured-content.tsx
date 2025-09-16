import { Card } from '@/components/ui/card'
import React from 'react'
import Image from 'next/image'
import { cardContent } from '../lib/constants'

interface FeaturedContentProps {
    heading: string
    about: string
    projectHeading: string
    projectDesc: string
}

const FeaturedContent = ({ heading, about, projectHeading, projectDesc }: FeaturedContentProps) => {

    return (
        <div className="flex flex-col w-full space-y-12 py-12">
            <section className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-8 w-full items-start">
                    <div className="md:w-[30%]">
                        <p className='text-sm text-amber-400 uppercase'>Background</p>
                        <h1 className="text-xl md:text-4xl font-semibold w-full break-words mb-4">
                            {heading}
                        </h1>
                    </div>
                    <div className="md:w-[70%]">
                        <p className="text-justify text-gray-500">
                            {about}
                        </p>
                    </div>
                </div>
            </section>
            <section className='container mx-auto px-4'>
                <div className="flex flex-col space-y-6">
                    <div>
                    <h1 className='text-xl md:text-4xl font-semibold w-full break-words mb-4'>{projectHeading}</h1>
                    <p className=' text-gray-500'>{projectDesc}</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {cardContent.map((item) => (
                            <Card className="shadow-none border-none relative aspect-[3/4] overflow-hidden group" key={item.id}>
                                <Image
                                    src={item.img}
                                    alt=""
                                    fill
                                    style={{ objectFit: "cover" }}
                                    className="absolute inset-0 transition duration-300 group-hover:brightness-50"
                                    priority
                                />
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col">
                                    <h1 className="font-medium text-xl md:text-2xl text-gray-50 relative z-10">
                                        {item.title}
                                    </h1>
                                    <p className="font-normal text-sm text-gray-50 relative text-justify z-10 my-4">
                                        {item.desc}
                                    </p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FeaturedContent