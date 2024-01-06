import {useTranslations} from 'next-intl';
import Image from 'next/image'
 
export default function Index() {
  const t = useTranslations('Index');
  return (    
  <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>{t('title')}</div>
</main>);
}