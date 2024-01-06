import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal({remainingTime,targetTime,onResetting},ref){
    const ref1 = useRef();

    const userLost = remainingTime <= 0;
    const formattedTime = (remainingTime/1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime*1000)) * 100)
    useImperativeHandle(ref,()=>{
        return{
            openDialog()
            {
                ref1.current.showModal();
            }
        };
    })
    return createPortal(
        <dialog ref={ref1} className="result-modal" onClose={onResetting}>
            {userLost && <h2>You Lost!</h2>}
            {!userLost && <h2>Your Score : {score}</h2>}
            <p>The Target Time was <strong> {targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>{formattedTime} seconds left!!</strong></p>
            <form method="dialog" onSubmit={onResetting} >
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById('modalResult')
    );
})
export default ResultModal;