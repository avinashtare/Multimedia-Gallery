import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../../features/searchSlice";

function Tabs() {
  const selector = useSelector((state) => state.search);
  const dispatch = useDispatch();

  return (
    <div className="w-full bg-slate-900 px-4 sm:px-6 py-4">
      <div className="flex gap-2 max-w-3xl mx-auto bg-slate-800/50 p-1.5 rounded-xl backdrop-blur-sm border border-slate-700">
        {selector.tabs.map((tabName) => (
          <button
            key={tabName}
            onClick={() => dispatch(setActiveTab(tabName))}
            className={`flex-1 px-4 sm:px-6 py-2.5 sm:py-3 font-medium rounded-lg transition-all capitalize ${
              selector.activeTab === tabName
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/50"
                : "text-slate-300 hover:text-white hover:bg-slate-700/50"
            }`}
          >
            {tabName}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Tabs;
