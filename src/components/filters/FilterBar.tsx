export default function FilterBar() {
  return (
    <div className="flex gap-2 text-xs overflow-x-auto py-2">
      <button className="px-3 py-1 bg-[#1a2230] rounded-full">Version</button>
      <button className="px-3 py-1 bg-[#1a2230] rounded-full">Loader</button>
      <button className="px-3 py-1 bg-[#1a2230] rounded-full">Category</button>
    </div>
  );
}
