// filters films by director name with safety checks
export function filterFilmsByDirector(list, director) {
    // returns original list if director is empty or list is invalid
    if (!director || !list || !Array.isArray(list)) {
        return list || [];
    }

    // filters films that match the director name
    return list.filter(film => film.director === director);
}

// extracts unique values from a specific property in a list
export function getListOf(list, prop) {
    // returns empty array if list is invalid
    if (!list || !Array.isArray(list)){
        return [];
    }
    // uses set to store unique values
    const uniqueValues = new Set();

    // iterates through list and adds property values to set
    list.forEach(item => {
        if(item[prop]) {
            uniqueValues.add(item[prop]);
        }
    });

    // converts set back to array
    return Array.from(uniqueValues);
}

// calculates statistics for a list of films
export function getFilmStats(list) {
    // returns default stats if list is empty or invalid
    if (!list || !Array.isArray(list) || list.length === 0) {
        return {
            acc_score: 0,
            avg_score: 0,
            total: 0,
            latest: 0
        };
    }

    // calculates total number of films
    const total = list.length;

    // sums up all rotten tomatoes scores
    const acc_score = list.reduce((sum, film) => {
        const score = parseInt(film.rt_score) || 0;
        return sum + score;
    }, 0);

    // calculates average score rounded to nearest integer
    const avg_score = Math.round(acc_score / total);

    // finds the latest release year
    const latest = Math.max(...list.map(film => parseInt(film.release_date) || 0));

    // returns calculated statistics
    return {
        acc_score,
        avg_score,
        total,
        latest
    };
}