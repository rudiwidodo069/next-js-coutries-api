import { memo, useState } from "react";
import Head from 'next/head';

// component 
import TitleComp from '../components/TitleComp';
import MainContent from '../components/MainComp';
import SearchComp from '../components/Search';
import ErrorComp from "../components/ErrorCopm";

export const getStaticProps = async () => {
  const countries = await fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(res => res)
    .catch(err => console.log(err));

  return {
    props: {
      countries,
    }
  }
}

export default function IndexPage({ countries }) {
  const [dataCountries, setDataCountries] = useState(countries);
  const [error, setError] = useState(false);

  const handleSearch = e => {
    const keyword = e.target.value;
    const data = countries.filter(coutries => {
      return coutries.name.toLowerCase().includes(keyword.toLowerCase());
    });

    if (data.length > 0) {
      setDataCountries(data);
      setError(false);
    } else {
      setDataCountries([]);
      setError(true);
    }
  }

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="blog next js" />
        <meta name="keywords" content="next javascript react ssr" />
        <meta name="author" content="Rudi widodo" />
        <title>next project | Rudi widodo</title>
      </Head>

      <div className="full-width p-10 bg-gray-100 containers">

        <div className="fixed  bg-gray-100 top-0 left-0 right-0 pt-0 px-5 nav">
          <TitleComp title="All" subtitle="Country" />
          <MemoSearch change={handleSearch} />
        </div>

        <MemoCard data={dataCountries} />
        {error && <ErrorComp />}
      </div>

    </div>
  );
}

const MemoCard = memo(MainContent);
const MemoSearch = memo(SearchComp);