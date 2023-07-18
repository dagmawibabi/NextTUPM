'use client';

import Image from "next/image";

export default function ArtGrid() {
    let arts: any[] = Array(10);
    for(var i = 1; i < 11; i++){
        arts.push(`/art/${(i)}.png`);
    }
    return (
        <div className="h-screen bg-red-300 flex justify-center">
            <div className="grid grid-cols-5 w-[1250px] gap-0 bg-blue-600"> 
                {
                    arts.map((content, index) => {
                        return (
                            <div className="w-[300px] h-[300px] hover:animate-scaleUp">
                                <Image key={index} alt={(index).toString()} src={content} style={{objectFit: "fill"}} width={250} height={250}  />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}