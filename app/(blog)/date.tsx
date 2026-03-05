import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function DateComponent({ dateString }: { dateString: string }) {
  return (
    <time className="text-nowrap" dateTime={dateString}>
      {format(new Date(dateString), "LLLL	d, yyyy", { locale: ptBR })}
    </time>
  );
}
