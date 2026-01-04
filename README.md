# Memory Match Game

Day 8: 45 Days of Code Challenge

A classic memory matching game built with React to demonstrate complex state management, effect synchronization, and CSS 3D transformations. The application focuses on game logic implementation and preventing race conditions in user interactions.

---

## Project Overview

- Project Name: Memory Match Game
- Application Type: Interactive Browser Game
- Core Logic: Grid-based card shuffling and matching algorithm.
- Goal: To implement a bug-free game loop using React hooks and pure CSS animations.

## Key Features

- Card Matching Logic: Algorithm compares selected pairs and determines match/mismatch states.
- 3D Flip Animations: Uses CSS preserve-3d and rotateY properties for smooth card transitions.
- Race Condition Handling: Implements a disabled state to prevent user interactions during processing delays.
- Move Counter: Tracks the number of turns taken to complete the game.
- Responsive Grid: Adapts the 4x4 card layout for different screen sizes.

## Technical Stack

- Frontend Library: React.js (Vite)
- Styling: Pure CSS (CSS3 Variables, Flexbox, Grid, 3D Transforms)
- Icons: Lucide React
- State Management: React useState and useEffect hooks

## Project Structure

- src/components/Card.jsx: Renders individual cards and handles flip/matched styles.
- src/components/ScoreBoard.jsx: Displays game metrics and reset controls.
- src/App.jsx: Contains the central game engine, shuffling logic, and state synchronization.

## Installation and Setup

1. Clone the Repository
   git clone https://github.com/VYANKEE/Day8-MemoryGame.git

2. Navigate to the Directory
   cd Day8-MemoryGame

3. Install Dependencies
   npm install

4. Start the Application
   npm run dev

## Learning Outcomes

- Managing side effects with useEffect to handle game delays and state resets.
- Implementing the "Lifting State Up" pattern to share logic between components.
- Using CSS perspective to create realistic 3D flipping effects without external libraries.
- Preventing edge cases where users click multiple cards rapidly.

  ##LIVE DEMO :

---

Developed by VYANKEE
