export interface Category {
  id: string;
  title: string;
  caption: string;
  image: string;
  alt: string;
}

export const categories: Category[] = [
{
  id: 'tracksuits',
  title: 'Спортивные костюмы',
  caption: 'Тот самый комплект, в котором и в город, и в зал, и в аэропорт.',
  image: "/40933103-c3ef-482e-91c4-f52a9863889d.jpg",
  alt: 'Мужчина в тёмно-зелёном спортивном костюме'
},
{
  id: 'outerwear',
  title: 'Кожаные куртки и ветровки',
  caption: 'Плотная кожа и лёгкие ветровки на межсезонье.',
  image: "/8de91804-82e2-4ad4-af3b-3221da8aa285.jpg",
  alt: 'Мужчина в чёрной кожаной куртке'
},
{
  id: 'casual',
  title: 'Повседневная одежда',
  caption: 'Футболки, худи, брюки — база на каждый день.',
  image: "/c8dbb666-6b8d-4031-abca-fe112a3e535c.jpg",
  alt: 'Мужчина в худи и тёмных брюках'
},
{
  id: 'shoes',
  title: 'Обувь и аксессуары',
  caption: 'Кроссовки, ремни, сумки — чтобы образ был собран.',
  image: "/bc43c4e3-9634-4add-8cbf-fbcc42d53bac.jpg",
  alt: 'Мужские кроссовки, кожаный ремень и сумка'
}];