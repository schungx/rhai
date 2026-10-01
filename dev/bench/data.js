window.BENCHMARK_DATA = {
  "lastUpdate": 1790818167381,
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
          "id": "e211101dc8319f7abe5aefe42a45ce4c81e218cd",
          "message": "Regenerate Golden artifact",
          "timestamp": "2026-09-21T17:16:43+08:00",
          "tree_id": "a3b881dd2ae0a133b0fdd51300aebe0b127f06fd",
          "url": "https://github.com/schungx/rhai/commit/e211101dc8319f7abe5aefe42a45ce4c81e218cd"
        },
        "date": 1789982492176,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 319919.25,
            "range": "± 7193.74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 34.52,
            "range": "± 1.93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 90.5,
            "range": "± 3.05",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 441.98,
            "range": "± 12.78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 874.1,
            "range": "± 36.65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 910.27,
            "range": "± 23.41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4490191.55,
            "range": "± 95171.07",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 352.6,
            "range": "± 11.75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 376.76,
            "range": "± 10.05",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9021.94,
            "range": "± 252.21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 7758.16,
            "range": "± 324.08",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 9177.44,
            "range": "± 203.91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 123.68,
            "range": "± 3.96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 177.65,
            "range": "± 6.92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 76.36,
            "range": "± 2.51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 76.29,
            "range": "± 2.19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 76.26,
            "range": "± 2.24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 951169.95,
            "range": "± 33011.38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1752575.35,
            "range": "± 47779.55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1482009.8,
            "range": "± 43606.64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 9411.58,
            "range": "± 315.94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 3731.27,
            "range": "± 77.88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1073.95,
            "range": "± 24.61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1129.45,
            "range": "± 45.25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 238.61,
            "range": "± 5.98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 281.45,
            "range": "± 10.57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 580.3,
            "range": "± 19.71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 581.75,
            "range": "± 22.01",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 191.98,
            "range": "± 25.73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 254.49,
            "range": "± 11.72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 146.98,
            "range": "± 9.29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 145.62,
            "range": "± 18.43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 158.57,
            "range": "± 25.21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 253.98,
            "range": "± 39.6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 288.42,
            "range": "± 88.48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 313.24,
            "range": "± 111.48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 150746.16,
            "range": "± 6676.06",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 217231.08,
            "range": "± 5572.96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 209251.69,
            "range": "± 4916.91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 9966620.05,
            "range": "± 136609.24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1701,
            "range": "± 80.33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 7341.33,
            "range": "± 238.9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 2697.47,
            "range": "± 45.06",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 9683.46,
            "range": "± 310.73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 8836.25,
            "range": "± 347.58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 20166.02,
            "range": "± 676.05",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1625.19,
            "range": "± 60.27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 238.87,
            "range": "± 5.66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 730342.3,
            "range": "± 26546.42",
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
          "id": "8a0f5ed1bc3ef8d62fc2090cbb567a617ffa3d79",
          "message": "Fix missing verify on switch statement constants.",
          "timestamp": "2026-09-21T17:25:19+08:00",
          "tree_id": "955bbf717e5ab463ea9c92be38ac1981d80bd8e7",
          "url": "https://github.com/schungx/rhai/commit/8a0f5ed1bc3ef8d62fc2090cbb567a617ffa3d79"
        },
        "date": 1789983128617,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 366443.91,
            "range": "± 5943.18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 38.08,
            "range": "± 0.41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 103.66,
            "range": "± 2.1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 548.4,
            "range": "± 8.24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1029.07,
            "range": "± 16.4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1078.92,
            "range": "± 21.92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5417290.2,
            "range": "± 174116.83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 428.09,
            "range": "± 7.63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 443.57,
            "range": "± 7.11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10191.11,
            "range": "± 272.62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8579.46,
            "range": "± 119.15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10651.54,
            "range": "± 3279.1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 129.66,
            "range": "± 1.7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 193.08,
            "range": "± 2.3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 78.23,
            "range": "± 1.59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 78.02,
            "range": "± 12.69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 77.95,
            "range": "± 1.26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1246571.95,
            "range": "± 52151.26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1934125.1,
            "range": "± 16377.87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1572042.2,
            "range": "± 25674.26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 11174.07,
            "range": "± 80.76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4975.57,
            "range": "± 84.09",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1266.29,
            "range": "± 16.19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1431.92,
            "range": "± 18.76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 290.81,
            "range": "± 3.8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 376.58,
            "range": "± 2.83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 687.48,
            "range": "± 9.42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 694.96,
            "range": "± 10.56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 214.05,
            "range": "± 3.9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 297.15,
            "range": "± 3.29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 175.42,
            "range": "± 17.84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 175.44,
            "range": "± 3.31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 207.28,
            "range": "± 2.26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 304.85,
            "range": "± 5.23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 379.98,
            "range": "± 11.92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 386.05,
            "range": "± 3.35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 171281.65,
            "range": "± 4143.24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 264373.62,
            "range": "± 2274.45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 260324.07,
            "range": "± 20560.61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11994553.9,
            "range": "± 79546.2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1925.99,
            "range": "± 44.35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8394.36,
            "range": "± 148.99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 2976.63,
            "range": "± 39.28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 11076.72,
            "range": "± 344.39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9942.35,
            "range": "± 250.52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 23084.58,
            "range": "± 490.12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1896.85,
            "range": "± 25.31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 294.55,
            "range": "± 3.34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 960578.9,
            "range": "± 20869.56",
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
          "id": "5733a2314d436895de57dd679d1280f51ce577bc",
          "message": "Speed up operator calls by directly calling exec_native_fn_call",
          "timestamp": "2026-09-27T17:02:03+08:00",
          "tree_id": "757c230b1f94ac47838a7416e44fe42628f2a95b",
          "url": "https://github.com/schungx/rhai/commit/5733a2314d436895de57dd679d1280f51ce577bc"
        },
        "date": 1790499928391,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 333465.94,
            "range": "± 3843.49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 21.39,
            "range": "± 0.2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 62.81,
            "range": "± 1.29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 450.32,
            "range": "± 4.53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 857.22,
            "range": "± 10.27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 875.83,
            "range": "± 12.2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4772263.9,
            "range": "± 83387",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 324.09,
            "range": "± 2.97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 357.08,
            "range": "± 5.17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 8858.68,
            "range": "± 1048.16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 7437.87,
            "range": "± 157.55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 9266.79,
            "range": "± 160.43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 112.57,
            "range": "± 1.45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 160.78,
            "range": "± 2.78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 69.3,
            "range": "± 0.85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 69.32,
            "range": "± 1.27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 69.63,
            "range": "± 1.24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 996975.8,
            "range": "± 191057.5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1670312.1,
            "range": "± 17005.11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1368283,
            "range": "± 12476.78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 9258.21,
            "range": "± 2945.23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 3658.77,
            "range": "± 35.74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1054.95,
            "range": "± 7.96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1092.61,
            "range": "± 21.69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 263.29,
            "range": "± 2.52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 305.91,
            "range": "± 10.28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 691.51,
            "range": "± 9.15",
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
          "id": "62a3af2cd038be472f363954e12ea50910f8af72",
          "message": "Speed up operator calls by directly calling exec_native_fn_call",
          "timestamp": "2026-09-27T17:20:54+08:00",
          "tree_id": "24fd6c6d872e2cb545fa9578b4a0ec152ad7f383",
          "url": "https://github.com/schungx/rhai/commit/62a3af2cd038be472f363954e12ea50910f8af72"
        },
        "date": 1790501057315,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 359173.62,
            "range": "± 4553.78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 24.29,
            "range": "± 0.22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 71.9,
            "range": "± 0.62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 513.13,
            "range": "± 6.8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1015.51,
            "range": "± 16.4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1040.44,
            "range": "± 15.56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5648255.2,
            "range": "± 33380.8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 380.52,
            "range": "± 5.72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 431.61,
            "range": "± 6.39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10172.31,
            "range": "± 183.54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8739.55,
            "range": "± 220.49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10884.27,
            "range": "± 190.76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 132.46,
            "range": "± 77.74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 190.58,
            "range": "± 3.06",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 78.94,
            "range": "± 2.68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 78.83,
            "range": "± 1.51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 78.58,
            "range": "± 2.14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1063809.2,
            "range": "± 27712.07",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1878481.7,
            "range": "± 16571.29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1547997.75,
            "range": "± 29148.82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10788.26,
            "range": "± 103.49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4583.83,
            "range": "± 130.57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1302.73,
            "range": "± 34.29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1357.76,
            "range": "± 23.36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 290.52,
            "range": "± 5.83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 356.38,
            "range": "± 5.2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 789.32,
            "range": "± 10.81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 748.77,
            "range": "± 21.04",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 219.85,
            "range": "± 3.40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 297.12,
            "range": "± 4.01",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 175.05,
            "range": "± 3.79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 174.46,
            "range": "± 3.07",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 216.89,
            "range": "± 1.38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 319.83,
            "range": "± 7.64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 352.9,
            "range": "± 4.21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 382.29,
            "range": "± 8.20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 179780.04,
            "range": "± 3571.67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 265496.22,
            "range": "± 3267.62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 256522.82,
            "range": "± 3071.79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11967808.9,
            "range": "± 55185.78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1876.45,
            "range": "± 16.05",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8223.72,
            "range": "± 86.64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 2908.91,
            "range": "± 28.67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10975.64,
            "range": "± 132.03",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9901.61,
            "range": "± 164.97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22034.48,
            "range": "± 506.49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1781.31,
            "range": "± 26.03",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 277.2,
            "range": "± 5.93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 939977.3,
            "range": "± 6706.44",
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
          "id": "fa352879d56884eef7faa3aaa6c8282ff3b25e8b",
          "message": "Speed up operator calls by directly calling exec_native_fn_call",
          "timestamp": "2026-09-27T17:35:16+08:00",
          "tree_id": "24fd6c6d872e2cb545fa9578b4a0ec152ad7f383",
          "url": "https://github.com/schungx/rhai/commit/fa352879d56884eef7faa3aaa6c8282ff3b25e8b"
        },
        "date": 1790501905413,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 286146.98,
            "range": "± 4708.95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 22.53,
            "range": "± 0.62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 65.13,
            "range": "± 1.16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 380.91,
            "range": "± 9.2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 874.58,
            "range": "± 15.05",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 900.44,
            "range": "± 10.36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4485187.1,
            "range": "± 36861.18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 344.21,
            "range": "± 5.09",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 369.05,
            "range": "± 6.07",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 7995.78,
            "range": "± 98.2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 6890.67,
            "range": "± 68.99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 8974.07,
            "range": "± 131.79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 114.33,
            "range": "± 1.77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 166.23,
            "range": "± 3.64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 70.93,
            "range": "± 0.7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 71.47,
            "range": "± 1.45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 71.49,
            "range": "± 0.93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1151321,
            "range": "± 29352.62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1630153.8,
            "range": "± 27390.17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1340045,
            "range": "± 32542.89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 9847.77,
            "range": "± 92.99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 3924.61,
            "range": "± 54.58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 995.85,
            "range": "± 15.46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1039.33,
            "range": "± 10.64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 262.06,
            "range": "± 4.41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 292.05,
            "range": "± 6.39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 636.41,
            "range": "± 11.6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 611.83,
            "range": "± 8.82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 189.61,
            "range": "± 5.94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 247.63,
            "range": "± 3.8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 148.26,
            "range": "± 3.63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 147,
            "range": "± 3.25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 174.21,
            "range": "± 4.13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 247.89,
            "range": "± 3.53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 335.09,
            "range": "± 4.01",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 275.11,
            "range": "± 5.8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 160783.74,
            "range": "± 2968.07",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 233610.47,
            "range": "± 1294.61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 224605.92,
            "range": "± 4445.84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 10918363.7,
            "range": "± 53012.37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1489.33,
            "range": "± 17.1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 6650.6,
            "range": "± 62.65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 2409.48,
            "range": "± 27.51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 8553.04,
            "range": "± 115.33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 7814.25,
            "range": "± 128.38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 16824.54,
            "range": "± 181.95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1446.1,
            "range": "± 19.31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 255.01,
            "range": "± 4.29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 862728.8,
            "range": "± 13423.73",
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
          "id": "a6241621b3fc15a151a2e41a0f60e04943bd79ee",
          "message": "Speed up operator calls by directly calling exec_native_fn_call",
          "timestamp": "2026-09-27T17:37:12+08:00",
          "tree_id": "eac1176d55041bf0900ca883d0de7a3e6868b0b8",
          "url": "https://github.com/schungx/rhai/commit/a6241621b3fc15a151a2e41a0f60e04943bd79ee"
        },
        "date": 1790502071196,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 365009.75,
            "range": "± 5327.35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 24.26,
            "range": "± 0.1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 69.84,
            "range": "± 0.87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 525.63,
            "range": "± 204.32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1008.62,
            "range": "± 21.7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1036.9,
            "range": "± 18.15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5541810.25,
            "range": "± 317534.53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 381.23,
            "range": "± 4.89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 413.79,
            "range": "± 8.33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9929.54,
            "range": "± 215.86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8494.22,
            "range": "± 167.9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10473.42,
            "range": "± 94.74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 131.58,
            "range": "± 1.7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 190.58,
            "range": "± 2.45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 78.86,
            "range": "± 2.13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 78.92,
            "range": "± 2.18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 78.73,
            "range": "± 1.85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1063867.9,
            "range": "± 12539.37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1861721.6,
            "range": "± 18205.99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1524857,
            "range": "± 33825.82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 11164.36,
            "range": "± 58.42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4746.03,
            "range": "± 92.28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1208.02,
            "range": "± 14.34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1311.82,
            "range": "± 21.35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 284.01,
            "range": "± 6.5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 329.86,
            "range": "± 13.59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 709.29,
            "range": "± 11.57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 718.68,
            "range": "± 28.32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 216.69,
            "range": "± 3.41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 294.68,
            "range": "± 4.44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 172.57,
            "range": "± 2.27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 172.66,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 204.68,
            "range": "± 1.18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 331.49,
            "range": "± 5.75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 356.88,
            "range": "± 5.19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 390.37,
            "range": "± 7.04",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 199366.98,
            "range": "± 2977.11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 287867.3,
            "range": "± 3925.59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 276593.5,
            "range": "± 2796.64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 12654601.9,
            "range": "± 93077.24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1908.33,
            "range": "± 26.83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8258.37,
            "range": "± 91.3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 2973.44,
            "range": "± 43.41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10852.94,
            "range": "± 127.15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9915.3,
            "range": "± 849.49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22486.06,
            "range": "± 314.71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1861.5,
            "range": "± 36.09",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 286.54,
            "range": "± 14.31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 999050.15,
            "range": "± 11574.58",
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
          "id": "f7d3ec5d84d4db0c94ef3d30a7086dc611dbc20a",
          "message": "Fix feature gate",
          "timestamp": "2026-09-30T00:22:08+08:00",
          "tree_id": "db8ba762c52bfbe5b357002b69736d71f3177fbd",
          "url": "https://github.com/schungx/rhai/commit/f7d3ec5d84d4db0c94ef3d30a7086dc611dbc20a"
        },
        "date": 1790699137408,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 281872.51,
            "range": "± 3094.24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 23.52,
            "range": "± 0.67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 67.04,
            "range": "± 6.56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 388.65,
            "range": "± 6.17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 867.82,
            "range": "± 6.45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 890.81,
            "range": "± 41.31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4677762.7,
            "range": "± 45242.27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 342.4,
            "range": "± 19.33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 368.56,
            "range": "± 6.53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 8111.22,
            "range": "± 49.9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 6871.22,
            "range": "± 65.47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 9001.8,
            "range": "± 94.32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 120.11,
            "range": "± 5.23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 171.23,
            "range": "± 4.2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 72.28,
            "range": "± 4.72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 71.4,
            "range": "± 2.81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 70.64,
            "range": "± 1.32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1254159.6,
            "range": "± 88401.46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1630127.5,
            "range": "± 20865.41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1343771.2,
            "range": "± 18748.46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10267.33,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4274.08,
            "range": "± 98.77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1007.87,
            "range": "± 13.45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1032.54,
            "range": "± 22.77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 258.1,
            "range": "± 5.46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 288.86,
            "range": "± 6.84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 609.65,
            "range": "± 6.15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 597.03,
            "range": "± 9.33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 189.28,
            "range": "± 5.11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 250.82,
            "range": "± 3.65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 147.12,
            "range": "± 3.96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 148.25,
            "range": "± 2.97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 170.75,
            "range": "± 2.51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 248.73,
            "range": "± 2.44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 286.79,
            "range": "± 5.01",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 285.98,
            "range": "± 14.64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 179158.91,
            "range": "± 3270.15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 250273.84,
            "range": "± 3416.46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 237902.01,
            "range": "± 1341.92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 10809167.8,
            "range": "± 89505.14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1482.79,
            "range": "± 14.96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 6613.72,
            "range": "± 169.7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 2351.93,
            "range": "± 18.2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 8650.06,
            "range": "± 89.22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 7871.62,
            "range": "± 80.4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 17055.68,
            "range": "± 167.69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1440.72,
            "range": "± 20.73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 232.93,
            "range": "± 4.28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 896748.35,
            "range": "± 13619.69",
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
          "id": "bec41df8acdfffe734f360b9e83245763abea218",
          "message": "Merge branch 'main' of https://github.com/rhaiscript/rhai",
          "timestamp": "2026-09-30T00:24:39+08:00",
          "tree_id": "425cbc40a637c58fa8e0cc6a2a6541dd6d8d94a2",
          "url": "https://github.com/schungx/rhai/commit/bec41df8acdfffe734f360b9e83245763abea218"
        },
        "date": 1790699280668,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 188887.5,
            "range": "± 3432.64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 12.31,
            "range": "± 13.08",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 35.63,
            "range": "± 1.6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 255.21,
            "range": "± 5.33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 560.44,
            "range": "± 19.75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 570.54,
            "range": "± 16.07",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 3035283.17,
            "range": "± 188379.05",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 228.98,
            "range": "± 2.99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 247.42,
            "range": "± 2.36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 5499.23,
            "range": "± 178.01",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 4740.07,
            "range": "± 197.48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 5989.88,
            "range": "± 29.29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 79.06,
            "range": "± 0.5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 118.1,
            "range": "± 4.02",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 50.83,
            "range": "± 0.85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 50.74,
            "range": "± 0.22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 50.99,
            "range": "± 0.38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 660861.8,
            "range": "± 27711.85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1135104.05,
            "range": "± 65151.98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 966922.4,
            "range": "± 11172.35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 6479.16,
            "range": "± 477.98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 2478.24,
            "range": "± 103.17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 702.22,
            "range": "± 33.53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 690.55,
            "range": "± 18.14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 159.21,
            "range": "± 1.71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 177.84,
            "range": "± 5.04",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 354.98,
            "range": "± 8.08",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 373.88,
            "range": "± 17.04",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 125.85,
            "range": "± 1.22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 173.53,
            "range": "± 5.86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 99.49,
            "range": "± 1.04",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 95.17,
            "range": "± 3.46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 114.74,
            "range": "± 1.7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 173.46,
            "range": "± 8.95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 184.3,
            "range": "± 4.43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 198.29,
            "range": "± 3.42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 102221.94,
            "range": "± 3328.01",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 145334.28,
            "range": "± 2516.41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 144861.8,
            "range": "± 115038.13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 6692955.1,
            "range": "± 301319.99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1029.57,
            "range": "± 1346.42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 5171.04,
            "range": "± 4167.02",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 1677.73,
            "range": "± 77.66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 6040.08,
            "range": "± 84.08",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 5420.44,
            "range": "± 265.3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 12604.35,
            "range": "± 1090.66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1044.15,
            "range": "± 93.14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 157.79,
            "range": "± 3.3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 527042.32,
            "range": "± 33479.73",
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
          "id": "025b891788d38e35f250972a92ac18e89b4dc627",
          "message": "Fix links in CHANGELOG",
          "timestamp": "2026-09-30T00:39:51+08:00",
          "tree_id": "aff9efb98519c2839b04bfc54524ded263cda185",
          "url": "https://github.com/schungx/rhai/commit/025b891788d38e35f250972a92ac18e89b4dc627"
        },
        "date": 1790700196916,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 276128.83,
            "range": "± 4359.02",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 24.11,
            "range": "± 0.71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 82.14,
            "range": "± 7.36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 386.96,
            "range": "± 6.97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 870.1,
            "range": "± 10.87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 898.26,
            "range": "± 10.96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4387264.6,
            "range": "± 59795.68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 330.66,
            "range": "± 22.9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 351.98,
            "range": "± 7.67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 8086.04,
            "range": "± 111.5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 7036.66,
            "range": "± 414.49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 8944.65,
            "range": "± 74.28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 114.03,
            "range": "± 1.73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 166.5,
            "range": "± 3.61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 71.21,
            "range": "± 1.38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 71.26,
            "range": "± 2.17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 70.59,
            "range": "± 0.51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1254276.2,
            "range": "± 48027.51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1628400.5,
            "range": "± 26505.56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1332894.8,
            "range": "± 367889.83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10299.92,
            "range": "± 130.09",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4107.82,
            "range": "± 37.86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 988.75,
            "range": "± 12.75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1066.01,
            "range": "± 16.57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 265.53,
            "range": "± 4.31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 292.22,
            "range": "± 7.32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 642.18,
            "range": "± 33.31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 637.01,
            "range": "± 8.86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 189.23,
            "range": "± 4.87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 247.49,
            "range": "± 3.55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 148.52,
            "range": "± 5.43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 149.82,
            "range": "± 3.14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 170.94,
            "range": "± 10.7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 249.27,
            "range": "± 2.92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 299.4,
            "range": "± 3.68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 297.37,
            "range": "± 3.28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 180462,
            "range": "± 3670.04",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 246638.56,
            "range": "± 1147.56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 238355.17,
            "range": "± 2371.41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 10754283.5,
            "range": "± 144076.22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1541.03,
            "range": "± 22.79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 6729.82,
            "range": "± 88.46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 2394.08,
            "range": "± 24.14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 8719.55,
            "range": "± 89.16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 7879.44,
            "range": "± 189.66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 16940.46,
            "range": "± 145.48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1463.01,
            "range": "± 24.99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 237.18,
            "range": "± 4.92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 936935.2,
            "range": "± 9329.98",
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
          "id": "8bd31196553f877f3c266447cf26923a1528bf16",
          "message": "Fix feature gating",
          "timestamp": "2026-09-30T00:42:56+08:00",
          "tree_id": "7280a1c5c2acc8e09a409bc0d4ccac22acddd160",
          "url": "https://github.com/schungx/rhai/commit/8bd31196553f877f3c266447cf26923a1528bf16"
        },
        "date": 1790700400320,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 364165.12,
            "range": "± 5708.93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 23.37,
            "range": "± 0.42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 72.66,
            "range": "± 1.3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 516.6,
            "range": "± 6.6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1000.18,
            "range": "± 22.98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1039.86,
            "range": "± 11.47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5679690.4,
            "range": "± 57936.92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 389.31,
            "range": "± 8.17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 433.41,
            "range": "± 2.49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10130.1,
            "range": "± 201.32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8737.53,
            "range": "± 103.39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10702.66,
            "range": "± 134.71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 132.17,
            "range": "± 12.96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 191.14,
            "range": "± 1.84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 79.69,
            "range": "± 2.37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 79.7,
            "range": "± 2.14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 79.22,
            "range": "± 2.09",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1057009.9,
            "range": "± 12439.22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1862122.3,
            "range": "± 17402.04",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1528757.6,
            "range": "± 26287.99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10665.87,
            "range": "± 89.69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4551.68,
            "range": "± 53.28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1307.99,
            "range": "± 21.93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1338.13,
            "range": "± 45.15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 292.85,
            "range": "± 4.41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 335.62,
            "range": "± 5.54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 696.44,
            "range": "± 10.07",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 719.04,
            "range": "± 7.4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 216.55,
            "range": "± 4.25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 292.7,
            "range": "± 2.82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 173.94,
            "range": "± 2.36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 171.53,
            "range": "± 2.16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 211.49,
            "range": "± 1.09",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 344.04,
            "range": "± 2.91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 370.13,
            "range": "± 4.96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 413.39,
            "range": "± 6.05",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 188101.54,
            "range": "± 2810.42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 280303.67,
            "range": "± 4652.24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 278901.03,
            "range": "± 5416.09",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 13109665.1,
            "range": "± 63178.23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1890.1,
            "range": "± 28.17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8163.1,
            "range": "± 193.78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 2907.66,
            "range": "± 20.04",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10692.33,
            "range": "± 78.4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9802.81,
            "range": "± 100.29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22491.54,
            "range": "± 315.98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1788.83,
            "range": "± 34.1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 287.39,
            "range": "± 6.93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 972771.35,
            "range": "± 12225.23",
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
          "id": "a7d6a34f1fc441d2a459849a39dfb346522c7dca",
          "message": "VM: Revamp loops handling",
          "timestamp": "2026-09-30T14:13:37+08:00",
          "tree_id": "65717b114b2166932607ffaca8551cba319aa2cd",
          "url": "https://github.com/schungx/rhai/commit/a7d6a34f1fc441d2a459849a39dfb346522c7dca"
        },
        "date": 1790749052917,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 366646.36,
            "range": "± 7032.17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 25.71,
            "range": "± 0.41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 75.25,
            "range": "± 1.76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 500.26,
            "range": "± 9.58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1147.47,
            "range": "± 20.69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1177.55,
            "range": "± 27.85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5995218.1,
            "range": "± 52748.12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 445.81,
            "range": "± 9.12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 479.73,
            "range": "± 5.34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10340.98,
            "range": "± 140.03",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8863.79,
            "range": "± 102.03",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 11695.03,
            "range": "± 160.41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 153.83,
            "range": "± 9.21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 226.65,
            "range": "± 6.39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 91.69,
            "range": "± 0.96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 91.62,
            "range": "± 1.23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 91.04,
            "range": "± 0.62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1697575.35,
            "range": "± 110075.75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2143668,
            "range": "± 27230.85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1758525.25,
            "range": "± 44581.28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 13056.08,
            "range": "± 3634.62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 5219.03,
            "range": "± 145.54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1320.8,
            "range": "± 18.09",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1376.57,
            "range": "± 18.92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 333.33,
            "range": "± 4.75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 373.28,
            "range": "± 11.36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 732.91,
            "range": "± 11.13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 795.16,
            "range": "± 7.64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 258.95,
            "range": "± 13.66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 338.44,
            "range": "± 20.11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 206.04,
            "range": "± 8.91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 201.03,
            "range": "± 6.17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 222.46,
            "range": "± 3.65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 335.27,
            "range": "± 4.53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 366.63,
            "range": "± 6.3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 399.91,
            "range": "± 6.94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 231754.96,
            "range": "± 4982.05",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 302380.25,
            "range": "± 1634.26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 291640.08,
            "range": "± 1679.76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 14299556,
            "range": "± 65936.23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1907.48,
            "range": "± 20.54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8664.05,
            "range": "± 65.85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3213.4,
            "range": "± 38.4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 11138.75,
            "range": "± 139.96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 10200.47,
            "range": "± 137.09",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22438.02,
            "range": "± 213.92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1846.43,
            "range": "± 35.39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 289.96,
            "range": "± 5.27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1159998.9,
            "range": "± 16815.58",
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
          "id": "1ea49977e68a1171e37629c594cfd2caa1bd656c",
          "message": "VM: Revamp loops handling",
          "timestamp": "2026-09-30T14:18:34+08:00",
          "tree_id": "d7da0b2fc8a812b287f6eda2e981d353cd6e4a56",
          "url": "https://github.com/schungx/rhai/commit/1ea49977e68a1171e37629c594cfd2caa1bd656c"
        },
        "date": 1790749346733,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 360925.69,
            "range": "± 11024.43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 24.02,
            "range": "± 0.67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 70.89,
            "range": "± 1.19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 511.81,
            "range": "± 10.57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1003.81,
            "range": "± 18.71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1031.61,
            "range": "± 11.3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5614243.8,
            "range": "± 49591.53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 383.52,
            "range": "± 12.27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 433.73,
            "range": "± 10.33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10212.28,
            "range": "± 163.37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8718.74,
            "range": "± 136.26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10685.69,
            "range": "± 189.75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 130.39,
            "range": "± 1.82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 189.74,
            "range": "± 3.66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 78.62,
            "range": "± 2.29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 79.06,
            "range": "± 1.84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 78.86,
            "range": "± 1.49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1061784.4,
            "range": "± 481847.55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1862594.7,
            "range": "± 15065.29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1539543.3,
            "range": "± 16642.62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10803.3,
            "range": "± 2097.91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4512.91,
            "range": "± 43.07",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1230.48,
            "range": "± 18.1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1287.3,
            "range": "± 29.99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 296.3,
            "range": "± 4.88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 332.06,
            "range": "± 6.06",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 687.16,
            "range": "± 7.66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 701.39,
            "range": "± 9.79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 211.93,
            "range": "± 1.68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 294.51,
            "range": "± 2.49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 175.14,
            "range": "± 2.12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 177.32,
            "range": "± 2.39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 211.05,
            "range": "± 5.07",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 372.7,
            "range": "± 6.34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 347.08,
            "range": "± 2.48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 409.62,
            "range": "± 33.16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 186424.23,
            "range": "± 1646.77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 260736.9,
            "range": "± 3725.93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 256926.2,
            "range": "± 1861.39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 12051285.6,
            "range": "± 49196.76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1935.84,
            "range": "± 27.61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8793.88,
            "range": "± 117.81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3207.04,
            "range": "± 27.11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 11241.05,
            "range": "± 126.06",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 10370.48,
            "range": "± 155.71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 23962.68,
            "range": "± 277.25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1905.25,
            "range": "± 34.69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 316.47,
            "range": "± 10.63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 980187.1,
            "range": "± 18887.69",
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
          "id": "3a3fb5568e647707deb5682fada48ad2e4b6a96b",
          "message": "Improve AGENTS.md and add one specifically for Grain.",
          "timestamp": "2026-09-30T14:20:34+08:00",
          "tree_id": "395845a9685c0904ba8227890423a30900ee6553",
          "url": "https://github.com/schungx/rhai/commit/3a3fb5568e647707deb5682fada48ad2e4b6a96b"
        },
        "date": 1790763278858,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 333213.55,
            "range": "± 7647.78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 21.05,
            "range": "± 0.56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 60.52,
            "range": "± 1.62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 444.66,
            "range": "± 3.42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 842.51,
            "range": "± 4.72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 881.32,
            "range": "± 9.04",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4800839.3,
            "range": "± 55941.74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 320.35,
            "range": "± 2.96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 352.44,
            "range": "± 7.4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 8734.34,
            "range": "± 102.9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 7514.27,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 9248.47,
            "range": "± 211.68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 112.45,
            "range": "± 1.24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 163.47,
            "range": "± 2.57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 69.39,
            "range": "± 1.52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 69.15,
            "range": "± 1.18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 69.74,
            "range": "± 1.04",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 991350.8,
            "range": "± 13391.47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1691305.9,
            "range": "± 58543.36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1383126.8,
            "range": "± 13488.74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 9261.04,
            "range": "± 51.41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 3642.03,
            "range": "± 38.05",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1063.51,
            "range": "± 21.08",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1103.53,
            "range": "± 8.83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 257.04,
            "range": "± 3.81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 297.26,
            "range": "± 1.54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 728.6,
            "range": "± 11.24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 713.22,
            "range": "± 10.6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 180.32,
            "range": "± 1.2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 242.58,
            "range": "± 1.56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 142.44,
            "range": "± 0.96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 137.53,
            "range": "± 1.19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 190.84,
            "range": "± 2.49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 302.19,
            "range": "± 1.82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 331.94,
            "range": "± 2.24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 351.69,
            "range": "± 2.75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 150943.3,
            "range": "± 3275.08",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 219226.67,
            "range": "± 2809.82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 210950.5,
            "range": "± 3689.02",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11324517,
            "range": "± 132757.28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1701.72,
            "range": "± 110.81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 7251.28,
            "range": "± 130.19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 2707.51,
            "range": "± 100.17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 9675.26,
            "range": "± 175.71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 8823.1,
            "range": "± 142.47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 19372.01,
            "range": "± 239.92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1491.19,
            "range": "± 83.73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 226.45,
            "range": "± 89.77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 747881.5,
            "range": "± 18468.94",
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
          "id": "1f17437dd0695fbed365ba50ebfc860ccefb36c9",
          "message": "Revise comments and AGENTS.md",
          "timestamp": "2026-10-01T09:13:47+08:00",
          "tree_id": "a5900102fa70536239c46ecf6d4a748f60f89a8f",
          "url": "https://github.com/schungx/rhai/commit/1f17437dd0695fbed365ba50ebfc860ccefb36c9"
        },
        "date": 1790818162733,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 198720.84,
            "range": "± 5030.15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 12.02,
            "range": "± 1.64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 39.1,
            "range": "± 8.48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 275.4,
            "range": "± 12.78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 598.33,
            "range": "± 55.93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 610.89,
            "range": "± 29.17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 2916774.58,
            "range": "± 197495.23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 237.21,
            "range": "± 56.42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 245.59,
            "range": "± 11.01",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 5743.81,
            "range": "± 244.9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 5030.17,
            "range": "± 125.33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 6264.88,
            "range": "± 212.32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 81.41,
            "range": "± 4.29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 125.08,
            "range": "± 2.69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 53.62,
            "range": "± 2.01",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 53.25,
            "range": "± 2.74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 53.28,
            "range": "± 4.11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 679302.7,
            "range": "± 18517.11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1086439.15,
            "range": "± 46109.49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1055023.65,
            "range": "± 37751.91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 6165.7,
            "range": "± 327.31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 2532.91,
            "range": "± 190.99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 675.71,
            "range": "± 331.02",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 709.17,
            "range": "± 63.84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 156.57,
            "range": "± 1.98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 183.52,
            "range": "± 4.44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 354.63,
            "range": "± 9.89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 399.32,
            "range": "± 20.6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 131.74,
            "range": "± 19.33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 175.98,
            "range": "± 11.93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 97.93,
            "range": "± 2.96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 100.26,
            "range": "± 10.8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 120.57,
            "range": "± 4.64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 184.49,
            "range": "± 3.92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 194.74,
            "range": "± 7.74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 205.87,
            "range": "± 5.96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 106204.2,
            "range": "± 4723.21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 148290.54,
            "range": "± 5915.17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 144674.46,
            "range": "± 5580.22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 6880900.8,
            "range": "± 191267.57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1051.06,
            "range": "± 80.21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 4665.72,
            "range": "± 231.43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 1665.26,
            "range": "± 76.3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 6032.79,
            "range": "± 319.39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 5664.29,
            "range": "± 130.06",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 12774.92,
            "range": "± 196.19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1005.57,
            "range": "± 42.05",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 170.26,
            "range": "± 11.01",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 540278.25,
            "range": "± 9566.48",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}