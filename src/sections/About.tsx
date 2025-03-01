import AboutImageMobile from "../../public/images/aboutme (2).png";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export const AboutSection = () => {
  return (
    <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 -mt-32" id="about">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center justify-center md:gap-3 -mb-28 md:-mb-0 text-center">
            <h1 className="font-cursive text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-6">
              About Me
            </h1>
            <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-sm sm:text-base md:text-lg">
              A glimpse into my world
            </p>
          </div>
        }
      >
        <div className="relative w-full max-w-5xl mx-auto">
          {/* Desktop Image */}
          <Image
            src={AboutImageMobile}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover w-full h-auto hidden md:block"
            draggable={false}
          />
          {/* Mobile Image */}
          <Image
            src={AboutImageMobile}
            alt="hero"
            height={720}
            width={1600}
            className="mx-auto rounded-2xl object-cover w-full h-auto md:hidden"
            draggable={false}
          />
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
