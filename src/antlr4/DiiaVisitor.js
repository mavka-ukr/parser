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
import GiveNode from "../ast/GiveNode.js";
import WaitNode from "../ast/WaitNode.js";
import ProgramNode from "../ast/ProgramNode.js";
import IdentifierNode from "../ast/IdentifierNode.js";
import IdentifiersChainNode from "../ast/IdentifiersChainNode.js";
import DiiaParserVisitor from "./build/DiiaParserVisitor.js";
import TypeValueNode from "../ast/TypeValueNode.js";
import NegativeNode from "../ast/NegativeNode.js";
import PreDecrementNode from "../ast/PreDecrementNode.js";
import PreIncrementNode from "../ast/PreIncrementNode.js";
import PostDecrementNode from "../ast/PostDecrementNode.js";
import PostIncrementNode from "../ast/PostIncrementNode.js";
import GetElementNode from "../ast/GetElementNode.js";
import NotNode from "../ast/NotNode.js";
import PositiveNode from "../ast/PositiveNode.js";
import ArrayNode from "../ast/ArrayNode.js";
import ArrayDestructionNode from "../ast/ArrayDestructionNode.js";
import DictionaryNode from "../ast/DictionaryNode.js";
import ObjectDestructionNode from "../ast/ObjectDestructionNode.js";
import TakeModuleNode from "../ast/TakeModuleNode.js";
import TakeRemoteNode from "../ast/TakeRemoteNode.js";
import GiveElementNode from "../ast/GiveElementNode.js";
import { extractStringValue } from "../utils/text.js";
import EvalNode from "../ast/EvalNode.js";
import TakeFileNode from "../ast/TakeFileNode.js";
import BitwiseNode from "../ast/BitwiseNode.js";
import BitwiseNotNode from "../ast/BitwiseNotNode.js";
import ArgNode from "../ast/ArgNode.js";
import MethodDeclarationNode from "../ast/MethodDeclarationNode.js";
import FromtoNode from "../ast/FromtoNode.js";
import TypeValueSingleNode from "../ast/TypeValueSingleNode.js";
import StructureParamNode from "../ast/StructureParamNode.js";
import AssignSimpleNode from "../ast/AssignSimpleNode.js";
import AssignComplexNode from "../ast/AssignComplexNode.js";
import AssignComplexRightNode from "../ast/AssignComplexRightNode.js";
import MockupObjectNode from "../ast/MockupObjectNode.js";
import MockupStructureNode from "../ast/MockupStructureNode.js";
import MockupModuleNode from "../ast/MockupModuleNode.js";
import MockupDiiaNode from "../ast/MockupDiiaNode.js";
import AsNode from "../ast/AsNode.js";
import GodNode from "../ast/GodNode.js";

class DiiaVisitor extends DiiaParserVisitor {
    visitFile(ctx) {
        return this.visitProgram(ctx.f_program);
    }

    visitProgram(ctx) {
        return new ProgramNode(ctx, { body: flatNodes(super.visitProgram(ctx)) });
    }

    visitProgram_element(ctx) {
        return singleNode(super.visitProgram_element(ctx));
    }

    visitModule(ctx) {
        const name = ctx.m_name ? ctx.m_name.getText() : null;
        const body = ctx.m_body ? this.visitBody(ctx.m_body) : [];

        return new ModuleNode(ctx, { name, body });
    }

    visitModule_body(ctx) {
        return super.visitModule_body(ctx);
    }

    visitModule_body_element(ctx) {
        return super.visitModule_body_element(ctx);
    }

    visitMethod_declaration(ctx) {
        const name = ctx.md_name.getText();
        const params = ctx.md_params ? this.visitParams(ctx.md_params) : [];
        const type = ctx.md_type && this.visitType_value(ctx.md_type);

        return new MethodDeclarationNode(ctx, { name, params, type });
    }

    visitStructure(ctx) {
        const name = ctx.s_name.getText();
        const elements = ctx.s_elements ? this.visitStructure_elements(ctx.s_elements) : [];
        const params = [];
        for (const element of elements) {
            params.push(element);
        }
        const parent = ctx.s_parent ? this.visitIdentifiers_chain(ctx.s_parent) : null;

        return new StructureNode(ctx, { name, params, parent, methods: [] });
    }

    visitStructure_elements(ctx) {
        return flatNodes(super.visitStructure_elements(ctx));
    }

    visitStructure_element(ctx) {
        return singleNode(super.visitStructure_element(ctx));
    }

