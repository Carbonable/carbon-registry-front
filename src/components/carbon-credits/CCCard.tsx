'use client';

import projectsData from "@/data/projects.json";
import { CarbonCredit } from "@/types/carbon-credits";
import { Chip } from "@nextui-org/react";

export default function CCCard({ carbonCredit }: { carbonCredit: CarbonCredit }) {
  const project = projectsData.projects.find((project) => project.id === carbonCredit.projectId);

  return (
    <div className="rounded-lg border border-opacityLight-10 bg-opacityLight-5 px-4 py-3 flex items-center justify-start hover:bg-opacityLight-10 cursor-pointer">
      <div className="w-5/12">
        <div className="text-sm font-bold uppercase overflow-hidden whitespace-nowrap text-ellipsis">
          {project?.name}
        </div>
        <div className="text-neutral-300 text-xs overflow-hidden whitespace-nowrap text-ellipsis">
          {project?.country}
        </div>
      </div>
      <div className="ml-4 w-3/12 overflow-hidden whitespace-nowrap text-ellipsis">
        <div className="font-light uppercase text-xs text-neutral-300">
          Vintage
        </div>
        <div className="text-sm overflow-hidden whitespace-nowrap text-ellipsis mt-1">
          {carbonCredit.vintage}
        </div>
      </div>
      <div className="w-4/12 text-right">
        <Chip color={getColor(carbonCredit.status)}>{carbonCredit.status}</Chip>
      </div>
    </div>
  );
}

function getColor(status: string) {
  if (status === "issued") return "primary";
  if (status === "retired") return "danger";
  if (status === "confirmed") return "success";
  return "default";
}