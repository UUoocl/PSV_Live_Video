import { Viewer } from '@photo-sphere-viewer/core';
import { EquirectangularVideoAdapter } from '@photo-sphere-viewer/equirectangular-video-adapter';
import { VideoPlugin } from '@photo-sphere-viewer/video-plugin';
import { AutorotatePlugin } from '@photo-sphere-viewer/autorotate-plugin';
import { SettingsPlugin } from '@photo-sphere-viewer/settings-plugin';
import { ResolutionPlugin } from '@photo-sphere-viewer/resolution-plugin';

const baseUrl = 'https://photo-sphere-viewer-data.netlify.app/assets/';

const viewer = new Viewer({
    container: 'viewer',
    adapter: [EquirectangularVideoAdapter, {
        autoplay: true, 
        muted: true,
    }],
    caption: 'live x4</b>',
    loadingImg: baseUrl + 'loader.gif',
    touchmoveTwoFingers: true,
    mousewheelCtrlKey: true,
    navbar: 'caption settings fullscreen',
    plugins: [
        [VideoPlugin],
        SettingsPlugin,
        [ResolutionPlugin, {
            defaultResolution: 'HD',
            resolutions: [
                {
                    id: 'HD',
                    label: 'Standard',
                    panorama: { source: './assets/media/testVideo.mp4' },
                },

            ],
        }],
    ],
});