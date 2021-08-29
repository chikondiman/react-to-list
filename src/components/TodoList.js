function TodoList({ todos })
{
return (
<ul>

{todos.map(todo => (
    <Todo />
))}


</ul>


);
}

