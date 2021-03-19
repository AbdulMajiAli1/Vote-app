import { Seed } from './seed';
export const store = {
	state: {
		Seed
	},
	setActiveCol(colId) {
		this.state.Seed.map(col => (col.id == colId ? (col.active = true) : (col.active = false)));
		console.log(this.state.Seed);
	},
	getActiveCol(colId) {
		return this.state.Seed.find(col => col.active === true);
	},
	addTask(tastTitle) {
		const tasks = this.getActiveCol().tasks;
		tasks.push({ id: tasks.length + 1, title: tastTitle, edit: false });
	},
	editTask(colId, taskId) {
		const index = this.state.Seed.findIndex(col => col.id === colId);
		const tasks = this.state.Seed[index].tasks;
		const taskIndex = tasks.findIndex(task => task.id === taskId);
		tasks[taskIndex].edit = true;
		// set the inactive edits to false
		tasks.map(
			task => (task.id === taskId ? (task.edit = true) : (task.edit = false))
		);
	},
	updateTask(colId, taskId, taskTitle) {
		const col = this.state.Seed.find(col => col.id === colId);
		const taskIndex = col.tasks.findIndex(task => task.id === taskId);
		col.tasks[taskIndex].title = taskTitle;
		col.tasks[taskIndex].edit = false;
	},
	deleteTask(colId, taskId) {
		const col = this.state.Seed.find(col => col.id === colId);
		const taskIndex = col.tasks.findIndex(task => task.id === taskId);
		col.tasks.splice(taskIndex, 1);
	}

};