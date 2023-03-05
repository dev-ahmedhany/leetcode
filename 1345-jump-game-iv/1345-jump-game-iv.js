/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function(A) {
    let q=new Set([0]),level=0,f={},n=A.length,seen=new Set(), result=Infinity
    for(let i=0; i<n; i++) // create groups of indices with the same value
        if(!f[A[i]])
           f[A[i]]=[i]
        else
           f[A[i]].push(i)
    while(result===Infinity){ // process each BFS level seperately
        let temp=new Set //holds the indices of the next level
        q.forEach(idx=>{
            if(idx==n-1)
                return result=level
            //process each valid neighbor only once
            for(let nei of [idx-1, idx+1, ...f[A[idx]]]) 
                if(!seen.has(nei)&&nei>=0&&nei<n)
                    seen.add(nei),temp.add(nei),
                    f[A[idx]]=[-1] //and invalidate the Value-neighbors previously processed
           })
        q=temp,level++
    }
    return result
};