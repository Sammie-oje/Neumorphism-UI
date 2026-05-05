import Button from "./components/Button.tsx";
import Nav from "./components/Nav.tsx";

function App() {
    return (
     
        <div className="space-x-2">
           <Nav/>
            <Button>Submit</Button>
            <Button variant={"primary"}>Submit</Button>
            <Button variant={"destructive"}>Cancel</Button>
            <Button variant={"warning"}>Warning</Button>
            <Button variant={"primary"} disabled>
                Warning
            </Button>
        </div>
    );
}

export default App;
