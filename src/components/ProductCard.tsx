import { Link } from "@tanstack/react-router";
import type { Product } from "@/data/products";
import { ProductImage } from "./ProductImage";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/product/$id"
      params={{ id: product.id }}
      preload="intent"
      className="group block bg-white border border-black hover:border-safety hover:shadow-soft hover:scale-[1.03] transition-all duration-300 rounded-md overflow-hidden cursor-pointer"
    >
      <div className="relative aspect-[3/2] border-b border-steel-700 group-hover:border-safety overflow-hidden">
        <div className="w-full h-full group-hover:scale-110 transition-transform duration-300">
          <ProductImage name={product.name} src={product.image} />
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
              Availability
            </div>
            <div className="font-sans font-bold text-[10px] text-safety uppercase tracking-wider">
              In Stock
            </div>
          </div>
          <div className="text-right">
            <div className="text-[8px] font-sans text-steel-500 uppercase tracking-widest">
              Stock Quantity
            </div>
            <div className="font-sans font-bold text-[10px] text-rubber tabular-nums">
              {product.stock} Units
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
