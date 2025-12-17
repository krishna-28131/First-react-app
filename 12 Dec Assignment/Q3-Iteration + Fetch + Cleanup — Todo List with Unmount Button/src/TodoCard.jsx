function TodoCard({ userId, title, completed }) {
  return (
    <div style={{ border: "1px solid gray", margin: "8px", padding: "8px" }}>
      <p><b>User ID:</b> {userId}</p>
      <p><b>Title:</b> {title}</p>
      <p><b>Completed:</b> {completed ? "Yes" : "No"}</p>
    </div>
  );
}

export default TodoCard;
