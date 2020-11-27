import Head from "next/head";

// components
import TitleComp from "../../components/TitleComp";

export const getServerSideProps = async ({ params }) => {
    const detail = await fetch(`https://restcountries.eu/rest/v2/alpha/${params.id}`)
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.error(err));

    return {
        props: {
            detail,
        }
    }
}

export default function Detail({ detail }) {
    return (
        <div className="bg-gray-300">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="blog next js" />
                <meta name="keywords" content="next javascript react ssr" />
                <meta name="author" content="Rudi widodo" />
                <title>Detail | {detail.name}</title>
            </Head>

            <TitleComp title="Detail" subtitle="Country" />

            <div className="w-full grid grid-cols-2 gap-5 rounded-2xl mx-auto p-10 box-detail">

                <div className="box-detail-left bg-white shadow-md">
                    <div className="p-3">
                        <h1 className="text-center text-3xl font-bold text-green-500 uppercase">{detail.name}</h1>
                    </div>

                    <div className="w-full p-5">
                        <img src={detail.flag} alt={detail.name} className="w-4/5 h-4/5 rounded mx-auto" />
                    </div>

                    <div className="grid grid-cols-2 text-2xl uppercase font-medium gap-3 p-5 mt-2">
                        <p className="text-gray-500">Name</p>
                        <p className="text-green-500">{detail.name}</p>
                    </div>

                    <div className="grid grid-cols-2 text-2xl uppercase font-medium gap-3 p-5 mt-2">
                        <p className="text-gray-500">Population</p>
                        <p className="text-green-500">{detail.population}</p>
                    </div>
                </div>

                <div className="box-detail-right">
                    <div className="grid grid-cols-2 text-2xl uppercase font-medium gap-5 shadow-md rounded bg-white p-5 mt-5">
                        <p className="text-gray-500">Area</p>
                        <p className="text-green-500">{detail.area}</p>
                    </div>

                    <div className="grid grid-cols-2 text-2xl uppercase font-medium gap-5 shadow-md rounded bg-white p-5 mt-5">
                        <p className="text-gray-500">capital</p>
                        <p className="text-green-500">{detail.capital}</p>
                    </div>

                    <div className="grid grid-cols-2 text-2xl uppercase font-medium gap-5 shadow-md rounded bg-white p-5 mt-5">
                        <p className="text-gray-500">Region</p>
                        <p className="text-green-500">{detail.region}</p>
                    </div>

                    <div className="grid grid-cols-2 text-2xl uppercase font-medium gap-5 shadow-xl bg-white p-5 mt-5">
                        <p className="text-gray-500">Sub Region</p>
                        <p className="text-green-500">{detail.subregion}</p>
                    </div>

                    <div className="grid grid-cols-2 text-2xl uppercase font-medium gap-5 shadow-xl bg-white p-5 mt-5">
                        <p className="text-gray-500">Time Zone</p>
                        <p className="text-green-500">{detail.timezones}</p>
                    </div>

                    <div className="grid grid-cols-2 text-2xl uppercase font-medium gap-5 shadow-xl bg-white p-5 mt-5">
                        <p className="text-gray-500">Numeric Code</p>
                        <p className="text-green-500">{detail.numericCode}</p>
                    </div>

                    <div className="detail-languages text-center text-2xl uppercase font-medium gap-5 shadow-xl bg-white p-5 mt-5">
                        <p className="text-gray-500">Languages</p>
                        {detail.languages.map((lang, index) => {
                            return <p key={index} className="text-green-500">{lang.name}</p>
                        })}
                    </div>
                </div>

            </div>
        </div>
    );
}