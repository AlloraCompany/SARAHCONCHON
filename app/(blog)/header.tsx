import Link from "next/link";
import Logo from "@/public/img/LOGO.svg";
import CTAButton from "./cta-button";
import HeaderMenu from "./header-menu";

export default function Header() {
  return (
    <header className="w-full h-20 sm:h-24 flex sticky top-0  bg-white shadow-md shadow-dark-green/10 text-black text-sm sm:text-base z-[99999]">
      <div className="size-full container px-5 flex items-center justify-end mx-auto">
        <Link href="/" className="mr-auto w-full max-w-80">
          <Logo className="mr-auto w-full max-w-80 rounded h-fit px-5" />
        </Link>

        <nav className="hidden text-[clamp(0.7rem,0.55rem+0.75vw,1.2rem)] lg:flex gap-[2vw] px-[2vw] [&_a:hover]:underline text-dark-green font-semibold">
          <Link href="/#sobre">Sobre</Link>
          <Link href="/#especialidades">Especialidades</Link>
          <Link href="/consultas">Consultas</Link>
          <Link href="/blog">Blog</Link>
        </nav>
        <CTAButton className="bg-dark-green text-[clamp(0.7rem,0.55rem+0.75vw,1.2rem)] text-white font-semibold px-4 py-2 rounded-2xl ml-3 hover:bg-dark-green/80 transition">
          Agendar
          <span className="hidden md:inline"> consulta</span>
        </CTAButton>
        <HeaderMenu />
      </div>
    </header>
  );
}
