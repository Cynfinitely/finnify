import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Menu (){
    const t = useTranslations('Menu');
    
    return <div className="border-r-4 border-indigo-500 p-24" ><ul>
        <li><Link href="/reading">{t('reading')}</Link></li>
        <li><Link href="/writing">{t('writing')}</Link></li>
        <li><Link href="/speaking">{t('speaking')}</Link></li>
        <li><Link href="/listening">{t('listening')}</Link></li>
        <li><Link href="/grammer">{t('grammer')}</Link></li>
        </ul></div>
}