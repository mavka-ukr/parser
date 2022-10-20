import DiiaParserVisitor from "./build/DiiaParserVisitor.js";
import ArithmeticNode from "../ast/ArithmeticNode.js";
import AssignNode from "../ast/AssignNode.js";
import CallNode from "../ast/CallNode.js";

class DiiaVisitor extends DiiaParserVisitor {
    visitArithmetic(ctx) {
        return new ArithmeticNode(ctx, {});
    }

    visitAssign(ctx) {
        return new AssignNode(ctx, {});
    }

    visitCall(ctx) {
        return new CallNode(ctx, {});
    }
}

export default DiiaVisitor;
