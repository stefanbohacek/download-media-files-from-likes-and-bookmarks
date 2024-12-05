import getArgs from "./modules/getArgs.js";
import loadPosts from "./modules/loadPosts.js";
import downloadAttachments from "./modules/downloadAttachments.js";
import showError from "./modules/showError.js";

const account = getArgs("account");

if (!account) {
  showError("please provide an account handle", "account");
} else {
  try {
    const posts = await loadPosts(account);
    console.log(`found ${posts.length.toLocaleString()} posts...`);
    await downloadAttachments(account, posts);
    console.log("finished!");
  } catch (error) {
    showError(error);
  }
}
