import { traceTx } from "./traceTx.js";
async function main(){


    const hash = '0xd7e76a6f35bf98d747936a2c8e369c1209001da0389d1836554fb377d439ed36'
    // traceTx(hash) 
    const res = await traceTx(hash)
    console.log(res)
}
main()