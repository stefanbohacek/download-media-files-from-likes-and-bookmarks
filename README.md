# Download media files from likes and bookmarks

This script will let you download media attachments from posts from a specific account that you liked or bookmarked. Note that you will need to install [node.js](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs) to run it.

## How to use

1. Download your Mastodon export file from *Preferences > Import and export > Export*.
2. Extract the `likes.json` and/or `bookmarks.json` files into the same folder as the `download.js` script.
3. Install dependencies with `npm install`.
4. Run the `download.js` script while specifying which account you want to download attachments for.

```sh
node download.js --account=@nyt_diff@botsin.space
```
