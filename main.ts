import {Plugin} from 'obsidian';

const embedTemplates = new Map([
    [/spotify:track:(?<id>\w+)/, (id: string) => `<iframe src="https://open.spotify.com/embed/track/${id}" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`],
    [/spotify:artist:(?<id>\w+)/, (id: string) => `<iframe src="https://open.spotify.com/embed/artist/${id}" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`],
    [/spotify:album:(?<id>\w+)/, (id: string) => `<iframe src="https://open.spotify.com/embed/album/${id}" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`],
    [/spotify:playlist:(?<id>\w+)/, (id: string) => `<iframe src="https://open.spotify.com/embed/playlist/${id}" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`],
    [/spotify:show:(?<id>\w+)/, (id: string) => `<iframe src="https://open.spotify.com/embed-podcast/show/${id}" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`],
    [/spotify:episode:(?<id>\w+)/, (id: string) => `<iframe src="https://open.spotify.com/embed-podcast/episode/${id}" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`],
    [/https:\/\/open.spotify.com\/track\/(?<id>\w+)/, (id: string) => `<iframe src="https://open.spotify.com/embed/track/${id}" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`],
    [/https:\/\/open.spotify.com\/artist\/(?<id>\w+)/, (id: string) => `<iframe src="https://open.spotify.com/embed/artist/${id}" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`],
    [/https:\/\/open.spotify.com\/album\/(?<id>\w+)/, (id: string) => `<iframe src="https://open.spotify.com/embed/album/${id}" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`],
    [/https:\/\/open.spotify.com\/playlist\/(?<id>\w+)/, (id: string) => `<iframe src="https://open.spotify.com/embed/playlist/${id}" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`],
    [/https:\/\/open.spotify.com\/show\/(?<id>\w+)/, (id: string) => `<iframe src="https://open.spotify.com/embed-podcast/show/${id}" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`],
    [/https:\/\/open.spotify.com\/episode\/(?<id>\w+)/, (id: string) => `<iframe src="https://open.spotify.com/embed-podcast/episode/${id}" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`],
]);

export default class SpotifyPlugin extends Plugin {
    async onload() {
        console.log('loading plugin');

        this.registerMarkdownPostProcessor((el: HTMLElement) => {
            el.querySelectorAll("img").forEach((img) => {
                embedTemplates.forEach((embed, regex) => {
                    let match = img.src.match(regex);
                    if (match) {
                        img.outerHTML = embed(match.groups.id);
                    }
                });
            });
        });
    }
}
