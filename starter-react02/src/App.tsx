import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Filters from "./components/Filters";
import Card from "./components/Card";
import "@fortawesome/fontawesome-free/css/all.min.css";

import type { Bike } from "./interfaces/Bike";

const App = () => {
  const [bikes, setBikes] = useState<Bike[]>([]);
  const [filteredBikes, setFilteredBikes] = useState<Bike[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  useEffect(() => {
    fetch("https://challenges.brainster.tech/ajax_data/data.json")
      .then((res) => res.json())
      .then((data) => {
        setBikes(data.products);
        setFilteredBikes(data.products);
      });
  }, []);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    if (filter === "all") {
      setFilteredBikes(bikes);
    } else if (filter === "male" || filter === "female") {
      setFilteredBikes(bikes.filter((b) => b.gender === filter));
    } else {
      setFilteredBikes(bikes.filter((b) => b.brand === filter));
    }
  };

  const counts: Record<string, number> = {
    all: bikes.length,
    male: bikes.filter((b) => b.gender === "male").length,
    female: bikes.filter((b) => b.gender === "female").length,
    ...bikes.reduce((acc, b) => {
      acc[b.brand] = (acc[b.brand] || 0) + 1;
      return acc;
    }, {} as Record<string, number>),
  };

  return (
    <div>
      <Header />
      <main className="d-flex">
        <Filters
          onFilterChange={handleFilterChange}
          counts={counts}
          activeFilter={activeFilter}
        />
        <section className="main-content p-4">
          <div id="bike-container" className="d-flex flex-wrap gap-4">
            {filteredBikes.map((bike) => (
              <Card key={bike.id} bike={bike} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
