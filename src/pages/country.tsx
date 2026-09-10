import countries from "../assets/data/data.json";
import { Link, Navigate, useParams } from "react-router";

export function CountryPage() {
    const { id } = useParams();
    const country = countries.find((country) => country.alpha3Code === id);

    if (!country) {
        return <Navigate to="/404" replace />;
    }

    return (
        <main className="py-10 lg:py-16">
            <div className="container space-y-14 lg:space-y-16">
                <div>
                    <Link to="/" className="h-10 pl-6 px-8 flex items-center gap-2 text-sm rounded-md bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)] dark:bg-blue-900 dark:shadow-[0_2px_8px_rgba(0,0,0,0.08)] w-max">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4" fill="currentColor" viewBox="0 0 256 256"><path d="M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"></path></svg>
                        <span>Back</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-20">
                    <div className="max-w-140 mx-auto">
                        <img src={country.flags.svg} alt={country.name} fetchPriority="high" />
                    </div>

                    <div>
                        <h2 className="text-2xl lg:text-3xl font-extrabold">{country.name}</h2>

                        <ul className="mt-6 mb-10 grid grid-cols-1 lg:grid-cols-2 gap-2.5">
                            <li><b>Native Name:</b> {country.nativeName}</li>
                            <li><b>Top Level Domain:</b> {country.topLevelDomain?.join(", ")}</li>
                            <li><b>Population:</b> {country.population.toLocaleString('en-US')}</li>
                            {country.currencies?.length && (
                                <li><b>Currencies:</b> {country.currencies.map(currency => currency.code).join(", ")}</li>
                            )}
                            <li><b>Region:</b> {country.region}</li>
                            {country.languages?.length && (
                                <li><b>Languages:</b> {country.languages.map(language => language.name).join(", ")}</li>
                            )}
                            <li className="lg:col-span-2"><b>Sub Region:</b> {country.subregion}</li>
                            <li className="lg:col-span-2"><b>Capital:</b> {country.capital}</li>
                        </ul>

                        {country.borders?.length && (
                            <div className="flex items-center flex-wrap gap-3">
                                <b>Border Countries:</b>

                                <div className="flex items-center flex-wrap gap-1.5">
                                    {country.borders.map((border) => {
                                        const borderCountry = countries.find((country) => country.alpha3Code === border);

                                        return (
                                            <Link key={border} to={`/country/${border}`} className="px-4 py-1 text-sm bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)] dark:bg-blue-900 dark:shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                                                {borderCountry?.name}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}
