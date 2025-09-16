import HeroContent from '@/components/featured/home/components/hero-content'
import ProjectDetails from '@/components/featured/projects/components/project-details'
import React from 'react'

const page = () => {
    return (
        <>
            <section>
                <HeroContent
                    section="SERVICES"
                    title="Our Services"
                    imageUrl="/assets/power-plant.jpg"
                    isDisplayButton={false}
                />
            </section>
            <section>
                <ProjectDetails
                    heading='Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    '
                    description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente ea enim modi quae dolorum ad dolores ipsum libero. Fuga maxime nulla dolores atque voluptate.'
                    lastDescription='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente ea enim modi quae dolorum ad dolores ipsum libero. Fuga maxime nulla dolores atque voluptate.'
                    optAdditionalDescription=''
                />

            </section>

        </>
    )
}

export default page