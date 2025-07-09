# Redux Practice Project

A React + TypeScript + Vite application demonstrating Redux Toolkit usage with a counter component and visual effects.

## Features

- **Counter Component**: Increment/decrement buttons with Redux state management
- **Visual Indicators**: Displays pipe (`|`) symbols for every 5th count
- **Conditional Styling**: 
  - Every 6th item gets margin spacing
  - Every 5th item gets rotated and positioned absolutely
- **Redux Toolkit Integration**: Modern Redux patterns with createSlice

## Technologies Used

- **React 19.1.0** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Redux Toolkit** - State management
- **React Redux** - React bindings for Redux
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting
- **Prettier** - Code formatting

## Project Structure

```
src/
├── App.tsx                 # Main application component
├── main.tsx               # Application entry point
├── redux/
│   ├── store.ts           # Redux store configuration
│   ├── hooks.ts           # Typed Redux hooks
│   └── features/
│       └── Counter/
│           └── CreateSlice.ts  # Counter slice with reducers
└── assets/                # Static assets
```

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## How It Works

### Redux State Management

The counter state includes:
- `count`: Current counter value
- `numberList`: Array that stores numbers divisible by 5

### Counter Logic

- **Increment**: Increases count by 1, adds to numberList if divisible by 5
- **Decrement**: Decreases count by 1, removes from numberList if needed

### Visual Effects

- Pipe symbols (`|`) are rendered for each item in the numberList
- Every 6th item gets additional left margin
- Every 5th item gets rotated 60 degrees and positioned absolutely

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build
