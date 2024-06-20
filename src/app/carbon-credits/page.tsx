import CCList from "@/components/carbon-credits/CCList";
import ProjectsList from "@/components/project/ProjectsList";

export default function CarbonCredits() {
  return (
    <div>
      <h1 className="uppercase">List of carbon credits</h1>
      <div className="mt-8">
        <CCList />
      </div>
    </div>
  );
}
