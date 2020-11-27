export default function SerachComp({ change }) {
    return (
        <div className="p-5 bg-white shadow-md flex rounded search">
            <input
                className="px-2 py-3 border-2 w-full focus:ring-2 focus:ring-blue-600 text-2xl"
                type="text"
                name="keyword"
                placeholder="Search Country"
                onChange={change} />
        </div>
    );
}