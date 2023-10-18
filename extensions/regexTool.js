export const getParagraphs =(htmlString)=> {  
   if(htmlString) {
    return htmlString.toString().replace(`\n`,"").replace('</br>', '</br>###').replace('</p>', '</p>###').split('###').filter((a) => a)
     
  }
  else {
    return ''
  }
  }