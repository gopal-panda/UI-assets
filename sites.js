var sites = {
  "qfc" : {
    "primary-color" : "#006BB6",
    "label" : "Quality Food Center",
  },
  "marianos" : {
    "primary-color" : "#745C5B",
    "label" : "Mariano's",
  },
  "harristeeter" : {
    "primary-color" : "#9D2235",
    "label" : "Harris Teeter",
  },
  "randalls" : {
    "primary-color" : "#1D445F",
    "label" : "Randalls",
  },
  "safeway" : {
    "primary-color" : "#D6232A",
    "label" : "Safeway",
  },
  "vons" : {
    "primary-color" : "#ED1C24",
    "label" : "Vons",
  },
  "tomthumbs" : {
    "primary-color" : "#223E92",
    "label" : "Tom Thumb",
  },
  "pavilions" : {
    "primary-color" : "#231F20",
    "label" : "Pavilions",
  },
  "jewelosco" : {
    "primary-color" : "#E21D39",
    "label" : "Jewel Osco",
  },
  "lucky" : {
    "primary-color" : "#EF3D42",
    "label" : "Lucky",
  },
  "carrsqc" : {
    "primary-color" : "#E41720",
    "label" : "Carrs",
  },
  "albertsons" : {
    "primary-color" : "#2360A5",
    "label" : "Albertsons",
  },
  "haggen" : {
    "primary-color" : "#015130",
    "label" : "Haggen",
  },
  "albertsonsmarket" : {
    "primary-color" : "#2360A5",
    "label" : "Albertsons Market",
  },
  "marketstreet" : {
    "primary-color" : "#E84B38",
    "label" : "Market Street",
  },
}

function getPrimaryColor(site) {
  return sites[site].primary-color
}

function getLabel(site) {
  return sites[site].label
}
