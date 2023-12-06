import { useEffect } from "react";
import ProgressBar from "./ProgressBar";

const TIMER = 3000;
export default function DeleteConfirmation({ onConfirm, onCancel }) {
  useEffect(() => {
    //setTimeout placed here beacause i waant to delete the place even without click yes on comfirmation modal.
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);
    //cleanup function.Runs rigth before the component dismounts.cleanup doens't run when the effect function runs for thr first time
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      {/* divided progress barr into different component because i do not want the whole component being executed each time but only the bar. */}
      <ProgressBar timer={TIMER} />
    </div>
  );
}
