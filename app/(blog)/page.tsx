import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import StarsSVG from "@/public/img/STARS-ESTRELINHA.svg";
import { Book, BookMarked, Mail, Pen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LatestPosts from "./latest-posts";
import CTAButton from "./cta-button";

function Especialidades() {
  const data = [
    {
      title: "Crescimento Infantil",
      description:
        "Investigo causas de baixa estatura, crescimento acelerado ou desacelerações, com base em exames clínicos, laboratoriais e radiológicos, sempre respeitando a individualidade de cada criança.",
    },
    {
      title: "Puberdade",
      description:
        "Avalio casos de puberdade precoce ou tardia, ajudando famílias a entenderem o que é esperado. Investigo alterações hormonais e, quando necessário, realizamos intervenções medicamentosas com segurança.",
    },
    {
      title: "Obesidade Infantil",
      description:
        "O acompanhamento do peso na infância é essencial para prevenir complicações futuras. Trabalho com uma abordagem individualizada e respeitosa, considerando alimentação, atividade física, emoções e saúde.",
    },
    {
      title: "Diabetes Infantil e Juvenil",
      description:
        "Ofereço orientação completa no controle do diabetes tipo 1 e tipo 2, com foco em educação, uso da tecnologia e qualidade de vida da criança e da família.",
    },
    {
      title: "Tireoide na Infância",
      description:
        "Acompanho alterações como hipotireoidismo congênito, tireoidite autoimune, hipertireoidismo e nódulos. A avaliação é clínica e com suporte de exames hormonais e de imagem.",
    },
    {
      title: "Síndromes Genéticas",
      description:
        "Condições genéticas muitas vezes afetam o crescimento, puberdade e metabolismo. Faço o acompanhamento multidisciplinar dessas crianças com foco no bem-estar global.",
    },
    {
      title: "Distúrbios da Diferenciação Sexual (DDS)",
      description:
        "Ofereço um acompanhamento sensível, baseado em evidências e parceria com a família, respeitando o tempo da criança e promovendo o melhor cuidado possível.",
    },
  ];
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full container lg:max-w-lg xl:max-w-3xl mx-auto"
    >
      {data.map((item, ind) => (
        <AccordionItem
          value={"item-" + ind}
          key={ind}
          className="bg-medium-green p-2 mt-1.5 rounded-md"
        >
          <AccordionTrigger className="text-white py-1 px-2 sm:text-lg [&>svg]:stroke-white">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="!p-0.5">
            <p className="p-2 rounded-md bg-background text-dark-green text-sm sm:text-base">
              {item.description}
            </p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

function Testimonials() {
  const data = [
    {
      message:
        "A Dra. Sarah foi um presente para nossa família. Desde a primeira consulta, sentimos que estávamos em boas mãos. Ela explica tudo com calma e clareza, e a nossa filha se sente super segura com ela.",
      from: "Mariana L., mãe da Alice (8 anos)",
    },
    {
      message:
        "O cuidado da Dra. Sarah vai muito além da consulta. Ela realmente escuta, investiga e propõe caminhos que fazem sentido pra nossa rotina. Ver a evolução do meu filho com esse acompanhamento foi transformador.",
      from: "Juliano T., pai do Rafael (11 anos)",
    },
  ];

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full px-5 flex gap-5 md:gap-10"
    >
      <CarouselPrevious className="[&>svg]:stroke-rose [&>svg]:scale-[3] relative" />
      <CarouselContent className="-ml-5 py-10">
        {data.map((item, ind) => (
          <CarouselItem
            key={ind}
            className="basis-full sm:basis-1/2 xl:basis-1/3 pl-5"
          >
            <div className="p-6 h-full gap-2 bg-white rounded-2xl flex flex-col text-orange shadow-lg shadow-rose/10">
              <StarsSVG className="w-1/3 " />
              <p>&quot;{item.message}&quot;</p>
              <span className="font-medium">— {item.from}</span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className="[&>svg]:stroke-rose [&>svg]:scale-[3] relative" />
    </Carousel>
  );
}

export default async function Page() {
  return (
    <div className="">
      <section className="px-5 bg-background pl-[10%] md:pl-[15%] lg:pl-[20%] mx-auto w-full aspect-video max-h-[50vh] flex flex-col justify-center relative">
        {/* <Image
          src="/img/HERO-BANNER.webp"
          alt="kids playing with soap bubble"
          fill
          className="object-cover object-[60%]"
        /> */}
        <div className="w-[20%] h-full right-10 lg:right-0 bottom-0 absolute scale-x-[-1]">
          <Image
            src="/img/DENTELEAO-HERO.webp"
            alt="flower"
            fill
            className="object-contain object-bottom"
          />
        </div>
        <p className="text-dark-green z-[1] font-bold leading-none max-w-[80%] sm:max-w-[65%] text-[clamp(1.25rem,0.55rem+2vw,3rem)]">
          Cuidando do crescimento e desenvolvimento das crianças com carinho e
          ciência.
        </p>
        <CTAButton className="w-fit px-5 z-[1] mt-4 sm:mt-8 md:mt-10 py-2 rounded-3xl font-bold text-[clamp(1rem,0.45rem+1vw,2rem)] uppercase bg-rose text-white hover:bg-rose/80 transition duration-300">
          Agendar consulta
        </CTAButton>
      </section>
      <section
        id="sobre"
        className="w-full scroll-mt-28 min-h-[50vh] flex bg-white"
      >
        <div className="container h-full p-5 py-[8vh] m-auto flex flex-col sm:flex-row justify-left items-center gap-10 lg:gap-20 relative">
          <div className="w-5/6 max-w-md aspect-[6/8] rounded-[2.5rem] overflow-hidden">
            <div className="relative w-full h-full">
              <Image
                src="/img/FOTO-SARAH.webp"
                alt="Foto Dra. Sarah"
                fill
                className="object-cover"
              />
              {/** TODO: load from Sanity (create singleton) */}
            </div>
          </div>
          <div className="text-dark-green font-light sm:text-xl lg:text-2xl w-5/6 md:max-w-lg xl:max-w-3xl flex flex-col">
            <header className="mb-4 text-rose">
              <h3 className="uppercase font-bold lg:text-3xl">
                Sou a Dra. Sarah Conchon
              </h3>
              <p className="text-base">CRM 36824 | RQE 19614</p>
            </header>
            <p>
              Médica pediatra formada pela UEL com residência em Endocrinologia
              Pediátrica pela USP-RP.
            </p>
            <p className="my-4">
              Meu propósito é oferecer um cuidado afetuoso, técnico e
              transformador para cada criança e sua família.
            </p>
            <div className="text-base flex gap-1">
              <span>Mais informações: </span>
              <Link
                href="http://lattes.cnpq.br/5989133149728771"
                className="text-rose flex items-center gap-1 hover:underline"
                target="_blank"
              >
                Currículo Lattes <Book size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section
        id="especialidades"
        className="w-full scroll-mt-28 bg-dark-green px-5 py-[8vh]"
      >
        <div className="container  flex flex-col lg:flex-row items-center mx-auto">
          <h2 className="w-fit mx-auto mb-[4vh] max-w-lg uppercase text-center text-[clamp(1.25rem,0.35rem+1.25vw,2rem)] font-bold text-white">
            As Principais especialidades do meu consultório
          </h2>
          <Especialidades />
        </div>
      </section>
      <section className="w-full bg-orange py-[8vh] px-5">
        <p className="font-bold container mx-auto text-center text-white text-[clamp(1.125rem,0.55rem+1vw,3rem)]">
          Cada consulta é um momento de escuta, acolhimento e planejamento com
          base científica. Aqui, a criança está no centro do cuidado — com
          leveza e responsabilidade.
        </p>
      </section>
      <section className="bg-white flex flex-col py-[4vh]">
        <div className="container sm:w-fit mx-auto px-5 py-[4vh] gap-4 sm:gap-8 xl:gap-10 grid grid-rows-4 sm:grid-rows-2 sm:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 h-[70vh] sm:h-[50vh]">
          <div className="relative flex mx-auto px-12  w-full rounded-3xl overflow-hidden">
            <Image
              src="/img/CONSULTA-ATENDIMENTO-HUMANIZADO.webp"
              alt="atendimento humanizado"
              fill
              className="object-cover"
            />
            <h3 className="z-10 m-auto text-white text-[clamp(1.25rem,0.35rem+1.25vw,2rem)] font-medium text-center">
              Atendimento humanizado
            </h3>
          </div>
          <div className="relative flex mx-auto px-12  w-full rounded-3xl overflow-hidden">
            <Image
              src="/img/CONSULTA-FORMACAO-SOLIDA.webp"
              alt="formação sólida"
              fill
              className="object-cover"
            />
            <h3 className="z-10 m-auto text-white text-[clamp(1.25rem,0.35rem+1.25vw,2rem)] font-medium text-center">
              Formação sólida
            </h3>
          </div>
          <div className="relative flex mx-auto px-12  w-full rounded-3xl overflow-hidden">
            <Image
              src="/img/CONSULTA-ABORDAGEM-VIVA.webp"
              alt="abordagem viva"
              fill
              className="object-cover"
            />
            <h3 className="z-10 m-auto text-white text-[clamp(1.25rem,0.35rem+1.25vw,2rem)] font-medium text-center">
              Abordagem viva
            </h3>
          </div>
          <div className="relative flex mx-auto px-12  w-full rounded-3xl overflow-hidden">
            <Image
              src="/img/CONSULTA-COMUNICACAO-EFICIENTE.webp"
              alt="Foto Dra. Sarah"
              fill
              className="object-cover"
            />
            <h3 className="z-10 m-auto text-white text-[clamp(1.25rem,0.35rem+1.25vw,2rem)] font-medium text-center">
              Comunicação eficiente
            </h3>
          </div>
        </div>
        <Link
          href="/consultas"
          className="uppercase hover:underline font-bold text-orange text-center text-[clamp(1.125rem,0.35rem+1.25vw,2rem)]"
        >
          Ver detalhes sobre a consulta {">"} {/**TODO: trocar esse icone */}
        </Link>
      </section>
      <section className="container mx-auto min-h-[50vh] flex flex-col justify-center items-center py-[4vh]">
        <Testimonials />
        <CTAButton className="w-fit px-5 py-2 rounded-3xl font-bold text-[clamp(1rem,0.45rem+1vw,2rem)] uppercase bg-dark-green text-white hover:bg-dark-green/80 transition duration-300">
          Agendar consulta
        </CTAButton>
      </section>
      <section className="px-5 bg-rose text-white py-[4vh] flex flex-col items-center gap-4">
        <h3 className="max-w-xl font-bold text-center text-[clamp(1.25rem,0.35rem+1.25vw,2rem)]">
          Quer entender mais sobre o crescimento e a saúde hormonal infantil?
        </h3>
        <p className="max-w-xl text-center">
          Acesse o meu blog e econtre conteúdos confiáveis, escritos com carinho
          e base científica.
        </p>
        <Link
          href="/blog"
          className="w-fit px-8 py-3 rounded-xl font-bold text-[clamp(1rem,0.45rem+1vw,2rem)] uppercase border border-white bg-rose text-white hover:bg-white hover:text-rose transition duration-300"
        >
          Ver blog completo {">"}
        </Link>
        <div className="container">
          {/* <RecentPosts /> */}
          <LatestPosts limit={3} />
        </div>
      </section>
      <section className="bg-orange text-white">
        <form className="container px-5 mx-auto flex flex-wrap md:flex-nowrap items-center justify-between py-[4vh] gap-4">
          <p className="basis-full md:basis-1/3 text-[clamp(1.25rem,0.35rem+1vw,1.75rem)]">
            Assine a newsletter e fique por dentro de novos conteúdos!
          </p>
          <div className="flex gap-4 basis-full md:basis-2/3 justify-end">
            <div className="border w-full max-w-xl border-white rounded-xl flex pl-12 p-3 pr-6 relative">
              {/* <span >mail</span> */}
              <Mail className="absolute left-3" />
              <input
                type="email"
                placeholder="Digite seu e-mail"
                className="text-white w-full placeholder:text-white focus:outline-none bg-orange border-none font-medium"
              ></input>
            </div>
            <button className="uppercase font-semibold text-[clamp(1.25rem,0.35rem+1vw,1.75rem)]">
              Enviar
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
