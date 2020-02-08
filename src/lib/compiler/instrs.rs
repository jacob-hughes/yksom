#[derive(Clone, Copy, Debug)]
pub enum Instr {
    Block(usize),
    Builtin(Builtin),
    Global(usize),
    ClosureReturn(usize),
    Double(f64),
    InstVarLookup(usize),
    InstVarSet(usize),
    Int(isize),
    Pop,
    Return,
    Send(usize, usize),
    String(usize),
    Symbol(usize),
    VarLookup(usize, usize),
    VarSet(usize, usize),
}

#[derive(Clone, Copy, Debug)]
pub enum Builtin {
    False,
    Nil,
    System,
    True,
}

#[derive(Clone, Copy, Debug)]
pub enum Primitive {
    Add,
    And,
    AsString,
    AsSymbol,
    BitXor,
    Class,
    Concatenate,
    Div,
    DoubleDiv,
    Equals,
    Global,
    GlobalPut,
    GreaterThan,
    GreaterThanEquals,
    Halt,
    Hashcode,
    Inspect,
    InstVarAt,
    InstVarAtPut,
    InstVarNamed,
    LessThan,
    LessThanEquals,
    Mod,
    Mul,
    Name,
    NotEquals,
    New,
    ObjectSize,
    Perform,
    PerformInSuperClass,
    PerformWithArguments,
    PerformWithArgumentsInSuperClass,
    PrintNewline,
    PrintString,
    RefEquals,
    Restart,
    Shl,
    Sqrt,
    Sub,
    Superclass,
    /// Is this `value` (0), `value:` (1), or `value:with:` (2)?
    Value(u8),
}
