# React Performance Optimization

## Features
- Displays total price of products
- Counter button
- Optimized using useMemo and useCallback
- No React.memo used

## Hooks Used
- useMemo → Prevents unnecessary recalculation
- useCallback → Prevents function recreation

## Expected Behavior
- Counter update does NOT recalculate total price
- Counter update does NOT re-render ProductList

## How to Run
1. npm install
2. npm start
