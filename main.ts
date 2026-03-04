// ....................1....................
type UserTuple = [string, number];
const userData: UserTuple = ["Олексій", 25];

// ....................2.....................
function filterByProperty<T, K extends keyof T>(arr: T[], key: K, value: T[K]): T[] {
  return arr.filter(item => item[key] === value);
}

// ....................3....................
function findByProperty<T, K extends keyof T>(arr: T[], key: K, value: T[K]): T | undefined {
  return arr.find(item => item[key] === value);
}

// ....................4....................
function calculateAverage<T, K extends keyof T>(arr: T[], key: K): number {
  if (arr.length === 0) return 0;
  const sum = arr.reduce((acc, item) => {
    const val = item[key];
    return acc + (typeof val === 'number' ? val : 0);
  }, 0);
  return sum / arr.length;
}