import { useEffect, useState } from "react";
import "./Home.css";
import {
  Button,
  Separator,
  Stack,
  Carousel,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight, LuArrowUp } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";

export function Home() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="mainContainer">
      <header className="header">
        <div className="header-left">
          <Button
            onClick={() =>
              document
                .getElementById("quienSomos")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Quienes somos
          </Button>
          <Button
            onClick={() =>
              document
                .getElementById("servicios")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Servicios
          </Button>
        </div>
        <img src="https://res.cloudinary.com/dvqn0avdc/image/upload/v1789854603/Logo_Mecarci_2019_1_sf9mv3.png" alt="Logo"></img>
        <div className="header-right">
          <Button
            onClick={() =>
              document
                .getElementById("galeria")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Galería
          </Button>
          <Button
            onClick={() =>
              document
                .getElementById("contacto")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Contacto
          </Button>
        </div>
      </header>
      <div className="mainContent">
        <div className="firstMainContent">
          <h1>Bienvenido a MECARCI S.A.S.</h1>
          <p>Reparación y fabricación de piezas industriales</p>
          <p>
            Somos un aliado de la industria en general. Con experiencia,
            maquinaria especializada y servicio de mandrinado para piezas de
            gran tamaño o forma irregular, fabricamos y reparamos piezas con
            precisión y cumplimiento.
          </p>
        </div>

        <div className="carrousel">
          <div className="group">
            <div className="card">
              <img
                src="https://res.cloudinary.com/dvqn0avdc/image/upload/v1789844129/1789573909690_jihutr.jpg"
                alt="Imagen 1"
              ></img>
            </div>
            <div className="card">
              <img
                src="https://res.cloudinary.com/dvqn0avdc/image/upload/v1789844273/1788915874178_1_abvay2.jpg"
                alt="Imagen 2"
              ></img>
            </div>
            <div className="card">
              <img
                src="https://res.cloudinary.com/dvqn0avdc/image/upload/v1789844355/1789069409867_jkfbiu.jpg"
                alt="Imagen 3"
              ></img>
            </div>
            <div className="card">
              <img
                src="https://res.cloudinary.com/dvqn0avdc/image/upload/v1789844513/IMG-20220302-WA0023_dhjufb.jpg"
                alt="Imagen 4"
              ></img>
            </div>
            <div className="card">
              <img
                src="https://res.cloudinary.com/dvqn0avdc/image/upload/v1789844601/IMG-20240712-WA0051_plrub6.jpg"
                alt="Imagen 5"
              ></img>
            </div>
            <div className="card">
              <img
                src="https://res.cloudinary.com/dvqn0avdc/image/upload/v1789844654/IMG-20241125-WA0023_ydie1g.jpg"
                alt="Imagen 6"
              ></img>
            </div>
            <div className="card">
              <img
                src="https://res.cloudinary.com/dvqn0avdc/image/upload/v1789844735/IMG_20210220_170543_otc7uy.jpg"
                alt="Imagen 7"
              ></img>
            </div>
            <div className="card">
              <img
                src="https://res.cloudinary.com/dvqn0avdc/image/upload/v1789844855/IMG_20240316_120250_y5rfrt.jpg"
                alt="Imagen 8"
              ></img>
            </div>
          </div>
          <div aria-hidden className="group">
            <div className="card">
              <img
                src="https://res.cloudinary.com/dvqn0avdc/image/upload/v1789844129/1789573909690_jihutr.jpg"
                alt="Imagen 1"
              ></img>
            </div>
            <div className="card">
              <img
                src="https://res.cloudinary.com/dvqn0avdc/image/upload/v1789844273/1788915874178_1_abvay2.jpg"
                alt="Imagen 2"
              ></img>
            </div>
            <div className="card">
              <img
                src="https://res.cloudinary.com/dvqn0avdc/image/upload/v1789844355/1789069409867_jkfbiu.jpg"
                alt="Imagen 3"
              ></img>
            </div>
            <div className="card">
              <img
                src="https://res.cloudinary.com/dvqn0avdc/image/upload/v1789844513/IMG-20220302-WA0023_dhjufb.jpg"
                alt="Imagen 4"
              ></img>
            </div>
            <div className="card">
              <img
                src="https://res.cloudinary.com/dvqn0avdc/image/upload/v1789844601/IMG-20240712-WA0051_plrub6.jpg"
                alt="Imagen 5"
              ></img>
            </div>
            <div className="card">
              <img
                src="https://res.cloudinary.com/dvqn0avdc/image/upload/v1789844654/IMG-20241125-WA0023_ydie1g.jpg"
                alt="Imagen 6"
              ></img>
            </div>
            <div className="card">
              <img
                src="https://res.cloudinary.com/dvqn0avdc/image/upload/v1789844735/IMG_20210220_170543_otc7uy.jpg"
                alt="Imagen 7"
              ></img>
            </div>
            <div className="card">
              <img
                src="https://res.cloudinary.com/dvqn0avdc/image/upload/v1789844855/IMG_20240316_120250_y5rfrt.jpg"
                alt="Imagen 8"
              ></img>
            </div>
          </div>
        </div>
        <div className="aditionalContent">
          <h1>Años de experiencia forjando soluciones a gran escala</h1>
          <p>
            Mecanizado, reparación y fabricación de piezas industriales con la
            precisión que tu proyecto necesita.
          </p>

          <div className="aditionalContentHr"></div>
        </div>
        <div id="quienSomos" className="quienSomosTitle">
          <h1>Quienes somos?</h1>
          <Stack gap="4">
            <Separator size="lg" />
          </Stack>
          <div className="quienSomosContent">
            <div className="quienSomosText">
              <p>
                MECARCI S.A.S. <br></br> <br></br>Mecanizados Arciniegas Somos
                un aliado de la industria en general. Aportamos experiencia,
                capacidad técnica y equipos en máquinas herramientas para
                resolver las necesidades de mecanizado, reparación y fabricación
                de piezas de nuestros clientes. <br></br> <br></br>Nuestra
                especialidad es el servicio de maquinado en mandrinadora, ideal
                para piezas que no pueden trabajarse en torno o fresadora por su
                gran tamaño o su forma irregular. Donde otros talleres
                encuentran limitaciones, nosotros ofrecemos una solución precisa
                y confiable. <br></br> <br></br> Trabajamos a partir de muestra,
                plano o diseño, y contamos con tornos, fresadoras, mandrinadora,
                taladro radial, prensa y equipos con visualizadores, además de
                soldadura revestida y automática MIG y MAG. Esto nos permite
                atender cada proyecto de principio a fin, desde la reparación de
                una pieza desgastada hasta la fabricación de una nueva.{" "}
                <br></br> <br></br> En MECARCI creemos que cada pieza es
                importante para el funcionamiento de su operación. Por eso
                trabajamos con precisión, responsabilidad y compromiso,
                cumpliendo con las medidas, especificaciones y tiempos
                acordados.
              </p>
            </div>
            <div className="quienSomosImage">
              <img src="/IMG1.jpg" alt="Imagen 1"></img>
            </div>
          </div>
        </div>
        <h1 className="serviciosTitle">Servicios</h1>
        <div className="servicios" id="servicios">
          <div className="columnaServicios">
            <img src="https://res.cloudinary.com/dvqn0avdc/image/upload/v1789844979/Servicios1_uor8sk.jpg"></img>
            <div className="serviciosText">
              <h1>Reparación y fabricación de piezas</h1>
              <p>
                {" "}
                Ofrecemos servicios de reparación y fabricación de piezas para
                la industria en general. Trabajamos a partir de muestra, plano o
                diseño, para que recibas una pieza que cumpla con las medidas y
                especificaciones que necesitas.
              </p>
            </div>
          </div>
          <div className="columnaServicios">
            <div className="serviciosText">
              <h1>Maquinado y soldadura</h1>
              <p>
                {" "}
                Contamos con tornos, fresadoras, taladro radial, prensa y
                equipos con visualizadores para lograr trabajos precisos.
                También realizamos soldadura revestida y soldadura automática
                MIG y MAG, para complementar cada proyecto de principio a fin.
              </p>
            </div>
            <img src="https://res.cloudinary.com/dvqn0avdc/image/upload/v1789845753/IMG_20260215_102937_ekmudj.jpg"></img>
          </div>
          <div className="columnaServicios">
            <img src="https://res.cloudinary.com/dvqn0avdc/image/upload/v1789845698/servicios2_q5tm3i.jpg"></img>
            <div className="serviciosText">
              <h1>Mandrinado</h1>
              <p>
                {" "}
                Somos especialistas en maquinado en mandrinadora. Es la solución
                ideal para piezas de gran tamaño o de forma irregular que no se
                pueden trabajar en torno o fresadora, con la exactitud que
                exigen los procesos industriales.
              </p>
            </div>
          </div>
        </div>
        <div className="carrouselGaleria" id="galeria">
          <h1 className="galeriaTitle">Galería</h1>
          <Carousel.Root slideCount={items.length} maxW="1600px" gap="4">
            <Carousel.Control justifyContent="center" gap="4" width="full">
              <Carousel.PrevTrigger asChild>
                <IconButton size="xs" variant="outline">
                  <LuChevronLeft />
                </IconButton>
              </Carousel.PrevTrigger>

              <Carousel.ItemGroup width="full">
                {items.map((item, index) => (
                  <Carousel.Item key={index} index={index}>
                    <Image
                      aspectRatio="20/9"
                      src={item.url}
                      alt={item.label}
                      w="100%"
                      h={{ base: "250px", md: "900px" }}
                      objectFit="contain"
                    />
                  </Carousel.Item>
                ))}
              </Carousel.ItemGroup>

              <Carousel.NextTrigger asChild>
                <IconButton size="xs" variant="outline">
                  <LuChevronRight />
                </IconButton>
              </Carousel.NextTrigger>
            </Carousel.Control>

            <Carousel.IndicatorGroup>
              {items.map((item, index) => (
                <Carousel.Indicator
                  key={index}
                  index={index}
                  unstyled
                  _current={{
                    outline: "2px solid currentColor",
                    outlineOffset: "2px",
                  }}
                >
                  <Image
                    w="20"
                    aspectRatio="16/9"
                    src={item.url}
                    alt={item.label}
                    objectFit="cover"
                  />
                </Carousel.Indicator>
              ))}
            </Carousel.IndicatorGroup>
          </Carousel.Root>
        </div>
        <div></div>
        <Stack gap="4">
          <Separator size="lg" />
        </Stack>
        <div className="contacto" id="contacto">
          <h1 className="contactoTitle">Contacto</h1>
          <div className="contactoContent">
            <div className="contactoInfo">
              <p>
                <strong>Ciudad:</strong> Bogotá, Colombia
              </p>
              <p>
                <strong>Dirección:</strong> CALLE 23H 104B-57, Bodega # 1
                Fontibon
              </p>
              <p>
                <strong>Teléfono:</strong> +57 313 265 3700
              </p>
              <p>
                <strong>Correo:</strong> mecarcisa@gmail.com
              </p>
              <a
                className="whatsappLink"
                href="https://wa.me/573132653700"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
                Escríbenos por WhatsApp
              </a>
            </div>
            <div className="contactoMapa">
              <iframe
                title="Mapa de ubicación"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.4879639850183!2d-74.14182448376214!3d4.684928230732903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9c96e5976855%3A0x6d53036eca5040c5!2sCl.%2023h%20Bis%20%23104b-57%2C%20Bogot%C3%A1!5e0!3m2!1ses-419!2sco!4v1789850419990!5m2!1ses-419!2sco"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
      {showTopBtn && (
        <IconButton
          aria-label="Ir al inicio"
          position="fixed"
          bottom="1.5em"
          right="1.5em"
          size="lg"
          rounded="full"
          bg="#007bff"
          color="#fff"
          boxShadow="lg"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <LuArrowUp />
        </IconButton>
      )}
    </div>
  );
}

const items = [
  {
    label: "Galeria1",
    url: "https://res.cloudinary.com/dvqn0avdc/image/upload/v1789848120/galeria1_ksmp7e.jpg",
  },
  {
    label: "Galeria2",
    url: "https://res.cloudinary.com/dvqn0avdc/image/upload/v1789848190/IMG_20260711_124349_auepbe.jpg",
  },
  {
    label: "Galeria3",
    url: "https://res.cloudinary.com/dvqn0avdc/image/upload/v1789848231/IMG_20260216_160348_ejtw4w.jpg",
  },
  {
    label: "Galeria4",
    url: "https://res.cloudinary.com/dvqn0avdc/image/upload/v1789848351/galeria4_sors16.jpg",
  },
  {
    label: "Galeria5",
    url: "https://res.cloudinary.com/dvqn0avdc/image/upload/v1789848401/galeria5_o8uyux.jpg",
  },
  {
    label: "Galeria6",
    url: "https://res.cloudinary.com/dvqn0avdc/image/upload/v1789848453/IMG_20240314_083656_xzdelq.jpg",
  },
  {
    label: "Galeria7",
    url: "https://res.cloudinary.com/dvqn0avdc/image/upload/v1789848792/IMG_20231220_100206_nmjpyl.jpg",
  },
  {
    label: "Galeria8",
    url: "https://res.cloudinary.com/dvqn0avdc/image/upload/v1789848995/IMG_20251107_075127_vihv6v.jpg",
  },
  {
    label: "Galeria9",
    url: "https://res.cloudinary.com/dvqn0avdc/image/upload/v1789848885/galeria8_fnodhb.jpg",
  },
  {
    label: "Galeria10",
    url: "https://res.cloudinary.com/dvqn0avdc/image/upload/v1789848933/IMG_20260210_114646_zhy04j.jpg",
  },
  {
    label: "Galeria11",
    url: "https://res.cloudinary.com/dvqn0avdc/image/upload/v1789852857/IMG_20260711_125615_opckd1.jpg",
  },
  {
    label: "Galeria12",
    url: "https://res.cloudinary.com/dvqn0avdc/image/upload/v1789853780/IMG_20250502_100931_oftksb.jpg",
  },
  {
    label: "Galeria13",
    url: "https://res.cloudinary.com/dvqn0avdc/image/upload/v1789853822/IMG_20240318_170646_jdxnlj.jpg",
  },
  {
    label: "Galeria14",
    url: "https://res.cloudinary.com/dvqn0avdc/image/upload/v1789853882/IMG_20231214_122041_hebmav.jpg",
  },
  {
    label: "Galeria15",
    url: "https://res.cloudinary.com/dvqn0avdc/image/upload/v1789853965/IMG_20230322_091649_tixchd.jpg",
  },
  {
    label: "Galeria16",
    url: "https://res.cloudinary.com/dvqn0avdc/image/upload/v1789854021/IMG_20220408_175022_ysezsl.jpg",
  },
  {
    label: "Galeria17",
    url: "https://res.cloudinary.com/dvqn0avdc/image/upload/v1789854060/IMG_20220311_194702_jexrrt.jpg",
  },
   {
    label: "Galeria18",
    url: "https://res.cloudinary.com/dvqn0avdc/image/upload/v1789854178/IMG_20201120_175557_tl7hyf.jpg",
  },
  {
    label: "Galeria19",
    url: "https://res.cloudinary.com/dvqn0avdc/image/upload/v1789854212/IMG-20250721-WA0014_1_rary4p.jpg",
  },
  {
    label: "Galeria20",
    url: "https://res.cloudinary.com/dvqn0avdc/image/upload/v1789854261/IMG-20250721-WA0012_os0pum.jpg",
  },
  {
    label: "Galeria21",
    url: "https://res.cloudinary.com/dvqn0avdc/image/upload/v1789854331/1789574076569_nsaxuv.jpg",
  },
  {
    label: "Galeria22",
    url: "https://res.cloudinary.com/dvqn0avdc/image/upload/v1789854400/1789069524638_alrfaj.jpg",
  },
];
