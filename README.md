## Spotify Embed Obsidian Plugin

This plugin allows you to use Spotify links and IDs in your files instead of the whole iframe embed code, and you still get your target embedded.

### How to use

You can use the Markdown image syntax, and use the links or Spotify URIs as the image URL, like this:

```markdown

## My favourite song

![](https://open.spotify.com/track/5OGzWbdJVqlHGIVqqZyoPX?si=C50KiMltTCuv2BhENn6n3g)

The same, but with Spotify URI

![](spotify:track:5OGzWbdJVqlHGIVqqZyoPX)

```

Supported types:

- Song
- Artist
- Album
- Playlist
- Podcast Show
- Podcast Episode

### Manually installing the plugin

- Copy over `main.js`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/obsidian-spotify-embed`.

