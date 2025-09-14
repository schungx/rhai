use std::{
    env,
    fs::File,
    io::{Read, Write},
};

fn main() {
    // Tell Cargo that if the given environment variable changes, to rerun this build script.
    println!("cargo:rerun-if-changed=build.template");
    println!("cargo:rerun-if-env-changed=RHAI_AHASH_SEED");
    println!("cargo:rerun-if-env-changed=RHAI_HASHING_SEED");
    let mut contents = String::new();

    File::open("build.template")
        .expect("cannot open `build.template`")
        .read_to_string(&mut contents)
        .expect("cannot read from `build.template`");

    let seed = env::var("RHAI_HASHING_SEED")
        .or_else(|_| env::var("RHAI_AHASH_SEED"))
        .map_or_else(|_| "None".into(), |s| format!("Some({s})"));

    contents = contents.replace("{{HASHING_SEED}}", &seed);

    File::create("src/config/hashing_env.rs")
        .expect("cannot create `config.rs`")
        .write_all(contents.as_bytes())
        .expect("cannot write to `config/hashing_env.rs`");
}
