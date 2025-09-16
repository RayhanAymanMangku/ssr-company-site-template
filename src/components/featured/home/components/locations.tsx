import { Button } from '@/components/ui/button'
import { Clock } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Locations = () => {
    return (
        <div className="w-full h-auto bg-gray-100 py-12">
            <div className="container px-4 py-12 mx-auto">
                <div className="flex flex-col gap-6 items-center justify-center">
                    <div className='flex w-full h-full items-center justify-center'>
                        <div className="w-fit h-fit rounded-lg bg-amber-400 text-white p-6">
                            <div className="flex flex-row gap-2 items-center">
                                <Clock className="h-6 w-6 text-white" />
                                <div className="flex flex-col">
                                    <h1 className="text-2xl font-medium">We&apos;re Open</h1>
                                    <p className="text-sm text-white">Mon - Fry, 9.AM to 4.PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Image
                            src="/assets/indonesia.svg"
                            alt="Map showing our locations"
                            width={800}
                            height={600}
                            className="object-cover"
                        />
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default Locations