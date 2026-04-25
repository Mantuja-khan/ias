import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductCard } from "@/components/ProductCard";
import { products, categories } from "@/data/products";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "All products — IAS Groups" },
      { name: "description", content: "Browse our complete catalog of industrial automation equipment." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <div className="min-h-dvh bg-steel-900 text-rubber flex flex-col">
      <SiteHeader />

      <section className="border-b border-steel-700 relative overflow-hidden cta-bg">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="relative max-w-[1440px] mx-auto px-6 py-12 lg:py-16 text-center">
          <h1 className="font-display font-black text-4xl lg:text-5xl text-white uppercase tracking-tighter mb-4">
            Our Complete Catalog
          </h1>
          <p className="text-base text-white/70 max-w-2xl mx-auto leading-relaxed mb-8">
            Explore our curated inventory of high-performance industrial equipment.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to="/category/$slug"
                params={{ slug: cat.slug }}
                className="bg-white border border-steel-700 px-6 py-3 rounded-md font-display font-bold text-sm text-rubber hover:border-safety hover:text-safety transition-colors uppercase tracking-widest shadow-sm"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <main className="max-w-[1440px] mx-auto px-6 py-12 w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
