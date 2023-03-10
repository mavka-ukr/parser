import StructureNode from "../ast/StructureNode.js";
import DiiaNode from "../ast/DiiaNode.js";
import { DiiaParserError } from "./errors.js";

// @deprecated
export function processStructures(ast) {
    const structures = {};

    ast.forEach((node) => {
        if (node instanceof StructureNode) {
            structures[node.name.name] = node;
        }
    });

    ast.forEach((node) => {
        if (node instanceof DiiaNode) {
            if (node.structure) {
                if (node.structure.name in structures) {
                    structures[node.structure.name].methods.push(node);
                } else {
                    throw new DiiaParserError(`"${node.structure}" не знайдено в контексті`);
                }
            }
        }
    });

    return ast.filter((node) => {
        if (node instanceof DiiaNode) {
            if (node.structure) {
                return false;
            }
        }

        return true;
    });
}
