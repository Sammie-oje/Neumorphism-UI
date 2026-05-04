import Button from "./components/Button.jsx";


function App() {
    return (
        <div className="space-x-2">
            <Button variant={"primary"}>Submit</Button>
            <Button variant={"destructive"}>Cancel</Button>
        </div>
    );
}

export default App;
