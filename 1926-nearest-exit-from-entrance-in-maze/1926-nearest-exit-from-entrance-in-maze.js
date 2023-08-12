/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    const queue = new Queue([[...entrance,0]])
    const seen = {}
    const hight = maze.length - 1
    const width = maze[0].length - 1
    const bfs = (x,y,steps)=>{
        if(seen[x+"-"+y]) return
        seen[x+"-"+y] = true
        if(x <0 || y<0 || x>hight || y >width || maze[x][y] === "+")return
        if((x === 0 ||y === 0 || x === hight || y=== width) &&
           !(x === entrance[0] && y === entrance[1])){
            return steps
        }
        queue.push([x+1,y,steps+1])
        queue.push([x-1,y,steps+1])
        queue.push([x,y+1,steps+1])
        queue.push([x,y-1,steps+1])
    }
    while(queue.size() > 0){
        const [x,y,steps] = queue.dequeue();
        const res = bfs(x,y,steps)
        if(res) return res
    }
    return -1
};