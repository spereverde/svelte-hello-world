import Hello from "./Hello.svelte";

var hello = new Hello({
  target: document.getElementById("here"),
});

export default hello;
