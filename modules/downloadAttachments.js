import { Downloader } from "nodejs-file-downloader";
import sleep from "./sleep.js";
import showError from "./showError.js";
import getUsernameAndServer from "./getUsernameAndServer.js";

export default async (account, urls) => {
  if (urls && urls.length) {
    const accountInfo = getUsernameAndServer(account);

    if (accountInfo.username && accountInfo.server) {
      for (let url of urls) {
        url = url.replace(
          `https://${accountInfo.server}/users/${accountInfo.username}/`,
          `https://${accountInfo.server}/api/v1/`
        );

        const resp = await fetch(url);
        const respJSON = await resp.json();
        if (respJSON.media_attachments && respJSON.media_attachments.length) {
          console.log(`downloading attachments from ${url}...`);

          for (const attachment of respJSON.media_attachments) {
            console.log(`downloading ${attachment.url}...`);

            const downloader = new Downloader({
              url: attachment.url,
              directory: `./downloads/${account}`,
              cloneFiles: false
            });

            try {
              const { filePath, downloadStatus } = await downloader.download();
              console.log("download finished");
            } catch (error) {
              console.log("download failed", error);
            }
            await sleep(1000);
          }
        }
        await sleep(1000);
      }
    } else {
      showError("please provide a valid account handle", "account");
    }
  } else {
    console.log(`no posts for ${account} found`);
  }
};
