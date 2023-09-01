import Image from "next/image"

// HTML/CSS: Fundamentales para la estructura y el diseño de las páginas web.
// JavaScript: Esencial para la interactividad y la programación del lado del cliente.
// Framework Front-End: Ejemplos incluyen React, Angular y Vue.js.
// Backend Development: Conocimiento en lenguajes como Python, Ruby, Java, Node.js, o PHP.
// Base de Datos: Experiencia en SQL (MySQL, PostgreSQL) o NoSQL (MongoDB, Firebase).
// Version Control/Git: Control de versiones y colaboración en equipo.
// Responsive Design: Crear sitios web que funcionen en diferentes dispositivos.
// Frameworks Backend: Como Django, Ruby on Rails, Express.js, Laravel, etc.
// APIs: Creación y consumo de APIs RESTful.
// Seguridad Web: Comprender y mitigar vulnerabilidades como XSS, CSRF, SQL Injection, etc.
// Pruebas y Depuración: Uso de herramientas de pruebas y técnicas de depuración.
// Gestión de Proyectos: Metodologías como Agile o Scrum.
// Herramientas de Desarrollo: IDEs como Visual Studio Code, herramientas de automatización, etc.
// Control de Calidad: Pruebas de rendimiento y optimización.
// Desarrollo Full-Stack: Conocimiento tanto de Front-End como de Back-End.
// Conocimiento en UX/UI: Diseño centrado en el usuario y experiencia de usuario.
// Mantenimiento del Sitio: Actualizaciones regulares y gestión del contenido.
const listSkills = [
  {
    title: "HTML/CSS",
    desc: "Fundamentales para la estructura y el diseño de las páginas web.",
    icon: ""
  },
  {
    title: "JavaScript",
    desc: "Esencial para la interactividad y la programación del lado del cliente.",
    icon: ""
  },
  {
    title: "Framework Front-End",
    desc: "Ejemplos incluyen React, Angular y Vue.js.",
    icon: ""
  },
  {
    title: "Backend Development",
    desc: "Conocimiento en lenguajes como Python, Ruby, Java, Node.js, o PHP.",
    icon: ""
  },
  {
    title: "Base de Datos",
    desc: "Experiencia en SQL (MySQL, PostgreSQL) o NoSQL (MongoDB, Firebase).",
    icon: ""
  },
  {
    title: "Version Control/Git",
    desc: "Control de versiones y colaboración en equipo.",
    icon: ""
  },
  {
    title: "Responsive Design",
    desc: "Crear sitios web que funcionen en diferentes dispositivos.",
    icon: ""
  },
  {
    title: "Frameworks Backend",
    desc: "Como Django, Ruby on Rails, Express.js, Laravel, etc.",
    icon: ""
  },
  {
    title: "APIs",
    desc: "Creación y consumo de APIs RESTful.",
    icon: ""
  },
  {
    title: "Herramientas de Desarrollo",
    desc: "IDEs como Visual Studio Code, herramientas de automatización, etc.",
    icon: ""
  },
  {
    title: "Control de Calidad",
    desc: "Pruebas de rendimiento y optimización.",
    icon: ""
  },
  {
    title: "Conocimiento en UX/UI",
    desc: "Diseño centrado en el usuario y experiencia de usuario.",
    icon: ""
  },
  {
    title: "Mantenimiento del Sitio",
    desc: "Actualizaciones regulares y gestión del contenido.",
    icon: ""
  }
]

export const HomeSkills = () => (
  <>
    <section className="relative  pt-[240px] z-20">
      <div className="container mx-auto max-w-7xl px-[24px]">
        <div className="mb-[64px]">
          <div className="mb-[24px] text-[20px] leading-[1.1em] text-white font-bold tracking-wider uppercase">
            <span className="text-[#075fe4] mr-1">/</span>
            Mis habilidades
          </div>
          <h2 className="text-white text-[52px] leading-[1.231em] font-bold mt-0 mb-[16px]">
            Mi extensa lista de habilidades
          </h2>
        </div>

      </div>
    </section>
    <div className="w-ful pb-[240px]">
      <div className="m-auto overflow-hidden relative w-auto">
        <div className="flex w-[calc(250px*14)] animate-scroll">
          {
            listSkills.map((v, idx) => {
              return <>
                <div key={idx} className="min-w-[460px]  mr-8 relative inline-block align-top text-left whitespace-normal" >
                  <div className="pt-[124px] max-h-[500px] pr-[52px] pb-[100px] pl-[52px] rounded-3xl bg-[#2d343f]">
                    <Image
                      src="https://assets.website-files.com/622fbc5a718ac3417fcd3d75/62312042ef9809f0543e43a2_javascript-round-icon-developer-webflow-ecommerce-template.svg"
                      loading="lazy"
                      alt="Javascript - Developer X Webflow Template"
                      className="mb-[24px] inline-block max-w-full align-middle"
                      width={76}
                      height={76}
                    />
                    <h3 className="mb-[12px] text-white text-[38px] mt-0 leading-[1.211em] font-bold" aria-hidden="true">
                      {v.title}
                    </h3>
                    <p className="text-[24px] leading-[1.583em] mb-[40px] mt-0">
                      {v.desc}
                    </p>
                    <div className="w-full max-w-[56px] min-h-[6px] bg-white" aria-hidden="true"></div>
                  </div>
                </div>
              </>
            })
          }
        </div>
      </div>
    </div>
  </>

)