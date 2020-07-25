#![allow(clippy::new_ret_no_self)]

use std::{cell::UnsafeCell, collections::hash_map::DefaultHasher, hash::Hasher};

use rboehm::Gc;

use crate::vm::{
    core::VM,
    error::{VMError, VMErrorKind},
    objects::{Obj, ObjType, StaticObjType},
    val::{NotUnboxable, Val},
};

pub trait Array {
    /// Return the item at index `idx` (using SOM indexing starting at 1) or an error if the index
    /// is invalid.
    fn at(self: Gc<Self>, vm: &VM, idx: usize) -> Result<Val, Box<VMError>>;

    /// Return the item at index `idx` (using SOM indexing starting at 1). This will lead to
    /// undefined behaviour if the index is invalid.
    unsafe fn unchecked_at(self: Gc<Self>, idx: usize) -> Val;

    /// Set the item at index `idx` (using SOM indexing starting at 1) to `val` or return an error
    /// if the index is invalid.
    fn at_put(self: Gc<Self>, vm: &mut VM, idx: usize, val: Val) -> Result<(), Box<VMError>>;

    /// Iterate over this array's values.
    fn iter(self: Gc<Self>) -> ArrayIterator;
}

#[derive(Debug)]
pub struct NormalArray {
    store: UnsafeCell<Vec<Val>>,
}

impl Obj for NormalArray {
    fn dyn_objtype(self: Gc<Self>) -> ObjType {
        ObjType::Array
    }

    fn get_class(self: Gc<Self>, vm: &mut VM) -> Val {
        vm.array_cls
    }

    fn to_array(self: Gc<Self>) -> Result<Gc<dyn Array>, Box<VMError>> {
        Ok(self)
    }

    fn hashcode(self: Gc<Self>) -> u64 {
        let mut hasher = DefaultHasher::new();
        hasher.write_usize(Gc::into_raw(self) as *const _ as usize);
        hasher.finish()
    }

    fn length(self: Gc<Self>) -> usize {
        let store = unsafe { &*self.store.get() };
        store.len()
    }
}

impl NotUnboxable for NormalArray {}

impl StaticObjType for NormalArray {
    fn static_objtype() -> ObjType {
        ObjType::Array
    }
}

impl Array for NormalArray {
    fn at(self: Gc<Self>, vm: &VM, mut idx: usize) -> Result<Val, Box<VMError>> {
        let store = unsafe { &*self.store.get() };
        if idx > 0 && idx <= store.len() {
            idx -= 1;
            Ok(*unsafe { store.get_unchecked(idx) })
        } else {
            Err(VMError::new(
                vm,
                VMErrorKind::IndexError {
                    tried: idx,
                    max: store.len(),
                },
            ))
        }
    }

    unsafe fn unchecked_at(self: Gc<Self>, mut idx: usize) -> Val {
        debug_assert!(idx > 0);
        let store = &*self.store.get();
        debug_assert!(idx <= store.len());
        idx -= 1;
        *store.get_unchecked(idx)
    }

    fn at_put(self: Gc<Self>, vm: &mut VM, mut idx: usize, val: Val) -> Result<(), Box<VMError>> {
        let store = unsafe { &mut *self.store.get() };
        if idx > 0 && idx <= store.len() {
            idx -= 1;
            *unsafe { store.get_unchecked_mut(idx) } = val;
            Ok(())
        } else {
            Err(VMError::new(
                vm,
                VMErrorKind::IndexError {
                    tried: idx,
                    max: store.len(),
                },
            ))
        }
    }

    fn iter(self: Gc<Self>) -> ArrayIterator {
        ArrayIterator {
            arr: self,
            len: self.length(),
            i: 0,
        }
    }
}

impl NormalArray {
    pub fn new(vm: &mut VM, len: usize) -> Val {
        let mut store = Vec::with_capacity(len);
        store.resize(len, vm.nil);
        Val::from_obj(NormalArray {
            store: UnsafeCell::new(store),
        })
    }

    pub fn from_vec(_: &mut VM, store: Vec<Val>) -> Val {
        Val::from_obj(NormalArray {
            store: UnsafeCell::new(store),
        })
    }
}

#[derive(Debug)]
pub struct MethodsArray {
    store: UnsafeCell<Vec<Val>>,
}

impl Obj for MethodsArray {
    fn dyn_objtype(self: Gc<Self>) -> ObjType {
        ObjType::Array
    }

    fn get_class(self: Gc<Self>, vm: &mut VM) -> Val {
        vm.array_cls
    }

    fn to_array(self: Gc<Self>) -> Result<Gc<dyn Array>, Box<VMError>> {
        Ok(self)
    }

    fn hashcode(self: Gc<Self>) -> u64 {
        let mut hasher = DefaultHasher::new();
        hasher.write_usize(Gc::into_raw(self) as *const _ as usize);
        hasher.finish()
    }

    fn length(self: Gc<Self>) -> usize {
        let store = unsafe { &*self.store.get() };
        store.len()
    }
}

impl NotUnboxable for MethodsArray {}

impl StaticObjType for MethodsArray {
    fn static_objtype() -> ObjType {
        ObjType::Array
    }
}

impl Array for MethodsArray {
    fn at(self: Gc<Self>, vm: &VM, mut idx: usize) -> Result<Val, Box<VMError>> {
        let store = unsafe { &*self.store.get() };
        if idx > 0 && idx <= store.len() {
            idx -= 1;
            Ok(*unsafe { store.get_unchecked(idx) })
        } else {
            Err(VMError::new(
                vm,
                VMErrorKind::IndexError {
                    tried: idx,
                    max: store.len(),
                },
            ))
        }
    }

    unsafe fn unchecked_at(self: Gc<Self>, mut idx: usize) -> Val {
        debug_assert!(idx > 0);
        let store = &*self.store.get();
        debug_assert!(idx <= store.len());
        idx -= 1;
        *store.get_unchecked(idx)
    }

    fn at_put(self: Gc<Self>, vm: &mut VM, mut idx: usize, val: Val) -> Result<(), Box<VMError>> {
        let store = unsafe { &mut *self.store.get() };
        if idx > 0 && idx <= store.len() {
            idx -= 1;
            *unsafe { store.get_unchecked_mut(idx) } = val;
            vm.flush_inline_caches();
            Ok(())
        } else {
            Err(VMError::new(
                vm,
                VMErrorKind::IndexError {
                    tried: idx,
                    max: store.len(),
                },
            ))
        }
    }

    fn iter(self: Gc<Self>) -> ArrayIterator {
        ArrayIterator {
            arr: self,
            len: self.length(),
            i: 0,
        }
    }
}

impl MethodsArray {
    pub fn from_vec(_vm: &mut VM, store: Vec<Val>) -> Val {
        Val::from_obj(MethodsArray {
            store: UnsafeCell::new(store),
        })
    }
}

pub struct ArrayIterator {
    arr: Gc<dyn Array>,
    len: usize,
    i: usize,
}

impl Iterator for ArrayIterator {
    type Item = Val;

    fn next(&mut self) -> Option<Val> {
        if self.i < self.len {
            self.i += 1;
            Some(unsafe { self.arr.unchecked_at(self.i) })
        } else {
            None
        }
    }
}
