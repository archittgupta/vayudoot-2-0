"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/app/components/3d-card";
import Link from "next/link";

type ThreeDCardProps = {
  facultyName: string;
  abtFaculty: string;
  imageUrl: string;
  twitterUrl: string;
};

export function ThreeDCardDemo({
  facultyName,
  abtFaculty,
  imageUrl,
  twitterUrl = "#",
}: ThreeDCardProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-64 h-64 flex flex-col items-center justify-center rounded-xl p-4 border">
        {/* Faculty Name */}
        <CardItem translateZ={40} className="text-lg font-bold text-neutral-600 dark:text-white text-center">
          {facultyName}
        </CardItem>

        {/* Faculty Image */}
        <CardItem translateZ={80} className="mt-3">
          <Image
            src={imageUrl}
            height={128}
            width={128}
            className="h-32 w-32 object-cover rounded-xl group-hover/card:shadow-lg"
            alt={facultyName}
          />
        </CardItem>

        {/* Faculty Description */}
        <CardItem as="p" translateZ={50} className="text-neutral-500 text-xs text-center mt-2 dark:text-neutral-300">
          {abtFaculty}
        </CardItem>

        {/* Buttons Section */}
        <div className="flex justify-between items-center mt-3 w-full px-4">
          <CardItem translateZ={15} as={Link} href={twitterUrl} target="_blank" className="px-2 py-1 rounded-lg text-xs font-normal dark:text-white border border-gray-400">
            Follow →
          </CardItem>
          <CardItem translateZ={15} as="button" className="px-2 py-1 rounded-lg bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
            Connect
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
