use std::env;

fn main() {
    let out_dir = env::var_os("OUT_DIR").unwrap();

    // Tell Cargo that if the given environment variable changes, to rerun this build script.
    println!("cargo:rerun-if-changed=build.template");
    println!("cargo:rerun-if-env-changed=RHAI_AHASH_SEED");
    println!("cargo:rerun-if-env-changed=RHAI_HASHING_SEED");

    let mut contents =
        std::fs::read_to_string("build.template").expect("cannot read from `build.template`");

    let seed = env::var("RHAI_HASHING_SEED")
        .or_else(|_| env::var("RHAI_AHASH_SEED"))
        .map_or_else(|_| "None".into(), |s| format!("Some({s})"));

    contents = contents.replace("{{HASHING_SEED}}", &seed);

    let hashing_env_path = std::path::Path::new(&out_dir).join("hashing_env.rs");

    std::fs::write(&hashing_env_path, contents).unwrap_or_else(|error| {
        panic!(
            "cannot write to `{}`: {error:?}",
            hashing_env_path.display()
        )
    });
}
