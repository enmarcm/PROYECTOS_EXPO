import { useContext } from "react";
import { FILTERS_CATEGORY } from "../constants/filters";
import { FiltersContext } from "../context/filters";

/**
 * CustomHook que se encarga de la logica de filtrado de la App
 * @returns {{function, function}}
 */
export default function useFilter() {
  const {filters, setFilters} = useContext(FiltersContext)

  //Filtrado
  const filterProducts = ({ products }) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (product.category === filters.category ||
          filters.category === FILTERS_CATEGORY.all)
      );
    });
  };

  return { filterProducts, setFilters , filters};
}