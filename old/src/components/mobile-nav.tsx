import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
  
import {Settings} from "lucide-react"
import { Button } from "./ui/button"
import FacebookButton from "./cui/facebook-button"
import LanguageDropdown from "./cui/language-dropdown"
import ThemeDropdown from "./cui/theme-dropdown"
import { Separator } from "./ui/separator"
import { H3 } from "./typography/h3"

export const MobileNav = () => {
    return (
        <div style={{ display: "flex", marginLeft: "auto", justifyContent: "center"}}>
            <FacebookButton />
            <Sheet>
                <SheetTrigger asChild>
                    <Button><Settings/></Button>
                </SheetTrigger>
                <SheetContent>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
                        <div style={{marginBottom: "5px"}}><H3>Site Settings</H3></div>
                        
                        <Separator/>
                        <div>
                            <div style={{marginBottom: "5px", marginTop: "5px"}}>
                                <LanguageDropdown/>
                            </div> 
                            <ThemeDropdown />
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}
//under sheet trigger 