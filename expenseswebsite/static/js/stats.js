const renderChat = (data, labels) =>{

    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [{
          label: 'Last 6 months expenses',
          data: data,
          borderWidth: 1,
        }]
      },
      options: {
        title: {
          display: true,
          text: "Expenses per category"
        },
      },
    });
};

const getChartData = () =>{
    console.log('fetching');
    fetch('/expense_category_summary').then((res) => res.json()).then((result) => {
          console.log('result', result);
          const category_data = result.expense_category_data;
          const [labels, data] = [
              Object.keys(category_data),
              Object.values(category_data)
          ];
        
          renderChat(data, labels);
    });
}

document.onload = getChartData();
