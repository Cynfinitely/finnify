import {useTranslations} from 'next-intl';
 
export default function Index() {
  const t = useTranslations('Index');
  return (   
    <>
        <div>{t('title')}</div>
    </> 
);
}