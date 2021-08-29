function TodoList({ todos })
{
return (
<ul>

{todos.map(todo => (
    <Todo key={todo.id} todo={todo} />
))}


</ul>


);
}

