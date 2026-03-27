# Stint Browser

The stint browser is your starting point for analysis. It scans your iRacing telemetry folder and presents a summary of every session.

## Setting the Telemetry Folder

Go to **Libraries > Stint Library** in the menu bar and browse to your telemetry folder. The default iRacing location is:

```
C:\Users\<you>\Documents\iRacing\telemetry
```

## Folder Summaries

Once a folder is set, the app scans all telemetry files and builds a summary for each session showing:

- **Car** — the vehicle used
- **Track** — circuit name and configuration
- **Stints** — number of stints in the session
- **Laps** — total lap count
- **Duration** — total session time

!!! info
    Summaries are cached after the first scan. Re-scanning only processes new or modified files.

## Selecting Data

Click a session in the stint browser to select it for analysis. The selected session feeds into your workflow — extract template, aux math, filter, and output.

## Workflow Panel

Below the stint browser, the workflow panel controls how the selected data is processed before visualization:

### Denoise

A one-click toggle that applies automatic noise reduction to all channels. Enabled by default — disable it if you need raw unfiltered signals.

### Extract Template

Choose which group of telemetry channels to analyze. See [Extract Templates](extract-templates.md) for details.

### Aux Math

Add custom derived channels using mathematical expressions. See [Aux Math](auxmath.md) for details.

### Filter

Apply signal processing to smooth, differentiate, or transform channels. See [Filters](filters.md) for details.