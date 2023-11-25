import DiiaNode from "../ast/DiiaNode.js";
import StructureNode from "../ast/StructureNode.js";
import { DiiaParserError } from "./errors.js";
import IdentifierNode from "../ast/IdentifierNode.js";
import BreakNode from "../ast/BreakNode.js";
import ContinueNode from "../ast/ContinueNode.js";

export function singleNode(node) {
    if (Array.isArray(node)) {
        node = node.flat(Infinity).filter((n) => !!n);

        if (node.length === 1) {
            return node[0];
        }
    }

    return node;
}

export function flatNodes(node) {
    if (Array.isArray(node)) {
        node = node.flat(Infinity).filter((n) => !!n);

        return node;
    }

    return [node];
}

export function mapBody(body) {
    return body.map((node) => {
        if (node instanceof IdentifierNode) {
            if (node.name === "зупинити") {
                return new BreakNode(node.context);
            }
            if (node.name === "пропустити") {
                return new ContinueNode(node.context);
            }
        }

        return node;
    });
}

export function filterBody(body) {
    const filteredBody = [];

    for (const element of body) {
        if (element instanceof DiiaNode) {
            if (element.structure) {
                const structureNode = body.find((node) => node instanceof StructureNode && node.name === element.structure.name);
                if (structureNode) {
                    structureNode.methods.push(element);
                    continue;
                } else {
                    throw new DiiaParserError(`Структура ${element.structure.name} не знайдена.`);
                }
            }
        }

        filteredBody.push(element);
    }

    return filteredBody;
}
