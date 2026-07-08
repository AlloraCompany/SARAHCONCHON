import Link from "next/link";
import Image from "next/image";
import LatestPosts from "../latest-posts";
import { Mail } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Faq from "./faq";
import CTAButton from "../cta-button";

export default function Consultas() {
  return (
    <div>
      <section className="px-5 bg-background pl-[10%] md:pl-[15%] py-[4vh] mx-auto w-full aspect-video max-h-[50vh] flex flex-col justify-center relative">
        <Image
          src="/img/HERO-BANNER-2.png"
          alt="kids playing with soap bubble"
          fill
          className="object-cover object-[60%]"
        />
        <h2 className="text-rose z-[1] font-bold leading-none max-w-[80%] sm:max-w-[65%] text-[clamp(1.25rem,0.55rem+2vw,3rem)]">
          Como funciona a consulta?
        </h2>
        <p className="text-dark-green z-[1] mt-4 leading-none max-w-[80%] sm:max-w-[65%] sm:text-xl lg:text-2xl w-5/6 md:max-w-lg xl:max-w-3xl">
          Cada consulta é uma oportunidade de escutar com atenção, acolher com
          empatia e atuar com precisão técnica. Aqui, cada criança é cuidada de
          forma individualizada, considerando não apenas os sintomas, mas todo o
          seu contexto de vida.
        </p>
        <CTAButton className="w-fit px-5 z-[1] mt-4 sm:mt-8 md:mt-10 py-2 rounded-3xl font-bold text-[clamp(1rem,0.45rem+1vw,2rem)] uppercase bg-rose text-white hover:bg-rose/80 transition duration-300">
          Agendar consulta
        </CTAButton>
      </section>
      <section className="w-full bg-medium-green py-[4vh] text-white">
        <Tabs
          defaultValue="presencial"
          className="container justify-center mx-auto px-5"
        >
          <TabsList className="w-full text-sm sm:text-md sm:text-xl gap-1 sm:gap-4 mb-4">
            <TabsTrigger
              value="presencial"
              className="border rounded-xl py-2 px-3 sm:py-3 sm:px-5 hover:brightness-90 data-[state=active]:!bg-background data-[state=active]:!text-medium-green"
            >
              Consulta Presencial
            </TabsTrigger>
            <TabsTrigger
              value="online"
              className="border rounded-xl py-2 px-3 sm:py-3 sm:px-5 hover:brightness-90 data-[state=active]:!bg-background data-[state=active]:!text-medium-green"
            >
              Consulta Online
            </TabsTrigger>
            <TabsTrigger
              value="visita"
              className="border rounded-xl py-2 px-3 sm:py-3 sm:px-5 hover:brightness-90 data-[state=active]:!bg-background data-[state=active]:!text-medium-green"
            >
              Visita Hospitalar
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="presencial"
            className="text-md leading-tight sm:text-xl"
          >
            <p>
              A consulta presencial é um momento de cuidado completo. Avalio a
              criança ou adolescente de forma integral – unindo escuta sensível,
              olhar clínico e conhecimento técnico especializado. Conversamos
              sobre o motivo da consulta, histórico de saúde, alimentação, sono,
              crescimento, rotina, aspectos emocionais e sociais.
              <br />
              <br />
              Realizo também um exame físico detalhado, que pode incluir:
              medição de peso e altura, avaliação da puberdade, pressão
              arterial, desenvolvimento físico e distribuição corporal.
              <br />
              <br />
              Sempre explico os achados com clareza, respeitando o tempo e as
              dúvidas da família. Se necessário, indico exames complementares
              (hormonais, radiológicos ou genéticos) para uma investigação mais
              aprofundada.A consulta é realizada com tempo adequado, sem pressa,
              para garantir que todas as dúvidas sejam esclarecidas e que a
              criança se sinta segura.
              <br />
              <br />O que levar:
            </p>
            <ul className="list-disc list-inside relative">
              <li>
                Documentos da criança (RG, CPF, cartão do plano, se houver)
              </li>
              <li>Caderneta de vacinação </li>
              <li>Exames laboratoriais ou de imagem já realizados</li>
              <li>Lista de medicações em uso, se houver </li>
              <li>Informações importantes do histórico familiar</li>
            </ul>
          </TabsContent>
          <TabsContent
            value="online"
            className="text-md leading-tight sm:text-xl"
          >
            <p>
              A consulta online é uma opção prática e segura, com o mesmo
              cuidado e atenção da consulta presencial. É especialmente indicada
              para acompanhamentos, revisão de exames ou orientação inicial —
              ideal para famílias que moram fora de Goiânia ou têm rotina
              intensa.
              <br />
              <br />
              Também pode ser o primeiro contato, esclarecendo dúvidas antes de
              um atendimento presencial. Durante a consulta, é possível avaliar
              o histórico da criança, sintomas atuais, crescimento e rotina.
              <br />
              <br />O atendimento ocorre por uma plataforma simples, estável e
              protegida. As instruções são enviadas previamente e a equipe está
              à disposição para ajudar com o acesso, garantindo uma experiência
              tranquila do início ao fim.
              <br />
              <br />
              Importante para a consulta online:
            </p>
            <ul className="list-disc list-inside relative">
              <li>Peso e altura atualizados da criança</li>
              <li>Exames recentes (se houver)</li>
              <li>Boa conexão de internet</li>
              <li>Ambiente calmo e privativo para a conversa</li>
              <li>Presença de um responsável legal durante toda a consulta</li>
            </ul>
            <p>
              <br />
              Se durante o atendimento for necessária uma avaliação presencial,
              explico os motivos com clareza e oriento os melhores caminhos para
              garantir cuidado contínuo e seguro.
            </p>
          </TabsContent>
          <TabsContent
            value="visita"
            className="text-md leading-tight sm:text-xl"
          >
            <p>
              Em situações de internação hospitalar, é fundamental contar com um
              olhar endocrinológico especializado para auxiliar na condução
              clínica de forma segura e eficiente. Por isso, realizo visitas
              diretamente no hospital, oferecendo avaliação e orientação focadas
              em condutas ágeis e individualizadas.
              <br />
              <br />
              Esse tipo de atendimento contribui para um diagnóstico mais
              preciso, evita atrasos na definição do tratamento e fortalece o
              acompanhamento multidisciplinar, especialmente em casos mais
              complexos ou agudos. A presença do endocrinologista pediátrico
              pode impactar diretamente na evolução clínica e no bem-estar da
              criança internada.
              <br />
              <br />
              Disponível mediante agendamento prévio, esse serviço é oferecido
              em hospitais parceiros de Goiânia e região, conforme
              disponibilidade de agenda.
              <br />
              <br />
            </p>
            <ul className="list-disc list-inside relative">
              <li>Alterações hormonais de início súbito</li>
              <li>Investigação de puberdade precoce em contexto hospitalar</li>
              <li>Distúrbios de crescimento com agravamento</li>
              <li>Crises adrenais</li>
              <li>Ajuste e controle glicêmico em pacientes com diabetes</li>
            </ul>
          </TabsContent>
        </Tabs>
        <p className="container mx-auto px-10 mt-4">
          Em relação a convênios e planos de saúde, recomendamos que os
          responsáveis consultem previamente suas operadoras para verificar a
          cobertura do atendimento, exigências de reembolso e documentos
          necessários. Nossa equipe está à disposição para orientar nesse
          processo, sempre que necessário.
        </p>
      </section>
      <section className="bg-white">
        <div className="container p-5 py-[8vh] m-auto flex flex-col md:flex-row justify-center items-center gap-10 lg:gap-20 relative">
          <div className="w-5/6 max-w-md aspect-video rounded-[2.5rem] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.4654884547044!2d-49.26494582405622!3d-16.703610184071593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef1b03478d22d%3A0x7ee98a69d0927c97!2sEspa%C3%A7o%20Zune!5e0!3m2!1spt-BR!2sbr!4v1748828401699!5m2!1spt-BR!2sbr"
              className="size-full"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="text-dark-green font-light sm:text-xl lg:text-2xl w-5/6 md:max-w-lg xl:max-w-3xl">
            <header className="mb-4 text-rose">
              <h3 className="uppercase font-bold lg:text-3xl">
                CONSULTA PRESENCIAL EM GOIÂNIA
              </h3>
              <p className="text-base">
                ESPAÇO ZUNE
                <br />R 1129, nº695, QD 229, LT 23, St Marista Goiânia
              </p>
            </header>
            <p>
              O espaço foi pensado para acolher com conforto e tranquilidade
              crianças, adolescentes e suas famílias.
              <br />
              <br />A clínica conta com estrutura moderna, ambiente acolhedor,
              com uma recepção adaptada para atendimentos infantis.
            </p>
          </div>
        </div>
      </section>
      <section className="container mx-auto py-[8vh] px-5">
        <div className="flex gap-10 lg:gap-20 items-center justify-center">
          <div className="w-5/6 max-w-sm lg:max-w-md relative aspect-video">
            <Image
              src="/img/CALENDAR-AGENDAMENTO.webp"
              alt=""
              fill
              className="object-contain object-right"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="uppercase font-bold lg:text-3xl text-orange">
              Pronto para agendar?
            </h3>
            <p className="text-dark-green sm:text-xl lg:text-2xl w-5/6 md:max-w-lg xl:max-w-3xl">
              Reserve um momento para cuidar da saúde e bem-estar do seu filho.
            </p>
            <CTAButton className="w-fit px-5 z-[1] py-2 rounded-3xl font-bold text-[clamp(1rem,0.45rem+1vw,2rem)] uppercase bg-dark-green text-white hover:bg-dark-green/80 transition duration-300">
              Agendar consulta
            </CTAButton>
          </div>
        </div>
        <div className="text-orange mt-[8vh]">
          <h3 className="uppercase font-bold lg:text-3xl mb-4">
            Principais dúvidas
          </h3>
          <Faq />
        </div>
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
