const ctx1 = document.getElementById('chart1').getContext('2d');
const ctx2 = document.getElementById('chart2').getContext('2d');
const ctx3 = document.getElementById('chart3').getContext('2d');
const ctx4 = document.getElementById('chart4').getContext('2d');
const ctx5 = document.getElementById('chart5').getContext('2d');
const ctx6 = document.getElementById('chart6').getContext('2d');

const data1 = {
  labels: ['Bitcoin', 'Ethereum', 'Ripple', 'Litecoin'],
  datasets: [{
    label: 'Capitalización de Mercado (en miles de millones)',
    data: [800, 750, 700, 650],
    backgroundColor: 'rgba(40, 167, 69, 0.5)',
    borderColor: 'rgba(40, 167, 69, 1)',
    borderWidth: 1
  }, {
    label: 'Volumen 24h (en miles de millones)',
    data: [550, 445, 440, 735],
    backgroundColor: 'rgba(220, 53, 69, 0.5)',
    borderColor: 'rgba(220, 53, 69, 1)',
    borderWidth: 1
  }]
};

const data2 = {
  labels: ['Tecnología', 'Salud', 'Finanzas', 'Energía'],
  datasets: [{
    label: 'Sectores del Mercado de Valores',
    data: [1500, 1400, 1300, 1200],
    backgroundColor: ['rgba(54, 162, 235, 0.5)', 'rgba(255, 99, 132, 0.5)', 'rgba(255, 159, 64, 0.5)', 'rgba(75, 192, 192, 0.5)'],
    borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 159, 64, 1)', 'rgba(75, 192, 192, 1)'],
    borderWidth: 1
  }]
};

const data3 = {
  labels: ['Bitcoin', 'Ethereum', 'Ripple', 'Litecoin'],
  datasets: [{
    label: 'Tendencia de Precios (en USD)',
    data: [75000, 44000, 23000, 52000],
    backgroundColor: 'rgba(255, 159, 64, 0.5)',
    borderColor: 'rgba(255, 159, 64, 1)',
    borderWidth: 1
  }]
};

const data4 = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [{
    label: 'Precios de Acciones (en USD)',
    data: [15000, 14500, 14000, 13500],
    backgroundColor: 'rgba(40, 167, 69, 0.5)',
    borderColor: 'rgba(40, 167, 69, 1)',
    borderWidth: 1
  }, {
    label: 'Precios de Criptomonedas (en USD)',
    data: [15000, 36000, 47000, 40000],
    backgroundColor: 'rgba(220, 53, 69, 0.5)',
    borderColor: 'rgba(220, 53, 69, 1)',
    borderWidth: 1
  }]
};

const data5 = {
  labels: ['BTC', 'ETH', 'XRP', 'LTC'],
  datasets: [{
    label: 'Volumen de Comercio (en millones)',
    data: [5500, 5400, 5300, 5200],
    backgroundColor: ['rgba(54, 162, 235, 0.5)', 'rgba(255, 99, 132, 0.5)', 'rgba(255, 159, 64, 0.5)', 'rgba(75, 192, 192, 0.5)'],
    borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 159, 64, 1)', 'rgba(75, 192, 192, 1)'],
    borderWidth: 1
  }]
};

const data6 = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [{
    label: 'Tendencia de Precios de Criptomonedas (en USD)',
    data: [35000, 46000, 37000, 48000],
    backgroundColor: 'rgba(255, 159, 64, 0.5)',
    borderColor: 'rgba(255, 159, 64, 1)',
    borderWidth: 1
  }]
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
};

const chart1 = new Chart(ctx1, {
  type: 'bar',
  data: data1,
  options: options
});

const chart2 = new Chart(ctx2, {
  type: 'pie',
  data: data2,
  options: options
});

const chart3 = new Chart(ctx3, {
  type: 'line',
  data: data3,
  options: options
});

const chart4 = new Chart(ctx4, {
  type: 'bar',
  data: data4,
  options: options
});

const chart5 = new Chart(ctx5, {
  type: 'doughnut',
  data: data5,
  options: options
});

const chart6 = new Chart(ctx6, {
  type: 'line',
  data: data6,
  options: options
});




// actualizar los graficos cada 15 minutos
setInterval(() => {
  chart1.update();
  chart2.update();
  chart3.update();
  chart4.update();
  chart5.update();
  chart6.update();
}, 900000); // 15 minutos en milisegundos