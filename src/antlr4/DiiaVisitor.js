import NumberNode from "../ast/NumberNode.js";
import StringNode from "../ast/StringNode.js";
import ArithmeticNode from "../ast/ArithmeticNode.js";
import ComparisonNode from "../ast/ComparisonNode.js";
import TestNode from "../ast/TestNode.js";
import ChainNode from "../ast/ChainNode.js";
import CallNode from "../ast/CallNode.js";
import { flatNodes, singleNode } from "../utils/visit.js";
import IfNode from "../ast/IfNode.js";
import DiiaNode from "../ast/DiiaNode.js";
import AssignNode from "../ast/AssignNode.js";
import AnonymousDiiaNode from "../ast/AnonymousDiiaNode.js";
import TernaryNode from "../ast/TernaryNode.js";
import FunctionNode from "../ast/FunctionNode.js";
import StructureNode from "../ast/StructureNode.js";
import ParamNode from "../ast/ParamNode.js";
import EachNode from "../ast/EachNode.js";
import WhileNode from "../ast/WhileNode.js";
import TryNode from "../ast/TryNode.js";
import ThrowNode from "../ast/ThrowNode.js";
import ReturnNode from "../ast/ReturnNode.js";
import ModuleNode from "../ast/ModuleNode.js";
import TakeNode from "../ast/TakeNode.js";
import GiveNode from "../ast/GiveNode.js";
import WaitNode from "../ast/WaitNode.js";
import ProgramNode from "../ast/ProgramNode.js";
import IdentifierNode from "../ast/IdentifierNode.js";
import IdentifiersChainNode from "../ast/IdentifiersChainNode.js";
import DiiaParserVisitor from "./build/DiiaParserVisitor.js";
import { processStructures } from "../utils/structures.js";
import BooleanNode from "../ast/BooleanNode.js";
import TypeValueNode from "../ast/TypeValueNode.js";

class DiiaVisitor extends DiiaParserVisitor {
    visitFile(ctx) {
        return this.visitProgram(ctx.f_program);
    }

    visitProgram(ctx) {
        return new ProgramNode(ctx, { body: processStructures(flatNodes(super.visitProgram(ctx))) });
    }

    visitProgram_element(ctx) {
        return singleNode(super.visitProgram_element(ctx));
    }

    visitModule(ctx) {
        const name = this.visitIdentifier(ctx.m_name);
        const program = ctx.m_program && this.visit(ctx.m_program);

        return new ModuleNode(ctx, { name, program });
    }

    visitStructure(ctx) {
        const name = this.visitIdentifier(ctx.s_name);
        const params = ctx.s_params && this.visit(ctx.s_params);
        const parent = ctx.s_parent && singleNode(this.visit(ctx.s_parent));

        return new StructureNode(ctx, { name, params, parent });
    }

    visitStructure_params(ctx) {
        return flatNodes(super.visitStructure_params(ctx));
    }

    visitDiia(ctx) {
        const async = !!ctx.d_async;
        const structure = ctx.d_structure && this.visitIdentifier(ctx.d_structure);
        const name = this.visitIdentifier(ctx.d_name);
        const params = ctx.d_params ? this.visitParams(ctx.d_params) : [];
        const type = ctx.d_type && singleNode(this.visit(ctx.d_type));
        const body = ctx.d_body ? this.visitBody(ctx.d_body) : [];

        return new DiiaNode(ctx, { async, name, params, structure, type, body });
    }

    visitIf(ctx) {
        const value = this.visit(ctx.i_value);
        const body = ctx.i_body && this.visit(ctx.i_body);
        const elseBody = ctx.i_else_body && this.visit(ctx.i_else_body);

        return new IfNode(ctx, { value, body, elseBody });
    }

    visitEach(ctx) {
        const name = this.visitIdentifier(ctx.e_name);
        const iterator = this.visit(ctx.e_iterator);
        const body = this.visit(ctx.e_body);

        return new EachNode(ctx, { name, iterator, body });
    }

    visitWhile(ctx) {
        const value = this.visit(ctx.w_value);
        const body = this.visit(ctx.w_body);

        return new WhileNode(ctx, { value, body });
    }

