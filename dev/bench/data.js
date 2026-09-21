window.BENCHMARK_DATA = {
  "lastUpdate": 1789979447320,
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
      },
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
          "id": "1fc8c96a9721db8aa5449b531c9e319806ea7a26",
          "message": "Fix bug in VM and accept call/curry methods anywhere in a chain.",
          "timestamp": "2026-09-20T18:29:23+08:00",
          "tree_id": "a0fc6f7b858a71ccfb15842dbfaf4a13f35753e8",
          "url": "https://github.com/schungx/rhai/commit/1fc8c96a9721db8aa5449b531c9e319806ea7a26"
        },
        "date": 1789900377973,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 361768.38,
            "range": "± 7735.52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 38.08,
            "range": "± 0.42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 101.79,
            "range": "± 2.09",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 553.32,
            "range": "± 31.34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1022.62,
            "range": "± 19.14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1084.9,
            "range": "± 17.86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5441146.7,
            "range": "± 232581.24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 400.64,
            "range": "± 7.45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 437.94,
            "range": "± 70.7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10215.45,
            "range": "± 349.82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8714.31,
            "range": "± 132.02",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10590.55,
            "range": "± 152.35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 130.76,
            "range": "± 1.74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 195.93,
            "range": "± 4.21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 78.77,
            "range": "± 1.72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 79.02,
            "range": "± 2.27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 78.55,
            "range": "± 1.76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 966016.9,
            "range": "± 33497.82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1885319.2,
            "range": "± 100155.42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1562876.7,
            "range": "± 25652.71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10696.62,
            "range": "± 116.85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4644.49,
            "range": "± 80.83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1255.24,
            "range": "± 30.69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1277.88,
            "range": "± 9.93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 289.4,
            "range": "± 4.43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 331.89,
            "range": "± 15.33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 718.96,
            "range": "± 15.9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 734.57,
            "range": "± 16.33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 221.54,
            "range": "± 5.98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 297.91,
            "range": "± 3.67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 174.33,
            "range": "± 2.98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 173.98,
            "range": "± 2.67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 207.8,
            "range": "± 2.53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 338.25,
            "range": "± 3.43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 367.47,
            "range": "± 10.53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 388.31,
            "range": "± 7.64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 181293.21,
            "range": "± 136235.8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 267568.96,
            "range": "± 1901.37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 265968.8,
            "range": "± 2800.9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 12124476.5,
            "range": "± 92663.69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1953.71,
            "range": "± 31.77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8331.27,
            "range": "± 163.94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3136.51,
            "range": "± 43.65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 11023.12,
            "range": "± 190.02",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9892.99,
            "range": "± 123.61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22936.61,
            "range": "± 794.61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1836.75,
            "range": "± 31.94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 319.08,
            "range": "± 4.39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 971333.5,
            "range": "± 15865.06",
            "unit": "ns/iter"
          }
        ]
      },
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
          "id": "ad1d2aef9851c0dcf857a3cafbc798739106a7d7",
          "message": "Fix bug in VM: is_shared",
          "timestamp": "2026-09-20T18:57:52+08:00",
          "tree_id": "eaa0493c30198689babbd1621cd6a0d9b7b4ec70",
          "url": "https://github.com/schungx/rhai/commit/ad1d2aef9851c0dcf857a3cafbc798739106a7d7"
        },
        "date": 1789902101687,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 363815.64,
            "range": "± 13712.58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 38.34,
            "range": "± 13.38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 102.26,
            "range": "± 2.36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 569.28,
            "range": "± 11.67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 989.02,
            "range": "± 28.1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1038.05,
            "range": "± 35.23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5563057.4,
            "range": "± 88540.11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 391.29,
            "range": "± 15.41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 427.07,
            "range": "± 13.01",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10346.71,
            "range": "± 391.19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8841.86,
            "range": "± 268.35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10931.28,
            "range": "± 567.81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 130.5,
            "range": "± 2.16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 194.43,
            "range": "± 2.45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 78.51,
            "range": "± 1.52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 79,
            "range": "± 2.95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 78.47,
            "range": "± 1.51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 961284.1,
            "range": "± 12992.61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1873648.6,
            "range": "± 29218.06",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1544231.5,
            "range": "± 14237.21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10938.35,
            "range": "± 118.18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4577.42,
            "range": "± 80.73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1260.05,
            "range": "± 19.78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1301.69,
            "range": "± 24.52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 291.81,
            "range": "± 52.93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 363.99,
            "range": "± 6.2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 711.9,
            "range": "± 29.49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 735.59,
            "range": "± 29.25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 237.65,
            "range": "± 6.73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 300.81,
            "range": "± 5.01",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 176.68,
            "range": "± 3.92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 176.13,
            "range": "± 3.65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 205.95,
            "range": "± 6.42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 334.1,
            "range": "± 13.06",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 364.17,
            "range": "± 14.35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 370.03,
            "range": "± 10.25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 182780.16,
            "range": "± 3018.28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 275300.39,
            "range": "± 7762.41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 270465.17,
            "range": "± 7014.7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 12266837.1,
            "range": "± 257082.23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1898.78,
            "range": "± 37.88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8314.4,
            "range": "± 288.49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3103.8,
            "range": "± 81.66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 11239.82,
            "range": "± 417.35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9917.36,
            "range": "± 209.33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22784.8,
            "range": "± 420.58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1854.09,
            "range": "± 38.87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 284.09,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1007721.1,
            "range": "± 20775.17",
            "unit": "ns/iter"
          }
        ]
      },
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
          "id": "e92aeef1814ac35be542f713094451408f971565",
          "message": "Fix bug in VM: is_shared",
          "timestamp": "2026-09-20T19:06:48+08:00",
          "tree_id": "c848546d23103f2da2548260c2938023a191fe93",
          "url": "https://github.com/schungx/rhai/commit/e92aeef1814ac35be542f713094451408f971565"
        },
        "date": 1789902629181,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 361866.06,
            "range": "± 6770.08",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 42.42,
            "range": "± 0.42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 108.71,
            "range": "± 1.38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 524.83,
            "range": "± 12.74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1112.13,
            "range": "± 18.87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1145.01,
            "range": "± 28.58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5785597.8,
            "range": "± 73461.96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 433.19,
            "range": "± 6.41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 460.09,
            "range": "± 7.75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10425.44,
            "range": "± 135.2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 9021.31,
            "range": "± 84.52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 11684.86,
            "range": "± 114.61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 149.09,
            "range": "± 8.27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 216.34,
            "range": "± 8.29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 90.73,
            "range": "± 2.3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 90.88,
            "range": "± 1.94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 91.1,
            "range": "± 2.2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1160409.05,
            "range": "± 24649.22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2113779.7,
            "range": "± 75229.64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1728331.6,
            "range": "± 22689.32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 12835.49,
            "range": "± 144.88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 5337.3,
            "range": "± 63.81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1296.02,
            "range": "± 10.84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1347.86,
            "range": "± 21.31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 335.91,
            "range": "± 5.15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 374.72,
            "range": "± 1.83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 793.77,
            "range": "± 14.4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 779.16,
            "range": "± 14.03",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 248.1,
            "range": "± 4.65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 330.82,
            "range": "± 36.98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 197.36,
            "range": "± 6.09",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 192.41,
            "range": "± 7.03",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 222.47,
            "range": "± 3.43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 308.96,
            "range": "± 4.01",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 368.15,
            "range": "± 9.89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 379.22,
            "range": "± 8.26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 211012.23,
            "range": "± 2376.52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 329441.55,
            "range": "± 6202.92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 324626.2,
            "range": "± 9477.2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 13699926.2,
            "range": "± 61223.99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1960.36,
            "range": "± 24.57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8626.06,
            "range": "± 114.25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3036.11,
            "range": "± 32.79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 11133.28,
            "range": "± 143.03",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 10165.16,
            "range": "± 109.45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 21787.03,
            "range": "± 259.32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1906.3,
            "range": "± 17.85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 315.45,
            "range": "± 5.75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1141546.5,
            "range": "± 10139.36",
            "unit": "ns/iter"
          }
        ]
      },
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
          "id": "085e2139136c5b71c89dd8cd2325a17b55c5b7d4",
          "message": "Lower NOOP instead of fragment.",
          "timestamp": "2026-09-21T16:26:40+08:00",
          "tree_id": "d86b0c6557d7dabbbe6fa37637ae3b9889ec9233",
          "url": "https://github.com/schungx/rhai/commit/085e2139136c5b71c89dd8cd2325a17b55c5b7d4"
        },
        "date": 1789979441753,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 284386.82,
            "range": "± 3696.4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 36.99,
            "range": "± 0.55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 94.29,
            "range": "± 3.46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 418.52,
            "range": "± 6.31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 848.93,
            "range": "± 11.13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 870.39,
            "range": "± 13.25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4440946.7,
            "range": "± 446048.13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 341.57,
            "range": "± 4.85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 364.66,
            "range": "± 7.78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 8071.11,
            "range": "± 66.64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 7066.28,
            "range": "± 81.82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 9100.45,
            "range": "± 74.51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 115.37,
            "range": "± 2.35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 167.3,
            "range": "± 2.96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 70.5,
            "range": "± 1.52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 70.57,
            "range": "± 1.53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 70.69,
            "range": "± 1.18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 895390.5,
            "range": "± 14166.88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1630596.1,
            "range": "± 10900.2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1339123.4,
            "range": "± 13537.72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 9558.74,
            "range": "± 70.45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 3953.96,
            "range": "± 115.29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1031.87,
            "range": "± 19.21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1075.45,
            "range": "± 104.19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 241.99,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 285.14,
            "range": "± 3.84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 594.25,
            "range": "± 7.02",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 580.27,
            "range": "± 33.84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 191.47,
            "range": "± 4.04",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 251.54,
            "range": "± 3.29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 145.68,
            "range": "± 2.43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 146.32,
            "range": "± 2.36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 169.73,
            "range": "± 1.74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 241.84,
            "range": "± 4.14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 285.26,
            "range": "± 4.93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 279.93,
            "range": "± 6.83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 161232.91,
            "range": "± 2083.11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 250193.27,
            "range": "± 10073.39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 243662.8,
            "range": "± 14143.39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 10165682.4,
            "range": "± 53209.53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1540.87,
            "range": "± 13.95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 6760.66,
            "range": "± 64.8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 2375.51,
            "range": "± 27.29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 8725.12,
            "range": "± 89.99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 7985.81,
            "range": "± 186.33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 17280.79,
            "range": "± 153.22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1490.08,
            "range": "± 22.04",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 253.53,
            "range": "± 5.74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 857344.9,
            "range": "± 5509.44",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}