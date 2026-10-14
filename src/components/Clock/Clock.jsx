import { useState, useEffect, useRef } from "react";

const styles = {

            clockface: {
                fontSize:        '64',
                fontWeight:      '500',
                textAlign:       'left',
                    },

            button:    {
                backgroundColor: '#2659e6',
                color:           '#fff',
                padding:         '6px 15px',
                marginLeft:      '15px',
                borderRadius:    '4px',
                    }

                };

export function Clock(){
    const [ time, setTime ] = useState(new Date());
    const intervalRef = useRef(null);

    useEffect(() =>{
        intervalRef.current = setInterval(() => {
            console.log('Это интервал каждые 1000ms' + Date.now());
            setTime(new Date());
            
        }, 1000);

        return () => {
            console.log('Ця функція викликається перед кожним useEffect');
            clearInterval(intervalRef.current);
        };
    }, []);

    const handleStop = () => {
        clearInterval(intervalRef.current);
        };

return (
            <>
<p style ={styles.clockface}>Поточний час: {time.toLocaleTimeString()}</p>
<button style ={styles.button} type ="button" onClick = {handleStop}>
Зупинити Час    
</button>    
            </>
       )
}