import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductCard } from "@/components/ProductCard";
import { findCategory, productsByCategory, categories } from "@/data/products";

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params }) => {
    const cat = findCategory(params.slug);
    if (!cat) throw notFound();
    return { cat };
  },
  head: ({ loaderData }) => {
    const cat = loaderData?.cat;
    if (!cat) return { meta: [{ title: "Category — IAS Groups" }] };
    return {
      meta: [
        { title: `${cat.name} Products — IAS Groups` },
        { name: "description", content: cat.description },
        { property: "og:title", content: `${cat.name} — IAS Groups` },
        { property: "og:description", content: cat.description },
      ],
    };
  },
  component: CategoryPage,
  notFoundComponent: () => (
    <div className="min-h-dvh flex items-center justify-center text-center p-8">
      <div>
        <h1 className="text-4xl mb-4">Category Not Found</h1>
        <Link to="/" className="text-safety underline">
          Go Home
        </Link>
      </div>
    </div>
  ),
});

function CategoryPage() {
  const { cat } = Route.useLoaderData();
  const items = productsByCategory(cat.slug);

  return (
    <div className="min-h-dvh bg-steel-900 text-rubber flex flex-col">
      <SiteHeader />

      <section className="border-b border-steel-700 relative overflow-hidden cta-bg">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="relative max-w-[1440px] mx-auto px-6 py-12 lg:py-16">
          <div className="font-mono text-xs uppercase tracking-widest text-steel-500 mb-6 flex gap-2">
            <Link to="/" className="hover:text-safety">Home</Link>
            <span>/</span>
            <span className="text-safety">{cat.name}</span>
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-8 items-start">
            <div>
              <h1 className="font-display font-black text-4xl lg:text-5xl text-white uppercase tracking-tighter mb-4">
                {cat.name}
              </h1>
              <p className="font-mono text-sm text-safety uppercase tracking-widest font-bold mb-4">
                {cat.tagline}
              </p>
              <p className="text-base text-white/70 max-w-2xl leading-relaxed">
                {cat.description}
              </p>
            </div>
            <div className="bg-white border border-steel-700 p-5 font-mono text-xs uppercase tracking-widest shrink-0 rounded-md shadow-sm">
              <div className="text-steel-500 mb-2">Total SKUs</div>
              <div className="font-display font-black text-4xl text-safety tabular-nums">
                {String(items.length).padStart(3, "0")}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-6 py-12 w-full grid grid-cols-12 gap-8">
        <aside className="col-span-12 lg:col-span-3 space-y-6">
          <div className="bg-white border border-steel-700 p-5 rounded-md sticky top-32">
            <div className="font-display font-black text-sm uppercase tracking-widest text-rubber border-b border-steel-700 pb-3 mb-4">
              Other Catalogs
            </div>
            <ul className="space-y-3">
              {categories
                .filter((c) => c.slug !== cat.slug)
                .map((c) => (
                  <li key={c.slug}>
                    <Link
                      to="/category/$slug"
                      params={{ slug: c.slug }}
                      className="font-mono text-xs uppercase tracking-widest text-safety hover:text-rubber"
                    >
                      → {c.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </aside>

        <main className="col-span-12 lg:col-span-9">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-5">
            {items.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          {items.length === 0 && (
            <div className="text-center py-20 bg-white border border-steel-700 rounded-md">
              <p className="font-mono text-xs uppercase tracking-widest text-steel-500">No products available in this category yet.</p>
            </div>
          )}
        </main>
      </div>

      <SiteFooter />
    </div>
  );
}
