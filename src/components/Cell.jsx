export default function Cell({cell,id,cells,setCells,go,setGo,winningMessage}){// destructuring by {}
    function handleClick(){//(e)= event
        if(winningMessage){
            return;
        }
        const nottTaken= !cells[id];
        if(nottTaken){
            if(go==="circle"){
            handlePut(go)
            setGo("cross")}
        else if(go==="cross"){
            handlePut(go)
            setGo("circle")}
        }
    }
   function handlePut(goo){
    const updatedCells =[...cells];
    updatedCells[id]=goo;
    setCells(updatedCells);

    
   }

    return(
        
        <div className="sequare" onClick={handleClick} >
        <div className={cell}>{ cell? (cell==="circle"?"O":"X"):""}</div>
        </div>
    );
}