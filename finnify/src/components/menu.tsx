import { useTranslations } from "next-intl";

export default function Menu (){
    const t = useTranslations('Menu');
    
    return <div><ul>
        <li><a href="">{t('reading')}</a></li>
        <li><a href="">{t('writing')}</a></li>
        <li><a href="">{t('speaking')}</a></li>
        <li><a href="">{t('listening')}</a></li>
        <li><a href="">{t('grammer')}</a></li>
        </ul></div>
}