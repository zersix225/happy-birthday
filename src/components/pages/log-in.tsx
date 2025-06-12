"use client"

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"
import Image from "next/image"
import { Button } from '@/components/ui/button'
import { toast } from "sonner"
import { useState, useEffect } from "react"

const LogIn = () => {
    const [value, setValue] = useState('')
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)
    const meeImage: Array<{id: string, url: string}> = [
        { id: "image1", url: "/1.jpg" },
        { id: "image2", url: "/2.JPG" },
        { id: "image3", url: "/3.JPG" },
        { id: "image4", url: "/4.JPG" },
        { id: "image5", url: "/5.JPG" },
    ]

    useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    const handleSubmit = (value: string) => {
        if (value === '200749')  {
           console.log('password is correct')
            toast("babe keng mak!!!")
        }
    }

    return (
        <div className="grid grid-cols-1">
            <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance text-white">Captured Moments</h1>
            <p className="leading-7 [&:not(:first-child)] text-center text-white">
                How can someone be this cute? This one’s my fave!
            </p>
            <Carousel
                opts={{
                    align: "start",
                }}
                setApi={setApi}
                className="w-full max-w-2xs sm:max-w-sm pt-3 mx-auto"
            >
                <CarouselContent>
                    {meeImage.map((mee) => (
                        <CarouselItem key={mee.id}>
                            <div className="p-1">
                                <Card className="p-0 overflow-hidden">
                                    <Image
                                        src={mee.url}
                                        alt={mee.id}
                                        width={300}
                                        height={300} 
                                        className="object-cover w-full h-full aspect-square"
                                    />
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <div className="text-muted-foreground py-2 text-center text-sm mb-3">
                Slide {current} of {count}
            </div>
            <Card className="shadow-xl max-w-xs sm:min-w-sm mx-auto">
                <CardHeader>
                    <CardTitle>Enter password</CardTitle>
                    <CardDescription>Hint: Your birthday date</CardDescription>
                </CardHeader>
                <CardContent className="sm:mx-auto">
                    <InputOTP 
                        maxLength={6}
                        value={value}
                        onChange={(v) => setValue(v)}
                    >
                        <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                        </InputOTPGroup>
                        <InputOTPGroup>
                            <InputOTPSlot index={2} />
                            <InputOTPSlot index={3} />
                        </InputOTPGroup>
                        <InputOTPGroup>
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                        </InputOTPGroup>
                    </InputOTP>
                </CardContent>
                <CardFooter>
                    <div className="w-full space-x-2 flex justify-end">
                        <Button 
                            variant={"outline"}
                            onClick={() => setValue('')}
                        >Clear</Button>
                        <Button 
                            type="submit"
                            onClick={() => handleSubmit(value)}
                        >Submit</Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}
export default LogIn;