export const filterByCollegeName = (colleges, query) => {
    return colleges.filter(college =>
        college.name.toLowerCase().includes(query.toLowerCase())
    );
};
