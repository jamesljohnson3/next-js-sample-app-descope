import { HiMagnifyingGlass } from 'react-icons/hi2';
import {init} from 'commandbar';
if (typeof window !== "undefined") {
  init("c2025881");
}

const loggedInUserId = "user123"; // example
window.CommandBar.boot(loggedInUserId), { formFactor: { type: 'inline', rootElement: 'commandbar-inline-root' } };
window.CommandBar.setFormFactor({ type: 'inline', rootElement: 'commandbar-inline-root' });

const Search = () => (
	<div className="sticky top-0 bg-white py-2 mb-3">
		<form className="flex flex-col flex-1 gap-y-4">
			<div className="flex flex-1 relative">
				<HiMagnifyingGlass className="w-5 h-5 left-2.5 top-2 absolute flex items-center" />
				<input
					type="search"
					placeholder="Search"
					className="w-full flex items-center pl-10 pr-4 text-sm placeholder:text-sm placeholder:font-medium py-2 bg-slate-100 border-slate-100 placeholder:text-slate-700 rounded-full"
				/><div id="commandbar-inline-root" style={{ width: 385 }}></div>
				<button className="sr-only bg-slate-900 font-bold text-white px-4 py-2 text-sm rounded-full">
					Tweet
				</button>
			</div>
		</form>
	</div>
);

export default Search;
