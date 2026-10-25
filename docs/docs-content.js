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
  <li><strong>3D</strong>: on track and layout rows, whether there's a 3D model of the track. A green &#10003; means LapLabs has published one (see <a href="docs-article.html?page=settings.tracks">Track library</a>). &#10007; means there's no model, so the 3D view falls back to a ribbon built from the GPS trace. ~ on a track row means its layouts differ.</li>
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
// 05: VIEW3D
// ─────────────────────────────────────────────────────────────────

'view3d.cameras': {
  section: '3D view',
  title: 'Cameras',
  lede: 'Choose how the 3D view watches the car, from a chase camera right behind it to automatic trackside TV shots, and learn how to move each one.',
  prev: ['ghosts.sync', 'Comparing outings and stints'],
  next: ['view3d.traces', 'Track traces'],
  toc: ['modes', 'follow', 'cockpit', 'free', 'auto', 'prefs', 'related'],
  tocLabels: ['Pick a camera mode', 'Move the Chase, Orbit and Spectator cameras', 'Ride in the cockpit', 'Fly the Free camera', 'Follow a ghost, or let the timeline drive', 'Change 3D settings in Preferences', 'Related'],
  body: `
<p>The <strong>Camera</strong> panel sits at the top of the 3D Track sidebar. It starts collapsed, but its header still has a dropdown, so you can switch cameras without opening it. Open it for the <strong>Level</strong> and <strong>Stabilize</strong> settings, which shape the Cockpit view.</p>
<!-- SHOT view3d.cameras: 3D view in Chase mode behind the ego car on a hill, with the Camera panel open at the top of the sidebar showing the Mode dropdown, the Level checkbox and the Stabilize slider -->
<h2 id="modes">Pick a camera mode</h2>
<p>Choose a mode from <strong>Mode</strong> in the panel, or from the header dropdown while it's collapsed:</p>
<ul>
  <li><strong>Chase</strong>: trails behind the car and turns with it. The everyday view for watching a lap.</li>
  <li><strong>Orbit</strong>: trails the car like Chase, but keeps looking from the same compass direction, so the car turns under you. Good for watching it rotate through corners.</li>
  <li><strong>Cockpit</strong>: the driver's eye view, to see braking points and turn-in as the driver did.</li>
  <li><strong>Free</strong>: fly anywhere with the keyboard, to inspect a piece of track or set up a shot.</li>
  <li><strong>Spectator</strong>: stays where you leave it and turns to keep the car in view, like a fan at the fence.</li>
  <li><strong>TV</strong>: automatic broadcast cameras beside the track. Each one sits ahead of the car, zooms in as the car gets farther away, and cuts to a new spot once the car has passed. The mouse and scroll wheel do nothing in TV.</li>
</ul>
<h2 id="follow">Move the Chase, Orbit and Spectator cameras</h2>
<ul>
  <li>Drag with the left mouse button to swing the camera around the car, from low behind it to nearly overhead.</li>
  <li>Scroll to move closer or farther away.</li>
  <li><code>Ctrl</code>+scroll to zoom the lens (the field of view) in or out. This works in every mode except TV.</li>
</ul>
<p>Switching to Chase or Orbit puts the camera straight behind the car again, and every mode change resets the field of view.</p>
<h2 id="cockpit">Ride in the cockpit</h2>
<p>In Cockpit, plain scrolling does nothing; <code>Ctrl</code>+scroll widens or narrows the view. Two settings in the Camera panel change how it moves:</p>
<ul>
  <li><strong>Level</strong>: keeps the horizon level and looks straight along the car's heading, instead of pitching and rolling with the car. Tick it if the motion is too much.</li>
  <li><strong>Stabilize</strong>: smooths the view so it still follows hills and banking (Eau Rouge, Lime Rock) but loses the shake from bumps and curbs. Drag it from <strong>0.00s</strong> (off) up to <strong>0.60s</strong>; higher values smooth more. It only acts while Level is off, and it needs the run's Pitch and Roll channels. Slipstream remembers it in this browser.</li>
</ul>
<p>If the eye sits in the wrong spot for a car model, adjust it with the <strong>Cam X</strong>, <strong>Cam Y</strong> and <strong>Cam Z</strong> fields in the Vehicle panel: see <a href="docs-article.html?page=view3d.car">Car and overlays</a>.</p>
<h2 id="free">Fly the Free camera</h2>
<p>Free starts from the current view and drifts to a stop when you let go of the keys.</p>
<ul>
  <li><code>W</code> and <code>S</code>: forward and back. <code>A</code> and <code>D</code>: left and right.</li>
  <li><code>Space</code> and <code>C</code>: up and down.</li>
  <li>Hold <code>Shift</code> to move faster.</li>
  <li>Drag with the left mouse button to look around.</li>
  <li><code>Ctrl</code>+scroll changes the field of view. Plain scroll does nothing.</li>
</ul>
<div class="callout note">
  <span class="ic">i</span>
  <div>
    <span class="lbl">Note</span>
    <p><code>Space</code> is also the play/pause key, so pressing it in Free starts or stops playback as well as lifting the camera. The flying keys are ignored while you're typing in a text box.</p>
  </div>
</div>
<h2 id="auto">Follow a ghost, or let the timeline drive</h2>
<p>The cameras follow the ego car unless you choose otherwise. To follow a ghost instead, set <strong>Camera focus</strong> in the Ghosts panel's <strong>Options ▾</strong> menu. Only the camera moves: your lap, plots and readouts stay with the ego. See <a href="docs-article.html?page=ghosts.basics">Ego and ghosts</a>.</p>
<p>Camera points on the timeline switch the mode for you as playback passes them, every lap, and can restore a framing you saved. You can still change the camera yourself; the next camera point takes over when playback reaches it. See <a href="docs-article.html?page=timeline.points">Timeline points</a>.</p>
<h2 id="prefs">Change 3D settings in Preferences</h2>
<p>Shadows under the cars, the FPS counter, the ego car's paint and finish, and a few other display options for the 3D view live in <strong>Tools</strong> &gt; <strong>Preferences...</strong>, on the <strong>Plot</strong> page. See <a href="docs-article.html?page=settings.preferences">Preferences</a>.</p>
<h2 id="related">Related</h2>
<ul>
  <li><a href="docs-article.html?page=view3d.traces">Track traces</a></li>
  <li><a href="docs-article.html?page=timeline.points">Timeline points</a></li>
  <li><a href="docs-article.html?page=settings.preferences">Preferences</a></li>
</ul>
`,
},
'view3d.traces': {
  section: '3D view',
  title: 'Track traces',
  lede: 'Color the racing lines on the 3D track by a channel, or by where time is won and lost against your lap.',
  prev: ['view3d.cameras', 'Cameras'],
  next: ['view3d.car', 'Car and overlays'],
  toc: ['channel', 'range', 'add', 'delta', 'scope', 'check', 'related'],
  tocLabels: ['Color the traces by a channel', 'Set the color range', 'Add more channels', 'Show time won and lost', 'Choose how much line to draw', 'Check what the traces show', 'Related'],
  body: `
<p>Every car in the 3D view draws its racing line on the track: the ego in its own color, each ghost in its ghost color. The <strong>Channels + Traces</strong> panel, at the bottom of the 3D Track sidebar, decides what those lines show and how much of the run they cover.</p>
<!-- SHOT view3d.traces: 3D view from above a corner with the ego line and two ghost lines shaded by Speed in the Jet colormap, the trace badge in the top-right corner, and the Channels + Traces panel open showing the channel list, Mode set to Channel, the colorbar with Auto ticked, and Scope and Style -->
<h2 id="channel">Color the traces by a channel</h2>
<ol>
  <li>Open the <strong>Channels + Traces</strong> panel. Under <strong>Trace options</strong>, check that <strong>Mode</strong> is <strong>Channel</strong>.</li>
  <li>Click a channel in the list, such as Speed or Brake. Every line now shades along its length by that channel's value.</li>
  <li>A colorbar appears under Mode, with the channel's name. Pick a colormap from the dropdown beside the name: <strong>Jet</strong> to start with, or <strong>Viridis</strong>, <strong>Plasma</strong>, <strong>Inferno</strong>, <strong>Cool</strong> or <strong>Hot</strong>. The left end of the bar is low, the right end high.</li>
  <li>To go back to plain colors, click <strong>None (solid)</strong> at the top of the list.</li>
</ol>
<h2 id="range">Set the color range</h2>
<p>With <strong>Auto</strong> ticked (between the two numbers under the colorbar), the colors stretch from the channel's lowest to highest value across the whole loaded run. To focus on a narrower band, such as light braking, untick Auto and type your own low (left box) and high (right box) values. Anything outside the range takes the end color.</p>
<h2 id="add">Add more channels</h2>
<p>The list starts with the channels the run loaded. To color by another one:</p>
<ol>
  <li>Click the <strong>Add variables…</strong> box. It lists every channel you can add; type to narrow the list.</li>
  <li>Click a channel. Slipstream fetches it and colors the traces by it straight away.</li>
</ol>
<p>Channels you add have a <strong>×</strong> (<strong>Remove added channel</strong>) to take them off again, and they clear when you open another run. If channel templates are available, a dropdown above the list swaps it for a template's channels; <strong>Run channels</strong> goes back to the run's own list. This list is separate from the 2D plot's, so changing it here leaves your plots alone.</p>
<h2 id="delta">Show time won and lost</h2>
<p>The other three choices in <strong>Mode</strong> compare each lap ghost with your ego lap (the lap the cursor is in) at the same point on track. They need at least one lap ghost: see <a href="docs-article.html?page=ghosts.basics">Ego and ghosts</a>.</p>
<ul>
  <li><strong>Δt (delta)</strong>: the running gap. A ghost's line is green where the ghost is ahead of your lap at that point, red where it's behind and white where you're level.</li>
  <li><strong>Δt′ / dist</strong>: how quickly the gap changes over distance. Green where the ghost is gaining time on you, red where it's losing, so the corners that matter stand out.</li>
  <li><strong>Δt′ / time</strong>: the same gain or loss, per second. It starts with a fixed range of -0.01 to 0.01 and <strong>Auto range</strong> off, because a spiky rate washes out when auto-fitted.</li>
</ul>
<p>In these modes your own line turns gray, since it's the reference, and outing and stint ghosts keep their solid color. All lap ghosts share one range so their colors compare fairly: set it with <strong>Auto range</strong> and the two <strong>Range</strong> boxes. Tick <strong>Invert (±)</strong> to flip the colors, so green shows where you're ahead.</p>
<p>To compare a channel instead of time, click the <strong>Δ</strong> at the start of a channel's row. Each ghost's line then shows whether that channel is higher (red) or lower (green) than on your lap at the same spot. Click the Δ again to go back.</p>
<h2 id="scope">Choose how much line to draw</h2>
<ul>
  <li><strong>Scope</strong>: <strong>Lap</strong> draws the lap the cursor is in (and each ghost's own lap), <strong>Segment</strong> the whole stint it belongs to, and <strong>All</strong> the entire loaded run.</li>
  <li><strong>Style</strong>: <strong>Line</strong> is a thin line. <strong>Ribbon</strong> is a flat band that stays easy to see from far away.</li>
  <li><strong>Up to cursor</strong>: draws each line only as far as the car has gotten, so it grows behind the car like a trail as you play.</li>
</ul>
<p>Slipstream remembers the trace options (mode, range, scope, style and the checkboxes) in this browser.</p>
<h2 id="check">Check what the traces show</h2>
<p>While the traces show a channel, a small badge in the top-right corner of the 3D view gives the channel's name, a strip of the colormap and the low and high ends of the range. It hides with None (solid) and in the time and Δ modes.</p>
<p>When the panel is collapsed, its header shows what the lines are colored by (a channel name, <strong>Solid</strong> or a mode such as <strong>Δt</strong>) next to a <strong>Mode</strong> dropdown, so you can switch modes without opening it.</p>
<div class="callout tip">
  <span class="ic">&#10003;</span>
  <div>
    <span class="lbl">Tip</span>
    <p>Trace points on the timeline change the channel, colormap, mode and range for you as playback passes them: brake pressure into a corner, throttle out of it. See <a href="docs-article.html?page=timeline.points">Timeline points</a>.</p>
  </div>
</div>
<h2 id="related">Related</h2>
<ul>
  <li><a href="docs-article.html?page=ghosts.basics">Ego and ghosts</a></li>
  <li><a href="docs-article.html?page=timeline.points">Timeline points</a></li>
  <li><a href="docs-article.html?page=plots.channels">Plots and channels</a></li>
</ul>
`,
},
'view3d.car': {
  section: '3D view',
  title: 'Car and overlays',
  lede: 'Choose the car model each file drives in the 3D view, color its tires by temperature, draw on the track, and get to know the other extras on screen.',
  prev: ['view3d.traces', 'Track traces'],
  next: ['plots.channels', 'Plots and channels'],
  toc: ['model', 'tires', 'pen', 'overlays', 'related'],
  tocLabels: ['Choose the car model', 'Color the tires by temperature', 'Draw on the track', 'Know the other overlays', 'Related'],
  body: `
<p>The <strong>Vehicle</strong> and <strong>Pen</strong> panels in the 3D Track sidebar look after the cars and your own drawings on the track. Both start collapsed: click a header to open it. While collapsed, each header still has a dropdown for the default model or the pen mode.</p>
<!-- SHOT view3d.car: Vehicle panel open with the Default model, Cars in this run listing one car on its Auto choice and two files on Same as car, Tire temp ticked with the Cold °C and Hot °C fields, and the ego car in Chase view with its tires shaded blue to red -->
<h2 id="model">Choose the car model</h2>
<p>Slipstream draws each car with a 3D model from the LapLabs vehicle library. Open the <strong>Vehicle</strong> panel:</p>
<ol>
  <li><strong>Default</strong> is the model for any car without a model of its own. Slipstream picks one to suit the car when you open a run, and again when you open a run with a different car.</li>
  <li>Under <strong>Cars in this run</strong>, each car in the loaded data has a dropdown. <strong>Auto (…)</strong> names the model it gets now: a LapLabs stand-in that matches the kind of car (stock car, prototype, single-seater or GT), or else the Default. Pick a model to use it for every file of that car.</li>
  <li>Each car's files are listed under it. Leave a file on <strong>Same as car</strong>, or give it a model of its own, for example to tell two drivers apart. Files from an unknown car offer <strong>Default</strong> instead.</li>
</ol>
<p>Ghosts drive the model of the file their lap came from, and the ego drives the model of the file under the cursor. Slipstream remembers these choices in this browser. To look through the models, see <a href="docs-article.html?page=settings.vehicles">Vehicle library</a>.</p>
<p>Below the cars, <strong>Tuning</strong> has number fields that adjust how the ego's model sits and moves (cockpit camera position, ride height, wheel offsets, steering and suspension ratios), saved per model in this browser, with <strong>Reset to config</strong> to restore the model's own values.</p>
<h2 id="tires">Color the tires by temperature</h2>
<ol>
  <li>In the Vehicle panel, tick <strong>Tire temp</strong>.</li>
  <li>Each tire on the ego car turns a color from blue (cold) to red (hot), in three bands across the tread: its left, middle and right.</li>
  <li>Set the scale with <strong>Cold °C</strong> (fully blue, 60 to start with) and <strong>Hot °C</strong> (fully red, 120 to start with).</li>
</ol>
<ul>
  <li><strong>Blend</strong>: when ticked, the three bands fade into each other. Untick it for hard stripes, so each zone reads on its own.</li>
  <li><strong>Apply to ghosts</strong>: color the ghost cars' tires too.</li>
</ul>
<p>The colors come from iRacing's tire temperature channels, three per tire: <code>LFtempL</code>, <code>LFtempM</code> and <code>LFtempR</code> for the left front, and the same for <code>RF</code>, <code>LR</code> and <code>RR</code>. If a file doesn't have them, its tires stay blue, so solid blue can mean missing data rather than cold tires. Slipstream remembers these settings in this browser, and Tire Temp points on the timeline can switch the overlay on and off as playback passes them.</p>
<h2 id="pen">Draw on the track</h2>
<ol>
  <li>Open the <strong>Pen</strong> panel and set <strong>Mode</strong> to <strong>Track</strong>.</li>
  <li>Pick a <strong>Color</strong> and a <strong>Width</strong> (1 to 32 pixels).</li>
  <li>Start on the track and drag with the left mouse button. The line sticks to the track surface, so it stays in place as the camera moves.</li>
</ol>
<p>To remove one line, set Mode to <strong>Eraser</strong> and click it. <strong>Clear strokes</strong> removes them all. Set Mode back to <strong>Off</strong> when you're done: while the pen is on, dragging and scrolling don't move the camera.</p>
<div class="callout note">
  <span class="ic">i</span>
  <div>
    <span class="lbl">Note</span>
    <p>Drawings aren't saved, so reloading the page clears them. In a shared session, everyone in the room sees your drawings. See <a href="docs-article.html?page=share.sessions">Shared sessions</a>.</p>
  </div>
</div>
<h2 id="overlays">Know the other overlays</h2>
<ul>
  <li><strong>Position table and ghost labels</strong>: the table in the top-left corner and the tags above ghost cars. Turn them on or off in the Ghosts panel's <strong>Options ▾</strong>. See <a href="docs-article.html?page=ghosts.basics">Ego and ghosts</a>.</li>
  <li><strong>Trace badge</strong>: the top-right badge naming the channel the lines are colored by. See <a href="docs-article.html?page=view3d.traces">Track traces</a>.</li>
  <li><strong>Notes</strong>: text from timeline Note points. A ticker scrolls in along the top or bottom edge of the view as you near the note's spot; a billboard stands on the track there and pops open as you approach. A note can also carry a small inset plot of one channel over a stretch of track, with a dot for each car, shown while you're in that stretch. See <a href="docs-article.html?page=timeline.points">Timeline points</a>.</li>
  <li><strong>Countdown ring</strong>: a green ring at the top of the view with a seconds count, shown when a timeline Speed point has paused playback. Playback carries on when the ring empties. Press <strong>Play</strong> (or <code>Space</code>) to carry on sooner, or scrub away to cancel.</li>
  <li><strong>FPS counter</strong>: the frame rate and the slowest recent frame, such as <code>60 fps · 4.2 ms max</code>. It only shows if you turn on <strong>Show FPS counter in 3D plots</strong> in <a href="docs-article.html?page=settings.preferences">Preferences</a>.</li>
</ul>
<h2 id="related">Related</h2>
<ul>
  <li><a href="docs-article.html?page=settings.vehicles">Vehicle library</a></li>
  <li><a href="docs-article.html?page=timeline.points">Timeline points</a></li>
  <li><a href="docs-article.html?page=ghosts.basics">Ego and ghosts</a></li>
</ul>
`,
},

