import type {Metadata} from 'next';
import { Lora, Inter, JetBrains_Mono } from 'next/font/google';
import Link from 'next/link';
import './globals.css'; // Global styles

const lora = Lora({ subsets: ['latin'], variable: '--font-serif', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });

export const metadata: Metadata = {
  title: 'Matriz Tissunómica V44.2',
  description: 'Sistema de Soporte a la Decisión Clínica para predecir la respuesta al Trastuzumab Deruxtecan (T-DXd)',
};

const NAV_LINKS = [
  { id: '01', name: 'Inicio', href: '/' },
  { id: '02', name: 'El Algoritmo', href: '/algorithm' },
  { id: '03', name: 'Validación Clínica', href: '/validation' },
  { id: '04', name: 'Demo del Sistema', href: '/demo' },
  { id: '05', name: 'Impacto Clínico', href: '/impact' },
  { id: '06', name: 'Sobre el Proyecto', href: '/about' },
];

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es" className={`${lora.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased min-h-screen bg-[#F4F1ED] p-0 sm:p-4 lg:p-6">
        <div className="flex flex-col min-h-screen sm:min-h-[calc(100vh-2rem)] lg:min-h-[calc(100vh-3rem)] border-0 sm:border-4 md:border-8 border-[#1A1A1A] bg-[#F4F1ED] shadow-2xl relative">
          
          <div className="px-4 sm:px-6 lg:px-8 pt-5 md:pt-6 pb-2">
            <header className="border-b-2 border-[#1A1A1A] pb-4 flex flex-col md:flex-row justify-between items-baseline">
              <div className="flex flex-col">
                <Link href="/" className="font-serif italic font-bold tracking-tight text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase text-[#1A1A1A]">
                  Matriz Tissunómica <span className="text-[#D44D26] not-italic">V44.2</span>
                </Link>
                <p className="text-[10px] sm:text-xs md:text-sm font-mono text-[#D44D26] mt-1 md:mt-2">Clinical Decision Support System / Anatomo-Patología / Oncología / HER2-Low</p>
              </div>
              <div className="mt-4 md:mt-0 text-left md:text-right hidden sm:block">
                <p className="text-xs sm:text-sm uppercase font-bold tracking-widest text-[#1A1A1A]">Mahdi Tajary</p>
                <p className="text-[10px] sm:text-xs text-[#8A847C] font-mono">UAB Medicine · 6th Year</p>
              </div>
            </header>
          </div>

          <div className="sticky top-0 bg-[#F4F1ED] z-20 pt-2 sm:pt-4 shadow-sm sm:shadow-none">
            <nav className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 sm:gap-x-4 gap-y-3 sm:gap-y-2 md:gap-y-4 md:gap-x-8 lg:gap-x-10 text-[10px] sm:text-[11px] md:text-xs font-bold tracking-wider uppercase border-b-2 border-[#1A1A1A] pb-3 md:pb-4 px-2 sm:px-6 lg:px-8 w-full">
              {NAV_LINKS.map(link => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className="text-[#1A1A1A] hover:text-[#D44D26] transition-colors whitespace-nowrap group py-1.5 sm:py-1 md:py-0"
                >
                  <span className="text-[#8A847C] group-hover:text-[#D44D26] opacity-50 mr-1 sm:mr-1.5">{link.id}.</span>{link.name}
                </Link>
              ))}
            </nav>
          </div>

          <main className="flex-grow flex flex-col gap-6 md:gap-8 p-4 sm:p-6 lg:p-8 pt-4 sm:pt-6">
            <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 w-full max-w-screen-2xl mx-auto pb-12">
              {children}
            </div>
          </main>

          <footer className="mt-auto mx-4 md:mx-8 py-4 flex justify-between items-end border-t-2 border-[#1A1A1A] font-mono text-[10px] uppercase tracking-tighter text-[#8A847C]">
          </footer>
        </div>
      </body>
    </html>
  );
}
