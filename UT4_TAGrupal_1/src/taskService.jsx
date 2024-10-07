//Get Tasks
export const getTasks = async () => {
    try {
        const response = await fetch("http://localhost:3000/api/tasks");
        if (response.ok) {
            let tasks = await response.json();
            console.log(tasks);
            return tasks;
        }
    }
    catch (error) {
        console.log(error);
        return null;
    }
}

//Post Task
export const postTask = async (task) => {
    try {
        const response = await fetch("http://localhost:3000/api/tasks", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(task)
        });
    }
    catch (error) {
        console.log(error);
    }
}

//Put Task
export const putTask = async (task) => {
    try {
        const response = await fetch(`http://localhost:3000/api/tasks/${task.id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(task)
        });
        if (response.ok) {
            let tasks = await response.json();
            console.log(tasks);
        }
    }
    catch (error) {
        console.log(error);
    }
}

//Delete Task
export const deleteTask = async (task) => {
    try {
        const response = await fetch(`http://localhost:3000/api/tasks/${task.id}`, {
            method: 'DELETE'
        });
    }
    catch (error) {
        console.log(error);
    }
}