    visitStructure_param(ctx) {
        const name = ctx.sp_name.getText();
        const type = ctx.sp_type ? this.visitType_value(ctx.sp_type) : null;
        const defaultValue = ctx.sp_value ? this.visit(ctx.sp_value) : null;

        return new StructureParamNode(ctx, { name, type, defaultValue });
    }

    visitStructure_param_value(ctx) {
        return super.visitStructure_param_value(ctx);
    }

    visitMockup(ctx) {
        return super.visitMockup(ctx);
    }

    visitMockup_object(ctx) {
        const name = ctx.mo_name.getText();
        const elementsOrType = ctx.mo_elements
            ? this.visit(ctx.mo_elements)
            : this.visitType_value(ctx.mo_type);

        return new MockupObjectNode(ctx, { name, elementsOrType });
    }

    visitMockup_structure(ctx) {
        const name = ctx.ms_name.getText();
        const elements = ctx.ms_elements ? this.visit(ctx.ms_elements) : [];

        return new MockupStructureNode(ctx, { name, elements });
    }

    visitMockup_module(ctx) {
        const name = ctx.mm_name.getText();
        const elements = ctx.mm_elements ? this.visit(ctx.mm_elements) : [];

        return new MockupModuleNode(ctx, { name, elements });
    }

    visitMockup_diia(ctx) {
        const async = !!ctx.md_async;
        const name = ctx.md_name.getText();
        const params = ctx.md_params ? this.visitParams(ctx.md_params) : [];
        const type = ctx.md_type && this.visitType_value(ctx.md_type);

        return new MockupDiiaNode(ctx, { async, name, params, type });
    }

    visitMockup_body(ctx) {
        return flatNodes(super.visitMockup_body(ctx));
    }

    visitMockup_body_element(ctx) {
        return super.visitMockup_body_element(ctx);
    }

    visitDiia(ctx) {
        const async = !!ctx.d_async;
        const structure = ctx.d_structure ? ctx.d_structure.getText() : null;
        const name = ctx.d_name.getText();
        const params = ctx.d_params ? this.visitParams(ctx.d_params) : [];
        const type = ctx.d_type && this.visitType_value(ctx.d_type);
        const body = ctx.d_body ? this.visitBody(ctx.d_body) : [];

        return new DiiaNode(ctx, { async, name, params, structure, type, body });
    }

    visitIf(ctx) {
        const value = this.visit(ctx.i_value);
        const body = ctx.i_body ? this.visit(ctx.i_body) : [];
        const elseBody = ctx.i_else_body ? this.visit(ctx.i_else_body) : ctx.i_else_if ? this.visit(ctx.i_else_if) : null;

        return new IfNode(ctx, { value, body, elseBody });
    }

    visitEach(ctx) {
        const iterator = this.visit(ctx.e_iterator || ctx.e_fromto);
        const keyName = ctx.e_key_name ? ctx.e_key_name.getText() : null;
        const name = ctx.e_name ? ctx.e_name.getText() : null;
        const body = ctx.e_body ? this.visitBody(ctx.e_body) : [];

        return new EachNode(ctx, { keyName, name, iterator, body });
    }

    visitFromto(ctx) {
        const from = this.visit(ctx.f_from);
        const middle = ctx.f_middle ? this.visit(ctx.f_middle) : null;
        const to = this.visit(ctx.f_to);
        const symbol = ctx.f_symbol ? ctx.f_symbol.getText() : null;

        return new FromtoNode(ctx, { from, to, middle, symbol });
    }

    visitFromto_number(ctx) {
        return this.visitNumber(ctx);
    }

    visitFromto_string(ctx) {
        return this.visitString(ctx);
    }

    visitFromto_id(ctx) {
        return this.visitIdentifier(ctx);
    }

    visitFromto_nested(ctx) {
        return this.visit(ctx.fn_value);
    }

    visitFromto_symbol(ctx) {
        return ctx.getText()
    }

    visitFromto_middle(ctx) {
        return this.visit(ctx.fi_value);
    }

    visitWhile(ctx) {
        const value = this.visit(ctx.w_value);
        const body = this.visitBody(ctx.w_body);

        return new WhileNode(ctx, { value, body });
    }

    visitEval(ctx) {
        const value = this.visit(ctx.e_value);

        return new EvalNode(ctx, { value });
    }

    visitTry(ctx) {
        const tryBody = this.visitBody(ctx.t_body);
        const catchName = ctx.tc_name ? ctx.tc_name.getText() : null;
        const catchBody = ctx.tc_body ? this.visitBody(ctx.tc_body) : [];

        return new TryNode(ctx, { tryBody, catchBody, catchName });
    }

