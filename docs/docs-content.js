// Documentation article content: keyed by page ID (matches sidebar data-k)
(function(){
window.DOCS_ARTICLES = {

// ─────────────────────────────────────────────────────────────────
// 01: START
// ─────────────────────────────────────────────────────────────────

'start.welcome': {
  section: 'Start here',
  title: 'Welcome to Slipstream',
  lede: 'What Slipstream is, how to sign in, and where everything sits on the screen.',
  prev: null,
  next: ['start.quick', 'Quick start'],
  toc: ['sign-in', 'browser', 'layout', 'rail', 'menus', 'first-open', 'related'],
  tocLabels: ['Sign in with your LapLabs account', 'Use Chrome or Edge for local files', 'Find your way around the screen', 'Switch between the rail tabs', 'Use the menu bar', 'What you see the first time', 'Related'],
  body: `
<p>Slipstream is the LapLabs web app for iRacing telemetry. It runs in your browser: open a run from the LapLabs cloud or from your own telemetry folder, replay it on a 3D track with 2D plots underneath, race it against ghost laps, and dig deeper with plugins such as Timing and Corner Analysis.</p>
<!-- SHOT start.welcome: The whole app just after first sign-in: sample run loaded, Stint Folder on the left, 3D Track view with the transport buttons and playback bar under it, 2D Plot below, the rail on the right showing the Plugins tab, and the Try it checklist in the bottom-left corner -->
<h2 id="sign-in">Sign in with your LapLabs account</h2>
<p>Slipstream needs a LapLabs account, the same one you use on laplabs.net. Until you sign in, you only see the sign-in screen.</p>
<ol>
  <li>Open Slipstream. If you're already signed in to LapLabs in this browser, the button shows <strong>Checking…</strong> for a moment and then lets you straight in.</li>
  <li>Otherwise click <strong>Sign In</strong>. You go to the LapLabs sign-in page.</li>
  <li>Sign in, or create an account. You come back to Slipstream on the same link you opened.</li>
</ol>
<div class="callout tip">
  <span class="ic">&#10003;</span>
  <div>
    <span class="lbl">Tip</span>
    <p>Invite links survive sign-in: open a teammate's shared session link, sign in, and you land in their room.</p>
  </div>
</div>
<h2 id="browser">Use Chrome or Edge for local files</h2>
<p>Opening your own telemetry folder uses a browser feature that Chrome and Edge have and other browsers don't. Elsewhere, the <strong>iRacing Telemetry</strong> button in the Stint Folder stays grayed out. Picking a folder of dashboards for the Dash plugin has the same limit.</p>
<p>Without a local folder you can still open, analyze and share cloud runs.</p>
<h2 id="layout">Find your way around the screen</h2>
<p>From left to right:</p>
<ul>
  <li><strong>Stint Folder</strong> (left): every run you can load, cloud runs and your own files in one tree. Tick laps or files to load them. The <strong>Share session</strong> button sits in its title row. See <a href="docs-article.html?page=folder.open">Opening telemetry</a>.</li>
  <li><strong>3D Track</strong> (center, top): the car on the track. Under the view sit the transport buttons (play, rewind, lap jumps) and the playback bar, which you drag to move through the run. See <a href="docs-article.html?page=play.transport">Transport and speed</a> and <a href="docs-article.html?page=view3d.cameras">Cameras</a>.</li>
  <li><strong>2D Plot</strong> (center, bottom): channels such as Speed, Throttle and Brake against lap distance or time. See <a href="docs-article.html?page=plots.channels">Plots and channels</a>.</li>
  <li>The rail (right): a set of tabs for plugins and other tools, described below.</li>
</ul>
<p>Each plot also has its own sidebar of collapsible panels, on the left of the plot unless you move it in Preferences. The 3D sidebar holds panels such as <strong>Camera</strong>, <strong>Playlist</strong>, <strong>Ghosts</strong> and <strong>Channels + Traces</strong>. The 2D sidebar holds <strong>Channels</strong>. Click a panel's header to open or collapse it. Ghosts get their own section: start with <a href="docs-article.html?page=ghosts.basics">Ego and ghosts</a>.</p>
<h2 id="rail">Switch between the rail tabs</h2>
<ul>
  <li><strong>Plugins</strong>: analysis tools stacked as panels: Timing, Scatter, Dash, Segment Eval and Corner Analysis. See <a href="docs-article.html?page=plugins.rail">The plugin rail</a>.</li>
  <li><strong>Timeline</strong>: points along the lap that change the camera or playback speed, or show a note, as playback passes them. See <a href="docs-article.html?page=timeline.points">Timeline points</a>.</li>
  <li><strong>Assistant</strong>: a chat, marked <em>experimental</em>. Ask it about the loaded run (lap times, channel stats, corners) or ask it to do things for you, such as adding ghosts, moving the camera or jumping to a lap. It needs your own API key from Google Gemini or Anthropic (click <strong>Connect a provider</strong>), and the key is saved in this browser. See <a href="docs-article.html?page=assistant.using">Using the Assistant</a>.</li>
  <li><strong>Console</strong>: a <strong>Derived</strong> tab that lists derived channels and their values at the cursor, plus app messages and performance stats. See <a href="docs-article.html?page=plots.derived">Derived channels</a>.</li>
</ul>
<h2 id="menus">Use the menu bar</h2>
<ul>
  <li><strong>Tools</strong> &gt; <strong>Libraries</strong>: <strong>Vehicle Library Viewer...</strong> for car models, <strong>Track Library...</strong> for tracks, and <strong>Dash Library...</strong> for dashboards. See <a href="docs-article.html?page=settings.vehicles">Vehicle library</a> and <a href="docs-article.html?page=settings.tracks">Track library</a>.</li>
  <li><strong>Tools</strong> &gt; <strong>Preferences...</strong>: units (Imperial or Metric), plot settings such as which side the plot sidebars sit on, and more. See <a href="docs-article.html?page=settings.preferences">Preferences</a>.</li>
  <li><strong>Account</strong>: <strong>My Account ↗</strong> opens your account page on laplabs.net in a new tab, and <strong>Sign Out</strong> signs you out and returns you to the sign-in screen. The grayed-out line at the bottom shows your license.</li>
</ul>
<h2 id="first-open">What you see the first time</h2>
<p>After you sign in, the Stint Folder shows <strong>Loading cloud runs…</strong> and then Slipstream opens a sample run for you, ready to play. A <strong>Press play</strong> hint points at the <strong>Play</strong> button until you start playback.</p>
<p>A <strong>Try it</strong> checklist sits in the bottom-left corner. It lists six first steps and ticks each one off by itself as you do it, while a small marker points at the control for the next step. The <a href="docs-article.html?page=start.quick">Quick start</a> walks through the same steps. The checklist has three buttons:</p>
<ul>
  <li><strong>Reset the checklist</strong> (↺) clears the ticks so you can start over.</li>
  <li><strong>Collapse</strong> folds it down to its title (<strong>Expand</strong> opens it again).</li>
  <li><strong>Dismiss</strong> (×) hides it. A small <strong>Tour</strong> pill with your progress stays in the corner; click it to bring the checklist back.</li>
</ul>
<p>Your progress is remembered in this browser. If you arrive through a shared session link, the sample run doesn't open: you see the room's run instead.</p>
<h2 id="related">Related</h2>
<ul>
  <li><a href="docs-article.html?page=start.quick">Quick start</a></li>
  <li><a href="docs-article.html?page=folder.open">Opening telemetry</a></li>
  <li><a href="docs-article.html?page=share.sessions">Shared sessions</a></li>
</ul>
`,
},
'start.quick': {
  section: 'Start here',
  title: 'Quick start',
  lede: 'A short first session on the sample run: play it, scrub it, race ghosts, see where time is won and lost, and share it.',
  prev: ['start.welcome', 'Welcome to Slipstream'],
  next: ['folder.open', 'Opening telemetry'],
  toc: ['play', 'scrub', 'ghosts', 'trace', 'delta', 'share', 'related'],
  tocLabels: ['Press play', 'Drag the playback bar to scrub', 'Add ghosts to race against', 'Color the traces by time gained and lost', 'Plot a lap-time delta in the 2D chart', 'Share a live session', 'Related'],
  body: `
<p>This walk-through uses the sample run that opens when you first sign in, and follows the <strong>Try it</strong> checklist in the bottom-left corner. Each step ticks itself off as soon as you do it. If you dismissed the checklist, click the <strong>Tour</strong> pill in the same corner to bring it back.</p>
<!-- SHOT start.quick: The Try it checklist expanded with the first two steps ticked, and the green marker pointing at the + button in the 3D sidebar's Ghosts panel -->
<h2 id="play">Press play</h2>
<ol>
  <li>Find the transport buttons under the 3D Track view. On the sample run, a <strong>Press play</strong> hint points at the right one.</li>
  <li>Click the <strong>Play</strong> button, or press <code>Space</code>. The car drives around the track and the cursor in the 2D Plot moves with it.</li>
  <li>Click the same button again (now <strong>Pause</strong>), or press <code>Space</code>, to stop.</li>
</ol>
<p>Speed control and lap jumps are covered in <a href="docs-article.html?page=play.transport">Transport and speed</a>.</p>
<h2 id="scrub">Drag the playback bar to scrub</h2>
<p>The playback bar is the strip under the transport buttons. Its top lane covers the whole run; its bottom lane zooms in on the highlighted range, so small movements there give fine control.</p>
<ol>
  <li>Press on the bottom lane of the playback bar.</li>
  <li>Drag left or right. The car, the 3D view and the 2D Plot follow the cursor.</li>
  <li>Let go to stay there, then press play to carry on from that point.</li>
</ol>
<h2 id="ghosts">Add ghosts to race against</h2>
<p>A ghost is another lap drawn as a second car, so you can see exactly where it pulls away. The lap under your cursor is the ego, the one everything is compared against.</p>
<ol>
  <li>In the 3D Track sidebar, find the <strong>Ghosts</strong> panel. If it's collapsed, click its header to open it.</li>
  <li>Make sure <strong>Compare</strong> is set to <strong>Laps</strong>.</li>
  <li>Next to <strong>Top</strong>, set how many of the fastest laps you want (5 by default), then click the <strong>+</strong> button beside it (<em>Add the N fastest complete laps as ghosts</em>).</li>
</ol>
<p>Press play: the ghosts drive alongside you. The <strong>×</strong> button next to it (<em>Remove all ghosts</em>) clears them. More in <a href="docs-article.html?page=ghosts.basics">Ego and ghosts</a>.</p>
<h2 id="trace">Color the traces by time gained and lost</h2>
<ol>
  <li>In the 3D Track sidebar, open the <strong>Channels + Traces</strong> panel.</li>
  <li>Under <strong>Trace options</strong>, set <strong>Mode</strong> to <strong>Δt′ / time</strong>. When the panel is collapsed, the same choice is in a dropdown in its header.</li>
  <li>Look at the lines on the track. Instead of a channel such as Speed, their color now shows how quickly time is being gained or lost against the ego lap at each point.</li>
</ol>
<p>Set <strong>Mode</strong> back to <strong>Channel</strong> to color by a channel again. The other modes are explained in <a href="docs-article.html?page=view3d.traces">Track traces</a>.</p>
<h2 id="delta">Plot a lap-time delta in the 2D chart</h2>
<ol>
  <li>In the 2D Plot sidebar, open the <strong>Channels</strong> panel.</li>
  <li>Find the <strong>LapCurrentLapTime</strong> row. If it isn't listed, type the name in the <strong>Add variables…</strong> box, tick it and click <strong>Add</strong>.</li>
  <li>Click the <strong>Δ</strong> button at the start of that row (<em>Δ ghost−ego for LapCurrentLapTime</em>).</li>
</ol>
<p>The plot now shows only that channel, against lap distance, with one curve per ghost: how far ahead or behind your lap each ghost is at every point around the track. Click <strong>Δ</strong> again to go back to the normal view.</p>
<h2 id="share">Share a live session</h2>
<ol>
  <li>Click <strong>Share session</strong> in the Stint Folder title row.</li>
  <li>Pick <strong>I present</strong> (only you control the view; others watch) or <strong>Everyone drives</strong> (anyone in the room can), then click <strong>Create room</strong>.</li>
  <li>Click <strong>Copy invite link</strong> and send the link to a teammate. They sign in with their own LapLabs account and join you on the same run.</li>
</ol>
<p>The room also has a six-digit code, which others can type in under <strong>or join a code</strong>. Sharing works with cloud runs only; with a local file open, the popup says <strong>Open a cloud run to share a session.</strong> To end it, open the button again and click <strong>Leave session</strong>. See <a href="docs-article.html?page=share.sessions">Shared sessions</a>.</p>
<div class="callout tip">
  <span class="ic">&#10003;</span>
  <div>
    <span class="lbl">Tip</span>
    <p>That's the checklist done. Next, open your own telemetry: pick your iRacing telemetry folder in Chrome or Edge, or choose another cloud run. <a href="docs-article.html?page=folder.open">Opening telemetry</a> shows how.</p>
  </div>
</div>
<h2 id="related">Related</h2>
<ul>
  <li><a href="docs-article.html?page=folder.open">Opening telemetry</a></li>
  <li><a href="docs-article.html?page=play.range">Playback bar and range</a></li>
  <li><a href="docs-article.html?page=ghosts.basics">Ego and ghosts</a></li>
</ul>
`,
},

// ─────────────────────────────────────────────────────────────────
// 02: FOLDER
// ─────────────────────────────────────────────────────────────────

'folder.open': {
  section: 'Stint Folder',
  title: 'Opening telemetry',
  lede: 'Get telemetry into Slipstream: open the iRacing folder on your computer, or stream runs from the cloud.',
  prev: ['start.quick', 'Quick start'],
  next: ['folder.tree', 'The tree and selecting laps'],
  toc: ['local', 'reopen', 'files', 'cloud', 'filter', 'pools', 'related'],
  tocLabels: ['Open your telemetry folder', 'Reopen it next time', 'Check which files are listed', 'Use cloud runs', 'Show cloud, local or both', 'Switch to a private test pool', 'Related'],
  body: `
<p>The Stint Folder panel on the left is where telemetry comes in. It lists cloud runs published by LapLabs and the files in a telemetry folder on your computer, together in one tree.</p>
<!-- SHOT folder.open: Stint Folder panel header with the "Reopen telemetry" and "Change…" buttons, the Cloud / Local / Both filter set to Both, and a tree below mixing cloud rows (cloud badge) and local rows (IBT badge) -->
<h2 id="local">Open your telemetry folder</h2>
<ol>
  <li>In the Stint Folder panel, click <strong>iRacing Telemetry</strong>. A folder picker opens in your Documents folder.</li>
  <li>Go to your iRacing telemetry folder, usually <code>Documents&#92;iRacing&#92;telemetry</code>, and select it.</li>
  <li>Your browser asks whether Slipstream may view the files in that folder. Allow it.</li>
  <li>Slipstream scans the folder and shows <strong>Scanning folder&hellip;</strong> with a count of files read. The files then appear in the tree, and their lap counts fill in a moment later.</li>
</ol>
<p>If the tree stays empty, check that you picked the folder that holds the <code>.ibt</code> files, not a folder above it.</p>
<p>Your files stay on your computer. Slipstream reads them inside the browser and doesn't upload them. Opening a folder needs Chrome or Edge. In other browsers the button is grayed out, but cloud runs still work.</p>
<h2 id="reopen">Reopen it next time</h2>
<p>Slipstream remembers the folder you picked. Next time, the button shows <strong>Reopen</strong> followed by the folder's name, for example <strong>Reopen telemetry</strong>. Click it and allow access if the browser asks again. If access is refused, or the folder is gone, the picker opens so you can choose again.</p>
<p><strong>Reopen</strong> is also your refresh button. It picks up sessions you've driven since the last scan and reloads the list of cloud runs. Files that haven't changed load from a cache, so it's quick. To use a different folder, click <strong>Change&hellip;</strong>.</p>
<div class="callout note">
  <span class="ic">i</span>
  <div>
    <span class="lbl">Note</span>
    <p>Opening, reopening or changing a folder clears the ticks in the tree, so whatever you had loaded is unloaded. Tick the laps again to bring them back.</p>
  </div>
</div>
<h2 id="files">Check which files are listed</h2>
<ul>
  <li><code>.ibt</code> files, the telemetry iRacing records. They carry an <strong>IBT</strong> badge.</li>
  <li><code>.parquet</code> telemetry files. They carry a <strong>PQT</strong> badge.</li>
</ul>
<p>When an <code>.ibt</code> and a <code>.parquet</code> file share a name, they appear as one row with both badges, and Slipstream opens the Parquet copy. Only files sitting directly in the folder are listed: subfolders aren't scanned. A file that can't be read still appears, with its name in red.</p>
<h2 id="cloud">Use cloud runs</h2>
<p>Cloud runs are sessions LapLabs has published. They stream from the cloud, so you don't need a folder to use them. Slipstream loads the list when it starts (you'll see <strong>Loading cloud runs&hellip;</strong>), and a demo run opens straight away with its row already ticked.</p>
<p>Cloud runs sit in the same tree as your own files, marked with a cloud badge (&#9729;) on their file rows. Like your own files, they're named by session date, time and driver. When a cloud run and one of your files come from the same track, they appear under the same track row. Tick both in the same layout to load them together.</p>
<h2 id="filter">Show cloud, local or both</h2>
<p>Three buttons next to the folder buttons choose what the tree lists:</p>
<ul>
  <li><strong>Cloud</strong>: only cloud runs.</li>
  <li><strong>Local</strong>: only files from your folder.</li>
  <li><strong>Both</strong>: everything together. This is the default, and Slipstream starts on it each time.</li>
</ul>
<p>Pick <strong>Local</strong> when you only want to see your own sessions. The filter only changes what the tree lists. It doesn't delete or upload anything.</p>
<h2 id="pools">Switch to a private test pool</h2>
<p>If you're a member of a private test pool, a drop-down appears next to the filter. Choose <strong>Public demo</strong> for the public cloud runs, or your pool's name to list that pool's runs instead. Slipstream remembers your choice in this browser. To add your own sessions to a pool, see <a href="docs-article.html?page=share.sessions">Shared sessions</a>.</p>
<h2 id="related">Related</h2>
<ul>
  <li><a href="docs-article.html?page=folder.tree">The tree and selecting laps</a></li>
  <li><a href="docs-article.html?page=start.quick">Quick start</a></li>
  <li><a href="docs-article.html?page=ref.troubleshooting">Troubleshooting</a></li>
</ul>
`,
},
'folder.tree': {
  section: 'Stint Folder',
  title: 'The tree and selecting laps',
  lede: 'Find the session you want, then tick exactly the files, stints, outings or laps to load.',
  prev: ['folder.open', 'Opening telemetry'],
  next: ['play.transport', 'Transport and speed'],
  toc: ['levels', 'select', 'solo', 'filter', 'symbols', 'related'],
  tocLabels: ['Read the tree', 'Tick what you want to load', 'Load just one row', 'Filter, sort and zoom', 'What the columns and symbols mean', 'Related'],
  body: `
<p>Once your telemetry is listed, you choose what to load by ticking rows in the tree. Ticks take effect straight away, with no extra button to press.</p>
<!-- SHOT folder.tree: Stint Folder tree expanded from a track down to lap rows, one outing ticked (green-tinted parent rows), a lap row showing S1/S2/S3 sector splits and a gold star marker, an Out Lap row in gray, and the Selected files table with its Totals line below the tree -->
<h2 id="levels">Read the tree</h2>
<p>The tree has seven levels: Track &gt; Layout &gt; Car &gt; File &gt; Stint &gt; Outing &gt; Lap. Everything starts collapsed. Click &#9656; to open a row.</p>
<p>Layout rows show how many cars they hold in brackets, and car rows show how many files. File rows are named by session date, time and driver; hover over the name to see the original file name. Outings are the driving between pit visits, and their laps are listed in the order you drove them.</p>
<p>Lap rows show sector splits (<strong>S1</strong>, <strong>S2</strong> and so on) when the track has sectors. A sector that couldn't be timed shows <code>--</code>. Incomplete laps appear in gray with their duration: <strong>Out Lap</strong> and <strong>In Lap</strong> at the start and end of an outing, <strong>Reset Lap</strong> for a lap cut short by a reset or tow, and <strong>Partial</strong> for any other incomplete lap. These can't be ticked on their own; they load with their outing.</p>
<h2 id="select">Tick what you want to load</h2>
<ol>
  <li>Open a track, then a layout, then a car.</li>
  <li>Tick a file to load the whole session, or open it and tick just a stint, an outing or a lap.</li>
  <li>Keep ticking to add more. Each tick adds that data to what's loaded, and unticking removes it.</li>
</ol>
<ul>
  <li>Only one layout loads at a time, and its radio button shows which. Ticking a row in another layout switches to that layout with only that row ticked. Clicking a layout's radio button switches to it with nothing ticked yet.</li>
  <li>Adding or removing rows in the same layout keeps your ghosts and cursor where they are. Switching layouts starts fresh.</li>
  <li>A checkbox showing a dash means only part of what's underneath is ticked. Click it to tick everything underneath.</li>
  <li>Untick one lap inside a ticked file and the rest of the file stays ticked.</li>
  <li>Rows with something ticked inside are tinted green, so you can find your selection with the tree collapsed.</li>
</ul>
<p>Once something is ticked, the <strong>Selected files</strong> table appears below the tree. It has one row per file, showing the stints, outings, laps, best lap and time you've picked, plus a <strong>Totals</strong> line.</p>
<div class="callout note">
  <span class="ic">i</span>
  <div>
    <span class="lbl">Note</span>
    <p>In a <a href="docs-article.html?page=share.sessions">shared session</a>, only the person who started it can change the ticks. Everyone else's tree is locked and follows theirs.</p>
  </div>
</div>
<h2 id="solo">Load just one row</h2>
<p>File, stint, outing and lap rows have a <strong>Play</strong> button (&#9654;) before the name. Click it to load only that row: it gets ticked and everything else in the layout is unticked. It doesn't start playback; use the <a href="docs-article.html?page=play.transport">transport controls</a> for that.</p>
<h2 id="filter">Filter, sort and zoom</h2>
<ul>
  <li>Type in <strong>Filter track / layout&hellip;</strong> to narrow the tree by track or layout name. It ignores case and accents (&ldquo;nurburg&rdquo; finds N&uuml;rburgring) and also matches other names a circuit is known by.</li>
  <li>Type in <strong>Filter car&hellip;</strong> to narrow by car. With both filters filled in, a row has to match both.</li>
  <li>Click a column header to sort by it, and click again to reverse. Drag the edge of a header to resize its column.</li>
  <li>Hold <code>Ctrl</code> and turn the mouse wheel over the tree to make its text larger or smaller.</li>
</ul>
<h2 id="symbols">What the columns and symbols mean</h2>
<h3>Columns</h3>
<ul>
  <li><strong>Stints</strong>, <strong>Outings</strong>, <strong>Laps</strong>: how many the row contains.</li>
  <li><strong>Best</strong>: the fastest lap in the row. On a lap row, that lap's own time.</li>
  <li><strong>Time</strong>: the total time the row covers.</li>
  <li><strong>3D</strong>: on track and layout rows, whether there's a 3D model of the track. A green &#10003; means LapLabs has published one. A blue &#10003; means it comes from your own track folder (see <a href="docs-article.html?page=settings.tracks">Track library</a>). &#10007; means there's no model, so the 3D view falls back to a ribbon built from the GPS trace. ~ on a track row means its layouts differ.</li>
</ul>
<h3>Badges and markers</h3>
<ul>
  <li><strong>IBT</strong>: a raw iRacing file. <strong>PQT</strong>: a Parquet file. Cloud runs show <strong>PQT</strong>, and a local row can show both.</li>
  <li>&#9729;: a cloud run.</li>
  <li><strong>!!!</strong> after a red file name: the file couldn't be read. Hover over it to see why.</li>
  <li>&#9733; (gold): the fastest lap of everything you've ticked.</li>
  <li>&#9670; (cyan): the fastest lap in its file.</li>
  <li>&#9650; (green): the fastest lap in its stint.</li>
  <li>&#9679; (silver): the fastest lap in its outing, shown only when the stint has more than one outing.</li>
  <li>* after a lap time: that lap had an incident. Next to a higher row's <strong>Best</strong> time, the best lap there was an incident lap.</li>
</ul>
<p>A lap shows at most one marker, the widest one it earns.</p>
<h2 id="related">Related</h2>
<ul>
  <li><a href="docs-article.html?page=folder.open">Opening telemetry</a></li>
  <li><a href="docs-article.html?page=play.transport">Transport and speed</a></li>
  <li><a href="docs-article.html?page=ghosts.basics">Ego and ghosts</a></li>
</ul>
`,
},

// ─────────────────────────────────────────────────────────────────
// 03: PLAYBACK
// ─────────────────────────────────────────────────────────────────

'play.transport': {
  section: 'Playback',
  title: 'Transport and speed',
  lede: 'Play, pause, change speed and jump between laps, with every view following the same playback cursor.',
  prev: ['folder.tree', 'The tree and selecting laps'],
  next: ['play.range', 'Playback bar and range'],
  toc: ['find', 'play', 'speed', 'laps', 'status', 'points', 'related'],
  tocLabels: ['Find the transport', 'Play and pause', 'Change speed and play in reverse', 'Jump between segments and laps', 'Read the status line', 'Let Speed points set the pace', 'Related'],
  body: `
<p>Slipstream has one playback cursor. The car in the 3D view, the cursor line on the 2D plots, your dashes and the plugins all read the same position, so when you play, pause or jump to another lap, every view moves together. The transport is where you drive that cursor.</p>
<!-- SHOT play.transport: bottom of the 3D Track view showing the transport row (play button, lap buttons, status line) above the playback bar, with a lap loaded and playback running at +2.0 -->
<h2 id="find">Find the transport</h2>
<p>The transport is the row of buttons docked at the bottom of the <strong>3D Track</strong> view, just above the playback bar. The left group controls playback, the middle group moves between laps, and the status line sits on the right. Hover any button to see its name and, where it has one, its shortcut.</p>
<p>The keyboard shortcuts work wherever you are in the app, unless a text box, number field, dropdown or checkbox has focus. Right after you tick a lap in the Stint Folder, click the 3D view before pressing <code>Space</code>, or <code>Space</code> will untick the box instead of playing.</p>
<h2 id="play">Play and pause</h2>
<ol>
  <li>Click <strong>Play</strong> or press <code>Space</code>. Play always starts forward at normal speed (1&times;).</li>
  <li>Click <strong>Pause</strong> or press <code>Space</code> again to stop. The cursor stays where it is.</li>
  <li>Playback stops on its own when it reaches the end of the session (or the start, when playing in reverse), unless <strong>Loop range</strong> is on.</li>
</ol>
<p>In the demo, a <strong>Press play</strong> hint points at the button until you start playback for the first time.</p>
<h2 id="speed">Change speed and play in reverse</h2>
<p><strong>Fast-forward</strong> (<code>.</code>) and <strong>Rewind</strong> (<code>,</code>) work in steps of two. What each press does depends on what playback is doing at the time:</p>
<ul>
  <li><strong>Fast-forward while paused:</strong> starts playing forward at 2&times;.</li>
  <li><strong>Fast-forward while playing forward:</strong> doubles the speed (2&times;, 4&times;, 8&times;).</li>
  <li><strong>Fast-forward while playing in reverse:</strong> halves the reverse speed, so the rewind slows down.</li>
  <li><strong>Rewind while paused:</strong> starts playing in reverse at 1&times;.</li>
  <li><strong>Rewind while playing forward:</strong> halves the speed, for slow motion (0.5&times;, 0.25&times;).</li>
  <li><strong>Rewind while playing in reverse:</strong> doubles the reverse speed.</li>
</ul>
<p>In short: Fast-forward always pushes toward faster forward, Rewind toward faster reverse. Neither flips direction while you are playing, so Rewind during forward playback only slows you down. To play backwards, pause first, then press Rewind. Speed stays between 1/16&times; and 16&times; in either direction.</p>
<div class="callout tip">
  <span class="ic">&#10003;</span>
  <div>
    <span class="lbl">Tip</span>
    <p>For slow motion through a corner, press <code>Space</code> to play, then <code>,</code> once for half speed or twice for quarter speed. Press <code>Space</code> twice (pause, then play) to get back to normal speed.</p>
  </div>
</div>
<h2 id="laps">Jump between segments and laps</h2>
<p>A segment is one piece of what you loaded: a whole file, or a stint, outing or lap you ticked in the Stint Folder.</p>
<ul>
  <li><strong>Previous segment / restart current:</strong> goes back to the start of the segment you are in. Click again at the start to go to the previous segment.</li>
  <li><strong>Next segment:</strong> goes to the start of the next segment, or to the end of the session from the last one.</li>
  <li><strong>Previous lap</strong> (<code>Shift</code>+<code>,</code>): restarts the current lap first, then steps back a lap on the next press.</li>
  <li><strong>Next lap</strong> (<code>Shift</code>+<code>.</code>): goes to the start of the next lap.</li>
  <li><strong>Prev lap, same LapDistPct</strong> (<code>Ctrl</code>+<code>,</code>) and <strong>Next lap, same LapDistPct</strong> (<code>Ctrl</code>+<code>.</code>): move to the previous or next lap but keep your position on track, so you can flip between laps at the same corner.</li>
  <li><strong>Snap 2D plot to lap at cursor</strong> (<code>Ctrl</code>+<code>Space</code>): sets the playback range to the lap you are in, so the 2D plot shows just that lap. See <a href="docs-article.html?page=play.range">Playback bar and range</a>.</li>
</ul>
<p>The lap buttons do nothing when there is no lap in that direction.</p>
<h2 id="status">Read the status line</h2>
<p>The status line on the right shows three things, left to right:</p>
<ul>
  <li><strong>Speed:</strong> a pause symbol when paused. While playing, an arrow for the direction and the rate, for example +2.0 forward or -1.0 in reverse.</li>
  <li><strong>Lap:</strong> the lap number at the cursor, or a question mark when the file has no lap channel.</li>
  <li><strong>Position:</strong> session time (hours, minutes, seconds and tenths), or the lap distance as a percentage when the playback bar's X axis is set to LapDist %.</li>
</ul>
<h2 id="points">Let Speed points set the pace</h2>
<p>You don't have to change speed by hand. Timeline Speed points set the playback speed automatically as the cursor passes them, for example slowing down for a braking zone and speeding up again on the straight. A Speed point can also hold playback for a few seconds; a countdown ring on the 3D view shows when it will resume. Speed points only act while playback is running. See <a href="docs-article.html?page=timeline.points">Timeline points</a> to add them.</p>
<h2 id="related">Related</h2>
<ul>
  <li><a href="docs-article.html?page=play.range">Playback bar and range</a></li>
  <li><a href="docs-article.html?page=timeline.points">Timeline points</a></li>
  <li><a href="docs-article.html?page=ref.shortcuts">Keyboard and mouse</a></li>
</ul>
`,
},
'play.range': {
  section: 'Playback',
  title: 'Playback bar and range',
  lede: 'Scrub through the session, zoom into a window of it, and choose how that window follows the cursor.',
  prev: ['play.transport', 'Transport and speed'],
  next: ['ghosts.basics', 'Ego and ghosts'],
  toc: ['scrub', 'range', 'markings', 'buttons', 'follow', 'related'],
  tocLabels: ['Scrub through the session', 'Zoom into a range', 'Read the markings', 'Set snapping, axis and links', 'Pick a follow mode', 'Related'],
  body: `
<p>The playback bar sits under the transport at the bottom of the <strong>3D Track</strong> view. Its top lane is an overview of the whole session with a highlighted range window. Its bottom lane is a close-up of that window for precise scrubbing. The range window also sets what the 2D plot shows.</p>
<!-- SHOT play.range: the playback bar zoomed to two or three laps, showing the range window with its gold edges, lap ticks with L labels, best-lap shading and time on the overview lane, and the button grid on the left -->
<h2 id="scrub">Scrub through the session</h2>
<ol>
  <li>Drag along the bottom lane to move the cursor through the range window. The more you zoom in, the finer the control.</li>
  <li>To move a long way, click the top lane outside the range window, or grab the red-orange cursor line there and drag it.</li>
</ol>
<p>Every view follows while you drag. If the bar feels cramped, drag the divider above it upward; the lanes grow with it.</p>
<h2 id="range">Zoom into a range</h2>
<ul>
  <li><strong>Zoom:</strong> scroll the mouse wheel over the bar. Scroll up to zoom in, down to zoom out. The zoom is centered on the cursor, so it stays put on screen.</li>
  <li><strong>Move the window:</strong> on the top lane, drag inside the range window to slide it along the session.</li>
  <li><strong>Resize:</strong> drag either gold edge of the window.</li>
  <li><strong>One lap:</strong> press <code>Ctrl</code>+<code>Space</code> to fit the window to the lap at the cursor.</li>
</ul>
<p>While the 2D plot is linked (the default), zooming or panning it moves the range window, and double-clicking it shows the whole session again.</p>
<h2 id="markings">Read the markings</h2>
<ul>
  <li><strong>Green ticks with L numbers:</strong> the start of each lap. A lap that has a ghost is tinted in that ghost's color.</li>
  <li><strong>Light vertical lines:</strong> where each segment (each file, stint, outing or lap you loaded) begins.</li>
  <li><strong>Dashed magenta lines:</strong> sector boundaries, on tracks that have sectors.</li>
  <li><strong>Light blue shading, a diamond and a time:</strong> on the top lane, each segment's best complete lap and its time.</li>
  <li><strong>Small colored ticks on the bottom lane:</strong> <a href="docs-article.html?page=timeline.points">timeline points</a>, colored by type.</li>
  <li><strong>Teal dashed line with a diamond:</strong> the ghost sync point, once you set one.</li>
  <li><strong>Colored strip between the lanes:</strong> with two or more files loaded, shows which file is where. In sync mode on the Session Time axis, each file gets its own row with the driver's initials. The file you are following is brighter; click a row to follow that file. Hover to see the file's name.</li>
</ul>
<h2 id="buttons">Set snapping, axis and links</h2>
<p>The small buttons on the left of the bar come in two columns; hover one for its name. The left column holds four toggles:</p>
<ul>
  <li><strong>Snap range edges to detents</strong> (magnet): click to cycle off, lap and sector. When on, the window's edges and the cursor snap to nearby lap lines (or sector and lap lines) as you drag slowly; a quick drag glides past. The button lights blue for lap, magenta for sector.</li>
  <li><strong>Toggle X-axis: LapDist % vs Session Time</strong>: changes the bar's own axis. LapDist % gives every lap the same width; Session Time spaces it by elapsed time, so slow laps and stops take more room. The status line's position readout follows it. It needs a LapDistPct channel and doesn't change the 2D plot's axis.</li>
  <li><strong>Timeline: stack (stints end-to-end) vs sync (overlay on shared clock)</strong>: with several files loaded, Stack plays them one after another, and Sync places files recorded in the same session on one clock so they play side by side. See <a href="docs-article.html?page=ghosts.sync">Comparing outings and stints</a>.</li>
  <li><strong>Link 2D &harr; 3D range + cursor</strong>: on by default, so the 2D plot shows exactly the range window. Turn it off to zoom the 2D plot on its own. The cursor stays shared either way, and any extra 2D plots you add stay linked.</li>
</ul>
<h2 id="follow">Pick a follow mode</h2>
<p>The right column holds four follow modes. Only one can be on at a time; it lights purple, and clicking it again turns it off. A linked 2D plot scrolls along with the window.</p>
<ul>
  <li><strong>Jump-cut at range edge:</strong> when the cursor runs past the window's edge, the window jumps a whole window ahead (or back). Good for watching a long run page by page.</li>
  <li><strong>Loop range:</strong> playback wraps from the end of the window back to its start. Good for repeating one corner or one lap.</li>
  <li><strong>Auto-center range on cursor:</strong> the window slides to keep the cursor in the middle. Good for a smooth scrolling view.</li>
  <li><strong>Lock cursor at fixed offset within range:</strong> the window slides to keep the cursor where it was when you turned lock on. Good for keeping the cursor near the left edge to see what's coming.</li>
</ul>
<p>Slipstream remembers all of these buttons in your browser.</p>
<div class="callout note">
  <span class="ic">i</span>
  <div>
    <span class="lbl">Note</span>
    <p>Right-click the bottom lane for <strong>Set ghost sync point here</strong> and <strong>Reset sync point (lap start)</strong>, which choose the track position where ghosts are lined up in time. See <a href="docs-article.html?page=ghosts.sync">Comparing outings and stints</a>.</p>
  </div>
</div>
<h2 id="related">Related</h2>
<ul>
  <li><a href="docs-article.html?page=play.transport">Transport and speed</a></li>
  <li><a href="docs-article.html?page=ghosts.sync">Comparing outings and stints</a></li>
  <li><a href="docs-article.html?page=plots.navigate">Navigating plots</a></li>
</ul>
`,
},

// ─────────────────────────────────────────────────────────────────
// 04: GHOSTS
// ─────────────────────────────────────────────────────────────────

'ghosts.basics': {
  section: 'Ghosts',
  title: 'Ego and ghosts',
  lede: 'Replay other laps next to the one you are watching, so you can see exactly where time is won and lost.',
  prev: ['play.range', 'Playback bar and range'],
  next: ['ghosts.sync', 'Comparing outings and stints'],
  toc: ['playlist', 'fastest', 'rows', 'options', 'colors', 'related'],
  tocLabels: ['Add ghosts from the Playlist', 'Add your fastest laps', 'Manage your ghosts', 'Choose what ghosts show', 'Pick ghost colors', 'Related'],
  body: `
<p>The ego is the lap you're watching: whichever lap the playback cursor sits in as you play or scrub. Ghosts are other laps replayed alongside it, drawn as see-through cars in the 3D view. Ghosts reach beyond the 3D view too: the 2D plots can overlay their traces and gap curves, the Timing table colors ghosted laps, a dash can follow a ghost, and Corner Analysis can add ghosts for you.</p>
<!-- SHOT ghosts.basics: 3D view with the ego car and three translucent ghost cars with floating labels, the position table in the top-left corner, and the sidebar showing the Playlist with ghosted laps tinted and the Ghosts panel listing three ghost rows -->
<h2 id="playlist">Add ghosts from the Playlist</h2>
<p>The <strong>Playlist</strong> panel in the 3D view's sidebar lists every stint and its complete laps.</p>
<ol>
  <li>Click <strong>Expand</strong> (the ▸ arrow) on a stint to list its laps. The fastest one is marked ★.</li>
  <li>Click the small circle at the start of a lap row (<strong>Add as ghost</strong>). The circle fills with the ghost's color and the lap name turns the same color.</li>
  <li>Click the circle again (<strong>Remove ghost</strong>) to take that ghost away.</li>
</ol>
<p>The circle on a stint row (<strong>Ghost the fastest lap in this stint</strong>) adds its ★ lap in one click. The Timing table has the same <strong>Add as ghost</strong> circle on every lap.</p>
<h2 id="fastest">Add your fastest laps</h2>
<p>The <strong>Ghosts</strong> panel, below the Playlist, can pick laps for you. With <strong>Compare</strong> set to <strong>Laps</strong>:</p>
<ol>
  <li>Type how many laps you want in the <strong>Top</strong> field (5 to start with).</li>
  <li>Click <strong>+</strong> next to it to add that many of your fastest laps.</li>
</ol>
<p>Laps are ranked by lap time across every loaded file. Out laps, in laps and pit laps never count, and laps that already have a ghost are skipped. To rank each file on its own, tick <strong>Per file</strong> in <strong>Options ▾</strong>.</p>
<p><a href="docs-article.html?page=plugins.corners">Corner Analysis</a> can also add ghosts: the most typical laps of each driving style it finds.</p>
<h2 id="rows">Manage your ghosts</h2>
<p>Each ghost gets a row in the Ghosts panel. From left to right:</p>
<ul>
  <li><strong>Ghost color</strong>: the swatch. Click it to pick another color.</li>
  <li>The label: the driver's initials when known, the stint and lap (<code>S1L5</code> is lap 5 of stint 1) and the lap time. Double-click it to make that lap the ego: the cursor jumps to the same spot on track in that lap.</li>
  <li>The <strong>ego</strong> tag shows on an outing or stint row while the cursor is inside it. That one is your ego, so it isn't drawn as a second car.</li>
  <li>The checkbox (<strong>Hide ghost</strong>) hides a ghost without losing it.</li>
  <li><strong>Remove ghost</strong> (the bin) deletes it.</li>
</ul>
<p>To clear the whole list, click <strong>Remove all ghosts</strong> (the × next to the add button). The clock and ± buttons on a row control how a ghost lines up with you: see <a href="docs-article.html?page=ghosts.sync">Comparing outings and stints</a>.</p>
<h2 id="options">Choose what ghosts show</h2>
<p>Click <strong>Options ▾</strong> in the Ghosts panel. The ones you'll reach for most:</p>
<ul>
  <li><strong>Exclude incidents</strong>: skip laps that had an incident when adding your fastest laps.</li>
  <li><strong>Opaque ghosts</strong>: draw ghost cars solid instead of see-through.</li>
  <li><strong>Show labels</strong>: the floating tag above each ghost car, with its name and gap to you.</li>
  <li><strong>Position table</strong>: a small table in the top-left corner of the 3D view. It has one row per ghost on track, with gear, pedals, steering and gap, and the car furthest ahead on top. Tick <strong>Static order</strong> to keep the order you added them in.</li>
  <li><strong>Color by</strong>: how ghosts share colors (see below).</li>
  <li><strong>Camera focus</strong>: point the 3D camera at one ghost instead of the ego. Only the camera moves: your lap, plots and readouts stay put. It appears once you have a ghost.</li>
</ul>
<p>A negative gap (green) means the ghost is ahead of you; a positive one (red) means it's behind. Slipstream remembers these options in your browser, except Camera focus.</p>
<h2 id="colors">Pick ghost colors</h2>
<p>Each new ghost takes the next color from a 16-color palette. <strong>Color by</strong> changes how colors are shared:</p>
<ul>
  <li><strong>Slot</strong>: every ghost keeps its own color.</li>
  <li><strong>Driver</strong>: all ghosts of one driver share a color. Files with no driver name get one color per file.</li>
  <li><strong>File</strong>: one color per source file.</li>
  <li><strong>Stint</strong>: one color per stint.</li>
</ul>
<p>To choose group colors yourself, use the Colors tree at the bottom of the Playlist. It nests each driver, their files and each file's stints (<code>S1</code>, <code>S2</code>). Click a swatch to pick a color, or the ✕ beside it to clear it. A level you haven't colored inherits from the one above: a solid border means set here, a dashed border means inherited or automatic.</p>
<div class="callout tip">
  <span class="ic">&#10003;</span>
  <div>
    <span class="lbl">Tip</span>
    <p>The Colors tree only colors ghosts when Color by is Driver, File or Stint. In those modes, picking a color from a ghost's own swatch sets it for the whole group, just like the tree. The 2D plots' <strong>Color by</strong> is the same setting.</p>
  </div>
</div>
<h2 id="related">Related</h2>
<ul>
  <li><a href="docs-article.html?page=ghosts.sync">Comparing outings and stints</a></li>
  <li><a href="docs-article.html?page=plugins.corners">Corner Analysis</a></li>
  <li><a href="docs-article.html?page=play.range">Playback bar and range</a></li>
</ul>
`,
},
'ghosts.sync': {
  section: 'Ghosts',
  title: 'Comparing outings and stints',
  lede: 'Compare whole outings and stints, not just single laps, and control exactly how each ghost lines up with you.',
  prev: ['ghosts.basics', 'Ego and ghosts'],
  next: ['view3d.cameras', 'Cameras'],
  toc: ['outings', 'stints', 'same-race', 'modes', 'offset', 'sync-point', 'related'],
  tocLabels: ['Compare outings', 'Compare stints', 'Compare a race in one click', 'Choose Time or Lap-Dist', 'Offset a ghost in time', 'Move the sync point for lap ghosts', 'Related'],
  body: `
<p>A lap ghost replays one lap. The Ghosts panel can also replay an outing (pit exit to the next pit entry) or a stint (a whole loaded file). Pick one with the <strong>Compare</strong> buttons at the top of the panel: <strong>Laps</strong>, <strong>Outings</strong> or <strong>Stints</strong>. Ghosts you've already added stay when you switch.</p>
<!-- SHOT ghosts.sync: Ghosts panel in Stints mode with Sync set to Session, a "Same race" offer line at the top, three stint rows (one tagged ego, one with its time offset row open), and the 3D view showing the other two cars on track -->
<h2 id="outings">Compare outings</h2>
<ol>
  <li>Click <strong>Outings</strong>.</li>
  <li>Click <strong>+ This file (n)</strong> to add every outing in the file under the cursor, or <strong>+ All (n)</strong> for every outing in every loaded file.</li>
  <li>Under <strong>Sync</strong>, pick where they line up. <strong>Start</strong> lines them up at pit exit. <strong>Lap + LDP</strong> lines them up at a lap within each outing (<strong>Lap</strong> 1 is the first full lap) and a track position (<strong>LDP</strong>, from 0 at the start/finish line up to 0.999).</li>
</ol>
<p>Use Start to compare whole runs, out lap included. Use Lap + LDP to skip the out lap and start everyone together at the line. The outing the cursor is in is the ego. Outing ghosts wait while you're in the pit lane, and each disappears when its outing ends.</p>
<h2 id="stints">Compare stints</h2>
<ol>
  <li>Click <strong>Stints</strong>. Each loaded file is one stint.</li>
  <li>Click <strong>+ All stints (n)</strong>.</li>
  <li>Under <strong>Sync</strong>, pick <strong>Session</strong> or <strong>Lap + LDP</strong>.</li>
</ol>
<p><strong>Session</strong> puts every file on the shared race clock: use it for drivers from the same race, to watch it unfold as it happened, with the real race gap. <strong>Lap + LDP</strong> lines the cars up at a lap on each car's own lap count and a track position: use it for files from different sessions, or to put everyone on the same piece of track. If files on the race clock come from different sessions, the panel warns you.</p>
<p>The stint the cursor is in is the ego. Double-click another outing or stint row to jump into it and make it the ego.</p>
<h2 id="same-race">Compare a race in one click</h2>
<p>When two or more loaded files come from the same iRacing session (the same race instance and the same practice, qualifying or race), a line appears at the top of the Ghosts panel, such as <strong>Same race:</strong> followed by the drivers' initials. Click <strong>Compare</strong>: the panel switches to Stints, sets Sync to Session and adds those files.</p>
<p>Files without session IDs, such as offline sessions, get <strong>Looks like the same session:</strong> instead when their clocks started together and the cars were on track at the same time. The line goes away once all its files are on the race clock.</p>
<h2 id="modes">Choose Time or Lap-Dist</h2>
<p>Each ghost row has a mode button: a clock for Time, a ruler for Lap-Dist. Click it to switch that ghost. The <strong>All:</strong> buttons switch every ghost at once (<strong>Set every ghost to Time mode</strong> and <strong>Set every ghost to Lap-Dist mode</strong>).</p>
<ul>
  <li><strong>Time</strong>: the ghost runs on its own clock from the sync point. It's wherever that car was after the same amount of time, so a faster ghost pulls ahead of you on track.</li>
  <li><strong>Lap-Dist</strong>: the ghost is pinned to your track position. It stays beside you through every corner so you can compare lines and braking points, and the gap shows as time.</li>
</ul>
<p>The sync point is the start/finish line for laps (or your own, below), and the Sync setting for outings and stints. New lap and stint ghosts start in Time; new outing ghosts start in Lap-Dist.</p>
<h2 id="offset">Offset a ghost in time</h2>
<p>Outing and stint ghosts have a <strong>Time offset</strong> button (±). Use it when two files' clocks don't quite match.</p>
<ol>
  <li>Click ± on the ghost's row. A small offset row opens under it.</li>
  <li>Click <strong>Move this ghost 0.1 s back</strong> or <strong>Move this ghost 0.1 s ahead</strong>, or type seconds in the field: a positive number moves the ghost ahead, a negative one (such as -0.5) moves it back.</li>
  <li>Click <strong>No offset</strong> (the 0 button) to clear it.</li>
</ol>
<p>The ± changes color while an offset is set. In Lap-Dist mode the car stays pinned to you, so an offset only shifts the gap.</p>
<h2 id="sync-point">Move the sync point for lap ghosts</h2>
<p>Time-mode lap ghosts start their clock at the start/finish line, so that's where they meet you. To make them meet you elsewhere, such as a braking point you're working on:</p>
<ol>
  <li>Right-click the bottom lane of the playback bar at that spot.</li>
  <li>Choose <strong>Set ghost sync point here</strong>.</li>
</ol>
<p>A dashed marker shows the point in every lap. Your lap and each Time-mode lap ghost now count time from where that lap passed it, so the gap reads zero there, in the 2D time deltas too. To go back, choose <strong>Reset sync point (lap start)</strong> from the same menu.</p>
<div class="callout note">
  <span class="ic">i</span>
  <div>
    <span class="lbl">Note</span>
    <p>The sync point is a track position shared by every lap, and it only moves lap ghosts. Outings and stints line up with their own <strong>Sync</strong> buttons and the ± offset.</p>
  </div>
</div>
<h2 id="related">Related</h2>
<ul>
  <li><a href="docs-article.html?page=ghosts.basics">Ego and ghosts</a></li>
  <li><a href="docs-article.html?page=play.range">Playback bar and range</a></li>
  <li><a href="docs-article.html?page=plots.channels">Plots and channels</a></li>
</ul>
`,
},

// ─────────────────────────────────────────────────────────────────
// 09: ASSISTANT
// ─────────────────────────────────────────────────────────────────

'assistant.using': {
  section: 'Assistant',
  title: 'Using the Assistant',
  lede: 'Ask questions about your run in plain language, and let an AI model set up plots, ghosts and views for you.',
  prev: ['timeline.presentation', 'Building a presentation lap'],
  next: ['share.sessions', 'Shared sessions'],
  toc: ['connect', 'ask', 'drive', 'related'],
  tocLabels: ['Connect a provider', 'Ask about your run', 'Let it drive the app', 'Related'],
  body: `
<p>The Assistant is a chat with an AI model, using your own API key. It can read your loaded run and change what Slipstream shows. Open the <strong>Assistant</strong> tab in the right rail, between <strong>Timeline</strong> and <strong>Console</strong>. The <strong>experimental</strong> badge means answers can be wrong: check them against your plots.</p>
<!-- SHOT assistant.using: Assistant tab in the right rail with the experimental badge, Settings and Clear in its toolbar, and a short conversation where a question comparing two laps shows the lines "→ summarize_run({})" and "→ compare_laps(...)" above the reply -->
<h2 id="connect">Connect a provider</h2>
<p>You pay the provider directly (Gemini's free tier costs nothing). LapLabs doesn't charge for it.</p>
<ol>
  <li>Until you save a key, the settings are already open. <strong>Connect a provider</strong> (later <strong>Settings</strong>) shows or hides them.</li>
  <li>Pick a <strong>Provider</strong>. <strong>Gemini</strong> is free and needs no credit card. <strong>Anthropic</strong> is paid, billed per token.</li>
  <li>Click <strong>Get a key ↗</strong>, create a key and paste it into the API key field.</li>
  <li>Choose a <strong>Model</strong>. Both Gemini models are on the free tier. For Anthropic, Haiku 4.5 is the cheapest and fine for most questions. Pick <strong>Custom…</strong> to type any other model ID.</li>
  <li>Anthropic only: if your key is identity-linked, paste your <strong>Workspace ID</strong> (it starts with <code>wrkspc_</code>). Otherwise leave it empty.</li>
</ol>
<p>A Claude Pro or Max subscription doesn't work here: Anthropic needs an API key. Switching provider starts a new chat.</p>
<div class="callout note">
  <span class="ic">i</span>
  <div>
    <span class="lbl">Note</span>
    <p>Your key is saved, unencrypted, in this browser's local storage. Slipstream calls Google or Anthropic straight from your browser, not through LapLabs. It sends your messages plus whatever the tools read: lap times, channel statistics, sampled traces, your current view settings and, when the model asks, a screenshot of a plot. It doesn't send your telemetry files.</p>
  </div>
</div>
<h2 id="ask">Ask about your run</h2>
<p>Type in the box at the bottom and press <code>Enter</code> (<code>Shift</code>+<code>Enter</code> adds a line) or click <strong>Send</strong>. The Assistant can read:</p>
<ul>
  <li>A run summary: lap and sector times, your best and ideal laps, outlier laps and the sector where you lose the most time.</li>
  <li>A lap summary: top speed, peak g, throttle and brake use, fuel, tire temperatures and more.</li>
  <li>Statistics or sampled values of any channel over a lap, part of a lap or the playback range.</li>
  <li>Two laps compared, including where on track the time goes.</li>
  <li>Corners (T1, T2 and so on) with entry, apex and exit speeds, and a Segment Eval summary of each stint.</li>
  <li>A screenshot of the 2D plot, the 3D view or the Scatter plot.</li>
</ul>
<p>Try:</p>
<ul>
  <li>"Summarize this run. Where am I losing the most time?"</li>
  <li>"Compare lap 7 with my best clean lap. Where do I lose the time?"</li>
  <li>"What were my entry and apex speeds in T3 on lap 4?"</li>
</ul>
<p>Each step it takes shows as a line above its reply, such as <code>→ compare_laps({"lap_a":4,"lap_b":7})</code>. Hover over the line to see the result. Corner answers need the track's geometry. Provider errors (a wrong key or model, a rate limit) show in the chat.</p>
<h2 id="drive">Let it drive the app</h2>
<p>The Assistant can change playback and the cursor, the playback range, the 2D plot's channels, the 3D camera, track traces, the tire temperature overlay, the car model, ghosts, the ghost sync point, the rail tab, which plugins are on, and the Scatter, Corner Analysis, Segment Eval and Timing views. For example:</p>
<ul>
  <li>"Show brake, throttle and speed on the 2D plot and frame lap 6."</li>
  <li>"Add my three fastest laps as ghosts and switch to the Chase camera."</li>
  <li>"Color the racing line by throttle and open Corner Analysis on T8."</li>
</ul>
<p>If a reply ends with <em>(stopped: too many tool rounds)</em>, break the request into smaller steps. Click <strong>Clear</strong> to start over; the model forgets the conversation. A reload also starts a new chat.</p>
<h2 id="related">Related</h2>
<ul>
  <li><a href="docs-article.html?page=ghosts.basics">Ego and ghosts</a></li>
  <li><a href="docs-article.html?page=plugins.corners">Corner Analysis</a></li>
  <li><a href="docs-article.html?page=ref.troubleshooting">Troubleshooting</a></li>
</ul>
`,
},

};
})();
