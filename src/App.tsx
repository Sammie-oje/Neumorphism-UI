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
import { TabsRoot, TabsList, TabsTab, TabsPanel } from "./components/Tabs.tsx";
import { SkipBack, SkipForward, Play, Pause, Minus, Plus } from "lucide-react";
import { ResponsiveContainer, LineChart, Line } from "recharts";
import { useState } from "react";

function App() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState("starter");

    const revenueData = [
        { name: "Jan", value: 3000 },
        {
            name: "Feb",
            value: 9500
        },
        { name: "Mar", value: 8000 },
        { name: "Apr", value: 8500 },
        { name: "May", value: 12200 },
        {
            name: "Jun",
            value: 15031
        }
    ];
    return (
        <main>
            <Nav />
            <section className="max-w-4xl px-8 py-12 mx-auto text-center">
                <h1 className="md:text-3xl text-xl font-semibold tracking-tight">
                    Beautiful design with neumorphic design
                </h1>
                <p className="mt-1 md:text-lg text-sm text-muted-foreground">
                    Crafted with care and attention to detail. Built on top of
                    Base UI with Tailwind CSS. Accessible, customizable and
                    ready to use in your projects.
                </p>
            </section>
            <section className="flex flex-col md:flex-row items-start max-w-7xl mx-auto gap-8 my-12">
                <div className="flex-1 space-y-6 w-full">
                    <Card>
                        <CardHeader>
                            <CardTitle>Music Player</CardTitle>
                            <CardDescription>
                                Enjoy high quality music streaming
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-8 flex flex-col justify-center items-center">
                                <img
                                    className={`w-56 h-56 shadow-raised rounded-full border-4 border-border ${isPlaying ? "animate-spin" : ""}`}
                                    alt="track-cover"
                                    src="./assets/vite.svg"
                                />
                                <div className="text-center space-y-2">
                                    <CardTitle>Feel good inc.</CardTitle>
                                    <CardDescription>Gorillaz</CardDescription>
                                </div>
                                <div>
                                    <NeuProgress
                                        className="min-w-xs"
                                        max={100}
                                        value={45}
                                    />
                                    <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                                        <span>0:00</span>
                                        <span>3:32</span>
                                    </div>
                                </div>

                                <div className="flex justify-center items-center gap-4">
                                    <Button
                                        aria-label="Previous Track"
                                        size={"icon"}
                                        shape={"circle"}
                                        variant={"primary"}
                                    >
                                        <SkipBack className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        aria-label={
                                            isPlaying ? "Pause" : "Play"
                                        }
                                        onClick={() => setIsPlaying(!isPlaying)}
                                        className="w-20 h-12"
                                        size={"icon"}
                                        shape={"circle"}
                                        variant={"primary"}
                                    >
                                        {isPlaying ? (
                                            <Pause className="h-4 w-4" />
                                        ) : (
                                            <Play className="h-4 w-4" />
                                        )}
                                    </Button>
                                    <Button
                                        aria-label="Next Track"
                                        size={"icon"}
                                        shape={"circle"}
                                        variant={"primary"}
                                    >
                                        <SkipForward className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Upgrade your subscription</CardTitle>
                            <CardDescription>
                                You are currently on the free plan. Upgrade to
                                the pro plan to get access to all features.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-1">
                                <CardTitle>Plan</CardTitle>
                                <CardDescription>
                                    Select the plan that best fits your needs
                                </CardDescription>
                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    <div
                                        className={`flex flex-col p-4 rounded-lg cursor-pointer transition-all border-3 border-border duration-350 ${selectedPlan === "starter" ? "bg-primary/10 shadow-inset" : "bg-background shadow-raised"}`}
                                        onClick={() =>
                                            setSelectedPlan("starter")
                                        }
                                    >
                                        <div className="flex items-center space-x-2 mb-2">
                                            <NeuCheckbox
                                                id="starter-plan"
                                                checked={
                                                    selectedPlan === "starter"
                                                }
                                            />
                                            <span className="text-sm">
                                                Starter Plan
                                            </span>
                                        </div>
                                    </div>

                                    <div
                                        className={`flex flex-col p-4 rounded-lg cursor-pointer transition-all border-3 border-border duration-350 ${selectedPlan === "pro" ? "bg-primary/10 shadow-inset" : "bg-background shadow-raised"}`}
                                        onClick={() => setSelectedPlan("pro")}
                                    >
                                        <div className="flex items-center space-x-2 mb-2">
                                            <NeuCheckbox
                                                id="pro-plan"
                                                checked={selectedPlan === "pro"}
                                            />
                                            <span className="text-sm">
                                                Pro Plan
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <label
                                    htmlFor="notes"
                                    className="mb-2 block text-xs text-muted-foreground"
                                >
                                    Notes
                                </label>
                                <Input placeholder="Notes" id="notes" />
                                <div className="mt-4 flex items-center gap-2">
                                    <NeuCheckbox id="terms" />
                                    <label htmlFor="terms">
                                        I agree to the terms and conditions
                                    </label>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="flex gap-4">
                            <Button variant="destructive">Cancel</Button>
                            <Button variant="primary">Upgrade Plan</Button>
                        </CardFooter>
                    </Card>
                </div>
                <div className="flex-1 space-y-6 w-full">
                    <Card>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle>Total Revenue</CardTitle>
                            </div>
                            <CardTitle className="text-3xl font-bold">
                                $15,231.89
                            </CardTitle>
                            <p className="text-sm">+201% from last month</p>
                        </CardHeader>
                        <CardContent className="h-48">
                            <ResponsiveContainer width={"100%"} height={"100%"}>
                                <LineChart data={revenueData}>
                                    <Line
                                        type={"monotone"}
                                        dataKey={"value"}
                                        stroke="var(--color-primary)"
                                        strokeWidth={3}
                                        dot={{ fill: "var(--color-primary)" }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Your move goal</CardTitle>
                            <CardDescription>
                                Track your weekly move goals here
                            </CardDescription>
                            <div className="flex gap-6 justify-center items-center mt-4">
                                <Button
                                    size={"icon"}
                                    shape={"circle"}
                                    aria-label="Decrease daily calorie goal"
                                >
                                    <Minus />
                                </Button>

                                <div className="text-center">
                                    <CardTitle className="text-2xl">
                                        350
                                    </CardTitle>
                                    <p>CALORIES/DAY</p>
                                </div>

                                <Button
                                    size={"icon"}
                                    shape={"circle"}
                                    aria-label="Increase daily calorie goal"
                                >
                                    <Plus />
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent className="flex items-end justify-center gap-4 h-48">
                            {[85, 55, 24, 89, 100, 28, 44, 11, 33, 76].map(
                                value => (
                                    <NeuProgress
                                        key={value}
                                        value={value}
                                        orientation={"vertical"}
                                    />
                                )
                            )}
                        </CardContent>
                    </Card>
                </div>
            </section>
        </main>
    );
}

export default App;
