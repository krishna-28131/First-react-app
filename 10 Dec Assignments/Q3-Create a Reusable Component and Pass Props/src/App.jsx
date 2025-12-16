import MessageCard from "./MessageCard";

function App() {
  return (
    <div>
      <MessageCard
        title="Welcome"
        message="This is the first message card"
      />

      <MessageCard
        title="React Props"
        message="Props allow data to be passed to components"
      />

      <MessageCard
        title="Reusable Component"
        message="This card is reused with different data"
      />

      <MessageCard
        title="Good Job"
        message="You have successfully completed Q3"
      />
    </div>
  );
}

export default App;
