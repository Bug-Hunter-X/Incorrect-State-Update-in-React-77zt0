```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly setting a state variable directly
    count = count + 1; 
  }, []);

  return <div>Count: {count}</div>;
}
```