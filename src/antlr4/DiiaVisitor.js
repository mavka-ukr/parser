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
import StructureNode from "../ast/StructureNode.js";
import TakeNode from "../ast/TakeNode.js";
import GiveNode from "../ast/GiveNode.js";
import IdentifiersChainNode from "../ast/IdentifiersChainNode.js";
import ReturnNode from "../ast/ReturnNode.js";
import LambdaNode from "../ast/LambdaNode.js";

class DiiaVisitor extends DiiaParserVisitor {
    visitProgram(ctx) {
        return extractAsArray(super.visitProgram(ctx));
    }

    visitArithmetic(ctx) {
        if (ctx.a_nested) {
            return new NestedArithmeticNode(ctx, { arithmetic: this.visit(ctx.a_nested) });
        }

        if (ctx.a_left) {
            let left = extract(this.visit(ctx.a_left));
            let right = ctx.a_right && extract(this.visit(ctx.a_right));
            const operation = ctx.a_op && ctx.a_op.getText();

            return new ArithmeticNode(ctx, { left, right, operation });
        }

        if (ctx.a_literal) {
            return this.visit(ctx.a_literal);
        }

        if (ctx.a_chain) {
            return this.visit(ctx.a_chain);
        }

        throw new Error('Unsupported arithmetic node.');
    }

    visitAssign(ctx) {
        const identifier = this.visit(ctx.a_chain);
        const value = extract(this.visit(ctx.a_value));

        return new AssignNode(ctx, { identifier, value });
    }

    visitCall(ctx) {
        const name = ctx.c_name.text;

        let parameters = [];
        if (ctx.c_parameters) {
            parameters = extractAsArray(this.visit(ctx.c_parameters));
        } else if (ctx.c_named_parameters) {
            const parametersNamed = extractAsArray(this.visit(ctx.c_named_parameters));
            parameters = {};
            parametersNamed.forEach((p) => {
                parameters[p.name] = p.value;
            });
        }

        return new CallNode(ctx, { name, parameters });
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
        const async = !!ctx.async_v;

        return new DiiaNode(ctx, { name, parameters, body, structure, async });
    }

    visitLambda(ctx) {
        const parameters = ctx.parameters_v && extractAsArray(this.visit(ctx.parameters_v));
        const expression = extract(this.visit(ctx.atom()));

        return new LambdaNode(ctx, { parameters, expression });
    }

    visitReturn_body_line(ctx) {
        const value = extract(this.visit(ctx.line_v));

        return new ReturnNode(ctx, { value });
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

        return new ChainNode(ctx, { chain: [left, right] })
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

        let chain = extractAsArray(super.visitIdentifiers_chain(ctx));

        return new IdentifiersChainNode(ctx, { chain });
    }

    visitEach(ctx) {
        const name = ctx.name_v.text;
        const iterator = extract(this.visit(ctx.iterator_v));
        const body = extractAsArray(this.visit(ctx.body_v));

        return new EachNode(ctx, { name, iterator, body });
    }

    visitStructure(ctx) {
        const name = ctx.name_v.text;
        const parameters = ctx.parameters_v && extractAsArray(this.visit(ctx.parameters_v));

        return new StructureNode(ctx, { name, parameters });
    }

    visitStructure_parameter(ctx) {
        return ctx.name_v.text;
    }

    visitTake(ctx) {
        const name = ctx.paknme_v.getText();
        let chain = ctx.identifiers_chain_v && extract(this.visit(ctx.identifiers_chain_v));
        const as = ctx.as_name_v && ctx.as_name_v.text;
        const pak = !!ctx.pak_v;
        if (chain instanceof IdentifierNode) {
            chain = new IdentifiersChainNode(ctx, { chain: [chain] });
        }

        return new TakeNode(ctx, { name, chain, as, pak });
    }

    visitGive(ctx) {
        const name = ctx.name_v.text;
        const as = ctx.as_name_v && ctx.as_name_v.text;

        return new GiveNode(ctx, { name, as });
    }
}

export default DiiaVisitor;
