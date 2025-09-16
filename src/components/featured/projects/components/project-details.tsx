import React from 'react'
import Image from 'next/image'


interface ProjectDetailsProps {
    heading: string
    description?: string
    lastDescription?: string
    optAdditionalDescription?: string
}

const ProjectDetails = ({ heading, description, lastDescription, optAdditionalDescription }: ProjectDetailsProps) => {
    return (
        <div className="container mx-auto px-4 space-y-12 py-12">
            <div className="grid md:grid-cols-2 w-full gap-12">
                <div className="flex flex-col gap-6">
                    <h1 className="text-xl md:text-4xl font-semibold w-full break-words mb-4">
                        {heading}
                    </h1>
                    <p className='text-justify text-gray-500'>{description}</p>
                    <p className='text-justify text-gray-500'>{lastDescription}</p>
                </div>
                <div>
                    <Image
                        src="/assets/power-plant-2.jpg"
                        alt="Power Plant"
                        width={500}
                        height={300}
                        className="object-cover w-full h-full rounded-2xl shadow-lg"
                    />
                </div>
            </div>
            <div className="flex w-full">
                <p className='text-justify text-gray-500'>{optAdditionalDescription}</p>
            </div>
        </div>
    )
}

export default ProjectDetails