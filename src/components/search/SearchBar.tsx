export default function SearchBar() {
  return (
    <div className="w-full flex gap-2">

      <input
        className="flex-1 h-12 rounded-2xl bg-[#1a2230] px-4 text-white outline-none placeholder:text-gray-400"
        placeholder="🔍 Search mods..."
      />

      <button
        className="w-12 h-12 rounded-2xl bg-[#1a2230] text-white"
      >
        ☰
      </button>

    </div>
  );
}
