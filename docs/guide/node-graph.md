# Node Graph

The node graph is the core of LapLabs Studio. It provides a visual, drag-and-drop interface for building telemetry analysis pipelines.

## Concepts

- **Nodes** — processing blocks that take inputs and produce outputs
- **Edges** — connections between node ports that pass data
- **Lanes** — vertical groupings of nodes that execute together
- **Workspaces** — saved graph configurations (tabs at the top)

## Adding Nodes

Click a node type in the **sidebar** to add it to the graph. Nodes are automatically placed in the appropriate lane position.

## Connecting Nodes

Nodes auto-connect when placed. You can also manually drag from an output port to an input port to create a connection.

## Node Types

| Category | Nodes | Purpose |
|----------|-------|---------|
| **I/O** | Load Data, View | Data loading and visualization output |
| **Math** | Aux Math, Filter | Custom expressions, signal filtering |
| **ML** | Model, Extract Set | ML training, feature engineering |
| **Live** | Live Model, Live Stream | Real-time iRacing connection |

## Execution

Click **Run** to execute the graph. Nodes process in topological order (left to right). The execution runs on a background thread so the UI stays responsive.

## Lane Muting

Each lane has a colored LED indicator. Click it to toggle:

- **Green** — lane is active and will execute
- **Red** — lane is muted and will be skipped (dependencies still run if needed by other lanes)