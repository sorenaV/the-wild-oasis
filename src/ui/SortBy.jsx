import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get("setBy") || "";

  function handleClick(e) {
    searchParams.set("setBy", e.target.value);
    setSearchParams(searchParams);
  }
  return (
    <Select
      options={options}
      value={sortBy}
      handleClick={handleClick}
      type="white"
    />
  );
}

export default SortBy;
