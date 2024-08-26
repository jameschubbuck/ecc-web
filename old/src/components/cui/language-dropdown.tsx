import { InlineCode } from "../typography/inline-code";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import {BookA } from 'lucide-react'

const LanguageDropdown = () => {
    return (
        <div style={{ marginRight: '5px' }}>
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder={
                        <div style={{display: "flex", alignItems: "center"}}>
                            <div style={{marginRight: "5px"}} className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                                <BookA/>
                            </div>
                            Language
                        </div>
                        } 
                    />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="english">
                        <div style={{display: "flex", alignItems: "center"}}>
                            <div style={{marginRight: "5px"}}>
                                <InlineCode>ENG</InlineCode>
                            </div>
                            English
                        </div>
                    </SelectItem>
                
                    <SelectItem value="cherokee">
                        <div style={{display: "flex", alignItems: "center"}}>
                            <div style={{marginRight: "5px"}}>
                                <InlineCode>CHR</InlineCode>
                            </div>
                            Cherokee
                        </div>
                    </SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
};

export default LanguageDropdown;