import { useState } from "react";
import data from "../assets/data/data.json";
import { Countries } from "../components/countries";
import { Filter } from "../components/filter";
import { Search } from "../components/search";

export function HomePage() {
    const [search, setSearch] = useState("");
    const [region, setRegion] = useState("");

    const filteredCountries = data.filter(country => {
        const matchesSearch = country.name.toLowerCase().includes(search.toLowerCase());
        const matchesRegion = region === "" || country.region === region;

        return matchesSearch && matchesRegion;
    });

    return (
        <main className="py-10">
            <div className="container space-y-10">
                <div className="flex items-center justify-between gap-x-4 gap-y-10 flex-wrap">
                    <Search search={search} onSearchChange={setSearch} />
                    <Filter region={region} onRegionChange={setRegion} />
                </div>

                <Countries countries={filteredCountries} />
            </div>
        </main>
    )
}
