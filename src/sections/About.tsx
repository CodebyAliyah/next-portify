import aiStartupLandingPage from "../../public/images/ai-startup-landing-page.png";
import aboutali from "../../public/images/aboutali.png"
import AboutImageMobile from "../../public/images/aboutme (2).png";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export const AboutSection = () => {
  return (
    <div className=" flex items-start justify-center -mt-32" id="about">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center  justify-center md:gap-3 -mb-28 md:-mb-0">
            <h1 className="font-cursive text-3xl md:text-5xl text-center mt-6">
              About Me
            </h1>
            <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
              A glimpse into my world
            </p>
          </div>
        }
      >
        <Image
          src={aboutali}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top hidden md:block"
          draggable={false}
        />
        <Image
          src={AboutImageMobile}
          alt="hero"
          height={720}
          width={1600}
          className="mx-auto rounded-2xl object-cover w-full h-[75vh] sm:h-[85vh] md:hidden"
          draggable={false}
        />
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
