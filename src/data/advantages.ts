import { TruckIcon, CreditCardIcon, StoreIcon, SparklesIcon } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Advantage {
  icon: LucideIcon;
  title: string;
  text: string;
}

export const advantages: Advantage[] = [
{
  icon: TruckIcon,
  title: 'Доставка по Казахстану и СНГ',
  text: 'Отправляем в любой город — от Астаны до Бишкека. Оформляем заказ прямо в переписке.'
},
{
  icon: CreditCardIcon,
  title: 'Рассрочка Kaspi Red',
  text: 'Берите сейчас, платите частями. Оформляем в пару сообщений, без справок и лишних вопросов.'
},
{
  icon: StoreIcon,
  title: 'Шоурум в Алматы',
  text: 'Приходите померить и посмотреть вживую — каждый день с 10:00 до 21:00, без записи.'
},
{
  icon: SparklesIcon,
  title: 'Каждая вещь — на выбор',
  text: 'Подбираем модели вручную, а не заливаем на сайт весь сток. Если сомневаешься в размере или фасоне — подскажем в переписке.'
}];