import DiiaParserVisitor from "./build/DiiaParserVisitor.js";
import ArithmeticNode from "../ast/ArithmeticNode.js";
import AssignNode from "../ast/AssignNode.js";
import CallNode from "../ast/CallNode.js";
import DiiaNode from "../ast/DiiaNode.js";
import IfNode from "../ast/IfNode.js";
import StringNode from "../ast/StringNode.js";
import NumberNode from "../ast/NumberNode.js";
import { flatNodes, singleNode } from "../utils/visit.js";
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
import NoneNode from "../ast/NoneNode.js";
import DiiaParameterNode from "../ast/DiiaParameterNode.js";
import TestExprNode from "../ast/TestExprNode.js";
import StructureParameterNode from "../ast/StructureParameterNode.js";
import TryCatchNode from "../ast/TryCatchNode.js";

class DiiaVisitor extends DiiaParserVisitor {
    visitProgram(ctx) {
        return flatNodes(super.visitProgram(ctx));
    }

    visitProgram_line(ctx) {
        return singleNode(super.visitProgram_line(ctx));
    }

    visitTake(ctx) {
        const pak = !!ctx.t_pak;
        const name = this.visitIdentifier(ctx.t_module);
        let chain = ctx.t_elements_chain && this.visitIdentifiers_chain(ctx.t_elements_chain);
        const as = ctx.t_as && this.visitIdentifier(ctx.t_as);

        return new TakeNode(ctx, { name, chain, as, pak });
    }

    visitGive(ctx) {
        const name = this.visitIdentifier(ctx.g_name);
        const as = ctx.g_as && this.visitIdentifier(ctx.g_as);

        return new GiveNode(ctx, { name, as });
    }

    visitIdentifier(ctx) {
        return ctx.getText();
    }

    visitIdentifiers_chain(ctx) {
        const identifiers = flatNodes(super.visitIdentifiers_chain(ctx));

        return new IdentifiersChainNode(ctx, { identifiers });
    }

    visitChain(ctx) {
        if (ctx.c_wait) {
            const chain = this.visit(ctx.c_wait);

            return new WaitChainNode(ctx, { chain });
        }

        const nodes = flatNodes(super.visitChain(ctx));

        return new ChainNode(ctx, { nodes })
    }

    visitChain_element(ctx) {
        return singleNode(super.visitChain_element(ctx));
    }

    visitLiteral(ctx) {
        let value = ctx.getText();

        if (ctx.l_number) {
            return new NumberNode(ctx, { value });
        }

        if (ctx.l_string) {
            value = value.substring(1, value.length - 1);
            return new StringNode(ctx, { value });
        }

        if (ctx.l_yes) {
            return new BooleanNode(ctx, { value: true });
        }

        if (ctx.l_no) {
            return new BooleanNode(ctx, { value: false });
        }

        if (ctx.l_none) {
            return new NoneNode(ctx);
        }

        throw new Error('Unsupported literal: ' + ctx.getText());
    }

    visitAtom(ctx) {
        return singleNode(super.visitAtom(ctx));
    }

