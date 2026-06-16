export default function ModCard() {
  return (
    <div className="bg-[#121826] p-3 rounded-xl">
      
      <div className="h-24 bg-gradient-to-r from-purple-900 to-blue-900 rounded-lg mb-2" />

      <div className="text-lg font-semibold">Sodium</div>
      <div className="text-xs text-gray-400">
        Performance optimization mod
      </div>

      <div className="flex justify-between mt-3">
        <button className="px-3 py-1 bg-green-600 rounded-lg text-sm">
          +Pack
        </button>

        <button className="px-3 py-1 bg-blue-600 rounded-lg text-sm">
          Download
        </button>
      </div>
    </div>
  );
}
