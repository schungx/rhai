window.BENCHMARK_DATA = {
  "lastUpdate": 1737361748442,
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
          "id": "a55eac2270a5eab4b9535b422d509c369314ecda",
          "message": "Introduce FuncRegistration API.",
          "timestamp": "2024-01-17T23:09:56+08:00",
          "tree_id": "540cb9b74b8b0faafadedff1122ce4f3f0daf0e1",
          "url": "https://github.com/schungx/rhai/commit/a55eac2270a5eab4b9535b422d509c369314ecda"
        },
        "date": 1705504428471,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 377422,
            "range": "± 7302",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 95,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 577,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1080,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1086,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4847862,
            "range": "± 276169",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 443,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 465,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10036,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8392,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10806,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 139,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 197,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 86,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 85,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1075889,
            "range": "± 12217",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2062221,
            "range": "± 90327",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1676771,
            "range": "± 44099",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 11871,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 5059,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1261,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1282,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 300,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 333,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 734,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 654,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 248,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 304,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 182,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 192,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 218,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 329,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 355,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 381,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 173807,
            "range": "± 3661",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 325952,
            "range": "± 5039",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 295772,
            "range": "± 3967",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 12514145,
            "range": "± 69307",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1972,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 7851,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3084,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10532,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9550,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22590,
            "range": "± 390",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1775,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 309,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1050442,
            "range": "± 8866",
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
          "id": "9e90a94c9c356d9510bf2a6d3b28e1ef4a5604ee",
          "message": "Fix builds.",
          "timestamp": "2024-01-17T23:38:03+08:00",
          "tree_id": "6e58e36564d1dada071d29d5415e0ed8668b619f",
          "url": "https://github.com/schungx/rhai/commit/9e90a94c9c356d9510bf2a6d3b28e1ef4a5604ee"
        },
        "date": 1705506101165,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 375135,
            "range": "± 13187",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 97,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 571,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1060,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1049,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4864192,
            "range": "± 182390",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 412,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 462,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10003,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8603,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10885,
            "range": "± 195",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 135,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 194,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 84,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 83,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 85,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1114616,
            "range": "± 63824",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1926123,
            "range": "± 24393",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1602976,
            "range": "± 19022",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 11724,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4867,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1319,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1362,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 320,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 389,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 720,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 689,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 256,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 308,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 191,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 193,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 217,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 351,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 352,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 408,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 186277,
            "range": "± 2937",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 366921,
            "range": "± 6548",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 333778,
            "range": "± 12711",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 12311061,
            "range": "± 91848",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1919,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 7941,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3090,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10540,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9634,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22095,
            "range": "± 383",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1776,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 307,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1111913,
            "range": "± 39227",
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
          "id": "ef9e7e5f2dadddaad04a0fa810475ad184e3d099",
          "message": "Fine tuned allocations.",
          "timestamp": "2024-01-18T10:57:51+08:00",
          "tree_id": "91ba895390e6b4dc21269836d8c70c943998dd11",
          "url": "https://github.com/schungx/rhai/commit/ef9e7e5f2dadddaad04a0fa810475ad184e3d099"
        },
        "date": 1705547161904,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 373990,
            "range": "± 15127",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 97,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 600,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1053,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1063,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5078140,
            "range": "± 114246",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 448,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 428,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9834,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8381,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10798,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 138,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 194,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 84,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 83,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 85,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1294626,
            "range": "± 48126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2137993,
            "range": "± 54529",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1719040,
            "range": "± 44085",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 11346,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4784,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1289,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1323,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 287,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 343,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 727,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 723,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 243,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 303,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 189,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 184,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 204,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 321,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 357,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 411,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 174627,
            "range": "± 2976",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 314302,
            "range": "± 3859",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 278790,
            "range": "± 3563",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11987172,
            "range": "± 39070",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1931,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8243,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3157,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10810,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9900,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22995,
            "range": "± 591",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1813,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 325,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1118495,
            "range": "± 32950",
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
          "id": "86fc7545a6d647af71b845e46b3cd60ad660ef05",
          "message": "Remove FuncInfo.",
          "timestamp": "2024-01-19T17:03:23+08:00",
          "tree_id": "05cc177c951a2dc4b15b0afe1099f7b5527f23ef",
          "url": "https://github.com/schungx/rhai/commit/86fc7545a6d647af71b845e46b3cd60ad660ef05"
        },
        "date": 1705655257119,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 378409,
            "range": "± 10526",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 99,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 552,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1076,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1066,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5039045,
            "range": "± 57964",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 466,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 460,
            "range": "± 215",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10278,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8620,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10676,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 187,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 231,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 97,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 97,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 97,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1312736,
            "range": "± 51516",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2094911,
            "range": "± 158089",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1670890,
            "range": "± 18827",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 11963,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 5364,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1330,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1378,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 374,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 371,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 749,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 679,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 260,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 308,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 190,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 184,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 271,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 364,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 394,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 437,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 167791,
            "range": "± 3050",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 334394,
            "range": "± 4147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 319996,
            "range": "± 5262",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11890007,
            "range": "± 66438",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1938,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 7936,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3071,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10528,
            "range": "± 265",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9591,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22512,
            "range": "± 391",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1787,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 324,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1060999,
            "range": "± 12162",
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
          "id": "c65298a4542bc631f5e8786d70acad28f5e9519e",
          "message": "Fix builds.",
          "timestamp": "2024-01-19T17:17:12+08:00",
          "tree_id": "8df53d72b6772dde4d34993ecea706483fa3638c",
          "url": "https://github.com/schungx/rhai/commit/c65298a4542bc631f5e8786d70acad28f5e9519e"
        },
        "date": 1705656072718,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 377113,
            "range": "± 15666",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 99,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 548,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1062,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1111,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5729727,
            "range": "± 523183",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 460,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 439,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10159,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8449,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10757,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 144,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 195,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 84,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 84,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 85,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1299107,
            "range": "± 48501",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2054460,
            "range": "± 36635",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1660710,
            "range": "± 68479",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 11623,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 5098,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1310,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1362,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 305,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 346,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 781,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 713,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 244,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 313,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 191,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 188,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 227,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 318,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 354,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 395,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 202914,
            "range": "± 4922",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 345432,
            "range": "± 5242",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 321295,
            "range": "± 5788",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 12670386,
            "range": "± 943143",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1942,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 7958,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3089,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10518,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9601,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22574,
            "range": "± 397",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1771,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 325,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1069057,
            "range": "± 10420",
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
          "id": "f4751670ba3f22a4f83ed122aaa2e658aad93107",
          "message": "Fix Dynamic hashing.",
          "timestamp": "2024-01-25T12:48:39+08:00",
          "tree_id": "5dbf668017d9cbbc1c8d92ec2b2474ffb1317d77",
          "url": "https://github.com/schungx/rhai/commit/f4751670ba3f22a4f83ed122aaa2e658aad93107"
        },
        "date": 1706158344848,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 370723,
            "range": "± 15569",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 95,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 569,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1068,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1049,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5294740,
            "range": "± 48938",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 445,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 466,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10050,
            "range": "± 944",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8474,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10676,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 136,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 195,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 83,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 84,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 85,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1115082,
            "range": "± 11624",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1906353,
            "range": "± 14505",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1632431,
            "range": "± 17697",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 11329,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4740,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1251,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1261,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 302,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 324,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 703,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 746,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 250,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 307,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 191,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 189,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 214,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 328,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 361,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 382,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 197505,
            "range": "± 7739",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 322932,
            "range": "± 4164",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 302652,
            "range": "± 3797",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 12362613,
            "range": "± 215032",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1955,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8108,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3098,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10647,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9594,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22579,
            "range": "± 314",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1784,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 324,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1045502,
            "range": "± 8704",
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
          "id": "113653338c2ba1ffa1d96f1da9f70739091f6e41",
          "message": "Fix build.",
          "timestamp": "2024-01-25T13:11:58+08:00",
          "tree_id": "39f735a923f2217e370d07a336475b7bcaa37ebc",
          "url": "https://github.com/schungx/rhai/commit/113653338c2ba1ffa1d96f1da9f70739091f6e41"
        },
        "date": 1706159744530,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 376512,
            "range": "± 13388",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 96,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 523,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1114,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1086,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5326806,
            "range": "± 33939",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 447,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 443,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10111,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8523,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10734,
            "range": "± 221",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 135,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 196,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 83,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 84,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 85,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1115814,
            "range": "± 8098",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1920773,
            "range": "± 21435",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1640533,
            "range": "± 8557",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 11658,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 5002,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1216,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1307,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 372,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 356,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 714,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 661,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 252,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 311,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 190,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 203,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 250,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 354,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 421,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 419,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 165901,
            "range": "± 1278",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 357480,
            "range": "± 6932",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 342941,
            "range": "± 7597",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 12669747,
            "range": "± 107438",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1919,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8040,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3080,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10699,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9650,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22709,
            "range": "± 2437",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1810,
            "range": "± 384",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 340,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1028306,
            "range": "± 12185",
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
          "id": "afbe4ebc20074ce93f0d9531500adc68a7feb691",
          "message": "Fix codegen",
          "timestamp": "2024-01-25T13:17:15+08:00",
          "tree_id": "4e9cd787ebc265caad3a4e9dc197afd890c662d8",
          "url": "https://github.com/schungx/rhai/commit/afbe4ebc20074ce93f0d9531500adc68a7feb691"
        },
        "date": 1706160085004,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 378312,
            "range": "± 10680",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 96,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 525,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1067,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1061,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5629606,
            "range": "± 91105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 445,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 452,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10131,
            "range": "± 186",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8581,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10910,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 137,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 196,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 83,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 83,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 85,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1189383,
            "range": "± 50077",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1961108,
            "range": "± 42255",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1666496,
            "range": "± 60205",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 11404,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4774,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1254,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1306,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 296,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 335,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 688,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 659,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 255,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 312,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 189,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 184,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 234,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 335,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 363,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 445,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 201269,
            "range": "± 5550",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 338704,
            "range": "± 5423",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 328125,
            "range": "± 5394",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 12565812,
            "range": "± 172730",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1937,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8025,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3092,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10872,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9565,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22619,
            "range": "± 362",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1794,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 328,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1105982,
            "range": "± 9114",
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
          "id": "1af2b7ef686cf83b744b635fc83ac9bfd110054c",
          "message": "Remove lifetimes from TypeBuilder impl.",
          "timestamp": "2024-01-25T13:20:51+08:00",
          "tree_id": "85e79cdd1d880ef95e303a71c4182bf5622873ea",
          "url": "https://github.com/schungx/rhai/commit/1af2b7ef686cf83b744b635fc83ac9bfd110054c"
        },
        "date": 1706160267527,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 376040,
            "range": "± 11930",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 96,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 565,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1034,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1031,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5251292,
            "range": "± 88734",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 425,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 415,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9966,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8311,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10686,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 136,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 194,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 83,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 84,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1107387,
            "range": "± 7081",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1911628,
            "range": "± 20910",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1628689,
            "range": "± 33153",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 11704,
            "range": "± 335",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4803,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1202,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1234,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 295,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 321,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 690,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 690,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 243,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 311,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 192,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 184,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 244,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 344,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 384,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 397,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 214607,
            "range": "± 6473",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 370042,
            "range": "± 10092",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 353975,
            "range": "± 15556",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 13009210,
            "range": "± 276456",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1960,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8065,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3157,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10623,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9671,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22843,
            "range": "± 272",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1787,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 317,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1064902,
            "range": "± 18206",
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
          "id": "ff000319ee37dae002c7e87b03453517b9263155",
          "message": "Refine derive macro.",
          "timestamp": "2024-01-25T16:55:49+08:00",
          "tree_id": "5c86042772ca2b9d172d4e379d598d417f441180",
          "url": "https://github.com/schungx/rhai/commit/ff000319ee37dae002c7e87b03453517b9263155"
        },
        "date": 1706174328731,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 375916,
            "range": "± 12419",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 99,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 539,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1074,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1068,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4751502,
            "range": "± 120007",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 453,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 417,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9906,
            "range": "± 259",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8441,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10638,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 137,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 196,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 84,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 84,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1110009,
            "range": "± 9204",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1904350,
            "range": "± 17141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1617003,
            "range": "± 17653",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 11749,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 5067,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1334,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1349,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 307,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 334,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 699,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 672,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 242,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 323,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 194,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 185,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 271,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 398,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 436,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 460,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 175395,
            "range": "± 9657",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 323540,
            "range": "± 6424",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 279879,
            "range": "± 5269",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 12024831,
            "range": "± 73660",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1939,
            "range": "± 488",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8039,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3099,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10626,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9549,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22773,
            "range": "± 348",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1781,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 313,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1120871,
            "range": "± 14154",
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
          "id": "470ea0443e533d276c4cdf6d35e919b8cb693325",
          "message": "Add support for tuple structs.",
          "timestamp": "2024-01-26T13:55:20+08:00",
          "tree_id": "7c5e8f5b5c25b089fe16693bcd380ff0afa9424c",
          "url": "https://github.com/schungx/rhai/commit/470ea0443e533d276c4cdf6d35e919b8cb693325"
        },
        "date": 1706249295053,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 377213,
            "range": "± 11575",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 35,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 103,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 588,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1054,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1057,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5161978,
            "range": "± 2638173",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 435,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 450,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10071,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8487,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10872,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 137,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 198,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 84,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 83,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 85,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1208155,
            "range": "± 22969",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2225572,
            "range": "± 59156",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1905320,
            "range": "± 78998",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 12610,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 5310,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1214,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1279,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 312,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 335,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 732,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 690,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 263,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 310,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 190,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 187,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 250,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 371,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 404,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 436,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 182839,
            "range": "± 9892",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 303844,
            "range": "± 3489",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 284935,
            "range": "± 3569",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 12455239,
            "range": "± 735076",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1941,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 7962,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3104,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10546,
            "range": "± 182",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9547,
            "range": "± 195",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22170,
            "range": "± 324",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1840,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 336,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1114887,
            "range": "± 11256",
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
          "id": "1f3abc86a1f1b20be6426f2411a9dce70a8f8143",
          "message": "Fix formatting.",
          "timestamp": "2024-01-26T14:05:55+08:00",
          "tree_id": "6f83e5eaa311c52f7ce078ff4a250f3bf15057b5",
          "url": "https://github.com/schungx/rhai/commit/1f3abc86a1f1b20be6426f2411a9dce70a8f8143"
        },
        "date": 1706249392797,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 380373,
            "range": "± 18226",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 98,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 599,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1035,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1078,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5259769,
            "range": "± 167213",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 436,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 435,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10302,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8781,
            "range": "± 266",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 11028,
            "range": "± 257",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 135,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 195,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 83,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 84,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 85,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1107806,
            "range": "± 13228",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2023537,
            "range": "± 53776",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1815763,
            "range": "± 107171",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 11881,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4804,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1228,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1270,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 322,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 352,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 735,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 690,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 249,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 312,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 192,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 188,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 237,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 340,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 350,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 407,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 190499,
            "range": "± 4182",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 335234,
            "range": "± 11828",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 321763,
            "range": "± 10103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 12859516,
            "range": "± 170944",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1937,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 7906,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3126,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10551,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9261,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22292,
            "range": "± 276",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1762,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 337,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1077663,
            "range": "± 15072",
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
          "id": "adab488be4425c19c509961cb1c9c040430fa818",
          "message": "Add pretty-print name to type builder macro.",
          "timestamp": "2024-01-26T14:22:22+08:00",
          "tree_id": "b129834935a5660658aeec760759c625681f6816",
          "url": "https://github.com/schungx/rhai/commit/adab488be4425c19c509961cb1c9c040430fa818"
        },
        "date": 1706250642946,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 402844,
            "range": "± 12389",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 99,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 554,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1116,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1058,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4977490,
            "range": "± 73697",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 437,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 442,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10295,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8632,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10919,
            "range": "± 304",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 137,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 197,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 83,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 83,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1109264,
            "range": "± 15164",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2012839,
            "range": "± 109109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1652661,
            "range": "± 50804",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 12236,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 5261,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1228,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1250,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 291,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 329,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 747,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 685,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 244,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 307,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 189,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 185,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 231,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 330,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 369,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 378,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 183461,
            "range": "± 7971",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 319471,
            "range": "± 5590",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 287841,
            "range": "± 6439",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 12389070,
            "range": "± 52938",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1939,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 7917,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3167,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10457,
            "range": "± 2822",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9545,
            "range": "± 235",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22262,
            "range": "± 216",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1765,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 349,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1144070,
            "range": "± 18446",
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
          "id": "84168cc2421e3c7e080d02270c022034d2ee4229",
          "message": "Add extra processing.",
          "timestamp": "2024-01-27T19:24:02+08:00",
          "tree_id": "1b817866917625d915bc9920027837f19d980609",
          "url": "https://github.com/schungx/rhai/commit/84168cc2421e3c7e080d02270c022034d2ee4229"
        },
        "date": 1706354880173,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 376127,
            "range": "± 16189",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 99,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 575,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1061,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1102,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5091309,
            "range": "± 128986",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 422,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 459,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9724,
            "range": "± 242",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8297,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10594,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 139,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 197,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 83,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 84,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 85,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1108458,
            "range": "± 13901",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1901334,
            "range": "± 39314",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1632153,
            "range": "± 20984",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 11288,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4746,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1233,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1276,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 296,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 324,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 778,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 760,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 258,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 307,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 191,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 186,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 265,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 368,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 394,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 432,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 193807,
            "range": "± 3961",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 357278,
            "range": "± 4621",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 341989,
            "range": "± 7187",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 12805311,
            "range": "± 95872",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1964,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8009,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3145,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10614,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9617,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22935,
            "range": "± 434",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1834,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 333,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1086115,
            "range": "± 9308",
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
          "id": "bc4dcaac90b92a70d29f48bf788232a06e8a886e",
          "message": "Fix test.",
          "timestamp": "2024-01-27T19:28:44+08:00",
          "tree_id": "a22f125095f427e9742a390e9e8f6ee7459458a3",
          "url": "https://github.com/schungx/rhai/commit/bc4dcaac90b92a70d29f48bf788232a06e8a886e"
        },
        "date": 1706355158687,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 370872,
            "range": "± 12973",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 99,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 550,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1111,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1085,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5058439,
            "range": "± 63590",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 441,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 452,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9712,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8282,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10613,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 137,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 195,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 83,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 83,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 85,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1289146,
            "range": "± 37313",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2038124,
            "range": "± 52930",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1641436,
            "range": "± 41907",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 11526,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4794,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1195,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1243,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 296,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 332,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 702,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 680,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 253,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 306,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 191,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 195,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 275,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 367,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 435,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 417,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 220627,
            "range": "± 10472",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 350248,
            "range": "± 6109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 305319,
            "range": "± 3800",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 12005823,
            "range": "± 162039",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1974,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8026,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3112,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10611,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9629,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22699,
            "range": "± 406",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1777,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 322,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1126372,
            "range": "± 16724",
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
          "id": "15208b397319bad412fc48e619ef44d8e74ad07c",
          "message": "Change derive macro to use named/value style.",
          "timestamp": "2024-01-29T13:04:22+08:00",
          "tree_id": "3fb5a27797f5d61bebcedb84b9c3cc2869bc3c2e",
          "url": "https://github.com/schungx/rhai/commit/15208b397319bad412fc48e619ef44d8e74ad07c"
        },
        "date": 1706504903324,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 371476,
            "range": "± 13871",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 32,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 98,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 549,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1055,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1047,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5270313,
            "range": "± 57675",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 425,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 474,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10177,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8575,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10851,
            "range": "± 186",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 151,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 228,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 83,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 84,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 85,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1108051,
            "range": "± 11377",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1931557,
            "range": "± 55750",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1632872,
            "range": "± 28512",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 11543,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4992,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1329,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1394,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 300,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 362,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 736,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 699,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 246,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 312,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 191,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 187,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 252,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 368,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 418,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 426,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 167777,
            "range": "± 2321",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 356413,
            "range": "± 5845",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 344588,
            "range": "± 12513",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 12768676,
            "range": "± 126507",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1947,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 7867,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3139,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10498,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9460,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22250,
            "range": "± 228",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1799,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 330,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1193865,
            "range": "± 9080",
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
          "id": "0f755f47fb28c7e60389801af4566136e96b8f77",
          "message": "Fix test.",
          "timestamp": "2024-01-29T13:10:06+08:00",
          "tree_id": "b3cb90a13944e33d4ffa7e51e2980ef1740f0955",
          "url": "https://github.com/schungx/rhai/commit/0f755f47fb28c7e60389801af4566136e96b8f77"
        },
        "date": 1706505246163,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 378664,
            "range": "± 5775",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 98,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 574,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1073,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1087,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4885451,
            "range": "± 105460",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 434,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 462,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10156,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8689,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10902,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 137,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 207,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 84,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 83,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 85,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1135846,
            "range": "± 571564",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2181003,
            "range": "± 113616",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1712447,
            "range": "± 51363",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 11695,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4988,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1250,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1300,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 285,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 335,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 743,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 722,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 241,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 310,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 190,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 185,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 250,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 364,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 420,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 421,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 166346,
            "range": "± 3746",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 332642,
            "range": "± 4452",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 312425,
            "range": "± 3821",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 12821780,
            "range": "± 133433",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1949,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8021,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3099,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10580,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9440,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22430,
            "range": "± 314",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1821,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 311,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1133207,
            "range": "± 9522",
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
          "id": "fc162514406f99a8231a17767620838ff7845485",
          "message": "Fix tests.",
          "timestamp": "2024-01-29T13:54:49+08:00",
          "tree_id": "23a656df02b1b599af08e451513e99102b9f2b3d",
          "url": "https://github.com/schungx/rhai/commit/fc162514406f99a8231a17767620838ff7845485"
        },
        "date": 1706508115536,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 379655,
            "range": "± 4652",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 97,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 562,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1092,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1105,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5037098,
            "range": "± 75917",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 484,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 432,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9954,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8482,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10598,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 139,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 197,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 84,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 83,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 85,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1332460,
            "range": "± 44571",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2069822,
            "range": "± 46677",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1665756,
            "range": "± 61942",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 12079,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4990,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1249,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1345,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 287,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 339,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 701,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 657,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 246,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 313,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 189,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 186,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 226,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 323,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 349,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 400,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 186898,
            "range": "± 8852",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 361910,
            "range": "± 5920",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 351020,
            "range": "± 8399",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 12429819,
            "range": "± 42876",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1946,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 7988,
            "range": "± 650",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3078,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10556,
            "range": "± 254",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9404,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22401,
            "range": "± 382",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1813,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 321,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1104558,
            "range": "± 8872",
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
          "id": "2c7e179d2a23eace464042e951947c620b3bed4f",
          "message": "Fix tests.",
          "timestamp": "2024-01-30T19:07:34+08:00",
          "tree_id": "de57c7c0fa0b052af4677cdc02d71174775e9880",
          "url": "https://github.com/schungx/rhai/commit/2c7e179d2a23eace464042e951947c620b3bed4f"
        },
        "date": 1706613593012,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 371232,
            "range": "± 22433",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 30,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 95,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 557,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1065,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1120,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5225547,
            "range": "± 293221",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 419,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 417,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9783,
            "range": "± 762",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8287,
            "range": "± 753",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10667,
            "range": "± 870",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 135,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 195,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 83,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 83,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 84,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1111839,
            "range": "± 26972",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1900573,
            "range": "± 118820",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1615575,
            "range": "± 11750",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 11966,
            "range": "± 766",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 5250,
            "range": "± 329",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1231,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1299,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 295,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 337,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 706,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 710,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 258,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 308,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 187,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 185,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 209,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 343,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 351,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 392,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 171609,
            "range": "± 6633",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 345722,
            "range": "± 17357",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 327761,
            "range": "± 6858",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11741373,
            "range": "± 629161",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1952,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8225,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3074,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10870,
            "range": "± 434",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9760,
            "range": "± 699",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22650,
            "range": "± 561",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1758,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 305,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1103880,
            "range": "± 56459",
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
          "id": "db7466bae338ebf0db6b7f927d6ff4466615541e",
          "message": "Fix builds.",
          "timestamp": "2024-01-30T19:24:20+08:00",
          "tree_id": "fa3846f2d3f1379ded33aa87cc1c8b63f591d516",
          "url": "https://github.com/schungx/rhai/commit/db7466bae338ebf0db6b7f927d6ff4466615541e"
        },
        "date": 1706614091281,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 376230,
            "range": "± 10142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 32,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 97,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 533,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1030,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1056,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4899756,
            "range": "± 88010",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 423,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 411,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9897,
            "range": "± 237",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8367,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10599,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 159,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 197,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 83,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 83,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 85,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1108038,
            "range": "± 15779",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1935529,
            "range": "± 69460",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1632128,
            "range": "± 36242",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 12119,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 5410,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1288,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1323,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 309,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 328,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 729,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 691,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 252,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 307,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 189,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 185,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 267,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 356,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 423,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 431,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 173367,
            "range": "± 7191",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 336527,
            "range": "± 4102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 327568,
            "range": "± 7265",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 12581154,
            "range": "± 106624",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1947,
            "range": "± 2362",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8007,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3163,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10746,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9551,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22772,
            "range": "± 466",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1772,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 321,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1145293,
            "range": "± 15502",
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
          "id": "bcb20cd06aea1e3be8dca58f5fa327f3575ce5a3",
          "message": "Fix test.",
          "timestamp": "2024-01-30T19:56:24+08:00",
          "tree_id": "9a7742d1ee35cb87e7866b25f3c616bf7a1205af",
          "url": "https://github.com/schungx/rhai/commit/bcb20cd06aea1e3be8dca58f5fa327f3575ce5a3"
        },
        "date": 1706616544598,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 385367,
            "range": "± 6982",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 99,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 548,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1073,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1035,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4917673,
            "range": "± 57261",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 411,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 417,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9764,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8343,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10707,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 138,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 212,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 83,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 83,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 85,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1108882,
            "range": "± 17955",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1921426,
            "range": "± 17067",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1616459,
            "range": "± 27928",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 12206,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 5278,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1259,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1285,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 315,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 375,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 710,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 661,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 258,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 311,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 190,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 188,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 227,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 335,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 360,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 404,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 173771,
            "range": "± 5225",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 322107,
            "range": "± 2947",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 304298,
            "range": "± 8028",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 12208947,
            "range": "± 262531",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1923,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8106,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3197,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10887,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9787,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22450,
            "range": "± 206",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1827,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 323,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1147348,
            "range": "± 10404",
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
          "id": "11e9cc7b6097262e915e8b2b63efeb06ea862856",
          "message": "Rewrite iterators using FuncRegistration.",
          "timestamp": "2024-01-30T22:51:53+08:00",
          "tree_id": "d595649a2fe66e6f3b71f3317e8d7e95d031d665",
          "url": "https://github.com/schungx/rhai/commit/11e9cc7b6097262e915e8b2b63efeb06ea862856"
        },
        "date": 1706626734375,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 370687,
            "range": "± 23485",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 99,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 542,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1014,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1064,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5195803,
            "range": "± 100529",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 416,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 432,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9797,
            "range": "± 272",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8296,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10622,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 140,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 197,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 83,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 83,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 85,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1109134,
            "range": "± 13629",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1901932,
            "range": "± 17370",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1612904,
            "range": "± 14923",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 12267,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 5518,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1254,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1267,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 316,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 370,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 719,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 669,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 257,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 307,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 188,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 184,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 217,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 324,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 353,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 397,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 180623,
            "range": "± 5415",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 334994,
            "range": "± 5093",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 299378,
            "range": "± 8220",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 12023556,
            "range": "± 45993",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1984,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8092,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3124,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10755,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9695,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22553,
            "range": "± 648",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1741,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 322,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1053077,
            "range": "± 6968",
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
          "id": "8cad8c58c1af1588e66af3d9f3188c04bd717a49",
          "message": "Limit number of functions in fuzzing.",
          "timestamp": "2024-01-31T09:47:47+08:00",
          "tree_id": "5e71bed900a35a8b1524d9308307c8f8e6d2158e",
          "url": "https://github.com/schungx/rhai/commit/8cad8c58c1af1588e66af3d9f3188c04bd717a49"
        },
        "date": 1706666104249,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 367787,
            "range": "± 15626",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 96,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 547,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1011,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1067,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4962876,
            "range": "± 143332",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 422,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 425,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9843,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8360,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10729,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 136,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 203,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 83,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 84,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 85,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1108691,
            "range": "± 13543",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1929737,
            "range": "± 49962",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1631328,
            "range": "± 17267",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 11761,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4857,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1264,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1277,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 319,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 324,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 753,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 717,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 248,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 309,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 190,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 185,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 208,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 329,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 365,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 381,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 197914,
            "range": "± 5248",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 324733,
            "range": "± 4219",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 304177,
            "range": "± 4333",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 12331624,
            "range": "± 110485",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1964,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8075,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3132,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10729,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9628,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22436,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1767,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 320,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1148810,
            "range": "± 8622",
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
          "id": "fa828c1e8ec04c8c8d99973b3e55557d99461e49",
          "message": "Refactor.",
          "timestamp": "2024-02-01T00:04:48+08:00",
          "tree_id": "5be7d53d1d551cf3270461b8494bc3e7cdf0ec00",
          "url": "https://github.com/schungx/rhai/commit/fa828c1e8ec04c8c8d99973b3e55557d99461e49"
        },
        "date": 1706717308028,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 372209,
            "range": "± 6459",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 97,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 555,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 996,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1001,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4653793,
            "range": "± 27842",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 409,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 419,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10082,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8481,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10783,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 136,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 195,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 83,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 83,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 85,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1109806,
            "range": "± 13677",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2057144,
            "range": "± 82512",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1619566,
            "range": "± 12399",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 11251,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 5104,
            "range": "± 345",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1296,
            "range": "± 724",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1333,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 324,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 367,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 723,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 670,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 251,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 307,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 188,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 185,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 216,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 323,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 351,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 382,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 203450,
            "range": "± 10495",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 345336,
            "range": "± 8846",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 322169,
            "range": "± 6049",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 13475333,
            "range": "± 100845",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1951,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8293,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3147,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 11056,
            "range": "± 331",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9718,
            "range": "± 228",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22893,
            "range": "± 1109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1836,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 322,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1049623,
            "range": "± 18164",
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
          "id": "dd5dc1f7c43cc6bd73d4cc9be0ece87f75e1f076",
          "message": "Use += instead of push_str.",
          "timestamp": "2024-02-01T00:21:49+08:00",
          "tree_id": "3ab43283ea90eb7e84c72b86fd0aec3726480273",
          "url": "https://github.com/schungx/rhai/commit/dd5dc1f7c43cc6bd73d4cc9be0ece87f75e1f076"
        },
        "date": 1706718328957,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 372135,
            "range": "± 6584",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 97,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 582,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1103,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1092,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4766988,
            "range": "± 36246",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 411,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 415,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10530,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8972,
            "range": "± 249",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 11311,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 137,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 192,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 84,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 84,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1131615,
            "range": "± 94887",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2309140,
            "range": "± 25953",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1972350,
            "range": "± 120226",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 11276,
            "range": "± 411",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 5203,
            "range": "± 202",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1266,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1296,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 286,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 323,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 687,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 648,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 254,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 310,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 189,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 185,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 219,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 331,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 352,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 380,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 167204,
            "range": "± 1953",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 299156,
            "range": "± 3430",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 277155,
            "range": "± 4830",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 12114032,
            "range": "± 72754",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1928,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8085,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3160,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10699,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9700,
            "range": "± 237",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22700,
            "range": "± 253",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1802,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 317,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1027196,
            "range": "± 8977",
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
          "id": "e26b6fc48275564ac1bb37c4bcf3a96d37bb8167",
          "message": "Fix codegen test.",
          "timestamp": "2024-02-01T08:27:46+08:00",
          "tree_id": "f3894ee51651779397e831a41f852c0de4adc2f1",
          "url": "https://github.com/schungx/rhai/commit/e26b6fc48275564ac1bb37c4bcf3a96d37bb8167"
        },
        "date": 1706747694348,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 370218,
            "range": "± 12644",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 98,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 543,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1099,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1108,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4565401,
            "range": "± 35431",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 424,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 458,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9749,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8383,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10522,
            "range": "± 267",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 137,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 196,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 84,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 83,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 85,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1108245,
            "range": "± 12490",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1915970,
            "range": "± 31677",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1691025,
            "range": "± 40840",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 11175,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4893,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1335,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1359,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 297,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 328,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 692,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 708,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 252,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 321,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 189,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 184,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 215,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 325,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 372,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 385,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 192460,
            "range": "± 5798",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 328754,
            "range": "± 5984",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 324086,
            "range": "± 9227",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 12292892,
            "range": "± 201290",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1948,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 7949,
            "range": "± 338",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3072,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10621,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9492,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22800,
            "range": "± 351",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1795,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 334,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1070548,
            "range": "± 9858",
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
          "id": "e50abda2f7d11df5b7ab231220a16ee2aae43494",
          "message": "Deprecate plugin function macros.",
          "timestamp": "2024-02-01T11:59:52+08:00",
          "tree_id": "689d7927083b803cf4b433177f4e77b4cce486c7",
          "url": "https://github.com/schungx/rhai/commit/e50abda2f7d11df5b7ab231220a16ee2aae43494"
        },
        "date": 1706760377381,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 378431,
            "range": "± 7580",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 108,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 587,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1090,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1085,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4725218,
            "range": "± 62442",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 476,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 451,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10127,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8439,
            "range": "± 320",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10684,
            "range": "± 340",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 138,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 196,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 83,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 84,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 85,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1109207,
            "range": "± 8157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1920703,
            "range": "± 31976",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1611458,
            "range": "± 16656",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 11756,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 5149,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1231,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1271,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 297,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 359,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 702,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 719,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 244,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 307,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 191,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 188,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 228,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 321,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 351,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 391,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 169680,
            "range": "± 3110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 304038,
            "range": "± 4032",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 278141,
            "range": "± 4665",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 12522390,
            "range": "± 465261",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1959,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 7983,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3160,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10545,
            "range": "± 262",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9523,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22114,
            "range": "± 665",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1800,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 327,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1100205,
            "range": "± 18266",
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
          "id": "8532f383d09ce1f4541fc67ee522b0e0187c8fa5",
          "message": "Deprecate export_fn.",
          "timestamp": "2024-02-01T12:08:50+08:00",
          "tree_id": "b3c3d9386d92216533355bc0f8e3d4ade91b48c0",
          "url": "https://github.com/schungx/rhai/commit/8532f383d09ce1f4541fc67ee522b0e0187c8fa5"
        },
        "date": 1706760849823,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 375454,
            "range": "± 6989",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 35,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 105,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 580,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1040,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1029,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4909463,
            "range": "± 54855",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 413,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 424,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10112,
            "range": "± 182",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8512,
            "range": "± 206",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10834,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 136,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 195,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 83,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 84,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1110322,
            "range": "± 47186",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1926288,
            "range": "± 75770",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1646306,
            "range": "± 82700",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 11315,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4725,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1260,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1316,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 299,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 394,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 755,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 745,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 244,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 309,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 190,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 188,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 207,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 323,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 351,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 380,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 182237,
            "range": "± 5840",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 345351,
            "range": "± 4409",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 333056,
            "range": "± 18831",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 12621026,
            "range": "± 90146",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1991,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8147,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3184,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10992,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9681,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22864,
            "range": "± 634",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1780,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 317,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1145949,
            "range": "± 15620",
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
          "id": "a88cbea953e6fa6f2a24ee54f33dc9fc96e95f93",
          "message": "Remove all plugin functions.",
          "timestamp": "2024-02-01T12:11:46+08:00",
          "tree_id": "e12283be633b4675f6ddec3e5cf3c29731b00ba8",
          "url": "https://github.com/schungx/rhai/commit/a88cbea953e6fa6f2a24ee54f33dc9fc96e95f93"
        },
        "date": 1706760989210,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 369884,
            "range": "± 7183",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 97,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 569,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1123,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1114,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4717980,
            "range": "± 42391",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 428,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 419,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10104,
            "range": "± 205",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8510,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 11113,
            "range": "± 332",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 171,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 238,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 87,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 86,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 121,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1107210,
            "range": "± 8449",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2138353,
            "range": "± 96405",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1969800,
            "range": "± 95610",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 12915,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 5389,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1260,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1273,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 303,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 333,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 722,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 679,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 244,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 306,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 189,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 186,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 208,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 325,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 352,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 415,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 167900,
            "range": "± 2423",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 354946,
            "range": "± 5619",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 336050,
            "range": "± 5105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11894153,
            "range": "± 36958",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1979,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8115,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3165,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10614,
            "range": "± 7310",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9580,
            "range": "± 253",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22264,
            "range": "± 355",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1783,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 333,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1171199,
            "range": "± 12007",
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
          "id": "5a8f0fe2df4bc9ff62fcfc7eeadd95b99e166a4e",
          "message": "Export ThinVec.",
          "timestamp": "2024-02-01T14:42:01+08:00",
          "tree_id": "360fb7b7d3b946851db9182630a0c1248996b1d5",
          "url": "https://github.com/schungx/rhai/commit/5a8f0fe2df4bc9ff62fcfc7eeadd95b99e166a4e"
        },
        "date": 1706770149749,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 366796,
            "range": "± 15683",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 97,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 559,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1056,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1100,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4844183,
            "range": "± 166807",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 467,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 415,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10359,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8700,
            "range": "± 944",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 11080,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 136,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 197,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 83,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 84,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 117,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1109607,
            "range": "± 9291",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1919239,
            "range": "± 18682",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1612939,
            "range": "± 19120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 11294,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4621,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1188,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1314,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 360,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 329,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 764,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 721,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 245,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 310,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 190,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 188,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 209,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 322,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 344,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 375,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 170876,
            "range": "± 4285",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 307447,
            "range": "± 3217",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 279997,
            "range": "± 3752",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 12771457,
            "range": "± 91409",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1941,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8017,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3078,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10652,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9610,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22238,
            "range": "± 315",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1760,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 316,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1140180,
            "range": "± 17397",
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
          "id": "da040a944ffa5d0001ed1610eb87a8eb2492c5ec",
          "message": "Fix tests output.",
          "timestamp": "2024-02-02T09:50:42+08:00",
          "tree_id": "f1342570037ec82b307b736cb638d44bd84f8fea",
          "url": "https://github.com/schungx/rhai/commit/da040a944ffa5d0001ed1610eb87a8eb2492c5ec"
        },
        "date": 1706838893574,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 367026,
            "range": "± 5465",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 102,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 582,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1058,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1116,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5153036,
            "range": "± 83660",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 414,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 451,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9830,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8354,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10497,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 138,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 196,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 84,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 83,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 85,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1108351,
            "range": "± 11785",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2042873,
            "range": "± 59740",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1625362,
            "range": "± 35620",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 11942,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 5194,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1170,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1273,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 293,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 334,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 703,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 669,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 243,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 314,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 191,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 185,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 220,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 315,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 352,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 391,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 188679,
            "range": "± 13020",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 335614,
            "range": "± 4951",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 343262,
            "range": "± 7669",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11880694,
            "range": "± 43656",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1941,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 7936,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3068,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10733,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9472,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22362,
            "range": "± 241",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1755,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 316,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1049247,
            "range": "± 8434",
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
          "id": "2893e8f94529429da0fdd7f47d26e82b2f54c736",
          "message": "Fix crash when accessing property or indexed item on object returned from variable resolver.",
          "timestamp": "2024-02-03T18:30:27+08:00",
          "tree_id": "b5283303949e913ac2c0499904f2bca4c3a6fe64",
          "url": "https://github.com/schungx/rhai/commit/2893e8f94529429da0fdd7f47d26e82b2f54c736"
        },
        "date": 1706956517412,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 364400,
            "range": "± 15118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 98,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 560,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1027,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1073,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4994107,
            "range": "± 204491",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 426,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 428,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9901,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8486,
            "range": "± 276",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10794,
            "range": "± 258",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 137,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 195,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 84,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 84,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 85,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1214125,
            "range": "± 77461",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2100385,
            "range": "± 65651",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1956500,
            "range": "± 51903",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 12141,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 5503,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1202,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1225,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 341,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 331,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 715,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 661,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 240,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 304,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 190,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 187,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 251,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 348,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 417,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 384,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 181556,
            "range": "± 5105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 300596,
            "range": "± 4681",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 283298,
            "range": "± 3246",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 12458263,
            "range": "± 64236",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1947,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8222,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3117,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10742,
            "range": "± 205",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9627,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22533,
            "range": "± 238",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1785,
            "range": "± 426",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 313,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1060723,
            "range": "± 251414",
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
          "id": "4accbce6ed20cc29658cf9bb84d532790e31882c",
          "message": "Fix tests output.",
          "timestamp": "2024-02-03T18:48:38+08:00",
          "tree_id": "34e08df7b8d623551658f2153eaf0d07a7aa4cd9",
          "url": "https://github.com/schungx/rhai/commit/4accbce6ed20cc29658cf9bb84d532790e31882c"
        },
        "date": 1706957569340,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 368051,
            "range": "± 12683",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 98,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 556,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1036,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1036,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4849290,
            "range": "± 84892",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 420,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 416,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9965,
            "range": "± 284",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8463,
            "range": "± 202",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10789,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 138,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 197,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 84,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 84,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 85,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1182879,
            "range": "± 71529",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2119301,
            "range": "± 57090",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1871923,
            "range": "± 85288",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 12399,
            "range": "± 218",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 5664,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1255,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1243,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 308,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 342,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 733,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 670,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 246,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 305,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 191,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 187,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 231,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 325,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 356,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 380,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 176183,
            "range": "± 3669",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 309268,
            "range": "± 6256",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 281787,
            "range": "± 4154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 12293413,
            "range": "± 62705",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1940,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8107,
            "range": "± 191",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3113,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10714,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9537,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22650,
            "range": "± 348",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1796,
            "range": "± 484",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 328,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1129386,
            "range": "± 11536",
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
          "id": "a83b2b28eb1e760afe151cd078e98ab29ac38945",
          "message": "Cleanup macros.",
          "timestamp": "2024-02-06T11:33:53+08:00",
          "tree_id": "67225605b6e136b6f36f5637ead6e24f4216bf2a",
          "url": "https://github.com/schungx/rhai/commit/a83b2b28eb1e760afe151cd078e98ab29ac38945"
        },
        "date": 1707271871735,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 374454,
            "range": "± 5471",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 97,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 574,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1065,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1045,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5009490,
            "range": "± 441515",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 433,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 447,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9750,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8358,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10597,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 136,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 196,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 84,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 84,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 85,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1112066,
            "range": "± 7761",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1922839,
            "range": "± 22963",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1631835,
            "range": "± 11861",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 11427,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 5015,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1265,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1311,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 306,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 367,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 701,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 714,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 256,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 305,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 189,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 188,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 263,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 364,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 431,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 446,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 176754,
            "range": "± 21447",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 315314,
            "range": "± 3735",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 284742,
            "range": "± 3065",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 12532482,
            "range": "± 87297",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1951,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8149,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3250,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10831,
            "range": "± 228",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9774,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22501,
            "range": "± 388",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1845,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 339,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1044910,
            "range": "± 19394",
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
          "id": "df156e65a74e615549d534ee3352486daf2a26c5",
          "message": "Move input into parse state.",
          "timestamp": "2024-02-08T15:24:32+08:00",
          "tree_id": "7e867ce5b483a65fcfc76ec67e8c4c1ed4e8ba15",
          "url": "https://github.com/schungx/rhai/commit/df156e65a74e615549d534ee3352486daf2a26c5"
        },
        "date": 1707377916608,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 365057,
            "range": "± 15964",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 98,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 562,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1019,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1064,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4672009,
            "range": "± 39898",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 438,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 419,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10364,
            "range": "± 264",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8694,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10807,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 135,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 197,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 84,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 84,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1079385,
            "range": "± 267301",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1908608,
            "range": "± 29945",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1629874,
            "range": "± 22535",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 11273,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4713,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1270,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1324,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 295,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 338,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 705,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 664,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 252,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 303,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 185,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 184,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 209,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 320,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 349,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 387,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 164805,
            "range": "± 1590",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 349350,
            "range": "± 4078",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 337466,
            "range": "± 4882",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11793680,
            "range": "± 71982",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2144,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8155,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3265,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10806,
            "range": "± 286",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9888,
            "range": "± 323",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 23097,
            "range": "± 269",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1819,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 343,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1065368,
            "range": "± 7406",
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
          "id": "6c8ba84b07c844addc47c3be7e01196d7d4f83f7",
          "message": "Fix builds.",
          "timestamp": "2024-02-08T16:03:56+08:00",
          "tree_id": "28958c79440a659b4bb8fe46926d13706aa56fe1",
          "url": "https://github.com/schungx/rhai/commit/6c8ba84b07c844addc47c3be7e01196d7d4f83f7"
        },
        "date": 1707379651437,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 371952,
            "range": "± 13689",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 98,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 560,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1073,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1132,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4748463,
            "range": "± 67213",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 423,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 455,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9938,
            "range": "± 293",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8561,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10805,
            "range": "± 229",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 135,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 195,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 84,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 84,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1078336,
            "range": "± 15534",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1944442,
            "range": "± 25873",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1659910,
            "range": "± 24011",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 11828,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4879,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1186,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1259,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 297,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 339,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 732,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 681,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 260,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 303,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 185,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 185,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 237,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 318,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 338,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 384,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 165476,
            "range": "± 6192",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 312150,
            "range": "± 4449",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 280899,
            "range": "± 3209",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11971050,
            "range": "± 139667",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1962,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8097,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3185,
            "range": "± 458",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10480,
            "range": "± 258",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9622,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22786,
            "range": "± 331",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1795,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 325,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1089098,
            "range": "± 14065",
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
          "id": "450c73ac03438dd6f2b6e4cf7a1bea4cb754524e",
          "message": "Fix build.",
          "timestamp": "2024-02-08T16:35:06+08:00",
          "tree_id": "e0488ad81006efc14a8f7d8718dcf09ac6392b99",
          "url": "https://github.com/schungx/rhai/commit/450c73ac03438dd6f2b6e4cf7a1bea4cb754524e"
        },
        "date": 1707381552521,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 366359,
            "range": "± 6953",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 96,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 562,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1034,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1049,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4782188,
            "range": "± 95816",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 456,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 421,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9945,
            "range": "± 6581",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8433,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10752,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 138,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 197,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 84,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 84,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1078048,
            "range": "± 11483",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2006770,
            "range": "± 40294",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1610332,
            "range": "± 24991",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 11772,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 5028,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1197,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1287,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 298,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 348,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 756,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 731,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 266,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 315,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 186,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 185,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 242,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 354,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 371,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 403,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 164835,
            "range": "± 1523",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 333559,
            "range": "± 3618",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 316145,
            "range": "± 6706",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11985155,
            "range": "± 56459",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1970,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8141,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3135,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10946,
            "range": "± 188",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9709,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22795,
            "range": "± 359",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1760,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 322,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1088572,
            "range": "± 7030",
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
          "id": "660f1cb7b454f03539fab26e075218314faf4fc8",
          "message": "expose_under_internals macro.",
          "timestamp": "2024-02-09T14:31:37+08:00",
          "tree_id": "3467e9c7ef3e14498b97f667324052a5e4c130a5",
          "url": "https://github.com/schungx/rhai/commit/660f1cb7b454f03539fab26e075218314faf4fc8"
        },
        "date": 1707460639165,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 370070,
            "range": "± 18014",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 96,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 546,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1012,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1021,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4767141,
            "range": "± 86166",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 421,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 452,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9893,
            "range": "± 252",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8535,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10720,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 138,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 197,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 84,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 84,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1076106,
            "range": "± 39114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1921954,
            "range": "± 22020",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1592031,
            "range": "± 16290",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 11356,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4865,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1289,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1311,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 363,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 379,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 719,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 654,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 242,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 313,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 190,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 184,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 219,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 327,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 363,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 385,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 175834,
            "range": "± 12975",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 302006,
            "range": "± 9336",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 282103,
            "range": "± 8603",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 12127160,
            "range": "± 94809",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1978,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 7929,
            "range": "± 228",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3102,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10522,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9612,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22278,
            "range": "± 261",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1744,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 328,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1118780,
            "range": "± 14374",
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
          "id": "09ba971057a644574831348350c0e0a52980897c",
          "message": "Fix tests.",
          "timestamp": "2024-02-09T17:45:38+08:00",
          "tree_id": "fecd8e4551baba014a03b1e93bbf11be5bb6f360",
          "url": "https://github.com/schungx/rhai/commit/09ba971057a644574831348350c0e0a52980897c"
        },
        "date": 1707472205361,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 372898,
            "range": "± 6389",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 97,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 556,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1020,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1028,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4929361,
            "range": "± 120445",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 413,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 412,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9805,
            "range": "± 294",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8415,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10633,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 138,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 197,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 84,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 84,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1125877,
            "range": "± 50493",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1894386,
            "range": "± 30233",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1619320,
            "range": "± 52273",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 11775,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 5004,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1267,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1294,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 356,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 390,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 701,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 701,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 253,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 306,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 189,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 184,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 207,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 314,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 357,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 374,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 194528,
            "range": "± 5220",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 327859,
            "range": "± 5068",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 302444,
            "range": "± 6041",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 13276085,
            "range": "± 59672",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1995,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8038,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3206,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10462,
            "range": "± 205",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9554,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22345,
            "range": "± 361",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1827,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 342,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1106134,
            "range": "± 11002",
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
          "id": "8a890c0fe4ffe33ede015886566469e680174042",
          "message": "Fix builds.",
          "timestamp": "2024-02-09T17:52:47+08:00",
          "tree_id": "db96821a8177a022eb9bbc09422ecf76b5f965c2",
          "url": "https://github.com/schungx/rhai/commit/8a890c0fe4ffe33ede015886566469e680174042"
        },
        "date": 1707472600349,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 362437,
            "range": "± 17300",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 96,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 561,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1020,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1049,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5168643,
            "range": "± 59451",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 422,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 414,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10032,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8467,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10733,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 137,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 210,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 84,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 84,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1077121,
            "range": "± 22575",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1898425,
            "range": "± 21980",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1600574,
            "range": "± 31989",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 11762,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 5054,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1256,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1280,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 312,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 345,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 756,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 717,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 268,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 311,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 193,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 189,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 203,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 313,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 345,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 375,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 167590,
            "range": "± 10710",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 300509,
            "range": "± 3492",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 276102,
            "range": "± 5093",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 12131110,
            "range": "± 65539",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1991,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8031,
            "range": "± 1295",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3153,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10819,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9397,
            "range": "± 224",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22293,
            "range": "± 477",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1785,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 340,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1104646,
            "range": "± 8294",
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
          "id": "884335dc7ef6397f466b8f5f01dea9db2739f079",
          "message": "Merge branch 'main' of https://github.com/rhaiscript/rhai",
          "timestamp": "2024-02-09T18:10:23+08:00",
          "tree_id": "e80724dfc4498f92a504576e42fb583f75a4c8c7",
          "url": "https://github.com/schungx/rhai/commit/884335dc7ef6397f466b8f5f01dea9db2739f079"
        },
        "date": 1707473961296,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 369091,
            "range": "± 6987",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 95,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 547,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1018,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1095,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5178685,
            "range": "± 87348",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 412,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 412,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9927,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8486,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10712,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 136,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 201,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 84,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 84,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1111017,
            "range": "± 47068",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1897166,
            "range": "± 26669",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1610136,
            "range": "± 47901",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 12679,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 5162,
            "range": "± 518",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1203,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1233,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 311,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 384,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 716,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 756,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 251,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 319,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 191,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 187,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 204,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 311,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 363,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 381,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 171784,
            "range": "± 4935",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 328135,
            "range": "± 4973",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 317319,
            "range": "± 7166",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 12312243,
            "range": "± 83651",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1988,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 7931,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3110,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10448,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9549,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22443,
            "range": "± 311",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1755,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 332,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1138269,
            "range": "± 10273",
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
          "id": "b2fc03d0c0f4745ffa73dce509dbbda6ba4f34ba",
          "message": "Refine strings interner.",
          "timestamp": "2024-02-11T11:38:54+08:00",
          "tree_id": "1a201a0c4e47129d7b4c8392648dcd7dc7d95a45",
          "url": "https://github.com/schungx/rhai/commit/b2fc03d0c0f4745ffa73dce509dbbda6ba4f34ba"
        },
        "date": 1707622950524,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 368682,
            "range": "± 15485",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 101,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 597,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1052,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1075,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4838173,
            "range": "± 142692",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 433,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 474,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10195,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8843,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 11318,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 135,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 240,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 82,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 82,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 82,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1105879,
            "range": "± 5476",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1974053,
            "range": "± 26195",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1626050,
            "range": "± 11169",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10920,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4666,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1209,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1273,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 290,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 331,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 667,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 654,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 242,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 306,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 188,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 184,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 206,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 322,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 346,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 385,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 163388,
            "range": "± 2162",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 292095,
            "range": "± 6843",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 270175,
            "range": "± 5214",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11618161,
            "range": "± 273913",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2012,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8490,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3243,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 11134,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9952,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 21569,
            "range": "± 296",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1860,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 312,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 966658,
            "range": "± 9260",
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
          "id": "d87eb2a17b55a362206c3ce59ea9961e93ab332f",
          "message": "Fix builds.",
          "timestamp": "2024-02-11T12:13:06+08:00",
          "tree_id": "41ac4a6cdc6e52d63716a4376a057ea37653cdc5",
          "url": "https://github.com/schungx/rhai/commit/d87eb2a17b55a362206c3ce59ea9961e93ab332f"
        },
        "date": 1707625194193,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 377019,
            "range": "± 5359",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 101,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 575,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1001,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1014,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4610030,
            "range": "± 45394",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 415,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 413,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10316,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8935,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 11441,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 134,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 194,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 82,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 83,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 82,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1103618,
            "range": "± 8319",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1988508,
            "range": "± 27953",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1621091,
            "range": "± 7778",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10892,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4477,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1228,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1334,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 315,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 356,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 666,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 653,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 253,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 305,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 189,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 188,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 207,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 333,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 343,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 384,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 163000,
            "range": "± 1355",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 299441,
            "range": "± 3433",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 271476,
            "range": "± 1759",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11889755,
            "range": "± 83492",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2046,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8428,
            "range": "± 632",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3285,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 11153,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9990,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 21244,
            "range": "± 264",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1870,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 325,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 969892,
            "range": "± 9164",
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
          "id": "45bfdb67d2a10c6a1d7f9712dc24b919c91d6083",
          "message": "Fix test.",
          "timestamp": "2024-02-11T12:30:30+08:00",
          "tree_id": "92a311f009ede9d28dea119d3612392dfbac7a2f",
          "url": "https://github.com/schungx/rhai/commit/45bfdb67d2a10c6a1d7f9712dc24b919c91d6083"
        },
        "date": 1707626044827,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 370437,
            "range": "± 10168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 101,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 567,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 991,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1009,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4730864,
            "range": "± 44596",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 413,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 416,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10340,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 9026,
            "range": "± 7568",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 11197,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 135,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 195,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 82,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 82,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 82,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1100767,
            "range": "± 10213",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1975984,
            "range": "± 34439",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1642455,
            "range": "± 16704",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10767,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4514,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1253,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1307,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 290,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 344,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 667,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 668,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 244,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 305,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 190,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 188,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 234,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 316,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 356,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 380,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 165262,
            "range": "± 2927",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 295645,
            "range": "± 2645",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 299386,
            "range": "± 5683",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 12272547,
            "range": "± 86532",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2001,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8536,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3239,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 11290,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 10101,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22315,
            "range": "± 308",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1974,
            "range": "± 1203",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 311,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 980978,
            "range": "± 9716",
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
          "id": "1cf5efc1b2870f4dfd66e3a832f0c9898c1f8e15",
          "message": "Fix interner max.",
          "timestamp": "2024-02-11T14:02:55+08:00",
          "tree_id": "7e398260988930b5c7f2dd03e9d2df7fe0e3c86c",
          "url": "https://github.com/schungx/rhai/commit/1cf5efc1b2870f4dfd66e3a832f0c9898c1f8e15"
        },
        "date": 1707713437721,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 365892,
            "range": "± 4867",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 99,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 581,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1000,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1037,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5147548,
            "range": "± 165048",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 378,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 395,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10431,
            "range": "± 459",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 9124,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 11292,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 134,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 194,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 83,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 83,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 83,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1074972,
            "range": "± 9741",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1869058,
            "range": "± 22806",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1569280,
            "range": "± 12983",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 11018,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4999,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1324,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1277,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 304,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 348,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 694,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 675,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 241,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 311,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 179,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 177,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 212,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 326,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 373,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 390,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 176219,
            "range": "± 12000",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 357703,
            "range": "± 5942",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 349711,
            "range": "± 8906",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11768824,
            "range": "± 93811",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2019,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8461,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3318,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 11182,
            "range": "± 269",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9971,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22796,
            "range": "± 340",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1828,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 323,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 945395,
            "range": "± 10881",
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
          "id": "4fd828d8ddc8f63b8e6ebf1ec8f80c82815a55d1",
          "message": "Don't define namespace under no_module.",
          "timestamp": "2024-02-15T12:18:24+08:00",
          "tree_id": "22e448d677caef0cf6a19e62507a6340c8aac1c3",
          "url": "https://github.com/schungx/rhai/commit/4fd828d8ddc8f63b8e6ebf1ec8f80c82815a55d1"
        },
        "date": 1707970937630,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 365198,
            "range": "± 17128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 96,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 570,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 951,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 960,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5142816,
            "range": "± 61959",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 380,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 399,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10173,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8787,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10806,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 132,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 192,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 86,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 86,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1400647,
            "range": "± 25335",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2098850,
            "range": "± 27489",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2010510,
            "range": "± 69511",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 11724,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 5467,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1274,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1294,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 297,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 349,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 719,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 668,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 237,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 299,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 177,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 175,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 209,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 331,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 405,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 381,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 167683,
            "range": "± 3995",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 327209,
            "range": "± 6088",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 332037,
            "range": "± 7755",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11748276,
            "range": "± 53343",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1982,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8271,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3191,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10996,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 10085,
            "range": "± 314",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22983,
            "range": "± 231",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1859,
            "range": "± 1144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 314,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1118026,
            "range": "± 17431",
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
          "id": "7cb041281984d3e3cf7014d46b96a589ca73f60e",
          "message": "Fix msrv.",
          "timestamp": "2024-02-15T12:48:20+08:00",
          "tree_id": "68d5f8d64b8777acc397ef3b99c0ae7787dc0443",
          "url": "https://github.com/schungx/rhai/commit/7cb041281984d3e3cf7014d46b96a589ca73f60e"
        },
        "date": 1707972738025,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 368117,
            "range": "± 6225",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 95,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 567,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 961,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1025,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5370964,
            "range": "± 95893",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 382,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 407,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10122,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8653,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10722,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 133,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 193,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 86,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 86,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1085323,
            "range": "± 18813",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1925970,
            "range": "± 25555",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1754998,
            "range": "± 38162",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 11048,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4893,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1233,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1283,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 310,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 342,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 717,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 666,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 237,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 298,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 178,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 176,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 229,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 324,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 347,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 388,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 179383,
            "range": "± 7657",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 329948,
            "range": "± 3823",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 319770,
            "range": "± 3157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 12460833,
            "range": "± 259986",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1984,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8234,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3341,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10769,
            "range": "± 184",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9858,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22845,
            "range": "± 374",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1876,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 329,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1066914,
            "range": "± 25168",
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
          "id": "6fbd4fc2011c44f0ac7348b8dad0fc98a45d0499",
          "message": "Always use Engine's strings interner.",
          "timestamp": "2024-02-19T17:30:49+08:00",
          "tree_id": "4188f0b8bc4bad73dbd3f41be572b452ec336ace",
          "url": "https://github.com/schungx/rhai/commit/6fbd4fc2011c44f0ac7348b8dad0fc98a45d0499"
        },
        "date": 1708335492567,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 361290,
            "range": "± 14081",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 97,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 558,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 952,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 958,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4786550,
            "range": "± 84044",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 370,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 402,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10124,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8579,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10534,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 133,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 192,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 86,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 86,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1182476,
            "range": "± 103929",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1903141,
            "range": "± 52878",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1744007,
            "range": "± 30935",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10943,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 5125,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1265,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1348,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 292,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 335,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 714,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 661,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 240,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 296,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 182,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 180,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 253,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 365,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 447,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 424,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 176467,
            "range": "± 9796",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 319980,
            "range": "± 6531",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 310129,
            "range": "± 5585",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11698093,
            "range": "± 247487",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1960,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8102,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3082,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10813,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9768,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22638,
            "range": "± 677",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1803,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 302,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1071553,
            "range": "± 9589",
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
          "id": "21d289a4100a585deaeb2bfc42a0783866c3331a",
          "message": "Fix builds.",
          "timestamp": "2024-02-19T17:53:21+08:00",
          "tree_id": "16113c985c2b0301179a2255078d3ae8bb5a07df",
          "url": "https://github.com/schungx/rhai/commit/21d289a4100a585deaeb2bfc42a0783866c3331a"
        },
        "date": 1708336845502,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 369335,
            "range": "± 5365",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 99,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 573,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 958,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 969,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4966006,
            "range": "± 241928",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 379,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 414,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10364,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8781,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10756,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 132,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 193,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 86,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 86,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1112887,
            "range": "± 24628",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1895222,
            "range": "± 33162",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1609331,
            "range": "± 565563",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 11215,
            "range": "± 888",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 5169,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1286,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1349,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 352,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 403,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 704,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 693,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 246,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 298,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 190,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 194,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 230,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 354,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 407,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 390,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 160826,
            "range": "± 4832",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 283864,
            "range": "± 4469",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 276599,
            "range": "± 6310",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11507156,
            "range": "± 2098845",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1992,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8011,
            "range": "± 719",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3101,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10667,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9702,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22988,
            "range": "± 19256",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1797,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 309,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1093489,
            "range": "± 16199",
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
          "id": "d7b1af21cac239de6b7b76892d055495c9da39d1",
          "message": "Revert ahash version restriction.",
          "timestamp": "2024-02-22T09:28:58+08:00",
          "tree_id": "1130e15114dd1a0745a63581ae2be2e15cf7363a",
          "url": "https://github.com/schungx/rhai/commit/d7b1af21cac239de6b7b76892d055495c9da39d1"
        },
        "date": 1708565884947,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 370868,
            "range": "± 17362",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 97,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 571,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 999,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 947,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5032896,
            "range": "± 33077",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 380,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 406,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10222,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8592,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10609,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 134,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 193,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 86,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 86,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 87,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1140548,
            "range": "± 26956",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1940951,
            "range": "± 31289",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1650926,
            "range": "± 20045",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 11150,
            "range": "± 326",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 5033,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1243,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1282,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 301,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 347,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 731,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 639,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 238,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 296,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 179,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 177,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 244,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 339,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 377,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 398,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 178777,
            "range": "± 5923",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 302689,
            "range": "± 6572",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 293175,
            "range": "± 7290",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 12492070,
            "range": "± 83019",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1961,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8226,
            "range": "± 171",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3188,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10654,
            "range": "± 410",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9813,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22672,
            "range": "± 269",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1840,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 311,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1036824,
            "range": "± 14524",
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
          "id": "f1698a3333ddd4026cb831a01d0e7a0dfc8c8403",
          "message": "Add array/map callbacks.",
          "timestamp": "2024-02-23T12:23:31+08:00",
          "tree_id": "6551d716a95b490e65c0cd79d25e333bf1624510",
          "url": "https://github.com/schungx/rhai/commit/f1698a3333ddd4026cb831a01d0e7a0dfc8c8403"
        },
        "date": 1708662747188,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 367092,
            "range": "± 5237",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 96,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 576,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 942,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 951,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4738124,
            "range": "± 55024",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 372,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 396,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10171,
            "range": "± 209",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8642,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10502,
            "range": "± 8455",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 133,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 192,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 86,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 86,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1070077,
            "range": "± 10939",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1882618,
            "range": "± 24107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1559198,
            "range": "± 21734",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10885,
            "range": "± 272",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4759,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1289,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1311,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 326,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 376,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 713,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 691,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 244,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 298,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 181,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 182,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 220,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 341,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 380,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 404,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 157639,
            "range": "± 1972",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 279447,
            "range": "± 5476",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 276845,
            "range": "± 11202",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11354465,
            "range": "± 342874",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2010,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8218,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3168,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10880,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9848,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22924,
            "range": "± 366",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1810,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 307,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1045419,
            "range": "± 9687",
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
          "id": "6aaebabaefc3c59304ed304451e680bd24e9cbe1",
          "message": "Allow EvalContext in callbacks.",
          "timestamp": "2024-02-24T16:16:07+08:00",
          "tree_id": "5e6d4a34b2e3ad153af26516a00af3d498adb1bf",
          "url": "https://github.com/schungx/rhai/commit/6aaebabaefc3c59304ed304451e680bd24e9cbe1"
        },
        "date": 1708762792747,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 366738,
            "range": "± 4182",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 99,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 562,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1023,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1060,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4969114,
            "range": "± 99623",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 380,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 404,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10259,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8659,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10851,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 133,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 196,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 86,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 86,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1073044,
            "range": "± 9329",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1892435,
            "range": "± 20305",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1570787,
            "range": "± 12088",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10865,
            "range": "± 326",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4615,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1329,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1367,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 309,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 370,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 700,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 673,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 238,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 303,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 185,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 181,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 210,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 325,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 360,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 384,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 161631,
            "range": "± 2324",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 288275,
            "range": "± 3226",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 282474,
            "range": "± 6002",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11527549,
            "range": "± 125858",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1994,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8431,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3279,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 11030,
            "range": "± 517",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 10073,
            "range": "± 182",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 23304,
            "range": "± 269",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1884,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 299,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1078670,
            "range": "± 78564",
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
          "id": "69d929bc674f06f95092e9e088730d93558abd71",
          "message": "Fix test.",
          "timestamp": "2024-02-24T16:44:50+08:00",
          "tree_id": "c4a5f582b5896c7af7bf632864a68d4c912b72e7",
          "url": "https://github.com/schungx/rhai/commit/69d929bc674f06f95092e9e088730d93558abd71"
        },
        "date": 1708764525509,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 367662,
            "range": "± 3809",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 98,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 531,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 936,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 980,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4855353,
            "range": "± 90256",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 371,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 403,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10186,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8654,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10612,
            "range": "± 204",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 132,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 191,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 87,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 86,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1072871,
            "range": "± 9584",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1887732,
            "range": "± 16970",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1565939,
            "range": "± 15898",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10994,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4652,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1248,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1282,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 305,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 360,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 753,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 735,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 241,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 300,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 183,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 179,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 211,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 316,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 359,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 382,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 174914,
            "range": "± 4426",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 320071,
            "range": "± 6209",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 317194,
            "range": "± 12511",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11916062,
            "range": "± 56259",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1999,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8330,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3219,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10993,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9853,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 23023,
            "range": "± 286",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1803,
            "range": "± 1202",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 298,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1060156,
            "range": "± 9309",
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
          "id": "fac5f1cf963c99e43485fe5a0b9f2c56d4694a2b",
          "message": "fix doctest.",
          "timestamp": "2024-02-24T17:57:27+08:00",
          "tree_id": "a8f360b922bebd122ac10d8dc3a64406eb6fa5b9",
          "url": "https://github.com/schungx/rhai/commit/fac5f1cf963c99e43485fe5a0b9f2c56d4694a2b"
        },
        "date": 1708768884168,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 366155,
            "range": "± 5156",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 96,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 541,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 990,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1018,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4870824,
            "range": "± 99761",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 402,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 466,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10072,
            "range": "± 465",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8502,
            "range": "± 244",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10538,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 133,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 191,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 86,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 87,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1071984,
            "range": "± 10541",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2078721,
            "range": "± 20466",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1587831,
            "range": "± 26303",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10708,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4803,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1356,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1312,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 333,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 405,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 697,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 664,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 239,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 307,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 184,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 183,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 234,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 329,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 400,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 392,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 170668,
            "range": "± 7036",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 287748,
            "range": "± 4851",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 281978,
            "range": "± 9901",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11601352,
            "range": "± 102157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2005,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8469,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3195,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 11199,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 10009,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 23351,
            "range": "± 423",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1881,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 298,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1077011,
            "range": "± 9502",
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
          "id": "5975d97735b501bdfcf6617d55db727eaf52fc06",
          "message": "Fix tests.",
          "timestamp": "2024-03-04T21:51:45+08:00",
          "tree_id": "cc1bc0c2ed0862c4695e36d1e4e1d2ff9476010d",
          "url": "https://github.com/schungx/rhai/commit/5975d97735b501bdfcf6617d55db727eaf52fc06"
        },
        "date": 1709560516682,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 363676,
            "range": "± 8106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 97,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 561,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 985,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 952,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4886745,
            "range": "± 66403",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 385,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 423,
            "range": "± 250",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10135,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8604,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10589,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 133,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 192,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 86,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 86,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1071706,
            "range": "± 12518",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1836861,
            "range": "± 23909",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1555055,
            "range": "± 111636",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10520,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4521,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1282,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1295,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 325,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 398,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 683,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 660,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 235,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 295,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 179,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 179,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 211,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 325,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 358,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 366,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 164774,
            "range": "± 1369",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 289994,
            "range": "± 2224",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 283621,
            "range": "± 4303",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11329403,
            "range": "± 184899",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1989,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8243,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3074,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10942,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9811,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22665,
            "range": "± 414",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1833,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 336,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1039672,
            "range": "± 7801",
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
          "id": "34bede9c21108be7c3b4c727f2f3ace56aef7d46",
          "message": "Fix test.",
          "timestamp": "2024-03-04T22:05:44+08:00",
          "tree_id": "4bda70651c07d9cfc1bb8a0d5485005257336059",
          "url": "https://github.com/schungx/rhai/commit/34bede9c21108be7c3b4c727f2f3ace56aef7d46"
        },
        "date": 1709561406209,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 364814,
            "range": "± 11038",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 96,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 616,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1007,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1039,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5207461,
            "range": "± 40334",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 399,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 412,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10222,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8619,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10789,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 141,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 219,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 86,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 86,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1072384,
            "range": "± 13833",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1848920,
            "range": "± 18832",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1558353,
            "range": "± 25894",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 11157,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 5029,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1297,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1329,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 295,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 340,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 692,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 680,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 242,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 315,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 196,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 199,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 239,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 339,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 424,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 387,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 162206,
            "range": "± 1565",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 286015,
            "range": "± 2292",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 273359,
            "range": "± 3602",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11241082,
            "range": "± 233790",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2005,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8155,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3103,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10861,
            "range": "± 263",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9775,
            "range": "± 254",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22658,
            "range": "± 280",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1831,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 313,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1077108,
            "range": "± 14149",
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
          "id": "b70c8938ab17de5908e5969a2016a996459b61f0",
          "message": "Fix test.",
          "timestamp": "2024-03-04T22:24:15+08:00",
          "tree_id": "bae10bb26e45ce3883b4f4785a4981157006ebb4",
          "url": "https://github.com/schungx/rhai/commit/b70c8938ab17de5908e5969a2016a996459b61f0"
        },
        "date": 1709562482458,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 367445,
            "range": "± 17306",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 96,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 549,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 974,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 966,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4893388,
            "range": "± 85536",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 380,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 420,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10247,
            "range": "± 266",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8666,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10698,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 133,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 192,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 86,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 86,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1072685,
            "range": "± 43345",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1853410,
            "range": "± 28637",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1554096,
            "range": "± 12495",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 11230,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 5135,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1295,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1356,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 309,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 472,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 721,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 702,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 238,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 297,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 179,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 182,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 235,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 320,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 362,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 377,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 160366,
            "range": "± 1891",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 301108,
            "range": "± 3336",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 296506,
            "range": "± 5621",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11720285,
            "range": "± 80800",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1998,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8294,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3148,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10886,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9871,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22795,
            "range": "± 553",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1902,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 310,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1078836,
            "range": "± 21245",
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
          "id": "5f30202c9ee133bbb072d6902794359bfe608dc8",
          "message": "Fix builds.",
          "timestamp": "2024-03-19T22:22:57+08:00",
          "tree_id": "35cad2a9decb8f0392d0faa22bb69ceec5541417",
          "url": "https://github.com/schungx/rhai/commit/5f30202c9ee133bbb072d6902794359bfe608dc8"
        },
        "date": 1710858604768,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 363821,
            "range": "± 16269",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 97,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 589,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1090,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1133,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5045486,
            "range": "± 65885",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 444,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 469,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10453,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8831,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10911,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 132,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 191,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 86,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 86,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1083658,
            "range": "± 8378",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1844242,
            "range": "± 11990",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1571002,
            "range": "± 23662",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 11335,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4725,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1360,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1422,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 327,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 361,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 670,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 652,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 233,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 289,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 176,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 174,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 221,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 314,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 361,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 399,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 175872,
            "range": "± 5035",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 299372,
            "range": "± 4241",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 341687,
            "range": "± 7738",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11244645,
            "range": "± 50885",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1972,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8381,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3253,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 11063,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 10099,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 23118,
            "range": "± 321",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1904,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 309,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 980340,
            "range": "± 24792",
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
          "id": "ab97a3adb6cf153d292e61fc2902386950b29ef8",
          "message": "Shut up clippy.",
          "timestamp": "2024-03-19T22:33:03+08:00",
          "tree_id": "7c095b5ce448837f74874c1218a6c8ffbed85b14",
          "url": "https://github.com/schungx/rhai/commit/ab97a3adb6cf153d292e61fc2902386950b29ef8"
        },
        "date": 1710859026679,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 360137,
            "range": "± 15498",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 95,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 545,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 986,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1001,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4496362,
            "range": "± 15089",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 401,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 403,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10331,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8734,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10837,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 136,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 193,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 86,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 86,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1084760,
            "range": "± 9085",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1857649,
            "range": "± 20432",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1577116,
            "range": "± 16978",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10306,
            "range": "± 245",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4431,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1377,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1421,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 324,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 361,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 678,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 666,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 235,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 296,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 176,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 175,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 213,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 311,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 396,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 379,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 158763,
            "range": "± 2217",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 285848,
            "range": "± 2534",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 277669,
            "range": "± 5526",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11146673,
            "range": "± 57402",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1957,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8411,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3259,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10989,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 10075,
            "range": "± 194",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 23186,
            "range": "± 618",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1828,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 304,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 939644,
            "range": "± 7640",
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
          "id": "804350477672ab4aff5fdd0bbf37a40f6c4ba988",
          "message": "Fix range indexing bug.",
          "timestamp": "2024-03-21T12:09:09+08:00",
          "tree_id": "c0ac0904e9b827fc4ff7ee04169a916173f6a521",
          "url": "https://github.com/schungx/rhai/commit/804350477672ab4aff5fdd0bbf37a40f6c4ba988"
        },
        "date": 1710994384255,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 369881,
            "range": "± 13514",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 97,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 598,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1009,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1009,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4577082,
            "range": "± 62945",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 438,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 444,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10467,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8751,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10958,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 134,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 190,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 86,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 86,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1084330,
            "range": "± 12748",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1851007,
            "range": "± 13307",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1571058,
            "range": "± 17025",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 11068,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4448,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1323,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1359,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 309,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 348,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 679,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 654,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 235,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 293,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 176,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 178,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 206,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 333,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 359,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 394,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 160485,
            "range": "± 3074",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 280524,
            "range": "± 8004",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 279786,
            "range": "± 6156",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11371006,
            "range": "± 47545",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1995,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8406,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3287,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 11141,
            "range": "± 245",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 10155,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 23319,
            "range": "± 452",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1884,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 299,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 995122,
            "range": "± 12144",
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
          "id": "d920568dbf9935c3d8c779f362c0e2cbd319457f",
          "message": "Fix crash.",
          "timestamp": "2024-03-24T12:01:28+08:00",
          "tree_id": "6f13358f890e8373256ccf2092b5394faa92d5b7",
          "url": "https://github.com/schungx/rhai/commit/d920568dbf9935c3d8c779f362c0e2cbd319457f"
        },
        "date": 1711253112371,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 368005,
            "range": "± 5351",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 96,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 632,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1012,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1035,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4650434,
            "range": "± 39939",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 414,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 430,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10296,
            "range": "± 182",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8896,
            "range": "± 241",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10917,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 135,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 191,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 86,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 86,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1084843,
            "range": "± 14395",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1887123,
            "range": "± 14084",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1581903,
            "range": "± 19019",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10390,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4509,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1380,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1370,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 372,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 487,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 684,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 661,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 236,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 290,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 180,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 181,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 221,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 327,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 377,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 383,
            "range": "± 344",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 159179,
            "range": "± 1924",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 276852,
            "range": "± 4141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 269198,
            "range": "± 113160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11325475,
            "range": "± 119724",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1966,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8364,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3276,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10927,
            "range": "± 202",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 10028,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 23016,
            "range": "± 256",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1915,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 318,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 966249,
            "range": "± 12849",
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
          "id": "e42d75e63aa41b51aaf697f988784e3fc44c502c",
          "message": "Fix struct size tests on 32-bit.",
          "timestamp": "2024-03-24T12:08:57+08:00",
          "tree_id": "943bbc9421ce34db0e38ad6700c75d3c4e026de0",
          "url": "https://github.com/schungx/rhai/commit/e42d75e63aa41b51aaf697f988784e3fc44c502c"
        },
        "date": 1711253557913,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 363540,
            "range": "± 11618",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 96,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 567,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1022,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1002,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4753360,
            "range": "± 41884",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 422,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 411,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10217,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8745,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10899,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 135,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 193,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 87,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 87,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 88,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1084974,
            "range": "± 27742",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1852652,
            "range": "± 18921",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1778614,
            "range": "± 51731",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10470,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4444,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1323,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1338,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 332,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 389,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 750,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 725,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 234,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 288,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 177,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 174,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 206,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 334,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 351,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 381,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 159553,
            "range": "± 29705",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 300420,
            "range": "± 13668",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 290409,
            "range": "± 4408",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11926169,
            "range": "± 633461",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1992,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8414,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3297,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 11006,
            "range": "± 186",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 10023,
            "range": "± 221",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 23332,
            "range": "± 467",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1847,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 313,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 946057,
            "range": "± 11165",
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
          "id": "263296519f74ed6271d778164c94b5e605875a00",
          "message": "Update test.",
          "timestamp": "2024-03-24T12:25:01+08:00",
          "tree_id": "d2d9bdf11bc1bc9e12cdf9fc52c5481ccce30756",
          "url": "https://github.com/schungx/rhai/commit/263296519f74ed6271d778164c94b5e605875a00"
        },
        "date": 1711254707764,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 371062,
            "range": "± 14984",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 95,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 573,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 982,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 995,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4691003,
            "range": "± 107792",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 428,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 417,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10338,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8801,
            "range": "± 1575",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 11014,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 133,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 191,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 86,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 86,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1083768,
            "range": "± 10510",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1859130,
            "range": "± 13468",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1579605,
            "range": "± 17568",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10768,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4979,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1306,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1335,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 369,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 424,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 677,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 647,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 237,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 295,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 180,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 179,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 206,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 323,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 345,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 385,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 158706,
            "range": "± 2722",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 278008,
            "range": "± 2730",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 285455,
            "range": "± 3023",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11280342,
            "range": "± 106029",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2019,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8498,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3260,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 11016,
            "range": "± 1741",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 10174,
            "range": "± 274",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22881,
            "range": "± 429",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1921,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 327,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 950843,
            "range": "± 7010",
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
          "id": "ef2a63d0d3a0f50339ce642a5f58bba43b31a7a0",
          "message": "Replace update_fn_comments with potentially more useful get_fn_metadata_mut.",
          "timestamp": "2024-03-25T20:27:01+08:00",
          "tree_id": "2bae167a095fcf7f37321be7109455a6fd090066",
          "url": "https://github.com/schungx/rhai/commit/ef2a63d0d3a0f50339ce642a5f58bba43b31a7a0"
        },
        "date": 1711369927823,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 377867,
            "range": "± 21855",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 100,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 641,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 987,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1010,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4694017,
            "range": "± 435062",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 414,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 419,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10840,
            "range": "± 790",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 9111,
            "range": "± 293",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 11276,
            "range": "± 3195",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 133,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 192,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 86,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 86,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1094594,
            "range": "± 13994",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1853976,
            "range": "± 24129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1580103,
            "range": "± 31370",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10670,
            "range": "± 276",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4629,
            "range": "± 295",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1260,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1355,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 321,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 370,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 692,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 694,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 233,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 289,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 176,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 176,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 213,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 335,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 383,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 389,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 159735,
            "range": "± 2870",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 299572,
            "range": "± 26834",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 308608,
            "range": "± 41427",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11493044,
            "range": "± 737370",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2022,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8571,
            "range": "± 794",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3239,
            "range": "± 616",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 11279,
            "range": "± 1305",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 10411,
            "range": "± 1538",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 24468,
            "range": "± 3643",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1985,
            "range": "± 398",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 304,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1060859,
            "range": "± 131574",
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
          "id": "08ff3c0d478b9bbb21079a44ac44379a60b44a19",
          "message": "Fix empty lines bug",
          "timestamp": "2024-03-25T23:34:20+08:00",
          "tree_id": "5d019194292993d0a570814051c70340f428b60d",
          "url": "https://github.com/schungx/rhai/commit/08ff3c0d478b9bbb21079a44ac44379a60b44a19"
        },
        "date": 1711381102529,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 365598,
            "range": "± 15375",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 101,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 560,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 966,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1075,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4842426,
            "range": "± 75554",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 415,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 406,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10597,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8877,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 11101,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 132,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 191,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 86,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 86,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1086367,
            "range": "± 11266",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1850906,
            "range": "± 12923",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1578799,
            "range": "± 45742",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10792,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4726,
            "range": "± 196",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1261,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1324,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 323,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 395,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 685,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 692,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 233,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 291,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 181,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 182,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 207,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 334,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 373,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 392,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 170583,
            "range": "± 2601",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 296773,
            "range": "± 4975",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 289672,
            "range": "± 4276",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11396373,
            "range": "± 41142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1959,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8466,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3185,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 11207,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9985,
            "range": "± 249",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 23291,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1817,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 301,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 954210,
            "range": "± 6594",
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
          "id": "af64584a9bad86baa407dc00d1dc32ac92c139d0",
          "message": "Fix try block optimizer bug.",
          "timestamp": "2024-04-03T19:19:57+08:00",
          "tree_id": "df51decfd7c80e6fafe830c63af9c9417762d2ad",
          "url": "https://github.com/schungx/rhai/commit/af64584a9bad86baa407dc00d1dc32ac92c139d0"
        },
        "date": 1712143407252,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 369106,
            "range": "± 13365",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 96,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 563,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 995,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 990,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4976961,
            "range": "± 87986",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 399,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 417,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10490,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8887,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10942,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 137,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 191,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 85,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 85,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 85,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1088461,
            "range": "± 31102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1859138,
            "range": "± 21123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1574214,
            "range": "± 11110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10301,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4469,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1433,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1513,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 420,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 468,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 663,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 648,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 234,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 297,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 179,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 177,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 220,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 334,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 364,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 386,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 159487,
            "range": "± 2626",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 277870,
            "range": "± 2335",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 267523,
            "range": "± 4265",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11310386,
            "range": "± 152888",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1980,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8351,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3148,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 11135,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9977,
            "range": "± 233",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 23428,
            "range": "± 445",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1869,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 306,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1036999,
            "range": "± 22400",
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
          "id": "fd281a413acb531fe910ac8bf597335e52c88bbb",
          "message": "Bump codegen version",
          "timestamp": "2024-04-12T12:58:15+08:00",
          "tree_id": "bd6f0841ffe5a44b9911fb91c711fa12e22e0785",
          "url": "https://github.com/schungx/rhai/commit/fd281a413acb531fe910ac8bf597335e52c88bbb"
        },
        "date": 1712898406112,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 361953,
            "range": "± 11434",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 99,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 576,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1065,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1056,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5115605,
            "range": "± 33697",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 460,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 472,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10152,
            "range": "± 482",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8666,
            "range": "± 203",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10851,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 132,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 191,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 85,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 85,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 85,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1335207,
            "range": "± 61237",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1912014,
            "range": "± 34020",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1683358,
            "range": "± 27368",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10322,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4637,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1323,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1362,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 323,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 392,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 710,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 703,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 234,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 295,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 176,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 180,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 246,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 336,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 411,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 381,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 161609,
            "range": "± 2977",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 277395,
            "range": "± 3369",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 270432,
            "range": "± 5141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11299756,
            "range": "± 74282",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1961,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8308,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3267,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10855,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9867,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22929,
            "range": "± 263",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1847,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 303,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1067748,
            "range": "± 18220",
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
          "id": "5d331a9a15af176cf12a0c5cc9e3479aef5abae7",
          "message": "Invoke variable resolver for captured variables in closures",
          "timestamp": "2024-04-16T09:11:17+08:00",
          "tree_id": "ca428bb5c12f52a9e10df5b083385d3781397fa5",
          "url": "https://github.com/schungx/rhai/commit/5d331a9a15af176cf12a0c5cc9e3479aef5abae7"
        },
        "date": 1713231664728,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 371177,
            "range": "± 5749",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 96,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 557,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1038,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1036,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5413601,
            "range": "± 55893",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 400,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 404,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10253,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8677,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 11010,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 136,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 202,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 85,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 86,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1126630,
            "range": "± 19444",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1898570,
            "range": "± 13992",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1641565,
            "range": "± 25232",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10573,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4483,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1316,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1395,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 339,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 393,
            "range": "± 349",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 666,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 642,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 240,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 297,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 178,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 179,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 229,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 334,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 360,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 396,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 159208,
            "range": "± 2672",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 279715,
            "range": "± 7796",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 266808,
            "range": "± 3483",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11395969,
            "range": "± 46305",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2003,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8398,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3195,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 11060,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9942,
            "range": "± 437",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 23251,
            "range": "± 242",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1846,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 305,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1055054,
            "range": "± 13457",
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
          "id": "071b54bfad8ffd7495b66d7f71b6de0d0d4ab6c9",
          "message": "Add $func$ to custom syntax.",
          "timestamp": "2024-05-11T05:08:28+08:00",
          "tree_id": "f83c833f34087310d70777baadb38545261b6382",
          "url": "https://github.com/schungx/rhai/commit/071b54bfad8ffd7495b66d7f71b6de0d0d4ab6c9"
        },
        "date": 1715375529335,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 363539,
            "range": "± 7600",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 101,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 556,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 956,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 962,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4382622,
            "range": "± 27839",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 389,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 402,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9775,
            "range": "± 240",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8440,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10631,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 149,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 206,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 86,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 86,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1067798,
            "range": "± 7893",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1844885,
            "range": "± 12373",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1601305,
            "range": "± 15277",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10346,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4401,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1211,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1260,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 299,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 335,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 680,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 659,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 229,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 296,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 178,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 183,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 209,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 316,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 341,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 369,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 160108,
            "range": "± 3092",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 277938,
            "range": "± 3509",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 269718,
            "range": "± 4322",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11142599,
            "range": "± 153291",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1929,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8109,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3019,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10568,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9628,
            "range": "± 208",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22366,
            "range": "± 336",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1774,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 297,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 971706,
            "range": "± 11544",
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
          "id": "dc37f6e608b7fd679973da82865a3fd661e731d6",
          "message": "Fix bug.",
          "timestamp": "2024-05-11T05:59:23+08:00",
          "tree_id": "e59c7862cec86978d82d17c7de453b3576e12d12",
          "url": "https://github.com/schungx/rhai/commit/dc37f6e608b7fd679973da82865a3fd661e731d6"
        },
        "date": 1715378591063,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 366158,
            "range": "± 5124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 94,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 568,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1107,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 999,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4368579,
            "range": "± 22611",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 390,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 441,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9962,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8422,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10675,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 133,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 191,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 85,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 85,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 85,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1068038,
            "range": "± 9419",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1846089,
            "range": "± 14559",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1571584,
            "range": "± 12212",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10310,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4472,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1241,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1290,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 296,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 345,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 652,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 634,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 232,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 297,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 179,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 179,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 246,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 336,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 386,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 380,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 182703,
            "range": "± 14839",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 311331,
            "range": "± 7470",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 302259,
            "range": "± 4474",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11465843,
            "range": "± 101561",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1986,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8035,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3093,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10582,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9653,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22818,
            "range": "± 477",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1849,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 298,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 938750,
            "range": "± 10232",
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
          "id": "e6caf3a2c9c492050750d10fd7ba6392e22e9c9d",
          "message": "Fix test.",
          "timestamp": "2024-05-11T06:11:58+08:00",
          "tree_id": "666727a8f8e1cfe8198118026902e467e034cca7",
          "url": "https://github.com/schungx/rhai/commit/e6caf3a2c9c492050750d10fd7ba6392e22e9c9d"
        },
        "date": 1715379343670,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 363378,
            "range": "± 6971",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 96,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 528,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 959,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1070,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4476277,
            "range": "± 26227",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 411,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 419,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10035,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8463,
            "range": "± 228",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10607,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 133,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 191,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 85,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 85,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1068471,
            "range": "± 12980",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1843771,
            "range": "± 14963",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1572354,
            "range": "± 30453",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10331,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4543,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1210,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1267,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 299,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 358,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 708,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 684,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 271,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 335,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 220,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 217,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 206,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 306,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 346,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 352,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 158216,
            "range": "± 1347",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 274499,
            "range": "± 1422",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 265996,
            "range": "± 1735",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11232514,
            "range": "± 94919",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1963,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8108,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3089,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10531,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9602,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22684,
            "range": "± 311",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1801,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 294,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 952719,
            "range": "± 15637",
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
          "id": "031a5a934809bc5879955a9623dbc961cc4b8279",
          "message": "Add FnPtr to get_literal_value.",
          "timestamp": "2024-05-11T06:38:46+08:00",
          "tree_id": "95f8181b4c32a33d11ee329a9276618632c0d58e",
          "url": "https://github.com/schungx/rhai/commit/031a5a934809bc5879955a9623dbc961cc4b8279"
        },
        "date": 1715380969972,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 370208,
            "range": "± 5980",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 33,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 95,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 559,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 959,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 958,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4481806,
            "range": "± 44767",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 388,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 404,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10333,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8538,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 11010,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 137,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 196,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 91,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 91,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 91,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1068509,
            "range": "± 11147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1850799,
            "range": "± 19439",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1571798,
            "range": "± 22019",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10302,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4666,
            "range": "± 288",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1208,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1297,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 296,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 343,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 697,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 682,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 232,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 295,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 178,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 179,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 207,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 312,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 342,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 357,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 166390,
            "range": "± 1643",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 282702,
            "range": "± 3233",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 274634,
            "range": "± 3501",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11144011,
            "range": "± 151709",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1979,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8070,
            "range": "± 218",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3085,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10523,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9791,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22837,
            "range": "± 297",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1804,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 291,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 918367,
            "range": "± 7201",
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
          "id": "c014343ff19ce4ba4422f9228dbd5d3ced4cbf9a",
          "message": "Add missing min/max functions.",
          "timestamp": "2024-05-21T23:14:29+08:00",
          "tree_id": "986644875104f72479ca51dc6d626048a67c1bfa",
          "url": "https://github.com/schungx/rhai/commit/c014343ff19ce4ba4422f9228dbd5d3ced4cbf9a"
        },
        "date": 1716304685511,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 367801.14,
            "range": "± 4922.73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31.61,
            "range": "± 0.61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 94.74,
            "range": "± 1.76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 629.64,
            "range": "± 20.43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 943.2,
            "range": "± 17.14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 941.99,
            "range": "± 32.08",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4493499.9,
            "range": "± 51412.79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 382.97,
            "range": "± 6.58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 404.15,
            "range": "± 2.73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10107.89,
            "range": "± 206.29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8376.19,
            "range": "± 161.89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10803.43,
            "range": "± 276.35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 133.98,
            "range": "± 2.36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 193,
            "range": "± 2.55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 86.51,
            "range": "± 1.73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 88.88,
            "range": "± 0.94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86.26,
            "range": "± 1.36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1043612.4,
            "range": "± 11948.21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1937276.8,
            "range": "± 29168.79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1545413.5,
            "range": "± 19043.54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10348.66,
            "range": "± 87.64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4437.89,
            "range": "± 50.91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1243.53,
            "range": "± 27.11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1298.85,
            "range": "± 23.26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 292.07,
            "range": "± 3.83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 349.27,
            "range": "± 4.05",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 664.15,
            "range": "± 13.70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 646.65,
            "range": "± 19.80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 233.05,
            "range": "± 2.89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 293.63,
            "range": "± 4.40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 177.66,
            "range": "± 2.60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 180.18,
            "range": "± 3.23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 203.97,
            "range": "± 2.51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 309.21,
            "range": "± 5.40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 399.46,
            "range": "± 7.09",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 386.59,
            "range": "± 6.61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 157519.98,
            "range": "± 2447.24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 275621.23,
            "range": "± 4598.56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 266227.03,
            "range": "± 4826.82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11202553.9,
            "range": "± 53711.45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1977.09,
            "range": "± 20.43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8002.24,
            "range": "± 77.38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3147.88,
            "range": "± 40.43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10587.4,
            "range": "± 654.25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9451.69,
            "range": "± 120.94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22308.95,
            "range": "± 710.24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1758.22,
            "range": "± 24.57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 290.4,
            "range": "± 6.32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 921324.7,
            "range": "± 14529.41",
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
          "id": "a191b6f6391fa7762314f927963798dd18f68d03",
          "message": "Add ?? break/continue/return/throw.",
          "timestamp": "2024-05-22T00:03:17+08:00",
          "tree_id": "2729768932b37c31ef8da18157a1ce1d0ed17030",
          "url": "https://github.com/schungx/rhai/commit/a191b6f6391fa7762314f927963798dd18f68d03"
        },
        "date": 1716307627488,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 361752.3,
            "range": "± 9083.08",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31.65,
            "range": "± 0.46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 93.09,
            "range": "± 1.03",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 556.67,
            "range": "± 20.74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 963.61,
            "range": "± 19.27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 964.28,
            "range": "± 39.14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4444532.65,
            "range": "± 73361.49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 383.48,
            "range": "± 6.26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 405.15,
            "range": "± 4.61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10104.42,
            "range": "± 179.98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8403.22,
            "range": "± 103.78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10833.03,
            "range": "± 588.65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 135.85,
            "range": "± 2.40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 193.15,
            "range": "± 1.17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 88.79,
            "range": "± 1.08",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 88.44,
            "range": "± 1.92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 88.35,
            "range": "± 1.31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1044226.4,
            "range": "± 8452.00",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1941068.1,
            "range": "± 41831.16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1578747.35,
            "range": "± 17020.72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10188.9,
            "range": "± 80.97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4436.94,
            "range": "± 63.81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1243.47,
            "range": "± 25.51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1299.7,
            "range": "± 41.32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 295.13,
            "range": "± 7.48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 348.7,
            "range": "± 9.96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 663.54,
            "range": "± 8.99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 644.79,
            "range": "± 14.18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 237.02,
            "range": "± 5.29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 311.34,
            "range": "± 10.64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 179.05,
            "range": "± 11.53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 178.87,
            "range": "± 4.13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 267.07,
            "range": "± 5.15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 373.47,
            "range": "± 4.93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 409.21,
            "range": "± 3.97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 430.08,
            "range": "± 7.86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 157617.16,
            "range": "± 3256.50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 279871.97,
            "range": "± 5143.50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 270887.57,
            "range": "± 5034.78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11198377.9,
            "range": "± 387683.55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1933.03,
            "range": "± 33.07",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8101.51,
            "range": "± 411.56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3025.22,
            "range": "± 64.89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10758.3,
            "range": "± 149.64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9727.66,
            "range": "± 213.33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22104.72,
            "range": "± 348.98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1768.23,
            "range": "± 36.04",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 303.64,
            "range": "± 9.30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 904804.6,
            "range": "± 14667.20",
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
          "id": "dc43481fbf967957d60429594607466c968558fb",
          "message": "Fix stack overflow bug.",
          "timestamp": "2024-05-23T02:06:37+08:00",
          "tree_id": "465d2bb913108eecfa51af41f7f3a9d57395a30a",
          "url": "https://github.com/schungx/rhai/commit/dc43481fbf967957d60429594607466c968558fb"
        },
        "date": 1716401424834,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 363312.81,
            "range": "± 4009.57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 33.21,
            "range": "± 0.35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 96.14,
            "range": "± 1.61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 553.67,
            "range": "± 11.58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 979.65,
            "range": "± 25.08",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 974.41,
            "range": "± 35.58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4544105.4,
            "range": "± 30028.83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 384.88,
            "range": "± 27.37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 404.98,
            "range": "± 11.47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10284.76,
            "range": "± 186.13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8597.61,
            "range": "± 102.78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10840.35,
            "range": "± 186.27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 133.33,
            "range": "± 1.60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 191.76,
            "range": "± 2.10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 86.05,
            "range": "± 1.60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 85.91,
            "range": "± 1.37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86,
            "range": "± 1.47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1050247.5,
            "range": "± 10785.40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1864234.2,
            "range": "± 20456.07",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1529966.3,
            "range": "± 24434.73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10370.83,
            "range": "± 137.29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4565.2,
            "range": "± 74.16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1307.17,
            "range": "± 19.24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1342.38,
            "range": "± 329.53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 283,
            "range": "± 3.20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 336.53,
            "range": "± 4.45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 671.7,
            "range": "± 13.08",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 655.48,
            "range": "± 14.94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 230.22,
            "range": "± 3.55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 293.35,
            "range": "± 6.91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 178.28,
            "range": "± 3.81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 179.2,
            "range": "± 4.32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 213.69,
            "range": "± 8.81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 336.1,
            "range": "± 9.25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 357.62,
            "range": "± 13.70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 399.05,
            "range": "± 5.99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 156804.04,
            "range": "± 1131.19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 275095.13,
            "range": "± 3362.50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 261613.57,
            "range": "± 2382.38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11097587.6,
            "range": "± 76332.97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1935.48,
            "range": "± 28.67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8013.84,
            "range": "± 149.18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3002.18,
            "range": "± 26.68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10874.78,
            "range": "± 139.34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9667.89,
            "range": "± 131.28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22321.97,
            "range": "± 207.63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1764.69,
            "range": "± 23.88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 293.45,
            "range": "± 5.97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 909575.05,
            "range": "± 5296.86",
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
          "id": "307afe2f3e409eb9b600a4bac3563fa843b28777",
          "message": "Use source of AST for call_fn.",
          "timestamp": "2024-06-03T12:06:24+08:00",
          "tree_id": "912924dcaf8a4dfdceb895f921092b27ff6db925",
          "url": "https://github.com/schungx/rhai/commit/307afe2f3e409eb9b600a4bac3563fa843b28777"
        },
        "date": 1717387995019,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 368914.6,
            "range": "± 16074.68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31.34,
            "range": "± 0.25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 95.32,
            "range": "± 2.26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 542.85,
            "range": "± 23.17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1021.21,
            "range": "± 20.33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1056.4,
            "range": "± 19.67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4346136.4,
            "range": "± 36457.05",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 392.4,
            "range": "± 18.66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 407.73,
            "range": "± 23.23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10335.5,
            "range": "± 100.84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8528.15,
            "range": "± 171.95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10801.84,
            "range": "± 141.48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 134.61,
            "range": "± 2.84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 192.13,
            "range": "± 2.77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 86.81,
            "range": "± 0.58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 86.83,
            "range": "± 2.10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 85.9,
            "range": "± 0.95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1042994.7,
            "range": "± 20888.28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1874638.5,
            "range": "± 16164.26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1512946.95,
            "range": "± 15788.72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10235.08,
            "range": "± 64.79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4359.57,
            "range": "± 44.38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1322.54,
            "range": "± 10.80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1362.64,
            "range": "± 32.00",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 291.8,
            "range": "± 2.00",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 341.6,
            "range": "± 5.39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 670.9,
            "range": "± 15.14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 660.42,
            "range": "± 17.23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 270.56,
            "range": "± 4.39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 326.92,
            "range": "± 8.59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 214.05,
            "range": "± 35.56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 212.58,
            "range": "± 5.87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 215.8,
            "range": "± 7.04",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 314.38,
            "range": "± 5.29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 364.43,
            "range": "± 16.92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 376.39,
            "range": "± 7.83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 158291.52,
            "range": "± 4369.65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 298292.92,
            "range": "± 4384.28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 290193.48,
            "range": "± 7354.13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11204369.1,
            "range": "± 67093.68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1988.32,
            "range": "± 23.45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8195.19,
            "range": "± 227.82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3092.15,
            "range": "± 39.95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10584.19,
            "range": "± 202.14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9605.2,
            "range": "± 118.25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22330.59,
            "range": "± 503.01",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1811.36,
            "range": "± 35.22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 309.17,
            "range": "± 6.59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 946025.65,
            "range": "± 18742.64",
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
          "id": "d35fdde094b3c68a1bfe2392ed9f10c180c3890b",
          "message": "Fix inclusive range bug",
          "timestamp": "2024-06-06T09:39:44+08:00",
          "tree_id": "26e7fe28a593565bffb4233794b4679e7731fecf",
          "url": "https://github.com/schungx/rhai/commit/d35fdde094b3c68a1bfe2392ed9f10c180c3890b"
        },
        "date": 1717638218726,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 366904.3,
            "range": "± 13913.46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31.6,
            "range": "± 0.47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 92.97,
            "range": "± 1.26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 581.22,
            "range": "± 22.24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1096.07,
            "range": "± 20.20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1096.73,
            "range": "± 15.07",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4597016.7,
            "range": "± 43671.21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 441.08,
            "range": "± 15.44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 452.64,
            "range": "± 25.04",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9997.76,
            "range": "± 110.08",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8522.14,
            "range": "± 55.53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10736.28,
            "range": "± 115.56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 133.97,
            "range": "± 3.53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 191.63,
            "range": "± 3.74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 86.03,
            "range": "± 1.48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 86.33,
            "range": "± 0.77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86.73,
            "range": "± 2.27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1050157.2,
            "range": "± 15006.28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1848888,
            "range": "± 9761.20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1512863.1,
            "range": "± 28422.47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10503.73,
            "range": "± 113.52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4533.48,
            "range": "± 103.91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1240.56,
            "range": "± 24.25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1303.9,
            "range": "± 19.11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 323,
            "range": "± 4.02",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 381.97,
            "range": "± 11.58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 675.23,
            "range": "± 25.28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 688.44,
            "range": "± 26.81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 243.59,
            "range": "± 6.94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 292.26,
            "range": "± 14.59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 175.45,
            "range": "± 2.59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 177.95,
            "range": "± 2.47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 219.9,
            "range": "± 4.09",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 327.22,
            "range": "± 6.43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 375.58,
            "range": "± 9.64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 392.24,
            "range": "± 6.80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 157068.66,
            "range": "± 2584.88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 305150.47,
            "range": "± 4419.50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 294600.43,
            "range": "± 3988.44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11123220.5,
            "range": "± 48587.68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1987.88,
            "range": "± 42.86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8115.81,
            "range": "± 189.09",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3054.34,
            "range": "± 43.88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10693.92,
            "range": "± 99.42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9595.38,
            "range": "± 256.15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22900.95,
            "range": "± 1623.78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1771.16,
            "range": "± 22.76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 296.98,
            "range": "± 4.43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 920543.9,
            "range": "± 11209.65",
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
          "id": "2bf4b723265552c27665a0096b4c1593b028efd4",
          "message": "Fix test.",
          "timestamp": "2024-06-06T09:51:55+08:00",
          "tree_id": "c2bf039d22d22f3b744dce9a1a0b8197630bdffe",
          "url": "https://github.com/schungx/rhai/commit/2bf4b723265552c27665a0096b4c1593b028efd4"
        },
        "date": 1717638983642,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 368132.02,
            "range": "± 17492.34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31.64,
            "range": "± 0.75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 94.07,
            "range": "± 4.19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 582.41,
            "range": "± 26.33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 956.36,
            "range": "± 16.33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 980.06,
            "range": "± 43.02",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4369925.4,
            "range": "± 41054.95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 384.1,
            "range": "± 6.97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 404.56,
            "range": "± 8.04",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9958.78,
            "range": "± 443.91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8490.94,
            "range": "± 175.81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10555.64,
            "range": "± 226.05",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 168.97,
            "range": "± 2.87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 228.05,
            "range": "± 4.76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 121.53,
            "range": "± 2.47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 122.09,
            "range": "± 2.04",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 121.3,
            "range": "± 1.12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1041424.2,
            "range": "± 12769.48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1861918.8,
            "range": "± 18951.31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1514203.6,
            "range": "± 15852.56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10409.15,
            "range": "± 179.32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4516.51,
            "range": "± 78.00",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1320.72,
            "range": "± 47.27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1282.8,
            "range": "± 76.83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 339.97,
            "range": "± 11.07",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 350.32,
            "range": "± 27.72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 679.64,
            "range": "± 17.81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 696.65,
            "range": "± 19.43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 235.28,
            "range": "± 4.42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 292.75,
            "range": "± 13.08",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 176.83,
            "range": "± 3.88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 176.18,
            "range": "± 3.78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 210.9,
            "range": "± 4.05",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 322.75,
            "range": "± 6.19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 360.31,
            "range": "± 7.72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 387.54,
            "range": "± 7.24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 156204.02,
            "range": "± 2398.32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 268920.93,
            "range": "± 10016.08",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 260812.73,
            "range": "± 4301.91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11612559.8,
            "range": "± 131527.08",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1998.22,
            "range": "± 37.20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8155.53,
            "range": "± 161.56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3083.52,
            "range": "± 43.42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10643.98,
            "range": "± 254.62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9695.63,
            "range": "± 221.14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22558.59,
            "range": "± 531.50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1857.38,
            "range": "± 51.92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 303.12,
            "range": "± 9.06",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 956776.5,
            "range": "± 24384.59",
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
          "id": "423f21edf98caf63b9d6cc18974977758b309ade",
          "message": "Add filter, drain and retain to maps.",
          "timestamp": "2024-06-13T11:35:11+08:00",
          "tree_id": "a51395fe665a12b9bbeebba69fc2d93d5e713f4c",
          "url": "https://github.com/schungx/rhai/commit/423f21edf98caf63b9d6cc18974977758b309ade"
        },
        "date": 1718262778714,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 364199.4,
            "range": "± 11208.38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 32.81,
            "range": "± 0.19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 95.18,
            "range": "± 2.32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 538.68,
            "range": "± 12.56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 937.63,
            "range": "± 17.99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 971.23,
            "range": "± 13.93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4631566.9,
            "range": "± 65798.22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 425.73,
            "range": "± 6.59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 400.6,
            "range": "± 6.17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10101.07,
            "range": "± 122.70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8623.05,
            "range": "± 119.54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 11019.58,
            "range": "± 164.56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 134.35,
            "range": "± 2.17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 193.7,
            "range": "± 3.52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 86.04,
            "range": "± 1.05",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 86.04,
            "range": "± 1.39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86,
            "range": "± 1.15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1049960.2,
            "range": "± 9056.36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1843349.6,
            "range": "± 18600.26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1525891.1,
            "range": "± 20852.30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10186.57,
            "range": "± 97.17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4423.64,
            "range": "± 91.41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1240.45,
            "range": "± 43.90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1276.1,
            "range": "± 30.47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 294.9,
            "range": "± 5.09",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 328.89,
            "range": "± 10.10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 674.6,
            "range": "± 39.25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 644.36,
            "range": "± 11.05",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 235.4,
            "range": "± 6.03",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 292.45,
            "range": "± 6.06",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 177.46,
            "range": "± 3.87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 175.59,
            "range": "± 2.73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 205.71,
            "range": "± 5.03",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 321.17,
            "range": "± 5.60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 370.62,
            "range": "± 122.53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 369.36,
            "range": "± 7.08",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 155074.86,
            "range": "± 1522.36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 272707.13,
            "range": "± 2870.41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 263420.77,
            "range": "± 2059.21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11514057.3,
            "range": "± 118869.38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1984.5,
            "range": "± 26.54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8216.71,
            "range": "± 347.33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3186.63,
            "range": "± 71.04",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10749.69,
            "range": "± 175.22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9764.82,
            "range": "± 107.98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22632.95,
            "range": "± 331.47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1791.53,
            "range": "± 24.14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 302.19,
            "range": "± 4.28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 920671,
            "range": "± 324366.79",
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
          "id": "112e6e4054dd93a4383d1887cda137d2e9c6dfa3",
          "message": "Fix stack overflow",
          "timestamp": "2024-06-15T13:07:07+08:00",
          "tree_id": "20413740146535ddc27d23859db37a433bc1ec1c",
          "url": "https://github.com/schungx/rhai/commit/112e6e4054dd93a4383d1887cda137d2e9c6dfa3"
        },
        "date": 1718428417691,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 363442.1,
            "range": "± 16693.79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 32.5,
            "range": "± 0.27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 95.33,
            "range": "± 2.23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 563.6,
            "range": "± 9.58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 930.73,
            "range": "± 18.78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 954.4,
            "range": "± 6.04",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4516815.3,
            "range": "± 54819.18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 383.69,
            "range": "± 20.46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 415.77,
            "range": "± 9.53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9718.58,
            "range": "± 216.70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8393.64,
            "range": "± 130.80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10410.51,
            "range": "± 322.06",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 133.11,
            "range": "± 2.80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 191.09,
            "range": "± 1.97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 86.16,
            "range": "± 1.66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 86.17,
            "range": "± 1.28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86.07,
            "range": "± 1.17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1045923.5,
            "range": "± 31014.09",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1878400.8,
            "range": "± 23980.39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1516230.2,
            "range": "± 14217.96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10362.16,
            "range": "± 130.57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4625.25,
            "range": "± 75.34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1371.31,
            "range": "± 16.64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1405.97,
            "range": "± 14.00",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 293.17,
            "range": "± 5.15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 333.12,
            "range": "± 7.19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 671.63,
            "range": "± 23.32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 640.41,
            "range": "± 98.65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 278.54,
            "range": "± 7.08",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 329.82,
            "range": "± 8.11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 211.83,
            "range": "± 5.78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 213.79,
            "range": "± 5.98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 214.39,
            "range": "± 4.44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 308.58,
            "range": "± 8.61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 348.67,
            "range": "± 5.47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 381.77,
            "range": "± 8.79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 155635.5,
            "range": "± 2334.11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 269480.23,
            "range": "± 1411.53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 260947.7,
            "range": "± 2727.09",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11238666.1,
            "range": "± 252717.65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1945.77,
            "range": "± 37.79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8646.82,
            "range": "± 81.36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3040.74,
            "range": "± 34.25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 11278.26,
            "range": "± 167.27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 10174.04,
            "range": "± 115.66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22430.53,
            "range": "± 276.47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1868.3,
            "range": "± 34.71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 301.72,
            "range": "± 4.40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 909466.6,
            "range": "± 19764.05",
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
          "id": "36f6b6766873a8992f1dfc342783b5e7920777a7",
          "message": "Fix stack overflow.",
          "timestamp": "2024-06-24T17:06:37+08:00",
          "tree_id": "a990eeb3c5e62d858a9346d57b011c185020629b",
          "url": "https://github.com/schungx/rhai/commit/36f6b6766873a8992f1dfc342783b5e7920777a7"
        },
        "date": 1719220250753,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 368246.67,
            "range": "± 5463.33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31.62,
            "range": "± 0.74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 95.91,
            "range": "± 1.13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 561.77,
            "range": "± 14.90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 986.28,
            "range": "± 21.21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 998.92,
            "range": "± 29.88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4577475.3,
            "range": "± 47636.08",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 405.82,
            "range": "± 9.94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 414.85,
            "range": "± 10.41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9745.45,
            "range": "± 196.97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8313.98,
            "range": "± 178.17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10350.79,
            "range": "± 116.73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 132.29,
            "range": "± 3.42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 189.71,
            "range": "± 2.46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 85.83,
            "range": "± 1.42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 85.85,
            "range": "± 1.72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86.27,
            "range": "± 1.06",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1133141.71,
            "range": "± 28758.71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2107055,
            "range": "± 21056.91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1549598.6,
            "range": "± 20427.44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10771.04,
            "range": "± 105.46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 5056.15,
            "range": "± 62.92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1245.94,
            "range": "± 19.95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1278.58,
            "range": "± 25.29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 310.94,
            "range": "± 16.06",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 362.16,
            "range": "± 46.90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 695.71,
            "range": "± 16.93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 672.63,
            "range": "± 5.36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 233.55,
            "range": "± 7.06",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 292.54,
            "range": "± 6.07",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 181.11,
            "range": "± 4.42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 178.16,
            "range": "± 3.59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 227.36,
            "range": "± 3.91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 315.84,
            "range": "± 5.22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 406.49,
            "range": "± 4.21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 379.98,
            "range": "± 8.66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 159484.94,
            "range": "± 4089.55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 309402.07,
            "range": "± 9539.03",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 294908.37,
            "range": "± 7325.34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11696756.1,
            "range": "± 147067.21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1906.25,
            "range": "± 33.42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8161.99,
            "range": "± 215.50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3024.03,
            "range": "± 60.16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10601.95,
            "range": "± 150.65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9789.06,
            "range": "± 254.03",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22268.72,
            "range": "± 481.67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1765.72,
            "range": "± 69.75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 300.2,
            "range": "± 3.85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 970728.1,
            "range": "± 18876.22",
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
          "id": "5751f0d2daadf1f8b90c8600bac6cad1dc3ff1eb",
          "message": "Bump version.",
          "timestamp": "2024-07-04T19:08:49+08:00",
          "tree_id": "2dd2d2fb1ff20c27d77c859e9fdfb240734998c9",
          "url": "https://github.com/schungx/rhai/commit/5751f0d2daadf1f8b90c8600bac6cad1dc3ff1eb"
        },
        "date": 1720091957176,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 368932.5,
            "range": "± 16347.12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 30.95,
            "range": "± 0.28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 93.53,
            "range": "± 1.80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 533.8,
            "range": "± 13.17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 989.06,
            "range": "± 28.57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 998.5,
            "range": "± 32.27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4712815.2,
            "range": "± 71548.75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 381.46,
            "range": "± 6.00",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 412.83,
            "range": "± 5.96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9830.12,
            "range": "± 180.61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8290.01,
            "range": "± 215.80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10408.04,
            "range": "± 121.00",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 134.18,
            "range": "± 4.23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 191.01,
            "range": "± 3.23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 87.46,
            "range": "± 1.15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 87.38,
            "range": "± 0.77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 87.28,
            "range": "± 0.73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1047118.7,
            "range": "± 15372.66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1984253.2,
            "range": "± 16005.91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1523782,
            "range": "± 15787.50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10565.47,
            "range": "± 62.29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4598.95,
            "range": "± 105.02",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1269.12,
            "range": "± 16.00",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1314.32,
            "range": "± 13.52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 296.95,
            "range": "± 313.27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 371.65,
            "range": "± 10.59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 763.11,
            "range": "± 19.50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 696.97,
            "range": "± 32.62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 231.37,
            "range": "± 5.10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 297.22,
            "range": "± 9.80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 179.93,
            "range": "± 3.70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 181.89,
            "range": "± 3.78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 220.2,
            "range": "± 6.76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 325.99,
            "range": "± 2.24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 374.71,
            "range": "± 9.40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 389.16,
            "range": "± 3.18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 158327.17,
            "range": "± 2699.30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 279523.27,
            "range": "± 2548.53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 268837.63,
            "range": "± 3157.73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11806105,
            "range": "± 42454.14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1846.03,
            "range": "± 33.28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 7795.19,
            "range": "± 140.01",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 2933.17,
            "range": "± 117.54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10415.48,
            "range": "± 123.07",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9488.54,
            "range": "± 142.34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 21726.03,
            "range": "± 278.57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1740.64,
            "range": "± 47.41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 298.04,
            "range": "± 7.77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 961276.1,
            "range": "± 13570.38",
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
          "id": "cb710f14aa2c04b5fbb332e56e766ad43afc409e",
          "message": "Better parsing for break/return/throw.",
          "timestamp": "2024-07-05T12:19:55+08:00",
          "tree_id": "8420116adf058f2f66ff539281f0f7f2ddaa696f",
          "url": "https://github.com/schungx/rhai/commit/cb710f14aa2c04b5fbb332e56e766ad43afc409e"
        },
        "date": 1720153411101,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 366057.5,
            "range": "± 5444.58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31.58,
            "range": "± 0.56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 95.79,
            "range": "± 2.05",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 586.58,
            "range": "± 16.49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 967.62,
            "range": "± 24.82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 966.55,
            "range": "± 23.82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4967663.1,
            "range": "± 143185.89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 392.37,
            "range": "± 6.23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 412.14,
            "range": "± 20.10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9891.58,
            "range": "± 229.49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8246.96,
            "range": "± 168.91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10576.64,
            "range": "± 137.69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 133.14,
            "range": "± 2.50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 192.24,
            "range": "± 3.71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 87.49,
            "range": "± 1.14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 87.19,
            "range": "± 0.69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 87.46,
            "range": "± 1.18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1046733.9,
            "range": "± 17852.13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1996153.5,
            "range": "± 19036.99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1514266.1,
            "range": "± 16022.64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10962.96,
            "range": "± 109.19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4854.96,
            "range": "± 168.91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1256.35,
            "range": "± 20.72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1315.44,
            "range": "± 43.80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 298.71,
            "range": "± 5.65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 393.02,
            "range": "± 15.16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 718.83,
            "range": "± 16.03",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 677.42,
            "range": "± 21.07",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 232.36,
            "range": "± 5.14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 294.73,
            "range": "± 5.75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 188.49,
            "range": "± 4.44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 177.9,
            "range": "± 3.02",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 275.79,
            "range": "± 5.49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 387.5,
            "range": "± 8.69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 430.95,
            "range": "± 4.74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 446.27,
            "range": "± 4.30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 157318.51,
            "range": "± 3446.09",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 304541.55,
            "range": "± 3655.71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 295003.37,
            "range": "± 5612.84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11666840.2,
            "range": "± 90315.51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1825.46,
            "range": "± 20.59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 7844.25,
            "range": "± 155.95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 2940.74,
            "range": "± 26.97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10528.49,
            "range": "± 170.03",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9562.8,
            "range": "± 225.61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22205.41,
            "range": "± 400.75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1736.67,
            "range": "± 41.22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 295.27,
            "range": "± 4.62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 977784,
            "range": "± 16609.36",
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
          "id": "60e76b537d0232eaed6a12d2084bb7a4070168de",
          "message": "Fix bits iterator range bug.",
          "timestamp": "2024-07-13T23:49:20+08:00",
          "tree_id": "b6c6c36ba4973b9453212486240d7c91b20c5c1e",
          "url": "https://github.com/schungx/rhai/commit/60e76b537d0232eaed6a12d2084bb7a4070168de"
        },
        "date": 1720885996329,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 368148.05,
            "range": "± 172971.35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 32.54,
            "range": "± 0.54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 95.44,
            "range": "± 1.25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 572.37,
            "range": "± 23.40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 986.9,
            "range": "± 16.85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 994.08,
            "range": "± 16.80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4512459.6,
            "range": "± 46281.07",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 408.56,
            "range": "± 12.89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 422.23,
            "range": "± 14.25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9876.1,
            "range": "± 121.13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8256.4,
            "range": "± 470.36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10386.32,
            "range": "± 107.43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 133.73,
            "range": "± 2.02",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 191.98,
            "range": "± 2.32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 87.05,
            "range": "± 1.03",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 87.32,
            "range": "± 0.76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 87.26,
            "range": "± 0.64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1049421.6,
            "range": "± 13828.17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2021637.05,
            "range": "± 175261.13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1515749.2,
            "range": "± 40383.01",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10830.43,
            "range": "± 477.63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4646.87,
            "range": "± 104.58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1233.22,
            "range": "± 23.86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1287.41,
            "range": "± 48.40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 294.63,
            "range": "± 6.27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 340.43,
            "range": "± 6.88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 794.27,
            "range": "± 14.45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 795.42,
            "range": "± 13.16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 232.07,
            "range": "± 5.34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 307.69,
            "range": "± 33.05",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 179.85,
            "range": "± 4.19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 179.9,
            "range": "± 4.56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 212.15,
            "range": "± 9.68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 320.02,
            "range": "± 1.84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 341.1,
            "range": "± 7.01",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 376.38,
            "range": "± 8.33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 172284.24,
            "range": "± 14062.02",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 310227.8,
            "range": "± 3942.27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 300645.92,
            "range": "± 4464.92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11584234,
            "range": "± 109397.03",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1861.4,
            "range": "± 39.12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 7962.27,
            "range": "± 169.67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 2985.43,
            "range": "± 41.74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10709.71,
            "range": "± 145.93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9403.17,
            "range": "± 198.52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 21908.63,
            "range": "± 352.69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1767.33,
            "range": "± 45.26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 305.12,
            "range": "± 3.51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1012452.05,
            "range": "± 11125.83",
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
          "id": "e343641d70271e2c22c74f355ad0d16ce8eb3fe6",
          "message": "New as_XXX_ref API for Dynamic",
          "timestamp": "2024-07-26T10:45:01+08:00",
          "tree_id": "7501ed2c55e59bf4920b3bf2dcfb1e3829cc9fb9",
          "url": "https://github.com/schungx/rhai/commit/e343641d70271e2c22c74f355ad0d16ce8eb3fe6"
        },
        "date": 1721962575146,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 362390.7,
            "range": "± 13254.33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31.93,
            "range": "± 0.91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 95.01,
            "range": "± 1.36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 550.87,
            "range": "± 17.36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 952.98,
            "range": "± 17.95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 970.13,
            "range": "± 15.11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4669402.2,
            "range": "± 68286.32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 398.34,
            "range": "± 11.07",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 402.43,
            "range": "± 8.03",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9868.07,
            "range": "± 1131.42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8276.67,
            "range": "± 59.75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10389.48,
            "range": "± 201.84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 134.43,
            "range": "± 1.85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 193.31,
            "range": "± 4.19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 87.27,
            "range": "± 1.12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 87.17,
            "range": "± 0.81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86.84,
            "range": "± 0.79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1064204.85,
            "range": "± 33023.70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1880386.2,
            "range": "± 13964.50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1548844.2,
            "range": "± 24550.95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 11528.19,
            "range": "± 133.26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 5219.1,
            "range": "± 136.88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1266.48,
            "range": "± 31.39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1337.52,
            "range": "± 29.18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 325.4,
            "range": "± 24.71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 359.97,
            "range": "± 9.76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 670.53,
            "range": "± 14.09",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 662.39,
            "range": "± 13.70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 235.57,
            "range": "± 4.49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 291.62,
            "range": "± 8.50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 176.52,
            "range": "± 19.64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 177.95,
            "range": "± 6.43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 212.48,
            "range": "± 239.27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 333.89,
            "range": "± 41.66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 384,
            "range": "± 27.02",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 387.25,
            "range": "± 13.76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 178191.51,
            "range": "± 5698.67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 296888.8,
            "range": "± 4639.31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 289994.12,
            "range": "± 4955.99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11445472.5,
            "range": "± 106760.24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1852.79,
            "range": "± 16.43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 7849.78,
            "range": "± 317.62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 2983.53,
            "range": "± 28.19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10445.38,
            "range": "± 175.80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9512.34,
            "range": "± 151.69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 21810.32,
            "range": "± 412.04",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1750.39,
            "range": "± 32.86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 299.41,
            "range": "± 4.35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 960544.2,
            "range": "± 10264.64",
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
          "id": "4b8b3e3106de01b8d9fd66f3d513a244f6a7d4cd",
          "message": "Fix tests.",
          "timestamp": "2024-07-26T10:53:52+08:00",
          "tree_id": "f714712bf15b522910bbee03466d4c28ab360528",
          "url": "https://github.com/schungx/rhai/commit/4b8b3e3106de01b8d9fd66f3d513a244f6a7d4cd"
        },
        "date": 1721962654961,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 370948.62,
            "range": "± 168516.68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 32.06,
            "range": "± 3.44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 94.66,
            "range": "± 1.88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 559.39,
            "range": "± 16.81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 930.44,
            "range": "± 24.75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 935.87,
            "range": "± 21.27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4688563.8,
            "range": "± 45521.49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 387.38,
            "range": "± 8.64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 397.49,
            "range": "± 5.61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9912.66,
            "range": "± 428.37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8315.63,
            "range": "± 85.76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10400.18,
            "range": "± 114.56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 134.53,
            "range": "± 2.27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 193.16,
            "range": "± 2.65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 87.22,
            "range": "± 1.06",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 86.88,
            "range": "± 4.90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86.42,
            "range": "± 0.84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1048000.85,
            "range": "± 454390.41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1869350,
            "range": "± 18786.34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1562390.5,
            "range": "± 35068.40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10725.2,
            "range": "± 189.58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4611.24,
            "range": "± 96.66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1275.81,
            "range": "± 14.88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1318.75,
            "range": "± 45.68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 305.63,
            "range": "± 7.15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 355.34,
            "range": "± 8.75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 711.46,
            "range": "± 10.35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 666.6,
            "range": "± 10.57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 235.42,
            "range": "± 3.26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 290.47,
            "range": "± 6.58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 177.38,
            "range": "± 3.43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 177.54,
            "range": "± 3.57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 215.24,
            "range": "± 3.57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 327.95,
            "range": "± 9.45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 350.84,
            "range": "± 3.60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 398.96,
            "range": "± 9.69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 179710.14,
            "range": "± 16008.54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 311156.9,
            "range": "± 2752.27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 306035.32,
            "range": "± 12267.03",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11541803.3,
            "range": "± 76823.32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1893.78,
            "range": "± 40.26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 7920.2,
            "range": "± 82.05",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3010.14,
            "range": "± 37.22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10493.5,
            "range": "± 259.37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9550.12,
            "range": "± 112.41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 21931.97,
            "range": "± 599.35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1777.39,
            "range": "± 32.77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 318.47,
            "range": "± 5.99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 951977.7,
            "range": "± 11721.58",
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
          "id": "19b8c5327b4a40f7db0d20c61b8b4640fc86d62c",
          "message": "Fix test output for new compiler version.",
          "timestamp": "2024-07-26T11:48:24+08:00",
          "tree_id": "7a9637f67356e5bb259a15fe95323014f32c5448",
          "url": "https://github.com/schungx/rhai/commit/19b8c5327b4a40f7db0d20c61b8b4640fc86d62c"
        },
        "date": 1721965916661,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 365120.9,
            "range": "± 10417.01",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31.83,
            "range": "± 0.63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 94.64,
            "range": "± 1.97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 548.52,
            "range": "± 9.02",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 986.76,
            "range": "± 9.94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 989.22,
            "range": "± 15.40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4586900.1,
            "range": "± 44039.21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 386.2,
            "range": "± 10.40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 398.88,
            "range": "± 4.71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9948.24,
            "range": "± 331.19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8466.66,
            "range": "± 52.62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10443.5,
            "range": "± 220.33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 134.11,
            "range": "± 2.02",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 192.4,
            "range": "± 2.92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 86.83,
            "range": "± 0.84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 86.76,
            "range": "± 0.78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86.82,
            "range": "± 1.36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1072792.05,
            "range": "± 31575.72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2328481,
            "range": "± 62169.81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1665371.85,
            "range": "± 35903.28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10910.68,
            "range": "± 143.92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4955.63,
            "range": "± 292.92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1331.02,
            "range": "± 29.67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1351.91,
            "range": "± 30.28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 310.31,
            "range": "± 10.83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 358,
            "range": "± 17.96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 673.76,
            "range": "± 70.36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 645,
            "range": "± 855.26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 238.4,
            "range": "± 8.79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 296.27,
            "range": "± 5.18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 179.34,
            "range": "± 2.34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 179.98,
            "range": "± 1.97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 230.89,
            "range": "± 33.17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 343.02,
            "range": "± 4.96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 354.96,
            "range": "± 33.47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 394.8,
            "range": "± 6.25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 157063.6,
            "range": "± 2466.76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 311959.85,
            "range": "± 7436.23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 306301.4,
            "range": "± 5822.18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11350093,
            "range": "± 85751.44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1838.6,
            "range": "± 20.97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 7952.68,
            "range": "± 80.69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3206.03,
            "range": "± 41.34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10388.62,
            "range": "± 216.27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9608.77,
            "range": "± 106.36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22286.67,
            "range": "± 529.92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1747.72,
            "range": "± 43.19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 302.13,
            "range": "± 4.06",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 997684.85,
            "range": "± 24225.16",
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
          "id": "a6e1ba188e6175fe27792bbe2debd07dcb45d8ba",
          "message": "Fix formatting",
          "timestamp": "2024-07-26T12:05:35+08:00",
          "tree_id": "35450b2686ceafb33115d8a6707b78e0ee63ede0",
          "url": "https://github.com/schungx/rhai/commit/a6e1ba188e6175fe27792bbe2debd07dcb45d8ba"
        },
        "date": 1721967141698,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 365010.03,
            "range": "± 4459.85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31.86,
            "range": "± 0.42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 96.2,
            "range": "± 1.48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 553.84,
            "range": "± 16.24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 975.76,
            "range": "± 37.41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1025.97,
            "range": "± 76.04",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4844122.15,
            "range": "± 125066.11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 383.52,
            "range": "± 6.17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 396.35,
            "range": "± 3.20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9881.03,
            "range": "± 1990.27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8342.55,
            "range": "± 114.79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10411.99,
            "range": "± 115.53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 135.6,
            "range": "± 1.77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 192.38,
            "range": "± 3.82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 87.15,
            "range": "± 0.98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 87.08,
            "range": "± 0.99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86.44,
            "range": "± 0.60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1066395.4,
            "range": "± 17595.39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1870322.5,
            "range": "± 19300.26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1534762.2,
            "range": "± 18267.44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 11232.14,
            "range": "± 155.48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 5103.39,
            "range": "± 102.35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1311.24,
            "range": "± 32.34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1364.79,
            "range": "± 306.86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 299.2,
            "range": "± 3.66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 343.7,
            "range": "± 10.31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 746.67,
            "range": "± 11.70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 654.68,
            "range": "± 14.82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 234.25,
            "range": "± 4.25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 291.35,
            "range": "± 3.93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 175.84,
            "range": "± 6.32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 174.83,
            "range": "± 2.88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 211.31,
            "range": "± 7.89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 329.92,
            "range": "± 4.49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 356.98,
            "range": "± 6.24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 402.3,
            "range": "± 11.99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 173666.13,
            "range": "± 6116.32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 303186.87,
            "range": "± 5257.67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 294084.32,
            "range": "± 6596.77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11706912.6,
            "range": "± 67870.24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1895.36,
            "range": "± 25.11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 7864.4,
            "range": "± 48.83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3019.84,
            "range": "± 51.22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10622.75,
            "range": "± 158.24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9542.68,
            "range": "± 151.97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 21972.38,
            "range": "± 339.03",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1764.46,
            "range": "± 33.06",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 326.71,
            "range": "± 8.16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1048379.3,
            "range": "± 18602.29",
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
          "id": "b7abf449adaa4aa109bdbe17cc6beed52d68fe54",
          "message": "Change _ref_mut to _mut.",
          "timestamp": "2024-07-29T16:46:11+08:00",
          "tree_id": "ad2a754a55e7c7b2bfe886153e65618a08eb081a",
          "url": "https://github.com/schungx/rhai/commit/b7abf449adaa4aa109bdbe17cc6beed52d68fe54"
        },
        "date": 1722243014416,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 370239.64,
            "range": "± 9880.69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 32.23,
            "range": "± 0.77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 94.87,
            "range": "± 1.40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 551.81,
            "range": "± 13.86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1011.05,
            "range": "± 24.99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1030.72,
            "range": "± 27.29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4537086.9,
            "range": "± 120470.04",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 385.74,
            "range": "± 14.10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 396.44,
            "range": "± 6.39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9970.72,
            "range": "± 140.64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8377.33,
            "range": "± 210.13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10489.65,
            "range": "± 138.89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 135.25,
            "range": "± 3.57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 192.72,
            "range": "± 2.57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 87.41,
            "range": "± 1.36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 87.21,
            "range": "± 1.65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86.8,
            "range": "± 1.10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1108756.27,
            "range": "± 22646.29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1927433.65,
            "range": "± 38881.11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1637935.68,
            "range": "± 48982.44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 11087.98,
            "range": "± 142.50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4647.41,
            "range": "± 85.18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1223.19,
            "range": "± 26.68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1234.5,
            "range": "± 26.11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 327.24,
            "range": "± 13.39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 392.2,
            "range": "± 14.05",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 763.38,
            "range": "± 16.48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 759.28,
            "range": "± 12.48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 237.98,
            "range": "± 5.03",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 300.51,
            "range": "± 5.80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 176.95,
            "range": "± 5.20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 175.83,
            "range": "± 2.02",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 227.27,
            "range": "± 4.09",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 344.96,
            "range": "± 5.06",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 361.66,
            "range": "± 16.55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 406.41,
            "range": "± 13.15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 157685.34,
            "range": "± 5623.55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 281171.8,
            "range": "± 2786.92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 276525.5,
            "range": "± 3067.98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11448239.6,
            "range": "± 82413.97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1869.39,
            "range": "± 32.05",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 7831.78,
            "range": "± 116.32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3005.2,
            "range": "± 79.75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10217.83,
            "range": "± 314.17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9361.86,
            "range": "± 187.09",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 21540.82,
            "range": "± 431.77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1745.12,
            "range": "± 43.39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 302.29,
            "range": "± 8.61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1005404.3,
            "range": "± 23039.61",
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
          "id": "ebfa1b8ea8d18206325bc7a612c3df5be14b3d20",
          "message": "Fix subtraction underflow bug",
          "timestamp": "2024-08-01T22:53:09+08:00",
          "tree_id": "9ad8ed443c104423f039251f834bddcbf78d0bf2",
          "url": "https://github.com/schungx/rhai/commit/ebfa1b8ea8d18206325bc7a612c3df5be14b3d20"
        },
        "date": 1722528158520,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 368396.35,
            "range": "± 15574.46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 35.75,
            "range": "± 1.58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 100.19,
            "range": "± 2.69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 554.45,
            "range": "± 11.77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 927.42,
            "range": "± 26.18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 943.7,
            "range": "± 33.75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4530618.2,
            "range": "± 47228.01",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 389.09,
            "range": "± 10.18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 403.95,
            "range": "± 28.03",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9812.92,
            "range": "± 97.60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8388.13,
            "range": "± 199.13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10426.23,
            "range": "± 142.08",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 133.49,
            "range": "± 3.49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 189.41,
            "range": "± 2.49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 85.04,
            "range": "± 1.03",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 85.02,
            "range": "± 1.15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 85.01,
            "range": "± 1.11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1041097,
            "range": "± 15843.61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1870978.7,
            "range": "± 19171.85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1531844.9,
            "range": "± 239818.61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10134.78,
            "range": "± 118.40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4308.53,
            "range": "± 95.31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1266.04,
            "range": "± 21.24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1308.68,
            "range": "± 25.86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 298.1,
            "range": "± 12.99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 338.66,
            "range": "± 8.31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 707.21,
            "range": "± 15.57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 700.34,
            "range": "± 12.44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 235.27,
            "range": "± 6.74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 294.2,
            "range": "± 5.38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 179.18,
            "range": "± 2.69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 175.79,
            "range": "± 2.83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 219.39,
            "range": "± 8.46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 324.05,
            "range": "± 10.27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 374.54,
            "range": "± 9.86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 383.14,
            "range": "± 9.94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 155094.92,
            "range": "± 10846.20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 308265.58,
            "range": "± 5253.74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 297553.58,
            "range": "± 7103.41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11109724.3,
            "range": "± 167601.27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1854.82,
            "range": "± 19.02",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 7858.93,
            "range": "± 199.22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3046.13,
            "range": "± 69.48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10499.09,
            "range": "± 260.73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9521.33,
            "range": "± 220.17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22134.06,
            "range": "± 489.95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1778.45,
            "range": "± 46.11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 307.03,
            "range": "± 4.94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 893122.8,
            "range": "± 9228.44",
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
          "id": "c2627acbdbee1848f758fd5f783db5caa0b797b4",
          "message": "Add raw strings support",
          "timestamp": "2024-08-29T21:26:18+08:00",
          "tree_id": "ad60dc5deee2f773d06d9857284252473dcac6a5",
          "url": "https://github.com/schungx/rhai/commit/c2627acbdbee1848f758fd5f783db5caa0b797b4"
        },
        "date": 1724938396490,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 396470.6,
            "range": "± 146636.06",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 32.37,
            "range": "± 34.76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 97.13,
            "range": "± 0.71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 549.75,
            "range": "± 10.59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 941.19,
            "range": "± 27.36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 961.2,
            "range": "± 15.98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4478782.4,
            "range": "± 76697.53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 392.35,
            "range": "± 9.27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 404.24,
            "range": "± 7.33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10024,
            "range": "± 106.55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8388.23,
            "range": "± 148.40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10554.06,
            "range": "± 429.32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 132.84,
            "range": "± 2.54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 189.67,
            "range": "± 2.86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 84.03,
            "range": "± 46.70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 83.92,
            "range": "± 0.98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 84.82,
            "range": "± 1.81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1029227.6,
            "range": "± 13393.69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1833292.1,
            "range": "± 21853.01",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1509267.4,
            "range": "± 17853.20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10168.07,
            "range": "± 91.85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4318.59,
            "range": "± 64.68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1314.72,
            "range": "± 39.07",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1357.82,
            "range": "± 28.85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 304.03,
            "range": "± 12.32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 374.93,
            "range": "± 9.98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 752.02,
            "range": "± 12.66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 729.96,
            "range": "± 15.57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 237.18,
            "range": "± 8.26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 293.22,
            "range": "± 5.34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 177.84,
            "range": "± 3.45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 178.32,
            "range": "± 4.03",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 216.25,
            "range": "± 3.14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 328.21,
            "range": "± 6.95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 372.6,
            "range": "± 16.41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 398.63,
            "range": "± 6.05",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 155051.98,
            "range": "± 1595.27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 269652.67,
            "range": "± 3214.78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 270299.72,
            "range": "± 4227.14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11250739.5,
            "range": "± 24412.42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1861.32,
            "range": "± 18.90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 7841.3,
            "range": "± 144.53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3086.53,
            "range": "± 19.22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10490.62,
            "range": "± 270.71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9613.21,
            "range": "± 252.59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 21768.89,
            "range": "± 298.23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1751.43,
            "range": "± 42.07",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 343.95,
            "range": "± 19.24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 931440.2,
            "range": "± 331786.62",
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
          "id": "021964523e707736a6b9ddd525364782746a2376",
          "message": "Change raw string syntax to hashes only",
          "timestamp": "2024-08-30T10:19:01+08:00",
          "tree_id": "e7c563c653c20841b1918c609740aac79898fc27",
          "url": "https://github.com/schungx/rhai/commit/021964523e707736a6b9ddd525364782746a2376"
        },
        "date": 1724990211172,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 364376.62,
            "range": "± 6419.66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 31.48,
            "range": "± 1.14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 96.43,
            "range": "± 1.44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 564.92,
            "range": "± 16.90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 958.1,
            "range": "± 23.26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 997.01,
            "range": "± 27.04",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4851527,
            "range": "± 76445.38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 390.59,
            "range": "± 8.91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 403.07,
            "range": "± 16.14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10002.51,
            "range": "± 216.11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8388.24,
            "range": "± 256.13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10441.64,
            "range": "± 139.86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 132.9,
            "range": "± 1.74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 189.18,
            "range": "± 3.78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 84.14,
            "range": "± 0.95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 84.18,
            "range": "± 1.80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 85.1,
            "range": "± 1.56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1058067.4,
            "range": "± 20193.14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1856096.2,
            "range": "± 14990.55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1520345.8,
            "range": "± 13444.97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10211.5,
            "range": "± 77.63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4422.29,
            "range": "± 121.28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1206.21,
            "range": "± 20.36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1261.09,
            "range": "± 33.44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 296.67,
            "range": "± 5.70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 337.32,
            "range": "± 6.09",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 730.85,
            "range": "± 14.86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 704.3,
            "range": "± 11.35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 237.11,
            "range": "± 10.73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 293.06,
            "range": "± 4.44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 179.41,
            "range": "± 3.10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 177.29,
            "range": "± 1.74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 206.51,
            "range": "± 5.52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 311.42,
            "range": "± 1.40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 353.91,
            "range": "± 7.63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 375.33,
            "range": "± 5.32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 154782.74,
            "range": "± 2106.25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 266385.93,
            "range": "± 2007.55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 258977.43,
            "range": "± 3384.46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11206398.1,
            "range": "± 201687.55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1878.64,
            "range": "± 24.38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8015.78,
            "range": "± 173.33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3070.01,
            "range": "± 38.15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10700.42,
            "range": "± 231.14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9748.2,
            "range": "± 214.02",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 21950.44,
            "range": "± 329.24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1767.6,
            "range": "± 31.48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 295.62,
            "range": "± 13.76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1016619.6,
            "range": "± 7452.60",
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
          "id": "134d832f3323eb57f9c8882a99b9726dc40db95a",
          "message": "Avoid unwrap",
          "timestamp": "2024-09-25T18:54:49+08:00",
          "tree_id": "0d36383ac9ccdec42fb8097e402d2995a3e909e8",
          "url": "https://github.com/schungx/rhai/commit/134d832f3323eb57f9c8882a99b9726dc40db95a"
        },
        "date": 1727261906604,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 366780.85,
            "range": "± 4796.11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 32.19,
            "range": "± 1.17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 95.68,
            "range": "± 2.34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 553.54,
            "range": "± 9.74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1033.53,
            "range": "± 26.97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1061.98,
            "range": "± 27.14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4483433.1,
            "range": "± 32773.76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 389.13,
            "range": "± 4.27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 405.9,
            "range": "± 3.23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10195.99,
            "range": "± 225.82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8562.44,
            "range": "± 104.74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10954.16,
            "range": "± 92.68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 135.41,
            "range": "± 1.46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 193.2,
            "range": "± 1.31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 86.59,
            "range": "± 0.69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 86.58,
            "range": "± 0.34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86.74,
            "range": "± 0.90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1317678.8,
            "range": "± 17983.82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2233553.7,
            "range": "± 18689.51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1823596,
            "range": "± 13659.21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10759.37,
            "range": "± 128.34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4828.7,
            "range": "± 194.95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1257.17,
            "range": "± 49.72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1313.96,
            "range": "± 41.13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 296.27,
            "range": "± 1.66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 338.26,
            "range": "± 2.61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 699.86,
            "range": "± 13.46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 683.9,
            "range": "± 9.25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 240.29,
            "range": "± 7.07",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 297.95,
            "range": "± 2.40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 181.78,
            "range": "± 3.78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 182.03,
            "range": "± 2.39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 218.15,
            "range": "± 3.37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 341.75,
            "range": "± 5.79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 376,
            "range": "± 16.09",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 397.35,
            "range": "± 4.41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 159184.56,
            "range": "± 1761.01",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 273783.53,
            "range": "± 2696.09",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 264697.77,
            "range": "± 2465.57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11758501.5,
            "range": "± 79884.72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1914.74,
            "range": "± 17.38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 7884.33,
            "range": "± 140.61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3132.14,
            "range": "± 30.75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10573.77,
            "range": "± 4918.89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9541.79,
            "range": "± 118.84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 21820.62,
            "range": "± 311.51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1769.34,
            "range": "± 1326.09",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 308.33,
            "range": "± 2.95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 972930,
            "range": "± 30566.03",
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
          "id": "b65cd82611b82e25902c10389beb5853fe8b8550",
          "message": "Add SQL custom syntax test",
          "timestamp": "2024-09-27T13:07:37+08:00",
          "tree_id": "956573ab2c592eb02991be30279184dff6ce9c46",
          "url": "https://github.com/schungx/rhai/commit/b65cd82611b82e25902c10389beb5853fe8b8550"
        },
        "date": 1727422699149,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 350077.78,
            "range": "± 51794.22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 32.28,
            "range": "± 0.48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 93.3,
            "range": "± 7.94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 525.95,
            "range": "± 28.60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 969.11,
            "range": "± 63.54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1019.7,
            "range": "± 6.67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4475697.7,
            "range": "± 320502.47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 403.58,
            "range": "± 31.76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 429.88,
            "range": "± 36.26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9599.04,
            "range": "± 748.65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 7987.72,
            "range": "± 596.25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10198.4,
            "range": "± 725.33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 131.83,
            "range": "± 44.03",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 180.76,
            "range": "± 10.38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 86.58,
            "range": "± 5.44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 86.9,
            "range": "± 0.56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86.15,
            "range": "± 9.00",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1010367.15,
            "range": "± 69488.04",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2216676.1,
            "range": "± 450225.76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1750187.12,
            "range": "± 382805.29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 9923.4,
            "range": "± 839.91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4408.54,
            "range": "± 48.42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1253.68,
            "range": "± 82.77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1238.16,
            "range": "± 95.19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 310.12,
            "range": "± 22.90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 345.9,
            "range": "± 26.97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 739.88,
            "range": "± 66.16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 651.59,
            "range": "± 52.16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 232.37,
            "range": "± 20.65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 300.59,
            "range": "± 23.66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 185.54,
            "range": "± 15.71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 177.83,
            "range": "± 13.24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 213.34,
            "range": "± 16.37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 344.97,
            "range": "± 24.91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 372.21,
            "range": "± 26.07",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 372.1,
            "range": "± 23.57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 157456.74,
            "range": "± 10205.63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 268592.26,
            "range": "± 16138.83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 264373.13,
            "range": "± 3480.42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11166318.2,
            "range": "± 794675.94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1797.93,
            "range": "± 132.17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 7780.95,
            "range": "± 643.20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 2982.26,
            "range": "± 201.27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10229.14,
            "range": "± 677.05",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9683.08,
            "range": "± 821.11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22550.06,
            "range": "± 1898.58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1758.13,
            "range": "± 42.81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 298.1,
            "range": "± 22.19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 941006.71,
            "range": "± 58411.29",
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
          "id": "5107a6a3be3298f45c84dc5be51cb873d5673964",
          "message": "Fix Scope deserialization lifetime",
          "timestamp": "2024-09-27T22:28:58+08:00",
          "tree_id": "7736527fca9052b7f39d413804462226ae79ff3c",
          "url": "https://github.com/schungx/rhai/commit/5107a6a3be3298f45c84dc5be51cb873d5673964"
        },
        "date": 1727447589842,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 368212.17,
            "range": "± 7572.81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 32.37,
            "range": "± 6.24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 96.52,
            "range": "± 1.03",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 527.5,
            "range": "± 4.68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 950.35,
            "range": "± 22.39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 957.66,
            "range": "± 15.40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4942510.5,
            "range": "± 48038.02",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 431.09,
            "range": "± 11.21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 407.95,
            "range": "± 6.50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9724.61,
            "range": "± 230.85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8285.73,
            "range": "± 167.49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10461.31,
            "range": "± 158.30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 133.9,
            "range": "± 1.23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 191.63,
            "range": "± 1.19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 87.04,
            "range": "± 1.39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 86.91,
            "range": "± 0.76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86.37,
            "range": "± 0.56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1034061.4,
            "range": "± 11662.66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1843470.2,
            "range": "± 15164.09",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1504007.5,
            "range": "± 13488.58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10237.99,
            "range": "± 80.24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4400.15,
            "range": "± 66.45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1339.92,
            "range": "± 37.15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1393,
            "range": "± 24.92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 303.65,
            "range": "± 4.83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 342.21,
            "range": "± 33.63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 761.47,
            "range": "± 18.77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 736.9,
            "range": "± 43.58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 235.1,
            "range": "± 2.52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 305.37,
            "range": "± 2.98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 181.23,
            "range": "± 2.02",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 180.3,
            "range": "± 2.88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 225.62,
            "range": "± 2.80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 333.05,
            "range": "± 5.40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 389.88,
            "range": "± 5.55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 400.72,
            "range": "± 6.92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 159403.6,
            "range": "± 1405.02",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 270627.94,
            "range": "± 1605.96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 263528.83,
            "range": "± 3208.89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11790505.1,
            "range": "± 104010.71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1923.09,
            "range": "± 7.94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8135,
            "range": "± 85.90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3116.33,
            "range": "± 121.12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10793.4,
            "range": "± 7371.80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9797.19,
            "range": "± 152.84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 21871.05,
            "range": "± 337.73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1754.53,
            "range": "± 31.04",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 298.07,
            "range": "± 5.25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 929670.4,
            "range": "± 17117.34",
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
          "id": "f9c459f1bb91a20c2250a7a810bee28f9b555fcb",
          "message": "Add thumbv6m target",
          "timestamp": "2024-10-01T20:58:00+08:00",
          "tree_id": "44d0627ed41d95ca13fbc0e8199e31cf757531d4",
          "url": "https://github.com/schungx/rhai/commit/f9c459f1bb91a20c2250a7a810bee28f9b555fcb"
        },
        "date": 1727787720019,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 362448.22,
            "range": "± 13413.49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 43.19,
            "range": "± 2.26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 107.61,
            "range": "± 2.18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 567.73,
            "range": "± 9.50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1005.43,
            "range": "± 15.58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 994.47,
            "range": "± 477.99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4419944.8,
            "range": "± 29138.77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 446.96,
            "range": "± 5.50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 426.88,
            "range": "± 5.60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10015.39,
            "range": "± 58.51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8647.22,
            "range": "± 118.34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10528.62,
            "range": "± 278.21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 134.29,
            "range": "± 2.30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 192.21,
            "range": "± 2.14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 86.78,
            "range": "± 0.90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 86.52,
            "range": "± 1.41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86.44,
            "range": "± 0.61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1023621.7,
            "range": "± 14446.53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1844290.4,
            "range": "± 16361.20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1512024.9,
            "range": "± 14766.52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10205.07,
            "range": "± 119.14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4349.02,
            "range": "± 64.99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1347.66,
            "range": "± 22.77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1384.91,
            "range": "± 40.30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 376.33,
            "range": "± 10.31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 410.17,
            "range": "± 6.25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 734.87,
            "range": "± 16.91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 705.44,
            "range": "± 12.84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 238.03,
            "range": "± 3.30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 296.18,
            "range": "± 4.80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 181.05,
            "range": "± 2.15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 181.42,
            "range": "± 2.68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 213.32,
            "range": "± 3.50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 334.83,
            "range": "± 6.09",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 370.69,
            "range": "± 8.28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 378.42,
            "range": "± 1.16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 156234.14,
            "range": "± 1919.59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 294321.7,
            "range": "± 3905.50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 293258.58,
            "range": "± 10551.54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11316742.1,
            "range": "± 49976.53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1886.71,
            "range": "± 28.88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8051.16,
            "range": "± 101.17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3158.26,
            "range": "± 80.36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10552.66,
            "range": "± 141.77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9557.09,
            "range": "± 127.41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 21900.92,
            "range": "± 514.01",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1749.47,
            "range": "± 35.95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 309.46,
            "range": "± 6.03",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 910584.3,
            "range": "± 12773.78",
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
          "id": "158b537d925173eb7cf05d67749e59519dcda463",
          "message": "Remove `no_float` features.",
          "timestamp": "2024-10-08T11:12:40+08:00",
          "tree_id": "44f1e67331ea1752e49324ae5c050b4d5ebd4704",
          "url": "https://github.com/schungx/rhai/commit/158b537d925173eb7cf05d67749e59519dcda463"
        },
        "date": 1728357636879,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 365380.94,
            "range": "± 8598.94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 32.02,
            "range": "± 0.33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 97,
            "range": "± 1.26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 557.48,
            "range": "± 5.12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 980.01,
            "range": "± 11.51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 964.25,
            "range": "± 12.64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4538892.15,
            "range": "± 113529.03",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 416.28,
            "range": "± 10.31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 398.85,
            "range": "± 3.11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9949.78,
            "range": "± 212.91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8319.97,
            "range": "± 104.27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10859.26,
            "range": "± 149.94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 135.44,
            "range": "± 1.26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 192.95,
            "range": "± 2.65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 86.62,
            "range": "± 1.52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 86.89,
            "range": "± 0.67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86.31,
            "range": "± 0.75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1015773.8,
            "range": "± 144752.59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1872536.7,
            "range": "± 159331.08",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1512562.2,
            "range": "± 143406.41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10294.99,
            "range": "± 296.41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4470.96,
            "range": "± 763.62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1304.96,
            "range": "± 12.91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1336.79,
            "range": "± 25.04",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 312.96,
            "range": "± 12.96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 377.78,
            "range": "± 10.68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 698.78,
            "range": "± 15.40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 684.02,
            "range": "± 16.32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 247.87,
            "range": "± 3.78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 324.35,
            "range": "± 5.20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 206.73,
            "range": "± 4.79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 205.44,
            "range": "± 4.80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 223.37,
            "range": "± 3.86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 330.93,
            "range": "± 4.65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 362.35,
            "range": "± 2.08",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 389.64,
            "range": "± 6.00",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 156880.41,
            "range": "± 1481.32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 273470.03,
            "range": "± 5334.63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 268921.57,
            "range": "± 3720.14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11915367.3,
            "range": "± 72323.22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1909.87,
            "range": "± 25.18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 7864.04,
            "range": "± 217.54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3121.72,
            "range": "± 35.98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10387.97,
            "range": "± 119.46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9504.55,
            "range": "± 125.58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22013.18,
            "range": "± 1965.26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1751.21,
            "range": "± 22.68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 302.61,
            "range": "± 4.80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 912242,
            "range": "± 13982.75",
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
          "id": "b8cedaf870942f8514445e47ddc5d3b7bcad233f",
          "message": "Fix test output",
          "timestamp": "2024-10-08T11:25:55+08:00",
          "tree_id": "b3776d4b499e2ea79d13f1470ec672eb7a4c29f7",
          "url": "https://github.com/schungx/rhai/commit/b8cedaf870942f8514445e47ddc5d3b7bcad233f"
        },
        "date": 1728358206701,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 363373.49,
            "range": "± 7666.37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 32.05,
            "range": "± 0.78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 101.62,
            "range": "± 1.53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 570.79,
            "range": "± 33.67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1045.06,
            "range": "± 73.57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1038.06,
            "range": "± 18.04",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4425978.7,
            "range": "± 173767.22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 392.73,
            "range": "± 9.33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 401.9,
            "range": "± 14.50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9913.34,
            "range": "± 273.73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8459.2,
            "range": "± 151.87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10513.09,
            "range": "± 106.55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 136.24,
            "range": "± 3.19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 193.38,
            "range": "± 2.37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 87.07,
            "range": "± 1.14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 86.78,
            "range": "± 1.57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 84.19,
            "range": "± 7.47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1014087.3,
            "range": "± 70574.44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1868878.6,
            "range": "± 60877.45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1507752,
            "range": "± 66237.78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10314.72,
            "range": "± 353.46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4412.17,
            "range": "± 349.64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1322.91,
            "range": "± 20.77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1354.61,
            "range": "± 33.23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 337.73,
            "range": "± 17.22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 356.4,
            "range": "± 19.90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 712.21,
            "range": "± 38.79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 704.88,
            "range": "± 12.27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 233.29,
            "range": "± 2.55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 297.65,
            "range": "± 2.68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 193.17,
            "range": "± 2.23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 180.61,
            "range": "± 2.51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 218.13,
            "range": "± 4.48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 328.54,
            "range": "± 3.28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 411.64,
            "range": "± 166.72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 394.04,
            "range": "± 6.21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 156818.04,
            "range": "± 2235.22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 292682.49,
            "range": "± 5197.91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 281109.22,
            "range": "± 16051.81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11245416.9,
            "range": "± 400854.00",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1966.38,
            "range": "± 80.24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8141.21,
            "range": "± 194.93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3229.8,
            "range": "± 29.46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10547.47,
            "range": "± 579.42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9678.94,
            "range": "± 212.78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 21707.74,
            "range": "± 517.53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1769.97,
            "range": "± 43.45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 300.48,
            "range": "± 6.33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 934529.3,
            "range": "± 21780.10",
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
          "id": "75c4e3c4113ec482af2138dbdf66028e8e67db4d",
          "message": "Merge branch 'main' of https://github.com/rhaiscript/rhai",
          "timestamp": "2024-10-08T14:06:41+08:00",
          "tree_id": "44193b94ab0f297786aa94992021dd9f546d23f2",
          "url": "https://github.com/schungx/rhai/commit/75c4e3c4113ec482af2138dbdf66028e8e67db4d"
        },
        "date": 1728368114781,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 348081.35,
            "range": "± 21517.02",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 32.24,
            "range": "± 0.46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 100.15,
            "range": "± 4.98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 531.89,
            "range": "± 38.28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1011.13,
            "range": "± 4.79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1006.61,
            "range": "± 7.44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4702699.15,
            "range": "± 294381.16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 442.24,
            "range": "± 27.70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 451.44,
            "range": "± 40.13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9590.16,
            "range": "± 628.82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8177.91,
            "range": "± 838.65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10691.18,
            "range": "± 876.81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 126.89,
            "range": "± 7.62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 187.94,
            "range": "± 11.56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 81.97,
            "range": "± 5.63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 82.48,
            "range": "± 5.79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 81.78,
            "range": "± 6.99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 969614.32,
            "range": "± 62921.19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1755421.35,
            "range": "± 119140.69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1457097,
            "range": "± 101100.80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 9662.47,
            "range": "± 494.34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4554.52,
            "range": "± 358.93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1225.05,
            "range": "± 82.31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1347.25,
            "range": "± 82.28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 303.73,
            "range": "± 26.51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 326.75,
            "range": "± 21.67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 635.01,
            "range": "± 30.88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 643.89,
            "range": "± 43.09",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 224.38,
            "range": "± 13.39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 288.01,
            "range": "± 20.30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 176.89,
            "range": "± 11.88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 171.75,
            "range": "± 11.40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 215.09,
            "range": "± 14.87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 306.29,
            "range": "± 20.18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 364.74,
            "range": "± 22.98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 382,
            "range": "± 23.57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 156335.72,
            "range": "± 10065.68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 256227.52,
            "range": "± 15325.16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 253310.23,
            "range": "± 16037.04",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11138101.3,
            "range": "± 684553.94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1787,
            "range": "± 88.05",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 7972.38,
            "range": "± 683.81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 2911.61,
            "range": "± 187.00",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10129.55,
            "range": "± 977.24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9610.46,
            "range": "± 650.19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 20898.25,
            "range": "± 1478.18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1677.49,
            "range": "± 105.71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 288.15,
            "range": "± 11.37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 910536.54,
            "range": "± 40196.08",
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
          "id": "e4e87a651e4d3ce47ae6a7c2755796fa6ce80a88",
          "message": "Update dependencies",
          "timestamp": "2024-10-08T14:39:59+08:00",
          "tree_id": "7969374d992690b032001d535dba3c2dd4dc8e69",
          "url": "https://github.com/schungx/rhai/commit/e4e87a651e4d3ce47ae6a7c2755796fa6ce80a88"
        },
        "date": 1728369828203,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 365499.5,
            "range": "± 7326.56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 32.13,
            "range": "± 0.48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 102.74,
            "range": "± 0.73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 593.99,
            "range": "± 7.87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 951.56,
            "range": "± 11.86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 985.91,
            "range": "± 31.82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4484555,
            "range": "± 69575.17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 391.11,
            "range": "± 4.87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 404.19,
            "range": "± 3.26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10096.11,
            "range": "± 111.42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8464.3,
            "range": "± 60.59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10707.96,
            "range": "± 74.69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 136.73,
            "range": "± 2.20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 194.67,
            "range": "± 7.97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 87.79,
            "range": "± 13.26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 87.9,
            "range": "± 0.69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 87.34,
            "range": "± 0.76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1021250.5,
            "range": "± 10572.19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1832810.1,
            "range": "± 13552.53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1502538.6,
            "range": "± 14848.34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10324.37,
            "range": "± 1201.35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4739.18,
            "range": "± 46.94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1372.89,
            "range": "± 10.33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1392.52,
            "range": "± 54.88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 299.29,
            "range": "± 3.76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 348.06,
            "range": "± 5.02",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 684.46,
            "range": "± 10.79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 660.33,
            "range": "± 10.36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 233.89,
            "range": "± 6.07",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 298.76,
            "range": "± 5.45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 182.62,
            "range": "± 3.09",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 190.67,
            "range": "± 4.10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 212.95,
            "range": "± 4.73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 339.43,
            "range": "± 2.10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 371.28,
            "range": "± 9.08",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 389.92,
            "range": "± 3.90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 157036.02,
            "range": "± 2883.59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 285289.78,
            "range": "± 1406.57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 277108.1,
            "range": "± 2920.96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11495894.9,
            "range": "± 86816.87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1932.09,
            "range": "± 38.10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 7999.81,
            "range": "± 129.54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3139.83,
            "range": "± 40.78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10602.56,
            "range": "± 103.77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9674.08,
            "range": "± 201.05",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 21964.88,
            "range": "± 245.61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1769.93,
            "range": "± 49.83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 308.83,
            "range": "± 3.74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 985681.95,
            "range": "± 44773.56",
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
          "id": "ae6e9d467a9739314ea7bcb17ca62355235479c6",
          "message": "Optimize string slice",
          "timestamp": "2024-12-02T12:44:34+08:00",
          "tree_id": "48c19beefcab347f99d13b225f3b8118657df202",
          "url": "https://github.com/schungx/rhai/commit/ae6e9d467a9739314ea7bcb17ca62355235479c6"
        },
        "date": 1733114950200,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 367586.54,
            "range": "± 6582.69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 33.83,
            "range": "± 0.82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 104.45,
            "range": "± 3.39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 566.39,
            "range": "± 12.17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 969.1,
            "range": "± 21.95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1061.16,
            "range": "± 24.19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4413509.35,
            "range": "± 71902.94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 387.85,
            "range": "± 23.87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 394.82,
            "range": "± 8.73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10079.07,
            "range": "± 195.29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8504.53,
            "range": "± 240.89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10793.38,
            "range": "± 113.18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 134.24,
            "range": "± 3.29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 187.96,
            "range": "± 3.67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 83.36,
            "range": "± 0.63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 83.61,
            "range": "± 0.63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 83.64,
            "range": "± 0.55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1014026.7,
            "range": "± 17548.73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1831800.7,
            "range": "± 67814.48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1492221.8,
            "range": "± 25626.78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10131.72,
            "range": "± 178.68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4296.04,
            "range": "± 51.55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1287.28,
            "range": "± 55.45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1315.43,
            "range": "± 34.65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 308.9,
            "range": "± 14.61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 349.06,
            "range": "± 16.59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 647.66,
            "range": "± 17.12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 637.46,
            "range": "± 20.47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 260.66,
            "range": "± 9.23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 300.95,
            "range": "± 9.15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 183.24,
            "range": "± 4.45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 182.58,
            "range": "± 6.99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 222.48,
            "range": "± 6.16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 333.18,
            "range": "± 7.15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 348.3,
            "range": "± 2.39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 377.93,
            "range": "± 43.62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 173040.72,
            "range": "± 9813.19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 295164.88,
            "range": "± 4382.97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 289339.33,
            "range": "± 8100.26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11133710.5,
            "range": "± 236714.65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1919.28,
            "range": "± 34.68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8014.01,
            "range": "± 72.53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3150.63,
            "range": "± 33.07",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10621.41,
            "range": "± 166.79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9635.49,
            "range": "± 206.82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 21672.46,
            "range": "± 800.10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1765.29,
            "range": "± 24.79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 303.72,
            "range": "± 12.82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 964275.45,
            "range": "± 7431.51",
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
          "id": "bcf2f1400c1d3e43a2bff46876ecf1c7baf5fd8b",
          "message": "Fix bug in raw strings with newlines.",
          "timestamp": "2024-12-10T15:57:01+08:00",
          "tree_id": "ca9121bf395829d638337f9510793563835bee49",
          "url": "https://github.com/schungx/rhai/commit/bcf2f1400c1d3e43a2bff46876ecf1c7baf5fd8b"
        },
        "date": 1733817809398,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 363856.2,
            "range": "± 19102.35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 34.03,
            "range": "± 0.42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 102.41,
            "range": "± 1.75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 595.05,
            "range": "± 15.61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 981.86,
            "range": "± 16.70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1016.79,
            "range": "± 18.48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4869052.8,
            "range": "± 61632.40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 388.54,
            "range": "± 49.52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 401.16,
            "range": "± 6.09",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10095.76,
            "range": "± 194.11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8592.84,
            "range": "± 120.71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10888.56,
            "range": "± 205.55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 131.34,
            "range": "± 2.01",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 188.74,
            "range": "± 3.77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 83.78,
            "range": "± 0.55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 83.72,
            "range": "± 0.50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 84.31,
            "range": "± 0.68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1011073.8,
            "range": "± 12155.85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1818538.2,
            "range": "± 17956.22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1484725.1,
            "range": "± 20894.73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10154.6,
            "range": "± 160.29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4274.62,
            "range": "± 45.06",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1325.48,
            "range": "± 32.98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1389.03,
            "range": "± 22.91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 302.51,
            "range": "± 6.38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 343.24,
            "range": "± 4.24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 649.99,
            "range": "± 15.93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 631.57,
            "range": "± 9.22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 234.81,
            "range": "± 3.44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 288.06,
            "range": "± 8.52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 173.86,
            "range": "± 3.76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 173.22,
            "range": "± 2.60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 251.28,
            "range": "± 7.13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 352.5,
            "range": "± 13.69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 388.88,
            "range": "± 23.87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 399.44,
            "range": "± 15.86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 148690.05,
            "range": "± 1405.45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 265824.83,
            "range": "± 2979.13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 257952.43,
            "range": "± 2924.73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 10981622.2,
            "range": "± 53507.24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1931.12,
            "range": "± 17.97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8010.79,
            "range": "± 144.96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3142.14,
            "range": "± 41.06",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10557.53,
            "range": "± 84.52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9603.25,
            "range": "± 153.64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 21842.05,
            "range": "± 131.19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1771.62,
            "range": "± 53.98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 299.79,
            "range": "± 7.11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 956477.5,
            "range": "± 10464.95",
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
          "id": "b65ce779c11971faa2a203ea928d89cfd71d6174",
          "message": "Fix version number",
          "timestamp": "2024-12-13T10:08:05+08:00",
          "tree_id": "be2324d988297cf64585c0d1f35ba597a66dc9e8",
          "url": "https://github.com/schungx/rhai/commit/b65ce779c11971faa2a203ea928d89cfd71d6174"
        },
        "date": 1734056416060,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 364304.5,
            "range": "± 17022.73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 33.89,
            "range": "± 0.62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 102.85,
            "range": "± 1.20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 553.22,
            "range": "± 10.13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1060.37,
            "range": "± 15.94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1077.02,
            "range": "± 38.44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4527233.05,
            "range": "± 107061.08",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 407.84,
            "range": "± 24.18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 422.58,
            "range": "± 10.36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9954.32,
            "range": "± 134.00",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8409.46,
            "range": "± 162.46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10758.32,
            "range": "± 126.25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 133.24,
            "range": "± 4.68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 189.04,
            "range": "± 2.82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 84.45,
            "range": "± 2.31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 84.14,
            "range": "± 1.00",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 83.75,
            "range": "± 0.59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1009564.6,
            "range": "± 11468.89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1833128.3,
            "range": "± 27410.11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1522682.5,
            "range": "± 11500.99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10195.96,
            "range": "± 93.39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4378.33,
            "range": "± 143.45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1326.17,
            "range": "± 21.47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1391.98,
            "range": "± 62.78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 308.12,
            "range": "± 11.77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 342.44,
            "range": "± 7.99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 678.79,
            "range": "± 20.53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 646.04,
            "range": "± 82.56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 237.31,
            "range": "± 7.82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 294.82,
            "range": "± 9.67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 177,
            "range": "± 8.13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 191.42,
            "range": "± 9.99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 212.77,
            "range": "± 1.68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 319.38,
            "range": "± 10.91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 353.17,
            "range": "± 6.85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 373.44,
            "range": "± 6.81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 149167.37,
            "range": "± 2366.53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 271193,
            "range": "± 2712.76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 263034.03,
            "range": "± 5267.66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 10969953.9,
            "range": "± 324766.91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1926.12,
            "range": "± 23.27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 7865.65,
            "range": "± 74.97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3101.17,
            "range": "± 49.66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10408.41,
            "range": "± 171.65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9515.67,
            "range": "± 129.30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 21737.55,
            "range": "± 547.21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1775.45,
            "range": "± 56.31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 298.65,
            "range": "± 100.86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 899618.9,
            "range": "± 10563.44",
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
          "id": "94fbe24f662ef3c2ef32c65b7b588fb249318a22",
          "message": "Add collect_fn_metadata.",
          "timestamp": "2024-12-31T11:35:14+08:00",
          "tree_id": "e275549d5e0ceeb5743c91a764879770d296e43a",
          "url": "https://github.com/schungx/rhai/commit/94fbe24f662ef3c2ef32c65b7b588fb249318a22"
        },
        "date": 1735616495027,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 366539.86,
            "range": "± 6888.14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 33.76,
            "range": "± 1.08",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 100.4,
            "range": "± 1.29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 554.71,
            "range": "± 19.76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1008.3,
            "range": "± 35.82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1012.8,
            "range": "± 18.75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4492022.8,
            "range": "± 139893.94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 415.16,
            "range": "± 7.81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 414.97,
            "range": "± 9.45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9765.88,
            "range": "± 118.84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8275.7,
            "range": "± 637.36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10323.65,
            "range": "± 162.49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 131.97,
            "range": "± 3.71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 188.94,
            "range": "± 3.81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 83.93,
            "range": "± 3.08",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 83.91,
            "range": "± 0.47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 83.76,
            "range": "± 0.41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1003861.43,
            "range": "± 12576.90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1843780,
            "range": "± 20692.57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1478072.5,
            "range": "± 11145.45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10046.66,
            "range": "± 108.99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4218.19,
            "range": "± 33.21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1232.69,
            "range": "± 26.94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1267.62,
            "range": "± 35.20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 295.38,
            "range": "± 10.32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 366.4,
            "range": "± 29.72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 652.6,
            "range": "± 14.20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 617.75,
            "range": "± 10.32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 234.26,
            "range": "± 4.24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 298.42,
            "range": "± 4.92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 179.98,
            "range": "± 3.66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 178.71,
            "range": "± 4.46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 213.86,
            "range": "± 5.29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 347.72,
            "range": "± 12.05",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 381.39,
            "range": "± 7.41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 365.57,
            "range": "± 6.73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 150373.55,
            "range": "± 6975.21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 273214.97,
            "range": "± 4789.68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 264720.07,
            "range": "± 9128.69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11069552.8,
            "range": "± 78011.25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1959.72,
            "range": "± 147.51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8033.73,
            "range": "± 173.39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3229.21,
            "range": "± 603.53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10627.88,
            "range": "± 142.76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9649.7,
            "range": "± 127.23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22093.61,
            "range": "± 465.92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1771.95,
            "range": "± 41.59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 300.12,
            "range": "± 6.68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 920939.2,
            "range": "± 8915.25",
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
          "id": "2b0ed8cfbd43117895cb8446c6a22de8a8537ec7",
          "message": "Fix builds",
          "timestamp": "2024-12-31T11:41:52+08:00",
          "tree_id": "20f5218c4d03d6df1aed110c0c6d68f8ab97d0f5",
          "url": "https://github.com/schungx/rhai/commit/2b0ed8cfbd43117895cb8446c6a22de8a8537ec7"
        },
        "date": 1735616753510,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 356685,
            "range": "± 24320.13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 33.73,
            "range": "± 0.53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 101.22,
            "range": "± 1.78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 595.11,
            "range": "± 17.20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 989.46,
            "range": "± 48.66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1048.66,
            "range": "± 31.08",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4913920,
            "range": "± 331070.19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 394.67,
            "range": "± 32.59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 419.07,
            "range": "± 28.88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9736.21,
            "range": "± 799.75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8199.32,
            "range": "± 108.93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10361.99,
            "range": "± 103.47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 131.52,
            "range": "± 8.00",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 187.63,
            "range": "± 14.22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 84.53,
            "range": "± 2.33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 81.98,
            "range": "± 5.02",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 79.75,
            "range": "± 7.31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1238370.62,
            "range": "± 77943.40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1954234.05,
            "range": "± 119085.14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1584120.8,
            "range": "± 79543.84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10173.06,
            "range": "± 107.60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4689.58,
            "range": "± 138.56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1315.34,
            "range": "± 132.66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1364.69,
            "range": "± 56.87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 365.34,
            "range": "± 11.41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 396.5,
            "range": "± 8.18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 656.6,
            "range": "± 13.64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 614.97,
            "range": "± 16.30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 231.22,
            "range": "± 3.92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 292.17,
            "range": "± 7.47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 182.89,
            "range": "± 9.38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 178.48,
            "range": "± 5.04",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 217.4,
            "range": "± 5.49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 301.47,
            "range": "± 4.79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 361.86,
            "range": "± 22.22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 367.07,
            "range": "± 6.68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 152807.29,
            "range": "± 3777.92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 272107.7,
            "range": "± 3095.94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 264943.21,
            "range": "± 8456.88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11057634.8,
            "range": "± 523974.83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1980.54,
            "range": "± 82.00",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8223.53,
            "range": "± 123.56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3248.29,
            "range": "± 241.39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10664.82,
            "range": "± 151.91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9859.17,
            "range": "± 149.37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22457.91,
            "range": "± 455.97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1775.33,
            "range": "± 23.08",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 304.23,
            "range": "± 14.83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 900808.9,
            "range": "± 178825.66",
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
          "id": "f2eeb944bcd714225670160b00f782c7b72dacc9",
          "message": "Fix builds",
          "timestamp": "2024-12-31T11:56:21+08:00",
          "tree_id": "292dedaa3db8568098947478c77f6404aeb42ecf",
          "url": "https://github.com/schungx/rhai/commit/f2eeb944bcd714225670160b00f782c7b72dacc9"
        },
        "date": 1735617607509,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 362449.72,
            "range": "± 5963.63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 33.74,
            "range": "± 13.32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 100.28,
            "range": "± 2.03",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 601.19,
            "range": "± 11.80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 994.07,
            "range": "± 18.47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 991.7,
            "range": "± 29.92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4654557.6,
            "range": "± 90744.09",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 447.86,
            "range": "± 7.47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 457.48,
            "range": "± 25.23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10074.56,
            "range": "± 231.51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8508.44,
            "range": "± 126.01",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10669.62,
            "range": "± 138.39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 132.78,
            "range": "± 3.09",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 189.38,
            "range": "± 6.05",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 83.77,
            "range": "± 2.04",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 83.66,
            "range": "± 3.88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 83.82,
            "range": "± 0.54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1007919.1,
            "range": "± 29462.02",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1860376.3,
            "range": "± 27373.75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1476552.8,
            "range": "± 24848.54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10002.24,
            "range": "± 893.64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4307.75,
            "range": "± 58.63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1273.2,
            "range": "± 29.73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1318.31,
            "range": "± 109.31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 293.92,
            "range": "± 6.12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 333.77,
            "range": "± 5.60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 650.09,
            "range": "± 13.65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 635.36,
            "range": "± 12.04",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 230.29,
            "range": "± 2.95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 295.39,
            "range": "± 9.67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 179.14,
            "range": "± 4.00",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 177.42,
            "range": "± 5.34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 216.67,
            "range": "± 4.23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 305.84,
            "range": "± 5.67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 364.43,
            "range": "± 7.80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 376.35,
            "range": "± 16.46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 153377.99,
            "range": "± 7395.64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 281775.33,
            "range": "± 4865.65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 273858.46,
            "range": "± 7114.01",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11842381.1,
            "range": "± 30685.12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1917.2,
            "range": "± 18.50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8070.73,
            "range": "± 167.49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3286.38,
            "range": "± 43.53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10613.46,
            "range": "± 352.39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9710.13,
            "range": "± 107.65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22283.21,
            "range": "± 502.35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1784.67,
            "range": "± 70.83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 317.91,
            "range": "± 13.17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 892304.5,
            "range": "± 13923.48",
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
          "id": "c4d51e1547ba129a73de7d8f335d328f0046419d",
          "message": "Fix versions",
          "timestamp": "2024-12-31T12:22:26+08:00",
          "tree_id": "91bdba3e3583823caa3fbf5cc84d655b3b3ab0f6",
          "url": "https://github.com/schungx/rhai/commit/c4d51e1547ba129a73de7d8f335d328f0046419d"
        },
        "date": 1735619196848,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 361821.11,
            "range": "± 5671.05",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 33.75,
            "range": "± 0.35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 100.82,
            "range": "± 0.88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 605,
            "range": "± 15.65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 999.37,
            "range": "± 19.13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1040.6,
            "range": "± 19.71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4691366.05,
            "range": "± 22565.02",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 456.31,
            "range": "± 19.04",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 466.83,
            "range": "± 8.76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9611.7,
            "range": "± 202.03",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8197.38,
            "range": "± 91.15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10340.69,
            "range": "± 238.52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 130.33,
            "range": "± 4.52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 189.5,
            "range": "± 3.09",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 83.78,
            "range": "± 0.31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 83.67,
            "range": "± 0.49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 83.86,
            "range": "± 0.32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1241205.86,
            "range": "± 41376.94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1964225.15,
            "range": "± 29353.95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1477391.2,
            "range": "± 16533.86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10062.65,
            "range": "± 142.59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4590.46,
            "range": "± 47.46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1307.92,
            "range": "± 34.41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1354.91,
            "range": "± 28.32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 326.27,
            "range": "± 8.42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 362.63,
            "range": "± 20.78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 657.28,
            "range": "± 14.58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 615.63,
            "range": "± 10.00",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 230.83,
            "range": "± 4.57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 297.38,
            "range": "± 8.91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 180.02,
            "range": "± 2.36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 177.54,
            "range": "± 2.27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 211.88,
            "range": "± 3.68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 305.75,
            "range": "± 7.23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 349.85,
            "range": "± 7.80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 368.96,
            "range": "± 5.24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 151970.27,
            "range": "± 4844.59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 279309.2,
            "range": "± 2744.76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 275385.39,
            "range": "± 2868.78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11304459.5,
            "range": "± 80734.04",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1913.17,
            "range": "± 26.90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8092.98,
            "range": "± 171.35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3149.8,
            "range": "± 62.84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10744.35,
            "range": "± 111.39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9730.28,
            "range": "± 89.63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22572.22,
            "range": "± 457.43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1773.16,
            "range": "± 47.74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 304.33,
            "range": "± 7.19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 959370,
            "range": "± 14373.05",
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
          "id": "72a8fe06625ec1411a7b9562947a0243eeebc0fa",
          "message": "Fix builds",
          "timestamp": "2025-01-05T15:52:16+08:00",
          "tree_id": "0099ae08b3f53dda9bee767fca7ed0afa35be711",
          "url": "https://github.com/schungx/rhai/commit/72a8fe06625ec1411a7b9562947a0243eeebc0fa"
        },
        "date": 1736063780194,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 369466.5,
            "range": "± 19110.75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 32.51,
            "range": "± 0.81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 100.42,
            "range": "± 0.59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 544.28,
            "range": "± 8.36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 993.63,
            "range": "± 56.10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1052.8,
            "range": "± 39.63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4452301,
            "range": "± 265184.76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 385.91,
            "range": "± 8.05",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 430.47,
            "range": "± 9.28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9906.19,
            "range": "± 225.25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8370.96,
            "range": "± 171.59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10460.38,
            "range": "± 153.40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 138.35,
            "range": "± 12.32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 191.17,
            "range": "± 5.12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 85.35,
            "range": "± 1.16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 85.55,
            "range": "± 0.42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 85.93,
            "range": "± 1.48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1266338.33,
            "range": "± 21640.86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2121926.8,
            "range": "± 33741.25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1751828.5,
            "range": "± 24757.46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10638.28,
            "range": "± 67.67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4809.14,
            "range": "± 315.56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1283.3,
            "range": "± 139.45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1314.24,
            "range": "± 27.65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 347.65,
            "range": "± 14.64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 383.51,
            "range": "± 15.35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 657.12,
            "range": "± 7.90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 634.07,
            "range": "± 29.68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 258.7,
            "range": "± 6.35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 331.91,
            "range": "± 5.37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 199.69,
            "range": "± 5.09",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 206.68,
            "range": "± 7.82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 205.33,
            "range": "± 6.61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 306.4,
            "range": "± 5.13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 379.52,
            "range": "± 9.90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 351.47,
            "range": "± 2.98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 153205.41,
            "range": "± 4579.58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 271157.5,
            "range": "± 3427.46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 274441.63,
            "range": "± 7091.07",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11195909.6,
            "range": "± 91227.37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1923.66,
            "range": "± 35.39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8155.53,
            "range": "± 153.01",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3185.59,
            "range": "± 81.42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10688.5,
            "range": "± 139.12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9780.61,
            "range": "± 298.52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22209.54,
            "range": "± 392.01",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1761.22,
            "range": "± 45.15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 306.91,
            "range": "± 6.16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 915322.7,
            "range": "± 9336.84",
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
          "id": "7a2124adb1c1b19bd87133e4f5e6c2a69e534b8e",
          "message": "Add binding native function to FnPtr",
          "timestamp": "2025-01-18T17:36:46+08:00",
          "tree_id": "d427da4cce6b2577fd92b369e83428e716129099",
          "url": "https://github.com/schungx/rhai/commit/7a2124adb1c1b19bd87133e4f5e6c2a69e534b8e"
        },
        "date": 1737193229583,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 365648.16,
            "range": "± 9836.25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 34.82,
            "range": "± 0.18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 106.89,
            "range": "± 1.75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 549.78,
            "range": "± 9.46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 995.46,
            "range": "± 11.11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1035.57,
            "range": "± 7.84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4390669.2,
            "range": "± 153025.76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 388.59,
            "range": "± 5.04",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 424.31,
            "range": "± 4.33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9884.1,
            "range": "± 153.63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8370.59,
            "range": "± 110.46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10553.71,
            "range": "± 187.59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 134.35,
            "range": "± 2.37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 193.34,
            "range": "± 8.92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 85.69,
            "range": "± 0.81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 85.81,
            "range": "± 1.06",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86.66,
            "range": "± 0.91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1008903.6,
            "range": "± 14981.39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1825932.1,
            "range": "± 43444.44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1506286.9,
            "range": "± 41423.44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10505.23,
            "range": "± 153.20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4357.33,
            "range": "± 48.43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1294.72,
            "range": "± 14.49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1318.76,
            "range": "± 14.99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 297.16,
            "range": "± 7.49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 341.53,
            "range": "± 78.66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 652.93,
            "range": "± 5.58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 670.57,
            "range": "± 20.25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 235.88,
            "range": "± 2.88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 298.52,
            "range": "± 6.79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 182.36,
            "range": "± 2.85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 182.31,
            "range": "± 6.08",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 211.06,
            "range": "± 3.92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 304.53,
            "range": "± 3.96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 344.63,
            "range": "± 3.85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 364.58,
            "range": "± 1.95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 149793.92,
            "range": "± 2108.62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 281905.27,
            "range": "± 2804.74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 276372.97,
            "range": "± 3120.66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11079068.5,
            "range": "± 61639.16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1916.28,
            "range": "± 17.87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8100.57,
            "range": "± 185.18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3129.25,
            "range": "± 24.42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10657.64,
            "range": "± 268.52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9849.96,
            "range": "± 180.49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22551.52,
            "range": "± 167.77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1750.26,
            "range": "± 30.24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 317.79,
            "range": "± 2.37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1018017.7,
            "range": "± 11599.38",
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
          "id": "46f7a767fea5ae8bf86dbef3f83f68f548e01a05",
          "message": "Fix typo",
          "timestamp": "2025-01-18T17:38:15+08:00",
          "tree_id": "7200150dd713ea7bffb818e7c4258fd4d536dc5c",
          "url": "https://github.com/schungx/rhai/commit/46f7a767fea5ae8bf86dbef3f83f68f548e01a05"
        },
        "date": 1737193423297,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 365981.4,
            "range": "± 14561.36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 34.81,
            "range": "± 0.47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 104.58,
            "range": "± 1.54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 535.9,
            "range": "± 12.62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1085.75,
            "range": "± 21.50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1080.41,
            "range": "± 13.72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4393126.3,
            "range": "± 32558.36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 385.94,
            "range": "± 7.66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 410.6,
            "range": "± 7.68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9749.7,
            "range": "± 45.77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8395.05,
            "range": "± 221.22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10516.75,
            "range": "± 145.11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 133.28,
            "range": "± 67.11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 192.4,
            "range": "± 2.52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 85.77,
            "range": "± 0.66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 86.32,
            "range": "± 1.48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 85.66,
            "range": "± 1.17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1007623.8,
            "range": "± 6175.71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1813030.1,
            "range": "± 86671.54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1496349.6,
            "range": "± 15971.70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10136.22,
            "range": "± 60.56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4311.43,
            "range": "± 55.04",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1396.33,
            "range": "± 51.79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1432.62,
            "range": "± 21.03",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 311.91,
            "range": "± 13.50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 349.8,
            "range": "± 7.51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 661.16,
            "range": "± 9.86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 636.1,
            "range": "± 10.32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 240.06,
            "range": "± 3.40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 302.52,
            "range": "± 5.50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 187.78,
            "range": "± 3.99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 182.53,
            "range": "± 2.94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 211.31,
            "range": "± 3.41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 301.79,
            "range": "± 6.15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 359.84,
            "range": "± 3.64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 357.89,
            "range": "± 3.55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 150624.64,
            "range": "± 3518.65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 282758.73,
            "range": "± 5538.88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 275770.7,
            "range": "± 6521.27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11147796.6,
            "range": "± 294601.78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1949.51,
            "range": "± 60.89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8379.56,
            "range": "± 174.16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3234.86,
            "range": "± 29.93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10863.05,
            "range": "± 89.15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9940.08,
            "range": "± 154.62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22371.09,
            "range": "± 349.92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1811.64,
            "range": "± 33.79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 322.45,
            "range": "± 6.41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 928718,
            "range": "± 46484.86",
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
          "id": "9f463352e2cda6a3902a9b38bbc47439cb4b41db",
          "message": "Fix builds",
          "timestamp": "2025-01-18T17:57:31+08:00",
          "tree_id": "d8c4148ef792c1b20fbf625c799c2b583cd36395",
          "url": "https://github.com/schungx/rhai/commit/9f463352e2cda6a3902a9b38bbc47439cb4b41db"
        },
        "date": 1737194534442,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 362175.57,
            "range": "± 4940.30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 34.82,
            "range": "± 0.49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 105.4,
            "range": "± 2.78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 553.51,
            "range": "± 13.41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1006.93,
            "range": "± 21.79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1074.99,
            "range": "± 24.71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4317328.6,
            "range": "± 59415.14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 385.79,
            "range": "± 4.93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 435.39,
            "range": "± 5.82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9789.65,
            "range": "± 133.08",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8323.99,
            "range": "± 214.62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10506.35,
            "range": "± 61.70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 135.26,
            "range": "± 1.86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 191.82,
            "range": "± 3.97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 85.69,
            "range": "± 1.38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 86.46,
            "range": "± 0.62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86.46,
            "range": "± 0.68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1009212.6,
            "range": "± 5214.56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1861554.2,
            "range": "± 29979.96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1505504.1,
            "range": "± 18972.16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10232.65,
            "range": "± 105.40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4430.11,
            "range": "± 49.65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1239.96,
            "range": "± 21.03",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1274.26,
            "range": "± 27.80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 295.48,
            "range": "± 3.83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 346.4,
            "range": "± 9.43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 659.36,
            "range": "± 53.42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 671.23,
            "range": "± 6.97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 236.06,
            "range": "± 3.08",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 293.07,
            "range": "± 4.39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 180.15,
            "range": "± 5.91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 177.99,
            "range": "± 4.00",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 212.68,
            "range": "± 1.94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 305.23,
            "range": "± 19.11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 340.33,
            "range": "± 4.00",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 353.52,
            "range": "± 2.54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 150300.95,
            "range": "± 2263.43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 272404.93,
            "range": "± 4665.60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 270317.33,
            "range": "± 2091.91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11447047.5,
            "range": "± 143798.70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1933.81,
            "range": "± 1236.92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8248.27,
            "range": "± 84.51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3217.98,
            "range": "± 81.91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10591.43,
            "range": "± 164.73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9793.05,
            "range": "± 139.13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22587.2,
            "range": "± 440.73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1794.5,
            "range": "± 24.46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 321.3,
            "range": "± 3.20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 913691.45,
            "range": "± 6743.34",
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
          "id": "7789ec41c232f7a89ff57a8f8272583ff65268b0",
          "message": "Fix builds",
          "timestamp": "2025-01-18T18:11:36+08:00",
          "tree_id": "738a2788108a8043b817006e88459bd4d20ea46e",
          "url": "https://github.com/schungx/rhai/commit/7789ec41c232f7a89ff57a8f8272583ff65268b0"
        },
        "date": 1737195343603,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 361364.04,
            "range": "± 4779.65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 34.81,
            "range": "± 0.36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 104.29,
            "range": "± 2.21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 539.37,
            "range": "± 9.51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1078.25,
            "range": "± 24.07",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1046.24,
            "range": "± 15.91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4360563.8,
            "range": "± 46772.76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 387.85,
            "range": "± 8.21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 410.08,
            "range": "± 3.98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 9811.77,
            "range": "± 104.11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8364.28,
            "range": "± 100.09",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10533.82,
            "range": "± 83.09",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 141.6,
            "range": "± 9.34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 191.33,
            "range": "± 2.80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 85.81,
            "range": "± 1.80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 85.71,
            "range": "± 0.29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86.49,
            "range": "± 0.40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1281835.4,
            "range": "± 17660.05",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2089166,
            "range": "± 13131.40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1772513.5,
            "range": "± 22862.93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10863.96,
            "range": "± 1012.63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4821.61,
            "range": "± 63.71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1309.74,
            "range": "± 80.96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1300.79,
            "range": "± 20.94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 299.71,
            "range": "± 2.04",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 351.24,
            "range": "± 4.29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 699.62,
            "range": "± 12.94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 673.29,
            "range": "± 32.73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 237.66,
            "range": "± 25.74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 305.04,
            "range": "± 5.41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 198.64,
            "range": "± 4.28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 181.71,
            "range": "± 3.70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 236.32,
            "range": "± 14.87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 304.62,
            "range": "± 2.91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 343.69,
            "range": "± 2.64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 369.25,
            "range": "± 3.49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 150185.87,
            "range": "± 2460.70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 284256.03,
            "range": "± 4937.28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 287643.03,
            "range": "± 7494.55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11073478.4,
            "range": "± 42704.21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1941.73,
            "range": "± 21.03",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8094.22,
            "range": "± 100.28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3205.92,
            "range": "± 24.74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10715.77,
            "range": "± 127.84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9737.75,
            "range": "± 174.53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22443.41,
            "range": "± 455.13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1771.85,
            "range": "± 22.77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 304.24,
            "range": "± 4.12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 960804.6,
            "range": "± 13033.93",
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
          "id": "2055271ab64b2519de2489202e238227c5c99602",
          "message": "Fix wasi target",
          "timestamp": "2025-01-20T11:38:03+08:00",
          "tree_id": "ce4c43a38035b379dddc1b5c16885c96d57fec2f",
          "url": "https://github.com/schungx/rhai/commit/2055271ab64b2519de2489202e238227c5c99602"
        },
        "date": 1737344518546,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 358112.92,
            "range": "± 9107.02",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 34.23,
            "range": "± 1.07",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 101.19,
            "range": "± 1.60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 534.32,
            "range": "± 15.38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1051.09,
            "range": "± 12.41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1027.6,
            "range": "± 43.24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4543129.6,
            "range": "± 64032.04",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 393.23,
            "range": "± 6.50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 424.04,
            "range": "± 12.59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10198.1,
            "range": "± 1986.12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8568.6,
            "range": "± 101.98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10805.42,
            "range": "± 1302.33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 132.27,
            "range": "± 3.02",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 190.85,
            "range": "± 2.42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 85.88,
            "range": "± 1.15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 86.48,
            "range": "± 0.58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86.6,
            "range": "± 0.82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1015648.05,
            "range": "± 19435.40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1816075.6,
            "range": "± 13933.35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1489878.3,
            "range": "± 11181.96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10105.21,
            "range": "± 67.27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4417.6,
            "range": "± 44.68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1367.09,
            "range": "± 67.22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1387.14,
            "range": "± 53.39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 306.65,
            "range": "± 3.84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 339.28,
            "range": "± 4.53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 703.09,
            "range": "± 12.11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 684.83,
            "range": "± 14.77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 254.8,
            "range": "± 5.34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 305.08,
            "range": "± 4.29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 179.85,
            "range": "± 2.28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 178.83,
            "range": "± 1.76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 249.49,
            "range": "± 25.10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 349.28,
            "range": "± 5.55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 363.3,
            "range": "± 13.11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 399.97,
            "range": "± 5.57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 151371.22,
            "range": "± 2399.17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 268929.17,
            "range": "± 6012.75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 263969.27,
            "range": "± 3653.45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11188892.9,
            "range": "± 77686.02",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1919.42,
            "range": "± 32.07",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8156.02,
            "range": "± 100.12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3169.35,
            "range": "± 42.10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10426.5,
            "range": "± 133.69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9888.54,
            "range": "± 127.72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 22567.05,
            "range": "± 231.91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1778.79,
            "range": "± 29.53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 310.51,
            "range": "± 4.24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 946754.3,
            "range": "± 14652.66",
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
          "id": "011d7e9a08b0ac97d48757c2be8f213f31cd7db3",
          "message": "Add EvalContext::call_fn_XXX",
          "timestamp": "2025-01-20T16:16:10+08:00",
          "tree_id": "acf7dee7f454855700bd36cf636bc8ac5e815f81",
          "url": "https://github.com/schungx/rhai/commit/011d7e9a08b0ac97d48757c2be8f213f31cd7db3"
        },
        "date": 1737361194708,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 362240.47,
            "range": "± 11070.49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 34.26,
            "range": "± 0.52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 102.19,
            "range": "± 1.56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 567.52,
            "range": "± 10.74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1068.71,
            "range": "± 18.13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1111.51,
            "range": "± 16.70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4583567.6,
            "range": "± 64703.47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 389.42,
            "range": "± 7.96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 437.26,
            "range": "± 3.28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10025.19,
            "range": "± 152.83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8472.68,
            "range": "± 302.76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10726.26,
            "range": "± 141.45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 136.12,
            "range": "± 44.74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 190.89,
            "range": "± 4.77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 86.61,
            "range": "± 1.62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 86.4,
            "range": "± 0.84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86.12,
            "range": "± 1.20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1007436.2,
            "range": "± 13181.35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1825646.8,
            "range": "± 15931.30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1495160.4,
            "range": "± 15014.11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10089.61,
            "range": "± 83.56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4369.25,
            "range": "± 42.65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1330.8,
            "range": "± 40.59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1334.37,
            "range": "± 46.89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 307.93,
            "range": "± 5.82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 346.48,
            "range": "± 8.97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 670.4,
            "range": "± 14.91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 686.45,
            "range": "± 19.87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 239.39,
            "range": "± 5.09",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 292.09,
            "range": "± 2.30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 178.35,
            "range": "± 1.79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 178.48,
            "range": "± 2.55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 248.62,
            "range": "± 7.37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 351.55,
            "range": "± 8.09",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 364.41,
            "range": "± 18.99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 415.78,
            "range": "± 7.06",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 149312.67,
            "range": "± 1944.04",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 270667.3,
            "range": "± 2848.20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 263939.68,
            "range": "± 3693.90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 10888997.4,
            "range": "± 75350.42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1913.7,
            "range": "± 31.04",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8004.63,
            "range": "± 195.63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3133.16,
            "range": "± 14.97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10494.69,
            "range": "± 138.35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9652.75,
            "range": "± 126.94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 21760.47,
            "range": "± 314.11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1797.97,
            "range": "± 33.57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 318.88,
            "range": "± 3.61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 939653.2,
            "range": "± 9849.35",
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
          "id": "d7fafc0090eed628fa3cbcf9b16265f787408fb3",
          "message": "Add to changes log",
          "timestamp": "2025-01-20T16:25:23+08:00",
          "tree_id": "f04b6fab4c9143af736779f38c1601b15e845b6a",
          "url": "https://github.com/schungx/rhai/commit/d7fafc0090eed628fa3cbcf9b16265f787408fb3"
        },
        "date": 1737361743662,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 377679,
            "range": "± 5927.32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 34.19,
            "range": "± 0.42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 102.23,
            "range": "± 1.42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 583.01,
            "range": "± 9.29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1076.86,
            "range": "± 17.38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1100.62,
            "range": "± 18.03",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4470380.3,
            "range": "± 72244.60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 453.1,
            "range": "± 8.05",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 487.04,
            "range": "± 19.74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10136.03,
            "range": "± 130.44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8622.25,
            "range": "± 251.56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 10716.31,
            "range": "± 139.13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 139.67,
            "range": "± 5.97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 194.05,
            "range": "± 4.47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 86.5,
            "range": "± 0.68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 86.15,
            "range": "± 1.63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86.33,
            "range": "± 1.50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1020659.1,
            "range": "± 19867.70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1861114.4,
            "range": "± 20713.95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1509234.8,
            "range": "± 23701.13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 10179.27,
            "range": "± 1568.39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 4589.42,
            "range": "± 57.45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1344.63,
            "range": "± 25.79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1393.58,
            "range": "± 26.77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 304.72,
            "range": "± 4.14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 339.95,
            "range": "± 5.28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 672.65,
            "range": "± 13.16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 684.75,
            "range": "± 14.55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 248.29,
            "range": "± 3.58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 292.17,
            "range": "± 2.65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 177.2,
            "range": "± 2.25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 180.91,
            "range": "± 2.68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 204.25,
            "range": "± 2.64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 322.6,
            "range": "± 7.70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 349.06,
            "range": "± 4.33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 396.03,
            "range": "± 5.84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 149381.53,
            "range": "± 1427.39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 269252.23,
            "range": "± 6603.07",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 263883.47,
            "range": "± 2409.68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 11064531.2,
            "range": "± 110498.38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1885.33,
            "range": "± 13.81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 7917.17,
            "range": "± 104.11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3133.06,
            "range": "± 23.71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10529.51,
            "range": "± 122.56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 9702.78,
            "range": "± 80.47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 21842.95,
            "range": "± 332.01",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1767.29,
            "range": "± 34.78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 306.46,
            "range": "± 5.54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 952067.8,
            "range": "± 11713.88",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}