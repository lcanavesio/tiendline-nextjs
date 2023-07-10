import es from './hero/es.json'
import en from './hero/en.json'
import jp from './hero/jp.json'

const getLanguage = (lang: string) => {
    const messages = {
        es,
        en,
        jp
    }
    return JSON.stringify(messages[lang])
    
}
export default getLanguage