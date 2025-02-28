import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import AboutImageMobile from "../../public/images/aboutme (2).png";
import aboutali from "../../public/images/aboutali.png";

export const AboutSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4 md:px-8 lg:px-16 -mt-20" id="about">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center justify-center text-center mt-6">
            <h1 className="font-cursive text-3xl md:text-5xl">About Me</h1>
            <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
              A glimpse into my world
            </p>
          </div>
        }
      >
        {/* Responsive Images */}
        <div className="w-full flex flex-wrap justify-center gap-4">
          {/* Desktop Image */}
          <div className="hidden md:block w-full max-w-2xl">
            <Image
              src={aboutali}
              alt="About Me"
              height={600}
              width={1200}
              className="rounded-2xl object-cover w-full h-auto"
              draggable={false}
            />
          </div>

          {/* Mobile Image */}
          <div className="md:hidden w-full max-w-sm">
            <Image
              src={AboutImageMobile}
              alt="About Me"
              height={500}
              width={800}
              className="rounded-2xl object-cover w-full h-auto"
              draggable={false}
            />
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
};



// export const AboutSection = () => {
//   return (
//     <div className="flex flex-col items-center justify-center w-full">
//       <h1 className="text-4xl font-semibold text-white font-serif">About me</h1>

//       <p className="text-center mt-4 text-white/60 md:text-lg">
//         Hey there! I'm Ali Yahya, a passionate MERN stack developer with a deep
//         love for Next.js. With experience in building dynamic, scalable web
//         applications, I'm always eager to push the boundaries of modern web
//         development. My skill set spans from crafting intuitive user interfaces
//         with React and TypeScript, to building efficient backends with Node.js,
//         Express, MongoDB, and PostgreSQL.
//       </p>

//       <p className="text-center mt-4 text-white/60 md:text-lg">
//         Next.js has been a game-changer for me, allowing me to blend client-side
//         and server-side development effortlessly, creating fast, SEO-friendly
//         applications. I'm also actively solving coding challenges on LeetCode to
//         sharpen my problem-solving skills. Currently, I'm expanding my knowledge
//         by learning Python and exploring advanced backend technologies.
//       </p>

//       <p className="text-center mt-4 text-white/60 md:text-lg">
//         With a background in <b>Software Engineering</b>, I have a strong
//         foundation in system design, database management, and scalable
//         architecture. Whether I'm optimizing a website for performance, solving
//         complex algorithms, or diving into new technologies, I'm constantly
//         driven by my passion for software development and innovation.
//       </p>
//     </div>
//   );
// };
