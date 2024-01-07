import {useTranslations} from 'next-intl';
import Image from 'next/image'
import Menu from '@/components/menu';
import Logo from '@/components/logo';
 
export default function Index() {
  const t = useTranslations('Index');
  return (    
  <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Logo/>
    <div>{t('title')}</div>
    <Menu/>
</main>);
}