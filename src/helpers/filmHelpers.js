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