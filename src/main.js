import Hello from "./Hello.svelte";

var hello = new Hello({
  target: document.getElementById("here"),
  props: {
    name: "Konijn",
  },
});

export default hello;
