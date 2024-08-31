// sortingFunctions.js

export const sortByRating = (colleges, order) => {
    return colleges.sort((a, b) => {
        const ratingA = parseFloat(a.userReviews) || 0; // Default to 0 if NaN
        const ratingB = parseFloat(b.userReviews) || 0; // Default to 0 if NaN
        if (order === 'asc') {
            return ratingA - ratingB;
        } else {
            return ratingB - ratingA;
        }
    });
};

export const sortByFees = (colleges, order) => {
    return colleges.sort((a, b) => {
        const feeA = parseInt(a.fees.replace(/[^0-9]/g, ''), 10);
        const feeB = parseInt(b.fees.replace(/[^0-9]/g, ''), 10);
        if (order === 'asc') {
            return feeA - feeB;
        } else {
            return feeB - feeA;
        }
    });
};

// Add more sorting functions if needed
// Example for sorting by Placement or Ranking
export const sortByPlacement = (colleges, order) => {
    return colleges.sort((a, b) => {
        const placementA = parseFloat(a.placement) || 0; // Default to 0 if NaN
        const placementB = parseFloat(b.placement) || 0; // Default to 0 if NaN
        if (order === 'asc') {
            return placementA - placementB;
        } else {
            return placementB - placementA;
        }
    });
};

export const sortByRanking = (colleges, order) => {
    return colleges.sort((a, b) => {
        const rankingA = parseInt(a.ranking, 10);
        const rankingB = parseInt(b.ranking, 10);
        if (order === 'asc') {
            return rankingA - rankingB;
        } else {
            return rankingB - rankingA;
        }
    });
};
