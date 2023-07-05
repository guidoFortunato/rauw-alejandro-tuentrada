const startTimer = (dateToCompare, newTime, postMessage) => {
    const intervalId = setInterval(() => {
      const difference = dateToCompare.getTime() - newTime;
      const dias = Math.floor(difference / (1000 * 60 * 60 * 24))
        .toString()
        .padStart(2, "0");
      const horas = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
        .toString()
        .padStart(2, "0");
      const minutos = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        .toString()
        .padStart(2, "0");
      const segundos = Math.floor((difference % (1000 * 60)) / 1000)
        .toString()
        .padStart(2, "0");
  
      if (difference < 0) {
        clearInterval(intervalId);
        postMessage({ button: true });
      } else {
        newTime = newTime + 1000;
        postMessage({ dias, horas, minutos, segundos });
      }
    }, 1000);
  };
  
  self.onmessage = (event) => {
    const { dateToCompare, newTime } = event.data;
    startTimer(dateToCompare, newTime, self.postMessage);
  };