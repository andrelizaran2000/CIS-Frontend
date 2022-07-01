// Traductions
import { useTranslation } from 'react-i18next';

export default function useTraduction (file:string) {
  const { t } = useTranslation(file);
  return t
}



