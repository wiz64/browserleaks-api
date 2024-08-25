async function getCanvasData(hex) {
    function md5(text) {
      return crypto.createHash('md5').update(text).digest('hex');
    }
    function hex2string(hex) {
        let str = '';
        for (let i = 0; i < hex.length; i += 2) {
            str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
        }
        return str;
    }
    // First request to fetch the page content
let c = await fetch("https://browserleaks.com/canvas", {
  headers: {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "en-US,en;q=0.9",
    "cache-control": "no-cache",
    "device-memory": "8",
    "downlink": "5.4",
    "dpr": "1.25",
    "ect": "4g",
    "pragma": "no-cache",
    "priority": "u=0, i",
    "rtt": "150",
    "sec-ch-device-memory": "8",
    "sec-ch-dpr": "1.25",
    "sec-ch-prefers-color-scheme": "dark",
    "sec-ch-prefers-reduced-motion": "no-preference",
    "sec-ch-prefers-reduced-transparency": "no-preference",
    "sec-ch-ua": "\"Not)A;Brand\";v=\"99\", \"Google Chrome\";v=\"127\", \"Chromium\";v=\"127\"",
    "sec-ch-ua-arch": "\"x86\"",
    "sec-ch-ua-bitness": "\"64\"",
    "sec-ch-ua-full-version": "\"127.0.6533.120\"",
    "sec-ch-ua-full-version-list": "\"Not)A;Brand\";v=\"99.0.0.0\", \"Google Chrome\";v=\"127.0.6533.120\", \"Chromium\";v=\"127.0.6533.120\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-model": "\"\"",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-ch-ua-platform-version": "\"15.0.0\"",
    "sec-ch-ua-wow64": "?0",
    "sec-ch-viewport-height": "1593",
    "sec-ch-viewport-width": "956",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "none",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "viewport-width": "956"
  },
  referrerPolicy: "strict-origin-when-cross-origin",
  method: "GET",
  mode: "cors",
  credentials: "omit"
});

// Extract HTML text
let d = await c.text();
var rnd;
// Extract rnd value using regex
let rndMatch = d.match(/var rnd="([a-f0-9]+)"/);
rnd = rndMatch ? rndMatch[1] : null;

if (rnd) {
    async function processAndFetch(hex,) {
        // Step 1: Decode Base64 string and convert to Uint8Array
        base64String = hex2string(hex);
        const binaryString = atob(base64String.split(",")[1]);
        const byteArray = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
            byteArray[i] = binaryString.charCodeAt(i);
        }
    
        // Step 2: Calculate MD5 hash
        const hash = md5(byteArray);
    
        // Step 3: Generate a random string for `rnd`
    
        // Step 4: Perform API fetch request
        try {
            const response = await fetch(`/api/canvas/${hash}`, {
                headers: {
                    rnd: rnd
                }
            });
    
            // Step 5: Parse and return JSON response
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching data:", error);
            return null;
        }
    }

  // Second request using the extracted rnd value
  let a = await processAndFetch(hex);

  console.log(a);
} else {
  console.error("rnd value not found");
}
}

module.exports = {
getCanvasData
}
