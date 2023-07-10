import es from './home/es.json'
import en from './home/en.json'
import jp from './home/jp.json'

const getLanguage = (lang: string) => {
    const messages = {
        es,
        en,
        jp
    }
    return JSON.stringify(messages[lang])
    
}
export default getLanguage