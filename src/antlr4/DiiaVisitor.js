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
import GiveNode from "../ast/GiveNode.js";
import WaitNode from "../ast/WaitNode.js";
import ProgramNode from "../ast/ProgramNode.js";
import IdentifierNode from "../ast/IdentifierNode.js";
import IdentifiersChainNode from "../ast/IdentifiersChainNode.js";
import DiiaParserVisitor from "./build/DiiaParserVisitor.js";
import BooleanNode from "../ast/BooleanNode.js";
import TypeValueNode from "../ast/TypeValueNode.js";
import ContinueNode from "../ast/ContinueNode.js";
import BreakNode from "../ast/BreakNode.js";
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
import TakePakNode from "../ast/TakePakNode.js";
import TakeRemoteNode from "../ast/TakeRemoteNode.js";
import GiveElementNode from "../ast/GiveElementNode.js";
import { extractStringValue } from "../utils/text.js";
import EvalNode from "../ast/EvalNode.js";
import TakeFileNode from "../ast/TakeFileNode.js";
import BitwiseNode from "../ast/BitwiseNode.js";
import BitwiseNotNode from "../ast/BitwiseNotNode.js";

class DiiaVisitor extends DiiaParserVisitor {
    visitFile(ctx) {
        return this.visitProgram(ctx.f_program);
    }

    visitProgram(ctx) {
        return new ProgramNode(ctx, { body: flatNodes(super.visitProgram(ctx)) });
    }

    visitProgram_take(ctx) {
        return flatNodes(super.visitProgram_take(ctx));
    }

    visitProgram_element(ctx) {
        return singleNode(super.visitProgram_element(ctx));
    }

    visitModule(ctx) {
        const name = ctx.m_name && this.visitIdentifier(ctx.m_name);
        const program = ctx.m_program && this.visit(ctx.m_program);

        return new ModuleNode(ctx, { name, program });
    }

    visitStructure(ctx) {
        const name = this.visitIdentifier(ctx.s_name);
        const elements = ctx.s_elements ? this.visitStructure_elements(ctx.s_elements) : [];
        const params = [];
        const methods = [];
        for (const element of elements) {
            if (element instanceof ParamNode) {
                params.push(element);
            } else if (element instanceof DiiaNode) {
                if (element.structure) {
                    throw new Error('Синтаксична помилка'); // todo: add proper text
                }
                methods.push(element);
            }
        }
        const parent = ctx.s_parent && singleNode(this.visit(ctx.s_parent));

        return new StructureNode(ctx, { name, params, parent, methods });
    }

    visitStructure_elements(ctx) {
        return flatNodes(super.visitStructure_elements(ctx));
    }

