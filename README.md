# Google Chrome Extension - Custom Backgrounds and Mini Games

This project is a **Google Chrome extension** that allows users to upload custom photos as backgrounds for their new tab page. Each time the user opens a new tab, one of their uploaded photos is randomly selected and displayed as the background.

## Features

### Custom Backgrounds

- **Upload Photos**: 
  - Users can upload images by either selecting the "Choose File" button or dragging and dropping files onto the button.
  - The newly uploaded photo will be added to the rotation of backgrounds, which are randomly selected each time a new tab is opened.
  - The extension supports various image formats including PNG, SVG, JPG, GIF, and WEBP. 
  - Upon a successful upload, users will receive a notification from the browser. After the first upload, the default preset background will no longer appear.

- **Remove Backgrounds**: 
  - To remove a background, simply press the "Remove" button, which is located below the "Choose File" button. This will delete the currently displayed background.
  - After removing the background, the old image will remain until the page is refreshed or a new tab is opened. The browser will also notify the user of successful removal.

### Usage Instructions

- Users can click the **"Usage"** button located in the top left corner of the new tab page for a brief tutorial on how to use the extension.

### Quick Access Shortcuts

- At the bottom of the page, users will find a set of shortcut buttons. Each button immediately navigates to a popular website, such as YouTube. Pressing the YouTube button, for example, will take the user to `youtube.com`.

### History Feature

- In the top right corner, there is a **"History"** button. When hovered over, it reveals a dropdown menu that lists the nine most recently visited websites or searches.
- Each item in the dropdown acts as a clickable link that forwards the user directly to that site.

### Date, Time, and Google Search

- In the far left corner of the new tab page, the **current date and time** are displayed and update in real-time.
- In the top middle of the page is a **Google search bar**, allowing users to quickly search Google by typing a query and pressing "Enter".

## Additional Games

Beyond the new tab customization, clicking on the extension icon in the top right corner (next to other extensions) will open a popup featuring **JavaScript mini-games**. There are five buttons, four of which lead to JavaScript games, and one that directs users to an external website, [jadencohen.com](https://jadencohen.com), which hosts a collaborative canvas inspired by Reddit’s **r/place**.

### Game Descriptions

1. **Bumper Balls**:
   - A two-player game where each player controls a ball. The players take turns chasing each other down and attempting to force collisions. The more collisions a player forces, the more points they gain. After each round, the roles reverse, and the chaser becomes the chased.

2. **Scuffed Pong**:
   - Inspired by the classic Pong, this two-player game comes with a twist. The ball can bounce off walls, and the speed and angle of the ball change randomly with each paddle hit. Points are awarded to the player whose paddle the ball hits, and the player with the most points at the end wins.

3. **Guess the Number**:
   - A single-player game where the user must guess a number between 1 and 1,000,000. The game informs the user whether their guess should be higher or lower and displays their last three guesses. At the end, it shows how many total guesses it took and records their best attempt.

4. **Matchstick Game**:
   - A two-player strategy game where the objective is to pick up the last matchstick. Players agree on a starting number of matchsticks and a maximum number of matchsticks they can pick per turn. The players take turns picking matchsticks, and whoever picks the last one wins.

