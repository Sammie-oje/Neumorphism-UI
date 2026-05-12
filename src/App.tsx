import Button from "./components/Button.tsx";
import Nav from "./components/Nav.tsx";
import NeuSwitch from "./components/Switch.tsx";
import {
    Card,
    CardTitle,
    CardDescription,
    CardHeader,
    CardContent,
    CardFooter
} from "./components/Card.tsx";

function App() {
    return (
        <>
            <div className="space-x-2">
                <Nav />
                <Button>Submit</Button>
                <Button variant={"primary"}>Submit</Button>
                <Button variant={"destructive"}>Cancel</Button>
                <Button variant={"warning"}>Warning</Button>
                <Button variant={"primary"} disabled>
                    Warning
                </Button>
            </div>

            <div className="m-8">
                <Card>
                    <CardHeader>
                        <CardTitle>This is my title</CardTitle>
                        <CardDescription>
                            This is the price of my product
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul>
                            <li>This is one benefit</li>
                            <li>This is one benefit</li>
                            <li>This is one benefit</li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <NeuSwitch />
                    </CardFooter>
                </Card>
            </div>
        </>
    );
}

export default App;
