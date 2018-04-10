function cloneGraph (gNode, map = new Map()) {
  // Edge Case
  if (!gNode) return gNode;

  const cNode = new UndirectedGraphNode(gNode.label);
  map.set(gNode, cNode);

  for (let adjNode of gNode.neighbors) {
    if (!map.has(adjNode)) {
      cloneGraph(adjNode, map);
    }
  }

  for (let adjNode of gNode.neighbors) {
    cNode.neighbors.push(map.get(adjNode));
  }
  return cNode;
}
