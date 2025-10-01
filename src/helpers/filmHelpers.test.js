import { filterFilmsByDirector, getListOf, getFilmStats } from './filmHelpers';

describe('filmHelpers', () => {
  const mockFilms = [
    { id: '1', title: 'Movie 1', director: 'Director A', rt_score: '95', release_date: '2020' },
    { id: '2', title: 'Movie 2', director: 'Director B', rt_score: '88', release_date: '2021' },
    { id: '3', title: 'Movie 3', director: 'Director A', rt_score: '92', release_date: '2019' },
    { id: '4', title: 'Movie 4', director: 'Director C', rt_score: '85', release_date: '2022' }
  ];

  describe('filterFilmsByDirector', () => {
    test('filters films by director', () => {
      const result = filterFilmsByDirector(mockFilms, 'Director A');
      expect(result).toHaveLength(2);
      expect(result[0].title).toBe('Movie 1');
      expect(result[1].title).toBe('Movie 3');
    });

    test('returns all films when director is empty', () => {
      const result = filterFilmsByDirector(mockFilms, '');
      expect(result).toHaveLength(4);
    });

    test('returns all films when director is null', () => {
      const result = filterFilmsByDirector(mockFilms, null);
      expect(result).toHaveLength(4);
    });

    test('handles empty array', () => {
      const result = filterFilmsByDirector([], 'Director A');
      expect(result).toHaveLength(0);
    });

    test('handles null/undefined input', () => {
      const result = filterFilmsByDirector(null, 'Director A');
      expect(result).toHaveLength(0);
    });
  });

  describe('getListOf', () => {
    test('extracts unique directors', () => {
      const result = getListOf(mockFilms, 'director');
      expect(result).toEqual(['Director A', 'Director B', 'Director C']);
    });

    test('extracts unique titles', () => {
      const result = getListOf(mockFilms, 'title');
      expect(result).toEqual(['Movie 1', 'Movie 2', 'Movie 3', 'Movie 4']);
    });

    test('handles empty array', () => {
      const result = getListOf([], 'director');
      expect(result).toHaveLength(0);
    });

    test('handles null/undefined input', () => {
      const result = getListOf(null, 'director');
      expect(result).toHaveLength(0);
    });
  });

  describe('getFilmStats', () => {
    test('calculates correct stats for all films', () => {
      const result = getFilmStats(mockFilms);
      expect(result.total).toBe(4);
      expect(result.acc_score).toBe(360); // 95 + 88 + 92 + 85
      expect(result.avg_score).toBe(90); // 360 / 4
      expect(result.latest).toBe(2022);
    });

    test('calculates correct stats for filtered films', () => {
      const filteredFilms = filterFilmsByDirector(mockFilms, 'Director A');
      const result = getFilmStats(filteredFilms);
      expect(result.total).toBe(2);
      expect(result.acc_score).toBe(187); // 95 + 92
      expect(result.avg_score).toBe(94); // 187 / 2
      expect(result.latest).toBe(2020);
    });

    test('handles empty array', () => {
      const result = getFilmStats([]);
      expect(result.total).toBe(0);
      expect(result.acc_score).toBe(0);
      expect(result.avg_score).toBe(0);
      expect(result.latest).toBe(0);
    });

    test('handles null/undefined input', () => {
      const result = getFilmStats(null);
      expect(result.total).toBe(0);
      expect(result.acc_score).toBe(0);
      expect(result.avg_score).toBe(0);
      expect(result.latest).toBe(0);
    });
  });
});
