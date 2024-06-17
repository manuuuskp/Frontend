const pins = [
  { height: 160, id: 1 },
  { height: 70, id: 2 },
  { height: 130, id: 3 },
  { height: 160, id: 4 },
  // ...
];

const NUM_COLS = 3;
const GAP = 10;
const COL_WIDTH = 70;

function arrangeHeightBalanced(pins) {
  const columnHeights = Array(NUM_COLS).fill(0);

  // For each pin, augment with position data.
  return pins.map((pin) => {
    // Find the shortest column.
    let shortestCol = 0;
    for (let i = 1; i < NUM_COLS; i++) {
      if (columnHeights[i] < columnHeights[shortestCol]) {
        shortestCol = i;
      }
    }

    // Calculate the `left` value of the current pin.
    const left = shortestCol * COL_WIDTH + Math.max(shortestCol, 0) * GAP;
    // Calculate the `top` value of the current pin.
    const top = GAP + columnHeights[shortestCol];
    // Update the column height.
    columnHeights[shortestCol] = top + pin.height;

    return {
      ...pin,
      left,
      top,
      width: COL_WIDTH,
    };
  });
}

arrangeHeightBalanced(pins);
