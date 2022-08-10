const headquarters = 42
// the address of headquarters is a constant === doesn't change
const feet = 264
// the feet of a block is a constant

function distanceFromHqInBlocks(blocks) {
    return Math.abs(headquarters - blocks)
}

function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * feet;
    }

function distanceTravelledInFeet(start, end) {
    return Math.abs(start - end) * feet;
}

function calculatesFarePrice(start, end) {
    let distance = distanceTravelledInFeet(start, end)
    // to define the calculatesFarePrice variable (variable is not defined error)
    if (distance<=400) {
        return 0
    } else if (distance>400 && distance<=2000) {
        return (distance-400)*.02
    } else if (distance>2000 && distance<2500) {
        return 25
    } else if (distance>2500) {
        return 'cannot travel that far'
    }
}     



