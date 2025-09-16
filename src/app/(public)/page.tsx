import FeaturedContent from "@/components/featured/home/components/featured-content";
import HeroContent from "@/components/featured/home/components/hero-content";
import Locations from "@/components/featured/home/components/locations";

export default function Home() {
  return (
    <>
      <section>
        <HeroContent
          imageUrl="/assets/fresh-industry.jpg"
          section="Welcome to Company"
          title="Engineering, Procurement, Construction & Installation"
          isDisplayButton={true}
        />
      </section>
     
      <section>        
        <FeaturedContent
        heading="About Us"
          about={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vitae quis dolores reprehenderit, animi repudiandae eligendi perspiciatis impedit? Neque animi possimus consequuntur sapiente, praesentium ut architecto distinctio enim iusto totam laudantium, perferendis id, ratione obcaecati accusantium doloribus explicabo dicta delectus?`}
          projectHeading="Our Projects" 
          projectDesc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam corporis necessitatibus eligendi quisquam omnis." 
        />
      </section>
      <section>
        <Locations/>
      </section>
    </>
  );
}


