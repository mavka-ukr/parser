import DiiaParserVisitor from "./build/DiiaParserVisitor.js";
import ArithmeticNode from "../ast/ArithmeticNode.js";
import AssignNode from "../ast/AssignNode.js";
import CallNode from "../ast/CallNode.js";
import DiiaNode from "../ast/DiiaNode.js";
import IfNode from "../ast/IfNode.js";
import IdentifierNode from "../ast/IdentifierNode.js";
import StringNode from "../ast/StringNode.js";
import NumberNode from "../ast/NumberNode.js";
import { extract, extractAsArray } from "../utils/visit.js";
import NestedArithmeticNode from "../ast/NestedArithmeticNode.js";

class DiiaVisitor extends DiiaParserVisitor {
    visitArithmetic(ctx) {
        if (ctx.nested) {
            return new NestedArithmeticNode(ctx, { arithmetic: this.visit(ctx.nested) });
        }

        if (ctx.left) {
            let left = extract(this.visit(ctx.left));
            let right = ctx.right && extract(this.visit(ctx.right));
            const operation = ctx.op && ctx.op.getText();

            return new ArithmeticNode(ctx, { left, right, operation });
        }

        if (ctx.literal_v) {
            return this.visit(ctx.literal_v);
        }

        if (ctx.identifier_v) {
            return this.visit(ctx.identifier_v);
        }

        if (ctx.call_v) {
            return this.visit(ctx.call_v);
        }

        throw new Error('Unsupported arithmetic node.');
    }

    visitAssign(ctx) {
        return new AssignNode(ctx, {});
    }

    visitCall(ctx) {
        const identifier = this.visit(ctx.identifier());
        const call_parameters = ctx.call_parameters();
        const parameters = call_parameters && extractAsArray(this.visit(call_parameters));

        return new CallNode(ctx, { identifier, parameters });
    }

    visitDiia(ctx) {
        return new DiiaNode(ctx, {});
    }

    visitIf(ctx) {
        return new IfNode(ctx, {});
    }

    visitIdentifier(ctx) {
        const parts = ctx.getText().split('.');

        return new IdentifierNode(ctx, { parts });
    }

    visitLiteral(ctx) {
        let value = ctx.getText();

        if (ctx.number) {
            return new NumberNode(ctx, { value });
        }

        if (ctx.string) {
            value = value.substring(1, value.length - 1);
            return new StringNode(ctx, { value });
        }

        throw new Error('Unsupported literal.');
    }
}

export default DiiaVisitor;
