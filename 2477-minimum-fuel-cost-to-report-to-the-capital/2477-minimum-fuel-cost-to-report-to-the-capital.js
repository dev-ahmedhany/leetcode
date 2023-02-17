/**
 * @param {number[][]} roads
 * @param {number} seats
 * @return {number}
 */
const minimumFuelCost = ( roads, seats ) => {
    let r = [[]], f = 0, dfs = ( i, p, c = 1 ) => {
        r[i].forEach( j => c += j != p && dfs(j,i) )
        f += i && Math.ceil( c / seats )
        return c
    }
    for ( let [ a, b ] of roads )
        (r[a]=r[a]||[]).push(b), (r[b]=r[b]||[]).push(a)   
    dfs(0)
    return f
}