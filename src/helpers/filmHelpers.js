export function filterFilmsByDirector(list, director) {
    if (!director || !list || !Array.isArray(list)) {
        return list || [];
    }

    return list.filter(film => film.director === director);
}

export function getListOf(list, prop) {
    if (!list || !Array.isArray(list)){
        return [];
    }
    const uniqueValues = new Set();

    list.forEach(item => {
        if(item[prop]) {
            uniqueValues.add(item[prop]);
        }
    });

    return Array.from(uniqueValues);
}

export function getFilmStats(list) {
    if (!list || !Array.isArray(list) || list.length === 0) {
        return {
            acc_score: 0,
            avg_score: 0,
            total: 0,
            latest: 0
        };
    }

    const total = list.length;

    const acc_score = list.reduce((sum, film) => {
        const score = parseInt(film.rt_score) || 0;
        return sum + score;
    }, 0);

    const avg_score = Math.round(acc_score / total);

    const latest = Math.max(...list.map(film => parseInt(film.release_date) || 0));

    return {
        acc_score,
        avg_score,
        total,
        latest
    };
}