// ─────────────────────────────────────────────────────────────────
// 06: PLOTS
// ─────────────────────────────────────────────────────────────────

'plots.channels': {
  section: '2D plots',
  title: 'Plots and channels',
  lede: 'Draw any telemetry channel along the lap, stack up to four plots, and line your ghosts up against you.',
  prev: ['view3d.car', 'Car and overlays'],
  next: ['plots.navigate', 'Navigating plots'],
  toc: ['stack', 'axes', 'channels', 'rows', 'ghosts', 'delta', 'related'],
  tocLabels: ['Add, close and resize plots', 'Set each plot\'s axes', 'Choose which channels to plot', 'Show, hide and color channels', 'Overlay ghost traces', 'See the difference to each ghost', 'Related'],
  body: `
<p>The 2D plots under the 3D view draw your telemetry channels as lines. They share the playback cursor, so the red-orange line on every plot marks the same moment as the car in the 3D view. Each plot keeps its own channels, axes and ghost options.</p>
<!-- SHOT plots.channels: two stacked 2D plots under the 3D view, the top one showing Speed with two ghost traces, the bottom one Throttle and Brake; the top plot's sidebar shows the Options panel (LapDist, Fit Y) and the Channels panel with the template picker, the Add variables box, the Ghosts and Color by controls, and channel rows with their Δ, S, eye and color buttons -->
<h2 id="stack">Add, close and resize plots</h2>
<ul>
  <li>Click <strong>Add a 2D plot</strong> (the + in a plot's <strong>2D Plot</strong> title bar) to add a plot at the bottom of the stack. You can have up to four.</li>
  <li>Click <strong>Close this plot</strong> (the × beside it) to remove a plot. It only shows when you have more than one.</li>
  <li>Drag the divider between two plots to resize them.</li>
</ul>
<p>A new plot starts with the run's default channels. Extra plots aren't kept when you reload the page: you start again with one.</p>
<h2 id="axes">Set each plot's axes</h2>
<p>The <strong>Options</strong> panel at the top of each plot's sidebar has two buttons:</p>
<ul>
  <li><strong>X axis</strong>: switch between <strong>LapDist</strong> (track position, so every lap gets the same width) and <strong>Time</strong> (playback time, so slow laps and stops take more room). Each plot has its own setting, separate from the playback bar's axis button, and it resets to LapDist when you reload.</li>
  <li><strong>Y axis</strong>: <strong>Fit Y</strong> (the default) scales the vertical axis to what's on screen, so zooming into a corner fills the plot. <strong>Full Y</strong> keeps the whole session's range, so the scale stays put as you zoom. Slipstream remembers this one.</li>
</ul>
<p>Channels on a plot share one vertical axis, so put ones with very different ranges, such as RPM and Throttle, on separate plots.</p>
<h2 id="channels">Choose which channels to plot</h2>
<p>To swap the whole set, use the picker at the top of the <strong>Channels</strong> panel:</p>
<ul>
  <li><strong>Run channels</strong>: the default set your run opened with.</li>
  <li>A named set, such as Base, Input, Brakes or Tire Temps. These come from the LapLabs cloud library and apply straight away.</li>
  <li><strong>Custom</strong>: shows up when you add or remove channels after picking a named set.</li>
</ul>
<p>To add single channels:</p>
<ol>
  <li>Click the <strong>Add variables…</strong> box. A list opens with every channel you can add.</li>
  <li>Type part of a name to filter the list, such as <code>temp</code>.</li>
  <li>Tick the channels you want, or click <strong>Select matches</strong> to tick everything the filter shows.</li>
  <li>Click <strong>Add</strong>. If the filter leaves just one channel, <code>Enter</code> adds it without ticking. <code>Esc</code> closes the list.</li>
</ol>
<h2 id="rows">Show, hide and color channels</h2>
<p>Each channel row has, from left to right:</p>
<ul>
  <li><strong>Δ</strong>: plot this channel as ghost minus you (see below).</li>
  <li><strong>S</strong> (solo): draw only this channel. Solo several to see just those. Soloing also brings up that channel's ghost traces.</li>
  <li>The eye (<strong>Hide channel</strong> / <strong>Show channel</strong>): hide the line but keep the row.</li>
  <li>The swatch (<strong>Change curve color</strong>): pick another color. <strong>Reset to default color</strong> (⟲) appears once you've changed it.</li>
  <li><strong>Remove channel</strong> (×): on channels you've added, and on every channel once you've picked a named set.</li>
</ul>
<h2 id="ghosts">Overlay ghost traces</h2>
<p>Once you have ghosts (see <a href="docs-article.html?page=ghosts.basics">Ego and ghosts</a>), a <strong>Ghosts</strong> checkbox appears in the Channels header. Tick it to draw each ghost's channels as thin, see-through lines in the ghost's color.</p>
<ul>
  <li>Lap ghosts are drawn over the lap you're in: lined up by track position on a LapDist axis, or by time into the lap on a Time axis.</li>
  <li>Outing and stint ghosts are drawn alongside your whole outing or stint.</li>
  <li><strong>Color by</strong> appears next to it once it's ticked: <strong>Slot</strong>, <strong>Driver</strong>, <strong>File</strong> or <strong>Stint</strong>. It's the same setting as in the Ghosts panel, so it changes the 3D view too.</li>
</ul>
<h2 id="delta">See the difference to each ghost</h2>
<p>Click <strong>Δ</strong> on a channel to plot each visible ghost minus you (the lap under the cursor): one curve per ghost, in its color, around a dashed zero line.</p>
<ul>
  <li>On a time channel such as LapCurrentLapTime, Δ is the time gap. Above zero, the ghost is behind you at that point; below zero, it's ahead. Lap ghosts read zero at the start/finish line, or at the sync point if you've moved it (see <a href="docs-article.html?page=ghosts.sync">Comparing outings and stints</a>).</li>
  <li>On any other channel, such as Speed or Brake, Δ is the ghost's value minus yours at the same spot on track.</li>
</ul>
<p>Only one channel can be in Δ at a time. Turning it on solos the channel and switches the plot to LapDist, since lap deltas are measured by track position. Switching back to Time turns Δ off, unless you have outing or stint ghosts. Click Δ again to clear it.</p>
<div class="callout tip">
  <span class="ic">&#10003;</span>
  <div>
    <span class="lbl">Tip</span>
    <p>For a quick lap comparison, add LapCurrentLapTime, ghost your fastest lap, then click Δ on the LapCurrentLapTime row. The curve climbs where you gain and falls where you lose.</p>
  </div>
</div>
<h2 id="related">Related</h2>
<ul>
  <li><a href="docs-article.html?page=plots.navigate">Navigating plots</a></li>
  <li><a href="docs-article.html?page=plots.derived">Derived channels</a></li>
  <li><a href="docs-article.html?page=ghosts.basics">Ego and ghosts</a></li>
</ul>
`,
},
'plots.navigate': {
  section: '2D plots',
  title: 'Navigating plots',
  lede: 'Zoom, pan, scrub and read exact values on a 2D plot with the mouse and a few keys.',
  prev: ['plots.channels', 'Plots and channels'],
  next: ['plots.derived', 'Derived channels'],
  toc: ['zoom', 'scrub', 'readout', 'lines', 'range', 'related'],
  tocLabels: ['Zoom and pan', 'Move the cursor with Ctrl', 'Read values with Shift', 'Read the lines on a plot', 'Follow the playback range', 'Related'],
  body: `
<p>A 2D plot has no zoom buttons and no help on screen: everything is done with the mouse and a few keys. This page lists what each one does and how a plot follows the playback range. It all works the same on every plot in the stack.</p>
<!-- SHOT plots.navigate: a 2D plot zoomed into one braking zone with Shift held, showing the readout box beside the red-orange cursor line with a time header and rows for Speed, Brake and two ghosts, cursor dots on each line, and a green lap line and a dashed magenta sector line in view -->
<h2 id="zoom">Zoom and pan</h2>
<ul>
  <li><strong>Zoom:</strong> scroll the mouse wheel over the plot, up to zoom in and down to zoom out. Only the horizontal axis zooms, around the point under the mouse pointer. The vertical axis follows the plot's Fit Y or Full Y setting.</li>
  <li><strong>Pan:</strong> click and drag left or right to slide along the session.</li>
  <li><strong>Reset:</strong> double-click the plot to show the whole session again.</li>
</ul>
<p>With Fit Y on, the vertical axis rescales to whatever is on screen, so zooming into one corner gives you a close look at small differences.</p>
<h2 id="scrub">Move the cursor with Ctrl</h2>
<p>Hold <code>Ctrl</code> and move the mouse over the plot: the playback cursor follows the pointer, and the 3D view, the playback bar, your dashes and the other plots follow it. You don't need to click. <code>Ctrl</code>+click jumps the cursor to that spot without starting a pan.</p>
<p>Zoom in first and this becomes a fine control for creeping through a braking zone or a gear change. Let go of <code>Ctrl</code> to go back to panning.</p>
<h2 id="readout">Read values with Shift</h2>
<p>Every line has a dot where it crosses the cursor. Hold <code>Shift</code> to open a readout box beside the cursor line (it moves to the left of the line near the right edge). It shows:</p>
<ul>
  <li>A header with the session time at the cursor, such as <code>t = 1834.250 s</code>.</li>
  <li>A row per visible channel: its name, value (to four significant figures) and unit, with a swatch in the line's color.</li>
  <li>With ghost traces on, a row per ghost and channel, such as <code>L5 Speed</code> for a lap 5 ghost. Outing and stint ghosts use their ghost label.</li>
  <li>With a channel in Δ, a row per ghost with its difference, such as <code>Δ L5</code>.</li>
</ul>
<p>Rows are sorted from the highest value down. <code>Shift</code> works wherever the mouse is, but the box only shows while the cursor line is in view.</p>
<p>A ghost's dot sits where that ghost really is, so it can drift off the cursor line. On a LapDist plot, a Time-mode ghost that's ahead of you shows its dot ahead of the line.</p>
<h2 id="lines">Read the lines on a plot</h2>
<ul>
  <li>The red-orange vertical line is the playback cursor.</li>
  <li>Thin green lines mark the start of each lap.</li>
  <li>Dashed magenta lines mark sector boundaries, when the track has sectors.</li>
  <li>A thick red line marks a join between separate pieces of the telemetry you loaded, such as the end of one file and the start of the next.</li>
  <li>Thin, see-through lines in ghost colors are ghost traces. A dashed line at zero means a channel is in Δ.</li>
</ul>
<p>The title under the horizontal axis reads <strong>LapDistPct (unwrapped)</strong> or <strong>Playback Time</strong>, matching the plot's X axis button. On LapDist the ticks count laps from the start of what you loaded, so 2.50 is halfway around the third lap.</p>
<h2 id="range">Follow the playback range</h2>
<p>The range window on the playback bar and the 2D plots are linked by default (<strong>Link 2D &harr; 3D range + cursor</strong> on the playback bar). While a plot is linked:</p>
<ul>
  <li>Zooming or panning the plot moves the range window, and dragging the window moves the plot. Double-clicking the plot resets both.</li>
  <li>All linked plots show the same stretch, so a stack of plots zooms together.</li>
  <li>Press <code>Ctrl</code>+<code>Space</code> (or click <strong>Snap 2D plot to lap at cursor</strong> on the transport) to fit the plots to the lap you're in.</li>
  <li>The follow modes, such as <strong>Auto-center range on cursor</strong>, scroll the plots as you play.</li>
</ul>
<p>Turn the link off to zoom the plot you started with on its own: it keeps its current view, and its zoom no longer moves the range window. The link button only affects that first plot; plots you add always stay linked. The cursor is shared either way.</p>
<div class="callout note">
  <span class="ic">i</span>
  <div>
    <span class="lbl">Note</span>
    <p><code>Ctrl</code>+<code>Space</code> and the other playback keys are ignored while you're typing in a box, such as the Add variables… box. Click on the plot first.</p>
  </div>
</div>
<h2 id="related">Related</h2>
<ul>
  <li><a href="docs-article.html?page=plots.channels">Plots and channels</a></li>
  <li><a href="docs-article.html?page=play.range">Playback bar and range</a></li>
  <li><a href="docs-article.html?page=ref.shortcuts">Keyboard and mouse</a></li>
</ul>
`,
},
'plots.derived': {
  section: '2D plots',
  title: 'Derived channels',
  lede: 'Plot channels Slipstream works out from your telemetry, such as slip angle, track position and time delta.',
  prev: ['plots.navigate', 'Navigating plots'],
  next: ['plugins.rail', 'The plugin rail'],
  toc: ['list', 'deltas', 'add', 'console', 'empty', 'formulas', 'related'],
  tocLabels: ['Choose a derived channel', 'Compare every lap at once', 'Plot one from Add variables', 'Plot one from the Console', 'Fix an empty line', 'Plot your own formulas', 'Related'],
  body: `
<p>Derived channels aren't recorded by iRacing. Slipstream works them out from other channels in your telemetry each time you plot or read them, so they're there for any run that has the right inputs. You plot them on a 2D plot like any other channel and read their live values in the Console.</p>
<!-- SHOT plots.derived: the Console tab on the plugin rail with its Derived sub-tab open, showing the Var / Value / Unit / Inputs table with + plot buttons, beside a 2D plot showing DeltaTime with one curve per lap -->
<h2 id="list">Choose a derived channel</h2>
<p>For handling and position on track:</p>
<ul>
  <li><strong>BodySlip</strong> (deg): the angle between where the car points and where it's going. Positive means the nose points right of the direction of travel. It reads 0 when the car is nearly stopped.</li>
  <li><strong>SteerDeg</strong> (deg): the steering wheel angle in degrees. iRacing records it in radians.</li>
  <li><strong>ClutchInv</strong> (0 to 1): clutch pedal travel, with 1 fully pressed. iRacing's own Clutch channel reads the other way around.</li>
  <li><strong>X</strong> and <strong>Y</strong> (m): the car's position east and north, in meters, from GPS.</li>
  <li><strong>TrackLatPos</strong> (-1 to +1): where the car is across the track, from -1 at one edge, through 0 on the centerline, to +1 at the other edge.</li>
  <li><strong>TrackAngle</strong> (deg): the car's heading against the direction of the track at that point. Positive means pointing right of the track direction.</li>
  <li><strong>SmoothedAlt</strong> (m): the car's elevation, with the small steps in iRacing's GPS altitude smoothed out.</li>
</ul>
<p>For comparing laps:</p>
<ul>
  <li><strong>DeltaTime</strong> (s): time gained or lost at each point on track against the reference lap. Negative means ahead.</li>
  <li><strong>DeltaDist</strong> (s): the slope of DeltaTime along the lap, so its peaks show where on track the time goes.</li>
  <li><strong>DeltaRate</strong>: the slope of DeltaTime over time, in seconds lost per second. Negative means pulling ahead at that moment.</li>
  <li><strong>SpeedDelta</strong> (m/s): your Speed minus the reference lap's Speed at the same spot. Positive means carrying more speed.</li>
</ul>
<h2 id="deltas">Compare every lap at once</h2>
<p>The reference lap for DeltaTime, DeltaDist, DeltaRate and SpeedDelta is the lap under the cursor. Every other lap draws its own curve against it, and the reference lap itself reads 0. When the cursor crosses into another lap, that lap becomes the reference and the curves are worked out again.</p>
<p>Unlike the Δ button on a channel row, these need no ghosts: they compare every lap you loaded. Put DeltaTime on its own plot, zoom out to a few laps and move the cursor into your best lap: each other lap's curve then shows where it lost time.</p>
<h2 id="add">Plot one from Add variables</h2>
<ol>
  <li>In a plot's <strong>Channels</strong> panel, click the <strong>Add variables…</strong> box. Derived channels are at the top of the list.</li>
  <li>Tick the ones you want (or type a name to filter), then click <strong>Add</strong>.</li>
</ol>
<p>They work like any other channel: solo, hide, recolor or remove them with the row buttons. See <a href="docs-article.html?page=plots.channels">Plots and channels</a>.</p>
<h2 id="console">Plot one from the Console</h2>
<ol>
  <li>Open the <strong>Console</strong> tab on the plugin rail and click <strong>Derived</strong>.</li>
  <li>The table lists every derived channel with its <strong>Value</strong> at the cursor, its <strong>Unit</strong> and its <strong>Inputs</strong> (the channels it's worked out from). Values update as you play or scrub.</li>
  <li>Click <strong>+ plot</strong> on a row to add that channel to the first 2D plot (the one you started with).</li>
</ol>
<p>A dash in the Value column means the channel can't be worked out at that moment, usually because an input isn't loaded yet.</p>
<h2 id="empty">Fix an empty line</h2>
<p>A derived channel can only be drawn when its inputs are there. If its line stays empty, check its Inputs in the Derived table and add the missing ones to the same plot with <strong>Add variables…</strong>. For example, SteerDeg needs SteeringWheelAngle, and BodySlip needs VelocityX, VelocityY and VelocityZ. X, Y and TrackLatPos need GPS (Lat and Lon), and TrackAngle needs YawNorth and LapDistPct. All four also need the track's shape, so they stay empty when Slipstream has none for the run.</p>
<div class="callout note">
  <span class="ic">i</span>
  <div>
    <span class="lbl">Note</span>
    <p>Derived channels always use the unit in their Unit column. SpeedDelta stays in m/s even when Speed is shown in mph.</p>
  </div>
</div>
<h2 id="formulas">Plot your own formulas</h2>
<p>The 2D plot has no expression editor, so the channels on this page are the full list of derived channels you can plot there. To plot a formula of your own, use Scatter: its axes take expressions built from channel names. See <a href="docs-article.html?page=plugins.scatter">Scatter</a>.</p>
<h2 id="related">Related</h2>
<ul>
  <li><a href="docs-article.html?page=plots.channels">Plots and channels</a></li>
  <li><a href="docs-article.html?page=plugins.scatter">Scatter</a></li>
  <li><a href="docs-article.html?page=plots.navigate">Navigating plots</a></li>
</ul>
`,
},

