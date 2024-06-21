export default function CardValue({ label, value }: { label: string, value: string }) {
  return (
    <>
      <div className="font-light uppercase text-xs text-neutral-300">
          {label}
        </div>
        <div className="text-sm overflow-hidden whitespace-nowrap text-ellipsis mt-1">
          {value}
     </div>
    </>
  )
}