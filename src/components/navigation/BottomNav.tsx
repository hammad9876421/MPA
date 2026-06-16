import { Link } from "react-router-dom";

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0f141d] border-t border-gray-800 flex justify-around p-3 text-xs">
      
      <Link to="/">Search</Link>
      <Link to="/pack">Pack</Link>
      <Link to="/downloads">Downloads</Link>
      <Link to="/settings">Settings</Link>

    </div>
  );
}