// ─────────────────────────────────────────────────────────────────
// 07: PLUGINS-A
// ─────────────────────────────────────────────────────────────────

'plugins.rail': {
  section: 'Plugins',
  title: 'The plugin rail',
  lede: 'The right-hand column holds the analysis plugins: open the ones you need, switch off the rest, and lay them out side by side.',
  prev: ['plots.derived', 'Derived channels'],
  next: ['plugins.timing', 'Timing'],
  toc: ['find', 'panels', 'power', 'columns', 'remembered', 'related'],
  tocLabels: ['Find the plugins', 'Open, close and resize panels', 'Turn a plugin off', 'Put plugins side by side', 'What Slipstream remembers', 'Related'],
  body: `
<p>The rail is the column on the right of the window. Tabs along its top switch between <strong>Plugins</strong>, <strong>Timeline</strong>, <strong>Assistant</strong> and <strong>Console</strong>. The Plugins tab holds the analysis tools, each in its own panel that you can open, close, resize, switch off or move into a column of its own.</p>
<!-- SHOT plugins.rail: The rail's Plugins tab split into two columns: Timing and Segment Eval expanded on the left, Corner Analysis expanded on the right, Scatter and Dash collapsed to their headers, with the drag grip and power button visible on each panel header -->
<h2 id="find">Find the plugins</h2>
<p>Click <strong>Plugins</strong> at the top of the rail. From top to bottom you'll find:</p>
<ul>
  <li><strong>Timing</strong>: sector splits for every lap, and pace over a run of laps for each stint. See <a href="docs-article.html?page=plugins.timing">Timing</a>.</li>
  <li><strong>Scatter</strong>: plot one channel against another, colored by a third. See <a href="docs-article.html?page=plugins.scatter">Scatter</a>.</li>
  <li><strong>Dash</strong>: a dashboard that shows live values at the playback cursor. See <a href="docs-article.html?page=plugins.dash">Dash</a>.</li>
  <li><strong>Segment Eval</strong>: a stats table for each stint and lap, plus tire cards. See <a href="docs-article.html?page=plugins.segments">Segment Eval</a>.</li>
  <li><strong>Corner Analysis</strong>: sorts your passes through a corner into driving styles. See <a href="docs-article.html?page=plugins.corners">Corner Analysis</a>.</li>
</ul>
<p>Scatter and Dash start collapsed; the others start open. Every plugin works on the run you have open, so they all update when you add or remove files.</p>
<h2 id="panels">Open, close and resize panels</h2>
<ul>
  <li>Click a panel's header (or its ▾ / ▸ arrow) to collapse or expand it. A collapsed panel shrinks to its header and gives its space to the others, but it keeps what it was showing: a Scatter you've plotted is still there when you open it again.</li>
  <li>Drag the divider between two open panels up or down to trade height between them. Collapsed panels in between are skipped.</li>
  <li>Some sections show a short summary in their header while collapsed. Timing's <strong>Sector Times</strong>, for example, shows the sector you're in and its split.</li>
</ul>
<p>The plugins made of several parts, such as Timing, Segment Eval and Corner Analysis, use the same collapsible, resizable sections inside their panels.</p>
<h2 id="power">Turn a plugin off</h2>
<p>Each panel header has a power button at its right end. Its tooltip names the plugin: <strong>Disable Timing</strong>, <strong>Disable Corner Analysis</strong> and so on.</p>
<ol>
  <li>Click the power button to switch the plugin off. The panel shrinks to its header and the plugin stops working.</li>
  <li>Click it again (<strong>Enable</strong> followed by the plugin's name) to switch it back on.</li>
</ol>
<p>Collapsing only hides a panel: the plugin keeps running and recalculating as you play and change laps. Switching it off stops it completely. Its saved settings stay, but it has to recalculate when you turn it back on, and anything it shares with the rest of the app goes away while it's off. For example, with Corner Analysis off, Timing can't color laps by driving mode.</p>
<div class="callout tip">
  <span class="ic">&#10003;</span>
  <div>
    <span class="lbl">Tip</span>
    <p>If Slipstream feels slow on a big session, switch off the plugins you aren't using instead of just collapsing them. Corner Analysis does the most work, so it's the first one to try.</p>
  </div>
</div>
<h2 id="columns">Put plugins side by side</h2>
<p>Instead of one tall stack, you can lay plugins out in columns. Widen the rail first by dragging the divider on its left.</p>
<ol>
  <li>Grab the grip (⠿) next to a panel's title. Its tooltip is <strong>Drag to another column</strong>.</li>
  <li>While you drag, a <strong>＋ new column</strong> strip appears at the right edge. Drop the panel there to start a new column, or drop it on an existing column to add it at the bottom.</li>
  <li>Drag the divider between two columns left or right to change their widths.</li>
</ol>
<p>A column disappears when you drag its last panel out of it. To go back to a single stack, drag every panel into the first column. Adding or removing a column resets the column widths to equal.</p>
<h2 id="remembered">What Slipstream remembers</h2>
<p>Slipstream saves your rail layout in this browser: which tab is open, which plugins are on or off, which panels are collapsed, how tall they are, and your columns and their widths. It's all back the next time you open Slipstream on the same computer and browser.</p>
<p>In a <a href="docs-article.html?page=share.sessions">shared session</a>, the open rail tab and which panels are expanded or collapsed are shared too, so people watching see the same panels as whoever is driving. Columns and the power buttons stay your own.</p>
<h2 id="related">Related</h2>
<ul>
  <li><a href="docs-article.html?page=plugins.timing">Timing</a></li>
  <li><a href="docs-article.html?page=plugins.corners">Corner Analysis</a></li>
  <li><a href="docs-article.html?page=timeline.points">Timeline points</a></li>
</ul>
`,
},
'plugins.timing': {
  section: 'Plugins',
  title: 'Timing',
  lede: 'See where every lap gains or loses time, sector by sector, and compare your pace over several laps from one stint to the next.',
  prev: ['plugins.rail', 'The plugin rail'],
  next: ['plugins.corners', 'Corner Analysis'],
  toc: ['sectors', 'modes', 'jump', 'multilap', 'stripe', 'related'],
  tocLabels: ['Read the Sector Times table', 'Compare against your best', 'Jump to a lap and add ghosts', 'Compare pace across stints', 'Color laps by ghosts, mode or weather', 'Related'],
  body: `
<p>The Timing panel has two sections. <strong>Sector Times</strong> splits every lap into sectors, so you can see where each lap was quick or slow. <strong>Multi-Lap Timing</strong> compares your pace over several laps in a row, stint against stint. Both cover every lap you've loaded and follow the playback cursor.</p>
<!-- SHOT plugins.timing: Timing panel with Sector Times in Δ Sector mode showing green-to-red splits, a violet fastest split in each column, the current sector cell in magenta and the Best row at the bottom; Multi-Lap Timing expanded below with three stint heat bars, a 5-lap window on each and the Stint / Total / Delta table -->
<h2 id="sectors">Read the Sector Times table</h2>
<p>Each row is a lap, numbered <code>Lap 1</code>, <code>Lap 2</code> and so on across everything you've loaded. When that differs from the sim's own lap number, the sim's number follows in parentheses, such as <code>(L21)</code>. The columns are the track's sectors (<strong>S1</strong>, <strong>S2</strong> and so on) and <strong>Total</strong>.</p>
<ul>
  <li>The sector you're in right now is magenta.</li>
  <li>Each column's fastest split is bold on violet, like a purple sector in the sim.</li>
  <li>Other splits shade from green through yellow to red (5% or more slower).</li>
  <li>Out, in and formation laps are dimmed, and an asterisk (*) marks a sector with an incident. Neither counts as a best.</li>
  <li>Your fastest clean lap is highlighted in the Total column.</li>
</ul>
<p>The <strong>Best</strong> row at the bottom lists your best time in each sector. Its Total is your optimal lap: the sum of those best sectors, the lap you'd do if you put them all together.</p>
<p>Sector Times needs sectors from the track or the file. If you see <strong>No sector data</strong>, this run has none.</p>
<h2 id="modes">Compare against your best</h2>
<p>The three buttons above the table change what the cells show:</p>
<ul>
  <li><strong>Times</strong>: the actual split and lap times.</li>
  <li><strong>Δ Sector</strong>: each split minus the best time in its column, and the Total minus your optimal lap. Shows how far each sector is from your best there.</li>
  <li><strong>Δ Lap</strong>: each split minus the same sector of your fastest lap, and the Total minus that lap. Shows where a lap beat or lost to your best lap.</li>
</ul>
<p>Deltas read like <code>+0.234</code> (slower) or <code>-0.121</code> (faster). The Best row always shows plain times.</p>
<h2 id="jump">Jump to a lap and add ghosts</h2>
<ul>
  <li>Double-click a sector cell to move playback to the start of that sector in that lap.</li>
  <li>Double-click a lap's name or its Total to jump to the start of the lap.</li>
  <li>Click the small circle before the lap name (<strong>Add as ghost</strong>) to replay that lap as a ghost. The circle and the lap name take the ghost's color. Click it again (<strong>Remove ghost</strong>) to take it away.</li>
</ul>
<p>These are the same ghosts as in the Playlist and the Ghosts panel: see <a href="docs-article.html?page=ghosts.basics">Ego and ghosts</a>.</p>
<h2 id="multilap">Compare pace across stints</h2>
<p><strong>Multi-Lap Timing</strong> starts collapsed: click its header to open it. Each stint gets a heat bar with one cell per complete lap, labeled with the file it came from (a file split by pit stops gets one bar per part, numbered <code>#1</code>, <code>#2</code>). Cells run from green at your fastest clean lap through yellow and red to black at 10% or more slower. Out and in laps are grayed out, the lap under the cursor is marked, and hovering a cell shows its lap number and time.</p>
<p>The highlighted window on each bar picks a run of laps in a row, and the table below adds them up:</p>
<ol>
  <li>Type how many laps to compare in the <strong>Laps:</strong> field in the section header. The same number applies to every stint, up to the length of the shortest one.</li>
  <li>Drag the window along a bar to choose which laps count for that stint. Drag either edge to make it longer or shorter, or click outside it to move it there.</li>
  <li>Read the table: <strong>Stint</strong>, <strong>Total</strong> (the window's laps added up) and <strong>Delta</strong> to the fastest stint, which gets a ★.</li>
</ol>
<p>Use it to compare like with like: the first five laps of two stints, or one driver's mid-stint pace against another's.</p>
<h2 id="stripe">Color laps by ghosts, mode or weather</h2>
<p>A thin stripe above each heat bar colors laps by a grouping. Pick one from the menu in the section header (its tooltip reads <strong>Colour the lap stripe by…</strong>). The menu appears once there's more than one grouping to choose from.</p>
<ul>
  <li><strong>Ghosts</strong>: the laps you've added as ghosts, in each ghost's color. This is the default.</li>
  <li><strong>Corner Analysis</strong>: each lap in the color of its driving mode through the corner picked in <a href="docs-article.html?page=plugins.corners">Corner Analysis</a>. Available while Corner Analysis is switched on.</li>
  <li><strong>Weather</strong>: up to three stacked bands per lap. Skies shows an icon from sun to overcast, or rain; Wetness runs from Dry to Flood; Track temp shows the track temperature in your units. Available when the run recorded weather.</li>
</ul>
<p>Hover a stripe cell to see its group, such as <code>Mode 2</code> or <code>Lightly wet</code>. In a long race with changing weather, the Weather stripe shows which laps were run in the wet right above their lap times.</p>
<h2 id="related">Related</h2>
<ul>
  <li><a href="docs-article.html?page=ghosts.basics">Ego and ghosts</a></li>
  <li><a href="docs-article.html?page=plugins.corners">Corner Analysis</a></li>
  <li><a href="docs-article.html?page=plugins.rail">The plugin rail</a></li>
</ul>
`,
},
'plugins.corners': {
  section: 'Plugins',
  title: 'Corner Analysis',
  lede: 'Sort every pass through a corner into driving styles, see what each style does differently, and replay the best one as a ghost.',
  prev: ['plugins.timing', 'Timing'],
  next: ['plugins.segments', 'Segment Eval'],
  toc: ['corner', 'modes', 'panes', 'ghosts', 'settings', 'related'],
  tocLabels: ['Pick a corner', 'Read the modes', 'Explore the other panes', 'Add each mode as ghosts', 'Tune the analysis', 'Related'],
  body: `
<p>Corner Analysis takes every pass you've made through one corner and sorts them into groups of similar driving, called modes. Each mode gets a color, its time through the corner against the average, and short tags that say what sets it apart, such as <code>Later release Brake</code> or <code>Higher entry Speed</code>. It finds corners from the track's 3D model, so it needs a track that has one: otherwise it shows <strong>No track geometry yet</strong>.</p>
<!-- SHOT plugins.corners: Corner Analysis panel with a corner selected in the Corner menu and Sync on, the Passes / Dropped / K / Dim line, three mode cards with colored swatches, deltas, tags and composition bars, and the Style Map below with colored dots and two amber-ringed ghost laps -->
<h2 id="corner">Pick a corner</h2>
<ol>
  <li>Choose a corner from the <strong>Corner</strong> menu. Corners are named <code>T1</code>, <code>T2</code> and so on, or by their real names on tracks that have them.</li>
  <li>Wait for <strong>clustering…</strong> to finish.</li>
  <li>Click <strong>Sync</strong> to loop playback through the corner in the lap you're in. It also moves the ghost sync point to the corner entry, so lap ghosts arrive with you. Click it again to stop; this clears the sync point too.</li>
</ol>
<p>To study a stretch that isn't one corner, such as a chicane, click <strong>+</strong> next to the menu. In <strong>Custom analysis window</strong>, drag the bar's handles (or type <strong>Start %</strong> and <strong>End %</strong> as a fraction of the lap, from 0 to 1) and click <strong>Add window</strong>. Custom windows are marked ◆ in the menu and saved for that track. To delete one, select it and click <strong>✕</strong>.</p>
<h2 id="modes">Read the modes</h2>
<p>The <strong>Modes</strong> pane has one card per mode, fastest first. On each card:</p>
<ul>
  <li>The swatch is the mode's color throughout the plugin. Click it to change it.</li>
  <li>The percentage is the mode's share of your passes. Δ is its average time through the corner against the average of all passes: negative is faster.</li>
  <li>Below are its lap count, σ (lower means more consistent corner times) and which laps of the stint it appears in. A mode that only shows up late in stints can point to tires or fuel.</li>
  <li>The bar shows which stints its passes came from (or drivers or files: pick in the <strong>Bars:</strong> menu).</li>
  <li>Up to three tags say what this mode does differently. Hover them to see how strong each difference is.</li>
</ul>
<p>Click <strong>✕</strong> on a card to leave that mode's laps out and regroup the rest; <strong>reset (n excluded)</strong> brings them back. Click <strong>›</strong> to drill into a mode and see what explains the differences between its passes. An <strong>Outliers</strong> card, when there is one, holds passes that fit no mode.</p>
<p><strong>K</strong>, above the panes, is how many modes you want (2 to 10). <strong>Confidence</strong>, under the cards, says how far to trust the result: with few passes you get fewer, less certain modes.</p>
<h2 id="panes">Explore the other panes</h2>
<ul>
  <li><strong>Traces</strong>: each mode's average trace through the corner, entry to exit, for the channel picked in <strong>Channel</strong>. The gray dashed line is the average of all passes. It shows what each mode does: brakes later, carries more speed, gets on the throttle sooner.</li>
  <li><strong>Style Map</strong>: one dot per pass, colored by mode; passes driven alike sit close together. Set <strong>View</strong> to <strong>3D</strong> to add depth: drag to orbit, and switch <strong>persp</strong> to <strong>iso</strong> or tick <strong>spin</strong> to read the shape. <strong>Ring</strong> circles each dot by driver, file or stint, to show whether one driver or stint owns a mode.</li>
  <li><strong>Lines</strong>: each pass's path through the corner, colored by mode, between the track edges. Early or late apexes and wide or tight lines stand out.</li>
  <li><strong>Track</strong>: the track map with the selected corner highlighted.</li>
</ul>
<p>On Lines and Track, scroll to zoom, drag to pan and double-click to reset.</p>
<h2 id="ghosts">Add each mode as ghosts</h2>
<p>The quickest way to understand a mode is to watch it. Each card adds that mode's most typical laps as ghosts, in the mode's color:</p>
<ol>
  <li>Set how many laps in the number field on the card (3 by default).</li>
  <li>Click <strong>+</strong> on the card. Above the cards, <strong>+ all modes</strong> does every mode at once, and <strong>+ all (replace)</strong> clears your ghosts first.</li>
  <li>Click <strong>▶</strong> on a card to jump to that mode's most typical lap.</li>
</ol>
<p>In the Style Map, right-click a dot to add or remove that lap as a ghost (ghost laps get an amber ring), or select dots and click <strong>+ ghosts</strong>. Tick <strong>Auto-apply</strong> to replace your ghosts with every mode's laps each time the analysis updates. See <a href="docs-article.html?page=ghosts.basics">Ego and ghosts</a>.</p>
<h2 id="settings">Tune the analysis</h2>
<p>Click <strong>Settings</strong> for three tabs. <strong>Channels &amp; rules</strong> sets which channels shape the grouping and how strongly, and which summaries (such as a channel's entry value or peak) can become tags; <strong>Save…</strong> and <strong>Load…</strong> export and import the tag rules as a file. <strong>Filters</strong> chooses which laps take part, such as incident laps, out and in laps, or laps much slower than your best. <strong>Dropped</strong> lists every pass left out and why.</p>
<div class="callout tip">
  <span class="ic">&#10003;</span>
  <div>
    <span class="lbl">Tip</span>
    <p>More laps give better modes. Load several stints, then set <strong>Ring</strong> to stint to see whether your driving changed from one stint to the next.</p>
  </div>
</div>
<h2 id="related">Related</h2>
<ul>
  <li><a href="docs-article.html?page=ghosts.basics">Ego and ghosts</a></li>
  <li><a href="docs-article.html?page=ghosts.sync">Comparing outings and stints</a></li>
  <li><a href="docs-article.html?page=plugins.timing">Timing</a></li>
</ul>
`,
},
'plugins.segments': {
  section: 'Plugins',
  title: 'Segment Eval',
  lede: 'Compare stints and laps side by side on pace, cornering, suspension, inputs, fuel and tires, and see where on track the differences come from.',
  prev: ['plugins.corners', 'Corner Analysis'],
  next: ['plugins.scatter', 'Scatter'],
  toc: ['table', 'columns', 'map', 'tires', 'filter', 'related'],
  tocLabels: ['Read the stats table', 'Choose the columns', 'Color the track by a stat', 'Compare tires', 'Filter the laps', 'Related'],
  body: `
<p>Segment Eval sums up every stint and lap in one table, with a heatmap that picks out the best and worst at a glance. Its Tires tab lays out temperatures, pressures and wear for each corner of the car. Use it to spot the stint or lap that's different, then see where on track it happened.</p>
<!-- SHOT plugins.segments: Segment Eval with the Stats tab on the Pace column group, two stints expanded into laps with green and red heatmap cells and one cell selected, and the Map pane below showing the track colored by Speed with its legend -->
<h2 id="table">Read the stats table</h2>
<p>The <strong>Segments</strong> pane opens on the <strong>Stats</strong> tab. Each top row is a stint with its lap count, such as <code>Stint 1 (12)</code>. Click the ▸ on a row to expand it: you'll see its laps or, when the run is split at pit stops, its outings and then their laps. A stint or outing row shows its laps taken together: the best lap, the mean lap, the top speed and so on.</p>
<p>The heatmap compares each row only with the rows beside it at the same level: stints against stints, and the laps of one stint against each other. Green is the better end, red the worse, gray in between. For L/R Rake, closest to zero counts as best.</p>
<p>The circle before each name adds a ghost. On a lap row it's that lap (<strong>Add as ghost</strong>); on a stint or outing row it's the fastest lap inside it (<strong>Ghost the fastest lap</strong>).</p>
<h2 id="columns">Choose the columns</h2>
<p>The menu next to the tabs (<strong>Column group</strong>) narrows the table to one group:</p>
<ul>
  <li><strong>Pace</strong>: Best Lap, Mean Lap, Top Speed, Min Speed.</li>
  <li><strong>Cornering</strong>: Peak Lat G, Peak Brake G.</li>
  <li><strong>Susp</strong>: the ride height at each corner, Rake and L/R Rake.</li>
  <li><strong>Aero</strong>: the minimum ride height at each corner, and the front and rear ride height at high speed.</li>
  <li><strong>Inputs</strong>: Throttle %, Brake %, Peak Steer.</li>
  <li><strong>Fuel</strong>: Fuel/Lap.</li>
</ul>
<p><strong>All</strong> shows every group. To hide single columns, click <strong>Columns</strong> and untick them; <strong>Show all</strong> brings them back. Slipstream remembers hidden columns in this browser.</p>
<h2 id="map">Color the track by a stat</h2>
<p>Click a cell to see where on track that number comes from. The <strong>Map</strong> pane below colors the track by the column's channel over that row's laps: Speed for the lap-time and speed columns, lateral acceleration for Peak Lat G, the matching ride height, and so on. The laps are averaged into one clean loop, the title names the column and the row, and the legend shows the range of values.</p>
<p>The map starts on the first row's Best Lap, so it's never blank. Scroll to zoom, drag to pan and double-click to reset. Rake, L/R Rake and the high-speed ride heights aren't recorded as a single channel, so their cells can't be clicked.</p>
<h2 id="tires">Compare tires</h2>
<p>Click <strong>Tires</strong> for four tire cards laid out like the car seen from above: <strong>LF</strong> and <strong>RF</strong> at the top, <strong>LR</strong> and <strong>RR</strong> below. Each card shows the tire's pressure (<strong>P</strong>), its three zones across the tread (L, M and R), and underneath, the average temperature and Δ, the spread across the zones.</p>
<ol>
  <li>Choose what to look at in <strong>Segment</strong> (one outing) and <strong>Lap</strong> (<strong>Segment mean</strong>, or a single lap).</li>
  <li>Pick a <strong>Mode</strong>. <strong>Temp</strong> colors raw temperatures, cool green to hot red. <strong>Δ tyre</strong> colors how far each zone is from that tire's own average, which shows camber or pressure bias. <strong>Δ segment</strong> compares every zone with the whole car's average, to show which tire works hardest. <strong>Wear</strong> shows tread left, and <strong>Wear / Work</strong> divides it by tire work so stints of different lengths compare fairly.</li>
  <li>Click the pressure or a zone to color the Map by that channel. In <strong>Rate</strong> mode the Map shows how fast it's changing instead: red where the tire heats up, green where it cools.</li>
</ol>
<p><strong>Range</strong> sets what the colors are scaled against: <strong>All tyres</strong> keeps colors comparable across everything, while <strong>Per tyre</strong> and <strong>Per selection</strong> bring out smaller differences. <strong>Work</strong>, on the bar, is the outing's total tire work: higher means more energy went through the tires.</p>
<h2 id="filter">Filter the laps</h2>
<p>Out laps, in laps and reset laps never count. <strong>Filter</strong> refines the rest, on both tabs:</p>
<ul>
  <li><strong>Drop incident laps</strong>: on by default.</li>
  <li><strong>Drop laps slower than best ×</strong>: on, at 1.1. Leaves out laps more than 10% slower than their stint's best, such as caution laps or a spin.</li>
  <li><strong>Drop stints under</strong> 3 <strong>laps</strong>: on. Hides stints too short to compare.</li>
</ul>
<p>If a stint or lap you expect is missing, check these first.</p>
<div class="callout tip">
  <span class="ic">&#10003;</span>
  <div>
    <span class="lbl">Tip</span>
    <p>To find the odd one out, start with the stints collapsed and look for a red cell. Expand that stint to find the lap behind it, click the cell to see where on track it happened, then click the lap's circle to ghost it and watch it.</p>
  </div>
</div>
<h2 id="related">Related</h2>
<ul>
  <li><a href="docs-article.html?page=plugins.timing">Timing</a></li>
  <li><a href="docs-article.html?page=plugins.scatter">Scatter</a></li>
  <li><a href="docs-article.html?page=ghosts.basics">Ego and ghosts</a></li>
</ul>
`,
},

