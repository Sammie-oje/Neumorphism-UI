import Button from "./components/Button.jsx";


function App() {
    return (
        <div className="space-x-2">
           <Button>Submit</Button>
            <Button variant={"primary"}>Submit</Button>
            <Button variant={"destructive"}>Cancel</Button>
            <Button variant={"warning"}>Warning</Button>
        </div>
    );
}

export default App;
