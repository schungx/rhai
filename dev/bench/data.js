window.BENCHMARK_DATA = {
  "lastUpdate": 1789902107341,
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
      }
    ]
  }
}