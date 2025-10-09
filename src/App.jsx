import { useRef, useState, useEffect, useContext } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import ScrambledText from "./components/ScrambledText/ScrambledText";
import SplitText from "./components/SplitText/SplitText";
import Lanyard from "./components/Lanyard/Lanyard";
import GlassIcons from "./components/GlassIcons/GlassIcons";
import { listTools, listProyek } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal"; // <-- IMPORT MODAL
import Aurora from "./components/Aurora/Aurora";
import { ThemeContext } from "./context/ThemeContext.jsx";
import { Briefcase, Building2, GraduationCap } from "lucide-react";
import AOS from 'aos';
import ChatRoom from "./components/ChatRoom";
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  const { theme } = useContext(ThemeContext);
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null); // null = modal tertutup

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };
  // -------------------------
  const quoteAvatar = theme === 'light' ? './assets/nando1-light.png' : './assets/nando1.png';
  const profileAvatar = theme === 'light' ? './assets/nando-light.png' : './assets/nando.png';

  useEffect(() => {
    const isReload =
      performance.getEntriesByType("navigation")[0]?.type === "reload";

    if (isReload) {
      // Ambil path tanpa hash
      const baseUrl = window.location.origin + "/portofolio/";
      window.location.replace(baseUrl);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

    useEffect(() => {
    // pastikan ini hanya jalan di client (untuk Next.js/SSR)
    if (typeof window === "undefined") return;
    // kalau theme === 'dark' -> add class 'dark' ke <html>, kalau tidak -> remove
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full -z-10 ">
        <Aurora
          colorStops={["#577870", "#1F97A6", "#127B99"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24"> {/* Add padding top for fixed navbar */}

        <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-10 grid-cols-1">
          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            <div className="flex items-center gap-3 mb-6 w-fit p-4 rounded-2xl border dark:border-none border-gray-200 shadow-sm">
              <img src={quoteAvatar} className="w-10 rounded-md" alt="Quote avatar"/>
              <q>Avoid or just undertake it</q>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <ShinyText text="Hi I'm Fernando Putra Islamy" disabled={false} speed={3} className='custom-class' />
            </h1>
            <BlurText
              text="A passionate application and web developer dedicated to crafting modern, high-performance digital experiences through innovative and user-friendly solutions."
              delay={150}
              animateBy="words"
              direction="top"
              className="blur-text mb-6"
            />
            <div className="flex items-center sm:gap-4 gap-2">
              <a 
                href="./assets/CV.pdf" 
                download="Faris_Edrik_Prayoga_CV.pdf" 
                className="custom-button font-semibold  p-4 px-6 rounded-full border transition-colors shadow-sm"
              >
                <ShinyText text="Download CV" disabled={false} speed={3} className="custom-class" />
              </a>

              <a href="#project" className="custom-button font-semibold p-4 px-6 rounded-full border transition-colors shadow-sm">
                <ShinyText text="Explore My Projects" disabled={false} speed={3} className="custom-class" />
              </a>
            </div>

          </div>
          <div className="md:ml-auto animate__animated animate__fadeInUp animate__delay-4s">
            <ProfileCard
              name="Fernando Putra"
              title="Web Developer"
              handle="thisnando_"
              status="Online"
              contactText="Contact Me"
              avatarUrl={profileAvatar}
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log('Contact clicked')}
            />
          </div>
        </div>
        
        <div id="about" ref={aboutRef}>
          <div 
            className="flex flex-col md:flex-row items-center justify-between gap-10 pt-0 px-8" 
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-once="true"
          >
            <div className="basis-full md:basis-7/12 pr-0 md:pr-8 border-b md:border-b-0 md:border-r pb-8 md:pb-0">
              <div className="flex-1 text-left">
                <h2 className="accent-text text-3xl md:text-4xl font-bold mb-5">About Me</h2>

                <BlurText
                  text="I’m Faris Edrik Prayoga, a full-stack developer passionate about building modern, high-performance applications..."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="blur-text text-base md:text-lg leading-relaxed mb-10"
                />

                <div className="flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-y-8 sm:gap-y-0 mb-4 w-full">
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">20<span className="accent-text">+</span></h1>
                    <p>Project Finished</p>
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">3<span className="accent-text">+</span></h1>
                    <p>Years of Experience</p>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-once="true">
                    <h1 className="text-3xl md:text-4xl mb-1">3.81<span className="accent-text">/4.00</span></h1>
                    <p>GPA</p>
                  </div>
                </div>

                <ShinyText
                  text="Working with heart, creating with mind."
                  disabled={false}
                  speed={3}
                  className="text-sm md:text-base"
                />
              </div>
            </div>

            <div className="basis-full md:basis-5/12 pl-0 md:pl-8 overflow-hidden max-w-full flex justify-center">
              <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
            </div>
          </div>
        </div>
        
        <div className="tools mt-32">
          <h1 className="accent-text text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" >Tools & Technologies</h1>
          <p className="w-full md:w-2/5 text-base/loose text-gray-500 dark:opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">My Profesional Skills</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

            {listTools.map((tool) => (
              <div
                key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true"
                className="custom-button flex items-center gap-4 p-4 border rounded-xl backdrop-blur-md  transition-all duration-300 group shadow-lg"
              >
                <img
                  src={tool.gambar}
                  alt={tool.nama}
                  className="w-16 h-16 object-contain p-2 rounded-lg  transition-all duration-300"
                />
                <div className="flex flex-col overflow-hidden">
                  <div className="truncate">
                    <ShinyText
                      text={tool.nama}
                      disabled={false}
                      speed={3}
                      className="text-lg font-semibold block"
                    />
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 truncate">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="experience-section mt-32" id="experience">
          <div 
            className="experience-container"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <span className="accent-text text-sm font-semibold uppercase tracking-wider mb-4 block text-center">
              Experience
            </span>
            <h2 className="text-4xl font-bold text-center mb-6">
              Exploring My Growth <br className="hidden sm:block" /> as a Designer
            </h2>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
              Every role and project has shaped my skills and passion for design.
            </p>

            {/* === Timeline Section Start === */}
            <div className="space-y-20">

              {/* Education Experience */}
              <div className="py-10">
                <div className="flex items-center gap-4 mb-12">
                  <h2 className="accent-text text-3xl lg:text-4xl font-bold text-foreground">
                    Exploring My Growth as a Designer
                  </h2>
                </div>

                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border lg:left-1/2" />

                  <div className="space-y-12">
                    {[
                      {
                        period: "2022–2025",
                        title: "Senior UI/UX Designer",
                        company: "Odama Studio",
                        description:
                          "Led a team of designers, developed design systems, and enhanced user experience across multiple products.",
                      },
                      {
                        period: "2021–2022",
                        title: "Product Designer",
                        company: "Vektora Studio",
                        description:
                          "Created design solutions for digital and visual projects, ensuring clarity, consistency, and prototyping ideas.",
                      },
                      {
                        period: "2020–2021",
                        title: "Graphic Designer",
                        company: "Keitoto Studio",
                        description:
                          "Worked on branding, marketing materials, and creative visual identity for clients.",
                      },
                      {
                        period: "2019–2021",
                        title: "Web Developer",
                        company: "Potara Studio",
                        description:
                          "Developed responsive websites, optimized front-end performance, and collaborated with designers.",
                      },
                    ].map((item, index) => {
                      const isEven = index % 2 === 0;
                      return (
                        <div
                          key={index}
                          className={`relative flex items-center ${
                            isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                          } animate-fade-in-up`}
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <div className="absolute left-4 w-4 h-4 rounded-full bg-primary ring-4 ring-background lg:left-1/2 lg:-translate-x-1/2 z-10" />

                          <div className={`flex-1 ${isEven ? "lg:pr-12 lg:text-right" : "lg:pl-12"}`}>
                            <div className={`ml-12 lg:ml-0 ${!isEven ? "lg:ml-12" : ""}`}>
                              <div className="experience-container rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-border">
                                <span className="text-sm font-semibold text-primary">{item.period}</span>
                                <h3 className="accent-text text-xl font-bold text-foreground mt-2">{item.title}</h3>
                                <p className="text-muted-foreground font-medium mt-1">{item.company}</p>
                                <p className="text-muted-foreground mt-3 leading-relaxed">{item.description}</p>
                              </div>
                            </div>
                          </div>
                          <div className="hidden lg:block flex-1" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Work Experience */}
              <div className="py-10">
                <div className="flex items-center gap-4 mb-12">
                  <h2 className="accent-text text-3xl lg:text-4xl font-bold text-foreground">
                    Exploring My Growth as a Designer
                  </h2>
                </div>


                  <div className="space-y-0">
                    {[
                      {
                        year: "2022-2025",
                        title: "Senior UI/UX Designer",
                        company: "Odama Studio",
                        description: null,
                      },
                      {
                        year: "2021-2022",
                        title: "Product Designer",
                        company: "Vektora Studio",
                        description:
                          "I created and refined design solutions for digital and visual projects, ensuring clarity and consistency while working with teams. I also developed prototypes to test ideas and improve the overall experience.",
                      },
                      {
                        year: "2020-2021",
                        title: "Graphic Designer",
                        company: "Keitoto Studio",
                        description: null,
                      },
                      {
                        year: "2019-2021",
                        title: "Web Developer",
                        company: "Potara Studio",
                        description: null,
                      },
                    ].map((exp, index) => (
                    <div
                      key={index}
                      className="experience-item"
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay={index * 200}
                      data-aos-once="true"
                    >
                      <div className="grid lg:grid-cols-12 gap-6 items-start">
                        <div className="lg:col-span-2">
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            {exp.year}
                          </span>
                        </div>

                        <div className="lg:col-span-5">
                          <h3 className="accent-text text-2xl font-bold mb-2">{exp.title}</h3>
                          {exp.description && (
                            <p className="text-sm leading-relaxed">{exp.description}</p>
                          )}
                        </div>

                        <div className="lg:col-span-5 text-left lg:text-right">
                          <h4 className="accent-text text-2xl font-bold">{exp.company}</h4>
                        </div>
                      </div>
                    </div>

                    ))}
                  </div>
                  
              </div>

              {/* Organization Experience */}
              <div className="py-10">
                <div className="flex items-center gap-4 mb-12">
                  <h2 className="accent-text text-3xl lg:text-4xl font-bold text-foreground">
                    Exploring My Growth as a Designer
                  </h2>
                </div>

                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border lg:left-1/2" />

                  <div className="space-y-12">
                    {[
                      {
                        period: "2022–2025",
                        title: "Senior UI/UX Designer",
                        company: "Odama Studio",
                        description:
                          "Led a team of designers, developed design systems, and enhanced user experience across multiple products.",
                      },
                      {
                        period: "2021–2022",
                        title: "Product Designer",
                        company: "Vektora Studio",
                        description:
                          "Created design solutions for digital and visual projects, ensuring clarity, consistency, and prototyping ideas.",
                      },
                      {
                        period: "2020–2021",
                        title: "Graphic Designer",
                        company: "Keitoto Studio",
                        description:
                          "Worked on branding, marketing materials, and creative visual identity for clients.",
                      },
                      {
                        period: "2019–2021",
                        title: "Web Developer",
                        company: "Potara Studio",
                        description:
                          "Developed responsive websites, optimized front-end performance, and collaborated with designers.",
                      },
                    ].map((item, index) => {
                      const isEven = index % 2 === 0;
                      return (
                        <div
                          key={index}
                          className={`relative flex items-center ${
                            isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                          } animate-fade-in-up`}
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <div className="absolute left-4 w-4 h-4 rounded-full bg-primary ring-4 ring-background lg:left-1/2 lg:-translate-x-1/2 z-10" />

                          <div className={`flex-1 ${isEven ? "lg:pr-12 lg:text-right" : "lg:pl-12"}`}>
                            <div className={`ml-12 lg:ml-0 ${!isEven ? "lg:ml-12" : ""}`}>
                              <div className="experience-container rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-border">
                                <span className="text-sm font-semibold text-primary">{item.period}</span>
                                <h3 className="accent-text text-xl font-bold text-foreground mt-2">{item.title}</h3>
                                <p className="text-muted-foreground font-medium mt-1">{item.company}</p>
                                <p className="text-muted-foreground mt-3 leading-relaxed">{item.description}</p>
                              </div>
                            </div>
                          </div>
                          <div className="hidden lg:block flex-1" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Kepanitiaan Experience */}
              <div className="py-10">
                <div className="flex items-center gap-4 mb-12">
                  <h2 className="accent-text text-3xl lg:text-4xl font-bold text-foreground">
                    Exploring My Growth as a Designer
                  </h2>
                </div>


                  <div className="space-y-0">
                    {[
                      {
                        year: "2022-2025",
                        title: "Senior UI/UX Designer",
                        company: "Odama Studio",
                        description: null,
                      },
                      {
                        year: "2021-2022",
                        title: "Product Designer",
                        company: "Vektora Studio",
                        description:
                          "I created and refined design solutions for digital and visual projects, ensuring clarity and consistency while working with teams. I also developed prototypes to test ideas and improve the overall experience.",
                      },
                      {
                        year: "2020-2021",
                        title: "Graphic Designer",
                        company: "Keitoto Studio",
                        description: null,
                      },
                      {
                        year: "2019-2021",
                        title: "Web Developer",
                        company: "Potara Studio",
                        description: null,
                      },
                    ].map((exp, index) => (
                    <div
                      key={index}
                      className="experience-item"
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay={index * 200}
                      data-aos-once="true"
                    >
                      <div className="grid lg:grid-cols-12 gap-6 items-start">
                        <div className="lg:col-span-2">
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            {exp.year}
                          </span>
                        </div>

                        <div className="lg:col-span-5">
                          <h3 className="accent-text text-2xl font-bold mb-2">{exp.title}</h3>
                          {exp.description && (
                            <p className="text-sm leading-relaxed">{exp.description}</p>
                          )}
                        </div>

                        <div className="lg:col-span-5 text-left lg:text-right">
                          <h4 className="accent-text text-2xl font-bold">{exp.company}</h4>
                        </div>
                      </div>
                    </div>

                    ))}
                  </div>
                  
              </div>

            </div>
            {/* === Timeline Section End === */}
          </div>
        </div>


        
        {/* <div className="proyek mt-32 py-10" id="project" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true"></div>
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Project</h1>
        <p className="text-base/loose text-center text-gray-500 dark:opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Showcasing a selection of projects that reflect my skills, creativity, and passion for building meaningful digital experiences.</p>
        <div className="proyek-box mt-14" >
          <div style={{ height: 'auto', position: 'relative' }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true" >
            <ChromaGrid
              items={listProyek}
              onItemClick={handleProjectClick}
              radius={500}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </div> */}

        {/* <div className="kontak mt-32 sm:p-10 p-0" id="contact">
          <h1
            className="text-4xl mb-2 font-bold text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Contact & Chat
          </h1>
          <p
            className="text-base/loose text-center mb-10 text-gray-500 dark:opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Get in touch with me or chat in real-time
          </p>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 bg-white dark:bg-zinc-800 p-6 rounded-md border border-gray-200 dark:border-zinc-700 shadow-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true">
              <ChatRoom />
            </div>

            <div className="flex-1">
              <form
                action="https://formsubmit.co/rissoppa21@gmail.com"
                method="POST"
                className="bg-white dark:bg-zinc-800 p-10 w-full rounded-md border border-gray-200 dark:border-zinc-700 shadow-lg"
                autoComplete="off"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
                data-aos-once="true"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Full Name</label>
                    <input
                      type="text"
                      name="Name"
                      placeholder="Input Name..."
                      className="border border-gray-300 dark:border-zinc-500 p-2 rounded-md bg-transparent focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Email</label>
                    <input
                      type="email"
                      name="Email"
                      placeholder="Input Email..."
                      className="border border-gray-300 dark:border-zinc-500 p-2 rounded-md bg-transparent focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-semibold">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      cols="45"
                      rows="7"
                      placeholder="Message..."
                      className="border border-gray-300 dark:border-zinc-500 p-2 rounded-md bg-transparent focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none"
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="font-semibold bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 p-4 px-6 rounded-full w-full cursor-pointer hover:opacity-90 transition-opacity"
                    >
                      <ShinyText text="Send" disabled={false} speed={3} className="custom-class" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div> */}
      </main>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  )
}

export default App
