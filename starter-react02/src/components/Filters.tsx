import "./Filters.css";

interface Props {
  onFilterChange: (filter: string) => void;
  counts: Record<string, number>;
  activeFilter: string;
}

const Filters = ({ onFilterChange, counts, activeFilter }: Props) => {
  const filters = {
    general: [{ label: "Show All", value: "all" }],
    gender: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
    ],
    brands: [
      { label: "LE GRAND BIKES", value: "LE GRAND BIKES" },
      { label: "KROSS", value: "KROSS" },
      { label: "EXPLORER", value: "EXPLORER" },
      { label: "VISITOR", value: "VISITOR" },
      { label: "PONY", value: "PONY" },
      { label: "FORCE", value: "FORCE" },
      { label: "E-BIKES", value: "E-BIKES" },
      { label: "IDEAL", value: "IDEAL" },
    ],
  };

  const renderFilterGroup = (
    title: string,
    group: { label: string; value: string }[]
  ) => (
    <>
      {title && <h6 className="filter-group-title">{title}</h6>}
      {group.map((f) => (
        <div key={f.value} className="filters-class">
          <a
            href="#"
            className={`filter-link ${
              activeFilter === f.value ? "text-orange fw-bold" : "text-dark"
            }`}
            onClick={(e) => {
              e.preventDefault();
              onFilterChange(f.value);
            }}
          >
            {f.label}
          </a>
          <span className="counter">{counts[f.value] ?? 0}</span>
        </div>
      ))}
    </>
  );

  return (
    <aside className="sidebar">
      <h4 className="bike-headline">Bikes</h4>
      <h5 className="filter-by">Filter by:</h5>
      <hr />
      {renderFilterGroup("", filters.general)}
      <hr />
      {renderFilterGroup("Gender", filters.gender)}
      <hr />
      {renderFilterGroup("Brands", filters.brands)}
    </aside>
  );
};

export default Filters;
