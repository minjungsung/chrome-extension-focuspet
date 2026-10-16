# FocusPebble

Make room for one thing.

A simple focus and break timer with browser notifications. Keep your timer across restarts and build a daily focus habit.

## Development

Open `chrome://extensions`, enable Developer mode, choose **Load unpacked**, and select `extension/`. No build or package dependencies are needed.

Run `npm test` for logic tests and `npm run package` to validate and create a clean ZIP in `dist/`.

## Privacy

See [PRIVACY.md](PRIVACY.md) for stored data and permission explanations. No accounts, analytics, ads, or developer servers.

## Support

Report bugs through this repository's issue tracker. Include reproducible steps and the extension version, with private information removed.

## License

MIT.

## Features and limits

FocusPebble is a small focus timer that stays out of your way. Start a focus session, close the popup, and get a browser notification when it finishes.

FEATURES
- Focus, short break, and long break modes.
- Adjustable focus and short-break durations; a 15-minute long break.
- Pause, resume, and reset controls.
- An absolute deadline that survives popup closure and browser restart.
- Local daily counts for completed focus sessions.
- A toolbar badge while the timer is running.

The timer does not block websites or start the next session automatically. Browser notifications depend on Chrome and operating-system notification settings. If the computer sleeps or Chrome is closed, a notification can arrive after waking or reopening Chrome.

PRIVACY
Timer state, durations, and daily completion counts stay on this device. No accounts, analytics, advertising, or developer servers.
