'use client';

import projectsData from "@/data/projects.json";
import { CarbonCredit, CarbonCreditStatus } from "@/types/carbon-credits";
import { Chip } from "@nextui-org/react";
import CardItem from "../common/CardItem";
import CardValue from "../common/CardValue";

export default function CCCard({ carbonCredit }: { carbonCredit: CarbonCredit }) {
  const project = projectsData.projects.find((project) => project.id === carbonCredit.projectId);

  return (
  <CardItem>
    <div className="w-5/12">
      <div className="text-sm font-bold uppercase overflow-hidden whitespace-nowrap text-ellipsis">
        {project?.name}
        </div>
        <div className="text-neutral-300 text-xs overflow-hidden whitespace-nowrap text-ellipsis">
          {project?.country}
        </div>
      </div>
      <div className="ml-4 w-3/12 overflow-hidden whitespace-nowrap text-ellipsis">
        <CardValue label="Vintage" value={carbonCredit.vintage} />
      </div>
      <div className="w-4/12 text-right">
        <Chip color={getColor(carbonCredit.status)}>{carbonCredit.status}</Chip>
      </div>
    </CardItem>
  );
}

function getColor(status: string) {
  if (status === CarbonCreditStatus.Issued) return "primary";
  if (status === CarbonCreditStatus.Retired) return "danger";
  if (status === CarbonCreditStatus.Confirmed) return "success";
  return "default";
}