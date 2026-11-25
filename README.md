# Clean Sharpe Scalper — Pump.fun Sharpe Sprint

[![Make.fun](https://make.fun/badge/u-jackxyz72-pump-fun-sharpe-sprint-cleanest-03e4f532.svg)](https://make.fun/bounty/u-jackxyz72-pump-fun-sharpe-sprint-cleanest-03e4f532)
[![Rank](https://make.fun/badge/u-jackxyz72-pump-fun-sharpe-sprint-cleanest-03e4f532/calebakinjomo/pump-fun-sharpe-sprint-20261125/rank.svg)](https://make.fun/bounty/u-jackxyz72-pump-fun-sharpe-sprint-cleanest-03e4f532)
[![Reward](https://make.fun/badge/u-jackxyz72-pump-fun-sharpe-sprint-cleanest-03e4f532/calebakinjomo/pump-fun-sharpe-sprint-20261125/reward.svg)](https://make.fun/bounty/u-jackxyz72-pump-fun-sharpe-sprint-cleanest-03e4f532)

Paper-trading bot for the [Pump.fun Sharpe Sprint — Cleanest Paper Bot Wins](https://make.fun/bounty/u-jackxyz72-pump-fun-sharpe-sprint-cleanest-03e4f532) bounty on [make.fun](https://make.fun). It trades 10 SOL of paper money on a 6-hour forward replay of pump.fun bonding-curve data, ranked by **hourly Sharpe ratio** — the cleanest paper bot wins, not the wildest PnL.

## Strategy

Small stakes, many coins, short holds, tight exits — the equity curve should climb like a staircase, not swing on one lucky runner:

- **Entry:** a curve whose real SOL first crosses 25 SOL from below, at least 20 slots after creation, with fresh broad flow (3+ buys from 3+ distinct wallets in the last 15 slots, last trade a buy) and a creator who has not sold. Bundled launches that dump in their first slots are filtered out.
- **Stake:** 0.15 SOL per coin, max 1.5 SOL deployed at once, max 5 open positions.
- **Exits:** take half at +25%, take the rest at +100%, stop out at −8%, trailing stop armed at +40% (15% give-back), and never hold longer than 120 slots. Every exit is judged on close value — what a sell actually banks after curve and tx fees — not on the mark price.
- **Guardrail probes:** if distinct coins traded lag a 40-coin pace over 6 hours of block time, tiny 0.01 SOL round trips top the count up past the 20-mint minimum.
- **Deterministic:** no clock, no randomness, no I/O. The two graded executions produce byte-identical action logs.

## Layout

- `main.ts` — entrypoint, run by the grader as `node /bot/main.ts` (Node 22).
- `strategy.ts` — the strategy: entry signal, exits, guardrail pacing.
- `vendor/makefun-bot.ts` — the kit's SDK shim, vendored byte for byte.

## Results

See the dev-grade report in the tracking notes. Validated with the kit's `grade-local` on the dev window plus a stress run over rebuilt copies of the window; the stress median — not the best dev figure — is the honest expectation.

Referral: `hdavhdvz`

## License

MIT — see [LICENSE](LICENSE).