    visitStructure_element(ctx) {
        return singleNode(super.visitStructure_element(ctx));
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

    visitMockup(ctx) {
        throw 'not implemented';
    }

    visitMockup_elements(ctx) {
        throw 'not implemented';
    }

    visitMockup_parents(ctx) {
        throw 'not implemented';
    }

    visitMockup_element(ctx) {
        throw 'not implemented';
    }

    visitIf(ctx) {
        const value = this.visit(ctx.i_value);
        const body = ctx.i_body && this.visit(ctx.i_body);
        const elseBody = ctx.i_else_body ? this.visit(ctx.i_else_body) : ctx.i_else_if ? this.visit(ctx.i_else_if) : null;

        return new IfNode(ctx, { value, body, elseBody });
    }

    visitEach(ctx) {
        const keyName = ctx.e_key_name && this.visitIdentifier(ctx.e_key_name);
        const name = ctx.e_name && this.visitIdentifier(ctx.e_name);
        const iterator = this.visit(ctx.e_iterator);
        const body = this.visit(ctx.e_body);

        return new EachNode(ctx, { keyName, name, iterator, body });
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

    visitTake_file(ctx) {
        const name = extractStringValue(ctx.tf_name.text);
        const as = this.visitIdentifier(ctx.tf_as);

        return new TakeFileNode(ctx, { name, as });
    }

    visitTake_module(ctx) {
        let id = ctx.tm_elements_chain && singleNode(this.visit(ctx.tm_elements_chain));
        const as = ctx.tm_as && this.visitIdentifier(ctx.tm_as);
        const absolute = !!ctx.tm_absolute;
        const star = !!ctx.tm_star;

        return new TakeModuleNode(ctx, { id, as, absolute, star });
    }

    visitTake_pak(ctx) {
        let id = ctx.tp_elements_chain && singleNode(this.visit(ctx.tp_elements_chain));
        const as = ctx.tp_as && this.visitIdentifier(ctx.tp_as);
        const star = !!ctx.tp_star;

        return new TakePakNode(ctx, { id, as, star });
    }

    visitTake_remote(ctx) {
        const url = extractStringValue(ctx.tr_url.text);
        const as = ctx.tr_as && this.visitIdentifier(ctx.tr_as);

        return new TakeRemoteNode(ctx, { url, as });
    }

    visitEval(ctx) {
        const value = this.visit(ctx.e_value);

        return new EvalNode(ctx, { value });
    }

    visitGive(ctx) {
        const elements = flatNodes(super.visitGive(ctx));

        return new GiveNode(ctx, { elements });
    }

    visitGive_element(ctx) {
        const id = singleNode(this.visit(ctx.ge_name));
        const as = ctx.ge_as && this.visitIdentifier(ctx.ge_as);

        return new GiveElementNode(ctx, { id, as });
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
        } else if (text.includes('б')) {
            const right = text.substring(2);

            text = `0b${right}`;
        }

        console.log(text)

        const value = Number(text);

        return new NumberNode(ctx, { value });
    }

    visitString(ctx) {
        let value = extractStringValue(ctx.getText());

        return new StringNode(ctx, { value: value });
    }

    visitId(ctx) {
        if (ctx.getText() === 'пропустити') {
            return new ContinueNode(ctx);
        }
        if (ctx.getText() === 'зупинити') {
            return new BreakNode(ctx);
        }

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

    visitPositive(ctx) {
        const value = this.visit(ctx.p_value);

        return new PositiveNode(ctx, { value });
    }

    visitNegative(ctx) {
        const value = this.visit(ctx.n_value);

        return new NegativeNode(ctx, { value });
    }

    visitNot(ctx) {
        const value = this.visit(ctx.n_value);

        return new NotNode(ctx, { value });
    }

    visitBitwise_not(ctx) {
        const value = this.visit(ctx.bn_value);

        return new BitwiseNotNode(ctx, { value });
    }

    visitSimple(ctx) {
        return singleNode(super.visitSimple(ctx));
    }

    visitFunction(ctx) {
        const params = ctx.f_params ? this.visitParams(ctx.f_params) : [];
        const type = ctx.f_type && singleNode(this.visit(ctx.f_type));
        const body = ctx.f_body ? flatNodes(this.visit(ctx.f_body)) : [];

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

    visitBitwise(ctx) {
        const left = this.visit(ctx.b_left);
        const right = this.visit(ctx.b_right);
        const operation = this.visit(ctx.b_operation);

        return new BitwiseNode(ctx, { left, right, operation });
    }

    visitBitwise_op(ctx) {
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

    visitArray(ctx) {
        const elements = ctx.a_elements ? this.visit(ctx.a_elements) : [];

        return new ArrayNode(ctx, { elements });
    }

    visitDictionary(ctx) {
        const args = ctx.d_args ? this.visit(ctx.d_args) : {};

        return new DictionaryNode(ctx, { args });
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

    visitGet_element(ctx) {
        const left = this.visit(ctx.a_left);
        const element = this.visit(ctx.a_element);

        return new GetElementNode(ctx, { left, element });
    }

    visitAssign(ctx) {
        const wait = false;
        let id;
        if (ctx.a_identifiers_chain) {
            id = singleNode(this.visit(ctx.a_identifiers_chain));
        } else if (ctx.a_identifier) {
            id = singleNode(this.visit(ctx.a_identifier));
        } else if (ctx.a_array_destruction) {
            id = this.visitArray_destruction(ctx.a_array_destruction);
        } else if (ctx.a_object_destruction) {
            id = this.visitObject_destruction(ctx.a_object_destruction);
        }
        const type = ctx.a_type && singleNode(this.visit(ctx.a_type));
        const value = ctx.a_value && this.visit(ctx.a_value);
        const symbol = this.visit(ctx.a_symbol);
        const setElement = ctx.a_set_element ? this.visit(ctx.a_set_element) : null;

        return new AssignNode(ctx, { id, value, wait, type, symbol, setElement });
    }

    visitAssign_symbol(ctx) {
        return ctx.getText();
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

    visitExtended_identifier(ctx) {
        return this.visitIdentifier(ctx);
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
        let name;
        if (ctx.p_name) {
            name = this.visitIdentifier(ctx.p_name);
        } else if (ctx.p_array_destruction) {
            name = this.visitArray_destruction(ctx.p_array_destruction);
        } else if (ctx.p_object_destruction) {
            name = this.visitObject_destruction(ctx.p_object_destruction);
        }
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
        return flatNodes(super.visitBody(ctx));
    }

    visitBody_element(ctx) {
        return singleNode(super.visitBody_element(ctx));
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
