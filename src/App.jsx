
import React, { useState } from "react";
import Table from "./components/Table";
import SearchBar from "./components/SearchBar";
import SortButton from "./components/SortButton";
import Footer from "./components/Footer";
import "./styles/App.css";

const App = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [sortType, setSortType] = useState("ranking");
    const [sortOrder, setSortOrder] = useState("asc");

    return (
        <div className="container">
            <SearchBar setSearchQuery={setSearchQuery} />
            <SortButton setSortType={setSortType} setSortOrder={setSortOrder} />
            <Table searchQuery={searchQuery} sortType={sortType} sortOrder={sortOrder} />
            <Footer />
        </div>
    );
};

export default App;