    visitArithmetic(ctx) {
        if (ctx.a_nested) {
            return new NestedArithmeticNode(ctx, { arithmetic: this.visit(ctx.a_nested) });
        }

        if (ctx.a_left) {
            let left = singleNode(this.visit(ctx.a_left));
            let right = singleNode(this.visit(ctx.a_right));
            const operation = ctx.a_op_addsub ? ctx.a_op_addsub.text : ctx.a_op_muldiv.text;

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

    visitCall(ctx) {
        const name = this.visitIdentifier(ctx.c_name);

        let parameters = [];
        if (ctx.c_parameters) {
            parameters = this.visit(ctx.c_parameters);
        } else if (ctx.c_named_parameters) {
            parameters = {};
            const namedParameters = this.visit(ctx.c_named_parameters);
            namedParameters.forEach((p) => {
                parameters[p.name] = p.value;
            });
        }

        return new CallNode(ctx, { name, parameters });
    }

    visitCall_parameters(ctx) {
        return flatNodes(super.visitCall_parameters(ctx));
    }

    visitCall_parameter(ctx) {
        return this.visit(ctx.cp_value);
    }

    visitCall_named_parameters(ctx) {
        return flatNodes(super.visitCall_named_parameters(ctx));
    }

    visitCall_named_parameter(ctx) {
        const name = this.visitIdentifier(ctx.cnp_name);
        const value = this.visit(ctx.cnp_value);

        return { name, value };
    }

    visitAssign(ctx) {
        const id = this.visit(ctx.a_chain);
        const value = singleNode(this.visit(ctx.a_value));

        return new AssignNode(ctx, { id, value });
    }

    visitAssign_value(ctx) {
        return singleNode(super.visitAssign_value(ctx));
    }

    visitBody(ctx) {
        return flatNodes(super.visitBody(ctx));
    }

    visitBody_line(ctx) {
        return singleNode(super.visitBody_line(ctx));
    }

    visitReturn_body_line(ctx) {
        const value = singleNode(this.visit(ctx.rbl));

        return new ReturnNode(ctx, { value });
    }

    visitLambda(ctx) {
        const parameters = ctx.l_parameters ? this.visit(ctx.l_parameters) : [];
        const expression = this.visit(ctx.l_body);

        return new LambdaNode(ctx, { parameters, expression });
    }

    visitDiia(ctx) {
        const async = !!ctx.d_async;
        const structure = ctx.d_structure && this.visit(ctx.d_structure);
        const name = this.visit(ctx.d_name);
        const parameters = ctx.d_parameters && this.visit(ctx.d_parameters);
        const body = ctx.d_body && this.visit(ctx.d_body);

        return new DiiaNode(ctx, { name, parameters, body, structure, async });
    }

    visitDiia_parameters(ctx) {
        return flatNodes(super.visitDiia_parameters(ctx));
    }

    visitDiia_parameter(ctx) {
        const name = this.visitIdentifier(ctx.dp_name);
        const defaultValue = ctx.dp_value && this.visit(ctx.dp_value);

        return new DiiaParameterNode(ctx, { name, defaultValue });
    }

    visitDiia_structure(ctx) {
        return super.visit(ctx.ds_name);
    }

    visitTest(ctx) {
        let left = this.visit(ctx.t_left);
        let right = this.visit(ctx.t_right);
        const operation = this.visit(ctx.t_op);

        return new TestNode(ctx, { left, right, operation });
    }

    visitTest_part(ctx) {
        return singleNode(super.visitTest_part(ctx));
    }

    visitTest_op(ctx) {
        return ctx.getText();
    }

    visitTest_expr(ctx) {
        if (ctx.te_left) {
            const left = this.visit(ctx.te_left);
            const right = this.visit(ctx.te_right);
            const operation = this.visit(ctx.te_op);

            return new TestExprNode(ctx, { left, right, operation });
        }

        return super.visit(ctx.te_test);
    }

    visitTest_expr_op(ctx) {
        return ctx.getText();
    }

    visitIf(ctx) {
        const expression = this.visit(ctx.i_expr);
        const body = ctx.i_body && this.visit(ctx.i_body);
        const elseBody = ctx.ielse_body && this.visit(ctx.ielse_body);

        return new IfNode(ctx, { expression, body, elseBody });
    }

    visitEach(ctx) {
        const name = this.visitIdentifier(ctx.e_name);
        const iterator = this.visit(ctx.e_iterator);
        const body = this.visit(ctx.e_body);

        return new EachNode(ctx, { name, iterator, body });
    }

    visitStructure(ctx) {
        const name = this.visitIdentifier(ctx.s_name);
        const parameters = ctx.s_parameters && this.visit(ctx.s_parameters);

        return new StructureNode(ctx, { name, parameters });
    }

    visitStructure_parameters(ctx) {
        return flatNodes(super.visitStructure_parameters(ctx));
    }

    visitStructure_parameter(ctx) {
        const name = this.visitIdentifier(ctx.sp_name);
        const defaultValue = ctx.sp_value && this.visit(ctx.sp_value);

        return new StructureParameterNode(ctx, { name, defaultValue });
    }

    visitTrycat(ctx) {
        const tryBody = this.visit(ctx.t_body);
        const catchName = this.visit(ctx.tc_name);
        const catchBody = ctx.tc_body && this.visit(ctx.tc_body);

        return new TryCatchNode(ctx, { tryBody, catchBody, catchName });
    }
}

export default DiiaVisitor;
