
export const updateDashboard = (symbol, data)=>{

    // function updateDashboard(symbol, data) {
    // Update stock info
    document.getElementById("stockInfo").innerHTML = `
                  <h3>${symbol}</h3>
                  <p>Current Price: $${data.price.toFixed(2)}</p>
                  <p class="${data.change >= 0 ? "positive" : "negative"}">
                      Change: ${data.change >= 0 ? "+" : ""}${data.change.toFixed(
      2
    )}%
                  </p>
              `;
  
    // Update market stats
    document.getElementById("marketStats").innerHTML = `
                  <p>Volume: ${data.volume.toLocaleString()}</p>
                  <p>24h High: $${(data.price + Math.random() * 10).toFixed(
                    2
                  )}</p>
                  <p>24h Low: $${(data.price - Math.random() * 10).toFixed(2)}</p>
              `;
  
    // Update comparison table
    const tableRow = `
                  <tr>
                      <td>${symbol}</td>
                      <td>$${data.price.toFixed(2)}</td>
                      <td class="${data.change >= 0 ? "positive" : "negative"}">
                          ${data.change >= 0 ? "+" : ""}${data.change.toFixed(2)}%
                      </td>
                      <td>${data.volume.toLocaleString()}</td>
                  </tr>
              `;
    document.getElementById("comparisonTable").innerHTML = tableRow;
  
    // Update chart
    updateChart(data.historical);
//   }
}