// ─────────────────────────────────────────────────────────────────
// 07: PLUGINS-B
// ─────────────────────────────────────────────────────────────────

'plugins.scatter': {
  section: 'Plugins',
  title: 'Scatter',
  lede: 'Plot any channel against any other for every sample you have loaded, and spot patterns a trace over time hides.',
  prev: ['plugins.segments', 'Segment Eval'],
  next: ['plugins.dash', 'Dash'],
  toc: ['plot', 'expressions', 'zoom', 'segments', 'options', 'related'],
  tocLabels: ['Plot two channels', 'Write expressions', 'Scale, zoom and pan', 'Show or hide stints', 'Change the plot type and colors', 'Related'],
  body: `
<p>Scatter draws one point for every moment of telemetry in the laps you've loaded, with one value across and another up. Patterns jump out that are hard to see in a trace over time: how much grip you use, where you lift, how speed and throttle relate. A dot for your position, and one for each ghost, moves through the cloud as you play.</p>
<!-- SHOT plugins.scatter: Scatter panel in the plugin rail with X set to LatAccel / 9.81, Y set to LongAccel / 9.81 and Color set to Speed * 3.6, a round grip-circle cloud colored with the Jet colormap, the red ego cursor dot inside it, and the Segments list on the right with two stints ticked -->
<h2 id="plot">Plot two channels</h2>
<ol>
  <li>Open <strong>Scatter</strong> in the plugin rail.</li>
  <li>Type a channel name or an expression in <strong>X</strong> and in <strong>Y</strong>. The fields suggest channel names as you type.</li>
  <li>If you like, type one in <strong>Color</strong> to color each point by a third value. Leave it empty to color points by stint.</li>
  <li>Click <strong>Plot</strong>.</li>
</ol>
<p>The line under the plot shows how many points were drawn, or what went wrong, such as a channel name it doesn't know. The plot doesn't redraw on its own: after you change a field, click <strong>Plot</strong> again.</p>
<h2 id="expressions">Write expressions</h2>
<p>Each field takes a channel name on its own, or math built from channel names. Names ignore upper and lower case, so <code>speed</code> works as well as <code>Speed</code>. You can use:</p>
<ul>
  <li><code>+</code> <code>-</code> <code>*</code> <code>/</code>, <code>**</code> for powers, and parentheses.</li>
  <li>Functions such as <code>abs</code>, <code>sqrt</code>, <code>min</code>, <code>max</code>, <code>round</code>, <code>sin</code>, <code>cos</code> and <code>atan2</code>, plus <code>degrees</code> and <code>radians</code> to convert angles. <code>pi</code> is built in.</li>
  <li>Comparisons (<code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code>, <code>==</code>, <code>!=</code>), which give 1 when true and 0 when false.</li>
</ul>
<p>A few plots to start with. iRacing records acceleration in m/s², speed in m/s, steering in radians and pedals from 0 to 1.</p>
<ul>
  <li><strong>Grip circle</strong>: X <code>LatAccel / 9.81</code>, Y <code>LongAccel / 9.81</code>, Color <code>Speed * 3.6</code>. Lateral against longitudinal g, colored by speed in km/h.</li>
  <li><strong>Throttle against speed</strong>: X <code>Speed * 3.6</code>, Y <code>Throttle * 100</code>, Color <code>Gear</code>.</li>
  <li><strong>Steering against cornering load</strong>: X <code>degrees(SteeringWheelAngle)</code>, Y <code>abs(LatAccel) / 9.81</code>, Color <code>Brake &gt; 0.05</code>. The comparison splits the points into two colors, so the moments you were on the brakes stand out.</li>
</ul>
<h2 id="zoom">Scale, zoom and pan</h2>
<p>The X and Y rows each have two number boxes after the expression: <strong>Scale factor (a)</strong> and <strong>Offset (b)</strong>. The plotted value is (value + b) × a, so a = 1 and b = 0 leave it as it is. They apply the next time you click <strong>Plot</strong>.</p>
<p>In a 2D plot:</p>
<ul>
  <li>Scroll to zoom around the pointer. Hold <code>Shift</code> to zoom only across, or <code>Alt</code> to zoom only up and down.</li>
  <li>Drag to pan.</li>
  <li>Double-click to fit all the points again.</li>
</ul>
<p><strong>Auto Scale</strong> zooms to the middle 90% of the points (the 5th to 95th percentile), which trims stray outliers. <strong>Reset</strong>, available once you've zoomed or panned, goes back to fitting every point and puts each scale back to 1 and each offset back to 0. Click <strong>Plot</strong> afterwards to redraw without them.</p>
<h2 id="segments">Show or hide stints</h2>
<p>The <strong>Segments</strong> list beside the plot has one row per stint (each loaded file), named by the session's date and time and the driver. Untick a row to hide its points, and tick it to bring them back. With <strong>Color</strong> empty, each stint's points take the color of the swatch next to its name, which makes it easy to compare two drivers or two sessions.</p>
<p>Drag the edge of the list to make it wider, or click the arrow in its header (<strong>Collapse segments</strong>) to fold it away and give the plot more room. Slipstream remembers the width and whether it's folded.</p>
<h2 id="options">Change the plot type and colors</h2>
<p>Click <strong>Options ▾</strong> above the fields:</p>
<ul>
  <li><strong>Type:</strong> <strong>Scatter 2D</strong> or <strong>Scatter 3D (X, Y, Z)</strong>. 3D adds a <strong>Z</strong> field for the vertical axis. If you leave Z empty, the Color value sets the height.</li>
  <li><strong>Colormap:</strong> the color scale for the Color field: Viridis, Plasma, Inferno, Cool, Hot or Jet (the default). It runs from the lowest Color value to the highest.</li>
  <li><strong>Cursor</strong>: show or hide the moving dots for your position and your ghosts.</li>
  <li><strong>Ego cursor color:</strong> the color of your own dot. Ghost dots use each ghost's color.</li>
</ul>
<p>In 3D, drag to orbit the cloud and scroll to zoom. The points are fitted into a box, with colored lines along three of its edges marking the axes.</p>
<div class="callout tip">
  <span class="ic">&#10003;</span>
  <div>
    <span class="lbl">Tip</span>
    <p>Leave <strong>Cursor</strong> on and play or scrub. Your dot traces its path through the cloud, so you can tell which corner a cluster of points comes from, and a ghost's dot shows where that lap sat at the same moment.</p>
  </div>
</div>
<h2 id="related">Related</h2>
<ul>
  <li><a href="docs-article.html?page=plugins.rail">The plugin rail</a></li>
  <li><a href="docs-article.html?page=plots.channels">Plots and channels</a></li>
  <li><a href="docs-article.html?page=ghosts.basics">Ego and ghosts</a></li>
</ul>
`,
},
'plugins.dash': {
  section: 'Plugins',
  title: 'Dash',
  lede: 'Replay your laps through dashboards of gauges, bars, lights and readouts, like the display in the car.',
  prev: ['plugins.scatter', 'Scatter'],
  next: ['plugins.dash-designer', 'Dash Designer'],
  toc: ['add', 'local', 'arrange', 'ghost', 'popout', 'library', 'related'],
  tocLabels: ['Add a dash to the canvas', 'Use your own dash folder', 'Arrange the canvas', 'Show a ghost on a dash', 'Pop a dash out', 'Manage dashes in the Dash Library', 'Related'],
  body: `
<p>The <strong>Dash</strong> plugin shows dashboards that follow the playback cursor as you play or scrub. It has two panes: <strong>Dash Library</strong> lists the dashes you can use, and <strong>Dash Canvas</strong> is where you place them. You can have several dashes on the canvas at once, each showing your lap or a ghost's.</p>
<!-- SHOT plugins.dash: Dash plugin open in the rail, the Dash Library pane showing cloud dash thumbnails with the Cloud and Local buttons in its header, and the Dash Canvas below with two dashes placed, one framed in a ghost's color with the ghost's label in its title bar -->
<h2 id="add">Add a dash to the canvas</h2>
<ol>
  <li>Open <strong>Dash</strong> in the plugin rail.</li>
  <li>In the <strong>Dash Library</strong> header, choose where to look: <strong>Cloud</strong> for the dashes LapLabs publishes, or <strong>Local</strong> for your own folder.</li>
  <li>Drag a thumbnail onto the canvas, or just click it to add it near the top-left corner.</li>
</ol>
<p>Each dash on the canvas has a title bar with its name, and its values come from the laps you've loaded at the playback cursor. Hold <code>Ctrl</code> and scroll over the library to make the thumbnails bigger or smaller.</p>
<h2 id="local">Use your own dash folder</h2>
<p>Dashes you make or change live in a folder on your computer. This needs Chrome or Edge.</p>
<ol>
  <li>Click <strong>Local</strong>, then <strong>Browse…</strong>.</li>
  <li>Pick a folder (an empty one is fine to start with) and let the browser give Slipstream access to it.</li>
</ol>
<p>The library lists the dash files in that folder, not in its subfolders. Slipstream remembers the folder, but after you reload the page the browser needs your permission again: click <strong>Reopen</strong> followed by the folder's name.</p>
<p>Right-click a local thumbnail for <strong>Edit in Dash Designer</strong>, <strong>Duplicate</strong>, <strong>Rename…</strong> and <strong>Delete</strong>. Cloud dashes are read-only, so they have no menu.</p>
<h2 id="arrange">Arrange the canvas</h2>
<ul>
  <li>Drag a dash to move it. Drag the small triangle at its bottom-right corner to scale it, from 0.3× up to 3×.</li>
  <li>Drag empty space to pan. Hold <code>Ctrl</code> and scroll to zoom; the zoom percentage shows above the canvas, and <strong>Reset View</strong> puts zoom and pan back.</li>
  <li>Tick <strong>Snap to Grid</strong> to line dashes up on a 20-pixel grid when you move or drop them.</li>
  <li>Tick <strong>Lock</strong> so nothing moves by accident. While it's on, dragging anywhere pans and right-click does nothing.</li>
  <li>To take a dash off the canvas, right-click it and choose <strong>Remove from canvas</strong>, or click it and press <code>Delete</code>.</li>
</ul>
<h2 id="ghost">Show a ghost on a dash</h2>
<p>A dash shows your ego lap to start with. To make it follow a ghost instead:</p>
<ol>
  <li>Right-click the dash.</li>
  <li>Under <strong>Data source</strong>, pick a ghost. A ✓ marks the current source.</li>
</ol>
<p>The dash gets a frame in the ghost's color and the ghost's label in its title bar, and it stays in step with that ghost's car in the 3D view. Pick <strong>Ego</strong> to switch back. If you remove the ghost, the dash shows your ego lap again under a dashed gray frame, marked "ghost gone", until you choose another source. Put two copies of the same dash side by side, one on Ego and one on a ghost, to compare them at a glance.</p>
<p>Add ghosts first: see <a href="docs-article.html?page=ghosts.basics">Ego and ghosts</a>.</p>
<h2 id="popout">Pop a dash out</h2>
<p>Right-click a dash and choose <strong>Pop Out</strong> to float it over the rest of the page, for example on top of the 3D view. Its title bar fades when the pointer moves away and comes back when you hover over it.</p>
<ul>
  <li>Drag the title bar to move it, and its bottom-right corner to resize it. It keeps its shape.</li>
  <li>The ◆ button (<strong>Pin to keep above other pop-outs</strong>) keeps it on top of other floating dashes.</li>
  <li>The ▣ button (<strong>Dock back to canvas</strong>) puts it back on the canvas.</li>
  <li>The × button (<strong>Close</strong>) removes it entirely, the same as <strong>Remove from canvas</strong>.</li>
</ul>
<h2 id="library">Manage dashes in the Dash Library</h2>
<p>For a bigger view, choose Tools &gt; Libraries &gt; <strong>Dash Library...</strong>. It has the same <strong>Cloud</strong> and <strong>Local</strong> choice as the pane (switching one switches both) and, for Local, a <strong>Folder:</strong> box with <strong>Browse…</strong> and <strong>Reopen</strong>.</p>
<ul>
  <li>Click a dash to select it and see it full size. Double-click it to open it in the Designer.</li>
  <li><strong>New</strong> starts an empty dash in the <a href="docs-article.html?page=plugins.dash-designer">Dash Designer</a>, and <strong>Edit</strong> opens the selected one. Editing a cloud dash opens an unsaved local copy; the cloud version never changes.</li>
  <li><strong>Duplicate</strong>, <strong>Rename…</strong> and <strong>Delete</strong> work on local dashes only.</li>
  <li><strong>Refresh</strong> lists the folder again, and <strong>Close</strong> closes the dialog.</li>
</ul>
<div class="callout note">
  <span class="ic">i</span>
  <div>
    <span class="lbl">Note</span>
    <p>Dashes in Slipstream replay recorded laps. To see your data live while you drive, see <a href="docs-article.html?page=share.tray">LapLabs Tray and live view</a>.</p>
  </div>
</div>
<h2 id="related">Related</h2>
<ul>
  <li><a href="docs-article.html?page=plugins.dash-designer">Dash Designer</a></li>
  <li><a href="docs-article.html?page=ghosts.basics">Ego and ghosts</a></li>
  <li><a href="docs-article.html?page=share.tray">LapLabs Tray and live view</a></li>
</ul>
`,
},
'plugins.dash-designer': {
  section: 'Plugins',
  title: 'Dash Designer',
  lede: 'Build your own dashboards from bars, gauges, lights and readouts, and bind each one to a telemetry channel.',
  prev: ['plugins.dash', 'Dash'],
  next: ['timeline.points', 'Timeline points'],
  toc: ['open', 'elements', 'arrange', 'bind', 'save', 'related'],
  tocLabels: ['Open the Designer', 'Add elements', 'Select, move and resize', 'Bind an element to a channel', 'Save your dash', 'Related'],
  body: `
<p>The Dash Designer is where you build and edit dashes: place elements on a canvas, bind each one to a telemetry channel, and save the result to your dash folder, ready to drop onto the <a href="docs-article.html?page=plugins.dash">Dash</a> canvas.</p>
<!-- SHOT plugins.dash-designer: Dash Designer window with the Elements palette on the left, a dark canvas holding a gauge, two vertical bars and a numeric readout with one bar selected and its four corner handles showing, and the Name, Canvas W, H, BG and Snap to Grid fields along the bottom -->
<h2 id="open">Open the Designer</h2>
<ul>
  <li>Right-click a dash on the Dash Canvas, or a local thumbnail in the Dash Library pane, and choose <strong>Edit in Dash Designer</strong>.</li>
  <li>In Tools &gt; Libraries &gt; <strong>Dash Library...</strong>, click <strong>New</strong> for an empty dash, or select one and click <strong>Edit</strong>.</li>
</ul>
<p>The title shows the dash's name, with an asterisk while you have unsaved changes. The <strong>File</strong> menu has <strong>Save</strong>, <strong>Save As…</strong> and <strong>Close</strong>; the <strong>Edit</strong> menu starts with <strong>Undo</strong> (<code>Ctrl</code>+<code>Z</code>) and <strong>Redo</strong> (<code>Ctrl</code>+<code>Y</code>). Along the bottom, set the <strong>Name:</strong>, the size in pixels (<strong>Canvas W:</strong> and <strong>H:</strong>, 800 by 400 to start) and the background color (<strong>BG:</strong>).</p>
<h2 id="elements">Add elements</h2>
<p>Click an element in the <strong>Elements</strong> palette on the left. It lands in the middle of the canvas, selected. Elements show real values at the playback cursor, so you can check them as you build.</p>
<ul>
  <li><strong>Vbar</strong> and <strong>Hbar</strong>: a vertical or horizontal bar that fills between a low and a high value.</li>
  <li><strong>Led Array</strong>: a row of lights, each lit when its channel passes a threshold, such as shift lights.</li>
  <li><strong>Conditional</strong>: text and a color chosen by rules; the first rule that matches wins.</li>
  <li><strong>Numeric</strong>: a number readout, as a decimal or a time (mm:ss).</li>
  <li><strong>Gauge</strong>: a round dial with a needle.</li>
  <li><strong>Xy Plot</strong>: a dot inside a circle, driven by two channels, like a g-meter.</li>
  <li><strong>Steering Wheel</strong>: a wheel that turns with your steering.</li>
  <li><strong>Segment Border</strong>: a line or outline you draw to frame a group of elements.</li>
  <li><strong>Minimap</strong>: a map of the track with a dot for the car.</li>
  <li><strong>Track Position</strong>: a slice across the track showing where the car sits between the edges, and its angle to the track.</li>
  <li><strong>Slip Gauge</strong>: the car's slip angle (where it points against where it's going), or an understeer and oversteer reading.</li>
</ul>
<p>To draw a Segment Border, click it in the palette, then click on the canvas to add points. Double-click or press <code>Enter</code> to finish, or click the first point to close the shape. <code>Esc</code> cancels.</p>
<h2 id="arrange">Select, move and resize</h2>
<ul>
  <li>Click an element to select it. <code>Shift</code>+click adds to the selection, and dragging across empty canvas selects everything the box touches. Select a Segment Border by clicking its line.</li>
  <li>Drag the selection to move it, or nudge it with the arrow keys (hold <code>Shift</code> for 10 pixels).</li>
  <li>Drag one of the four corner handles to resize an element.</li>
  <li><strong>Snap to Grid</strong> (on to start with; <code>G</code> toggles it) lines elements up on a 20-pixel grid when you let go.</li>
  <li><code>Delete</code> removes the selection. The <strong>Edit</strong> menu also has <strong>Copy</strong>, <strong>Paste</strong>, <strong>Bring to Front</strong> and <strong>Send to Back</strong>.</li>
</ul>
<h2 id="bind">Bind an element to a channel</h2>
<p>Double-click an element to open its settings. Click <strong>Apply</strong> to keep your changes or <strong>Cancel</strong> to drop them.</p>
<ol>
  <li>Type a channel name in <strong>Variable</strong>, such as <code>RPM</code> or <code>Throttle</code>. The field suggests channels from the loaded laps. It takes one channel name, not an expression.</li>
  <li>Give it a <strong>Label</strong>. For bars and gauges, set <strong>Low</strong> and <strong>High</strong> to the range to cover (iRacing's pedals run from 0 to 1).</li>
  <li>To convert the value, pick one under <strong>Conversion</strong>, such as <strong>m/s → km/h</strong> for <code>Speed</code>. Or set <strong>Units</strong> to <strong>Follow app preference</strong> to use the units you chose in <a href="docs-article.html?page=settings.preferences">Preferences</a>.</li>
</ol>
<p>A Led Array or Conditional uses rules instead: click <strong>+ Add LED</strong> or <strong>+ Add rule</strong>, then set each row's <strong>Variable</strong>, <strong>Op</strong>, <strong>Threshold</strong> and color. The Xy Plot takes <strong>Variable X</strong> and <strong>Variable Y</strong>. For a Steering Wheel, choose <strong>iRacing</strong> under <strong>Preset</strong>. Every element also has <strong>Position &amp; Size</strong> fields and a <strong>Style</strong> group for borders, colors and fonts.</p>
<h2 id="save">Save your dash</h2>
<p>Dashes save to your local dash folder, so saving needs Chrome or Edge.</p>
<ul>
  <li><strong>Save</strong> (<code>Ctrl</code>+<code>S</code>) writes over the dash you opened.</li>
  <li>For a new dash, or a copy of a cloud dash, <strong>Save</strong> works like <strong>Save As…</strong> (<code>Ctrl</code>+<code>Shift</code>+<code>S</code>): the browser asks for a file name, starting in your dash folder.</li>
</ul>
<p>Save straight into your dash folder, not a subfolder, or the dash won't appear in the library. Saving also makes the thumbnail, and copies of that dash already on the Dash Canvas update at once. Closing with unsaved changes asks before discarding them.</p>
<div class="callout warn">
  <span class="ic">!</span>
  <div>
    <span class="lbl">Heads up</span>
    <p>Cloud dashes are read-only. Editing one opens a local copy, so pick your folder before you save: in the Dash Library, click <strong>Local</strong>, then <strong>Browse…</strong>. Keep the library on <strong>Local</strong> to see the dashes you've saved.</p>
  </div>
</div>
<h2 id="related">Related</h2>
<ul>
  <li><a href="docs-article.html?page=plugins.dash">Dash</a></li>
  <li><a href="docs-article.html?page=settings.preferences">Preferences</a></li>
  <li><a href="docs-article.html?page=plots.channels">Plots and channels</a></li>
</ul>
`,
},

