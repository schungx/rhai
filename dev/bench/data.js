window.BENCHMARK_DATA = {
  "lastUpdate": 1662214714514,
  "repoUrl": "https://github.com/schungx/rhai",
  "entries": {
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "702bb9030a8fb7a3605e70a458ad248fde6ec3bf",
          "message": "Make fast operators the default.",
          "timestamp": "2022-09-03T22:07:36+08:00",
          "tree_id": "cde18ae0054f030906ee3574be68b25309d178c2",
          "url": "https://github.com/schungx/rhai/commit/702bb9030a8fb7a3605e70a458ad248fde6ec3bf"
        },
        "date": 1662214707109,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 1004575,
            "range": "± 91872",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 205,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 204,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 897,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1887,
            "range": "± 251",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1966,
            "range": "± 316",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7672026,
            "range": "± 925068",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 687,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 744,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17053,
            "range": "± 1997",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15502,
            "range": "± 713",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 20022,
            "range": "± 1728",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 363,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 579,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 136,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 135,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 136,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2782141,
            "range": "± 240501",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3855967,
            "range": "± 363698",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3373899,
            "range": "± 127214",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 23366,
            "range": "± 1150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9577,
            "range": "± 2871",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2922,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2978,
            "range": "± 247",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 615,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 679,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1191,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1127,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 687,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 880,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 448,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 443,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 359,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 499,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 604,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 574,
            "range": "± 206",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 454050,
            "range": "± 20230",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 554727,
            "range": "± 27049",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 545537,
            "range": "± 36558",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 20593316,
            "range": "± 958434",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3454,
            "range": "± 273",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14508,
            "range": "± 1600",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5321,
            "range": "± 257",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18292,
            "range": "± 1616",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16687,
            "range": "± 2026",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 40991,
            "range": "± 2079",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3523,
            "range": "± 408",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 697,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2053519,
            "range": "± 157914",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}