    visitTake_module(ctx) {
        let id = ctx.tm_elements_chain && singleNode(this.visit(ctx.tm_elements_chain));
        const as = ctx.tm_as ? ctx.tm_as.getText() : null;
        const relative = !!ctx.tm_relative;
        const star = !!ctx.tm_star;

        return new TakeModuleNode(ctx, { id, as, relative, star });
    }

    visitTake_file(ctx) {
        const name = extractStringValue(ctx.tf_name.text);
        const as = ctx.tf_as.getText();

        return new TakeFileNode(ctx, { name, as });
    }

    visitTake_remote(ctx) {
        const url = extractStringValue(ctx.tr_url.text);
        const as = ctx.tr_as ? ctx.tr_as.getText() : null;

        return new TakeRemoteNode(ctx, { url, as });
    }

    visitGive(ctx) {
        const elements = flatNodes(super.visitGive(ctx));

        return new GiveNode(ctx, { elements });
    }

    visitGive_element(ctx) {
        const id = singleNode(this.visit(ctx.ge_name));
        const as = ctx.ge_as ? ctx.ge_as.getText() : null;

        return new GiveElementNode(ctx, { id, as });
    }

    visitString(ctx) {
        let value = extractStringValue(ctx.getText());

        // todo: parse interpolation

        return new StringNode(ctx, { value: value });
    }

    visitNumber(ctx) {
        let text = ctx.getText();

        if (text.includes('ш')) {
            const right = text.substring(2)
                .replaceAll('А', 'A')
                .replaceAll('а', 'a')
                .replaceAll('Б', 'B')
                .replaceAll('б', 'b')
                .replaceAll('В', 'C')
                .replaceAll('в', 'c')
                .replaceAll('Г', 'D')
                .replaceAll('г', 'd')
                .replaceAll('Ґ', 'E')
                .replaceAll('ґ', 'e')
                .replaceAll('Д', 'F')
                .replaceAll('д', 'f');

            text = `0x${right}`;
        } else if (text.includes('д')) {
            const right = text.substring(2);

            text = `0b${right}`;
        }

        const value = Number(text);

        return new NumberNode(ctx, { value });
    }

