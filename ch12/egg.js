function getToken(program) {
  program = program.trim();
  let token, expr;
  if (token = /^"([^"]*)"/.exec(program)) {
    expr = {type: "value", value: token[1]};
  } else if (token =/^\d+\b/.exec(program)) {
    expr = {type: "value", value: Number(token[0])}
  } else if (token = /^[^\s(),"]+/.exec(program)) {
    expr = {type: "word", name: token[0]};
  } else {
    throw new SyntaxError("Unexpected syntax: " + program);
  }

    return  parseApply(expr, program.slice(token[0].length));
}

function parseApply(expr, program) {
  program = program.trim();
  if (program[0] != "(") {
    return {expr: expr, rest: program};
  }
  program = program.slice(1).trim();
  expr = {type: "apply", operator: expr, args: []};
  while (program[0] != ")") {
    let arg = getToken(program);
    expr.args.push(arg.expr);
    program = arg.rest.trim();
    if (program[0] == ",") {
      program = program.slice(1).trim();
    } else if (program[0] != ")") {
      throw  new SyntaxError("Expected ',' or ')'");
    }
  }
  return parseApply(expr, program.slice(1));
}

function parse(program) {
  let {expr, rest} = getToken(program);
  if (rest.trim().length > 0) {
    throw new SyntaxError("Unexpected text after program");
  }
  return expr;
}

function eval(expr, scope) {
}

console.log(parse("+(a, 10)"));
