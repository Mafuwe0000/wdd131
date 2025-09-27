// Get current year
const currentYear = new Date().getFullYear();

// Insert it into the <span id="year">
document.getElementById("currentYear").textContent = currentYear;


const lastModified = document.lastModified; //this gets the last modified date of the document

document.getElementById("lastModified").textContent = lastModified;

// Wind chill formula in Celsius & km/h
    function calculateWindChillC(tempC, windKmh) {
      return (
        13.12 +
        0.6215 * tempC -
        11.37 * Math.pow(windKmh, 0.16) +
        0.3965 * tempC * Math.pow(windKmh, 0.16)
      );
    }

    function getWindChillC(tempC, windKmh) {
      if (tempC <= 10 && windKmh > 4.8) {
        return calculateWindChillC(tempC, windKmh).toFixed(1);
      } else {
        return tempC.toFixed(1); // return actual temperature
      }
    }

    // 🔹 Set your own values here:
    const temperatureC = 10;   // example: 5 °C
    const windSpeedKmh = 5;  // example: 20 km/h

    // Calculate and show result
    const windChill = getWindChillC(temperatureC, windSpeedKmh);
    document.getElementById("result").textContent =
      `Wind Chill: ${windChill} °C`;
 