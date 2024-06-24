'use client';

import { Project } from "@/types/project";
import { Avatar, Chip } from "@nextui-org/react";
import CardItem from "../common/CardItem";
import CardValue, { CardChip } from "../common/CardValue";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <CardItem>
      <div className="flex items-center justify-center">
        <div>
          <Avatar
            isBordered
            color="secondary"
            radius="lg"
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          />
        </div>
        <div className="ml-4 flex-grow md:flex-grow-0 md:w-3/12">
          <div className="font-bold uppercase">
            {project.name}
          </div>
          <div className="text-neutral-300 text-sm">
            {project.country}
          </div>
        </div>
        <div className="ml-4 md:w-2/12 overflow-hidden whitespace-nowrap text-ellipsis hidden md:block">
          <CardChip label="Type" value={project.type} />
        </div>
        <div className="ml-4 md:w-3/12 overflow-hidden whitespace-nowrap text-ellipsis hidden md:block">
          <CardValue label="Developed by" value={project.developer} />
        </div>
        <div className="ml-4 md:w-3/12 overflow-hidden whitespace-nowrap text-ellipsis hidden md:block">
          <CardValue label="Certified by" value={project.certifier} />
        </div>
        <div className="ml-4 lg:w-3/12 overflow-hidden whitespace-nowrap text-ellipsis hidden lg:block">
          <CardValue label="Methodology" value={project.methodology} />
        </div>
        <div className="ml-4 lg:w-3/12 overflow-hidden whitespace-nowrap text-ellipsis hidden lg:block">
          <CardValue label="Standard" value={project.standard} />
        </div>
        <div className="text-right">
          <Chip color="success">{project.status}</Chip>
        </div>
      </div>
    </CardItem>
  );
}