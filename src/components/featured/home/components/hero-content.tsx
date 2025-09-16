import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface HeroContent {
    section: string
    title: string
    imageUrl: string
    isDisplayButton?: boolean
}

const HeroContent = ({ section, title, imageUrl, isDisplayButton }: HeroContent) => {
    return (
        <div className="relative flex w-full h-full md:h-[95vh]">
            <Image
                src={imageUrl}
                alt='Main Infasctructure'
                fill
                className="object-cover w-full h-full"
                priority
            />
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <div className="absolute inset-0 flex flex-col justify-center z-20">
                <div className="container mx-auto px-4 text-white">
                    <div className="relative p-8 rounded-3xl bg-black/20 backdrop-blur-sm shadow-2xl border border-white/10">
                        <div className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent rounded-3xl"></div>
                        <div className="relative z-10 flex flex-col w-full items-center justify-center">
                            <p className="text-sm uppercase text-center text-gray-500">{section}</p>
                            <h1 className="text-6xl font-medium w-2/3 text-center">
                                {title}
                            </h1>
                            {isDisplayButton && (
                                <Button variant="outline" size="lg" className="bg-transparent rounded-3xl mt-8">
                                    See Details
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroContent