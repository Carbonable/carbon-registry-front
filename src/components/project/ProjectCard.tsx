'use client';

import { Project } from "@/types/project";
import { Avatar, Chip } from "@nextui-org/react";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-lg border border-opacityLight-10 bg-opacityLight-5 px-4 py-3 flex items-center justify-start hover:bg-opacityLight-10 cursor-pointer">
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
        <div className="font-light uppercase text-xs text-neutral-300">
          Type
        </div>
        <div className="text-sm overflow-hidden whitespace-nowrap text-ellipsis mt-1">
          <Chip color="primary" size="sm" variant="flat">{project.type}</Chip>
        </div>
      </div>
      <div className="ml-4 md:w-3/12 overflow-hidden whitespace-nowrap text-ellipsis hidden md:block">
        <div className="font-light uppercase text-xs text-neutral-300">
          Developed by
        </div>
        <div className="text-sm overflow-hidden whitespace-nowrap text-ellipsis mt-1">
          {project.developer}
        </div>
      </div>
      <div className="ml-4 md:w-3/12 overflow-hidden whitespace-nowrap text-ellipsis hidden md:block">
        <div className="font-light uppercase text-xs text-neutral-300">
          Certified by
        </div>
        <div className="text-sm overflow-hidden whitespace-nowrap text-ellipsis mt-1">
          {project.certifier}
        </div>
      </div>
      <div className="ml-4 lg:w-3/12 overflow-hidden whitespace-nowrap text-ellipsis hidden lg:block">
        <div className="font-light uppercase text-xs text-neutral-300">
          Methodology
        </div>
        <div className="text-sm overflow-hidden whitespace-nowrap text-ellipsis mt-1">
          {project.methodology}
        </div>
      </div>
      <div className="ml-4 lg:w-3/12 overflow-hidden whitespace-nowrap text-ellipsis hidden lg:block">
        <div className="font-light uppercase text-xs text-neutral-300">
          Standard
        </div>
        <div className="text-sm overflow-hidden whitespace-nowrap text-ellipsis mt-1">
          {project.standard}
        </div>
      </div>
      <div className="text-right">
        <Chip color="success">{project.status}</Chip>
      </div>
    </div>
  );
}