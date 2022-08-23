// export const sum=(a,b)=>{
//     return a+b
// }

// module.exports=sum

export const sum=(...args)=>{
    if(arguments.length===0) return "num dal le bhai"
    else if(arguments.length===1) return "aur ek choose krna padega"

    const sumValue=[...args].reduce(a,c=>a+(Number(c)),0)
    return Number(sumValue).toFixed(1)
}