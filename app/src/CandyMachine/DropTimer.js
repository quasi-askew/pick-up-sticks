import CountdownTimer from "../CountdownTimer";

const DropTimer = ({ machineStats }) => {
  // Get the current date and dropDate in a JavaScript Date object
  const currentDate = new Date();
  const dropDate = new Date(machineStats.goLiveData * 1000);

  // If currentDate is before dropDate, render our Countdown component
  if (currentDate < dropDate) {
    console.log("Before drop date!");
    // Don't forget to pass over your dropDate!
    return <CountdownTimer dropDate={dropDate} />;
  }

  // Else let's just return the current drop date
  return (
    <p className="mt-2 block text-gray-900 font-bold text-base">
      {`Drop Date: ${machineStats.goLiveDateTimeString}`}
    </p>
  );
};

export default DropTimer;
