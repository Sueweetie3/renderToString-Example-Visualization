import G6 from "@antv/g6";
G6.registerEdge(
  "step-line",
  {
    getControlPoints: function getControlPoints(cfg) {
      const startPoint = cfg.startPoint;
      const endPoint = cfg.endPoint;
      return [
        {
          x: startPoint.x,
          y: endPoint.y
        }
      ];
    }
  },
  "polyline"
);
