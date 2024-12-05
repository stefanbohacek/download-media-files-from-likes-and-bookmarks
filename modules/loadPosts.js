import fs from "fs";
import showError from "./showError.js";
import getUsernameAndServer from "./getUsernameAndServer.js";

export default async (account) => {
  account = getUsernameAndServer(account);
  let urls = [];

  if (account.username && account.server) {
    const urlStart = `https://${account.server}/users/${account.username}/statuses/`;

    let likes = [];
    let bookmarks = [];

    likes = JSON.parse(fs.readFileSync(`likes.json`, "utf8"))["orderedItems"];
    bookmarks = JSON.parse(fs.readFileSync(`likes.json`, "utf8"))[
      "orderedItems"
    ];

    likes = likes.filter((url) => url.startsWith(urlStart));
    bookmarks = bookmarks.filter((url) => url.startsWith(urlStart));

    urls = [...new Set([...likes, ...bookmarks])];
  } else {
    showError("please provide a valid account handle", "account");
  }
  return urls;
};
