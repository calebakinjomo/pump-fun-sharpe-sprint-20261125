// Clean Sharpe scalper — paper-trading bot for the pump.fun Sharpe Sprint.
// Ranked by hourly Sharpe ratio: small stakes, many coins, short holds and
// tight exits, so the equity curve climbs in small steps instead of swinging
// on one lucky runner. The strategy lives in strategy.ts; the SDK shim is
// the kit's sdk/ts/makefun-bot.ts, vendored byte for byte. The grader runs
// `node /bot/main.ts` with this directory mounted at /bot.

import { runBot } from './vendor/makefun-bot.ts';
import { createStrategy, DEFAULT_PARAMS } from './strategy.ts';

await runBot(createStrategy(DEFAULT_PARAMS));
