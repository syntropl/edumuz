function updateSVGHeight() {
    const menu = document.getElementById('menuContainer');
    const svg = document.querySelector('svg');
    const baseHeight = 80; // Additional height for the bubble effect
    const menuHeight = menu.offsetHeight + baseHeight;

    svg.setAttribute('height', menuHeight);

    // Define all corners and paths relative to the menu's position and size
    const r = 10; // Radius for corners
    const startOffsetX = 290, startOffsetY = 0;
    const corner1X = 300;
    const corner2And3Y = menuHeight - baseHeight + 70; // Adjusted height to account for menu start
    const corner3X = 0, corner4Y = 70;
    const corner5X = 240;
    const endX = 250;

    const pathData = `M ${startOffsetX},${startOffsetY}
                      L ${corner1X - r},${startOffsetY}
                      Q ${corner1X},${startOffsetY} ${corner1X},${startOffsetY + r}
                      L ${corner1X},${corner2And3Y - r}
                      Q ${corner1X},${corner2And3Y} ${corner1X - r},${corner2And3Y}
                      L ${corner3X + r},${corner2And3Y}
                      Q ${corner3X},${corner2And3Y} ${corner3X},${corner2And3Y - r}
                      L ${corner3X},${corner4Y + r}
                      Q ${corner3X},${corner4Y} ${corner3X + r},${corner4Y}
                      L ${corner5X - r},${corner4Y}
                      Q ${corner5X},${corner4Y} ${corner5X},${corner4Y - r}
                      L ${corner5X},${r}
                      Q ${corner5X},${startOffsetY} ${corner5X + r},${startOffsetY}
                      L ${endX},${startOffsetY}
                      Z`;

    document.getElementById('dynamicPath').setAttribute('d', pathData.trim());
}

window.onload = updateSVGHeight;
window.onresize = updateSVGHeight;
