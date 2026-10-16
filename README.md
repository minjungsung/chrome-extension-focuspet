# FocusPet

A little friend for your next small win.

Meet Mochi. Choose a tiny cat or bunny, give your friend a name, and focus on one thing together. Completed focus sessions help your companion grow through four stages.

## Features

- Choose a cat or bunny and customize its name.
- Grow your companion by finishing focus sessions.
- Set a task intention and use focus, short-break, or long-break timers.
- Pause, resume, reset, and adjust focus and short-break durations.
- Get completion notifications and a running toolbar badge.
- See daily counts, a recent streak, and weekly focus progress.

## Limits

Your companion is a visual focus aid, not a website blocker. Timers use absolute deadlines and keep their state across popup closure and browser restarts. Notifications can arrive late if Chrome is closed, the device is asleep, or operating-system notification settings block them. FocusPet does not automatically start the next session. Growth reflects completed focus sessions, not measured attention.

## Development

Open `chrome://extensions`, enable Developer mode, choose **Load unpacked**, and select `extension/`. All runtime assets are packaged locally.

Run `npm test` for logic tests. Run `npm run package` to validate and create an upload ZIP in `dist/`. No build step or runtime package dependencies are required.

## Privacy

Local data includes timer state, durations, task intention, companion type and name, total completed focus sessions, and up to 90 days of daily counts. No page content or browsing history is accessed.

`storage` persists timer state and companion progress. `alarms` schedules timer completion. `notifications` displays generic completion messages.

See [PRIVACY.md](PRIVACY.md). No developer servers, advertising, or analytics.

## Support

Report reproducible bugs through this repository's issue tracker. Remove private information first.

## License

MIT.
