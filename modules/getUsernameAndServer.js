export default (account) => {
  let accountObject = {
    username: false,
    server: false,
  };
  const accountSplit = account.split("@");

  if (accountSplit.length === 3) {
    accountObject.username = account.split("@")[1];
    accountObject.server = account.split("@")[2];
  }

  return accountObject;
};
