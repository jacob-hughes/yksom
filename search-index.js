var searchIndex={};
searchIndex["yksom"] = {"doc":"A SOM VM in Rust. SOM is a cut-down Smalltalk-like…","i":[[0,"compiler","yksom","A SOM compiler. This is currently fairly simplistic,…",null,null],[5,"compile","yksom::compiler","Compile a class. Should only be called by the `VM`.",null,[[["vm",3],["path",3]]]],[0,"instrs","","",null,null],[4,"Instr","yksom::compiler::instrs","",null,null],[13,"Block","","",0,null],[13,"GlobalLookup","","",0,null],[13,"ClosureReturn","","",0,null],[13,"Double","","",0,null],[13,"InstVarLookup","","",0,null],[13,"InstVarSet","","",0,null],[13,"Int","","",0,null],[13,"Pop","","",0,null],[13,"Return","","",0,null],[13,"Send","","",0,null],[13,"String","","",0,null],[13,"Symbol","","",0,null],[13,"VarLookup","","",0,null],[13,"VarSet","","",0,null],[4,"Primitive","","",null,null],[13,"Add","","",1,null],[13,"And","","",1,null],[13,"As32BitSignedValue","","",1,null],[13,"As32BitUnsignedValue","","",1,null],[13,"AsInteger","","",1,null],[13,"AsString","","",1,null],[13,"AsSymbol","","",1,null],[13,"AtRandom","","",1,null],[13,"BitXor","","",1,null],[13,"Class","","",1,null],[13,"Cos","","",1,null],[13,"Concatenate","","",1,null],[13,"Div","","",1,null],[13,"DoubleDiv","","",1,null],[13,"Equals","","",1,null],[13,"Exit","","",1,null],[13,"Fields","","",1,null],[13,"FromString","","",1,null],[13,"Global","","",1,null],[13,"GlobalPut","","",1,null],[13,"GreaterThan","","",1,null],[13,"GreaterThanEquals","","",1,null],[13,"Halt","","",1,null],[13,"Hashcode","","",1,null],[13,"Inspect","","",1,null],[13,"InstVarAt","","",1,null],[13,"InstVarAtPut","","",1,null],[13,"InstVarNamed","","",1,null],[13,"Length","","",1,null],[13,"Load","","",1,null],[13,"LessThan","","",1,null],[13,"LessThanEquals","","",1,null],[13,"Methods","","",1,null],[13,"Mod","","",1,null],[13,"Mul","","",1,null],[13,"Name","","",1,null],[13,"NotEquals","","",1,null],[13,"New","","",1,null],[13,"ObjectSize","","",1,null],[13,"Perform","","",1,null],[13,"PerformInSuperClass","","",1,null],[13,"PerformWithArguments","","",1,null],[13,"PerformWithArgumentsInSuperClass","","",1,null],[13,"PositiveInfinity","","",1,null],[13,"PrimSubstringFromTo","","",1,null],[13,"PrintNewline","","",1,null],[13,"PrintString","","",1,null],[13,"RefEquals","","",1,null],[13,"Rem","","",1,null],[13,"Restart","","",1,null],[13,"Round","","",1,null],[13,"Shl","","",1,null],[13,"Shr","","",1,null],[13,"Sin","","",1,null],[13,"Sqrt","","",1,null],[13,"Sub","","",1,null],[13,"Superclass","","",1,null],[13,"Value","","Is this `value` (0), `value:` (1), or `value:with:` (2)?",1,null],[0,"vm","yksom","The yksom run-time. The run-time uses trait objects but…",null,null],[0,"core","yksom::vm","The core part of the interpreter.",null,null],[3,"VM","yksom::vm::core","The core VM struct.",null,null],[12,"block_cls","","",2,null],[12,"block2_cls","","",2,null],[12,"block3_cls","","",2,null],[12,"bool_cls","","",2,null],[12,"cls_cls","","",2,null],[12,"double_cls","","",2,null],[12,"false_cls","","",2,null],[12,"int_cls","","",2,null],[12,"metacls_cls","","",2,null],[12,"nil_cls","","",2,null],[12,"obj_cls","","",2,null],[12,"str_cls","","",2,null],[12,"sym_cls","","",2,null],[12,"system_cls","","",2,null],[12,"true_cls","","",2,null],[12,"false_","","",2,null],[12,"nil","","",2,null],[12,"system","","",2,null],[12,"true_","","",2,null],[3,"Frame","","",null,null],[3,"Closure","","",null,null],[17,"SOM_EXTENSION","","",null,null],[11,"new","","",2,[[["vec",3],["string",3]]]],[11,"compile","","Compile the file at `path`. `inst_vars_allowed` should be…",2,[[["path",3]],["val",3]]],[11,"error","","Inform the user of the error string `error` and then exit.",2,[[]]],[11,"top_level_send","","Send the message `msg` to the receiver `rcv` with…",2,[[["vec",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"frames_len","","",2,[[]]],[11,"push_blockinfo","","Add `blkinfo` to the set of known `BlockInfo`s and return…",2,[[["blockinfo",3]]]],[11,"set_blockinfo","","Update the `BlockInfo` at index `idx` to `blkinfo`.",2,[[["blockinfo",3]]]],[11,"new_inline_cache","","Add an empty inline cache to the VM, returning its index.",2,[[]]],[11,"inline_cache_lookup","","Lookup the method `name` in the class `rcv_cls`, utilising…",2,[[["val",3]],[["gc",3],["result",4],["box",3]]]],[11,"instrs_len","","How many instructions are currently present in the VM?",2,[[]]],[11,"instrs_push","","Push `instr` to the end of the current vector of…",2,[[["instr",4],["span",3]]]],[11,"add_send","","Add the send `send` to the VM, returning its index. Note…",2,[[]]],[11,"add_string","","Add the string `s` to the VM, returning its index. Note…",2,[[["string",3]]]],[11,"add_symbol","","Add the symbol `s` to the VM, returning its index. Note…",2,[[["string",3]]]],[11,"add_global","","Add the global `n` to the VM, returning its index. Note…",2,[[["string",3]]]],[11,"get_global_or_nil","","Lookup the global `name`: if it has not been added, or has…",2,[[],["val",3]]],[11,"get_legal_global","","Get the global at position `i`: if it has not been set…",2,[[],[["val",3],["box",3],["result",4]]]],[11,"set_global","","Set the global `name` to the value `v`, overwriting the…",2,[[["val",3]]]],[0,"error","yksom::vm","",null,null],[3,"VMError","yksom::vm::error","",null,null],[12,"kind","","",3,null],[12,"backtrace","","The callstack (in reverse order) of (Class, Span) pairs.",3,null],[4,"VMErrorKind","","",null,null],[13,"CantRepresentAsDouble","","A value which can't be represented in an `f64`.",4,null],[13,"CantRepresentAsIsize","","A value which can't be represented in an `isize`.",4,null],[13,"CantRepresentAsUsize","","A value which can't be represented in an `usize`.",4,null],[13,"DivisionByZero","","",4,null],[13,"DomainError","","A value which is mathematically undefined.",4,null],[13,"Exit","","The VM is trying to exit.",4,null],[13,"InvalidSymbol","","Tried to access a global before it being initialised.",4,null],[13,"NegativeShift","","Tried to do a shl or shr with a value below zero.",4,null],[13,"NotANumber","","A specialised version of TypeError, because SOM has more…",4,null],[12,"got","yksom::vm::error::VMErrorKind","",5,null],[13,"PrimitiveError","yksom::vm::error","Something went wrong when trying to execute a primitive.",4,null],[13,"ShiftTooBig","","Tried to do a shl that would overflow memory and/or not…",4,null],[13,"TypeError","","A dynamic type error.",4,null],[12,"expected","yksom::vm::error::VMErrorKind","",6,null],[12,"got","","",6,null],[13,"UnknownGlobal","yksom::vm::error","An unknown global.",4,null],[13,"UnknownMethod","","An unknown method.",4,null],[11,"new","","",3,[[["vm",3],["vmerrorkind",4]],["box",3]]],[11,"console_print","","",3,[[["vm",3]]]],[0,"objects","yksom::vm","This module contains the core SOM objects. Note that there…",null,null],[3,"Block","yksom::vm::objects","",null,null],[12,"method","","",7,null],[12,"inst","","This `Block`'s `self` val. XXX This should probably be…",7,null],[12,"blockn_cls","","Does this Block represent Block, Block2, or Block3?",7,null],[12,"blockinfo_off","","",7,null],[12,"parent_closure","","",7,null],[3,"BlockInfo","","Minimal information about a SOM block.",null,null],[12,"bytecode_off","","",8,null],[12,"bytecode_end","","",8,null],[12,"num_params","","",8,null],[12,"num_vars","","",8,null],[12,"max_stack","","",8,null],[3,"Class","","",null,null],[12,"name","","",9,null],[12,"path","","",9,null],[12,"instrs_off","","Offset to this class's instructions in VM::instrs.",9,null],[12,"num_inst_vars","","",9,null],[12,"methods","","",9,null],[3,"Double","","A boxed Double (which is synonymous with a f64 in yksom).",null,null],[3,"Inst","","An instance of a user class.",null,null],[3,"ArbInt","","A boxed arbitrary sized `BigInt`.",null,null],[3,"Int","","A boxed `isize`.",null,null],[3,"Method","","",null,null],[12,"name","","",10,null],[12,"body","","",10,null],[3,"String_","","",null,null],[12,"is_str","","",11,null],[3,"ThinObj","","A narrow pointer to #trait_id.",null,null],[4,"MethodBody","","",null,null],[13,"Primitive","","A built-in primitive.",12,null],[13,"User","","User bytecode.",12,null],[12,"num_vars","yksom::vm::objects::MethodBody","How many variables does this method define?",13,null],[12,"bytecode_off","","The offset of this method's bytecode in its parent class.",13,null],[12,"max_stack","","",13,null],[4,"ObjType","yksom::vm::objects","The SOM type of objects.",null,null],[13,"ArbInt","","",14,null],[13,"Block","","",14,null],[13,"Class","","",14,null],[13,"Double","","",14,null],[13,"Method","","",14,null],[13,"Inst","","",14,null],[13,"Int","","",14,null],[13,"String_","","",14,null],[11,"new","","",7,[[["gc",3],["val",3],["vm",3],["method",3],["closure",3],["gc",3]],["val",3]]],[11,"new","","",9,[[["hashmap",3],["gc",3],["pathbuf",3],["vm",3],["val",3],["string",3]]]],[11,"name","","",9,[[["vm",3]],[["val",3],["box",3],["result",4]]]],[11,"get_method","","",9,[[["vm",3]],[["gc",3],["result",4],["box",3]]]],[11,"set_metacls","","",9,[[["vm",3],["val",3]]]],[11,"supercls","","",9,[[["vm",3]],["val",3]]],[11,"set_supercls","","",9,[[["vm",3],["val",3]]]],[11,"new","","",15,[[["vm",3]],["val",3]]],[11,"double","","",15,[[]]],[11,"new","","",16,[[["vm",3],["val",3]],["val",3]]],[11,"new","","Create a `Val` representing the `BigInt` integer `val`.…",17,[[["vm",3],["bigint",3]],[["val",3],["box",3],["result",4]]]],[11,"bigint","","",17,[[],["bigint",3]]],[11,"boxed_isize","","Create a `Val` representing the `usize` integer `i`. The…",18,[[["vm",3]],[["val",3],["box",3],["result",4]]]],[11,"as_isize","","",18,[[]]],[11,"as_usize","","",18,[[],["option",4]]],[11,"new","","",10,[[["vm",3],["methodbody",4],["string",3]],["method",3]]],[11,"class","","",10,[[],["val",3]]],[11,"set_class","","",10,[[["vm",3],["val",3]]]],[11,"new","","",11,[[["vm",3],["string",3]],["val",3]]],[11,"as_str","","",11,[[]]],[11,"concatenate","","Concatenate this string with another string and return the…",11,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"to_symbol","","",11,[[["vm",3]],[["val",3],["box",3],["result",4]]]],[8,"Obj","","The main SOM Object trait. Notice that code should almost…",null,null],[10,"dyn_objtype","","What `ObjType` does this `Val` represent?",19,[[],["objtype",4]]],[10,"get_class","","What class is this object an instance of?",19,[[["vm",3]],["val",3]]],[11,"to_strval","","Convert this object to a `Val` that represents a SOM string.",19,[[["vm",3]],[["val",3],["box",3],["result",4]]]],[11,"inst_var_lookup","","Lookup an instance variable in this object.",19,[[],["val",3]]],[11,"inst_var_set","","Set an instance variable in this object.",19,[[["val",3]]]],[11,"add","","Produce a new `Val` which adds `other` to this.",19,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"and","","Produce a new `Val` which performs a bitwise and with…",19,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"div","","Produce a new `Val` which divides `other` from this.",19,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"double_div","","",19,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"modulus","","Produce a new `Val` which performs a mod operation on this…",19,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"mul","","Produce a new `Val` which multiplies `other` to this.",19,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"shl","","Produce a new `Val` which shifts `self` `other` bits to…",19,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"sqrt","","Produces a new `Val` which is the square root of this.",19,[[["vm",3]],[["val",3],["box",3],["result",4]]]],[11,"sub","","Produce a new `Val` which subtracts `other` from this.",19,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"xor","","Produce a new `Val` which performs a bitwise xor with…",19,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"ref_equals","","Is this `Val` reference equality equal to `other`? Only…",19,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"equals","","Does this `Val` equal `other`?",19,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"not_equals","","Does this `Val` not equal `other`?",19,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"greater_than","","Is this `Val` greater than `other`?",19,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"greater_than_equals","","Is this `Val` greater than or equal to `other`?",19,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"less_than","","Is this `Val` less than `other`?",19,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"less_than_equals","","Is this `Val` less than or equal to `other`?",19,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[8,"StaticObjType","","",null,null],[10,"static_objtype","","Return this trait type's static `ObjType`",20,[[],["objtype",4]]],[11,"as_str","","",14,[[]]],[11,"new","","Create a new narrow pointer to #trait_id.",21,[[],["gc",3]]],[11,"recover","","",21,[[["obj",8]],[["gc",3],["thinobj",3]]]],[11,"downcast","","Try casting this narrow trait object to a concrete struct…",21,[[],["option",4]]],[0,"somstack","yksom::vm","",null,null],[3,"SOMStack","yksom::vm::somstack","A fixed size stack of SOM values. This stack does minimal…",null,null],[17,"SOM_STACK_LEN","","",null,null],[11,"new","","",22,[[],["somstack",3]]],[11,"is_empty","","Returns `true` if the stack contains no elements.",22,[[]]],[11,"len","","Returns the number of elements in the stack.",22,[[]]],[11,"remaining_capacity","","Returns the number of elements the stack can store before…",22,[[]]],[11,"peek","","Returns the top-most value of the stack without removing…",22,[[],["val",3]]],[11,"pop","","Pops the top-most value of the stack and returns it. If…",22,[[],["val",3]]],[11,"pop_n","","Pops the top-most value of the stack and returns it. If…",22,[[],["val",3]]],[11,"push","","Push `v` onto the end of the stack. You must previously…",22,[[["val",3]]]],[11,"truncate","","Shortens the stack, keeping the first len elements and…",22,[[]]],[0,"val","yksom::vm","Tagged pointer support.",null,null],[3,"Val","yksom::vm::val","The core struct representing values in the language…",null,null],[12,"val","","",23,null],[4,"ValKind","","",null,null],[13,"GCBOX","","A pointer to a `Gc` element.",24,null],[13,"INT","","A tagged integer.",24,null],[13,"ILLEGAL","","An illegal value. Any operations on a `Val` of this kind…",24,null],[17,"BITSIZE","","",null,null],[17,"TAG_BITSIZE","","",null,null],[17,"TAG_BITMASK","","",null,null],[17,"INT_BITMASK","","",null,null],[8,"NotUnboxable","","Objects which `impl` this trait guarantee that they can…",null,null],[11,"from_unchecked","","",24,[[]]],[11,"from_obj","","Create a `Val` from a given instance of the `Obj` trait.",23,[[["vm",3],["obj",8]]]],[11,"recover","","Convert `obj` into a `Val`. `Obj` must previously have…",23,[[["obj",8]]]],[11,"illegal","","Create a value upon which all operations are invalid. This…",23,[[],["val",3]]],[11,"valkind","","What is this `Val`'s `ValKind`.",23,[[],["valkind",4]]],[11,"downcast","","Cast a `Val` into an instance of type `T` (where `T` must…",23,[[["vm",3]],[["box",3],["result",4]]]],[11,"try_downcast","","Cast a `Val` into an instance of type `T` (where `T` must…",23,[[["vm",3]],["option",4]]],[11,"tobj","","Return this `Val`'s box. If the `Val` refers to an unboxed…",23,[[["vm",3]],[["result",4],["gc",3],["box",3]]]],[11,"from_isize","","Create a (possibly boxed) `Val` representing the `isize`…",23,[[["vm",3]],[["val",3],["box",3],["result",4]]]],[11,"from_usize","","Create a (possibly boxed) `Val` representing the `usize`…",23,[[["vm",3]],[["val",3],["box",3],["result",4]]]],[11,"from_bool","","If `v == true`, return a `Val` representing `vm.true_`,…",23,[[["vm",3]],["val",3]]],[11,"as_isize","","If this `Val` represents a non-bigint integer, return its…",23,[[["vm",3]],["option",4]]],[11,"as_usize","","If this `Val` represents a non-bigint integer, return its…",23,[[["vm",3]],["option",4]]],[11,"bit_eq","","Is this `Val` bit equal to `other`? This is a very strong…",23,[[["val",3]]]],[11,"dyn_objtype","","What `ObjType` does this `Val` represent?",23,[[["vm",3]],["objtype",4]]],[11,"get_class","","What class is this `Val` an instance of?",23,[[["vm",3]],["val",3]]],[11,"to_strval","","",23,[[["vm",3]],[["val",3],["box",3],["result",4]]]],[11,"add","","Produce a new `Val` which adds `other` to this.",23,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"and","","Produce a new `Val` which performs a bitwise and operation…",23,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"div","","Produce a new `Val` which divides `other` from this.",23,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"double_div","","Produce a new `Val` which perfoms a Double divide on…",23,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"modulus","","Produce a new `Val` which performs a mod operation on this…",23,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"mul","","Produce a new `Val` which multiplies `other` to this.",23,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"shl","","Produce a new `Val` which shifts `self` `other` bits to…",23,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"sqrt","","Produces a new `Val` which is the square root of this.",23,[[["vm",3]],[["val",3],["box",3],["result",4]]]],[11,"sub","","Produce a new `Val` which subtracts `other` from this.",23,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"xor","","Produce a new `Val` which performs a bitwise xor operation…",23,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"ref_equals","","Is this `Val` reference equal to `other`? Notice that for…",23,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"equals","","",23,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"not_equals","","",23,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"greater_than","","",23,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"greater_than_equals","","",23,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"less_than","","",23,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"less_than_equals","","",23,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"from","yksom::compiler::instrs","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"try_into","","",0,[[],["result",4]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"try_into","","",1,[[],["result",4]]],[11,"from","yksom::vm::core","",2,[[]]],[11,"into","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"try_into","","",2,[[],["result",4]]],[11,"from","","",25,[[]]],[11,"into","","",25,[[]]],[11,"try_from","","",25,[[],["result",4]]],[11,"try_into","","",25,[[],["result",4]]],[11,"borrow","","",25,[[]]],[11,"borrow_mut","","",25,[[]]],[11,"type_id","","",25,[[],["typeid",3]]],[11,"try_into","","",25,[[],["result",4]]],[11,"from","","",26,[[]]],[11,"into","","",26,[[]]],[11,"try_from","","",26,[[],["result",4]]],[11,"try_into","","",26,[[],["result",4]]],[11,"borrow","","",26,[[]]],[11,"borrow_mut","","",26,[[]]],[11,"type_id","","",26,[[],["typeid",3]]],[11,"try_into","","",26,[[],["result",4]]],[11,"from","yksom::vm::error","",3,[[]]],[11,"into","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"try_into","","",3,[[],["result",4]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"try_into","","",4,[[],["result",4]]],[11,"from","yksom::vm::objects","",7,[[]]],[11,"into","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"try_into","","",7,[[],["result",4]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"try_into","","",8,[[],["result",4]]],[11,"from","","",9,[[]]],[11,"into","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"try_into","","",9,[[],["result",4]]],[11,"from","","",15,[[]]],[11,"into","","",15,[[]]],[11,"try_from","","",15,[[],["result",4]]],[11,"try_into","","",15,[[],["result",4]]],[11,"borrow","","",15,[[]]],[11,"borrow_mut","","",15,[[]]],[11,"type_id","","",15,[[],["typeid",3]]],[11,"try_into","","",15,[[],["result",4]]],[11,"from","","",16,[[]]],[11,"into","","",16,[[]]],[11,"try_from","","",16,[[],["result",4]]],[11,"try_into","","",16,[[],["result",4]]],[11,"borrow","","",16,[[]]],[11,"borrow_mut","","",16,[[]]],[11,"type_id","","",16,[[],["typeid",3]]],[11,"try_into","","",16,[[],["result",4]]],[11,"from","","",17,[[]]],[11,"into","","",17,[[]]],[11,"try_from","","",17,[[],["result",4]]],[11,"try_into","","",17,[[],["result",4]]],[11,"borrow","","",17,[[]]],[11,"borrow_mut","","",17,[[]]],[11,"type_id","","",17,[[],["typeid",3]]],[11,"try_into","","",17,[[],["result",4]]],[11,"from","","",18,[[]]],[11,"into","","",18,[[]]],[11,"try_from","","",18,[[],["result",4]]],[11,"try_into","","",18,[[],["result",4]]],[11,"borrow","","",18,[[]]],[11,"borrow_mut","","",18,[[]]],[11,"type_id","","",18,[[],["typeid",3]]],[11,"try_into","","",18,[[],["result",4]]],[11,"from","","",10,[[]]],[11,"into","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"try_into","","",10,[[],["result",4]]],[11,"from","","",11,[[]]],[11,"into","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"try_into","","",11,[[],["result",4]]],[11,"from","","",21,[[]]],[11,"into","","",21,[[]]],[11,"try_from","","",21,[[],["result",4]]],[11,"try_into","","",21,[[],["result",4]]],[11,"borrow","","",21,[[]]],[11,"borrow_mut","","",21,[[]]],[11,"type_id","","",21,[[],["typeid",3]]],[11,"try_into","","",21,[[],["result",4]]],[11,"from","","",12,[[]]],[11,"into","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"try_into","","",12,[[],["result",4]]],[11,"from","","",14,[[]]],[11,"into","","",14,[[]]],[11,"try_from","","",14,[[],["result",4]]],[11,"try_into","","",14,[[],["result",4]]],[11,"borrow","","",14,[[]]],[11,"borrow_mut","","",14,[[]]],[11,"type_id","","",14,[[],["typeid",3]]],[11,"try_into","","",14,[[],["result",4]]],[11,"from","yksom::vm::somstack","",22,[[]]],[11,"into","","",22,[[]]],[11,"try_from","","",22,[[],["result",4]]],[11,"try_into","","",22,[[],["result",4]]],[11,"borrow","","",22,[[]]],[11,"borrow_mut","","",22,[[]]],[11,"type_id","","",22,[[],["typeid",3]]],[11,"try_into","","",22,[[],["result",4]]],[11,"from","yksom::vm::val","",23,[[]]],[11,"into","","",23,[[]]],[11,"to_owned","","",23,[[]]],[11,"clone_into","","",23,[[]]],[11,"try_from","","",23,[[],["result",4]]],[11,"try_into","","",23,[[],["result",4]]],[11,"borrow","","",23,[[]]],[11,"borrow_mut","","",23,[[]]],[11,"type_id","","",23,[[],["typeid",3]]],[11,"try_into","","",23,[[],["result",4]]],[11,"from","","",24,[[]]],[11,"into","","",24,[[]]],[11,"try_from","","",24,[[],["result",4]]],[11,"try_into","","",24,[[],["result",4]]],[11,"borrow","","",24,[[]]],[11,"borrow_mut","","",24,[[]]],[11,"type_id","","",24,[[],["typeid",3]]],[11,"try_into","","",24,[[],["result",4]]],[11,"static_objtype","yksom::vm::objects","",7,[[],["objtype",4]]],[11,"static_objtype","","",9,[[],["objtype",4]]],[11,"static_objtype","","",15,[[],["objtype",4]]],[11,"static_objtype","","",16,[[],["objtype",4]]],[11,"static_objtype","","",17,[[],["objtype",4]]],[11,"static_objtype","","",18,[[],["objtype",4]]],[11,"static_objtype","","",10,[[],["objtype",4]]],[11,"static_objtype","","",11,[[],["objtype",4]]],[11,"dyn_objtype","","",7,[[],["objtype",4]]],[11,"get_class","","",7,[[["vm",3]],["val",3]]],[11,"dyn_objtype","","",9,[[],["objtype",4]]],[11,"get_class","","",9,[[["vm",3]],["val",3]]],[11,"inst_var_lookup","","",9,[[],["val",3]]],[11,"inst_var_set","","",9,[[["val",3]]]],[11,"dyn_objtype","","",15,[[],["objtype",4]]],[11,"get_class","","",15,[[["vm",3]],["val",3]]],[11,"to_strval","","",15,[[["vm",3]],[["val",3],["box",3],["result",4]]]],[11,"add","","",15,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"double_div","","",15,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"modulus","","",15,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"mul","","",15,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"sqrt","","",15,[[["vm",3]],[["val",3],["box",3],["result",4]]]],[11,"sub","","",15,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"ref_equals","","",15,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"equals","","",15,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"less_than","","",15,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"dyn_objtype","","",16,[[],["objtype",4]]],[11,"get_class","","",16,[[["vm",3]],["val",3]]],[11,"inst_var_lookup","","",16,[[],["val",3]]],[11,"inst_var_set","","",16,[[["val",3]]]],[11,"dyn_objtype","","",17,[[],["objtype",4]]],[11,"get_class","","",17,[[["vm",3]],["val",3]]],[11,"to_strval","","",17,[[["vm",3]],[["val",3],["box",3],["result",4]]]],[11,"add","","",17,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"and","","",17,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"div","","",17,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"double_div","","",17,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"modulus","","",17,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"mul","","",17,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"shl","","",17,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"sqrt","","",17,[[["vm",3]],[["val",3],["box",3],["result",4]]]],[11,"sub","","",17,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"xor","","",17,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"ref_equals","","",17,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"equals","","",17,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"not_equals","","",17,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"greater_than","","",17,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"greater_than_equals","","",17,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"less_than","","",17,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"less_than_equals","","",17,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"dyn_objtype","","",18,[[],["objtype",4]]],[11,"get_class","","",18,[[["vm",3]],["val",3]]],[11,"to_strval","","",18,[[["vm",3]],[["val",3],["box",3],["result",4]]]],[11,"add","","",18,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"div","","",18,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"mul","","",18,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"sub","","",18,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"dyn_objtype","","",10,[[],["objtype",4]]],[11,"get_class","","",10,[[["vm",3]],["val",3]]],[11,"dyn_objtype","","",11,[[],["objtype",4]]],[11,"get_class","","",11,[[["vm",3]],["val",3]]],[11,"to_strval","","",11,[[["vm",3]],[["val",3],["box",3],["result",4]]]],[11,"ref_equals","","",11,[[["vm",3],["val",3]],[["val",3],["box",3],["result",4]]]],[11,"drop","","",21,[[]]],[11,"drop","yksom::vm::somstack","",22,[[]]],[11,"drop","yksom::vm::val","",23,[[]]],[11,"clone","yksom::compiler::instrs","",0,[[],["instr",4]]],[11,"clone","","",1,[[],["primitive",4]]],[11,"clone","yksom::vm::val","",23,[[]]],[11,"eq","yksom::vm::error","",4,[[["vmerrorkind",4]]]],[11,"ne","","",4,[[["vmerrorkind",4]]]],[11,"eq","yksom::vm::objects","",14,[[["objtype",4]]]],[11,"eq","yksom::vm::val","",24,[[["valkind",4]]]],[11,"eq","","",23,[[["val",3]]]],[11,"ne","","",23,[[["val",3]]]],[11,"deref","yksom::vm::objects","",21,[[],["obj",8]]],[11,"fmt","yksom::compiler::instrs","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","yksom::vm::core","",25,[[["formatter",3]],["result",6]]],[11,"fmt","","",26,[[["formatter",3]],["result",6]]],[11,"fmt","yksom::vm::error","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","yksom::vm::objects","",8,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",9,[[["formatter",3]],["result",6]]],[11,"fmt","","",15,[[["formatter",3]],["result",6]]],[11,"fmt","","",16,[[["formatter",3]],["result",6]]],[11,"fmt","","",17,[[["formatter",3]],["result",6]]],[11,"fmt","","",18,[[["formatter",3]],["result",6]]],[11,"fmt","","",10,[[["formatter",3]],["result",6]]],[11,"fmt","","",12,[[["formatter",3]],["result",6]]],[11,"fmt","","",11,[[["formatter",3]],["result",6]]],[11,"fmt","","",14,[[["formatter",3]],["result",6]]],[11,"fmt","yksom::vm::val","",24,[[["formatter",3]],["result",6]]],[11,"fmt","","",23,[[["formatter",3]],["result",6]]],[11,"layout","yksom::vm::core","",26,[[],["layout",3]]],[11,"layout","yksom::vm::objects","",7,[[],["layout",3]]],[11,"layout","","",9,[[],["layout",3]]],[11,"layout","","",15,[[],["layout",3]]],[11,"layout","","",16,[[],["layout",3]]],[11,"layout","","",17,[[],["layout",3]]],[11,"layout","","",18,[[],["layout",3]]],[11,"layout","","",10,[[],["layout",3]]],[11,"layout","","",11,[[],["layout",3]]],[11,"layout","","",21,[[],["layout",3]]]],"p":[[4,"Instr"],[4,"Primitive"],[3,"VM"],[3,"VMError"],[4,"VMErrorKind"],[13,"NotANumber"],[13,"TypeError"],[3,"Block"],[3,"BlockInfo"],[3,"Class"],[3,"Method"],[3,"String_"],[4,"MethodBody"],[13,"User"],[4,"ObjType"],[3,"Double"],[3,"Inst"],[3,"ArbInt"],[3,"Int"],[8,"Obj"],[8,"StaticObjType"],[3,"ThinObj"],[3,"SOMStack"],[3,"Val"],[4,"ValKind"],[3,"Frame"],[3,"Closure"]]};
addSearchOptions(searchIndex);initSearch(searchIndex);