import type { Component } from 'solid-js';
import Firework from './Firework';
import { createSignal, createEffect } from "solid-js";


const HNYFirework: Component = () => {

    const [newYear, setNewYear] = createSignal(false)

    const toggleVisibility = () => {
        const current = new Date();
        const day = current.getDate();
        const month = current.getMonth();
        const time = current.toLocaleTimeString();
        if ((day == 1) && (month == 0) && (time > "00:00:00") && (time < "00:05:00")) {         
            setNewYear(true)
        }
        else {
            setNewYear(false)
        }
        setTimeout(() => {
            toggleVisibility()
        }, 1000);
        
    }
    createEffect(() => {
        if (newYear() == false) {
            toggleVisibility()
        }
    }, [])

    return (<div>
        {newYear() ? <Firework/> : null}
        </div>);
};

export default HNYFirework;
