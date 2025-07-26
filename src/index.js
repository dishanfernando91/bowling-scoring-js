const INITIAL_SCORE = 0;
const MAX_FRAME_SCORE = 10;

const SAMPLE_GAME = [
    [ 5, 3 ],
    [ 10 ],
    [ 4, 6 ],
    [ 9, 1 ],
    [ 0, 0 ],
    [ 10 ],
    [ 10 ],
    [ 2, 0],
    [ 8, 2 ],
    [ 0, 3 ]
];

const calculateFrameScore = (currentFrameIndex, allFrames) => {
    let currentFrameScore = 0;
    const currentFrame = allFrames[currentFrameIndex];

    currentFrameScore = currentFrame.reduce((attempt, total) => attempt + total, 0);

    if (currentFrameIndex !== allFrames.length - 1) {
        if (currentFrame.length === 1) {
            return currentFrameScore += calculateFrameScore(currentFrameIndex + 1, allFrames)
        };

        if (currentFrameScore === MAX_FRAME_SCORE && currentFrame.length > 1) {
            // get the points from the first round of the next frame and add to the current frame's (which is 10) for spares
            return currentFrameScore += allFrames[currentFrameIndex + 1][0] 
        };
    }
    
    return currentFrameScore;
}

const calculateTotalScore = allFrames => allFrames.reduce((totalScore, _, currentFrameIndex, allFrames) =>
        calculateFrameScore(currentFrameIndex, allFrames) + totalScore, INITIAL_SCORE);

// add custom game data through CLI or use sample
const finalScore = calculateTotalScore(process.argv[2] ? JSON.parse(process.argv[2]) : SAMPLE_GAME);

console.log(finalScore);