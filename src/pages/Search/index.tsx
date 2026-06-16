import BottomNav from "../../components/navigation/BottomNav";
import SearchBar from "../../components/search/SearchBar";
import FilterBar from "../../components/filters/FilterBar";
import ModCard from "../../components/cards/ModCard";

export default function Search() {
  return (
    <div className="min-h-screen bg-[#0b0f14] text-white pb-20">
      
      {/* Top Bar */}
      <div className="p-3">
        <SearchBar />
      </div>

      {/* Filters */}
      <div className="px-3">
        <FilterBar />
      </div>

      {/* Results */}
      <div className="p-3 space-y-3">
        <ModCard />
        <ModCard />
        <ModCard />
      </div>

      <BottomNav />
    </div>
  );
}
