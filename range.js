import { grab } from "./grab.js";

async function range(start,end){
    console.log(Date());
    console.time('Scanings complete in :')
    var blockNumber = start
    const endRange = end - start
    for(let n = 0; n < endRange; n++){
        // var codes = await getCode(blockNumber)
        var codes = await grab(blockNumber)
        blockNumber++
        if(codes.length > 0){
            console.log(codes)
        }    
    }
 
    console.timeEnd('Scanings complete in :')
}

const start = 41362851
const end = 41362910
range(start,end)