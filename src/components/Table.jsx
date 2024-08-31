import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { colleges as collegeData } from "../services/data";
import { sortByRating, sortByFees, sortByPlacement, sortByRanking } from "../utils/sortingFunctions";
import { filterByCollegeName } from "../utils/filteringFunctions";
import "../styles/Table.css";

const Table = ({ searchQuery, sortType, sortOrder }) => {
    const [displayedColleges, setDisplayedColleges] = useState([]);

    useEffect(() => {
        let filteredColleges = filterByCollegeName(collegeData, searchQuery);

        switch (sortType) {
            case "rating":
                filteredColleges = sortByRating(filteredColleges, sortOrder);
                break;
            case "fees":
                filteredColleges = sortByFees(filteredColleges, sortOrder);
                break;
            case "placement":
                filteredColleges = sortByPlacement(filteredColleges, sortOrder);
                break;
            case "ranking":
                filteredColleges = sortByRanking(filteredColleges, sortOrder);
                break;
            default:
                break;
        }

        setDisplayedColleges(filteredColleges.slice(0, 10));
    }, [searchQuery, sortType, sortOrder]);

    const fetchMoreData = () => {
        setDisplayedColleges((prevColleges) =>
            prevColleges.concat(collegeData.slice(prevColleges.length, prevColleges.length + 10))
        );
    };

    return (
        <InfiniteScroll
            dataLength={displayedColleges.length}
            next={fetchMoreData}
            hasMore={displayedColleges.length < collegeData.length}
            loader={<h4>Loading...</h4>}
        >
            <div className="table">
                <div className="table-header">
                    <span>CD Rank</span>
                    <span>Colleges</span>
                    <span>Course Fees</span>
                    <span>Placement</span>
                    <span>User Reviews</span>
                    <span>Ranking</span>
                </div>
                {displayedColleges.map((college, index) => (
                    <div className="table-row" key={index}>
                        <div>{college.rank}</div>
                        <div className="college-details">
                            <span className="name">{college.name}</span>
                            <span className="location">{college.location}</span>
                            {college.featured && <span className="featured">Featured</span>}
                            <div className="college-buttons">
                                <a href={college.brochureUrl} className="btn" target="_blank" rel="noopener noreferrer">Download Brochure</a>
                                <a href={college.websiteUrl} className="btn" target="_blank" rel="noopener noreferrer">Visit Website</a>
                            </div>
                        </div>
                        <div>{college.fees}</div>
                        <div>{college.placement}</div>
                        <div>{college.userReviews}</div>
                        <div>{college.ranking}</div>
                    </div>
                ))}
            </div>
        </InfiniteScroll>
    );
};

export default Table;
