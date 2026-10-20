export function ToDate(){
            //prototype chain ланцюжок прототипів
            //Date — вбудований конструктор JavaScript.
            console.log(new Date());

            //toLocaleTimeString()
            console.log(new Date().toLocaleTimeString());
            
    return (
                        <>
        <p> 
            {/* Date – вбудований конструктор,
            який у сучасному JavaScript
            можна розглядати як клас. */}
        </p>

        <p>
            {new Date().toLocaleTimeString()}
        </p>

          {/* 
                (
                console.log(new Date()),
                console.log(new Date())
                )
          */}
                        </>
    )
}
