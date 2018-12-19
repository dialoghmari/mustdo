import {addNewTodo, deleteTodo, getTodos, getTodoWithId, updateTodo} from "../controllers/todoController";

const routes = (app) =>{

    app.route('/todo')
        .get((req,res, next)=> {
            //middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            next();
        }, getTodos)
        .post(addNewTodo);

    app.route('/todo/:todoId')

        .get(getTodoWithId)
        .put(updateTodo)

        .delete(deleteTodo);

}

export default routes;