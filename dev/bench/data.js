window.BENCHMARK_DATA = {
  "lastUpdate": 1789872864940,
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
          "id": "de6c9a8a23b7482845aa1e48e397f924eff588ac",
          "message": "Fix VM bug in call!(fnptr, args...) syntax.",
          "timestamp": "2026-09-20T09:54:54+08:00",
          "tree_id": "915d803f8ed2df1fe6abec79a696753bf80820d7",
          "url": "https://github.com/schungx/rhai/commit/de6c9a8a23b7482845aa1e48e397f924eff588ac"
        },
        "date": 1789872859891,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 360943.21,
            "range": "± 4280.88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 37.97,
            "range": "± 0.72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 101.66,
            "range": "± 1.52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 570.38,
            "range": "± 15.22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1008.42,
            "range": "± 15.30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1025.76,
            "range": "± 8.67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5590701.3,
            "range": "± 47212.82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 375.03,
            "range": "± 4.65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 415.17,
            "range": "± 9.99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10299.23,
            "range": "± 226.04",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8883.77,
            "range": "± 136.00",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10659.66,
            "range": "± 146.42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 128.86,
            "range": "± 1.93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 193.48,
            "range": "± 2.27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 78.08,
            "range": "± 2.33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 78.03,
            "range": "± 2.35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 78.15,
            "range": "± 1.66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 972558.4,
            "range": "± 14851.85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1887639.4,
            "range": "± 22940.78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1554514.4,
            "range": "± 26317.91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10478.22,
            "range": "± 87.70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4563.75,
            "range": "± 79.72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1251.39,
            "range": "± 21.05",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1299.69,
            "range": "± 51.38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 280.32,
            "range": "± 3.27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 383.28,
            "range": "± 6.83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 712.5,
            "range": "± 16.57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 710.79,
            "range": "± 8.00",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 224.98,
            "range": "± 3.98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 300.92,
            "range": "± 6.20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 175.83,
            "range": "± 2.98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 177.36,
            "range": "± 3.93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 203.23,
            "range": "± 1.43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 332.98,
            "range": "± 6.20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 356.85,
            "range": "± 11.12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 401.32,
            "range": "± 5.18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 182945.22,
            "range": "± 7740.71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 262785.33,
            "range": "± 7043.39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 255033.37,
            "range": "± 4360.21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 12168346.1,
            "range": "± 64062.17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1911.23,
            "range": "± 35.28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8374.85,
            "range": "± 128.67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3002.95,
            "range": "± 64.18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 11062.35,
            "range": "± 249.28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9996.34,
            "range": "± 196.95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22568.69,
            "range": "± 362.45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1821.42,
            "range": "± 24.31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 291.62,
            "range": "± 6.23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 971739.4,
            "range": "± 8804.58",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}