import { Link } from "@tanstack/react-router";
import type { Product } from "@/data/products";
import { ProductImage } from "./ProductImage";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/product/$id"
      params={{ id: product.id }}
      preload="intent"
      className="group block bg-white border border-black hover:border-safety hover:shadow-soft transition-all duration-200 rounded-md overflow-hidden cursor-pointer"
    >
      <div className="relative aspect-[3/2] border-b border-steel-700 group-hover:border-safety">
        <ProductImage name={product.name} src={product.image} />
        <div className="absolute top-3 left-3 bg-white/95 border border-safety px-2 py-1 text-[10px] font-sans font-bold text-safety uppercase tracking-widest rounded">
          {product.sku}
        </div>
      </div>
      <div className="p-2.5">
        <div className="text-[8px] font-sans font-bold text-steel-500 uppercase tracking-widest mb-1">
          {product.group}
        </div>
        <h3 className="font-display font-black text-sm text-rubber uppercase leading-tight mb-2 group-hover:text-safety min-h-[2.2rem] line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-end justify-between pt-2 border-t border-steel-700">
          <div>
            <div className="text-[8px] font-sans text-steel-500 uppercase tracking-widest">
              Unit Price
            </div>
            <div className="font-display font-black text-lg text-safety tabular-nums">
              ₹{product.price.toLocaleString()}
            </div>
          </div>
          <div className="text-right">
            <div className="text-[8px] font-sans text-steel-500 uppercase tracking-widest">
              Stock
            </div>
            <div className="font-sans font-bold text-[10px] text-rubber tabular-nums">
              {product.stock} U
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
