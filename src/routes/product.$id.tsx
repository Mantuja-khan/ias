import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductCard } from "@/components/ProductCard";
import { ProductImage } from "@/components/ProductImage";
import { findProduct, findCategory, productsByCategory } from "@/data/products";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const product = findProduct(params.id);
    if (!product) throw notFound();
    const cat = findCategory(product.category)!;
    return { product, cat };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    if (!p) return { meta: [{ title: "Product — IAS Groups" }] };
    return {
      meta: [
        { title: `${p.name} — ${p.sku} — IAS Groups` },
        { name: "description", content: p.description },
        { property: "og:title", content: `${p.name} — IAS Groups` },
        { property: "og:description", content: p.description },
      ],
    };
  },
  component: ProductPage,
  notFoundComponent: () => (
    <div className="min-h-dvh flex items-center justify-center text-center p-8">
      <div>
        <h1 className="text-4xl mb-4">Product Not Found</h1>
        <Link to="/" className="text-safety underline">
          Go Home
        </Link>
      </div>
    </div>
  ),
});

function ProductPage() {
  const { product, cat } = Route.useLoaderData();
  const related = productsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-dvh bg-steel-900 text-rubber flex flex-col">
      <SiteHeader />

      <div className="max-w-[1440px] mx-auto px-6 pt-8 pb-4 w-full">
        <div className="font-mono text-xs uppercase tracking-widest text-steel-500 flex gap-2 flex-wrap">
          <Link to="/" className="hover:text-safety">Home</Link>
          <span>/</span>
          <Link to="/category/$slug" params={{ slug: cat.slug }} className="hover:text-safety">
            {cat.name}
          </Link>
          <span>/</span>
          <span className="text-rubber font-bold">{product.name}</span>
        </div>
      </div>

      <section className="max-w-[1440px] mx-auto px-6 py-8 w-full grid grid-cols-12 gap-8 lg:gap-12">
        <div className="col-span-12 lg:col-span-6 xl:col-span-5">
          <div className="bg-white border border-steel-700 shadow-soft p-4 rounded-lg">
            <div className="aspect-square border border-steel-700 rounded-md overflow-hidden max-w-[500px] mx-auto group cursor-pointer">
              <div className="w-full h-full hover:scale-110 transition-transform duration-300">
                <ProductImage name={product.name} src={product.image} />
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6 xl:col-span-7 flex flex-col">
          <div className="font-mono text-xs uppercase tracking-widest text-safety font-bold mb-3">
            {cat.name} · {product.group}
          </div>
          <h1 className="font-display font-black text-3xl lg:text-4xl text-rubber uppercase tracking-tighter mb-4 leading-none">
            {product.name}
          </h1>

          <div className="flex items-center gap-4 mb-6 font-mono text-xs uppercase tracking-widest">
            <span className="bg-white border border-safety px-3 py-1.5 text-safety font-bold rounded">
              SKU: {product.sku}
            </span>
            <span className="text-steel-500">★ {product.rating.toFixed(1)} / 5.0</span>
          </div>

          <p className="text-base text-steel-500 leading-relaxed mb-8">
            {product.description}
          </p>

          <div className="bg-white border border-steel-700 p-6 mb-6 rounded-lg shadow-sm">
            <div className="flex items-end justify-between mb-5">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-steel-500 mb-1 font-bold">
                  Availability
                </div>
                <div className="font-display font-black text-2xl text-safety uppercase tracking-tight">
                  In Stock
                </div>
              </div>
              <div className="text-right">
                <div className="font-mono text-[10px] uppercase tracking-widest text-steel-500 mb-1 font-bold">
                  Stock Quantity
                </div>
                <div className="font-mono font-bold text-rubber text-lg tabular-nums">
                  {product.stock} Units
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex border border-steel-700 rounded-md overflow-hidden h-12">
                <button className="px-4 font-display font-black text-xl text-rubber hover:bg-steel-900">−</button>
                <input
                  type="text"
                  defaultValue="1"
                  className="w-12 bg-transparent text-center font-mono text-rubber outline-none text-sm"
                />
                <button className="px-4 font-display font-black text-xl text-rubber hover:bg-steel-900">+</button>
              </div>
              <div className="flex-1 flex flex-col sm:flex-row gap-3">
                <button className="flex-1 gradient-blue text-white font-display font-black text-xs sm:text-sm lg:text-base uppercase px-4 py-3 rounded-md hover:opacity-90 transition-opacity h-12 truncate">
                  Add to Cart
                </button>
                <Link
                  to="/contact"
                  className="flex-1 flex items-center justify-center bg-steel-900 text-rubber border border-steel-700 font-display font-black text-xs sm:text-sm lg:text-base uppercase px-4 py-3 rounded-md hover:border-safety hover:text-safety transition-colors h-12 truncate"
                >
                  Request Bulk Quote
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 font-mono text-[10px] uppercase tracking-widest">
            {[
              ["48 HR", "Dispatch"],
              ["24 MO", "Warranty"],
              ["CE", "Certified"],
            ].map(([k, v]) => (
              <div key={k} className="bg-white border border-steel-700 p-3 text-center rounded-md">
                <div className="font-display font-black text-safety text-lg">{k}</div>
                <div className="text-steel-500">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {related.length > 0 && (
        <section className="max-w-[1440px] mx-auto px-6 py-12 w-full">
          <div className="border-b border-steel-700 pb-3 mb-8">
            <h2 className="font-display font-black text-xl lg:text-2xl uppercase tracking-tighter text-rubber">
              Related Equipment
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  );
}
