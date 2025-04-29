"use client";

import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Input } from "@/components/ui/input";
// import { List, MapPin,  } from "lucide-react";
import { Search } from "lucide-react";
import { mockBusinessData } from "@/lib/mockData";
import Image from "next/image";
import { CategoryFilter } from "./components/CategoryFilter";
import { BusinessCard } from "./components/BusinessCard";
import { SortBy } from "./components/SortBy";
import { useRouter } from "next/navigation";

const InteractiveMap = () => {
  const router = useRouter();
  const apiKey = process.env.NEXT_PUBLIC_MAPBOX_MAPS_KEY;
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  // const [searchQuery, setSearchQuery] = useState("");
  const [mapLoaded, setMapLoaded] = useState<boolean>(false);
  const [filteredBusinesses, setFilteredBusinesses] =
    useState(mockBusinessData);
  // const [currentCategory, setCurrentCategory] = useState("all");

  useEffect(() => {
    if (mapContainer.current && !map.current) {
      // Set Mapbox token
      mapboxgl.accessToken = apiKey;

      // Initialize map
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        // style: "mapbox://styles/mapbox/streets-v9",
        style: "mapbox://styles/mapbox/streets-v12",
        projection: "globe",
        center: [30, 15],
        zoom: 2,
      });

      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

      // Wait for map to load before adding markers
      map.current.on("load", () => {
        setMapLoaded(true);

        // Try to get user's location
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              if (map.current) {
                map.current.flyTo({
                  center: [position.coords.longitude, position.coords.latitude],
                  essential: true,
                  zoom: 10,
                });
              }
            },
            // On error, stay with default view
            () => console.log("Unable to retrieve your location")
          );
        }
      });
    }

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [apiKey]);

  return (
    <div className="relative w-full h-full min-h-[500px] rounded-lg overflow-hidden border">
      {/* Map Container */}
      <div ref={mapContainer} className="w-full h-full absolute inset-0" />

      {/* Top-right USDC Near Me Logo */}
      <div
        className="absolute bg-[#FFFFFF80] rounded-[20px] top-10 right-10 z-10 backdrop-blur-[5px] p-[12px] cursor-pointer"
        onClick={() => router.push("/")}
      >
        <Image
          src="/image/usdc-near-me-logo.svg"
          alt="USDC Near Me"
          width={140}
          height={40}
          className="object-contain"
        />
      </div>

      {/* Left Panel */}
      <div
        className="absolute top-10 left-0 sm:left-10 bottom-10 w-full sm:w-[360px] 
        h-[calc(100vh-5rem)] rounded-[20px] sm:h-auto z-10 bg-[var(--box-map-bg-color)] backdrop-blur-[27.2px] 
        px-4 py-6 overflow-y-auto"
      >
        <h1 className="font-medium text-2xl">
          Search for USDC <br /> near you
        </h1>

        {/* Search */}
        <div className="relative mt-4 mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            placeholder="Search USDC Near Me"
            className="pl-12 pr-4 py-5 bg-white text-black placeholder:text-gray-400 
             rounded-full border-white focus:border-white focus:outline-none
             focus:ring-0 focus:ring-transparent shadow-[0px_1px_1px_0px_#0000000D]
            "
          />
        </div>

        {/* Categories */}
        <CategoryFilter />

        <div className="flex items-center justify-between mb-3">
          {/* Left side: Recommended label */}
          <h3 className="text-sm text-[var(--btn-outline-text-color)] font-medium">
            Recommended
          </h3>

          {/* Right side: Sort By dropdown */}
          <SortBy />
        </div>

        <div className="space-y-4">
          {filteredBusinesses.map((biz, idx) => (
            <BusinessCard key={idx} biz={biz} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
