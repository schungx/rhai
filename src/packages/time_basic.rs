#![cfg(not(feature = "no_std"))]
use super::logic::{eq, gt, gte, lt, lte, ne};

use crate::def_package;
use crate::result::EvalAltResult;

#[cfg(not(target_arch = "wasm32"))]
use crate::stdlib::time::Instant;

#[cfg(target_arch = "wasm32")]
use instant::Instant;

#[cfg(not(feature = "no_float"))]
use crate::parser::FLOAT;

def_package!(crate:BasicTimePackage:"Basic timing utilities.", lib, {
    // Register date/time functions
    lib.set_fn_0("timestamp", || Ok(Instant::now()));

    lib.set_fn_2(
        "-",
        |ts1: Instant, ts2: Instant| {
            if ts2 > ts1 {
                #[cfg(not(feature = "no_float"))]
                return Ok(-(ts2 - ts1).as_secs_f64());

                #[cfg(feature = "no_float")]
                {
                    let seconds = (ts2 - ts1).as_secs();

                    #[cfg(not(feature = "unchecked"))]
                    if seconds > (MAX_INT as u64) {
                        return Err(Box::new(EvalAltResult::ErrorArithmetic(
                            format!(
                                "Integer overflow for timestamp duration: {}",
                                -(seconds as i64)
                            ),
                            Position::none(),
                        )));
                    }

                    return Ok(-(seconds as INT));
                }
            } else {
                #[cfg(not(feature = "no_float"))]
                return Ok((ts1 - ts2).as_secs_f64());

                #[cfg(feature = "no_float")]
                {
                    let seconds = (ts1 - ts2).as_secs();

                    #[cfg(not(feature = "unchecked"))]
                    if seconds > (MAX_INT as u64) {
                        return Err(Box::new(EvalAltResult::ErrorArithmetic(
                            format!("Integer overflow for timestamp duration: {}", seconds),
                            Position::none(),
                        )));
                    }

                    return Ok(seconds as INT);
                }
            }
        },
    );

    lib.set_fn_2("<", lt::<Instant>);
    lib.set_fn_2("<=", lte::<Instant>);
    lib.set_fn_2(">", gt::<Instant>);
    lib.set_fn_2(">=", gte::<Instant>);
    lib.set_fn_2("==", eq::<Instant>);
    lib.set_fn_2("!=", ne::<Instant>);

    #[cfg(not(feature = "no_float"))]
    fn elapsed (timestamp: &mut Instant) -> Result<FLOAT, Box<EvalAltResult>> {
        Ok(timestamp.elapsed().as_secs_f64())
    }

    #[cfg(feature = "no_float")]
    fn elapsed (timestamp: &mut Instant) -> Result<INT, Box<EvalAltResult>> {
        let seconds = timestamp.elapsed().as_secs();

        #[cfg(not(feature = "unchecked"))]
        if seconds > (MAX_INT as u64) {
            return Err(Box::new(EvalAltResult::ErrorArithmetic(
                format!("Integer overflow for timestamp.elapsed: {}", seconds),
                Position::none(),
            )));
        }

        Ok(seconds as INT)
    }

    lib.set_fn_1_mut("elapsed", elapsed);

    #[cfg(not(feature = "no_object"))]
    lib.set_getter_fn("elapsed", elapsed);
});
