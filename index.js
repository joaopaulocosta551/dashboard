
  // Obtém o contexto do canvas
  var ctx = document.getElementById('meuGrafico').getContext('2d');

  // Cria um novo gráfico de linhas
  var meuGrafico = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
      datasets: [{
        label: '',
        data: [12, 19, 20, 5, 2, 3],
        borderColor: '#FEB388'
      }]
    }
  });


//   Segundo Gráfico

  var cty = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(cty, {
    type: 'pie',
    data: {
      labels: '',
      datasets: [{
        data: [10, 20, ],
        backgroundColor: [
          'rgba(254, 179, 136, 0.8)',
          'rgba(188, 174, 196, 0.8)',
          
        ]
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });



