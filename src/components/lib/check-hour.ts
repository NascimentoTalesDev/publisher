export const checkHour = () => {
  const currentTime = new Date().toLocaleTimeString();

  let hour = currentTime.split(":")[0];

  if (hour >= "06" && hour < "12") {
    return "bom dia";
  } else if (hour > "12" && hour < "18") {
    return "boa tarde";
  } else {
    return "boa noite";
  }
};
