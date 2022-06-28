import { useEffect, useState } from "react";

let temp = -1;
const useUpDownKey = (
    initialySelected,
    numItems,
    canUpdate = false,
    extraKeyCallback
) => {
    const [selected, setSelected] = useState(initialySelected);

    const next = (idx) => (idx = (idx + 1) % numItems);
    const prev = (idx) => (idx = (idx - 1 + numItems) % numItems);

    const handleKeyUp = (e) => {
        if (!canUpdate) return;

        e.preventDefault();
        e.stopPropagation();

        if (e.key === "ArrowDown") {
            temp = next(temp);
            e.preventDefault();
            setSelected(temp);
        }

        if (e.key === "ArrowUp") {
            e.preventDefault();
            temp = temp === -1 ? numItems - 1 : prev(temp);
            setSelected(temp);
        }

        if(extraKeyCallback && e.key === extraKeyCallback.key)  {
            extraKeyCallback.callback(temp);
        }
    };

    const handleKeyDown = (e) => {
        if (!canUpdate) return;

        if (e.key === "ArrowDown") {
            e.preventDefault();
        }

        if (e.key === "ArrowUp") {
            e.preventDefault();
        }
    };

    useEffect(() => {
        window.addEventListener("keyup", handleKeyUp);
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keyup", handleKeyUp);
            window.removeEventListener("keydown", handleKeyDown);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const clearSelection = () => {
        temp = -1;
        setSelected(temp);
    };

    return { clearSelection, selected };
};

export default useUpDownKey;
