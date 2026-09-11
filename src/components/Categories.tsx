import React from 'react';
import { categories } from '../data/categories';

export function Categories() {
  const [featured, ...rest] = categories;

  return (
    <section aria-labelledby="categories-heading" className="w-full bg-forest-900 px-5 py-20 sm:px-8 sm:py-28 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <h2
          id="categories-heading"
          className="max-w-xl text-3xl font-extrabold leading-tight tracking-[-0.02em] text-cream sm:text-5xl">
          
          Что носим
        </h2>
        <p className="mt-4 max-w-lg text-base text-cream/55 sm:text-lg">
          Четыре направления, из которых собирается весь гардероб.
        </p>

        <div className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-3 sm:gap-6">
          <CategoryCard
            title={featured.title}
            caption={featured.caption}
            image={featured.image}
            alt={featured.alt}
            className="sm:col-span-3"
            aspect="aspect-[4/5] sm:aspect-[21/9]" />
          
          {rest.map((category) =>
          <CategoryCard
            key={category.id}
            title={category.title}
            caption={category.caption}
            image={category.image}
            alt={category.alt}
            aspect="aspect-[4/5] sm:aspect-[3/4]" />

          )}
        </div>
      </div>
    </section>);

}

interface CategoryCardProps {
  title: string;
  caption: string;
  image: string;
  alt: string;
  aspect: string;
  className?: string;
}

function CategoryCard({ title, caption, image, alt, aspect, className = '' }: CategoryCardProps) {
  return (
    <article className={className}>
      <div className={`${aspect} w-full overflow-hidden bg-forest-800 ring-1 ring-inset ring-cream/10`}>
        <img src={image} alt={alt} loading="lazy" className="h-full w-full object-cover" />
      </div>
      <h3 className="mt-5 text-xl font-bold tracking-[-0.01em] text-cream sm:text-2xl">{title}</h3>
      <p className="mt-2 text-[0.95rem] leading-relaxed text-cream/50">{caption}</p>
    </article>);

}