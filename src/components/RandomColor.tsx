import { useEffect, useState } from "react"

export default function RandomColor(){
    const [colorType, setColorType] = useState("hex")
    const [color, setColor] = useState("#000000")

    function generateColor(){
        const hexElement = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
        let tempColor = ""
        if(colorType === "hex"){
            tempColor = "#"
            for(let i = 0; i < 6; i++){
                tempColor += hexElement[Math.floor(Math.random()*6)]
            }
        } else{
            tempColor = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
        }
        setColor(tempColor)
    }

    useEffect(()=>{
        generateColor()
    },[colorType])

    return(
        <div className="h-10">
            <div className="flex gap-5 justify-center mb-2 mt-1 text-base font-bold text-white">
                <button className="bg-slate-700 p-2" onClick={generateColor}>Generate Random color</button>
                <button className="bg-slate-700 p-2" onClick={()=> setColorType("hex")}>Create HEX color</button>
                <button className="bg-slate-700 p-2" onClick={()=> setColorType("rgb")}>Create RGB color</button>
            </div>
            <div style={{background: color,
                height: "100vh"
                }}
            >
                <div className="flex justify-center items-center h-full">
                    <div className="text-3xl font-extrabold text-white">
                        {colorType == "hex"? "HEX Color: ": "RGB Color: "}{color}
                    </div>
                    
                </div>
            </div>  
        </div>
    )
}