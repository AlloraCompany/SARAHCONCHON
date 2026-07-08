import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

export default function Faq() {
  const data = [
    {
      title: "Preciso de encaminhamento para agendar uma consulta?",
      description:
        "Não. Você pode agendar diretamente, sem necessidade de encaminhamento médico.",
    },
    {
      title: "Qual modalidade é ideal para o meu caso?",
      description:
        "A Dra. Sarah oferece três opções de atendimento: presencial, online e hospitalar. Cada modalidade tem indicações específicas, e nossa equipe pode orientar na escolha mais adequada de acordo com a necessidade da criança e a realidade da família.",
    },
    {
      title: "Quanto tempo dura a consulta?",
      description:
        "Cada consulta é realizada com tempo adequado — normalmente entre 40 e 60 minutos — para garantir atenção, conforto e clareza nas explicações.",
    },
    {
      title: "A partir de que idade a Dra. Sarah atende?",
      description:
        "Atendemos desde recém-nascidos até adolescentes e adultos jovens com histórico de acompanhamento endocrinológico pediátrico.",
    },
  ];

  return (
    <Accordion type="single" collapsible className="w-full container mx-auto">
      {data.map((item, ind) => (
        <AccordionItem
          value={"item-" + ind}
          key={ind}
          className="bg-transparent p-2 mt-1.5 rounded-md border-orange border-b-2"
        >
          <AccordionTrigger className="text-orange py-4  sm:text-lg lg:text-2xl [&>svg]:stroke-orange [&>svg]:scale-[1.5] sm:[&>svg]:scale-[2] lg:[&>svg]:scale-[3]">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="">
            <p className="py-2 rounded-md bg-background text-dark-green text-sm sm:text-base lg:text-xl">
              {item.description}
            </p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
