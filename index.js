
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

