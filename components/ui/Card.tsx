"use client";
import {useRouter} from "next/navigation";
import usePreviewModal from "@/hooks/use-preview-modal";
import Image from "next/image";
import { Expand, ShoppingCart } from "lucide-react";

import { Product } from "@/types";
import IconButton from "./IconButton";
import Currency from "./Curreny";
import {MouseEventHandler} from "react";
import useCart from "@/hooks/use-cart";

interface ProductCardProps {
  data: Product;
}
const ProductCard = ({ data }: ProductCardProps) => {
    const cart = useCart();
    const previewModal = usePreviewModal();
    const router = useRouter()
    const handleClick = () => {
        router.push(`/product/${data.id}`)
    }

   const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
       event.stopPropagation();
       previewModal.onOpen(data);
   }

    const onAddToCart : MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        cart.addItem(data)
    }

    return (
    <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      <div className="aspect-square rounded-xl bg-gray-100  relative">
        <Image
          className="aspect-square object-cover rounded-md"
          src={data.images[0].url}
          fill
          alt={data.name}
        />

        <div className="opacity-0 group-hover:opacity-100 transition absolute  w-full px-6 bottom-5">
          <div className="flex justify-center gap-x-6">
            <IconButton
              icon={<Expand size={20} className="text-gray-600" />}
              onClick={onPreview}
            />
            <IconButton
              icon={<ShoppingCart size={20} className="text-gray-600" />}
              onClick={onAddToCart}
            />
          </div>
        </div>
      </div>

      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category.name}</p>
      </div>

      <div className="flex items-center justify-between">
        <Currency value={data.price} />
      </div>
    </div>
  );
};

export default ProductCard;
