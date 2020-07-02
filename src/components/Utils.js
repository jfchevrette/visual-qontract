import chroma from 'chroma-js';

const sortByName = items =>
  items.slice().sort((a, b) => {
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    return 0;
  });

const sortByValue = items =>
  items.slice().sort((a, b) => {
    if (a.value.toLowerCase() > b.value.toLowerCase()) return 1;
    if (a.value.toLowerCase() < b.value.toLowerCase()) return -1;
    return 0;
});

const ColourStyles = {
  control: styles => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    if (data.color) {
      var color = chroma(data.color);
    } else {
      var color = chroma('#363636');
    } 
    return {
      ...styles,
      color: 
        isDisabled
        ? "#ccc"
        : isSelected
        ? chroma.contrast(color, "white") > 2
        ? "white"
        : "black"
        : data.color
    };
  },
  multiValue: (styles, { data }) => {
    if (data.color) {
      var color = chroma(data.color);
    } else {
      var color = chroma('#363636');
    }
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css()
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ":hover": {
      backgroundColor: data.color,
      color: "white"
    }
  })
};

export { sortByName, sortByValue, ColourStyles};
