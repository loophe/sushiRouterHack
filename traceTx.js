import fetch from 'node-fetch'
import { HTTP_PROVIDER_LINK } from './provider.js'

const endpoint = HTTP_PROVIDER_LINK

export async function traceTx(hash){
    const reqs = []
    var rightHash = null
    reqs.push({  
        id:1,
        jsonrpc: '2.0',
        method: 'trace_transaction',   
        params:
        [
            hash,     
        ],
    })

    const res = await fetch(endpoint, {method: 'POST', body: JSON.stringify(reqs), headers: {'Content-Type': 'application/json'}})
    const data = await res.json()
    const isTrue = await data[0].result

    var promises = isTrue.map( (obj) => {
        const sig = obj.action.input.substring(0,10)
        // console.log(sig)
        if(sig == '0x095ea7b3'){    
            rightHash = hash
        }   
    })
    await Promise.all(promises) 
    return rightHash
}

