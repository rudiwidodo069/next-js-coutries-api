export default function TitleComp({ title, subtitle }) {
    return (
        <div className="full-width text-center p-4 cursor-pointer">
            <h1 className="text-4xl font-bold text-gray-500 tracking-wider uppercase">
                {title}
                <span className="text-green-500 ml-3 uppercase">{subtitle}</span>
            </h1>
        </div>
    );
}