const INITIAL_SCORE = 0;
const MAX_FRAME_SCORE = 10;

export const calculateFrameScore = (currentFrameIndex: number, allFrames: number[][]): number => {
    let currentFrameScore = 0;
    const currentFrame = allFrames[currentFrameIndex];

    currentFrameScore = currentFrame.reduce((attempt, total) => attempt + total, INITIAL_SCORE);

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

export const calculateTotalScore = (allFrames: number[][]) => allFrames.reduce((totalScore, _, currentFrameIndex, allFrames) =>
    calculateFrameScore(currentFrameIndex, allFrames) + totalScore, INITIAL_SCORE);
