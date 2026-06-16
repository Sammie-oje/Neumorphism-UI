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
import { SkipBack, SkipForward, Play, Pause } from "lucide-react";
import { useState } from "react";

function App() {
    const [isPlaying, setIsPlaying] = useState(false);
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
            <section>
                <div className="flex-1 space-y-6">
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
                </div>
                <div className="flex-1 space-y-6"></div>
            </section>
        </main>
    );
}

export default App;
