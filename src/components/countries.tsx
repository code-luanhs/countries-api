import { motion } from "motion/react";
import data from "../assets/data/data.json";
import { Link } from "react-router";

type Country = (typeof data)[number];
type CountriesProps = {
    countries: Country[];
}

export function Countries({ countries }: CountriesProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-16 gap-y-16 lg:gap-y-20 lg:gap-16 min-[375px]:px-10 lg:px-0">
            {countries.map((country, index) => (
                <motion.div
                    key={country.alpha3Code}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                        duration: 0.4,
                        delay: (index % 4) * 0.06,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="bg-white dark:bg-blue-900 shadow-md rounded-sm overflow-hidden"
                >
                    <Link to={`/country/${country.alpha3Code}`}>
                        <img
                            src={country.flags.svg}
                            alt={country.name}
                            fetchPriority={index === 0 ? "high" : "auto"}
                            loading={index === 0 ? "eager" : "lazy"}
                            className="w-full h-60 object-cover"
                        />

                        <div className="pt-4 px-4 pb-10 space-y-4">
                            <strong className="block">{country.name}</strong>

                            <div className="space-y-1 text-sm">
                                <p><b>Population:</b> {country.population.toLocaleString('en-US')}</p>
                                <p><b>Region:</b> {country.region}</p>
                                <p><b>Capital:</b> {country.capital}</p>
                            </div>
                        </div>
                    </Link>
                </motion.div>
            ))}
        </div>
    )
}
