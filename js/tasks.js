// Массив с задачами
let tasks = [];
// Устанавливает начальные задачи
export function initializeTasks(initialTasks) {
    tasks = [...initialTasks];
}
// Возвращает копию массива задач
export function getTasks() {
    return [...tasks];
}
// Добавляет новую задачу
export function addTask(text, priority = 'medium') {
    const newTask = {
        id: Date.now() + Math.random(),
        text: text.trim(),
        completed: false,
        priority: priority,
        createdAt: new Date().toISOString(),
    };
    tasks.push(newTask);
    return newTask;
}
// Обновляет приоритет задачи
export function updateTaskPriority(id, newPriority) {
    const task = tasks.find(t => t.id == id);
    if (task) {
        task.priority = newPriority;
    }
}
// Переключает статус задачи (выполнено/не выполнено)
export function toggleTask(id) {
    const task = tasks.find(t => t.id == id);
    if (task) {
        task.completed = !task.completed;
    }
}
// Удаляет задачу по ID
export function deleteTask(id) {
    tasks = tasks.filter(t => t.id != id);
}
// Удаляет все выполненные задачи
export function clearCompleted() {
    tasks = tasks.filter(t => !t.completed);
}
// Возвращает отфильтрованный список задач
export function getFilteredTasks(filter) {
    switch (filter) {
        case 'active':
            return tasks.filter(t => !t.completed);
        case 'completed':
            return tasks.filter(t => t.completed);
        case 'all':
        default:
            return [...tasks];
    }
}