import { useState } from "react";
import styles from "./MultiSelect.module.css";

export default function MultiSelect(props) {
    const { options, onChange } = props;
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [selecting, setSelecting] = useState(false);

    function handleSelectChange(event) {
        if (event.target.value === "---") {
            return;
        }

        const newSelectedOptions = [...selectedOptions, event.target.value];

        applySelectionChanges(newSelectedOptions);
        setSelecting(false);
    }

    function handleStartSelecting() {
        setSelecting(true);
    }

    function handleItemDelete(itemToDelete) {
        const newSelectedOptions = selectedOptions.filter((item) => item !== itemToDelete);
        applySelectionChanges(newSelectedOptions);
    }

    function applySelectionChanges(newSelectedOptions) {
        setSelectedOptions(newSelectedOptions);
        onChange(newSelectedOptions);
    }

    function drawSelector() {
        if (selecting === true) {
            return (
                <select
                    className={[styles.tag, styles.optionsList].join(" ")}
                    onChange={handleSelectChange}
                    defaultValue="---">
                    <option key="---" value="---">
                        ---
                    </option>
                    {options
                        .filter((option) => !selectedOptions.includes(option))
                        .map((option) => {
                            return (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            );
                        })}
                </select>
            );
        } else {
            return (
                <button className={[styles.tag, styles.addButton].join(" ")} onClick={handleStartSelecting}>
                    +
                </button>
            );
        }
    }

    return (
        <div>
            {selectedOptions.map((item) => {
                return (
                    <span className={styles.tag} key={item}>
                        <span>{item}</span>
                        <button className={styles.deleteButton} onClick={() => handleItemDelete(item)}>
                            ×
                        </button>
                    </span>
                );
            })}
            {drawSelector()}
        </div>
    );
}