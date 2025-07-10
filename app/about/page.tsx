import { FaChalkboardTeacher, FaUsers, FaGlobe, FaBook, FaLaptopCode } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-20 max-w-5xl mx-auto text-center"
      aria-labelledby="about-title"
    >
      <h2
        id="about-title"
        className="text-4xl font-extrabold text-green-700 mb-12"
      >
        About Alfurqan Modern School
      </h2>

      <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
        Founded in 2009, Alfurqan Modern School is committed to delivering 
        high-quality education that nurtures the mind, character, and creativity. 
        Serving three campuses—Lafoole, Ceelasha, and Daarusalaam—we offer a 
        wide range of programs from Grade 1 to 12, including specialized tracks 
        in Computer Science, Health Sciences, and the Sciences. Our mission is 
        to empower students with knowledge, critical thinking skills, and strong ethical values 
        to become tomorrow’s leaders and innovators.
      </p>

      {/* Features grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto text-left">
        <Feature
          icon={<FaChalkboardTeacher className="text-green-600 w-10 h-10" />}
          title="Experienced Educators"
          description="Our qualified teachers provide personalized attention, fostering academic excellence."
        />
        <Feature
          icon={<FaUsers className="text-blue-600 w-10 h-10" />}
          title="Community & Values"
          description="We cultivate a welcoming, respectful environment that builds strong character."
        />
        <Feature
          icon={<FaGlobe className="text-green-700 w-10 h-10" />}
          title="Global Perspective"
          description="We prepare students to thrive in a connected world through diverse programs."
        />
        <Feature
          icon={<FaBook className="text-black w-10 h-10" />}
          title="Comprehensive Curriculum"
          description="Wide range of subjects including computer science, health, and sciences."
        />
        <Feature
          icon={<FaLaptopCode className="text-green-500 w-10 h-10" />}
          title="Tech-Forward Learning"
          description="Modern labs and digital tools prepare students for the future of technology."
        />
        <Feature
          icon={<FaUsers className="text-blue-700 w-10 h-10" />}
          title="Three Campuses"
          description="Conveniently located campuses at Lafoole, Ceelasha, and Daarusalaam."
        />
      </div>
    </section>
  );
}

// Reusable feature component
function Feature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold text-black">{title}</h3>
        <p className="text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
}
