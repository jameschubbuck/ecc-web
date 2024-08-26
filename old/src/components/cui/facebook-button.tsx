import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { Facebook } from 'lucide-react'

const FacebookButton = () => {
    return (
        <div style={{ marginRight: '5px', marginLeft: '5px' }}>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button ><Facebook size={24} /></Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        Open Facebook!
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    );
};

export default FacebookButton;
//under Tooltip trigger  <Button ><Facebook size={24} /></Button>