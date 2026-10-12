/* Cтили CSS прямо в JSX */
import React from 'react';

const styles = {
    background: 'blue',
    color: 'white',
    margin: '10px',
    padding: '20px',
    width: '200px',
    height: '100px',
};

export function MyComponent() {
    return (
        <div style={styles}>
            Пример стилизации
        </div>
    );
}
