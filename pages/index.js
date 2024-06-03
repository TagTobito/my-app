import { useState, useEffect } from 'react';

export default function Home() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch('/api/counter')
        .then(res => res.json())
        .then(data => setCount(data.count));
    }, []);

    const incrementCounter = async () => {
        const res = await fetch('/api/counter', {
        method: 'POST',
        });
        const data = await res.json();
        setCount(data.count);
    };

    return (
        <div className="flex justify-center items-center h-screen">
        <div className="text-center">
            <p className="text-2xl mb-4">Contador: {count}</p>
            <button 
            className="px-4 py-2 bg-blue-500 text-white rounded" 
            onClick={incrementCounter}
            >
            Incrementar
            </button>
        </div>
        </div>
    );
}
