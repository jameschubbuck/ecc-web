import { InlineCode } from "../typography/inline-code";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import {Palette, Moon, Sun } from 'lucide-react'

const ThemeDropdown = () => {
    return (
        <div style={{ marginRight: '5px' }}>
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder={
                        <div style={{display: "flex", alignItems: "center"}}>
                            <div style={{marginRight: "5px"}} className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                                <Palette/>
                            </div>
                            Theme
                        </div>
                    } />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">
                        <div style={{display: "flex", alignItems: "center"}}>
                            <div style={{marginRight: "5px"}} className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                                <Sun/>
                            </div>
                            Light
                        </div>
                    </SelectItem>
                
                    <SelectItem value="dark">
                        <div style={{display: "flex", alignItems: "center"}}>
                            <div style={{marginRight: "5px"}} className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                                <Moon/>
                            </div>
                            Dark
                        </div>
                    </SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
};

export default ThemeDropdown;