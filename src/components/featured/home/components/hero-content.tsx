import Image from "next/image"
import { Button } from "@/components/ui/button"

interface HeroContent {
  section: string
  title: string
  imageUrl: string
  isDisplayButton?: boolean
}

const HeroContent = ({ section, title, imageUrl, isDisplayButton }: HeroContent) => {
  return (
    <div className="relative flex w-full h-screen md:h-[95vh]">
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt="Main Infrastructure"
        fill
        className="object-cover w-full h-full"
        priority
      />
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <div className="absolute inset-0 flex flex-col justify-center z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="relative p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-black/20 backdrop-blur-sm shadow-2xl border border-white/10 max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent rounded-2xl sm:rounded-3xl"></div>
            <div className="relative z-10 flex flex-col w-full items-center justify-center text-center">
              <p className="text-xs sm:text-sm uppercase text-gray-400 mb-2 sm:mb-4">{section}</p>
              <h1 className="text-2xl md:text-5xl font-medium w-full leading-tight sm:leading-tight md:leading-tight">
                {title}
              </h1>
              {isDisplayButton && (
                /* Made button responsive with better spacing */
                <Button
                  variant="outline"
                  size="default"
                  className="bg-transparent rounded-2xl mt-6 md:mt-8 px-6 py-3 text-sm hover:bg-white/10 border-white/30 hover:border-white/50 hover:text-white"
                >
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
