import { Component, onMount, onCleanup } from "solid-js";

const Switchable: Component = () => {
  onMount(() => {
    console.log("Switchable mounted");
  });
  onCleanup(() => {
    console.log("Switchable cleaned up");
  });
  console.log("component running yeah yeah yeah");
  return <div>Switch Component</div>;
};

export default Switchable;
