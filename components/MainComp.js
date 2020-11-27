import Link from 'next/link';

export default function MainContent({ data }) {
    return (
        <div className="grid grid-cols-3 gap-5 box-content">
            {
                data.map((data, index) => {
                    return (
                        <div key={index} className="main-card w-full p-3 rounded flex justify-center items-center flex-col mt-8 shadow-lg bg-white hover:bg-gray-300">
                            <h1 className="text-3xl uppercase border-b-4  mb-5 font-bold h-72 font-medium main-name-country">{data.name}
                            </h1>
                            <div className="w-full h-full p-2 main-box-img">
                                <img
                                    src={data.flag}
                                    alt={data.name}
                                    width="100%"
                                    height="100%" />
                            </div>
                            <h3 className="text-2xl uppercase text-gray-500 mb-5 mt-10 font-medium main-population">
                                Population : <span className="text-green-500">{data.population}</span>
                            </h3>
                            <Link href={`Detail/${data.alpha3Code}`}>
                                <div className="bg-green-400 px-5 py-3 text-2xl font-bold text-white uppercase rounded tracking-wider mb-2 cursor-pointer hover:bg-green-700 btn-detail">Detail</div>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    );
}