    visitTry(ctx) {
        const tryBody = this.visit(ctx.t_body);
        const catchName = ctx.tc_name && this.visitIdentifier(ctx.tc_name);
        const catchBody = ctx.tc_body && this.visit(ctx.tc_body);

        return new TryNode(ctx, { tryBody, catchBody, catchName });
    }

    visitTake(ctx) {
        let id = singleNode(this.visit(ctx.t_elements_chain));
        const as = ctx.t_as && this.visitIdentifier(ctx.t_as);
        const pak = !!ctx.t_pak;
        const relative = !!ctx.t_relative;
        const star = !!ctx.t_star;

        return new TakeNode(ctx, { id, as, pak, relative, star });
    }

    visitGive(ctx) {
        const id = singleNode(this.visit(ctx.g_name));
        const as = ctx.g_as && this.visitIdentifier(ctx.g_as);

        return new GiveNode(ctx, { id, as });
    }

    visitNumber(ctx) {
        let value = Number(ctx.getText());

        return new NumberNode(ctx, { value });
    }

    visitString(ctx) {
        let value = ctx.getText();

        return new StringNode(ctx, { value: value.substring(1, value.length - 1) });
    }

    visitId(ctx) {
        return this.visitIdentifier(ctx);
    }

    visitChain(ctx) {
        const left = singleNode(this.visit(ctx.c_left));
        const right = singleNode(this.visit(ctx.c_right));

        return new ChainNode(ctx, { left, right });
    }

    visitCall(ctx) {
        const value = singleNode(this.visit(ctx.c_value));
        const args = ctx.c_args ? this.visit(ctx.c_args) : ctx.c_named_args ? this.visit(ctx.c_named_args) : [];

        return new CallNode(ctx, { value, args });
    }

    visitSimple(ctx) {
        return singleNode(super.visitSimple(ctx));
    }

    visitFunction(ctx) {
        const params = ctx.f_params ? this.visitParams(ctx.f_params) : [];
        const type = ctx.f_type && singleNode(this.visit(ctx.f_type));
        const body = ctx.f_body ? this.visitBody(ctx.f_body) : [];

        return new FunctionNode(ctx, { params, type, body });
    }

    visitArithmetic_mul(ctx) {
        const left = this.visit(ctx.a_left);
        const right = this.visit(ctx.a_right);
        const operation = this.visit(ctx.a_operation);

        return new ArithmeticNode(ctx, { left, right, operation });
    }

    visitArithmetic_add(ctx) {
        const left = this.visit(ctx.a_left);
        const right = this.visit(ctx.a_right);
        const operation = this.visit(ctx.a_operation);

        return new ArithmeticNode(ctx, { left, right, operation });
    }

    visitArithmetic_op_mul(ctx) {
        return ctx.getText();
    }

    visitArithmetic_op_add(ctx) {
        return ctx.getText();
    }

    visitTernary(ctx) {
        const value = this.visit(ctx.t_value);
        const positiveValue = this.visit(ctx.t_positive);
        const negativeValue = this.visit(ctx.t_negative);

        return new TernaryNode(ctx, { value, positiveValue, negativeValue });
    }

    visitTest(ctx) {
        const left = this.visit(ctx.t_left);
        const right = this.visit(ctx.t_right);
        const operation = this.visit(ctx.t_operation);

        return new TestNode(ctx, { left, right, operation });
    }

    visitTest_op(ctx) {
        return ctx.getText();
    }

    visitComparison(ctx) {
        const left = this.visit(ctx.c_left);
        const right = this.visit(ctx.c_right);
        const operation = this.visit(ctx.c_operation);

        return new ComparisonNode(ctx, { left, right, operation });
    }

    visitComparison_op(ctx) {
        return ctx.getText();
    }

    visitAnonymous_diia(ctx) {
        const async = !!ctx.d_async;
        const params = ctx.d_params ? this.visitParams(ctx.d_params) : [];
        const type = ctx.d_type && singleNode(this.visit(ctx.d_type));
        const body = ctx.d_body ? this.visitBody(ctx.d_body) : [];

        return new AnonymousDiiaNode(ctx, { async, params, type, body });
    }

