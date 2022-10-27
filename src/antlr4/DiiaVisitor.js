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
import ChainNode from "../ast/ChainNode.js";
import BooleanNode from "../ast/BooleanNode.js";
import TestNode from "../ast/TestNode.js";
import WaitChainNode from "../ast/WaitChainNode.js";
import EachNode from "../ast/EachNode.js";

class DiiaVisitor extends DiiaParserVisitor {
    visitProgram(ctx) {
        return extractAsArray(super.visitProgram(ctx));
    }

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

        if (ctx.chain_v) {
            return this.visit(ctx.chain_v);
        }

        throw new Error('Unsupported arithmetic node.');
    }

    visitAssign(ctx) {
        const identifier = this.visit(ctx.identifier_v);
        const value = extract(this.visit(ctx.value_v));

        return new AssignNode(ctx, { identifier, value });
    }

    visitCall(ctx) {
        const identifier = this.visit(ctx.identifier());
        let parameters = [];
        if (ctx.call_parameters_v) {
            parameters = extractAsArray(this.visit(ctx.call_parameters_v));
        } else {
            const parametersNamed = extractAsArray(this.visit(ctx.call_parameters_with_name_v));
            parameters = {};
            parametersNamed.forEach((p) => {
                parameters[p.name] = p.value;
            });
        }

        return new CallNode(ctx, { identifier, parameters });
    }

    visitCall_parameter_with_name(ctx) {
        const name = ctx.name_v.text;
        const value = extract(this.visit(ctx.value_v));

        return { name, value };
    }

    visitDiia(ctx) {
        const name = ctx.name_v.text;
        const parameters = ctx.parameters_v && extractAsArray(this.visit(ctx.parameters_v));
        const body = ctx.body_v && extractAsArray(this.visit(ctx.body_v));
        const diia_for_structure = ctx.diia_for_structure();
        const structure = diia_for_structure && diia_for_structure.structure_name_v.text;

        return new DiiaNode(ctx, { name, parameters, body, structure });
    }

    visitDiia_parameter(ctx) {
        return ctx.getText();
    }

    visitIf(ctx) {
        const expression = extract(this.visit(ctx.expression_v));
        const body = ctx.body_v && extractAsArray(this.visit(ctx.body_v));

        return new IfNode(ctx, { expression, body });
    }

    visitTest(ctx) {
        let left = extract(this.visit(ctx.left));
        let right = extract(this.visit(ctx.right));
        const operation = ctx.op.getText();

        return new TestNode(ctx, { left, right, operation });
    }

    visitChain(ctx) {
        if (ctx.identifier_v) {
            return this.visit(ctx.identifier_v);
        }

        if (ctx.call_v) {
            return this.visit(ctx.call_v);
        }

        if (ctx.wait_chain_v) {
            const chain = this.visit(ctx.wait_chain_v);

            return new WaitChainNode(ctx, { chain });
        }

        const left = this.visit(ctx.left);
        const right = this.visit(ctx.right);

        return new ChainNode(ctx, { parts: [left, right] })
    }

    visitIdentifier(ctx) {
        const value = ctx.getText();

        return new IdentifierNode(ctx, { value });
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

        if (ctx.yes) {
            return new BooleanNode(ctx, { value: true });
        }

        if (ctx.no) {
            return new BooleanNode(ctx, { value: false });
        }

        throw new Error('Unsupported literal: ' + ctx.getText());
    }

    visitIdentifiers_chain(ctx) {
        if (ctx.identifier_v) {
            return this.visit(ctx.identifier_v);
        }

        let left = extract(this.visit(ctx.left));
        let right = extract(this.visit(ctx.right));

        return new IdentifierNode(ctx, { value: [left, right] });
    }

    visitEach(ctx) {
        const name = ctx.name_v.text;
        const iterator = extract(this.visit(ctx.iterator_v));
        const body = extractAsArray(this.visit(ctx.body_v));

        return new EachNode(ctx, { name, iterator, body });
    }
}

export default DiiaVisitor;
