# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository layout

This repo is a workspace for HeyGen **HyperFrames** video projects (videos authored as HTML + GSAP, rendered to MP4). There is no root build, lint, or test setup.

- `.claude/skills/` — vendored HyperFrames skills (`/hyperframes` is the entry point and routes to the other workflows). Pinned in `skills-lock.json` (source `heygen-com/hyperframes`). Treat as upstream content: refresh with `npx hyperframes skills update <name>` rather than hand-editing.
- `videos/<project>/` — one self-contained HyperFrames project per video. Run all commands from inside the project directory. Currently only `videos/operius-visibilite` (24 s French promo, no voice or music).

Each project has its own `CLAUDE.md` and `AGENTS.md` (identical boilerplate) covering the HyperFrames authoring rules and commands (`npm run check`, `npm run render`, `npx hyperframes preview --background`). Read the project's `BRIEF.md` first: it records the workflow, aspect ratio, timing and language.

## Notes

- Always load the relevant skill (start at `/hyperframes`) before writing or editing compositions; `npm run check` must pass after any `.html` edit.
- Project scripts pin `hyperframes@0.8.156`. Don't bump the pin without `npx hyperframes@latest upgrade --project . --check` and a passing `npm run check`.
- `videos/*/renders/*.mp4` are committed; `.hyperframes/` and `node_modules/` are gitignored.
