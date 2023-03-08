/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
const minEatingSpeed = (piles, h) => {
    let min = 1,
        max = Math.max(...piles),
        best = max

    const time = speed => piles.reduce((sum, pile) => sum + Math.ceil(pile/speed), 0)

    while (min <= max) {
        const mid = Math.floor((min + max) / 2)
		
        if (time(mid) <= h) {
            best = mid
            max = mid - 1
        } else
            min = mid + 1
    }

    return best
}