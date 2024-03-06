// ItemList.js
"use client"
import { connect } from "react-redux";
import { setFilteredItems } from "../actions";

const ItemList = ({ items, filteredItems, setFilteredItems }) => {
  const handleFilter = (filterValue) => {
    // Filterlash logikasi
    const filtered = items.filter((item) => item.name.includes(filterValue));
    setFilteredItems(filtered);
  };

  return (
    <div>
      <input type="text" onChange={(e) => handleFilter(e.target.value)} />
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.items,
  filteredItems: state.filteredItems,
});

export default connect(mapStateToProps, { setFilteredItems })(ItemList);
