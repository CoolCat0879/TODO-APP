// Ключи для хранения в localStorage и sessionStorage
const TASKS_KEY = 'todo_tasks';
const FILTER_KEY = 'todo_filter';
// Загружает задачи из localStorage
export function loadTasks() {
    const stored = localStorage.getItem(TASKS_KEY);
    if (!stored) return [];
    try {
        return JSON.parse(stored);
    } catch (e) {
        return [];
    }
}
// Сохраняет задачи в localStorage
export function saveTasks(tasks) {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}
// Загружает выбранный фильтр из sessionStorage
export function loadFilter() {
    return sessionStorage.getItem(FILTER_KEY) || 'all';
}
// Сохраняет выбранный фильтр в sessionStorage
export function saveFilter(filter) {
    sessionStorage.setItem(FILTER_KEY, filter);
}
