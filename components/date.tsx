import { parseISO, format } from 'date-fns'
import pt from 'date-fns/locale/pt-BR'

export default function Data( {dataString} : {dataString: string}){
  const data = parseISO(dataString)

  return(
    <time dateTime={dataString}>
      {format(data, "dd 'de' LLLL 'de' yyyy", {locale: pt})}
    </time>
  )

}