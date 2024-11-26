var sites = {
  "qfc" : {
    "primaryColor" : "#006BB6",
    "label" : "Quality Food Center",
  },
  "marianos" : {
    "primaryColor" : "#745C5B",
    "label" : "Mariano's",
  },
  "harristeeter" : {
    "primaryColor" : "#9D2235",
    "label" : "Harris Teeter",
  },
  "randalls" : {
    "primaryColor" : "#1D445F",
    "label" : "Randalls",
  },
  "safeway" : {
    "primaryColor" : "#D6232A",
    "label" : "Safeway",
  },
  "vons" : {
    "primaryColor" : "#ED1C24",
    "label" : "Vons",
  },
  "tomthumbs" : {
    "primaryColor" : "#223E92",
    "label" : "Tom Thumb",
  },
  "pavilions" : {
    "primaryColor" : "#231F20",
    "label" : "Pavilions",
  },
  "jewelosco" : {
    "primaryColor" : "#E21D39",
    "label" : "Jewel Osco",
  },
  "lucky" : {
    "primaryColor" : "#EF3D42",
    "label" : "Lucky",
  },
  "carrsqc" : {
    "primaryColor" : "#E41720",
    "label" : "Carrs",
  },
  "albertsons" : {
    "primaryColor" : "#2360A5",
    "label" : "Albertsons",
  },
  "haggen" : {
    "primaryColor" : "#015130",
    "label" : "Haggen",
  },
  "albertsonsmarket" : {
    "primaryColor" : "#2360A5",
    "label" : "Albertsons Market",
  },
  "marketstreet" : {
    "primaryColor" : "#E84B38",
    "label" : "Market Street",
  },
}

function getPrimaryColor(site) {
  return sites[site].primaryColor
}

function getLabel(site) {
  return sites[site].label
}
