import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { H1 } from "./typography/h1"
import { Button } from "./ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { MainNav } from "./main-nav"
import { MobileNav } from "./mobile-nav"
import "./test.css"

export const Header = () => {
    return (
        <div>  
            <div style={{ display: "flex", alignItems: "center", padding: "5px" }}>
                <div style={{ display: "flex", alignItems: "center"  }}>
                    <Avatar>
                        <AvatarImage src="https://eastcoastcherokees.org/assets/logo.png" />
                        <AvatarFallback> ECC </AvatarFallback>
                    </Avatar>
                    <div style={{marginLeft: '5px'}}>
                        <H1> ECC </H1>
                    </div>
                </div>
                <div style={{ display: "flex", marginLeft: "auto"}}>
                    <div id="MainNav"><MainNav /></div>
                    <div id="MobileNav"><MobileNav /></div>
                </div>
            </div>
            <Separator />
        </div>
    )
}