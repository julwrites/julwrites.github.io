
load_csv('results.csv').then(() => {
  tasks.forEach((task) => {
    task();
  });
});
