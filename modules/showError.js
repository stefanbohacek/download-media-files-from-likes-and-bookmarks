export default (message, errorType) => {
  console.log(message);

  if (errorType) {
    switch (errorType) {
      case "account":
        console.log("example:");
        console.log("node download.js --account=@nyt_diff@botsin.space");
        break;
    }
  }
};
