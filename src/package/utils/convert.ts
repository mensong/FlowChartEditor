import { mxGraph, mxCodec } from "../core/mxgraph";
import { stringToXml } from "./xml";

export const convertToSVG = (str: string): SVGElement | null => {
  const element = document.createElement("div");
  const doc = stringToXml(str);
  if (doc) {
    const graph = new mxGraph(element);
    graph.htmlLabels = true;
    graph.cellsEditable = false;
    graph.model.beginUpdate();
    const codec = new mxCodec(doc);
    codec.decode(doc.documentElement, graph.getModel());
    graph.model.endUpdate();
    const svg = element.firstChild ? element.firstChild.cloneNode(true) : null;
    return svg as SVGElement;
  }
  return null;
};