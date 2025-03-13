import { Box } from '@mui/material';
import { useScroll } from "../ScrollContext";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
const MHome = () => {

  const { homeRef, servicosRef, portfolioRef, contactRef, scrollToSection } = useScroll()

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const trackConversion = () => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: '10948887166/CdFfCOn794kYEP6E6-Qo',
      });
    } else {
      console.warn('gtag not found!');
    }
  };
  return (
    <>
      <Box ref={homeRef} className="flex justify-center items-center h-[91.5vh] w-[100vw]">
        <svg className='absolute w-[100vw] h-[110vh] scale-110 opacity-80 z-[-1]' version="1.0" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 318.000000 737.000000" preserveAspectRatio="xMidYMid meet">


          <g transform="translate(0.000000,737.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
            <path d="M643 7306 c-84 -30 -169 -62 -190 -73 -21 -11 -52 -27 -69 -36 -47
-26 -118 -106 -147 -169 -72 -152 -47 -350 68 -534 103 -165 419 -428 764
-636 304 -183 453 -287 515 -359 19 -23 47 -72 62 -109 23 -60 25 -72 15 -123
-13 -72 -40 -123 -88 -168 -46 -44 -132 -100 -205 -132 -51 -24 -218 -86 -242
-92 -6 -1 -18 -5 -26 -8 -8 -4 -91 -33 -185 -66 -296 -104 -389 -148 -452
-213 -109 -112 -144 -322 -78 -461 61 -130 192 -212 681 -426 159 -70 304
-159 351 -215 131 -159 128 -347 -6 -469 -60 -54 -163 -103 -376 -175 -49 -17
-144 -52 -210 -77 -66 -26 -147 -57 -180 -69 -309 -117 -446 -189 -554 -294
-80 -78 -103 -148 -81 -242 14 -60 58 -111 143 -164 87 -56 135 -73 290 -105
78 -17 176 -39 217 -51 41 -11 127 -31 190 -45 360 -80 593 -164 750 -270 128
-87 232 -212 270 -325 52 -153 4 -294 -128 -378 -110 -71 -358 -121 -777 -157
-87 -8 -357 -34 -407 -40 -57 -7 -98 -28 -155 -81 -77 -73 -88 -100 -87 -219
0 -104 17 -188 54 -270 l20 -45 573 0 572 0 18 73 c32 132 78 209 207 340 180
186 316 293 640 505 231 152 311 211 393 291 88 84 119 144 125 236 6 98 -20
156 -104 233 -99 92 -226 146 -559 242 -297 85 -502 163 -570 215 -38 28 -98
140 -115 214 -32 138 13 288 113 376 54 47 300 190 540 314 222 114 352 213
397 301 72 141 64 287 -21 384 -69 78 -166 124 -382 182 -268 70 -811 250
-901 297 -160 84 -221 198 -185 343 10 39 24 56 88 111 42 36 92 73 111 83 99
51 337 110 528 131 227 25 696 123 877 184 74 25 238 111 305 161 34 25 76 68
97 100 34 51 38 65 42 131 5 111 -36 242 -110 354 -87 129 -197 191 -425 237
-168 35 -258 42 -518 43 -377 0 -498 10 -571 43 -33 15 -81 48 -107 73 -105
103 -131 244 -74 410 77 228 267 387 581 486 142 45 225 59 725 122 107 14
209 28 225 31 38 8 109 44 154 78 l35 26 -1150 -1 -1149 0 -152 -53z" className="fill-[#fabf33]"></path>
          </g>
        </svg>

        <Box className="absolute top-4 left-0">
          {/* Botón para abrir/cerrar el menú */}
          <button
            href="#"
            onClick={toggleMenu}
            aria-label="Ir al menu"
            className="ml-4 mb-4 text-white rounded focus:outline-none"
          >
            {isMenuOpen ? <CloseIcon className="MuiButtonBase-root MuiIconButton-root"
              tabIndex="0"
              type="button"
              aria-labelledby="close-button-label" aria-label="Cerrar menu" sx={{ fontSize: 40 }} /> : <MenuIcon className="MuiButtonBase-root MuiIconButton-root" tabIndex="0" type="button" aria-labelledby="open-button-label" aria-label="Abrir menu" sx={{ fontSize: 40 }} />}
          </button>


          {/* Menú desplegable */}
          {isMenuOpen && (
            <Box className="flex flex-col justify-center items-center text-center w-[95vw] bg-black text-[#ffbb00] font-semibold text-2xl z-10">

              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault(); // Evita el comportamiento predeterminado de navegación
                  scrollToSection(homeRef); // Función para desplazarte a la sección
                  toggleMenu(); // Función para cerrar el menú
                }}
                aria-label="Ir a la sección de inicio nav"
              >
                <p className="block w-[100vw] text-center p-3">Home</p>
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(contactRef);
                  toggleMenu();
                }}
                aria-label="Ir a la sección Sobre nós nav"
              >
                <p className="block w-[100vw] text-center p-3">Sobre nós</p>
              </a>
              <a
                href="#servicos"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(servicosRef);
                  toggleMenu();
                }}
                aria-label="Ir a la sección Serviços nav"
              >
                <p className="block w-[100vw] text-center p-3">Serviços</p>
              </a>
              <a
                href="#portfolio"

                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(portfolioRef);
                  toggleMenu();
                }}
                aria-label="Ir a la sección Portfólio nav"
              >
                <p className="block w-[100vw] text-center p-3">Portfólio</p>
              </a>
            </Box>
          )}
        </Box>

        <Box className="flex flex-row text-white h-[51vh] gap-24">
          <Box className="flex flex-col gap-24">
            <img className='w-20' src="assets/Logo.webp" alt="logo" />
            <Box>
              <h2 className='text-3xl'>
                <strong>Design</strong>  para <br />
                empresas que <br />
                <b> fazem a diferença!</b>
              </h2>
              <Box className="mb-2 bg-gradient-to-r from-[#090310] from-10% via-[#6d2f95] via-50% to-[#fbba07] to-90% w-[12rem] h-[0.65vh] mt-2"></Box>
              <h1><strong className='text-[#a700ff] text-xl'>Branding, Web & Print.</strong></h1>
            </Box>
            <Box className="flex flex-col gap-4">
              <a id="whatsapp-button"
                rel="noopener noreferrer"
                onClick={trackConversion}
                className="flex flex-row items-center justify-center font-bold bg-gradient-to-r from-[#7bf309] from-10% via-[#3f9306] via-50% to-[#083b03] to-90% text-white rounded-lg py-2 px-14"
                aria-label="Ir a WhatsApp desde home"
                target="_blank"
                href="https://wa.me/351913916397">
                <svg className="fill-white mr-2 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>Whatsapp

              </a>


            </Box>
          </Box>


        </Box>

      </Box>
    </>
  );
};

export default MHome;
