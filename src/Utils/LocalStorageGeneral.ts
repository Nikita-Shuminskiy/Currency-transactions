import { AppRootStateType } from "../Redux/Redux_store";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('StartValue');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state: AppRootStateType) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('StartValue', serializedState);
    } catch {
        // ignore write errors
    }
};
