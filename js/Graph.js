var len = undefined;

var fonts ={ strokeWidth: 2,size:35 }

var nodes = [
  { id: 0, label: "q00", group: 0 },
  { id: 1, label: "q01", group: 0 },
  { id: 2, label: "q02", group: 0 },
  { id: 3, label: "q03", group: 1 },
  { id: 4, label: "q04", group: 1 },
  { id: 5, label: "q05", group: 1 },
  { id: 6, label: "q06", group: 2 },
  { id: 7, label: "q07", group: 2 },
  { id: 8, label: "q08", group: 2 },
  { id: 9, label: "q09", group: 3 },
  { id: 10, label: "q10", group: 3 },
  { id: 11, label: "q11", group: 3 },
  { id: 12, label: "q12", group: 4 },
  { id: 13, label: "q13", group: 4 },
  { id: 14, label: "q14", group: 4 },
  { id: 15, label: "q15", group: 5 },
  { id: 16, label: "q16", group: 5 },
  { id: 17, label: "q17", group: 5 },
  { id: 18, label: "q18", group: 6 },
  { id: 19, label: "q19", group: 6 },
  { id: 20, label: "q20", group: 6 },
  { id: 21, label: "q21", group: 7 },
  { id: 22, label: "q22", group: 7 },
  { id: 23, label: "q23", group: 7 },
  { id: 24, label: "q24", group: 8 },
  { id: 25, label: "q25", group: 8 },
  { id: 26, label: "q26", group: 8 },
  { id: 27, label: "q27", group: 9 },
  { id: 28, label: "q28", group: 9 },
];
var edges = [
    //rama principal de b
  { from: 0, to: 1, label: "b", font:fonts, arrows:'to'},
  { from: 1, to: 16, label:"a", font:fonts, arrows:'to'},
  { from: 16, to: 17,label:"a", font:fonts, arrows:'to'},
  { from: 17, to: 18,label:"a", font:fonts, arrows:'to'},
  { from: 18, to: 19,label:"a", font:fonts, arrows:'to'},
  { from: 19, to: 20,label:"a", font:fonts, arrows:'to' },
  { from: 20, to: 21,label:"a", font:fonts, arrows:'to' },
  { from: 20, to:26, label:"b", font:fonts, arrows:'to'},
  { from: 1, to: 22, label:"b", font:fonts, arrows:'to' },
  { from: 22, to: 23, label:"a", font:fonts, arrows:'to' },
  { from: 17, to: 22, label:"b", font:fonts, arrows:'to' },
  { from: 18, to: 22, label:"b", font:fonts, arrows:'to' },
  { from: 23, to: 24, label:"a", font:fonts, arrows:'to' },
  { from: 24, to: 25, label:"a", font:fonts, arrows:'to' },
  { from: 22, to: 26, label:"b", font:fonts, arrows:'to' },
  { from: 24, to: 26, label:"b", font:fonts, arrows:'to' },
    //rama principal de a
];

// create a network
var container = document.getElementById("box_automaton");
var data = {
  nodes: nodes,
  edges: edges,
};
var options = {
  nodes: {
    shape: "circle",
    font: {
      size:48,
    },
    borderWidth: 2,
    shadow: false,
  },
  edges: {
    width: 2,
    shadow: false,
  },
};
network = new vis.Network(container, data, options);