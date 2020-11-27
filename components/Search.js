export default function SerachComp({ change }) {
    return (
        <div className="w-4/5 p-5 bg-white shadow-md rounded m-auto flex search">
            <input
                className="px-2 py-3 border-2 w-full focus:ring-2 focus:ring-blue-600 text-2xl"
                type="text"
                name="keyword"
                placeholder="Search Country"
                onChange={change} />
        </div>
    );
}