    visitString_value(ctx) {
        return super.visitString_value(ctx);
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

    visitPositive(ctx) {
        const value = this.visit(ctx.p_value);

        return new PositiveNode(ctx, { value });
    }

    visitNegative(ctx) {
        const value = this.visit(ctx.n_value);

        return new NegativeNode(ctx, { value });
    }

    visitPre_decrement(ctx) {
        const value = this.visit(ctx.pd_value);

        return new PreDecrementNode(ctx, { value });
    }

    visitPre_increment(ctx) {
        const value = this.visit(ctx.pi_value);

        return new PreIncrementNode(ctx, { value });
    }

    visitPost_decrement(ctx) {
        const value = this.visit(ctx.pd_value);

        return new PostDecrementNode(ctx, { value });
    }

    visitPost_increment(ctx) {
        const value = this.visit(ctx.pi_value);

        return new PostIncrementNode(ctx, { value });
    }

    visitNot(ctx) {
        const value = this.visit(ctx.n_value);

        return new NotNode(ctx, { value });
    }

    visitBitwise_not(ctx) {
        const value = this.visit(ctx.bn_value);

        return new BitwiseNotNode(ctx, { value });
    }

    visitGet_element(ctx) {
        const left = this.visit(ctx.a_left);
        const element = this.visit(ctx.a_element);

        return new GetElementNode(ctx, { left, element });
    }

    visitNested(ctx) {
        return this.visit(ctx.n_value);
    }

    visitCall_expr(ctx) {
        const value = singleNode(this.visit(ctx.c_value));
        const args = ctx.c_args ? this.visit(ctx.c_args) : ctx.c_named_args ? this.visit(ctx.c_named_args) : [];

        return new CallNode(ctx, { value, args });
    }

    visitGod(ctx) {
        const elements = flatNodes(super.visitGod(ctx)).flatMap((v) => {
            if (v instanceof GodNode) {
                return v.elements;
            }
            return v;
        });

        return new GodNode(ctx, { elements });
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

    visitBitwise(ctx) {
        const left = this.visit(ctx.b_left);
        const right = this.visit(ctx.b_right);
        const operation = this.visit(ctx.b_operation);

        return new BitwiseNode(ctx, { left, right, operation });
    }

    visitComparison(ctx) {
        const left = this.visit(ctx.c_left);
        const right = this.visit(ctx.c_right);
        const operation = this.visit(ctx.c_operation);

        return new ComparisonNode(ctx, { left, right, operation });
    }

    visitTest(ctx) {
        const left = this.visit(ctx.t_left);
        const right = this.visit(ctx.t_right);
        const operation = this.visit(ctx.t_operation);

        return new TestNode(ctx, { left, right, operation });
    }

    visitTernary(ctx) {
        const value = this.visit(ctx.t_value);
        const positiveValue = this.visit(ctx.t_positive);
        const negativeValue = this.visit(ctx.t_negative);

        return new TernaryNode(ctx, { value, positiveValue, negativeValue });
    }

    visitArray(ctx) {
        const elements = ctx.a_elements ? this.visit(ctx.a_elements) : [];

        return new ArrayNode(ctx, { elements });
    }

    visitDictionary(ctx) {
        const args = ctx.d_args ? this.visit(ctx.d_args) : {};

        return new DictionaryNode(ctx, { args });
    }

    visitAs(ctx) {
        const left = singleNode(this.visit(ctx.a_left));
        const right = singleNode(this.visit(ctx.a_right));

        return new AsNode(ctx, { left, right });
    }

    visitArray_elements(ctx) {
        return flatNodes(super.visitArray_elements(ctx));
    }

    visitArray_element(ctx) {
        return this.visit(ctx.ae_value);
    }

    visitDictionary_args(ctx) {
        let args = flatNodes(super.visitDictionary_arg(ctx));

        const argsObject = {};

        args.forEach((arg) => {
            argsObject[arg.name] = arg.value;
        });

        return argsObject;
    }

    visitDictionary_arg(ctx) {
        let name;

        if (ctx.da_name_id) {
            name = this.visitIdentifier(ctx.da_name_id).name;
        } else if (ctx.da_name_string) {
            name = extractStringValue(ctx.da_name_string.text);
        }

        const value = this.visit(ctx.da_value);

        return { name, value };
    }

    visitSimple(ctx) {
        return singleNode(super.visitSimple(ctx));
    }

    visitWait(ctx) {
        const value = this.visit(ctx.w_value);

        return new WaitNode(ctx, { value });
    }

    visitFunction(ctx) {
        const async = !!ctx.f_async;
        const params = ctx.f_params ? this.visitParams(ctx.f_params) : [];
        const type = ctx.f_type && singleNode(this.visit(ctx.f_type));
        const body = ctx.f_body ? flatNodes(this.visit(ctx.f_body)) : [];

        return new FunctionNode(ctx, { async, params, type, body });
    }

    visitAnonymous_diia(ctx) {
        const async = !!ctx.d_async;
        const params = ctx.d_params ? this.visitParams(ctx.d_params) : [];
        const type = ctx.d_type && singleNode(this.visit(ctx.d_type));
        const body = ctx.d_body ? this.visitBody(ctx.d_body) : [];

        return new AnonymousDiiaNode(ctx, { async, params, type, body });
    }

    visitThrow(ctx) {
        const value = ctx.t_value && this.visit(ctx.t_value);

        return new ThrowNode(ctx, { value });
    }

    visitArray_destruction(ctx) {
        const elements = flatNodes(super.visitArray_destruction(ctx));

        return new ArrayDestructionNode(ctx, { elements });
    }

    visitArray_destruction_el(ctx) {
        return this.visitIdentifier(ctx.ade_id);
    }

    visitObject_destruction(ctx) {
        const elements = flatNodes(super.visitObject_destruction(ctx));

        return new ObjectDestructionNode(ctx, { elements });
    }

    visitObject_destruction_el(ctx) {
        return this.visitIdentifier(ctx.ode_id);
    }

    visitAssign(ctx) {
        return super.visitAssign(ctx);
    }

    visitAssign_simple(ctx) {
        const subject = !!ctx.as_subject;
        const name = ctx.as_identifier.getText();
        const type = ctx.as_type ? this.visitType_value(ctx.as_type) : null;
        const symbol = ctx.as_symbol.getText();
        const value = this.visit(ctx.as_value);

        return new AssignSimpleNode(ctx, { subject, name, type, symbol, value });
    }

    visitAssign_define(ctx) {
        const name = ctx.as_identifier.getText();
        const type = ctx.as_type ? this.visitType_value(ctx.as_type) : null;
        const value = new IdentifierNode(ctx, { name: 'пусто' })

        return new AssignSimpleNode(ctx, { subject: true, name, type, symbol: '=', value });
    }

    visitAssign_complex(ctx) {
        const left = this.visit(ctx.ac_left);
        const right = this.visit(ctx.ac_right);
        const symbol = ctx.ac_symbol.getText();
        const value = this.visit(ctx.ac_value);

        return new AssignComplexNode(ctx, { left, right, symbol, value });
    }

    visitAssign_complex_left(ctx) {
        if (ctx.acl_chain) {
            return this.visitIdentifiers_chain(ctx.acl_chain);
        }
        if (ctx.acl_left) {
            const left = this.visit(ctx.acl_left);
            const element = this.visit(ctx.acl_element);

            return new GetElementNode(ctx, { left, element });
        }
        throw new Error("BUG: Unknown assign complex left");
    }

    visitAssign_complex_right(ctx) {
        const name = ctx.acr_identifier ? ctx.acr_identifier.getText() : null;
        const element = ctx.acr_element ? this.visit(ctx.acr_element) : null;

        return new AssignComplexRightNode(ctx, { name, element });
    }

    visitAssign_array_destruction(ctx) {
        throw new Error("BUG: Assign array destruction is not implemented");
    }

    visitAssign_object_destruction(ctx) {
        throw new Error("BUG: Assign object destruction is not implemented");
    }

    visitAssign_symbol(ctx) {
        return ctx.getText();
    }

    visitWait_assign(ctx) {
        const assign = this.visitAssign(ctx.wa_assign);
        assign.value = new WaitNode(ctx, { value: assign.value });
        return assign;
    }

    visitIdentifier(ctx) {
        const name = ctx.getText();

        return new IdentifierNode(ctx, { name });
    }

    visitExtended_identifier(ctx) {
        return this.visitIdentifier(ctx);
    }

    visitIdentifiers_chain(ctx) {
        if (ctx.ic_identifier) {
            return this.visitIdentifier(ctx.ic_identifier);
        }

        const left = this.visitIdentifiers_chain(ctx.ic_left);
        const right = this.visitIdentifiers_chain(ctx.ic_right);

        return new IdentifiersChainNode(ctx, { left, right });
    }

    visitType_value(ctx) {
        if (ctx.tv_single) {
            const value = this.visit(ctx.tv_single);
            const array = !!ctx.tv_array;

            return new TypeValueSingleNode(ctx, { value, array });
        }

        const left = this.visit(ctx.tv_left);
        const right = this.visit(ctx.tv_right);
        const operation = this.visit(ctx.tv_operation);

        return new TypeValueNode(ctx, { left, right, operation });
    }

    visitType_value_array(ctx) {
        return super.visitType_value_array(ctx);
    }

    visitArgs(ctx) {
        return flatNodes(super.visitArgs(ctx));
    }

    visitArg(ctx) {
        const value = this.visit(ctx.a_value);
        const spread = !!ctx.a_spread;

        return new ArgNode(ctx, { value, spread });
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

    visitParam_value(ctx) {
        return super.visitParam_value(ctx);
    }

    visitParam(ctx) {
        let name;
        if (ctx.p_name) {
            name = ctx.p_name.getText();
        } else if (ctx.p_array_destruction) {
            name = this.visitArray_destruction(ctx.p_array_destruction);
        } else if (ctx.p_object_destruction) {
            name = this.visitObject_destruction(ctx.p_object_destruction);
        }
        const type = ctx.p_type && singleNode(this.visit(ctx.p_type));
        const defaultValue = ctx.p_value && singleNode(this.visit(ctx.p_value));
        const spread = !!ctx.p_spread;

        return new ParamNode(ctx, { name, type, defaultValue, spread });
    }

    visitBody(ctx) {
        return flatNodes(super.visitBody(ctx));
    }

    visitBody_element_or_return(ctx) {
        return super.visitBody_element_or_return(ctx);
    }

    visitBody_element(ctx) {
        return singleNode(super.visitBody_element(ctx));
    }

    visitReturn_body_line(ctx) {
        const value = singleNode(this.visit(ctx.rbl));

        return new ReturnNode(ctx, { value });
    }

    visitArithmetic_op_mul(ctx) {
        return ctx.getText();
    }

    visitArithmetic_op_add(ctx) {
        return ctx.getText();
    }

    visitBitwise_op(ctx) {
        return ctx.getText();
    }

    visitTest_op(ctx) {
        return ctx.getText();
    }

    visitComparison_op(ctx) {
        return ctx.getText();
    }

    visitNl(ctx) {
        return null;
    }

    visitNls(ctx) {
        return null;
    }
}

export default DiiaVisitor;
