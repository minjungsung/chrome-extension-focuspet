# FocusPet

Five small minutes. One happy friend.

Mochi is already waiting. Start a focus session without a task, account, or pet setup. Completed sessions earn visible accessories; your friend never needs feeding or chores.

## See it work

![Actual Chrome walkthrough](store/demo/walkthrough.gif)

[Video and steps](store/demo/README.md). Fictional demo data; FocusPet completion is accelerated and disclosed.

## Features

- Start immediately with the default cat and 25-minute timer.
- Choose 5, 15 or 25 minutes; pause and resume.
- Completed focus sessions grow your friend through four accessory stages.
- Start a short break with one click after completion.
- Optional cat/bunny customization, tasks, duration settings and weekly counts.

## Limits

Your companion is a visual focus aid, not a website blocker. Timers use absolute deadlines and keep their state across popup closure and browser restarts. Notifications can arrive late if Chrome is closed, the device is asleep, or operating-system notification settings block them. FocusPet does not automatically start the next session. Growth reflects completed focus sessions, not measured attention.

## Feedback

The help page links to honest Chrome Web Store reviews. An optional, dismissible notice appears after repeated successful use across at least one week; preferences stay on this device.

## Development

Load `extension/` unpacked in Chrome Developer mode. Run `npm test` and `npm run package`. There is no runtime dependency or build step.

## Privacy

Local data includes timer state, durations, task intention, companion type and name, total completed focus sessions, and up to 90 days of daily counts. No page content or browsing history is accessed.

`storage` persists timer state and companion progress. `alarms` schedules timer completion. `notifications` displays generic completion messages.

See [PRIVACY.md](PRIVACY.md). No accounts, ads or analytics.

## Product evidence

[Market analysis and validation plan](docs/market-analysis.md). Adoption remains unvalidated.

## Support and license

Use the repository issue tracker; remove private information. MIT.
