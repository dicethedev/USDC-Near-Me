"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MapIcon } from "@/assets/svg";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center text-center py-15 px-4 md:px-8 h-full">
      {/* Logo */}
      <div>
        <Image
          src="/image/usdc-near-me-logo.svg"
          alt="Logo"
          width={100}
          height={100}
          className="mb-6"
        />
      </div>

      <div className="pt-10">
        {/* Headline */}
        <div>
          <h1
            className="text-5xl md:text-6xl font-bold text-black mb-4 flex flex-wrap items-center gap-2"
            style={{ fontFamily: "Balige" }}
          >
            Find places{" "}
            <Image
              src="/icons/find-places.png"
              alt="USDC"
              width={45}
              height={45}
              className="inline-block"
            />{" "}
            <b
              className="text-[var(--headline-text-color)]"
              style={{ fontFamily: "Balige" }}
            >
              to spend
            </b>
            <Image
              src="/icons/usdc-logo.png"
              alt="USDC"
              width={45}
              height={45}
              className="inline-block"
            />
            USDC
          </h1>
          <h1
            className="text-[48px] md:text-6xl font-bold text-black mb-4"
            style={{ fontFamily: "Balige" }}
          >
            <b
              className="text-[var(--headline-text-color)]"
              style={{ fontFamily: "Balige" }}
            >
              anywhere in the
            </b>{" "}
            <Image
              src="/icons/global-lovation.png"
              alt="USDC"
              width={45}
              height={45}
              className="inline-block"
            />{" "}
            world.
          </h1>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-[var(--desc-text-color)] font-medium max-w-2xl mb-8 mx-auto text-center">
          Discover nearby businesses that accept{" "}
          <b className="text-black">USDC</b>, from restaurants to retailers.{" "}
          <b className="text-black">USDC Near Me</b> helps you find real-world
          places to spend stablecoins, seamlessly and globally.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          onClick={() => router.push("/map")}
          size="lg"
          className="!bg-[var(--explore-btn-color)] text-[var(--explore-btn-text-color)] 
          border border-[var(--border-color)] rounded-full px-10 py-6 text-base cursor-pointer 
          flex items-center gap-2"
        >
          Explore the Map
          <MapIcon />
        </Button>
        <Button
          onClick={() => router.push("/addbusiness")}
          size="lg"
          variant="outline"
          className="bg-[var(--btn-outline-color)] text-[var(--btn-outline-text-color)]
          cursor-pointer border border-[var(--border-color)] hover:text-black px-4 py-6 rounded-full text-base
          "
        >
          Add a business
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
