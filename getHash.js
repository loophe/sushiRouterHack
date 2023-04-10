import { traceTx } from "./traceTx.js";

export async function getHash(codes){
    var rightCodes = []
    for (let n = 0; n < codes.length; n++){
        var code = codes[n]
        const hash = await traceTx(code.hash)
        // console.log(hash)
        if(hash == null){
            rightCodes.push({
                address:code.address,
                hash:code.hash,
                isApprove:false
            })
            console.log(rightCodes)
            return rightCodes
        }else{
            rightCodes.push({
                address:code.address,
                hash:code.hash,
                isApprove:true
            })
            console.log(rightCodes)
            return rightCodes
        }
    }
}