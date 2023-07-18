'use client';

import Image from "next/image";

export default function ArtGrid() {
    let arts: any[] = Array(50);
    for(var i = 1; i < 51; i++){
        arts.push(`/art/${(i)}.png`);
    }
    return (
        <div className="h-screen bg-red-300 flex justify-center">
            <div className="grid grid-cols-5 w-1/2 gap-0 bg-blue-600"> 
                {
                    arts.map((content, index) => {
                        return <Image alt={(index).toString()} src={content} width={200} height={200} />
                    })
                }
            </div>
        </div>
    )
}