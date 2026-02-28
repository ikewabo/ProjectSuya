const fs = require('fs');
const path = require('path');
const gifFrames = require('gif-frames');

const gifPath = path.join(__dirname, 'public', 'assets', 'suyafire.gif');
const outDir = path.join(__dirname, 'public', 'assets', 'frames');

if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

console.log('Starting frame extraction for', gifPath);

gifFrames({ url: gifPath, frames: 'all', outputType: 'jpg', cumulative: true })
    .then(function (frameData) {
        console.log(`Extracted ${frameData.length} frames.`);

        // We don't want to load 500 frames on the client. Let's sample down to max ~60 frames
        // by taking every Nth frame, to keep the total payload light.
        const maxFrames = 60;
        const step = Math.max(1, Math.floor(frameData.length / maxFrames));

        let savedCount = 0;
        frameData.forEach(function (frame, index) {
            if (index % step === 0 && savedCount < maxFrames) {
                const outPath = path.join(outDir, `frame_${savedCount.toString().padStart(3, '0')}.jpg`);
                frame.getImage().pipe(fs.createWriteStream(outPath));
                savedCount++;
            }
        });

        console.log(`Saved ${savedCount} sampled frames to ${outDir}`);
    })
    .catch(console.error);
