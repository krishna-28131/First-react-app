# Video Player Using useRef

## Objective
To understand how useRef can control a DOM element directly without changing React state.

## Features
- Play video
- Pause video
- Forward 5 seconds
- Rewind 5 seconds
- No useState used for controlling video

## Important Observation
Clicking Play / Pause / Forward / Rewind:
- Does NOT change React state
- Does NOT change the video source
- Still changes the video behavior

This happens because:
- Video is controlled using useRef
- useRef does not cause re-rendering

## Video Source
https://www.w3schools.com/html/mov_bbb.mp4
