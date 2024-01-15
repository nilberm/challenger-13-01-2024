const submitForm = (event) => {
  event.preventDefault();

  const moreAcess = document.querySelector("#moreAcess");
  const morningId = document.querySelector("#morning");
  const afternoonId = document.querySelector("#afternoon");
  const eveningId = document.querySelector("#evening");

  const arrayTimes = returnArrayTimes();
  const arrayAnswers = calcTimes(arrayTimes);

  let morning = arrayAnswers[0];
  let afternoon = arrayAnswers[1];
  let evening = arrayAnswers[2];
  let moreAcessText;

  if (morning >= afternoon && morning >= evening) {
    moreAcessText = "Manhã";
  } else if (afternoon >= morning && afternoon >= evening) {
    moreAcessText = "Tarde";
  } else {
    moreAcessText = "Noite";
  }

  moreAcess.innerHTML = moreAcessText;
  morningId.innerHTML = morning;
  afternoonId.innerHTML = afternoon;
  eveningId.innerHTML = evening;
};

const returnArrayTimes = () => {
  const entryInputs = document.querySelectorAll(".entry");

  const entryValues = [];

  entryInputs.forEach(function (input) {
    entryValues.push(input.value);
  });

  return entryValues;
};

const calcTimes = (arrayTimes) => {
  let morning = 0;
  let afternoon = 0;
  let evening = 0;

  arrayTimes.map((time) => {
    if (time) {
      const timeConverter = parseFloat(time.replace(":", ""));

      if (timeConverter > 459 && timeConverter < 1159) {
        morning += 1;
      } else if (timeConverter > 1200 && timeConverter < 1759) {
        afternoon += 1;
      } else if (timeConverter > 1800 || timeConverter < 459) {
        evening += 1;
      }
    }
  });

  return [morning, afternoon, evening];
};
