#![cfg(not(feature = "no_object"))]

use crate::engine::OP_EQUALS;
use crate::plugin::*;
use crate::{def_package, Dynamic, ImmutableString, Map, INT};

#[cfg(not(feature = "no_index"))]
use crate::Array;

def_package!(crate:BasicMapPackage:"Basic object map utilities.", lib, {
    combine_with_exported_module!(lib, "map", map_functions);
});

#[export_module]
mod map_functions {
    #[rhai_fn(pure)]
    pub fn has(map: &mut Map, prop: ImmutableString) -> bool {
        map.contains_key(&prop)
    }
    #[rhai_fn(pure)]
    pub fn len(map: &mut Map) -> INT {
        map.len() as INT
    }
    pub fn clear(map: &mut Map) {
        map.clear();
    }
    pub fn remove(map: &mut Map, name: ImmutableString) -> Dynamic {
        map.remove(&name).unwrap_or_else(|| ().into())
    }
    #[rhai_fn(name = "mixin", name = "+=")]
    pub fn mixin(map: &mut Map, map2: Map) {
        map2.into_iter().for_each(|(key, value)| {
            map.insert(key, value);
        });
    }
    #[rhai_fn(name = "+")]
    pub fn merge(mut map: Map, map2: Map) -> Map {
        map2.into_iter().for_each(|(key, value)| {
            map.insert(key, value);
        });
        map
    }
    pub fn fill_with(map: &mut Map, map2: Map) {
        map2.into_iter().for_each(|(key, value)| {
            map.entry(key).or_insert(value);
        });
    }
    #[rhai_fn(name = "==", return_raw, pure)]
    pub fn equals(
        ctx: NativeCallContext,
        map: &mut Map,
        mut map2: Map,
    ) -> Result<Dynamic, Box<EvalAltResult>> {
        if map.len() != map2.len() {
            return Ok(false.into());
        }
        if map.is_empty() {
            return Ok(true.into());
        }

        for (m1, v1) in map.iter_mut() {
            if let Some(v2) = map2.get_mut(m1) {
                let equals = ctx
                    .call_fn_dynamic_raw(OP_EQUALS, true, false, &mut [v1, v2])
                    .map(|v| v.as_bool().unwrap_or(false))?;

                if !equals {
                    return Ok(false.into());
                }
            } else {
                return Ok(false.into());
            }
        }

        Ok(true.into())
    }
    #[rhai_fn(name = "!=", return_raw, pure)]
    pub fn not_equals(
        ctx: NativeCallContext,
        map: &mut Map,
        map2: Map,
    ) -> Result<Dynamic, Box<EvalAltResult>> {
        equals(ctx, map, map2).map(|r| (!r.as_bool().unwrap()).into())
    }

    #[cfg(not(feature = "no_index"))]
    pub mod indexing {
        #[rhai_fn(pure)]
        pub fn keys(map: &mut Map) -> Array {
            map.iter().map(|(k, _)| k.clone().into()).collect()
        }
        #[rhai_fn(pure)]
        pub fn values(map: &mut Map) -> Array {
            map.iter().map(|(_, v)| v.clone()).collect()
        }
    }
}
