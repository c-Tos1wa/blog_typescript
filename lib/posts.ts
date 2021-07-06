import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

//c:/blue/blog/posts
const postsFolder = path.join(process.cwd(),'posts');

export function getPostsByDate(){

  const fileName = fs.readdirSync(postsFolder);

  //cria-se um vetor de objetos
  const postsData = fileName.map( eachFile => {
    const id = eachFile.replace(/\.md$/, '')

    const filePath = path.join(postsFolder, eachFile)
    const fileRead = fs.readFileSync(filePath, 'utf8');

    const matterResult = matter(fileRead);

    return{
      id,
      ...(matterResult.data as {date: string; title: string})
    }
  })

  //ordena os posts pela data: o mais novo vem primeiro
  return postsData.sort( (objeto1, objeto2) => {
    if (objeto1.date < objeto2.date){
      return 1
    } else{
      return -1
    }
  })
}

//mesmas variáveis com escopo diferente
export function getIds(){
  const fileName = fs.readdirSync(postsFolder)
  return fileName.map(eachFile => {
    return{
      params: {
        id: eachFile.replace(/\.md$/, '')
      }
    }
  })
}

//pegando o conteúdo dos posts passando como argumento o id
export async function getPostsText(id: string){
  const filePath = path.join(postsFolder, `${id}.md`)
  const fileRead = fs.readFileSync(filePath, 'utf8');
  const matterResult = matter(fileRead);

  //Remark converte o arquivo .md em html
  const processedText = await remark()
    .use(html)
    .process(matterResult.content)

  const textHtml = processedText.toString();

  return{
    id, 
    textHtml,
    ...(matterResult.data as {date: string; title: string})
  }
}