// ─────────────────────────────────────────────────────────────────
// 08: TIMELINE
// ─────────────────────────────────────────────────────────────────

'timeline.points': {
  section: 'Timeline',
  title: 'Timeline points',
  lede: 'Markers on the lap that cut the camera, change playback speed, show notes or switch what ghosts and traces show, every time playback passes them.',
  prev: ['plugins.dash-designer', 'Dash Designer'],
  next: ['timeline.presentation', 'Building a presentation lap'],
  toc: ['add', 'kinds', 'edit', 'filter', 'keys', 'save', 'related'],
  tocLabels: ['Add a point at the cursor', 'Know what each kind does', 'Edit, move and delete points', 'Filter kinds and switch points off', 'Use the keyboard', 'Save and load points', 'Related'],
  body: `
<p>A timeline point sits at one spot on the lap and does something as playback passes it: cut the camera, change speed, show a note, or change what ghosts and traces show. Points are placed by lap position (LapDistPct), not time, so they fire on every lap. They live in the <strong>Timeline Points</strong> panel, in the right rail's <strong>Timeline</strong> tab. The demo run may already have a few: press play to see them.</p>
<!-- SHOT timeline.points: The Timeline tab open in the right rail showing the Timeline Points panel: the row of add buttons, the kind filter checkboxes and Ticker dropdown, and a list of Camera, Speed and Note points with one row marked with the play arrow, plus the matching colored ticks on the playback bar under the 3D view -->
<h2 id="add">Add a point at the cursor</h2>
<ol>
  <li>Move the cursor to the spot you want. The hint under the filters shows its position as a percentage of the lap.</li>
  <li>Set things up the way the point should leave them (camera framing, ghost options): most points copy what you see now.</li>
  <li>Click <strong>+ Camera</strong>, <strong>+ Note</strong>, <strong>+ Ghost</strong>, <strong>+ Trace</strong> or <strong>+ Tire Temp</strong>. For a Speed point, pick a rate in the dropdown (1/16&times; to 8&times;), then click <strong>+ Speed</strong>.</li>
</ol>
<p><strong>Next ▸</strong> jumps to the next point after the cursor. The add buttons are grayed out when the run has no LapDistPct channel.</p>
<h2 id="kinds">Know what each kind does</h2>
<ul>
  <li><strong>Camera</strong>: switches the 3D camera mode. <strong>+ Camera</strong> also pins the current framing (the row reads <strong>Cam ●</strong>). <strong>blend</strong> sweeps smoothly into the next pinned point of the same mode.</li>
  <li><strong>Speed</strong>: sets the playback speed. <strong>blend</strong> ramps toward the next Speed point's speed. The ⏸ field holds playback for that many seconds, with a countdown ring at the top of the 3D view.</li>
  <li><strong>Note</strong>: a <strong>Ticker</strong> that slides in at the edge of the 3D view, or a <strong>Billboard</strong> on the track. A preset (Info, Caution, Good and so on) sets its color and icon. A note can carry a small data plot.</li>
  <li><strong>Ghost</strong>: applies ghost options: <strong>Opaque</strong>, <strong>Labels</strong>, <strong>Stack</strong>, <strong>Table</strong>, <strong>Static</strong> and camera <strong>Focus</strong>.</li>
  <li><strong>Trace</strong>: sets the 3D trace channel (<strong>None</strong> for solid colors), mode (<strong>Channel</strong> or a Δt delta mode), colormap and an optional fixed <strong>range</strong>. <strong>Keep</strong> leaves a setting alone.</li>
  <li><strong>Tire Temp</strong>: turns the tire temperature overlay on or off (<strong>Overlay</strong>), and for ghosts (<strong>Ghosts</strong>).</li>
</ul>
<div class="callout note">
  <span class="ic">i</span>
  <div>
    <span class="lbl">Note</span>
    <p>Only notes follow the cursor while you scrub. Every other kind fires only while playback runs forward past it, so scrubbing never cuts the camera or changes the speed.</p>
  </div>
</div>
<h2 id="edit">Edit, move and delete points</h2>
<p>The list is sorted by lap position. ▶ marks the point of each kind in effect at the cursor.</p>
<ul>
  <li>To move a point, type a new percentage in its <strong>LDP %</strong> box.</li>
  <li>Change its settings in the <strong>Target</strong> column.</li>
  <li>Click ▸ for more: <strong>Edit framing</strong> on a camera point (<strong>⌖ Re-pin to view</strong>, <strong>Unpin</strong> or exact values), <strong>Note options</strong> on a note.</li>
  <li><strong>Seek to this point</strong> (⏵) moves the cursor there. <strong>Delete</strong> (✕) removes the point.</li>
</ul>
<p>Changing a camera point's mode drops its framing, so pin it again.</p>
<h2 id="filter">Filter kinds and switch points off</h2>
<ul>
  <li>The kind checkboxes (<strong>Camera</strong>, <strong>Speed</strong>, <strong>Note</strong> and so on) hide that kind from the list and the playback bar. Hidden points still fire.</li>
  <li><strong>Ticker</strong> puts ticker notes at the <strong>Bottom</strong> or <strong>Top</strong> of the 3D view.</li>
  <li>The power button (⏻) beside the panel title switches all points off without deleting them. An <strong>off</strong> tag shows until you switch them back on.</li>
</ul>
<p>Each point draws a tick on the playback bar's bottom lane on every lap, in its kind's color. Slipstream remembers these settings in your browser.</p>
<h2 id="keys">Use the keyboard</h2>
<ul>
  <li><code>K</code>: Camera point with the current view pinned.</li>
  <li><code>L</code>: Speed point at the current playback speed.</li>
  <li><code>N</code>: note. <code>G</code>: Ghost point.</li>
  <li><code>[</code> and <code>]</code>: previous or next point, among the kinds you have ticked.</li>
  <li><code>Delete</code> or <code>Backspace</code>: remove the point at the cursor (the nearest shown point within 2% of a lap).</li>
</ul>
<p>They work from any tab, but not while a field or checkbox has focus.</p>
<h2 id="save">Save and load points</h2>
<p>Points aren't saved in your browser. They stay while you work on the same track layout, even across runs, but opening a different layout clears them and reloading the page loses them.</p>
<ul>
  <li><strong>Export…</strong> downloads every point as a JSON file.</li>
  <li><strong>Import…</strong> loads a timeline points JSON file (one you exported, or one made by another tool) in place of all current points. A status line says how many came in; it turns amber and lists the reasons if some were skipped.</li>
  <li><strong>Clear</strong> removes every point.</li>
</ul>
<div class="callout warn">
  <span class="ic">!</span>
  <div>
    <span class="lbl">Heads up</span>
    <p>Import and Clear can't be undone, so export first if you want to keep what you have. Points are placed by lap position, so a file only lines up on the track layout it was made for.</p>
  </div>
</div>
<h2 id="related">Related</h2>
<ul>
  <li><a href="docs-article.html?page=timeline.presentation">Building a presentation lap</a></li>
  <li><a href="docs-article.html?page=play.transport">Transport and speed</a></li>
  <li><a href="docs-article.html?page=view3d.cameras">Cameras</a></li>
</ul>
`,
},
'timeline.presentation': {
  section: 'Timeline',
  title: 'Building a presentation lap',
  lede: 'Turn one lap into a replay that runs itself, with camera cuts, slow motion into the braking zone, a note with live data and traces that show where time goes.',
  prev: ['timeline.points', 'Timeline points'],
  next: ['assistant.using', 'Using the Assistant'],
  toc: ['setup', 'camera', 'slow', 'note', 'trace', 'play', 'related'],
  tocLabels: ['Pick a lap and add ghosts', 'Set the opening shot', 'Slow down and pause into the braking zone', 'Add a billboard and a data plot', 'Show where time is lost', 'Play it back', 'Related'],
  body: `
<p>This walkthrough builds a lap that plays itself: an opening shot, slow motion and a pause into the braking zone, a billboard with a brake plot at the key corner, ghost traces colored by time lost, and full speed down the straight. You work in the <strong>Timeline Points</strong> panel, in the rail's <strong>Timeline</strong> tab. For what each control does, see <a href="docs-article.html?page=timeline.points">Timeline points</a>.</p>
<!-- SHOT timeline.presentation: The 3D view paused in a braking zone with the green countdown ring at the top, an on-track billboard note, an inset brake plot in the lower left showing the ego and two ghosts, ghost traces colored by time lost, and the Timeline Points list beside it showing camera, speed, note and trace points -->
<h2 id="setup">Pick a lap and add ghosts</h2>
<ol>
  <li>Tick a lap in the Stint Folder, or use the demo run.</li>
  <li>Add one or two ghosts to compare against, from the Playlist or the Ghosts panel. See <a href="docs-article.html?page=ghosts.basics">Ego and ghosts</a>.</li>
  <li>If the panel already lists points you don't want, click <strong>Export…</strong> to keep a copy, then <strong>Clear</strong>.</li>
  <li>Press <code>Shift</code>+<code>,</code> to go back to the start of the lap.</li>
</ol>
<h2 id="camera">Set the opening shot</h2>
<ol>
  <li>Scrub just past the start/finish line.</li>
  <li>Set up the 3D camera: pick a mode and frame the car the way you want it. See <a href="docs-article.html?page=view3d.cameras">Cameras</a>.</li>
  <li>Click <strong>+ Camera</strong> or press <code>K</code>. The row reads <strong>Cam ●</strong>, which means the framing is pinned.</li>
  <li>Scrub to the approach to the braking zone, frame a closer shot, and add a second Camera point.</li>
</ol>
<p>For a smooth camera move instead of a cut, give both points the same mode and tick <strong>blend</strong> on the first. The camera then sweeps from the first framing to the second over the stretch between them.</p>
<h2 id="slow">Slow down and pause into the braking zone</h2>
<ol>
  <li>Scrub to just before the braking point.</li>
  <li>Pick <strong>1/4&times;</strong> in the speed dropdown and click <strong>+ Speed</strong>.</li>
  <li>In the new row's ⏸ field, type <code>2</code> and press <code>Enter</code>. Playback will hold here for 2 seconds.</li>
  <li>Scrub to the start of the next straight, pick <strong>2&times;</strong> and click <strong>+ Speed</strong> again.</li>
  <li>Add a <strong>1&times;</strong> point near the start of the lap, so the next lap starts at normal speed instead of carrying 2&times; over the line.</li>
</ol>
<p>At the pause point, playback stops and a green ring at the top of the 3D view counts down the seconds, then playback carries on at 1/4&times;. If you scrub away during the hold, it stays paused. To ease back up to speed through the corner, tick <strong>blend</strong> on the 1/4&times; point: the speed then ramps toward 2&times; instead of jumping.</p>
<h2 id="note">Add a billboard and a data plot</h2>
<ol>
  <li>Scrub to the key corner and click <strong>+ Note</strong> (or press <code>N</code>). The new row opens.</li>
  <li>Type the text, for example "Brake at the 100 m board", and press <code>Enter</code>.</li>
  <li>Pick a preset such as <strong>Caution</strong>, and change <strong>Ticker</strong> to <strong>Billboard</strong>.</li>
  <li>Under <strong>Facing</strong>, choose <strong>Up-track</strong> for a trackside sign that faces oncoming cars, or <strong>Face camera</strong>. <strong>Pop-out %</strong> sets how far either side of the point the sign is open (50 keeps it open all lap).</li>
  <li>Tick <strong>Data plot</strong>, then set <strong>Channel</strong> to a brake or speed channel, such as <code>Brake</code>.</li>
  <li>Set <strong>Window %</strong> to the start and end of the stretch to plot. The plot only shows while the cursor is inside that window.</li>
  <li>Place it with <strong>Pos %</strong> and <strong>Size %</strong> (percentages of the 3D view). Click <strong>+ ref</strong> to add a reference line, such as a <strong>Vert (LDP)</strong> line at the braking point.</li>
</ol>
<p>The plot shows your lap and every visible ghost, with a dot for each car.</p>
<h2 id="trace">Show where time is lost</h2>
<ol>
  <li>Scrub to the corner entry and click <strong>+ Trace</strong>.</li>
  <li>In the row's mode dropdown, choose <strong>Δt′/time</strong> (how fast time is being lost or gained) or <strong>Δt</strong> (the running gap). The delta modes color each ghost's trace against your lap, so the channel doesn't matter here.</li>
  <li>After the corner, add another Trace point with the mode set to <strong>Channel</strong> and a channel such as <code>Throttle</code>, to switch back.</li>
</ol>
<h2 id="play">Play it back</h2>
<ol>
  <li>Press <code>Shift</code>+<code>,</code> to go back to the start of the lap.</li>
  <li>Check there's no <strong>off</strong> tag beside the panel title (if there is, click the power button), then press <code>Space</code>.</li>
  <li>To fix a point, pause, jump to it with <code>[</code> or <code>]</code>, change it, then play again.</li>
  <li>When you're happy, click <strong>Export…</strong> to keep a copy.</li>
</ol>
<p>Timeline points are part of a <a href="docs-article.html?page=share.sessions">shared session</a>: everyone in the room gets the same points, so they see the same cuts, notes and speed changes as the lap plays.</p>
<div class="callout tip">
  <span class="ic">&#10003;</span>
  <div>
    <span class="lbl">Tip</span>
    <p>Use <strong>blend</strong> on Camera and Speed points for smooth moves instead of cuts and jumps. While you edit one kind, untick the other kinds' filters: the list gets shorter, and <code>[</code>, <code>]</code> and <code>Delete</code> only reach the points you can see. Play always starts at 1&times;, so if you pause mid-lap and play again, the speed stays normal until the next Speed point.</p>
  </div>
</div>
<h2 id="related">Related</h2>
<ul>
  <li><a href="docs-article.html?page=timeline.points">Timeline points</a></li>
  <li><a href="docs-article.html?page=ghosts.basics">Ego and ghosts</a></li>
  <li><a href="docs-article.html?page=view3d.traces">Track traces</a></li>
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

// ─────────────────────────────────────────────────────────────────
// 10: SHARE
// ─────────────────────────────────────────────────────────────────

'share.sessions': {
  section: 'Sharing and live',
  title: 'Shared sessions',
  lede: 'Put teammates, a coach or an engineer on the same run as you, live, so everyone sees the same lap, ghosts and camera at the same moment.',
  prev: ['assistant.using', 'Using the Assistant'],
  next: ['share.tray', 'LapLabs Tray and live view'],
  toc: ['start', 'invite', 'join', 'control', 'shared', 'pools', 'related'],
  tocLabels: ['Start a room', 'Invite people', 'Join a room', 'Choose who is in control', 'See what the room shares', 'Upload a session to a test pool', 'Related'],
  body: `
<p>A shared session is a room that others join from their own browser, each signed in with their own LapLabs account. Everyone has the same run open and the view follows along: scrub to a corner, add a ghost or switch camera, and the others see it as you do it.</p>
<!-- SHOT share.sessions: The Share session popup open under the Stint Folder title row, showing the large six-digit room code, the Copy invite link button, "2 people in room", the Everyone drives and I present buttons with I present selected, and Leave session at the bottom -->
<h2 id="start">Start a room</h2>
<ol>
  <li>Open a cloud run.</li>
  <li>Click <strong>Share session</strong> in the Stint Folder title row.</li>
  <li>Pick <strong>I present</strong> (the default) or <strong>Everyone drives</strong>.</li>
  <li>Click <strong>Create room</strong>. The popup now shows the room's six-digit code.</li>
</ol>
<p>Sharing works with cloud runs only; with a local file open, the popup says <strong>Open a cloud run to share a session.</strong> The room never sends telemetry, only what you do with it: each browser opens the run from the LapLabs cloud by itself, and nobody else can open a file on your computer. Outings and laps picked from cloud runs work too, unless a local file is mixed in. If you switch to a local file mid-session, the others stay on the last cloud run.</p>
<h2 id="invite">Invite people</h2>
<p>Click <strong>Copy invite link</strong> (it briefly reads <strong>Link copied!</strong>) and paste the link into a chat or email, or just read out the six-digit code. The popup counts who's connected, for example <strong>2 people in room</strong>.</p>
<p>Anyone with the code or the link can join, so only send it to people you want in the room.</p>
<h2 id="join">Join a room</h2>
<ul>
  <li><strong>From a link:</strong> open it. If you aren't signed in, sign in first: the link survives sign-in and you land in the room.</li>
  <li><strong>From a code:</strong> click <strong>Share session</strong>, type the six digits under <strong>or join a code</strong>, then click <strong>Join</strong> or press <code>Enter</code>.</li>
</ul>
<p>You arrive on the room's run, at the room's cursor, with the same camera, plots and panels. Ghosts and play or pause catch up the next time someone changes them. If the count stays at 1 person, nobody else is in that room: check the code.</p>
<h2 id="control">Choose who is in control</h2>
<ul>
  <li><strong>I present</strong>: only you, the room's creator, control the view. The others watch, read only, and their popup says so. Your button reads <strong>Presenting</strong>, theirs <strong>Watching</strong>.</li>
  <li><strong>Everyone drives</strong>: anyone can scrub, play, add ghosts or change the camera. The button reads <strong>Live</strong> with the head count (<strong>Live · 3</strong>), <strong>Live · driving</strong> while you change something and <strong>Live · following</strong> while someone else does.</li>
</ul>
<p>The creator can switch modes at any time from the popup. Either way, only the creator picks the run and ticks laps: everyone else's Stint Folder tree is locked and follows. If two people grab the same control, whoever got there first keeps it until they've let go for half a second.</p>
<p>A watcher's own clicks stay on their screen until the presenter's next change replaces them. To go, open the popup and click <strong>Leave session</strong>.</p>
<h2 id="shared">See what the room shares</h2>
<p>These follow whoever is in control:</p>
<ul>
  <li>The run, the Stint Folder ticks, the cursor and the range.</li>
  <li>Play and pause, speed, and the playback bar's snapping, axis, link and follow mode.</li>
  <li>Ghosts and the Ghosts panel options.</li>
  <li>The camera you pick. Orbiting or zooming with the mouse stays your own.</li>
  <li>Track trace settings.</li>
  <li>The 2D plots: which are open, their channels and how each is drawn. Holding <code>Shift</code> for the value readout shows it for everyone.</li>
  <li>Pen drawings and timeline points, so a lap you've prepared with camera cuts and notes plays the same for everyone.</li>
  <li>The rail tab, which 3D sidebar and plugin panels are open, Multi-Lap Timing's lap windows, and the Dash canvas.</li>
</ul>
<p>Some things stay your own: which plugins are switched on, the rail columns, the 2D plot sidebar, your Preferences and your Assistant chat.</p>
<h2 id="pools">Upload a session to a test pool</h2>
<p>This is only for members of a private test pool (a set of cloud runs only its members can see) whose membership allows uploads. It turns one of your own .ibt files into a cloud run in the pool, ready to share.</p>
<ol>
  <li>Choose your pool in the drop-down next to <strong>Cloud</strong>, <strong>Local</strong> and <strong>Both</strong>. With your telemetry folder open, set the filter to Local or Both.</li>
  <li>On a local file's row, click the upload button (☁↑, <strong>Build this session and upload it to</strong> your pool).</li>
</ol>
<p>The row shows <strong>Queued</strong>, <strong>Building…</strong>, a percentage, then <strong>Finishing…</strong>, one upload at a time. ☁✓ means done (<strong>Uploaded to</strong>) or already there (<strong>Already in</strong>). If it fails, the button turns into ☁!: hover it for the reason, click it to retry. The pool gets the built session and the original .ibt. In a room, people outside the pool can't open its runs.</p>
<h2 id="related">Related</h2>
<ul>
  <li><a href="docs-article.html?page=folder.open">Opening telemetry</a></li>
  <li><a href="docs-article.html?page=timeline.presentation">Building a presentation lap</a></li>
  <li><a href="docs-article.html?page=share.tray">LapLabs Tray and live view</a></li>
</ul>
`,
},
'share.tray': {
  section: 'Sharing and live',
  title: 'LapLabs Tray and live view',
  lede: 'A small Windows app that reads iRacing while you drive and can share your car live on laplabs.net.',
  prev: ['share.sessions', 'Shared sessions'],
  next: ['settings.preferences', 'Preferences'],
  toc: ['get', 'menu', 'share', 'watch', 'privacy', 'related'],
  tocLabels: ['Get LapLabs Tray', 'Read the tray menu', 'Share your car live', 'Watch on laplabs.net', 'Know what Share Live sends', 'Related'],
  body: `
<p>LapLabs Tray sits in the Windows system tray, next to the clock. While iRacing runs, it reads your telemetry live. Turn on <strong>Share Live</strong> and it sends that telemetry to a room on laplabs.net, where anyone with the room code can follow your car on a live track map or a live dashboard. Slipstream itself works with recorded telemetry; the tray is for watching a session as it happens.</p>
<!-- SHOT share.tray: The LapLabs Tray menu open from the Windows system tray, signed in, with Share Live ticked and the Room line showing a six-digit code marked (live), next to the laplabs.net Live Track page following the car -->
<h2 id="get">Get LapLabs Tray</h2>
<p>LapLabs Tray is available to testers only for now, and it isn't on the laplabs.net download pages yet. It runs on Windows only.</p>
<p>Once it's running, its icon sits in the system tray (it may be tucked under the arrow beside the clock). Click the icon to open the menu, or hover over it to see what the tray is doing, such as the track it's reading.</p>
<h2 id="menu">Read the tray menu</h2>
<ul>
  <li><strong>Source: iRacing</strong>: the tray is reading iRacing. It shows <strong>Source: waiting for iRacing</strong> until iRacing is running, and <strong>Source: telemetry paused</strong> if you paused it from Diagnostics.</li>
  <li><strong>Track:</strong> the track iRacing reports.</li>
  <li><strong>Account:</strong> who you're signed in as, with <strong>Sign in</strong> or <strong>Sign out</strong> below it. You need to sign in to share.</li>
  <li><strong>Share Live</strong>, the <strong>Room:</strong> line, <strong>Watch Live</strong> and <strong>Open Dashboard</strong>: see the next section.</li>
  <li><strong>Updates:</strong> whether a newer version is ready. <strong>Install update &amp; restart</strong> installs one that has downloaded; the tray never restarts during an iRacing session, and installs it by itself afterwards. <strong>Updates: off</strong> means this copy can't update itself.</li>
  <li><strong>Start with Windows</strong>: start the tray when you sign in to Windows. Off until you tick it.</li>
  <li><strong>Discord status</strong>: shows LapLabs in your Discord profile, with your track while you drive. On by default. It never shows telemetry.</li>
  <li><strong>Diagnostics</strong>: connection details for support, plus <strong>Pause telemetry</strong> and <strong>Resume telemetry</strong>.</li>
  <li><strong>Quit</strong>: closes the tray and stops any sharing.</li>
</ul>
<h2 id="share">Share your car live</h2>
<ol>
  <li>Click <strong>Sign in</strong>. Your browser opens laplabs.net: sign in with your LapLabs account, the same one you use for Slipstream. The menu then shows <strong>Account:</strong> with your name. Until then, <strong>Share Live</strong> is grayed out and the Room line reads <strong>Room: sign in first</strong>.</li>
  <li>Click <strong>Share Live</strong> to tick it. The tray picks a new six-digit room code, and the Room line shows it as connecting, then as live (for example <strong>Room: 123456 (live)</strong>).</li>
  <li>Click <strong>Watch Live</strong> to open the live track for your room, or <strong>Open Dashboard</strong> for the live dashboard. Both work only while you're sharing.</li>
  <li>Send the code, or the address of either page, to whoever wants to watch.</li>
</ol>
<p>Click <strong>Share Live</strong> again to stop. It's off every time the tray starts, and signing out stops it too. You get a new code each time you turn it on, so send the new one.</p>
<h2 id="watch">Watch on laplabs.net</h2>
<p>Viewers need only the code: no tray, and no LapLabs account.</p>
<ul>
  <li><strong>Live Track</strong> (laplabs.net/live-track): your car moving on a 3D model of the track, with camera buttons (<strong>Free</strong>, <strong>Chase</strong>, <strong>Rig</strong>, <strong>Drone</strong>, <strong>TV</strong>, <strong>Cockpit</strong>), a trace colored by Speed, Throttle or Brake, and shift lights, pedals, speed, gear and steering. Type the code in the room box and click <strong>Connect</strong>; a link with the code connects by itself. Until you connect, it plays a demo lap at Spa.</li>
  <li><strong>Live Dashboard</strong> (laplabs.net/dashboard): speed, gear, oil and water temperature and fuel, the pedals and steering angle, and lap-by-lap traces against lap distance. Enter the code under <strong>Room</strong> (a link fills it in) and click <strong>Connect →</strong>.</li>
</ul>
<p>The dashboard page also offers the older Live Dash Sender; with LapLabs Tray you don't need it. The dashes inside Slipstream replay recorded laps rather than live data: see <a href="docs-article.html?page=plugins.dash">Dash</a>.</p>
<h2 id="privacy">Know what Share Live sends</h2>
<p>With Share Live off, the tray doesn't send your telemetry anywhere. With it on, it sends, up to 60 times a second:</p>
<ul>
  <li>Your car's position and direction on track, its speed and how far around the lap you are.</li>
  <li>Throttle, brake, clutch, steering, RPM, gear, the shift light, suspension travel, oil and water temperature and fuel level.</li>
  <li>The track you're on, your LapLabs display name (your username, or the part of your email address before the @) and a car color, so viewers can tell cars apart.</li>
</ul>
<p>Anyone with the room code can watch. The code is the only key, so share it only with people you want watching, and turn Share Live off when you're done.</p>
<div class="callout warn">
  <span class="ic">!</span>
  <div>
    <span class="lbl">Heads up</span>
    <p>With <strong>Discord status</strong> on, your Discord profile shows buttons that open your room while you share, so anyone who can see your Discord status can watch too. Untick Discord status if you don't want that.</p>
  </div>
</div>
<h2 id="related">Related</h2>
<ul>
  <li><a href="docs-article.html?page=share.sessions">Shared sessions</a></li>
  <li><a href="docs-article.html?page=plugins.dash">Dash</a></li>
  <li><a href="docs-article.html?page=settings.preferences">Preferences</a></li>
</ul>
`,
},

// ─────────────────────────────────────────────────────────────────
// 11: SETTINGS
// ─────────────────────────────────────────────────────────────────

'settings.preferences': {
  section: 'Settings and libraries',
  title: 'Preferences',
  lede: 'Choose the units your numbers show in, where the plot sidebars sit, how the 3D view draws cars and track, and the paint on your car.',
  prev: ['share.tray', 'LapLabs Tray and live view'],
  next: ['settings.vehicles', 'Vehicle library'],
  toc: ['open', 'units', 'sidebar', 'view3d', 'paint', 'save', 'related'],
  tocLabels: ['Open Preferences', 'Choose Imperial or Metric', 'Move the plot sidebars', 'Adjust the 3D view', 'Paint your car', 'Save, cancel or reset', 'Related'],
  body: `
<p>Preferences hold the settings that apply across Slipstream: units, the side the plot sidebars sit on, a few 3D display options and the paint on your car. The window has two pages, <strong>Plot</strong> and <strong>Units</strong>, listed down its left side.</p>
<!-- SHOT settings.preferences: Preferences window on the Plot page, showing the two shadow checkboxes, Show FPS counter, the car-surface blend checkbox and window, the rung spacing field, Plot sidebar side set to Left, and Ego paint color with the Ego metallic and Ego roughness sliders, with Reset to Default, Cancel and OK along the bottom -->
<h2 id="open">Open Preferences</h2>
<ol>
  <li>Choose <strong>Tools</strong> &gt; <strong>Preferences...</strong>.</li>
  <li>Click <strong>Plot</strong> or <strong>Units</strong> on the left to switch pages.</li>
  <li>Make your changes, then click <strong>OK</strong>. Open plots and the 3D view update straight away, with no reload.</li>
</ol>
<p>Rows on the Plot page that aren't covered here have no effect in the browser.</p>
<h2 id="units">Choose Imperial or Metric</h2>
<p>On the <strong>Units</strong> page, set <strong>System</strong> to <strong>Imperial</strong> (the default) or <strong>Metric</strong>:</p>
<ul>
  <li>Speed: mph or km/h.</li>
  <li>Temperatures, such as tires, track, oil and water: °F or °C.</li>
  <li>Pressures, such as tires, brake lines and oil: psi or kPa.</li>
  <li>Acceleration (LatAccel, LongAccel, VertAccel): g or m/s².</li>
  <li>Distance and height (LapDist, Alt): ft or m.</li>
  <li>Fuel level: gal or L.</li>
  <li>Tire loads: lbs or kg. Steering torque: ft·lbf or Nm.</li>
</ul>
<p>Some units are the same in both systems: angles show in degrees, pedals and other 0 to 1 channels in percent, and times in seconds.</p>
<p>Your choice applies to the 2D plots (the lines, the axis and the readout), the units in the channel lists of the 2D and 3D sidebars, the speed on ghost labels, the track temperature in Timing's weather band, and dash elements whose <strong>Units</strong> is set to <strong>Follow app preference</strong>. Derived channels keep their own unit, and so does any channel Slipstream doesn't recognize.</p>
<div class="callout note">
  <span class="ic">i</span>
  <div>
    <span class="lbl">Note</span>
    <p>The colorbar in the 3D sidebar's <strong>Channels + Traces</strong> panel names the channel in your unit, such as Speed (mph), but its low and high numbers, like those on the trace badge, stay in the recorded unit: m/s for Speed, 0 to 1 for pedals. Type your own color range in those units too.</p>
  </div>
</div>
<h2 id="sidebar">Move the plot sidebars</h2>
<p>On the Plot page, <strong>Plot sidebar side</strong> puts the sidebar of the 2D plots and of the 3D view on the <strong>Left</strong> (the default) or the <strong>Right</strong>. They always move together.</p>
<h2 id="view3d">Adjust the 3D view</h2>
<ul>
  <li><strong>Ego car casts a shadow in 3D plots</strong> and <strong>Ghost cars cast shadows in 3D plots</strong>: shadows under your car and the ghost cars, falling on the track. Both are on to start with. If the 3D view runs slowly, try turning both off.</li>
  <li><strong>Show FPS counter in 3D plots</strong>: a small readout of the frame rate and the slowest recent frame in each 3D view. It's off to start with. Turn it on to check how smoothly your computer draws the view.</li>
  <li><strong>Blend car Z onto track surface (3D)</strong>: a car's height comes from its GPS altitude, so on long climbs and descents it can sit a few centimeters off the track. Tick this to hold the car on the surface while keeping its own bumps and bounces. It's off to start with, and it only acts on tracks with a published 3D model (see <a href="docs-article.html?page=settings.tracks">Track library</a>).</li>
  <li><strong>Car-surface blend window (s)</strong>: how slowly the blend corrects, from 0.5 to 30 seconds (5 to start with). Larger values only fix slow drift on long hills. Smaller values hold the car tighter to the surface but smooth away more of its own movement.</li>
  <li><strong>LapDistPct rung spacing (%)</strong>: the thin lines across the track that mark distance around the lap. The default, 1, draws a line every 1% of the lap. Raise it for fewer lines: 10 draws one every tenth of a lap.</li>
</ul>
<h2 id="paint">Paint your car</h2>
<ul>
  <li><strong>Ego paint color</strong>: the body color of your car (the ego) in the 3D view, and of the cars in the Vehicle Library Viewer. It starts as red. Click the swatch to pick another. Your own racing line takes this color too while the traces are set to <strong>None (solid)</strong>.</li>
  <li><strong>Ego metallic</strong>: from 0 (plain paint, the default) to 1 (fully metallic).</li>
  <li><strong>Ego roughness</strong>: from 0 (glossy, with sharp reflections) to 1 (matte). It starts at 0.35.</li>
</ul>
<p>Metallic and roughness apply to the painted body of every car, ghosts included, but ghosts keep their own colors. If you've added the lap you're watching as a ghost, your car takes that ghost's color while you're on that lap.</p>
<h2 id="save">Save, cancel or reset</h2>
<ul>
  <li><strong>OK</strong> saves your changes and applies them.</li>
  <li><strong>Cancel</strong> closes the window without saving. So do <code>Esc</code> and the × in the corner.</li>
  <li><strong>Reset to Default</strong> puts the page you're on back to its starting values. The other page isn't touched, and nothing is saved until you click OK.</li>
</ul>
<p>Preferences are saved in this browser. They don't travel with your LapLabs account, so set them again in another browser or on another computer.</p>
<h2 id="related">Related</h2>
<ul>
  <li><a href="docs-article.html?page=view3d.traces">Track traces</a></li>
  <li><a href="docs-article.html?page=plots.channels">Plots and channels</a></li>
  <li><a href="docs-article.html?page=view3d.car">Car and overlays</a></li>
</ul>
`,
},
'settings.vehicles': {
  section: 'Settings and libraries',
  title: 'Vehicle library',
  lede: 'Browse the 3D car models Slipstream draws in the 3D view, and see how each car in a run gets its model.',
  prev: ['settings.preferences', 'Preferences'],
  next: ['settings.tracks', 'Track library'],
  toc: ['open', 'browse', 'paint', 'assign', 'related'],
  tocLabels: ['Open the Vehicle Library Viewer', 'Browse the models', 'See your paint on the models', 'Choose which model a car uses', 'Related'],
  body: `
<p>The vehicle library is the set of 3D car models that LapLabs publishes for Slipstream. They're LapLabs stand-ins for each kind of car (stock car, prototype, single-seater and GT) rather than copies of each iRacing car. The Vehicle Library Viewer shows them on a turntable. The library holds the published models only: you can't add a model of your own.</p>
<!-- SHOT settings.vehicles: Vehicle Library Viewer with the ring of car models on a dark floor, the front car turning in the red default paint, its name between the left and right arrows below the ring, and the Reload button at the top -->
<h2 id="open">Open the Vehicle Library Viewer</h2>
<ol>
  <li>Choose <strong>Tools</strong> &gt; <strong>Libraries</strong> &gt; <strong>Vehicle Library Viewer...</strong>.</li>
  <li>Slipstream loads the published models and sets them out on a ring. Each car appears as soon as its model has loaded.</li>
  <li>When you're done, click <strong>Close</strong> or press <code>Esc</code>.</li>
</ol>
<h2 id="browse">Browse the models</h2>
<ul>
  <li>The car at the front of the ring turns slowly, one full turn every 30 seconds, so you can see it from every side.</li>
  <li>Click the ◀ or ▶ arrow under the ring to bring the previous or next model to the front. The ring wraps around at the end.</li>
  <li>Or drag across the ring to spin it by hand. Let go and it settles on the nearest car.</li>
  <li>The name between the arrows is the model at the front.</li>
  <li><strong>Reload</strong> fetches the list again, to pick up models published since you opened the viewer.</li>
</ul>
<p>If the ring stays empty and shows <strong>No published cloud vehicles.</strong>, Slipstream couldn't load the list. Check your connection and click Reload.</p>
<h2 id="paint">See your paint on the models</h2>
<p>The models wear your car's paint: the color and finish you set with <strong>Ego paint color</strong>, <strong>Ego metallic</strong> and <strong>Ego roughness</strong> on the Plot page of <strong>Tools</strong> &gt; <strong>Preferences...</strong>. Change them there and the ring shows the new paint, so the viewer is a handy place to judge a color. See <a href="docs-article.html?page=settings.preferences">Preferences</a>.</p>
<h2 id="assign">Choose which model a car uses</h2>
<p>The viewer is only for looking: it doesn't change the model of any car. Slipstream gives each car in a run the model that matches its kind. Stock cars such as NASCAR and ARCA get the stock car, prototypes such as LMP and GTP cars get the prototype, formula cars, IndyCar and F4 get the single-seater, and everything else gets the GT. Files whose car Slipstream doesn't know use the <strong>Default</strong> model. To pick another model for a car or for a single file, or to change the Default, open the <strong>Vehicle</strong> panel in the 3D Track sidebar. See <a href="docs-article.html?page=view3d.car">Car and overlays</a>.</p>
<h2 id="related">Related</h2>
<ul>
  <li><a href="docs-article.html?page=view3d.car">Car and overlays</a></li>
  <li><a href="docs-article.html?page=settings.preferences">Preferences</a></li>
  <li><a href="docs-article.html?page=settings.tracks">Track library</a></li>
</ul>
`,
},
'settings.tracks': {
  section: 'Settings and libraries',
  title: 'Track library',
  lede: 'See which circuits have a published 3D model, and what a model adds to the 3D view, Timing and Corner Analysis.',
  prev: ['settings.vehicles', 'Vehicle library'],
  next: ['ref.shortcuts', 'Keyboard and mouse'],
  toc: ['open', 'browse', 'model', 'without', 'column', 'related'],
  tocLabels: ['Open the Track Library', 'Browse the published circuits', 'What a 3D track model adds', 'When a track has no model', 'Check a track in the Stint Folder', 'Related'],
  body: `
<p>LapLabs publishes 3D models of circuits for everyone to use. When you open a run, Slipstream looks for a published model of its track and layout and loads it into the 3D view by itself, with nothing for you to set up. The Track Library lists the circuits that have one.</p>
<!-- SHOT settings.tracks: Track Library window with Public selected, one circuit opened to show its layouts, a layout selected and its top-down outline previewed on the right, single tracks listed below the circuits, and Refresh and Close at the bottom -->
<h2 id="open">Open the Track Library</h2>
<ol>
  <li>Choose <strong>Tools</strong> &gt; <strong>Libraries</strong> &gt; <strong>Track Library...</strong>.</li>
  <li>The list on the left shows the <strong>Public</strong> library: every published circuit.</li>
  <li>When you're done, click <strong>Close</strong> or press <code>Esc</code>.</li>
</ol>
<div class="callout note">
  <span class="ic">i</span>
  <div>
    <span class="lbl">Note</span>
    <p>The Track Library window needs Chrome or Edge. In other browsers it opens an empty settings window instead, but the 3D view still loads published tracks.</p>
  </div>
</div>
<h2 id="browse">Browse the published circuits</h2>
<ul>
  <li>Circuits come first, each with its name in bold and its number of layouts. Click one to open it (▸ turns to ▾) and list its layouts.</li>
  <li>Single tracks follow, one row each.</li>
  <li>Click a layout or a track to preview it on the right: a top-down outline with north at the top, showing both edges, the center line and a tick at the start/finish line. Opening a circuit previews its first layout.</li>
  <li><strong>Refresh</strong> loads the list again.</li>
</ul>
<p>The library is for looking: picking a track here doesn't load it or change your run. Slipstream chooses the track for each run itself.</p>
<p>LapLabs publishes new circuits over time. Refresh shows them in the list straight away. Reload the page for the 3D view and the Stint Folder to start using them.</p>
<h2 id="model">What a 3D track model adds</h2>
<ul>
  <li><strong>The real circuit in the 3D view.</strong> You get the track surface with its hills and banking, plus curbs, walls and other trackside detail where the model has them. The cars drive on it, with the lap-distance lines and sector lines drawn on the surface.</li>
  <li><strong>Corner Analysis.</strong> It finds corners from the track model, so without one it shows <strong>No track geometry yet</strong>. The Assistant also needs the model to answer questions about corners.</li>
  <li><strong>Sectors for every file.</strong> A model carries the track's sectors, so the sector lines on the playback bar and the 2D plots, and Timing's Sector Times, work even for a file that doesn't include iRacing's sector information.</li>
  <li><strong>Car-surface blend.</strong> The Preferences option that holds the car on the track surface only works on a model. See <a href="docs-article.html?page=settings.preferences">Preferences</a>.</li>
</ul>
<h2 id="without">When a track has no model</h2>
<p>If a track or layout has no published model, the 3D view draws a ribbon instead: a plain band of even width that follows the run's GPS trace, with lap-distance lines, sector lines and a start/finish line. Playback, ghosts, traces and plots all work as usual. Sectors then come from the file, when it has them. Corner Analysis is the one plugin that needs a model.</p>
<p>Each layout needs its own model. A published Grand Prix layout doesn't cover a club or oval layout of the same circuit, so runs on those layouts get the ribbon.</p>
<h2 id="column">Check a track in the Stint Folder</h2>
<p>You don't need to open the Track Library to know whether a run has a model. The <strong>3D</strong> column of the Stint Folder tree shows it on every track and layout row:</p>
<ul>
  <li>Green ✓: LapLabs has published a model.</li>
  <li>✗: there's no model, so the 3D view uses the GPS ribbon.</li>
  <li>~ on a track row: its layouts differ. Open the track to see each one.</li>
</ul>
<p>Hover over a mark for a short explanation. Published circuits can also carry other names they're known by, and the tree's <strong>Filter track / layout&hellip;</strong> box matches those too. See <a href="docs-article.html?page=folder.tree">The tree and selecting laps</a>.</p>
<h2 id="related">Related</h2>
<ul>
  <li><a href="docs-article.html?page=folder.tree">The tree and selecting laps</a></li>
  <li><a href="docs-article.html?page=plugins.corners">Corner Analysis</a></li>
  <li><a href="docs-article.html?page=plugins.timing">Timing</a></li>
</ul>
`,
},

// ─────────────────────────────────────────────────────────────────
// 12: REFERENCE
// ─────────────────────────────────────────────────────────────────

'ref.shortcuts': {
  section: 'Reference',
  title: 'Keyboard and mouse',
  lede: 'Every keyboard shortcut and mouse control in Slipstream, grouped by the part of the app you use it in.',
  prev: ['settings.tracks', 'Track library'],
  next: ['ref.troubleshooting', 'Troubleshooting'],
  toc: ['ignored', 'playback', 'view3d', 'plots', 'folder', 'timeline', 'dash', 'scatter', 'plugins', 'text', 'related'],
  tocLabels: ['When keys are ignored', 'Playback', '3D view', '2D plots', 'Stint Folder', 'Timeline points', 'Dash canvas and Dash Designer', 'Scatter', 'Corner Analysis, Segment Eval and Timing', 'Text boxes and dialogs', 'Related'],
  body: `
<p>This page collects every key and mouse control in one place. Hover over a button to see its name, and its shortcut where it has one. Each group links to the page that explains it in full.</p>
<!-- SHOT ref.shortcuts: The transport row under the 3D view with the mouse over the Prev lap, same LapDistPct button, its tooltip showing the Ctrl+, shortcut -->
<h2 id="ignored">When keys are ignored</h2>
<p>Shortcuts never get in the way of typing: they're ignored while a text box, number field, dropdown or checkbox has focus. A focused checkbox takes <code>Space</code> for itself, so right after you tick a lap in the Stint Folder, <code>Space</code> unticks it instead of playing. Click an empty part of the 3D view or a plot, and the keys work again.</p>
<div class="callout note">
  <span class="ic">i</span>
  <div>
    <span class="lbl">Note</span>
    <p><code>F5</code> doesn't reload the page, because Slipstream uses it for something else. To reload, use the browser's reload button or <code>Ctrl</code>+<code>R</code>.</p>
  </div>
</div>
<h2 id="playback">Playback</h2>
<ul>
  <li><code>Space</code>: play or pause. Play always starts forward at 1&times;.</li>
  <li><code>.</code> (<strong>Fast-forward</strong>) and <code>,</code> (<strong>Rewind</strong>): push playback toward faster forward or faster reverse, in steps of two.</li>
  <li><code>Shift</code>+<code>,</code> and <code>Shift</code>+<code>.</code>: previous or next lap. The first <code>Shift</code>+<code>,</code> restarts the lap you're in.</li>
  <li><code>Ctrl</code>+<code>,</code> and <code>Ctrl</code>+<code>.</code>: previous or next lap at the same spot on track.</li>
  <li><code>Ctrl</code>+<code>Space</code>: fit the playback range, and the 2D plots, to the lap at the cursor.</li>
</ul>
<p>On the playback bar: scroll to zoom the range, drag the bottom lane to scrub, drag the range window or its gold edges to move or resize it, and right-click the bottom lane for the ghost sync point. See <a href="docs-article.html?page=play.transport">Transport and speed</a> and <a href="docs-article.html?page=play.range">Playback bar and range</a>.</p>
<h2 id="view3d">3D view</h2>
<ul>
  <li><strong>Chase</strong>, <strong>Orbit</strong> and <strong>Spectator</strong>: drag with the left mouse button to swing the camera around the car, and scroll to move closer or farther away.</li>
  <li><strong>Cockpit</strong>: dragging and plain scrolling do nothing.</li>
  <li><strong>Free</strong>: <code>W</code>, <code>A</code>, <code>S</code> and <code>D</code> to move, <code>Space</code> and <code>C</code> for up and down, and hold <code>Shift</code> to go faster. Drag to look around. <code>Space</code> also plays or pauses.</li>
  <li><code>Ctrl</code>+scroll: zoom the lens (the field of view) in every mode except <strong>TV</strong>, where the mouse does nothing.</li>
  <li>With the <strong>Pen</strong> on, dragging draws on the track and scrolling doesn't move the camera.</li>
  <li>In the sidebar, double-click a stint or lap in the <strong>Playlist</strong> to jump to it, or a ghost's label in the <strong>Ghosts</strong> panel to make that lap the ego.</li>
</ul>
<p>See <a href="docs-article.html?page=view3d.cameras">Cameras</a>, <a href="docs-article.html?page=view3d.car">Car and overlays</a> and <a href="docs-article.html?page=ghosts.basics">Ego and ghosts</a>.</p>
<h2 id="plots">2D plots</h2>
<ul>
  <li>Scroll: zoom in or out around the mouse pointer. Only the horizontal axis zooms.</li>
  <li>Drag: pan along the session. Double-click: show the whole session again.</li>
  <li>Hold <code>Ctrl</code> and move the mouse: the playback cursor follows the pointer. <code>Ctrl</code>+click jumps it to that spot.</li>
  <li>Hold <code>Shift</code>: show the readout box with each value at the cursor.</li>
</ul>
<p>See <a href="docs-article.html?page=plots.navigate">Navigating plots</a>.</p>
<h2 id="folder">Stint Folder</h2>
<ul>
  <li><code>Ctrl</code>+scroll over the tree: make its text larger or smaller.</li>
  <li>Click a column header to sort by it, and again to reverse. Drag the edge of a header to resize its column.</li>
</ul>
<p>See <a href="docs-article.html?page=folder.tree">The tree and selecting laps</a>.</p>
<h2 id="timeline">Timeline points</h2>
<ul>
  <li><code>K</code>: add a Camera point with the current view pinned.</li>
  <li><code>L</code>: add a Speed point at the current playback speed.</li>
  <li><code>N</code>: add a Note point. <code>G</code>: add a Ghost point.</li>
  <li><code>[</code> and <code>]</code>: jump to the previous or next point, among the kinds you have ticked. They wrap around the lap.</li>
  <li><code>Delete</code> or <code>Backspace</code>: remove the shown point nearest the cursor, if it's within 2% of a lap.</li>
</ul>
<p>These work from any rail tab, but not while you hold <code>Ctrl</code> or <code>Alt</code>. See <a href="docs-article.html?page=timeline.points">Timeline points</a>.</p>
<h2 id="dash">Dash canvas and Dash Designer</h2>
<p>On the Dash canvas:</p>
<ul>
  <li>Drag a dash to move it, or the triangle at its bottom-right corner to scale it. Drag empty space to pan.</li>
  <li><code>Ctrl</code>+scroll: zoom the canvas. Over the <strong>Dash Library</strong> pane, it makes the thumbnails bigger or smaller.</li>
  <li><code>Delete</code> or <code>Backspace</code>: take the selected dash off the canvas. <code>Esc</code>: deselect it.</li>
</ul>
<p>In the Dash Designer:</p>
<ul>
  <li><code>Ctrl</code>+<code>S</code>: <strong>Save</strong>. <code>Ctrl</code>+<code>Shift</code>+<code>S</code>: <strong>Save As…</strong></li>
  <li><code>Ctrl</code>+<code>Z</code>: <strong>Undo</strong>. <code>Ctrl</code>+<code>Y</code> or <code>Ctrl</code>+<code>Shift</code>+<code>Z</code>: <strong>Redo</strong>.</li>
  <li><code>Ctrl</code>+<code>C</code>, <code>Ctrl</code>+<code>X</code> and <code>Ctrl</code>+<code>V</code>: copy, cut and paste. <code>Ctrl</code>+<code>A</code>: select all.</li>
  <li><code>Ctrl</code>+<code>]</code>: <strong>Bring to Front</strong>. <code>Ctrl</code>+<code>[</code>: <strong>Send to Back</strong>.</li>
  <li>Arrow keys: nudge the selection 1 pixel, or 10 pixels with <code>Shift</code>.</li>
  <li><code>Delete</code> or <code>Backspace</code>: delete the selection. <code>Esc</code>: clear the selection.</li>
  <li><code>G</code>: turn <strong>Snap to Grid</strong> on or off.</li>
  <li><code>Shift</code>+click adds an element to the selection. Double-click an element to open its settings.</li>
  <li>While drawing a <strong>Segment Border</strong>: <code>Enter</code> or a double-click finishes it, <code>Ctrl</code>+<code>Z</code> removes the last point and <code>Esc</code> cancels.</li>
</ul>
<p>See <a href="docs-article.html?page=plugins.dash">Dash</a> and <a href="docs-article.html?page=plugins.dash-designer">Dash Designer</a>.</p>
<h2 id="scatter">Scatter</h2>
<ul>
  <li>Scroll: zoom around the pointer. Hold <code>Shift</code> to zoom only across, or <code>Alt</code> to zoom only up and down.</li>
  <li>Drag: pan. Double-click: fit all the points again.</li>
  <li>In <strong>Scatter 3D (X, Y, Z)</strong>: drag to orbit and scroll to zoom.</li>
</ul>
<p>See <a href="docs-article.html?page=plugins.scatter">Scatter</a>.</p>
<h2 id="plugins">Corner Analysis, Segment Eval and Timing</h2>
<ul>
  <li>The Corner Analysis <strong>Lines</strong> and <strong>Track</strong> panes, and the Segment Eval <strong>Map</strong>: scroll to zoom, drag to pan, double-click to reset.</li>
  <li>The Corner Analysis <strong>Style Map</strong>: click a dot to select it, or drag a box around several in the 2D view. Right-click a dot to add or remove that lap as a ghost. In 3D, drag to orbit.</li>
  <li><strong>Sector Times</strong>: double-click a sector cell to jump to the start of that sector, or a lap's name or Total to jump to the start of the lap.</li>
</ul>
<p>See <a href="docs-article.html?page=plugins.corners">Corner Analysis</a>, <a href="docs-article.html?page=plugins.segments">Segment Eval</a> and <a href="docs-article.html?page=plugins.timing">Timing</a>.</p>
<h2 id="text">Text boxes and dialogs</h2>
<ul>
  <li>A 2D plot's <strong>Add variables…</strong> box: <code>Enter</code> adds the ticked channels, or the only match when the filter leaves just one. <code>Esc</code> closes the list.</li>
  <li>The Assistant: <code>Enter</code> sends your message, and <code>Shift</code>+<code>Enter</code> starts a new line.</li>
  <li>The <strong>Share session</strong> code box: <code>Enter</code> joins once you've typed all six digits.</li>
  <li><code>Esc</code>: close an open menu, right-click menu or dialog.</li>
</ul>
<p>See <a href="docs-article.html?page=plots.channels">Plots and channels</a>, <a href="docs-article.html?page=assistant.using">Using the Assistant</a> and <a href="docs-article.html?page=share.sessions">Shared sessions</a>.</p>
<h2 id="related">Related</h2>
<ul>
  <li><a href="docs-article.html?page=play.transport">Transport and speed</a></li>
  <li><a href="docs-article.html?page=plots.navigate">Navigating plots</a></li>
  <li><a href="docs-article.html?page=ref.troubleshooting">Troubleshooting</a></li>
</ul>
`,
},
'ref.troubleshooting': {
  section: 'Reference',
  title: 'Troubleshooting',
  lede: 'Quick fixes for the things that most often go wrong, starting from what you see on screen.',
  prev: ['ref.shortcuts', 'Keyboard and mouse'],
  next: null,
  toc: ['grayed', 'empty-tree', 'red-file', 'reopen', 'space', 'ribbon', 'corners', 'sectors', 'derived', 'tires', 'share', 'slow', 'points', 'assistant', 'help'],
  tocLabels: ['The iRacing Telemetry button is grayed out', 'The tree is empty after picking a folder', 'A file name is red, with !!! after it', 'Reopen unloaded my laps', 'Space unticked a lap instead of playing', 'The track is a plain ribbon, not a 3D model', 'Corner Analysis says "No track geometry yet"', 'Timing says "No sector data"', 'A derived channel\'s line is empty', 'The tires are solid blue', 'Share session says "Open a cloud run to share a session."', 'Slipstream feels slow', 'My timeline points disappeared', 'The Assistant shows an error', 'Get help'],
  body: `
<p>Each entry starts with what you see, then what to do about it. If your problem isn't here, ask on Discord (see the end of this page).</p>
<!-- SHOT ref.troubleshooting: The Stint Folder with one file name in red followed by !!!, its hover tooltip showing the reason the file couldn't be read, and the warning banner about files that failed to parse above the tree -->
<h2 id="grayed">The iRacing Telemetry button is grayed out</h2>
<p>Your browser can't open folders on your computer. Open Slipstream in Chrome or Edge. Cloud runs work in any browser; your own telemetry folder and a local dash folder need one of those two. See <a href="docs-article.html?page=folder.open">Opening telemetry</a>.</p>
<h2 id="empty-tree">The tree is empty after picking a folder</h2>
<p>If it says <strong>No telemetry files found.</strong>, you probably picked a folder above your telemetry. Slipstream only lists <code>.ibt</code> and <code>.parquet</code> files sitting directly in the folder you pick, not in its subfolders, so click <strong>Change…</strong> and pick <code>Documents&#92;iRacing&#92;telemetry</code> itself. If it says <strong>No matches for current filter.</strong>, clear the <strong>Filter track / layout…</strong> and <strong>Filter car…</strong> boxes.</p>
<h2 id="red-file">A file name is red, with !!! after it</h2>
<p>Slipstream couldn't read that file, but it keeps it in the list. Hover over the <strong>!!!</strong> to see why. The warning above the tree that says files failed to parse and to see the console means your browser's developer console (<code>Ctrl</code>+<code>Shift</code>+<code>J</code> in Chrome or Edge), not the <strong>Console</strong> tab in Slipstream's rail.</p>
<h2 id="reopen">Reopen unloaded my laps</h2>
<p>Opening, reopening or changing a folder clears every tick in the tree, cloud runs included, so whatever you had loaded is unloaded. Tick the laps again. Since <strong>Reopen</strong> is also how you pick up new sessions, expect to tick again after each refresh.</p>
<h2 id="space">Space unticked a lap instead of playing</h2>
<p>The checkbox you just clicked still has focus, and a focused checkbox takes <code>Space</code>. Click an empty part of the 3D view, then press <code>Space</code>. Text boxes, number fields and dropdowns hold on to the keys the same way. See <a href="docs-article.html?page=ref.shortcuts">Keyboard and mouse</a>.</p>
<h2 id="ribbon">The track is a plain ribbon, not a 3D model</h2>
<p>There's no 3D model for that layout yet, so the 3D view builds a ribbon from the car's GPS trace instead. Layouts without a model show &#10007; in the Stint Folder's <strong>3D</strong> column. See <a href="docs-article.html?page=settings.tracks">Track library</a>.</p>
<h2 id="corners">Corner Analysis says "No track geometry yet"</h2>
<p>Corner Analysis finds corners from the track's 3D model, so it only works on layouts with a &#10003; in the <strong>3D</strong> column. The message can also show for a moment while the model is still loading. See <a href="docs-article.html?page=plugins.corners">Corner Analysis</a>.</p>
<h2 id="sectors">Timing says "No sector data"</h2>
<p>Sector boundaries come from the track's 3D model or, when the track has none, from the file itself. A run with neither can't show sector times. See <a href="docs-article.html?page=plugins.timing">Timing</a>.</p>
<h2 id="derived">A derived channel's line is empty</h2>
<p>One of its inputs isn't loaded. Open the <strong>Console</strong> tab, click <strong>Derived</strong>, check that channel's <strong>Inputs</strong>, and add the missing ones to the same plot with <strong>Add variables…</strong>. Some need GPS or the track's shape, such as X, Y and TrackLatPos, so they stay empty on runs without them. See <a href="docs-article.html?page=plots.derived">Derived channels</a>.</p>
<h2 id="tires">The tires are solid blue</h2>
<p>The tire temperature overlay reads three channels per tire (<code>LFtempL</code>, <code>LFtempM</code>, <code>LFtempR</code> and so on). A file without them leaves its tires blue, so solid blue can mean missing data rather than cold tires. If the channels are there, check <strong>Cold °C</strong> and <strong>Hot °C</strong> in the Vehicle panel. See <a href="docs-article.html?page=view3d.car">Car and overlays</a>.</p>
<h2 id="share">Share session says "Open a cloud run to share a session."</h2>
<p>Everyone in a room loads the same run from the cloud, so sharing only works when everything you've loaded is a cloud run. Untick your own files, then open <strong>Share session</strong> again. The <strong>or join a code</strong> box is hidden while this message shows, so to join a room, tick a cloud run first or open the invite link. See <a href="docs-article.html?page=share.sessions">Shared sessions</a>.</p>
<h2 id="slow">Slipstream feels slow</h2>
<p>Switch off the plugins you aren't using with the power button on their panel headers; collapsing a panel leaves the plugin running. Start with Corner Analysis, which does the most work. To watch the frame rate, tick <strong>Show FPS counter in 3D plots</strong> in <strong>Tools</strong> &gt; <strong>Preferences...</strong>, or open <strong>Console</strong> &gt; <strong>Performance</strong> for frame times and memory use. See <a href="docs-article.html?page=plugins.rail">The plugin rail</a>.</p>
<h2 id="points">My timeline points disappeared</h2>
<p>Timeline points aren't saved in your browser. Reloading the page loses them, and opening a different track layout clears them. Click <strong>Export…</strong> in the Timeline Points panel to keep a copy, and <strong>Import…</strong> to bring it back. See <a href="docs-article.html?page=timeline.points">Timeline points</a>.</p>
<h2 id="assistant">The Assistant shows an error</h2>
<p>Provider errors appear in the chat as the provider's name and an error code, such as <code>Gemini API 429</code>, followed by the provider's own explanation, which usually says whether the key, the model or a rate limit is to blame. Paste the key again under <strong>Settings</strong>, pick a listed <strong>Model</strong> instead of <strong>Custom…</strong>, or, for 429, wait a minute or try another model. If the message box says <strong>Connect a provider first</strong>, no key is saved yet. See <a href="docs-article.html?page=assistant.using">Using the Assistant</a>.</p>
<h2 id="help">Get help</h2>
<p>Still stuck? Ask on the <a href="https://discord.gg/GcSQDYM93m" target="_blank" rel="noopener">LapLabs Discord</a>. Say what you clicked, what you expected and what happened, and which browser you use. Reports of anything in these docs that doesn't match the app are welcome there too.</p>
`,
},

};
})();
