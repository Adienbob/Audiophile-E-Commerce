const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "public", "data.json");

// Load JSON file
const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

let changes = 0;

function fixPath(p) {
  if (p.startsWith("./")) {
    changes++;
    return p.replace("./", "/");
  }
  return p;
}

const fixedData = data.map((item) => {
  return {
    ...item,
    image: {
      mobile: fixPath(item.image.mobile),
      tablet: fixPath(item.image.tablet),
      desktop: fixPath(item.image.desktop),
    },
    gallery: {
      first: {
        mobile: fixPath(item.gallery.first.mobile),
        tablet: fixPath(item.gallery.first.tablet),
        desktop: fixPath(item.gallery.first.desktop),
      },
      second: {
        mobile: fixPath(item.gallery.second.mobile),
        tablet: fixPath(item.gallery.second.tablet),
        desktop: fixPath(item.gallery.second.desktop),
      },
      third: {
        mobile: fixPath(item.gallery.third.mobile),
        tablet: fixPath(item.gallery.third.tablet),
        desktop: fixPath(item.gallery.third.desktop),
      },
    },
    others: item.others.map((other) => ({
      ...other,
      image: {
        mobile: fixPath(other.image.mobile),
        tablet: fixPath(other.image.tablet),
        desktop: fixPath(other.image.desktop),
      },
    })),
  };
});

// Save back to JSON (formatted)
fs.writeFileSync(filePath, JSON.stringify(fixedData, null, 2), "utf-8");

console.log(`✅ Fixed ${changes} path(s) in total.`);
