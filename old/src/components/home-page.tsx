import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  


export default function HomePage() {
    return (
        <div>
            <Carousel opts={{align: "start"}}  style={{marginLeft: "50px", width: "10"}}>
                <CarouselContent className="-ml-10">
                    <CarouselItem key={1}>
                        <Card style={{width: "350px", margin: "50px", display: "flex"}} className="pl-6">
                            <Avatar style={{marginLeft: "25px", marginTop: "25px"}}>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <CardHeader>
                                <CardTitle>Kay Chubbuck</CardTitle>
                                <CardDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</CardDescription>
                            </CardHeader>
                        </Card>
                    </CarouselItem>
                    <CarouselItem key={2}>
                        <Card style={{width: "350px", margin: "50px", display: "flex"}} className="pl-6">
                            <Avatar style={{marginLeft: "25px", marginTop: "25px"}}>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <CardHeader>
                                <CardTitle>William Anthony</CardTitle>
                                <CardDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</CardDescription>
                            </CardHeader>
                        </Card>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            
        </div>
    );
  }
  