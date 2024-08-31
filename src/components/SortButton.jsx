import React from 'react';
import '../styles/SortButton.css'; // Import the new CSS file for the sort button styles

const SortButton = ({ setSortType, setSortOrder }) => {
    const handleSortChange = (e) => {
        const [type, order] = e.target.value.split('-');
        setSortType(type);
        setSortOrder(order);
    };

    return (
        <div className="sort-buttons">
            <select onChange={handleSortChange}>
                <option value="rating-asc">Sort by Rating (Low to High)</option>
                <option value="rating-desc">Sort by Rating (High to Low)</option>
                <option value="fees-asc">Sort by Fees (Low to High)</option>
                <option value="fees-desc">Sort by Fees (High to Low)</option>
                <option value="placement-asc">Sort by Placement (Low to High)</option>
                <option value="placement-desc">Sort by Placement (High to Low)</option>
                <option value="ranking-asc">Sort by Ranking (Low to High)</option>
                <option value="ranking-desc">Sort by Ranking (High to Low)</option>
                {/* Add more sorting options if needed */}
            </select>
        </div>
    );
};

export default SortButton;
