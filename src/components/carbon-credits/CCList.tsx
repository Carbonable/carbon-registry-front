import CCData from "@/data/carbon-credits.json";
import { CarbonCredit } from "@/types/carbon-credits";
import Link from "next/link";
import CCCard from "./CCCard";

export default function CCList() {
  const carbonCredits = CCData.carbonCredits as CarbonCredit[];

  return (
    <>
      {carbonCredits.map((carbonCredit) => (
        <div key={carbonCredit.id} className="mb-2">
          <Link href={`/carbon-credits/${carbonCredit.id}`}>
            <CCCard carbonCredit={carbonCredit} />
          </Link>
        </div>

      ))}
    </>
  );
}