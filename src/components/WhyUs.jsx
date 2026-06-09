import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const slides = [
  {
    image: '/clinica-dental-solymar-interior.jpg',
    alt: 'Interior de Clínica Dental Solymar Cabrera en Santa Cruz de Tenerife',
    badge: 'Clínica dental en Santa Cruz de Tenerife con atención cercana',
  },
  {
    image: '/clinica-dental-solymar-equipo.jpg',
    alt: 'Clínica Dental Solymar Cabrera en Tenerife',
    badge: '20 años de experiencia cuidando sonrisas',
  },
]

const values = [
  {
    title: '20 años de experiencia',
    text: 'Nuestra trayectoria nos permite ofrecer tratamientos dentales seguros, personalizados y adaptados a cada paciente.',
  },
  {
    title: '5 estrellas en Google',
    text: 'La confianza de nuestros pacientes es nuestra mejor carta de presentación.',
  },
  {
    title: '200 m² de instalaciones',
    text: 'Un espacio amplio, cómodo y preparado para ofrecer una experiencia dental agradable.',
  },
  {
    title: 'Especialidades odontológicas',
    text: 'Implantología, ortodoncia, estética dental, periodoncia, endodoncia, prótesis y odontología general.',
  },
]

const WhyUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden bg-[#FBF8F2] py-20">
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#C8923B]/10 blur-3xl"></div>
      <div className="absolute -right-24 bottom-24 h-72 w-72 rounded-full bg-[#C8923B]/10 blur-3xl"></div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 lg:grid-cols-2">
        <div className="relative">
          <span className="absolute -left-10 top-0 hidden rotate-180 text-xs font-bold uppercase tracking-[0.4em] text-[#C8923B] lg:block [writing-mode:vertical-rl]">
            Solymar Cabrera
          </span>

          <div className="max-w-xl">
            <span className="inline-flex rounded-full bg-[#C8923B] px-5 py-2 text-sm font-bold text-white shadow-lg">
              Nuestro valor
            </span>

            <h2 className="mt-5 text-4xl font-extrabold leading-tight text-[#A87325] sm:text-5xl">
              ¿Por qué elegir nuestra clínica dental?
            </h2>

            <p className="mt-6 text-lg leading-9 text-neutral-700">
              Somos tu dentista de confianza en Santa Cruz de Tenerife. Ven a
              conocernos y lo comprobarás: cuidamos tu salud bucodental con
              atención cercana, tratamientos personalizados y un equipo enfocado
              en mejorar la salud y estética de tu sonrisa.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {values.map((item, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-[#C8923B]/15 bg-white p-5 shadow-[0_14px_35px_rgba(200,146,59,0.10)]"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#FBF8F2] text-lg font-extrabold text-[#C8923B] ring-1 ring-[#C8923B]/20">
                    {index + 1}
                  </div>

                  <h3 className="text-xl font-extrabold text-[#A87325]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-base leading-7 text-neutral-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="/#contacto"
                  className="inline-flex justify-center rounded-full bg-[#C8923B] px-8 py-4 text-base font-bold text-white shadow-lg transition hover:bg-[#A87325]"
                >
                  Contactar
                </a>

                <a
                  href="tel:922441744"
                  className="inline-flex justify-center rounded-full border-2 border-[#C8923B] px-8 py-4 text-base font-bold text-[#C8923B] transition hover:bg-[#C8923B] hover:text-white"
                >
                  Llamar ahora
                </a>
              </div>

              <Link
                to="/equipo"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-[#A87325] shadow-[0_12px_30px_rgba(200,146,59,0.15)] transition hover:-translate-y-0.5 hover:bg-[#FBF8F2]"
              >
                Conoce a nuestro equipo →
              </Link>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-5 -top-5 h-28 w-28 rounded-[2rem] bg-[#C8923B]/20"></div>
          <div className="absolute -bottom-5 -left-5 h-28 w-28 rounded-[2rem] bg-[#C8923B]"></div>

          <div className="relative overflow-hidden rounded-[2.2rem] border border-white/60 bg-white p-3 shadow-[0_25px_70px_rgba(200,146,59,0.22)]">
            <div className="relative h-[500px] w-full overflow-hidden rounded-[1.8rem]">
              {slides.map((slide, index) => (
                <img
                  key={index}
                  src={slide.image}
                  alt={slide.alt}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
                    currentSlide === index
                      ? 'scale-100 opacity-100'
                      : 'scale-105 opacity-0'
                  }`}
                />
              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent"></div>

              <div className="absolute left-6 top-6 z-10 max-w-sm rounded-2xl bg-white/95 px-5 py-4 shadow-lg backdrop-blur-sm">
                <p className="text-base font-bold leading-7 text-[#A87325]">
                  {slides[currentSlide].badge}
                </p>
              </div>

              <div className="absolute bottom-6 left-6 z-10 rounded-2xl bg-[#C8923B] px-5 py-4 text-white shadow-xl">
                <p className="text-3xl font-extrabold">20+</p>
                <p className="text-sm font-bold uppercase tracking-wide">
                  años de experiencia
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentSlide(index)}
                className={`h-3 w-3 rounded-full transition ${
                  currentSlide === index ? 'bg-[#C8923B]' : 'bg-black/20'
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs