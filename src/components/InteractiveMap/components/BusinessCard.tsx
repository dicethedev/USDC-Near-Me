// components/BusinessCard.tsx
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

import { Business } from "@/lib/mockData";
import { ArrowDirectIcon } from "@/assets/svg";

type BusinessCardProps = {
  biz: Business;
};

export const BusinessCard = ({ biz }: BusinessCardProps) => {
  return (
    <div className="bg-white p-3 rounded-[20px] shadow-[0px_1px_1px_0px_#0000000D]">
      <div className="rounded-[10px] overflow-hidden w-full mb-2">
        <Image
          src="/image/shop-image.png"
          alt="Shop Image"
          width={500}
          height={250}
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="flex items-start justify-between">
        <div>
          <h4 className="font-medium text-base text-[var(--general-text-color)] mb-1">
            {biz.name}
          </h4>
          <p className="font-medium text-sm text-[#6F6F6F]">{biz.address}</p>
        </div>

        <Button
          onClick={() => {}}
          size="sm"
          className="!bg-[var(--direct-btn-color)] text-white border-0 border-[var(--border-color)] 
          rounded-full px-3 py-0 text-sm cursor-pointer font-medium flex items-center "
        >
          <ArrowDirectIcon />
          Direct Me
        </Button>
      </div>

      <div className="flex items-center space-x-2 mt-4">
        <p className="text-sm font-medium text-black">Tokens accepted</p>
        <Image
          src="/image/usdc-logo.svg"
          alt="USDC Logo"
          width={18}
          height={18}
          className="w-[18px] h-[18px]"
        />
      </div>

      <div className="flex items-center justify-between mt-4">
        {/* Category with icon biz.category */}
        <Button
          className="!bg-[var(--box-map-bg-color)] text-[#1D1D20]
          rounded-full cursor-pointer border-0 border-[var(--border-color)] font-medium text-sm"
        >
          Restaurants
        </Button>

        {/* Opened/Closed badge */}
        <Button
          size="sm"
          className={`text-[12px] px-2 py-0.5 h-[18px] rounded-[5px] ${
            biz.isOpen
              ? "bg-[var(--open-btn-BgColor)] text-[var(--open-btn-text-color)]"
              : "bg-[var(--close-btn-BgColor)] text-[var(--close-btn-text-color)]"
          }`}
        >
          {biz.isOpen ? "Opened" : "Closed"}
        </Button>
      </div>
    </div>
  );
};

export default BusinessCard;
