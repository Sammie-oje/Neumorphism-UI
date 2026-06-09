import Button from "./components/Button.tsx";
import Nav from "./components/Nav.tsx";
import Input from "./components/Input.tsx";
import NeuSwitch from "./components/Switch.tsx";
import NeuSlider from "./components/Slider.tsx";
import NeuCheckbox from "./components/Checkbox.tsx";
import NeuProgress from "./components/Progress.tsx";
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
                        <NeuSlider variant={"secondary"} />
                    </CardFooter>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Progress bars</CardTitle>
                        <CardDescription>
                            Simple vertical/horizontal bars
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 flex h-36 gap-4">
                        <NeuProgress
                            orientation={"vertical"}
                            max={100}
                            value={25}
                        />
                        <NeuProgress
                            orientation={"vertical"}
                            max={100}
                            value={50}
                        />
                        <NeuProgress
                            orientation={"vertical"}
                            max={100}
                            value={75}
                        />
                    </CardContent>
                    <CardContent className="space-y-4 ">
                        <NeuProgress
                            variant={"secondary"}
                            max={100}
                            value={25}
                        />
                        <NeuProgress max={100} value={50} />
                        <NeuProgress max={100} value={75} />
                    </CardContent>
                    <CardFooter>
                        <Input></Input>
                    </CardFooter>
                </Card>
            </div>
        </>
    );
}

export default App;
