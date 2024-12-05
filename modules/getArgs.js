export default (...names) => {
  const processArgs = process.argv.slice(2);
  let args = {};


  for (let arg of processArgs) {
    const argSplit = arg.split("=");
    const argName = argSplit[0].replace("--", "");


    if (names.length === 0 || (names?.length && names.includes(argName))) {
      if (argSplit[1].includes(",")) {
        args[argName] = argSplit[1].split(",");
      } else {
        args[argName] = argSplit[1];
      }
    }
  }

  if (names.length === 1) {
    args = args[names[0]];
  }

  console.log("args", args)
  return args;
};