    visitNested(ctx) {
        return this.visit(ctx.n_value);
    }

    visitThrow(ctx) {
        const value = ctx.t_value && this.visit(ctx.t_value);

        return new ThrowNode(ctx, { value });
    }

    visitCall_expr(ctx) {
        const value = singleNode(this.visit(ctx.c_value));
        const args = ctx.c_args ? this.visit(ctx.c_args) : ctx.c_named_args ? this.visit(ctx.c_named_args) : [];

        return new CallNode(ctx, { value, args });
    }

    visitWait(ctx) {
        const value = this.visit(ctx.w_value);

        return new WaitNode(ctx, { value });
    }

    visitAssign(ctx) {
        const wait = false;
        const id = singleNode(ctx.a_identifiers_chain ? this.visit(ctx.a_identifiers_chain) : this.visit(ctx.a_identifier));
        const type = ctx.a_type && singleNode(this.visit(ctx.a_type));
        const value = ctx.a_value && this.visit(ctx.a_value);

        return new AssignNode(ctx, { id, value, wait, type });
    }

    visitAssign_value(ctx) {
        return singleNode(super.visitAssign_value(ctx));
    }

    visitWait_assign(ctx) {
        const assign = this.visitAssign(ctx.wa_assign);
        assign.wait = true;
        return assign;
    }

    visitIdentifier(ctx) {
        const name = ctx.getText();

        if (name === 'так') {
            return new BooleanNode(ctx, { value: true });
        }

        if (name === 'ні') {
            return new BooleanNode(ctx, { value: false });
        }

        return new IdentifierNode(ctx, { name });
    }

    visitIdentifiers_chain(ctx) {
        if (ctx.ic_identifier) {
            return this.visitIdentifier(ctx.ic_identifier);
        }

        const left = singleNode(this.visit(ctx.ic_left));
        const right = singleNode(this.visit(ctx.ic_right));

        return new IdentifiersChainNode(ctx, { left, right });
    }

    visitType_value(ctx) {
        if (ctx.tv_single) {
            return this.visit(ctx.tv_single);
        }

        const left = this.visit(ctx.tv_left);
        const right = this.visit(ctx.tv_right);
        const operation = this.visit(ctx.tv_operation);

        return new TypeValueNode(ctx, { left, right, operation });
    }

    visitArgs(ctx) {
        return flatNodes(super.visitArgs(ctx));
    }

    visitArg(ctx) {
        return this.visit(ctx.a_value);
    }

    visitNamed_args(ctx) {
        let args = flatNodes(super.visitNamed_args(ctx));

        const argsObject = {};

        args.forEach((arg) => {
            argsObject[arg.name.name] = arg.value;
        });

        return argsObject;
    }

    visitNamed_arg(ctx) {
        const name = this.visit(ctx.na_name);
        const value = this.visit(ctx.na_value);

        return { name, value };
    }

    visitParams(ctx) {
        return flatNodes(super.visitParams(ctx));
    }

    visitParam(ctx) {
        const name = this.visitIdentifier(ctx.p_name);
        const type = ctx.p_type && singleNode(this.visit(ctx.p_type));
        const defaultValue = ctx.p_value && singleNode(this.visit(ctx.p_value));

        return new ParamNode(ctx, { name, type, defaultValue });
    }

    visitParam_value_number(ctx) {
        return this.visitNumber(ctx);
    }

    visitParam_value_string(ctx) {
        return this.visitString(ctx);
    }

    visitParam_value_identifier(ctx) {
        return this.visitIdentifier(ctx);
    }

    visitBody(ctx) {
        return flatNodes(this.visitChildren(ctx));
    }

    visitBody_element(ctx) {
        return singleNode(this.visitChildren(ctx));
    }

    visitReturn_body_line(ctx) {
        const value = singleNode(this.visit(ctx.rbl));

        return new ReturnNode(ctx, { value });
    }

    visitNl(ctx) {
        return null;
    }

    visitNls(ctx) {
        return null;
    }
}

export default DiiaVisitor;
