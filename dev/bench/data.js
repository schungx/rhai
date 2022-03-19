window.BENCHMARK_DATA = {
  "lastUpdate": 1647655069257,
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
          "id": "807240e2496764ab53d88effe942bae28da555ca",
          "message": "Rename Imports to GlobalRuntimeState.",
          "timestamp": "2021-12-28T11:42:52+08:00",
          "tree_id": "5a3599bfd8dca4e7ce3fceb3f7363e0c96d69352",
          "url": "https://github.com/schungx/rhai/commit/807240e2496764ab53d88effe942bae28da555ca"
        },
        "date": 1640663741315,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 384016,
            "range": "± 40254",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 190,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 202,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 315,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1627,
            "range": "± 320",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1668,
            "range": "± 376",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8046819,
            "range": "± 723422",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 657,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 699,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18889,
            "range": "± 1938",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17702,
            "range": "± 1557",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 612,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1119,
            "range": "± 166",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 120,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 123,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 121,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2442411,
            "range": "± 431825",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4309244,
            "range": "± 447365",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3653564,
            "range": "± 353124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 26316,
            "range": "± 2560",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9886,
            "range": "± 2259",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2527,
            "range": "± 1514",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2720,
            "range": "± 350",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 614,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 674,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1355,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1362,
            "range": "± 194",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1251,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1681,
            "range": "± 261",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 675,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 677,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 372,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 485,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 603,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 603,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 471358,
            "range": "± 64149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 557103,
            "range": "± 81742",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 569482,
            "range": "± 50023",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23036712,
            "range": "± 2190420",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4549,
            "range": "± 719",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15287,
            "range": "± 2321",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6368,
            "range": "± 1033",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20835,
            "range": "± 2169",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17852,
            "range": "± 3484",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 46616,
            "range": "± 7574",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3829,
            "range": "± 603",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 714,
            "range": "± 66",
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
          "id": "80ccd52319e1696d5c24747a035db21ea5da6852",
          "message": "Add tests.",
          "timestamp": "2021-12-30T12:23:35+08:00",
          "tree_id": "05e55a23eac262d405789b341910b939edea1294",
          "url": "https://github.com/schungx/rhai/commit/80ccd52319e1696d5c24747a035db21ea5da6852"
        },
        "date": 1640849095310,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 285792,
            "range": "± 3760",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 138,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 131,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 234,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1200,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1217,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5459020,
            "range": "± 43240",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 462,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 486,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 13430,
            "range": "± 514",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12610,
            "range": "± 248",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 433,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 799,
            "range": "± 11",
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
            "value": 84,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1717312,
            "range": "± 34135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2954931,
            "range": "± 21419",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2555168,
            "range": "± 13977",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 18089,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 6990,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1870,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1927,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 434,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 465,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 958,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 953,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 868,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1165,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 489,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 478,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 261,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 343,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 428,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 427,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 319897,
            "range": "± 928",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 394982,
            "range": "± 3744",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 399252,
            "range": "± 3283",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 15654129,
            "range": "± 103707",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3121,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11436,
            "range": "± 288",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4589,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14960,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13191,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 33703,
            "range": "± 806",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2622,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 475,
            "range": "± 3",
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
          "id": "f3a83649364b3d39e2e71510c67168b8719ac797",
          "message": "Split blob write into write_utf8 and write_ascii.",
          "timestamp": "2021-12-31T17:49:38+08:00",
          "tree_id": "46ab59a24f9f05644722e7b677d37496fddb5757",
          "url": "https://github.com/schungx/rhai/commit/f3a83649364b3d39e2e71510c67168b8719ac797"
        },
        "date": 1640947038739,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 391745,
            "range": "± 33194",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 187,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 177,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 319,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1566,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1633,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7290582,
            "range": "± 561458",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 637,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 651,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18822,
            "range": "± 1522",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17033,
            "range": "± 447",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 583,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1038,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 112,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 112,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 111,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2164727,
            "range": "± 263909",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4207438,
            "range": "± 639526",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3308007,
            "range": "± 750158",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 22678,
            "range": "± 2237",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9009,
            "range": "± 835",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2515,
            "range": "± 196",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2603,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 592,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 646,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1244,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1227,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1205,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1652,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 655,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 648,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 355,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 478,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 584,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 558,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 416040,
            "range": "± 46328",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 518079,
            "range": "± 57199",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 531387,
            "range": "± 43256",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19522692,
            "range": "± 1027096",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4030,
            "range": "± 351",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14610,
            "range": "± 1386",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6081,
            "range": "± 620",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18861,
            "range": "± 2569",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17474,
            "range": "± 1207",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 43110,
            "range": "± 5936",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3418,
            "range": "± 331",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 647,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1884804,
            "range": "± 213282",
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
          "id": "c4c4696964ffc01067230f993e181efe5e4d3d33",
          "message": "Fix builds.",
          "timestamp": "2021-12-31T18:55:48+08:00",
          "tree_id": "0d6a37c807dd5e3923367bd424bf48ec0bf873d5",
          "url": "https://github.com/schungx/rhai/commit/c4c4696964ffc01067230f993e181efe5e4d3d33"
        },
        "date": 1640948963028,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 332153,
            "range": "± 56851",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 172,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 150,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 277,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1401,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1419,
            "range": "± 223",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6627421,
            "range": "± 1090490",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 544,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 582,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15788,
            "range": "± 2770",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14432,
            "range": "± 1744",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 537,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 921,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 102,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 118,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 115,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2205241,
            "range": "± 245789",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4021897,
            "range": "± 294921",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3397167,
            "range": "± 420771",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 21351,
            "range": "± 4207",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8496,
            "range": "± 1228",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2095,
            "range": "± 240",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2147,
            "range": "± 352",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 543,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 539,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1208,
            "range": "± 241",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1093,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1156,
            "range": "± 264",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1451,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 578,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 552,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 324,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 453,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 528,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 513,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 383394,
            "range": "± 93434",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 470822,
            "range": "± 56677",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 471828,
            "range": "± 77212",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 18503884,
            "range": "± 2517142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3778,
            "range": "± 464",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13741,
            "range": "± 2938",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5419,
            "range": "± 807",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 17191,
            "range": "± 2184",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15317,
            "range": "± 2278",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 38794,
            "range": "± 10837",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3026,
            "range": "± 411",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 581,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1846140,
            "range": "± 339897",
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
          "id": "7ed91eadc0472b5425d6d5c48f524e3cc5a62b43",
          "message": "Fix blob test.",
          "timestamp": "2021-12-31T19:34:43+08:00",
          "tree_id": "d0a7bc80410ad5978a2e5e8bcab81ba20eae055d",
          "url": "https://github.com/schungx/rhai/commit/7ed91eadc0472b5425d6d5c48f524e3cc5a62b43"
        },
        "date": 1640951358013,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 388799,
            "range": "± 27120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 185,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 182,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 332,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1656,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1645,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7358819,
            "range": "± 154695",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 637,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 678,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18212,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16906,
            "range": "± 514",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 584,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1039,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 114,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 114,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 114,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2352495,
            "range": "± 53368",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4040731,
            "range": "± 120803",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3431316,
            "range": "± 112946",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 23719,
            "range": "± 1025",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9286,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2651,
            "range": "± 235",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2711,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 603,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 667,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1238,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1235,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1168,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1611,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 654,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 656,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 354,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 476,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 584,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 592,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 430027,
            "range": "± 14464",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 536500,
            "range": "± 29879",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 540360,
            "range": "± 37022",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19962019,
            "range": "± 388712",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4179,
            "range": "± 240",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15141,
            "range": "± 477",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6213,
            "range": "± 349",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20024,
            "range": "± 276",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17704,
            "range": "± 717",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 44236,
            "range": "± 1937",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3492,
            "range": "± 235",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 654,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2037651,
            "range": "± 45929",
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
          "id": "135b1f54c29eed1a66a0089011640a34dd789fd2",
          "message": "Remove Option from source and use empty string as no source.",
          "timestamp": "2022-01-01T17:20:00+08:00",
          "tree_id": "c5f4b35962b8015ef3f44efc88edc700674a195d",
          "url": "https://github.com/schungx/rhai/commit/135b1f54c29eed1a66a0089011640a34dd789fd2"
        },
        "date": 1641029334621,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 386640,
            "range": "± 18496",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 184,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 183,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 310,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1539,
            "range": "± 224",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1579,
            "range": "± 347",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7563333,
            "range": "± 213951",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 638,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 678,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18368,
            "range": "± 883",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16864,
            "range": "± 3801",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 646,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1109,
            "range": "± 304",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 113,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 113,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 113,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2283076,
            "range": "± 167386",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4217573,
            "range": "± 551954",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3587743,
            "range": "± 136282",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24280,
            "range": "± 5152",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9319,
            "range": "± 1167",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2551,
            "range": "± 436",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2520,
            "range": "± 349",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 578,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 620,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1321,
            "range": "± 377",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1327,
            "range": "± 223",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1226,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1694,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 692,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 673,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 352,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 452,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 573,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 578,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 448949,
            "range": "± 65873",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 540159,
            "range": "± 112528",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 546370,
            "range": "± 113217",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21598218,
            "range": "± 887701",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4211,
            "range": "± 865",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14503,
            "range": "± 2859",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6080,
            "range": "± 2113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19698,
            "range": "± 3054",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16976,
            "range": "± 2220",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 42889,
            "range": "± 11782",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3424,
            "range": "± 665",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 642,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2042716,
            "range": "± 123596",
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
          "id": "a6ddb64596834bb2a61fa67d63b3cefb7fc3baea",
          "message": "Fix builds.",
          "timestamp": "2022-01-01T17:38:32+08:00",
          "tree_id": "a78e8d62e673d2077382c4a7d8f07de8bd09fc9c",
          "url": "https://github.com/schungx/rhai/commit/a6ddb64596834bb2a61fa67d63b3cefb7fc3baea"
        },
        "date": 1641030697733,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 363793,
            "range": "± 34106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 175,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 166,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 284,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1485,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1559,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6897723,
            "range": "± 678937",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 595,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 633,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16188,
            "range": "± 1772",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15377,
            "range": "± 1625",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 566,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 949,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 106,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 107,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 106,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2111969,
            "range": "± 237103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3825222,
            "range": "± 360878",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3297177,
            "range": "± 190455",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 21511,
            "range": "± 1752",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8390,
            "range": "± 717",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2340,
            "range": "± 236",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2324,
            "range": "± 229",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 538,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 576,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1152,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1193,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1086,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1519,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 618,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 598,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 321,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 434,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 572,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 558,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 420279,
            "range": "± 39203",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 527884,
            "range": "± 51330",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 495700,
            "range": "± 37868",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 18797636,
            "range": "± 1408385",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3929,
            "range": "± 404",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14211,
            "range": "± 1640",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5789,
            "range": "± 415",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18424,
            "range": "± 1919",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16174,
            "range": "± 1428",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 40859,
            "range": "± 3899",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3243,
            "range": "± 283",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 601,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2039377,
            "range": "± 20698",
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
          "id": "d60ed5a5028efd92f473f2e60d5d49f253448bf0",
          "message": "Reduce size of Variant trait.",
          "timestamp": "2022-01-01T19:54:46+08:00",
          "tree_id": "e0fc1a2fce08c87154810dfc858de0fcec91158d",
          "url": "https://github.com/schungx/rhai/commit/d60ed5a5028efd92f473f2e60d5d49f253448bf0"
        },
        "date": 1641038805186,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 376430,
            "range": "± 19833",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 187,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 180,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 306,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1540,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1641,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7488785,
            "range": "± 220843",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 627,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 644,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17997,
            "range": "± 920",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16957,
            "range": "± 1849",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 600,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1074,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 113,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 112,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 113,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2227289,
            "range": "± 87203",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3985925,
            "range": "± 132293",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3364036,
            "range": "± 194405",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 23136,
            "range": "± 1060",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9056,
            "range": "± 516",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2454,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2575,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 581,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 628,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1246,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1266,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1194,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1687,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 642,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 685,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 346,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 464,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 575,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 576,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 419267,
            "range": "± 21745",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 528398,
            "range": "± 36748",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 522406,
            "range": "± 21256",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19654207,
            "range": "± 991685",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4172,
            "range": "± 393",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14653,
            "range": "± 601",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6065,
            "range": "± 277",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20215,
            "range": "± 529",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17613,
            "range": "± 1225",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 45177,
            "range": "± 1824",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3635,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 662,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2039504,
            "range": "± 99186",
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
          "id": "29f1328087604463843bf6966146672ac83e11c6",
          "message": "Simplify Dynamic::from for better inlining.",
          "timestamp": "2022-01-02T20:47:03+08:00",
          "tree_id": "0c033e20f676069e440ecffa6921a78934e83a3d",
          "url": "https://github.com/schungx/rhai/commit/29f1328087604463843bf6966146672ac83e11c6"
        },
        "date": 1641131400438,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 290866,
            "range": "± 1750",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 139,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 131,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 219,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1204,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1212,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5498510,
            "range": "± 14005",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 472,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 492,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 13340,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12642,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 444,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 815,
            "range": "± 6",
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
            "value": 1678040,
            "range": "± 13613",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3000499,
            "range": "± 15946",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2580226,
            "range": "± 13690",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 17993,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 6954,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1891,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1917,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 455,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 468,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 964,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 979,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 874,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1198,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 494,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 496,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 261,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 354,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 439,
            "range": "± 16",
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
            "value": 317415,
            "range": "± 3135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 399102,
            "range": "± 4235",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 402537,
            "range": "± 6052",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 15771594,
            "range": "± 56056",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3160,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11581,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4626,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15100,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13294,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 33809,
            "range": "± 285",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2702,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 482,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1492269,
            "range": "± 6739",
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
          "id": "1d1e473ac45f5fb1418ddbbf3188ac6a534f4151",
          "message": "Minor refactor.",
          "timestamp": "2022-01-03T23:16:47+08:00",
          "tree_id": "15693ef961a4ff8867b993672bbacbb10cc0176b",
          "url": "https://github.com/schungx/rhai/commit/1d1e473ac45f5fb1418ddbbf3188ac6a534f4151"
        },
        "date": 1641223847961,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 377026,
            "range": "± 40726",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 194,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 190,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 310,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1673,
            "range": "± 303",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1761,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8071885,
            "range": "± 1094794",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 656,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 690,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18568,
            "range": "± 2550",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16760,
            "range": "± 1703",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 628,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1104,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 119,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 120,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 125,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2459798,
            "range": "± 500544",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4465694,
            "range": "± 791516",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3755473,
            "range": "± 488238",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 26693,
            "range": "± 2790",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 10715,
            "range": "± 3222",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2660,
            "range": "± 951",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2700,
            "range": "± 576",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 615,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 651,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1362,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1391,
            "range": "± 251",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1290,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1718,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 737,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 716,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 362,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 460,
            "range": "± 472",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 581,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 610,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 449574,
            "range": "± 107261",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 559912,
            "range": "± 23114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 585032,
            "range": "± 127994",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22922830,
            "range": "± 1796719",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4454,
            "range": "± 331",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15518,
            "range": "± 1580",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6385,
            "range": "± 484",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20439,
            "range": "± 2813",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17478,
            "range": "± 2168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 44087,
            "range": "± 7052",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3628,
            "range": "± 499",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 671,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2085138,
            "range": "± 218465",
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
          "id": "d99953c101dfd39bfe0586ff7173399305d5c8d7",
          "message": "Fixup AsRef<str> vs &str.",
          "timestamp": "2022-01-04T15:22:48+08:00",
          "tree_id": "67e514772fe97abe83ea62ad32ed8dff98810b1b",
          "url": "https://github.com/schungx/rhai/commit/d99953c101dfd39bfe0586ff7173399305d5c8d7"
        },
        "date": 1641281832338,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 493317,
            "range": "± 94947",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 182,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 187,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 368,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1587,
            "range": "± 310",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1645,
            "range": "± 289",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7535206,
            "range": "± 990052",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 670,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 656,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 20176,
            "range": "± 4348",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 19844,
            "range": "± 7199",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 588,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1111,
            "range": "± 290",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 108,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 106,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 107,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2208924,
            "range": "± 353817",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4342652,
            "range": "± 816926",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3629042,
            "range": "± 385828",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24430,
            "range": "± 3720",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9247,
            "range": "± 1302",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2523,
            "range": "± 401",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2538,
            "range": "± 578",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 570,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 625,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1363,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1242,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1119,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1582,
            "range": "± 259",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 661,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 616,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 385,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 476,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 599,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 623,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 420885,
            "range": "± 84720",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 530787,
            "range": "± 115377",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 544490,
            "range": "± 98086",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22946112,
            "range": "± 3793910",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4420,
            "range": "± 859",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 16506,
            "range": "± 3878",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6674,
            "range": "± 1357",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 22066,
            "range": "± 6380",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 18966,
            "range": "± 3426",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 45504,
            "range": "± 8370",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4251,
            "range": "± 835",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 707,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2117640,
            "range": "± 335485",
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
          "id": "a0531129df26f90071d3a52e6aa5f6385a3650b7",
          "message": "Restructure expression dispatch.",
          "timestamp": "2022-01-05T13:14:18+08:00",
          "tree_id": "234321c1da837463ea35077ecea350e14ae21628",
          "url": "https://github.com/schungx/rhai/commit/a0531129df26f90071d3a52e6aa5f6385a3650b7"
        },
        "date": 1641360137756,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 490779,
            "range": "± 69138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 201,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 201,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 342,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1470,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1472,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7281500,
            "range": "± 829897",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 517,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 548,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18954,
            "range": "± 2889",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 18248,
            "range": "± 2891",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 529,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 995,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 81,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 81,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 83,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1917184,
            "range": "± 301334",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3510281,
            "range": "± 416758",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3133451,
            "range": "± 513422",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 22535,
            "range": "± 2962",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8593,
            "range": "± 1025",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1746,
            "range": "± 512",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1783,
            "range": "± 592",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 479,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 487,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1202,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1263,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1149,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1650,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 681,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 652,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 376,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 473,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 609,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 582,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 380014,
            "range": "± 59821",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 514656,
            "range": "± 37992",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 507320,
            "range": "± 90598",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 18211033,
            "range": "± 1930305",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3904,
            "range": "± 434",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 16390,
            "range": "± 2390",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6182,
            "range": "± 913",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 21987,
            "range": "± 3266",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 20266,
            "range": "± 1006",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 43314,
            "range": "± 6910",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3519,
            "range": "± 581",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 615,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1894107,
            "range": "± 254052",
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
          "id": "bc6bf6c6baf3614c2be1e8585fb79562290d8e1f",
          "message": "Change expect(\"exists\") to unwrap().",
          "timestamp": "2022-01-06T11:07:52+08:00",
          "tree_id": "8ed8c2e74193ad4d7e6ff187a4a81fb638db70a0",
          "url": "https://github.com/schungx/rhai/commit/bc6bf6c6baf3614c2be1e8585fb79562290d8e1f"
        },
        "date": 1641439294529,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 328745,
            "range": "± 53109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 152,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 147,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 241,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1366,
            "range": "± 315",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1425,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7043162,
            "range": "± 675474",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 516,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 564,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 19883,
            "range": "± 2734",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 20112,
            "range": "± 1963",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 582,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1059,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 84,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 84,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 85,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2019435,
            "range": "± 254980",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3994240,
            "range": "± 374591",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3259831,
            "range": "± 415027",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 22225,
            "range": "± 3730",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8678,
            "range": "± 1039",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1817,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1783,
            "range": "± 266",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 450,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 504,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1235,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1269,
            "range": "± 166",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1179,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1561,
            "range": "± 229",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 625,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 651,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 359,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 463,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 558,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 612,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 431155,
            "range": "± 82195",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 493843,
            "range": "± 63233",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 517528,
            "range": "± 60526",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19565258,
            "range": "± 1438253",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4096,
            "range": "± 532",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 16287,
            "range": "± 1987",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6609,
            "range": "± 872",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 22156,
            "range": "± 3113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 18865,
            "range": "± 2682",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 45950,
            "range": "± 6019",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3650,
            "range": "± 477",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 631,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1801685,
            "range": "± 246495",
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
          "id": "ed89817d0c05939e86ee8e310eefed25ee74ff21",
          "message": "Reverse tail call optimization.",
          "timestamp": "2022-01-06T12:31:46+08:00",
          "tree_id": "105edc1bfa19f612f56ff85f1f68f2452031db21",
          "url": "https://github.com/schungx/rhai/commit/ed89817d0c05939e86ee8e310eefed25ee74ff21"
        },
        "date": 1641444249546,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 286221,
            "range": "± 40627",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 128,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 122,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 204,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1085,
            "range": "± 428",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1119,
            "range": "± 364",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6323307,
            "range": "± 1030907",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 455,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 464,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17302,
            "range": "± 3396",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15530,
            "range": "± 1970",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 499,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 856,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 74,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 71,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 68,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1731595,
            "range": "± 218998",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3194164,
            "range": "± 361851",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2683709,
            "range": "± 213996",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 19134,
            "range": "± 2121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7064,
            "range": "± 1480",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1430,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1377,
            "range": "± 215",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 392,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 391,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1063,
            "range": "± 206",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1045,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 867,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1284,
            "range": "± 219",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 536,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 566,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 302,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 374,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 500,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 462,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 342813,
            "range": "± 128952",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 430945,
            "range": "± 85048",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 509534,
            "range": "± 89839",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 17351294,
            "range": "± 3817700",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3568,
            "range": "± 337",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14586,
            "range": "± 2860",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5782,
            "range": "± 783",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 17998,
            "range": "± 1469",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16511,
            "range": "± 3204",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 37654,
            "range": "± 5684",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3408,
            "range": "± 484",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 596,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1518357,
            "range": "± 216231",
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
          "id": "c75d51ae880267f567cc09adb4d041094d0bdaf1",
          "message": "Reduce unnecessary data size checking.",
          "timestamp": "2022-01-06T22:10:16+08:00",
          "tree_id": "01d41c210e36016160c5db4df74f4637cc59e90a",
          "url": "https://github.com/schungx/rhai/commit/c75d51ae880267f567cc09adb4d041094d0bdaf1"
        },
        "date": 1641479066185,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 305076,
            "range": "± 2120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 135,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 133,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 217,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1255,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1251,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5722029,
            "range": "± 9061",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 479,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 462,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17623,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16742,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 456,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 896,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 67,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 66,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 66,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1679810,
            "range": "± 2166",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3301450,
            "range": "± 230585",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2631866,
            "range": "± 216903",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 18582,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 6880,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1606,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1628,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 370,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 402,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1130,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1134,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 933,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1401,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 543,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 551,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 292,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 384,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 497,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 493,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 329778,
            "range": "± 1634",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 416010,
            "range": "± 1187",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 418810,
            "range": "± 1613",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 16247164,
            "range": "± 132878",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3570,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15112,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5850,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19543,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17408,
            "range": "± 230",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 41110,
            "range": "± 1732",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3386,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 536,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1486907,
            "range": "± 2357",
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
          "id": "33bfff372251c5fc648d00dd51a2fa2707278645",
          "message": "Fix build.",
          "timestamp": "2022-01-06T23:29:11+08:00",
          "tree_id": "83c17d44c4a39cfaf82181560dc8367dcdb7f495",
          "url": "https://github.com/schungx/rhai/commit/33bfff372251c5fc648d00dd51a2fa2707278645"
        },
        "date": 1641521889330,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 303304,
            "range": "± 69634",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 133,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 127,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 214,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1228,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1243,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5856680,
            "range": "± 12969",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 443,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 463,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17396,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16464,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 499,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 885,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 66,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 66,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 66,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1679106,
            "range": "± 3330",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3239192,
            "range": "± 6685",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2628510,
            "range": "± 8726",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 18723,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7011,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1621,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1659,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 375,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 408,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1038,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1033,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 924,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1324,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 529,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 547,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 296,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 373,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 495,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 481,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 332956,
            "range": "± 3729",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 415701,
            "range": "± 3069",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 414131,
            "range": "± 1946",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 16251771,
            "range": "± 52869",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3635,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14997,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5974,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19235,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17142,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 41071,
            "range": "± 829",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3343,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 527,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1480651,
            "range": "± 4757",
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
          "id": "a267ac5e543969473769dab03e084f81f62d6ed0",
          "message": "Split Engine into eval folder.",
          "timestamp": "2022-01-07T11:43:47+08:00",
          "tree_id": "48693bdaa305620a43d3867587ceb5ee49dbfcd6",
          "url": "https://github.com/schungx/rhai/commit/a267ac5e543969473769dab03e084f81f62d6ed0"
        },
        "date": 1641527778935,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 296053,
            "range": "± 38931",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 136,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 146,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 239,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1410,
            "range": "± 242",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1369,
            "range": "± 316",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5787898,
            "range": "± 1221620",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 500,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 529,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 19015,
            "range": "± 2476",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17533,
            "range": "± 1702",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 471,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 830,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 60,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 64,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 60,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1612949,
            "range": "± 399302",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3029324,
            "range": "± 485943",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2515955,
            "range": "± 333949",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 18161,
            "range": "± 3749",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 6648,
            "range": "± 1010",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1728,
            "range": "± 264",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1736,
            "range": "± 293",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 402,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 463,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1079,
            "range": "± 196",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1147,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1031,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1453,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 621,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 601,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 319,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 419,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 507,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 495,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 374620,
            "range": "± 53682",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 473547,
            "range": "± 96691",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 444705,
            "range": "± 51942",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 17034598,
            "range": "± 2083434",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4018,
            "range": "± 568",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 16634,
            "range": "± 1577",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6003,
            "range": "± 790",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19878,
            "range": "± 1964",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17874,
            "range": "± 1824",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 42788,
            "range": "± 6435",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3511,
            "range": "± 580",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 573,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1584143,
            "range": "± 140456",
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
          "id": "047e65223d01f7c66e42cea78ea79f36be77c3bb",
          "message": "Fix builds.",
          "timestamp": "2022-01-07T12:19:01+08:00",
          "tree_id": "fde8ce157c8a37d151aedda17109d5b5c0c208b7",
          "url": "https://github.com/schungx/rhai/commit/047e65223d01f7c66e42cea78ea79f36be77c3bb"
        },
        "date": 1641529640075,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 287429,
            "range": "± 58689",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 138,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 130,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 221,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1367,
            "range": "± 267",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1300,
            "range": "± 452",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6199553,
            "range": "± 530772",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 444,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 476,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16500,
            "range": "± 2841",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16839,
            "range": "± 6910",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 455,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 859,
            "range": "± 258",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 64,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 72,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 63,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1603106,
            "range": "± 216106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3064205,
            "range": "± 556954",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2570098,
            "range": "± 326409",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 17840,
            "range": "± 2068",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7018,
            "range": "± 1508",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1495,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1528,
            "range": "± 244",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 350,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 441,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1207,
            "range": "± 466",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1065,
            "range": "± 236",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 933,
            "range": "± 282",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1773,
            "range": "± 407",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 581,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 598,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 300,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 378,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 463,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 425,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 311597,
            "range": "± 57901",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 409298,
            "range": "± 113744",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 395996,
            "range": "± 66737",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 15638122,
            "range": "± 1710597",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3516,
            "range": "± 474",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14974,
            "range": "± 3000",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5638,
            "range": "± 1690",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18714,
            "range": "± 1574",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16284,
            "range": "± 5222",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 38309,
            "range": "± 6922",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3094,
            "range": "± 379",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 529,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1421985,
            "range": "± 175561",
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
          "id": "afb651d0aa27198e752c3b295d9e95473d44bf7a",
          "message": "Support converting literal FnPtr.",
          "timestamp": "2022-01-08T14:00:41+08:00",
          "tree_id": "dcdb15fa9dce93e68f780d77f96b25f4d1ef1b52",
          "url": "https://github.com/schungx/rhai/commit/afb651d0aa27198e752c3b295d9e95473d44bf7a"
        },
        "date": 1641624419275,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 346424,
            "range": "± 44797",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 165,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 162,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 259,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1405,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1439,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7011589,
            "range": "± 1068556",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 505,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 527,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 20766,
            "range": "± 2454",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 19747,
            "range": "± 3743",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 574,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1052,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 76,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 75,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 79,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2047222,
            "range": "± 258136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3801543,
            "range": "± 380126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3162113,
            "range": "± 168850",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 22631,
            "range": "± 3301",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8313,
            "range": "± 863",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1874,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1857,
            "range": "± 562",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 458,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 482,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1212,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1203,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1222,
            "range": "± 380",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1637,
            "range": "± 323",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 713,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 682,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 335,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 437,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 561,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 528,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 399368,
            "range": "± 47322",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 503007,
            "range": "± 58015",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 506698,
            "range": "± 62499",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19433981,
            "range": "± 1686535",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4300,
            "range": "± 583",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 17711,
            "range": "± 4148",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6956,
            "range": "± 845",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 23148,
            "range": "± 2785",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 20155,
            "range": "± 2039",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 45658,
            "range": "± 3013",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3831,
            "range": "± 493",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 672,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1832574,
            "range": "± 323263",
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
          "id": "2afbfd366290bbcb2bb7860fb338c8249ad15cff",
          "message": "Add opcodes engine to Expr evaluation.",
          "timestamp": "2022-01-08T15:06:31+08:00",
          "tree_id": "cb649488e0c7f96a784f4f8cc6b8fdc68d89ee96",
          "url": "https://github.com/schungx/rhai/commit/2afbfd366290bbcb2bb7860fb338c8249ad15cff"
        },
        "date": 1641626209865,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 357612,
            "range": "± 26348",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 188,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 173,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 274,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1741,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1684,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7215332,
            "range": "± 810599",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 668,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 705,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 21441,
            "range": "± 2954",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 20554,
            "range": "± 2100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 645,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1163,
            "range": "± 195",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 81,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 78,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 80,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2137387,
            "range": "± 193462",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4002301,
            "range": "± 346628",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3455261,
            "range": "± 461750",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24038,
            "range": "± 4306",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8668,
            "range": "± 799",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2378,
            "range": "± 354",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2324,
            "range": "± 330",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 514,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 550,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1374,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1299,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1508,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1739,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 700,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 701,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 370,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 486,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 617,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 629,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 441264,
            "range": "± 65259",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 532882,
            "range": "± 68680",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 519531,
            "range": "± 67170",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22842438,
            "range": "± 1703533",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4689,
            "range": "± 1239",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 19421,
            "range": "± 2518",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 7416,
            "range": "± 395",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 24435,
            "range": "± 3164",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 21479,
            "range": "± 2088",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 48488,
            "range": "± 2980",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4065,
            "range": "± 458",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 757,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1894986,
            "range": "± 124447",
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
          "id": "e3ed3a22a157a8cd041a6a10502d0d70da488966",
          "message": "Improve opcode efficiency.",
          "timestamp": "2022-01-08T18:25:02+08:00",
          "tree_id": "e9b2137297a528c647823b2b3444760f7b86a8d8",
          "url": "https://github.com/schungx/rhai/commit/e3ed3a22a157a8cd041a6a10502d0d70da488966"
        },
        "date": 1641638117000,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 303688,
            "range": "± 2172",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 138,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 130,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 222,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1440,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1471,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5700680,
            "range": "± 5015",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 546,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 561,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17769,
            "range": "± 219",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16466,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 509,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1037,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 62,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 63,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 63,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1623517,
            "range": "± 1776",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3269174,
            "range": "± 80609",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2794609,
            "range": "± 6476",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 19151,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7198,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1893,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1904,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 418,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 447,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1087,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1066,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1034,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1637,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 563,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 545,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 295,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 390,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 502,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 467,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 338623,
            "range": "± 2912",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 415249,
            "range": "± 21541",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 425869,
            "range": "± 3150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19476844,
            "range": "± 61353",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3576,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14901,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5711,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19450,
            "range": "± 558",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17196,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 40843,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3257,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 522,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1485944,
            "range": "± 4299",
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
          "id": "08e846d5b502cbe12ac5fdb4773b9574ade4ff6a",
          "message": "Do not inline eval_expr.",
          "timestamp": "2022-01-08T23:24:42+08:00",
          "tree_id": "87b80b29d103edc8420537d140cede5411f61e28",
          "url": "https://github.com/schungx/rhai/commit/08e846d5b502cbe12ac5fdb4773b9574ade4ff6a"
        },
        "date": 1641656098562,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 340504,
            "range": "± 93747",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 151,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 160,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 245,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1564,
            "range": "± 274",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1597,
            "range": "± 394",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6994294,
            "range": "± 995905",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 633,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 658,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18647,
            "range": "± 3153",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 19880,
            "range": "± 5470",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 572,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1146,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 76,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 70,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 73,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1922103,
            "range": "± 369035",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3558355,
            "range": "± 664792",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3068340,
            "range": "± 552273",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 20222,
            "range": "± 3209",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7607,
            "range": "± 1301",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2067,
            "range": "± 704",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2203,
            "range": "± 428",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 495,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 574,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1228,
            "range": "± 221",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1190,
            "range": "± 249",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1111,
            "range": "± 246",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1928,
            "range": "± 313",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 656,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 654,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 327,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 420,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 539,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 535,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 378361,
            "range": "± 118164",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 457249,
            "range": "± 72444",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 475953,
            "range": "± 84186",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 20428913,
            "range": "± 3407434",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4112,
            "range": "± 783",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 16591,
            "range": "± 3966",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6494,
            "range": "± 1096",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 21901,
            "range": "± 4356",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 18777,
            "range": "± 1963",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 47522,
            "range": "± 10435",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3556,
            "range": "± 600",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 604,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1770322,
            "range": "± 366319",
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
          "id": "ee0edd3f6f0c97dd02ca1f58116c9124008676d0",
          "message": "Do not inline eval_expr.",
          "timestamp": "2022-01-09T12:44:47+08:00",
          "tree_id": "e724b1f52835699493b8853eb23c59fc9ea03e74",
          "url": "https://github.com/schungx/rhai/commit/ee0edd3f6f0c97dd02ca1f58116c9124008676d0"
        },
        "date": 1641704196802,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 360097,
            "range": "± 26002",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 164,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 158,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 254,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1687,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1718,
            "range": "± 573",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6906708,
            "range": "± 1093103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 652,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 657,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 20564,
            "range": "± 2008",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 18641,
            "range": "± 1106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 548,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1167,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 78,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 78,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 76,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2019082,
            "range": "± 37479",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3663642,
            "range": "± 134430",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3101111,
            "range": "± 126086",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 20915,
            "range": "± 265",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8255,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2215,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2324,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 492,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 515,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1122,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1134,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1224,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1949,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 670,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 661,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 354,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 442,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 582,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 539,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 389113,
            "range": "± 15266",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 492933,
            "range": "± 33256",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 494603,
            "range": "± 41459",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 20107945,
            "range": "± 930057",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4251,
            "range": "± 202",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 17221,
            "range": "± 1406",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6668,
            "range": "± 409",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 21847,
            "range": "± 1282",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 19761,
            "range": "± 1066",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 47982,
            "range": "± 2889",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3801,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 621,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1795752,
            "range": "± 55757",
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
          "id": "e4e2bb33569679412288b62aee97df88f4f3ecd9",
          "message": "Fix builds.",
          "timestamp": "2022-01-09T12:44:24+08:00",
          "tree_id": "3495ba796f74eff80eb5751e843b64f89693f1ef",
          "url": "https://github.com/schungx/rhai/commit/e4e2bb33569679412288b62aee97df88f4f3ecd9"
        },
        "date": 1641704299597,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 319444,
            "range": "± 76411",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 145,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 150,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 251,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1292,
            "range": "± 230",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1312,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6855662,
            "range": "± 1392531",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 468,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 481,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18132,
            "range": "± 2908",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16830,
            "range": "± 2169",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 537,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 995,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 70,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 69,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 69,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1852133,
            "range": "± 238146",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3511881,
            "range": "± 582193",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2900790,
            "range": "± 387368",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 19901,
            "range": "± 3056",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7502,
            "range": "± 1839",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1641,
            "range": "± 304",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1820,
            "range": "± 330",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 382,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 431,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1130,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1173,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1032,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1565,
            "range": "± 302",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 599,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 579,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 298,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 401,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 522,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 476,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 380469,
            "range": "± 66545",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 445620,
            "range": "± 78645",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 456056,
            "range": "± 76015",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 17667488,
            "range": "± 2325232",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3882,
            "range": "± 595",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15589,
            "range": "± 2594",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6190,
            "range": "± 1195",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20803,
            "range": "± 3776",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17691,
            "range": "± 3405",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 41423,
            "range": "± 7945",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3490,
            "range": "± 502",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 562,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1581560,
            "range": "± 367057",
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
          "id": "c017970230f26992d24505cf0a53d466a733bb31",
          "message": "Do not inline eval_expr.",
          "timestamp": "2022-01-09T17:42:08+08:00",
          "tree_id": "4e64f2c8c90290abe87cc0388cc63e1ebd7ad41f",
          "url": "https://github.com/schungx/rhai/commit/c017970230f26992d24505cf0a53d466a733bb31"
        },
        "date": 1641722190407,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 309889,
            "range": "± 39634",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 149,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 142,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 265,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1514,
            "range": "± 217",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1535,
            "range": "± 245",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7115291,
            "range": "± 1316593",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 611,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 636,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 19940,
            "range": "± 3205",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 19822,
            "range": "± 4703",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 29549,
            "range": "± 7314",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 546,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1152,
            "range": "± 230",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 71,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 73,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 72,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2074272,
            "range": "± 292034",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3463236,
            "range": "± 867261",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2940061,
            "range": "± 444468",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 19541,
            "range": "± 3384",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7689,
            "range": "± 1330",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1980,
            "range": "± 606",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2016,
            "range": "± 285",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 447,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 504,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1134,
            "range": "± 259",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1132,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1109,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1778,
            "range": "± 367",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 611,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 609,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 333,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 390,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 544,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 504,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 362632,
            "range": "± 90160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 466042,
            "range": "± 73760",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 446609,
            "range": "± 92443",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19682357,
            "range": "± 3331534",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3828,
            "range": "± 1245",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15391,
            "range": "± 2308",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6309,
            "range": "± 1789",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20863,
            "range": "± 4052",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17972,
            "range": "± 3885",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 42069,
            "range": "± 5808",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3521,
            "range": "± 630",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 594,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1650576,
            "range": "± 396114",
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
          "id": "efd57c600b105e61e40ada0a2e1d7f1679446ab5",
          "message": "Add test for literal operations.",
          "timestamp": "2022-01-10T13:29:22+08:00",
          "tree_id": "869cb6b977b5b1d6282834a0978adaf87fa95074",
          "url": "https://github.com/schungx/rhai/commit/efd57c600b105e61e40ada0a2e1d7f1679446ab5"
        },
        "date": 1641793192037,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 310022,
            "range": "± 1824",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 137,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 129,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 221,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1283,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1272,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5810604,
            "range": "± 7531",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 443,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 465,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17778,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16810,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 21053,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 476,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 869,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 66,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 66,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 66,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1697153,
            "range": "± 4438",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3093703,
            "range": "± 2425",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2610690,
            "range": "± 2184",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 18441,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 6972,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1625,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1636,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 374,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 407,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1058,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1040,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 936,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1370,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 553,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 554,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 306,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 386,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 499,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 504,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 339752,
            "range": "± 1991",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 415513,
            "range": "± 1338",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 417608,
            "range": "± 958",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 16716421,
            "range": "± 89179",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3729,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15255,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5820,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19695,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17323,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 41689,
            "range": "± 325",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3362,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 535,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1501856,
            "range": "± 2618",
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
          "id": "c94456568563ef6df837ad1f70423b35d60f2c09",
          "message": "Add missing operation counts.",
          "timestamp": "2022-01-10T22:13:07+08:00",
          "tree_id": "7fd56af8f2e4353fb7d793448fb9405d7a3b048b",
          "url": "https://github.com/schungx/rhai/commit/c94456568563ef6df837ad1f70423b35d60f2c09"
        },
        "date": 1641824423379,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 372192,
            "range": "± 9902",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 162,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 155,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 259,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1792,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1790,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6933193,
            "range": "± 76550",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 690,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 713,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 20741,
            "range": "± 513",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 19599,
            "range": "± 459",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 26313,
            "range": "± 295",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 563,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1206,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 79,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 79,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 79,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2036536,
            "range": "± 47447",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3663226,
            "range": "± 90312",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3118579,
            "range": "± 78021",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 20856,
            "range": "± 1157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8205,
            "range": "± 290",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2298,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2308,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 502,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 548,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1176,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1178,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1158,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1833,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 640,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 649,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 353,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 452,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 599,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 557,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 400595,
            "range": "± 16893",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 487916,
            "range": "± 35828",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 487396,
            "range": "± 20043",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 20458230,
            "range": "± 327852",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4330,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 17703,
            "range": "± 542",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6923,
            "range": "± 544",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 23408,
            "range": "± 1155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 20416,
            "range": "± 687",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 47456,
            "range": "± 1463",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3856,
            "range": "± 221",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 639,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1788272,
            "range": "± 35105",
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
          "id": "8929ebd3553d6eb00a6c8fcbaf42b3191f427d54",
          "message": "Add missing operation counts.",
          "timestamp": "2022-01-10T22:52:17+08:00",
          "tree_id": "ff2b4eaff149a6e6c13d871564d3c5c7e6e3e05d",
          "url": "https://github.com/schungx/rhai/commit/8929ebd3553d6eb00a6c8fcbaf42b3191f427d54"
        },
        "date": 1641827068576,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 368942,
            "range": "± 45255",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 174,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 166,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 273,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1823,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1856,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7623107,
            "range": "± 686468",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 727,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 750,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 20978,
            "range": "± 11036",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 20281,
            "range": "± 6751",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 26567,
            "range": "± 2296",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 591,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1249,
            "range": "± 217",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 81,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 80,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 80,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2191383,
            "range": "± 251283",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3957106,
            "range": "± 143870",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3357918,
            "range": "± 82009",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 22787,
            "range": "± 1108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8537,
            "range": "± 1484",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2381,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2382,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 521,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 584,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1365,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1311,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1245,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 2026,
            "range": "± 215",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 664,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 700,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 380,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 469,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 629,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 569,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 416941,
            "range": "± 20486",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 512489,
            "range": "± 41038",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 510689,
            "range": "± 24915",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23139748,
            "range": "± 1890512",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4592,
            "range": "± 282",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 17940,
            "range": "± 924",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 7285,
            "range": "± 429",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 23948,
            "range": "± 1818",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 20579,
            "range": "± 1925",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 48222,
            "range": "± 1036",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4124,
            "range": "± 481",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 691,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1886319,
            "range": "± 156816",
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
          "id": "00255a9b78f5a4e3e799b3fa280c34fcc6d59ac8",
          "message": "Merge 1.3.1 into 1.4.0.",
          "timestamp": "2022-01-11T09:05:18+08:00",
          "tree_id": "0ffcc1f7ed550d006c2d47cc5b7a975dda9e64e2",
          "url": "https://github.com/schungx/rhai/commit/00255a9b78f5a4e3e799b3fa280c34fcc6d59ac8"
        },
        "date": 1641870260713,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 370474,
            "range": "± 16760",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 160,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 152,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 255,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1484,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1494,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6884530,
            "range": "± 234608",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 511,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 544,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 21195,
            "range": "± 1896",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 19759,
            "range": "± 1585",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 24754,
            "range": "± 1808",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 563,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1070,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 80,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 80,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 79,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2005275,
            "range": "± 44211",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3593565,
            "range": "± 182715",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3083372,
            "range": "± 96396",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 21310,
            "range": "± 1195",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8189,
            "range": "± 413",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1939,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1985,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 451,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 483,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1192,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1157,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1107,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1616,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 658,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 654,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 374,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 443,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 589,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 565,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 404865,
            "range": "± 16495",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 495106,
            "range": "± 25685",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 495556,
            "range": "± 26561",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 18832098,
            "range": "± 314775",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4255,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 17593,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6944,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 22917,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 20660,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 48286,
            "range": "± 338",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3939,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 632,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1893473,
            "range": "± 715208",
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
          "id": "6416e406d3869ce9ba6d52db27303bdae75357c4",
          "message": "Remove unnamed profile feature.",
          "timestamp": "2022-01-11T11:34:15+08:00",
          "tree_id": "dea881b5bb3328729c0200385d141bc9bc64dcb5",
          "url": "https://github.com/schungx/rhai/commit/6416e406d3869ce9ba6d52db27303bdae75357c4"
        },
        "date": 1641872470749,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 364372,
            "range": "± 12660",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 160,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 148,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 261,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1510,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1505,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6891417,
            "range": "± 308092",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 519,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 550,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 20916,
            "range": "± 545",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 19442,
            "range": "± 613",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 24534,
            "range": "± 622",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 572,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1096,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 80,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 79,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 79,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2029283,
            "range": "± 58034",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3711235,
            "range": "± 46568",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3172151,
            "range": "± 56902",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 21459,
            "range": "± 694",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8269,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1931,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1956,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 449,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 487,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1195,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1207,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1138,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1644,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 646,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 646,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 355,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 454,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 601,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 554,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 406317,
            "range": "± 2476",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 497433,
            "range": "± 3193",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 501243,
            "range": "± 5624",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 18726037,
            "range": "± 256274",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4225,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 17659,
            "range": "± 435",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 7022,
            "range": "± 287",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 23050,
            "range": "± 1145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 20175,
            "range": "± 596",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 47537,
            "range": "± 773",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3919,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 626,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1816722,
            "range": "± 8905",
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
          "id": "77eb96bd7e1f8c5b6fa9e32d0cf8dfd7e44d02a7",
          "message": "Fix errors.",
          "timestamp": "2022-01-11T11:40:08+08:00",
          "tree_id": "fe8333e1cfca619ee780ad42ab0d70e340da9f04",
          "url": "https://github.com/schungx/rhai/commit/77eb96bd7e1f8c5b6fa9e32d0cf8dfd7e44d02a7"
        },
        "date": 1641873203975,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 323305,
            "range": "± 54151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 146,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 140,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 226,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1352,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1340,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6360652,
            "range": "± 701223",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 507,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 492,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 19053,
            "range": "± 3307",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 18941,
            "range": "± 2644",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 23194,
            "range": "± 3236",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 554,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 999,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 77,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 76,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 76,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1951275,
            "range": "± 145655",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3544691,
            "range": "± 207774",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3036271,
            "range": "± 187825",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 20410,
            "range": "± 1487",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7967,
            "range": "± 480",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1907,
            "range": "± 251",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1909,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 435,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 471,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1174,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1173,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1116,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1593,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 644,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 653,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 355,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 468,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 593,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 568,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 405565,
            "range": "± 10191",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 498626,
            "range": "± 29492",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 502496,
            "range": "± 13024",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 18665954,
            "range": "± 340379",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4160,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 17579,
            "range": "± 924",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 7007,
            "range": "± 302",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 23134,
            "range": "± 451",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 20417,
            "range": "± 1265",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 47226,
            "range": "± 2829",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3690,
            "range": "± 349",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 626,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1616281,
            "range": "± 222607",
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
          "id": "510c201d2f2d6747af0988694b83cc5ff7639857",
          "message": "Fix build.",
          "timestamp": "2022-01-13T21:01:56+08:00",
          "tree_id": "4df5c9cc301dc6091f28fc962016a624ce494bfc",
          "url": "https://github.com/schungx/rhai/commit/510c201d2f2d6747af0988694b83cc5ff7639857"
        },
        "date": 1642079246726,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 271671,
            "range": "± 2602",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 116,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 126,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 186,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1100,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1117,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5166283,
            "range": "± 10360",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 384,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 404,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15511,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14843,
            "range": "± 228",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 18549,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 424,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 773,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 58,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 58,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 58,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1490029,
            "range": "± 4620",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2738607,
            "range": "± 5715",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2324929,
            "range": "± 3474",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 16401,
            "range": "± 276",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 6185,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1441,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1502,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 329,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 386,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 923,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 922,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 845,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1233,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 472,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 475,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 262,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 337,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 440,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 415,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 295408,
            "range": "± 1081",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 363262,
            "range": "± 1458",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 396677,
            "range": "± 2506",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 14647598,
            "range": "± 20161",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3220,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13127,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5165,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 17010,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15235,
            "range": "± 281",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36371,
            "range": "± 344",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2902,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 463,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1343945,
            "range": "± 3718",
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
          "id": "e24848668a7adf619a631093a0e834e166bb5cb8",
          "message": "Fix build.",
          "timestamp": "2022-01-15T11:35:44+08:00",
          "tree_id": "86e68460b73748b99a7141e892dd874717efacc0",
          "url": "https://github.com/schungx/rhai/commit/e24848668a7adf619a631093a0e834e166bb5cb8"
        },
        "date": 1642218737389,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 301512,
            "range": "± 2897",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 135,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 126,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 212,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1138,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1133,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5883432,
            "range": "± 7985",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 386,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 403,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17448,
            "range": "± 203",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16500,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 21218,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 472,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 905,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 60,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 60,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 59,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1649620,
            "range": "± 5583",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3159143,
            "range": "± 21018",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2634129,
            "range": "± 8465",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 19171,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7208,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1567,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1623,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 330,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 371,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1135,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1110,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 962,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1423,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 567,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 575,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 295,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 400,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 507,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 492,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 342131,
            "range": "± 3307",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 415320,
            "range": "± 1020",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 419330,
            "range": "± 1484",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 17208931,
            "range": "± 27931",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3826,
            "range": "± 253",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14997,
            "range": "± 238",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6082,
            "range": "± 204",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19223,
            "range": "± 303",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16992,
            "range": "± 182",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 39241,
            "range": "± 391",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3262,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 540,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1544362,
            "range": "± 7377",
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
          "id": "146129279c7e325d1bbea0cedc5a657f25b0734a",
          "message": "Refine examples.",
          "timestamp": "2022-01-16T22:45:49+08:00",
          "tree_id": "17fcad8499ec9ab01f5217c8da8de8207cf048c9",
          "url": "https://github.com/schungx/rhai/commit/146129279c7e325d1bbea0cedc5a657f25b0734a"
        },
        "date": 1642344683713,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 311213,
            "range": "± 1913",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 136,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 129,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 216,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1224,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1229,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5814299,
            "range": "± 7912",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 395,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 420,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17481,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16360,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 20989,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 473,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 883,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 66,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 66,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 66,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1692997,
            "range": "± 1938",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3129981,
            "range": "± 5075",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2676156,
            "range": "± 3843",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 18419,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 6860,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1649,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1628,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 339,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 369,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1063,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1047,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 964,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1390,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 552,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 546,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 296,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 385,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 501,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 470,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 340808,
            "range": "± 1506",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 414649,
            "range": "± 810",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 416529,
            "range": "± 1493",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 16732760,
            "range": "± 14373",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3643,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15098,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5882,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19598,
            "range": "± 206",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17332,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 40778,
            "range": "± 570",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3324,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 543,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1519455,
            "range": "± 2827",
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
          "id": "24b68971a889edcbb95d7a827296db0f91e45ede",
          "message": "Fix offset calc.",
          "timestamp": "2022-01-16T22:54:28+08:00",
          "tree_id": "361d4d4a2c856c1a0d0c0afc3dddf0412edc27bb",
          "url": "https://github.com/schungx/rhai/commit/24b68971a889edcbb95d7a827296db0f91e45ede"
        },
        "date": 1642345320809,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 355821,
            "range": "± 54889",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 165,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 146,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 248,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1242,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1261,
            "range": "± 370",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6626915,
            "range": "± 570157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 423,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 485,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18852,
            "range": "± 1864",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17277,
            "range": "± 4677",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 21447,
            "range": "± 5281",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 503,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 931,
            "range": "± 360",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 74,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 75,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 68,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1999405,
            "range": "± 237837",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3542143,
            "range": "± 466879",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2975392,
            "range": "± 222999",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 19992,
            "range": "± 5867",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7869,
            "range": "± 2437",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1689,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1738,
            "range": "± 204",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 353,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 378,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1182,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1120,
            "range": "± 281",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1051,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1481,
            "range": "± 491",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 592,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 595,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 315,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 408,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 570,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 514,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 381570,
            "range": "± 51273",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 443706,
            "range": "± 74354",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 427236,
            "range": "± 123090",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 18473817,
            "range": "± 1948447",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3985,
            "range": "± 516",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15558,
            "range": "± 3468",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6341,
            "range": "± 628",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 21381,
            "range": "± 2755",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 18517,
            "range": "± 6226",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 43759,
            "range": "± 4384",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3500,
            "range": "± 829",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 600,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1702391,
            "range": "± 334357",
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
          "id": "57cfd6a35407c79c09a72a3229a5c9f8f0e5f7f8",
          "message": "Fix builds.",
          "timestamp": "2022-01-16T23:15:37+08:00",
          "tree_id": "3905267cc62d36eb6c4215fc5d236ed09bc80a40",
          "url": "https://github.com/schungx/rhai/commit/57cfd6a35407c79c09a72a3229a5c9f8f0e5f7f8"
        },
        "date": 1642346887065,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 276018,
            "range": "± 1857",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 127,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 116,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 196,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1082,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1077,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5130644,
            "range": "± 4764",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 351,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 372,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15437,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14596,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 18318,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 426,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 745,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 65,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 65,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 65,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1492957,
            "range": "± 2854",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2749812,
            "range": "± 2650",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2348828,
            "range": "± 2711",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 16161,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 6039,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1435,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1459,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 300,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 325,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 938,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 934,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 825,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1223,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 490,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 477,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 261,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 338,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 437,
            "range": "± 3",
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
            "value": 300606,
            "range": "± 1042",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 362334,
            "range": "± 963",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 364709,
            "range": "± 1778",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 14843045,
            "range": "± 94228",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3176,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13055,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5244,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 17046,
            "range": "± 209",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15151,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35560,
            "range": "± 245",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2936,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 469,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1340055,
            "range": "± 9207",
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
          "id": "573bfe46dd086d719959f46872b7182d7d7590e9",
          "message": "Fix formatting.",
          "timestamp": "2022-01-17T07:50:29+08:00",
          "tree_id": "72c7005cf89b578f0d342d652a759cc05bc47b73",
          "url": "https://github.com/schungx/rhai/commit/573bfe46dd086d719959f46872b7182d7d7590e9"
        },
        "date": 1642377790443,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 312613,
            "range": "± 66353",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 155,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 150,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 236,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1377,
            "range": "± 196",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1336,
            "range": "± 226",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6682642,
            "range": "± 1022145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 436,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 455,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18954,
            "range": "± 3131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 18468,
            "range": "± 4354",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 23182,
            "range": "± 3890",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 538,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1015,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 70,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 70,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 74,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1973210,
            "range": "± 358899",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3433531,
            "range": "± 851531",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3005221,
            "range": "± 627179",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 20477,
            "range": "± 3249",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7453,
            "range": "± 1398",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1669,
            "range": "± 345",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1736,
            "range": "± 346",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 373,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 396,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1165,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1217,
            "range": "± 267",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1071,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1555,
            "range": "± 381",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 624,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 595,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 325,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 425,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 573,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 505,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 380620,
            "range": "± 82816",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 455543,
            "range": "± 64191",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 454516,
            "range": "± 85271",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 18593404,
            "range": "± 2277064",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3975,
            "range": "± 843",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 16918,
            "range": "± 4187",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6227,
            "range": "± 961",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 21282,
            "range": "± 4439",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 19301,
            "range": "± 3956",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 48066,
            "range": "± 10238",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4036,
            "range": "± 320",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 694,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1951335,
            "range": "± 138001",
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
          "id": "b63b4cb3af921019c11d3e01a023ff1e0a2e85ad",
          "message": "Format example scripts better.",
          "timestamp": "2022-01-20T12:06:36+08:00",
          "tree_id": "f43d45fc1f1c7e1cfd8a7f56cbc0db2fb4d6256c",
          "url": "https://github.com/schungx/rhai/commit/b63b4cb3af921019c11d3e01a023ff1e0a2e85ad"
        },
        "date": 1642843318211,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 371427,
            "range": "± 60284",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 161,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 167,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 267,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1510,
            "range": "± 417",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1545,
            "range": "± 309",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8294023,
            "range": "± 1353820",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 485,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 540,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 22013,
            "range": "± 5424",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 19846,
            "range": "± 4591",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 25323,
            "range": "± 5882",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 604,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1179,
            "range": "± 324",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 81,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 81,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 81,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2245728,
            "range": "± 291891",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4049841,
            "range": "± 1009865",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3388518,
            "range": "± 576912",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 23984,
            "range": "± 4858",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9043,
            "range": "± 1652",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1878,
            "range": "± 309",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1948,
            "range": "± 348",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 435,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 452,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1354,
            "range": "± 547",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1323,
            "range": "± 284",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1287,
            "range": "± 326",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1807,
            "range": "± 318",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 694,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 692,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 361,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 474,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 622,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 652,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 424539,
            "range": "± 71601",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 534494,
            "range": "± 120180",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 524461,
            "range": "± 112492",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21277906,
            "range": "± 3054376",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4494,
            "range": "± 760",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 18285,
            "range": "± 4356",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 7201,
            "range": "± 1529",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 24758,
            "range": "± 9842",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 20703,
            "range": "± 4021",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 47615,
            "range": "± 11767",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3989,
            "range": "± 1137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 697,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1908221,
            "range": "± 255862",
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
          "id": "97be256a1a561ffc738c120239fd8a766ca0b7bf",
          "message": "Fix bug with optimizing op-assignment operators.",
          "timestamp": "2022-01-23T21:09:37+08:00",
          "tree_id": "c4171b519ab7e64db3663317ee1e241d6b464574",
          "url": "https://github.com/schungx/rhai/commit/97be256a1a561ffc738c120239fd8a766ca0b7bf"
        },
        "date": 1642943980520,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 376942,
            "range": "± 83409",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 176,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 186,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 294,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1532,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1570,
            "range": "± 291",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8657806,
            "range": "± 667661",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 524,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 564,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 21163,
            "range": "± 4386",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 21056,
            "range": "± 2445",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 26333,
            "range": "± 2675",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 651,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1186,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 79,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 84,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 85,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2300844,
            "range": "± 330911",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4184285,
            "range": "± 389663",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3473397,
            "range": "± 539215",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 23977,
            "range": "± 4706",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8847,
            "range": "± 1443",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2022,
            "range": "± 224",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2092,
            "range": "± 266",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 441,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 476,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1344,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1438,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1273,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1853,
            "range": "± 322",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 755,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 694,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 384,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 491,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 620,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 670,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 445743,
            "range": "± 52916",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 534921,
            "range": "± 79406",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 542571,
            "range": "± 60712",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22145672,
            "range": "± 1987205",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4648,
            "range": "± 644",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 18888,
            "range": "± 3207",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 7626,
            "range": "± 1564",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 24978,
            "range": "± 4822",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 22031,
            "range": "± 3465",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 50507,
            "range": "± 6402",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4144,
            "range": "± 592",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 724,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2023714,
            "range": "± 236620",
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
          "id": "8d34ffb9f571e43bd220b93eb3738a7cc0188319",
          "message": "Fix bug in try block.",
          "timestamp": "2022-01-24T08:34:21+08:00",
          "tree_id": "d7842783b43f7b2fce97a95275e30f47461ba42e",
          "url": "https://github.com/schungx/rhai/commit/8d34ffb9f571e43bd220b93eb3738a7cc0188319"
        },
        "date": 1642985691820,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 347575,
            "range": "± 56603",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 162,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 157,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 275,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1377,
            "range": "± 221",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1433,
            "range": "± 284",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7831528,
            "range": "± 1543602",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 481,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 502,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 20203,
            "range": "± 3307",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 19080,
            "range": "± 3424",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 24437,
            "range": "± 5157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 598,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1103,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 82,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 81,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 77,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2173669,
            "range": "± 732512",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3836426,
            "range": "± 1263705",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3182180,
            "range": "± 1188614",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 22917,
            "range": "± 6205",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8517,
            "range": "± 2630",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1732,
            "range": "± 453",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1850,
            "range": "± 835",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 387,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 453,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1225,
            "range": "± 342",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1360,
            "range": "± 633",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1088,
            "range": "± 523",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1628,
            "range": "± 335",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 649,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 659,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 344,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 437,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 557,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 620,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 409518,
            "range": "± 64495",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 461898,
            "range": "± 51372",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 471007,
            "range": "± 68077",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19409328,
            "range": "± 2514100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3975,
            "range": "± 460",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 17305,
            "range": "± 6347",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6790,
            "range": "± 1046",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 21703,
            "range": "± 3089",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 18953,
            "range": "± 2451",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 41955,
            "range": "± 6107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3781,
            "range": "± 447",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 653,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1757867,
            "range": "± 283195",
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
          "id": "b76a2be7c37dc00dca3e5be934bb2b31702dd663",
          "message": "Fix unchecked build.",
          "timestamp": "2022-01-24T08:49:41+08:00",
          "tree_id": "795981c81ba95cdef9b2484a8a79248626e846a9",
          "url": "https://github.com/schungx/rhai/commit/b76a2be7c37dc00dca3e5be934bb2b31702dd663"
        },
        "date": 1642986384910,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 334390,
            "range": "± 58639",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 148,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 152,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 239,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1344,
            "range": "± 253",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1351,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7475838,
            "range": "± 1872915",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 447,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 461,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17876,
            "range": "± 2679",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17437,
            "range": "± 3908",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 23144,
            "range": "± 3709",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 520,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 954,
            "range": "± 191",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 76,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 73,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 73,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1931965,
            "range": "± 387803",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3499617,
            "range": "± 738561",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2958379,
            "range": "± 526631",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 19890,
            "range": "± 4602",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7514,
            "range": "± 1540",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1611,
            "range": "± 318",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1748,
            "range": "± 346",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 371,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 395,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1155,
            "range": "± 184",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1183,
            "range": "± 222",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1042,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1569,
            "range": "± 253",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 630,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 615,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 328,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 479,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 556,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 652,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 389855,
            "range": "± 94290",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 507097,
            "range": "± 65345",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 507924,
            "range": "± 78295",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21044356,
            "range": "± 2094317",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4346,
            "range": "± 562",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 17735,
            "range": "± 2316",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6840,
            "range": "± 930",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 23588,
            "range": "± 5531",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 18727,
            "range": "± 3133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 45369,
            "range": "± 5119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3528,
            "range": "± 519",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 621,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1822061,
            "range": "± 381197",
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
          "id": "c463b8ce95bb0886bc716a8120a069620de6346b",
          "message": "Add debugging interface.",
          "timestamp": "2022-01-24T17:04:40+08:00",
          "tree_id": "8e380d20ea96078fe51564414f488da132db25d7",
          "url": "https://github.com/schungx/rhai/commit/c463b8ce95bb0886bc716a8120a069620de6346b"
        },
        "date": 1643015833985,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 389037,
            "range": "± 181188",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 172,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 158,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 271,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1570,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1592,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8063149,
            "range": "± 12835",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 528,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 592,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 21927,
            "range": "± 228",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 20340,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 25558,
            "range": "± 236",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 603,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1120,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 90,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 90,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 90,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2156914,
            "range": "± 2536",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3853427,
            "range": "± 4071",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3285847,
            "range": "± 4971",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 22961,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8967,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2661,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2707,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 532,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 572,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1261,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1240,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1158,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1681,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 693,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 671,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 371,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 491,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 627,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 657,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 423864,
            "range": "± 1451",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 516775,
            "range": "± 1875",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 517746,
            "range": "± 2424",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 20183760,
            "range": "± 117749",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4433,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 18171,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 7233,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 23986,
            "range": "± 230",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 20972,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 48405,
            "range": "± 621",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4126,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 653,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1960176,
            "range": "± 2643",
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
          "id": "7e0f88f1bec580884340a141771731ae0fe39489",
          "message": "Refine debugger.",
          "timestamp": "2022-01-25T12:24:30+08:00",
          "tree_id": "dd31760235dc567a512fc5dac7340ace42138a48",
          "url": "https://github.com/schungx/rhai/commit/7e0f88f1bec580884340a141771731ae0fe39489"
        },
        "date": 1643085065629,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 309617,
            "range": "± 2023",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 129,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 126,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 213,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1223,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1225,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6418054,
            "range": "± 9870",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 413,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 446,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16958,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16322,
            "range": "± 171",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 20465,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 480,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 902,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 73,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 73,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 73,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1709644,
            "range": "± 5629",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3117096,
            "range": "± 6005",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2661352,
            "range": "± 4187",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 18958,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7119,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2127,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2169,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 428,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 460,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1071,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1045,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 954,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1389,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 545,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 549,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 300,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 394,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 504,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 533,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 345167,
            "range": "± 1428",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 412693,
            "range": "± 1665",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 415333,
            "range": "± 1016",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 17173842,
            "range": "± 87216",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3568,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14686,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5780,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19053,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16887,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 38575,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3172,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 520,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1554835,
            "range": "± 3166",
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
          "id": "b18a549ee7e676d99aea2a856e94f575fdb25e58",
          "message": "Add breaking at line.",
          "timestamp": "2022-01-25T17:29:34+08:00",
          "tree_id": "dd0fd5cfe231b49951b3baa16a9a602536960a11",
          "url": "https://github.com/schungx/rhai/commit/b18a549ee7e676d99aea2a856e94f575fdb25e58"
        },
        "date": 1643103812643,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 315019,
            "range": "± 3010",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 131,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 131,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 213,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1321,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1239,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6427792,
            "range": "± 12569",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 422,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 448,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17034,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15998,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 20374,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 466,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 911,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 73,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 73,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 73,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1698083,
            "range": "± 2925",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3101121,
            "range": "± 4526",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2643515,
            "range": "± 6026",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 19052,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7094,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2126,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2138,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 428,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 457,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1078,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1056,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 927,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1407,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 546,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 548,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 300,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 385,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 497,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 523,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 345844,
            "range": "± 685",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 418190,
            "range": "± 1905",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 419580,
            "range": "± 1468",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 17129691,
            "range": "± 64185",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3568,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14515,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5743,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19155,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16686,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 38538,
            "range": "± 517",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3306,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 537,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1541724,
            "range": "± 3378",
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
          "id": "b344326b8714a00bf72e08e97d4abda61c0b0cc4",
          "message": "Add ability for debugger to throw errors.",
          "timestamp": "2022-01-25T21:31:35+08:00",
          "tree_id": "c642108701ce1f9a11dce579d19cce265dcac06c",
          "url": "https://github.com/schungx/rhai/commit/b344326b8714a00bf72e08e97d4abda61c0b0cc4"
        },
        "date": 1643118294257,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 301441,
            "range": "± 7625",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 131,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 123,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 207,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1241,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1200,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6545791,
            "range": "± 17444",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 411,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 428,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16705,
            "range": "± 205",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16003,
            "range": "± 285",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 20855,
            "range": "± 244",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 499,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 874,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 67,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 67,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 67,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1588594,
            "range": "± 9384",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3099789,
            "range": "± 13967",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2599160,
            "range": "± 16900",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 19461,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7451,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2118,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2201,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 443,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 481,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1140,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1147,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 997,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1424,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 579,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 562,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 300,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 394,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 502,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 564,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 339333,
            "range": "± 1818",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 420643,
            "range": "± 1585",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 424403,
            "range": "± 1142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 17038515,
            "range": "± 158263",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3475,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14517,
            "range": "± 279",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6019,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18457,
            "range": "± 229",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16330,
            "range": "± 237",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36525,
            "range": "± 294",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3190,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 540,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1611103,
            "range": "± 3117",
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
          "id": "5ca6bb6b380bce2e5182a227dda7bcd0ffb75766",
          "message": "Fix builds.",
          "timestamp": "2022-01-27T08:23:30+08:00",
          "tree_id": "f79cecdea1b164408c327082feadaf4153ac3089",
          "url": "https://github.com/schungx/rhai/commit/5ca6bb6b380bce2e5182a227dda7bcd0ffb75766"
        },
        "date": 1643243890893,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 367948,
            "range": "± 34038",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 157,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 160,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 268,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1422,
            "range": "± 290",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1428,
            "range": "± 268",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8154294,
            "range": "± 1135284",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 504,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 544,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 21616,
            "range": "± 2345",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 18464,
            "range": "± 3127",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 25273,
            "range": "± 4566",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 528,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1103,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 89,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 88,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 85,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1869499,
            "range": "± 643744",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3457762,
            "range": "± 930310",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2964899,
            "range": "± 770975",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 20332,
            "range": "± 5511",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7847,
            "range": "± 2353",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2143,
            "range": "± 634",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2273,
            "range": "± 691",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 518,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 551,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1295,
            "range": "± 263",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1330,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1056,
            "range": "± 309",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1614,
            "range": "± 416",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 640,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 634,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 307,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 469,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 586,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 580,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 408707,
            "range": "± 85139",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 481275,
            "range": "± 104482",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 534248,
            "range": "± 75137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19253952,
            "range": "± 5742517",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3890,
            "range": "± 1088",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 17914,
            "range": "± 4159",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6394,
            "range": "± 1504",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20761,
            "range": "± 5059",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 20698,
            "range": "± 1151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 41290,
            "range": "± 10460",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3435,
            "range": "± 954",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 573,
            "range": "± 171",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1859387,
            "range": "± 621435",
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
          "id": "2b3e3ee3f5082e8577ff80e70a48675dec332466",
          "message": "Revert \"Delete benchmark.yml\"\n\nThis reverts commit d18bb041a07866ac866837c9d370d81b20d7126a.",
          "timestamp": "2022-01-27T12:54:29+08:00",
          "tree_id": "6a1487dc6b786714161197be9008b2b1d5b8fb3a",
          "url": "https://github.com/schungx/rhai/commit/2b3e3ee3f5082e8577ff80e70a48675dec332466"
        },
        "date": 1643259876024,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 376952,
            "range": "± 114021",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 157,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 157,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 256,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1448,
            "range": "± 447",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1439,
            "range": "± 267",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8035266,
            "range": "± 731418",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 473,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 511,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 21723,
            "range": "± 4345",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 20050,
            "range": "± 5701",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 25165,
            "range": "± 2685",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 585,
            "range": "± 265",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1059,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 85,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 84,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 84,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2093271,
            "range": "± 280064",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3825175,
            "range": "± 630983",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3198166,
            "range": "± 282632",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 21225,
            "range": "± 3312",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8444,
            "range": "± 1034",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1928,
            "range": "± 392",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1937,
            "range": "± 369",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 417,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 445,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1203,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1221,
            "range": "± 340",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1153,
            "range": "± 209",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1678,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 666,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 681,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 360,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 457,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 602,
            "range": "± 259",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 632,
            "range": "± 306",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 410172,
            "range": "± 50596",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 501213,
            "range": "± 61646",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 503743,
            "range": "± 113217",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19613059,
            "range": "± 1575507",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4340,
            "range": "± 677",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 17834,
            "range": "± 1443",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 7070,
            "range": "± 941",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 23429,
            "range": "± 3967",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 20937,
            "range": "± 3889",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 48305,
            "range": "± 7344",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4015,
            "range": "± 661",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 656,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1809676,
            "range": "± 303513",
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
          "id": "3fe92f1c6ed00a545853da8484b46c89f41d1151",
          "message": "Fix builds.",
          "timestamp": "2022-01-27T14:03:01+08:00",
          "tree_id": "2cb33bcc195da4f6d9d432f2109e491dd00884c8",
          "url": "https://github.com/schungx/rhai/commit/3fe92f1c6ed00a545853da8484b46c89f41d1151"
        },
        "date": 1643264120825,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 313288,
            "range": "± 2025",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 131,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 126,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 209,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1252,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1246,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6442738,
            "range": "± 10563",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 446,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 439,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17510,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16616,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 21147,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 492,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 908,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 72,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 72,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 73,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1702699,
            "range": "± 2873",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3105462,
            "range": "± 6734",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2632115,
            "range": "± 43968",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 18992,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7168,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2108,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2158,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 427,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 460,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1072,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1038,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 958,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1383,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 547,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 570,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 300,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 387,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 507,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 530,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 342943,
            "range": "± 1187",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 414874,
            "range": "± 1203",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 415999,
            "range": "± 2174",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 17059870,
            "range": "± 99061",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3603,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14959,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5845,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19255,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17175,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 39634,
            "range": "± 347",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3351,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 535,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1546614,
            "range": "± 3612",
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
          "id": "c859dbc67cda3fdf79a4fb88da84adfa9c36ee0c",
          "message": "Fix no-std builds.",
          "timestamp": "2022-01-27T15:03:50+08:00",
          "tree_id": "5c89ccde437b9dcc89baa18a4b4f4a0e2c7dc588",
          "url": "https://github.com/schungx/rhai/commit/c859dbc67cda3fdf79a4fb88da84adfa9c36ee0c"
        },
        "date": 1643267612562,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 353290,
            "range": "± 21896",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 143,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 143,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 236,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1270,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1294,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6956092,
            "range": "± 506730",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 429,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 471,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 19392,
            "range": "± 1718",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 18267,
            "range": "± 1440",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 23214,
            "range": "± 1977",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 519,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 931,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 76,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 76,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 79,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1889179,
            "range": "± 173989",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3403902,
            "range": "± 395966",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2861911,
            "range": "± 256371",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 19116,
            "range": "± 1918",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7511,
            "range": "± 738",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1673,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1749,
            "range": "± 231",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 363,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 400,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1074,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1095,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1045,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1508,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 592,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 633,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 335,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 416,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 565,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 575,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 386359,
            "range": "± 40630",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 462413,
            "range": "± 52191",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 448292,
            "range": "± 45228",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 16987075,
            "range": "± 1472234",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3754,
            "range": "± 318",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 16195,
            "range": "± 1752",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6134,
            "range": "± 481",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20505,
            "range": "± 1838",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 18393,
            "range": "± 1659",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 42634,
            "range": "± 3347",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3554,
            "range": "± 417",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 572,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1627559,
            "range": "± 171462",
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
          "id": "ad9dfb9efb042fa98c9270c0a9ed7a41ea7def53",
          "message": "Fix builds.",
          "timestamp": "2022-01-27T15:25:41+08:00",
          "tree_id": "fcd016e3d4a3de8b04a6fa9200f21970cebb5597",
          "url": "https://github.com/schungx/rhai/commit/ad9dfb9efb042fa98c9270c0a9ed7a41ea7def53"
        },
        "date": 1643268921440,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 366128,
            "range": "± 46790",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 142,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 145,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 247,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1405,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1441,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7456959,
            "range": "± 528813",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 479,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 503,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 21048,
            "range": "± 1223",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 18785,
            "range": "± 964",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 23707,
            "range": "± 2635",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 544,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1003,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 82,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 80,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 82,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1991260,
            "range": "± 201941",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3595468,
            "range": "± 229022",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3030039,
            "range": "± 177137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 21305,
            "range": "± 2248",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8231,
            "range": "± 796",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2407,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2493,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 500,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 527,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1177,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1159,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1084,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1602,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 622,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 638,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 332,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 440,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 576,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 608,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 392227,
            "range": "± 32853",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 477321,
            "range": "± 38120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 488551,
            "range": "± 26215",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 18120545,
            "range": "± 1454383",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4038,
            "range": "± 285",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 16295,
            "range": "± 1239",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6419,
            "range": "± 619",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 22631,
            "range": "± 2033",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 18320,
            "range": "± 1923",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 42398,
            "range": "± 3866",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3630,
            "range": "± 389",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 588,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1778990,
            "range": "± 138211",
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
          "id": "182870c9edeab0b9ae6fc7eb43221d48a216448f",
          "message": "Add main branch to CI.",
          "timestamp": "2022-01-27T16:57:47+08:00",
          "tree_id": "1afcea6995a41080e3f8e3707123b0d6c20385d1",
          "url": "https://github.com/schungx/rhai/commit/182870c9edeab0b9ae6fc7eb43221d48a216448f"
        },
        "date": 1643274206406,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 280888,
            "range": "± 3691",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 117,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 112,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 185,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1025,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1034,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5678891,
            "range": "± 34382",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 346,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 390,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15322,
            "range": "± 202",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14389,
            "range": "± 328",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 18414,
            "range": "± 343",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 415,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 755,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 61,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 61,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 62,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1520206,
            "range": "± 7494",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2752529,
            "range": "± 125714",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2321494,
            "range": "± 11150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 16215,
            "range": "± 257",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 6073,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1384,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1413,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 300,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 322,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 930,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 951,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 836,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1218,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 493,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 499,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 264,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 340,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 436,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 465,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 301433,
            "range": "± 12065",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 366023,
            "range": "± 5829",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 365161,
            "range": "± 13358",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 14945292,
            "range": "± 3263214",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3228,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13602,
            "range": "± 1142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5166,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 17262,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15410,
            "range": "± 786",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34868,
            "range": "± 479",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2953,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 481,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1333834,
            "range": "± 9268",
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
          "id": "64de20bcd35c39081e0496129269183da75fed7a",
          "message": "Remove warnings.",
          "timestamp": "2022-01-27T16:58:11+08:00",
          "tree_id": "aa00c763098c1611d7af7dab44aee19ca1dee0b0",
          "url": "https://github.com/schungx/rhai/commit/64de20bcd35c39081e0496129269183da75fed7a"
        },
        "date": 1643274983126,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 319037,
            "range": "± 1962",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 133,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 127,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 214,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1294,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1238,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6460682,
            "range": "± 5383",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 445,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 440,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17549,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16426,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 21080,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 494,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 929,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 72,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 73,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 73,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1703916,
            "range": "± 1439",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3112131,
            "range": "± 10355",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2630878,
            "range": "± 4105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 19085,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7191,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2107,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2203,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 427,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 460,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1075,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1054,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 958,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1348,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 561,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 561,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 300,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 386,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 499,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 542,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 343452,
            "range": "± 966",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 415252,
            "range": "± 2362",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 417182,
            "range": "± 1474",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 17297640,
            "range": "± 328434",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3613,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14906,
            "range": "± 327",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5725,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19341,
            "range": "± 171",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17109,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 38736,
            "range": "± 329",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3259,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 528,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1543774,
            "range": "± 3868",
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
          "id": "cd4335a16ff56ff7dcfea56100bd21320c3de809",
          "message": "Fix builds.",
          "timestamp": "2022-01-28T22:11:22+08:00",
          "tree_id": "5b59bce6c14d4068c508045aa86bb932f9644465",
          "url": "https://github.com/schungx/rhai/commit/cd4335a16ff56ff7dcfea56100bd21320c3de809"
        },
        "date": 1643379532936,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 361594,
            "range": "± 119183",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 172,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 169,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 273,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1396,
            "range": "± 287",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1428,
            "range": "± 352",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8777625,
            "range": "± 956275",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 486,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 525,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 20718,
            "range": "± 8668",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 19459,
            "range": "± 3599",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 25214,
            "range": "± 5588",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 560,
            "range": "± 406",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1090,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 84,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 84,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 84,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2172176,
            "range": "± 195034",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3942747,
            "range": "± 648714",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3367454,
            "range": "± 1064815",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 22998,
            "range": "± 5231",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8572,
            "range": "± 2546",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2503,
            "range": "± 687",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2577,
            "range": "± 1479",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 510,
            "range": "± 629",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 541,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1270,
            "range": "± 290",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1250,
            "range": "± 287",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1165,
            "range": "± 416",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1627,
            "range": "± 246",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 650,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 659,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 354,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 447,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 594,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 614,
            "range": "± 219",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 422836,
            "range": "± 130419",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 519520,
            "range": "± 260061",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 519940,
            "range": "± 128713",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21033597,
            "range": "± 1266925",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4407,
            "range": "± 958",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 17380,
            "range": "± 3076",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6914,
            "range": "± 1215",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 23018,
            "range": "± 8100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 20383,
            "range": "± 5910",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 47852,
            "range": "± 3803",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3909,
            "range": "± 790",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 639,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1988492,
            "range": "± 111569",
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
          "id": "6b02dde848ca7ff6e1d9fc7528c6c5eddbd22537",
          "message": "Gate dead code for no_module.",
          "timestamp": "2022-01-29T11:09:43+08:00",
          "tree_id": "fcc04877a6b8fd948c9e9fd5110e8aaaeca0ab6e",
          "url": "https://github.com/schungx/rhai/commit/6b02dde848ca7ff6e1d9fc7528c6c5eddbd22537"
        },
        "date": 1643426624685,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 345564,
            "range": "± 53848",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 164,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 151,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 258,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1324,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1349,
            "range": "± 223",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7616826,
            "range": "± 999227",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 466,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 499,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 19469,
            "range": "± 2716",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17795,
            "range": "± 1989",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 22217,
            "range": "± 2962",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 516,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 928,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 81,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 80,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 82,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1880654,
            "range": "± 279438",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3557106,
            "range": "± 397555",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2959140,
            "range": "± 325970",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 20058,
            "range": "± 2903",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8036,
            "range": "± 845",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2470,
            "range": "± 780",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2562,
            "range": "± 347",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 491,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 584,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1104,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1065,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1066,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1440,
            "range": "± 215",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 585,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 616,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 339,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 423,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 551,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 575,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 381126,
            "range": "± 70496",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 498941,
            "range": "± 39218",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 493330,
            "range": "± 40426",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 17366127,
            "range": "± 2506476",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4079,
            "range": "± 370",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 16436,
            "range": "± 2266",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6185,
            "range": "± 929",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 22933,
            "range": "± 3413",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 18612,
            "range": "± 3012",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 42422,
            "range": "± 6228",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3463,
            "range": "± 491",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 591,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1713240,
            "range": "± 249268",
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
          "id": "06214cf499ff7a99d4ec4da17d16e8bce9d5de2d",
          "message": "Add key bindings to repl.",
          "timestamp": "2022-01-30T09:42:04+08:00",
          "tree_id": "49b8e2ae33e3a93c83c00b6827a9ca56e5a9a39e",
          "url": "https://github.com/schungx/rhai/commit/06214cf499ff7a99d4ec4da17d16e8bce9d5de2d"
        },
        "date": 1643511550657,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 321224,
            "range": "± 1845",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 142,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 135,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 221,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1201,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1226,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6508012,
            "range": "± 5353",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 416,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 445,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17751,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16426,
            "range": "± 295",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 20875,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 472,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 886,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 73,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 73,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 73,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1736273,
            "range": "± 5820",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3446506,
            "range": "± 5468",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2654765,
            "range": "± 3236",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 18996,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7193,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2156,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2201,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 430,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 481,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1046,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1003,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 944,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1342,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 546,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 546,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 294,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 371,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 496,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 520,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 338924,
            "range": "± 1487",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 416495,
            "range": "± 709",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 418325,
            "range": "± 2102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 16990290,
            "range": "± 80583",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3598,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14865,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5737,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19331,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17191,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 38376,
            "range": "± 215",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3328,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 528,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1544350,
            "range": "± 1652",
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
          "id": "8fc80ecd107a40cdfecffcdc881043a7ebfec71d",
          "message": "Fix formatting.",
          "timestamp": "2022-01-30T11:21:45+08:00",
          "tree_id": "628f881d28e73e90c916d40131aa2128c5301523",
          "url": "https://github.com/schungx/rhai/commit/8fc80ecd107a40cdfecffcdc881043a7ebfec71d"
        },
        "date": 1643513790928,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 345523,
            "range": "± 49973",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 177,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 164,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 269,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1436,
            "range": "± 206",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1396,
            "range": "± 191",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7528661,
            "range": "± 1033366",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 505,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 525,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 21164,
            "range": "± 4217",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 20105,
            "range": "± 4164",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 25798,
            "range": "± 4262",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 562,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1114,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 80,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 80,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2079760,
            "range": "± 344687",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4001855,
            "range": "± 818723",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3278194,
            "range": "± 424856",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 22107,
            "range": "± 5555",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8279,
            "range": "± 1038",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2343,
            "range": "± 372",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2601,
            "range": "± 318",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 483,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 543,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1296,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1217,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1163,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1628,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 672,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 644,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 354,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 457,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 575,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 582,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 388882,
            "range": "± 39283",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 487938,
            "range": "± 57318",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 476472,
            "range": "± 54500",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19965126,
            "range": "± 2741472",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4256,
            "range": "± 444",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 18145,
            "range": "± 2656",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6537,
            "range": "± 892",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 23241,
            "range": "± 3560",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 18851,
            "range": "± 2303",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 45952,
            "range": "± 5616",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3942,
            "range": "± 436",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 615,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1832219,
            "range": "± 355224",
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
          "id": "7b92a80c32a68b52000a7745ac0e278d8eca6d6d",
          "message": "Fix encapsulated environment in module functions.",
          "timestamp": "2022-01-30T17:27:13+08:00",
          "tree_id": "be6169fcfc05ed3787f3f713828c6ddca2179f05",
          "url": "https://github.com/schungx/rhai/commit/7b92a80c32a68b52000a7745ac0e278d8eca6d6d"
        },
        "date": 1643535592879,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 374702,
            "range": "± 41595",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 184,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 179,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 289,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1485,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1521,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8289076,
            "range": "± 692967",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 520,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 557,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 21363,
            "range": "± 1583",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 19800,
            "range": "± 1210",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 25664,
            "range": "± 2676",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 595,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1118,
            "range": "± 370",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 91,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 89,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 88,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2275232,
            "range": "± 386894",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4088118,
            "range": "± 273423",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3475294,
            "range": "± 109243",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 23857,
            "range": "± 1464",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9120,
            "range": "± 296",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2557,
            "range": "± 184",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2627,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 525,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 565,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1346,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1332,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1195,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1769,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 701,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 695,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 374,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 480,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 623,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 644,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 439286,
            "range": "± 12124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 526563,
            "range": "± 34720",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 539593,
            "range": "± 112832",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21654382,
            "range": "± 599716",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4717,
            "range": "± 256",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 18270,
            "range": "± 1083",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 7215,
            "range": "± 646",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 23612,
            "range": "± 1658",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 21063,
            "range": "± 2095",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 47202,
            "range": "± 2679",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4062,
            "range": "± 204",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 715,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1988928,
            "range": "± 71500",
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
          "id": "f1458e79e0db3f588fa844dc7bca47a45e6c09f5",
          "message": "Improve AST debug display.",
          "timestamp": "2022-01-31T13:38:27+08:00",
          "tree_id": "8c3d277cea7ef6fc632df097c0c628b35cd01eb5",
          "url": "https://github.com/schungx/rhai/commit/f1458e79e0db3f588fa844dc7bca47a45e6c09f5"
        },
        "date": 1643608316330,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 358186,
            "range": "± 51106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 170,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 166,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 262,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1498,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1426,
            "range": "± 202",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7996871,
            "range": "± 730818",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 503,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 544,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 21456,
            "range": "± 5126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 19957,
            "range": "± 3163",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 27359,
            "range": "± 3722",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 597,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1117,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 89,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 90,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 93,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2209146,
            "range": "± 259162",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4142320,
            "range": "± 450263",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3472546,
            "range": "± 562751",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 23890,
            "range": "± 3088",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8832,
            "range": "± 852",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2363,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2422,
            "range": "± 269",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 489,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 526,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1267,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1248,
            "range": "± 274",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1124,
            "range": "± 224",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1546,
            "range": "± 320",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 655,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 630,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 354,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 451,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 592,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 603,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 406323,
            "range": "± 98229",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 506225,
            "range": "± 48005",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 503651,
            "range": "± 49165",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 20252498,
            "range": "± 1657274",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4326,
            "range": "± 836",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 18148,
            "range": "± 5747",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 7150,
            "range": "± 1990",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 26230,
            "range": "± 11108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 20368,
            "range": "± 4714",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 44676,
            "range": "± 5688",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3969,
            "range": "± 1147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 627,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1913205,
            "range": "± 327892",
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
          "id": "7163a7331a3feca1bf12a5f1cb552ca4799027d6",
          "message": "Add commands and status to debugging interface.",
          "timestamp": "2022-02-01T22:30:05+08:00",
          "tree_id": "9c40243f48f4dd4f1959909fc58165fc7c001da5",
          "url": "https://github.com/schungx/rhai/commit/7163a7331a3feca1bf12a5f1cb552ca4799027d6"
        },
        "date": 1643726732742,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 316999,
            "range": "± 1698",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 140,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 134,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 222,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1222,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1232,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6486808,
            "range": "± 5120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 411,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 449,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17456,
            "range": "± 487",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16367,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 21195,
            "range": "± 196",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 466,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 856,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 73,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 73,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 73,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1711164,
            "range": "± 4728",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3132125,
            "range": "± 2319",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2687528,
            "range": "± 2463",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 18813,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7137,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2074,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2136,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 431,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 478,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1047,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1042,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 920,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1322,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 547,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 531,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 294,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 367,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 495,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 517,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 346225,
            "range": "± 854",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 416741,
            "range": "± 880",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 416160,
            "range": "± 3310",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 16955963,
            "range": "± 119601",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3746,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15203,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5979,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19990,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17688,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 39349,
            "range": "± 227",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3336,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 544,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1566837,
            "range": "± 2037",
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
          "id": "339136901d70e46db7a0098d01bf055f33479f7d",
          "message": "Benchmark with features turned on.",
          "timestamp": "2022-02-02T14:47:46+08:00",
          "tree_id": "8eee49691bf32e6c4a5fb51cd063597b6f80b6e5",
          "url": "https://github.com/schungx/rhai/commit/339136901d70e46db7a0098d01bf055f33479f7d"
        },
        "date": 1643785119651,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 771404,
            "range": "± 97744",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 138,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 132,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 687,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1268,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1317,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6817429,
            "range": "± 17126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 468,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 496,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18127,
            "range": "± 221",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17840,
            "range": "± 255",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 23464,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 530,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 952,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 92,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 92,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 92,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1762719,
            "range": "± 6345",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3335909,
            "range": "± 5059",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2830049,
            "range": "± 9748",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 20807,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7731,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2191,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2271,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 469,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 518,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1175,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1158,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 983,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1433,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 573,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 584,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 342,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 441,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 569,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 588,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 362024,
            "range": "± 1440",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 464229,
            "range": "± 6553",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 465759,
            "range": "± 2242",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 18549227,
            "range": "± 62544",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3834,
            "range": "± 227",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15680,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6015,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19724,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17550,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 39404,
            "range": "± 363",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3379,
            "range": "± 231",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 608,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1665939,
            "range": "± 10752",
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
          "id": "e0ed713bb6aa0e8bbb387f1f2e708b7203314ab7",
          "message": "Fix builds.",
          "timestamp": "2022-02-02T14:57:30+08:00",
          "tree_id": "1cf9fa1333bfd8f235761e660f92c8e4f2099e5a",
          "url": "https://github.com/schungx/rhai/commit/e0ed713bb6aa0e8bbb387f1f2e708b7203314ab7"
        },
        "date": 1643785667081,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 850250,
            "range": "± 205202",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 165,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 150,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 743,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1380,
            "range": "± 269",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1422,
            "range": "± 352",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7091552,
            "range": "± 1243545",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 469,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 487,
            "range": "± 208",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 20501,
            "range": "± 4243",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 19643,
            "range": "± 3963",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 25396,
            "range": "± 5288",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 553,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 923,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 97,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 100,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 98,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1900970,
            "range": "± 369313",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3401267,
            "range": "± 598739",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2983724,
            "range": "± 352287",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 23203,
            "range": "± 5903",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8683,
            "range": "± 1658",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2469,
            "range": "± 899",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2534,
            "range": "± 760",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 514,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 537,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1359,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1207,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1228,
            "range": "± 272",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1685,
            "range": "± 270",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 589,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 605,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 360,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 456,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 607,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 662,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 404220,
            "range": "± 64684",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 518445,
            "range": "± 84591",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 517694,
            "range": "± 92061",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21296643,
            "range": "± 5357102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4137,
            "range": "± 831",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15283,
            "range": "± 5312",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5951,
            "range": "± 1025",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20470,
            "range": "± 3526",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 18305,
            "range": "± 3719",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 44173,
            "range": "± 7162",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3783,
            "range": "± 704",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 638,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1701107,
            "range": "± 401583",
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
          "id": "db2f1a601c213ba9fc775b126194ea041c3f174e",
          "message": "Make call stack available also under no_function.",
          "timestamp": "2022-02-02T15:07:22+08:00",
          "tree_id": "5018d5b8f3afe704c1477d34709ab7e5081da49f",
          "url": "https://github.com/schungx/rhai/commit/db2f1a601c213ba9fc775b126194ea041c3f174e"
        },
        "date": 1643786212878,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 904630,
            "range": "± 62733",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 166,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 160,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 780,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1558,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1602,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8041910,
            "range": "± 41647",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 559,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 600,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 21487,
            "range": "± 259",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 20935,
            "range": "± 663",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 27182,
            "range": "± 882",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 593,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1085,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 113,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 113,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 112,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2309145,
            "range": "± 14255",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4000504,
            "range": "± 29273",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3461101,
            "range": "± 65637",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 23377,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9024,
            "range": "± 203",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2615,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2657,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 549,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 601,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1224,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1232,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1207,
            "range": "± 263",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1672,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 650,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 682,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 394,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 492,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 648,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 681,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 435971,
            "range": "± 3641",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 527712,
            "range": "± 6249",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 527042,
            "range": "± 13228",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 20460879,
            "range": "± 164777",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4523,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 18864,
            "range": "± 217",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 7121,
            "range": "± 317",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 24011,
            "range": "± 321",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 21157,
            "range": "± 194",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 48761,
            "range": "± 1071",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4088,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 684,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1941458,
            "range": "± 5326",
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
          "id": "8322e62c181783184e4ef12c945a4d7ba486fd33",
          "message": "Fix function exit trigger and add function enter trigger.",
          "timestamp": "2022-02-02T22:42:33+08:00",
          "tree_id": "9beaf62f6b1c252606ec7e2d530de678dcc81e0c",
          "url": "https://github.com/schungx/rhai/commit/8322e62c181783184e4ef12c945a4d7ba486fd33"
        },
        "date": 1643814381783,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 1006964,
            "range": "± 148586",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 193,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 183,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 889,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1595,
            "range": "± 358",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1659,
            "range": "± 216",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8911213,
            "range": "± 1130598",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 608,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 644,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 26495,
            "range": "± 5325",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 25457,
            "range": "± 3225",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 31614,
            "range": "± 8023",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 657,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1214,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 121,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 120,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 121,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2463805,
            "range": "± 446342",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4394349,
            "range": "± 978703",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3769169,
            "range": "± 525363",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 26236,
            "range": "± 6372",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9766,
            "range": "± 1484",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2724,
            "range": "± 547",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2838,
            "range": "± 547",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 578,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 631,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1440,
            "range": "± 251",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1369,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1291,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1843,
            "range": "± 221",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 743,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 762,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 421,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 535,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 713,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 718,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 471109,
            "range": "± 82182",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 571680,
            "range": "± 89834",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 570183,
            "range": "± 76589",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23884358,
            "range": "± 2523888",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4810,
            "range": "± 947",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 19465,
            "range": "± 2423",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 7688,
            "range": "± 1637",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 25431,
            "range": "± 3233",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 22827,
            "range": "± 4383",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 52271,
            "range": "± 9383",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4392,
            "range": "± 668",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 742,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2166369,
            "range": "± 349238",
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
          "id": "9fa683938089747f8dc622f6dea1fe60c35c112a",
          "message": "Simplify debugger calls.",
          "timestamp": "2022-02-03T11:56:08+08:00",
          "tree_id": "cdaa4828ba5dc13d15ea539be45d79c297a433b3",
          "url": "https://github.com/schungx/rhai/commit/9fa683938089747f8dc622f6dea1fe60c35c112a"
        },
        "date": 1643862501900,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 781835,
            "range": "± 43232",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 140,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 132,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 673,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1431,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1455,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7019430,
            "range": "± 26346",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 531,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 562,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17981,
            "range": "± 371",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17655,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 23307,
            "range": "± 240",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 502,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 894,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 109,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 109,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 109,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1948370,
            "range": "± 5195",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3394320,
            "range": "± 9341",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2903180,
            "range": "± 14215",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 20931,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7933,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2291,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2306,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 483,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 522,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1217,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1220,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1024,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1477,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 599,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 619,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 346,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 423,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 575,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 623,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 382000,
            "range": "± 1697",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 451815,
            "range": "± 1396",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 454275,
            "range": "± 1463",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19016922,
            "range": "± 87480",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4108,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15649,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6124,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19819,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17630,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 39595,
            "range": "± 414",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3440,
            "range": "± 229",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 575,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1751820,
            "range": "± 4263",
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
          "id": "3be27746e00a0374e33ba208d84361e85a8a62a8",
          "message": "Add allow_shadowing.",
          "timestamp": "2022-02-04T13:20:47+08:00",
          "tree_id": "e4863c97b69d5da8af4d3a07672f3617cb2039e1",
          "url": "https://github.com/schungx/rhai/commit/3be27746e00a0374e33ba208d84361e85a8a62a8"
        },
        "date": 1643952496030,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 672191,
            "range": "± 23874",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 128,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 126,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 600,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1180,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1207,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6170450,
            "range": "± 54636",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 449,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 473,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15960,
            "range": "± 666",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15384,
            "range": "± 234",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 20411,
            "range": "± 770",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 445,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 825,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 94,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 94,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 93,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1724862,
            "range": "± 59302",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2980706,
            "range": "± 65023",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2563223,
            "range": "± 99776",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 18475,
            "range": "± 777",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 6902,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1957,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2047,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 408,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 437,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1027,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 968,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 889,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1320,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 500,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 509,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 296,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 366,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 483,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 511,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 339869,
            "range": "± 1697",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 397265,
            "range": "± 6484",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 398600,
            "range": "± 11534",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 16739882,
            "range": "± 379278",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3347,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13942,
            "range": "± 378",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5205,
            "range": "± 250",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 17689,
            "range": "± 662",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15571,
            "range": "± 591",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35612,
            "range": "± 994",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2861,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 495,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1474669,
            "range": "± 31026",
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
          "id": "f09abd7ab31c9f7f6d945c478085ef830101de3a",
          "message": "Fix builds.",
          "timestamp": "2022-02-04T13:31:33+08:00",
          "tree_id": "12a573309c916be6ee8a49af22365911c37d7449",
          "url": "https://github.com/schungx/rhai/commit/f09abd7ab31c9f7f6d945c478085ef830101de3a"
        },
        "date": 1643953152049,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 939848,
            "range": "± 171545",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 184,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 187,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 816,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1669,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1742,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8682745,
            "range": "± 19251",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 632,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 673,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 22874,
            "range": "± 262",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 21954,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 28414,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 639,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1128,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 133,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 133,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 133,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2476002,
            "range": "± 2691",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4264341,
            "range": "± 4543",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3651763,
            "range": "± 11629",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25338,
            "range": "± 166",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9725,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2800,
            "range": "± 1334",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2888,
            "range": "± 1312",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 591,
            "range": "± 230",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 629,
            "range": "± 195",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1346,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1364,
            "range": "± 1251",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1293,
            "range": "± 1064",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1801,
            "range": "± 1690",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 720,
            "range": "± 439",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 747,
            "range": "± 229",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 417,
            "range": "± 272",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 517,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 685,
            "range": "± 600",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 731,
            "range": "± 230",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 482265,
            "range": "± 36554",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 559492,
            "range": "± 359674",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 558842,
            "range": "± 267130",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23129295,
            "range": "± 3509359",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4677,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 19361,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 7358,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 24898,
            "range": "± 288",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 21779,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 50368,
            "range": "± 597",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4167,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 700,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2095867,
            "range": "± 7989",
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
          "id": "40bec9f017c36c853525dd3da89e49666041f1b7",
          "message": "Fix tests.",
          "timestamp": "2022-02-04T23:02:00+08:00",
          "tree_id": "560f9ce36f02506f51eee1e6f7b6545b6ec978fa",
          "url": "https://github.com/schungx/rhai/commit/40bec9f017c36c853525dd3da89e49666041f1b7"
        },
        "date": 1643987341992,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 770853,
            "range": "± 86153",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 139,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 133,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 667,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1381,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1401,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7041759,
            "range": "± 9439",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 510,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 539,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17802,
            "range": "± 239",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17522,
            "range": "± 195",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 23524,
            "range": "± 248",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 537,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 956,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 106,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 107,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 107,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1942533,
            "range": "± 5664",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3453660,
            "range": "± 8271",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2894475,
            "range": "± 7726",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 21080,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8029,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2201,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2253,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 472,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 512,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1225,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1207,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1012,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1512,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 603,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 606,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 357,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 465,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 592,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 644,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 384851,
            "range": "± 1595",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 449001,
            "range": "± 1835",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 454866,
            "range": "± 1280",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19121027,
            "range": "± 23051",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4044,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 16017,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6329,
            "range": "± 408",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20238,
            "range": "± 250",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17853,
            "range": "± 276",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 40321,
            "range": "± 640",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3570,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 583,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1735055,
            "range": "± 5999",
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
          "id": "be9356727fc11bf3367f81263472f9329ee26f41",
          "message": "Add variable definition filter.",
          "timestamp": "2022-02-04T22:59:41+08:00",
          "tree_id": "af5aa81c1891d8247b24fc8f15a19ced2751f2c7",
          "url": "https://github.com/schungx/rhai/commit/be9356727fc11bf3367f81263472f9329ee26f41"
        },
        "date": 1643987620105,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 951598,
            "range": "± 137640",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 191,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 182,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 788,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1639,
            "range": "± 365",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1598,
            "range": "± 331",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8572488,
            "range": "± 1319657",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 574,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 618,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 20927,
            "range": "± 3678",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 20066,
            "range": "± 3849",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 25850,
            "range": "± 5419",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 646,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1128,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 123,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 121,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 126,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2360006,
            "range": "± 356934",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4147962,
            "range": "± 568543",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3544947,
            "range": "± 703719",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25808,
            "range": "± 3463",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9030,
            "range": "± 1339",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2474,
            "range": "± 421",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2550,
            "range": "± 540",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 556,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 595,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1375,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1339,
            "range": "± 231",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1277,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1796,
            "range": "± 193",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 709,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 701,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 391,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 515,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 656,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 661,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 440119,
            "range": "± 71659",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 538787,
            "range": "± 115935",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 518686,
            "range": "± 83951",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22183351,
            "range": "± 3691809",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4630,
            "range": "± 939",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 19145,
            "range": "± 3788",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 7185,
            "range": "± 1623",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 24272,
            "range": "± 3361",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 20467,
            "range": "± 3589",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 48183,
            "range": "± 6532",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3991,
            "range": "± 712",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 677,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1991111,
            "range": "± 394449",
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
          "id": "6a740a9fa10b00403dbc4baf8498d4b88ea57e17",
          "message": "Fix no_module build.",
          "timestamp": "2022-02-04T23:08:09+08:00",
          "tree_id": "7408a299c7d1730035730376b03bd9c3d9884941",
          "url": "https://github.com/schungx/rhai/commit/6a740a9fa10b00403dbc4baf8498d4b88ea57e17"
        },
        "date": 1643987794589,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 741504,
            "range": "± 145976",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 151,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 141,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 660,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1347,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1378,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6947505,
            "range": "± 16503",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 511,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 539,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18553,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17404,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 22996,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 507,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 920,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 109,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 109,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 108,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1984652,
            "range": "± 5923",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3434370,
            "range": "± 5310",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2966298,
            "range": "± 6674",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 21016,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7911,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2201,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2245,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 463,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 500,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1131,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1108,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 967,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1416,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 578,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 579,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 344,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 430,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 564,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 593,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 386207,
            "range": "± 1337",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 447052,
            "range": "± 1386",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 448853,
            "range": "± 1998",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19123625,
            "range": "± 113143",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3796,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15750,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5877,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20032,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17437,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 41108,
            "range": "± 435",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3401,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 548,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1693561,
            "range": "± 5612",
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c5eafc337a20823319f48219c67e3d44fce913da",
          "message": "Merge pull request #64 from neachdainn/reify-sound\n\nRemove unsound casting functions",
          "timestamp": "2022-02-06T21:24:32+08:00",
          "tree_id": "112f47b2fa049bc673f84e21694ca5c4d7567f71",
          "url": "https://github.com/schungx/rhai/commit/c5eafc337a20823319f48219c67e3d44fce913da"
        },
        "date": 1644154425296,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 750905,
            "range": "± 148281",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 148,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 144,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 665,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1348,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1366,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 509,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 536,
            "range": "± 1",
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
          "id": "becbfa8930321d64df58913a953a15d2bbbe9915",
          "message": "Fix errors.",
          "timestamp": "2022-02-06T23:02:59+08:00",
          "tree_id": "c003fcfa07c9a69511c5d34a868b5a1590dd9463",
          "url": "https://github.com/schungx/rhai/commit/becbfa8930321d64df58913a953a15d2bbbe9915"
        },
        "date": 1644160623247,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 744146,
            "range": "± 128272",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 142,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 130,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 643,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1266,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1339,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6722722,
            "range": "± 796133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 470,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 518,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18728,
            "range": "± 6141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16672,
            "range": "± 2076",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 23961,
            "range": "± 3264",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 560,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 933,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 101,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 105,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 106,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1876058,
            "range": "± 243410",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3397517,
            "range": "± 771841",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2847299,
            "range": "± 406119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 20142,
            "range": "± 3026",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7545,
            "range": "± 1380",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2067,
            "range": "± 549",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2166,
            "range": "± 441",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 448,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 511,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1015,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1022,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 936,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1400,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 582,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 549,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 339,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 405,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 524,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 584,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 412635,
            "range": "± 93894",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 466030,
            "range": "± 89849",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 445916,
            "range": "± 89931",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 17883126,
            "range": "± 3931781",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3588,
            "range": "± 489",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15577,
            "range": "± 2976",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5632,
            "range": "± 921",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19331,
            "range": "± 4325",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17724,
            "range": "± 2080",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 39068,
            "range": "± 10146",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3265,
            "range": "± 362",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 630,
            "range": "± 191",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1694424,
            "range": "± 250314",
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
          "id": "bd9519e96b2d0244f6859457e762f33cbf925700",
          "message": "Remove reify_dynamic.",
          "timestamp": "2022-02-07T12:02:00+08:00",
          "tree_id": "b9e4c19b2ae50d04600936a9595f21a316add8dd",
          "url": "https://github.com/schungx/rhai/commit/bd9519e96b2d0244f6859457e762f33cbf925700"
        },
        "date": 1644207198443,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 759875,
            "range": "± 128231",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 157,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 150,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 681,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1484,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1527,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7173481,
            "range": "± 29221",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 551,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 582,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18400,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17675,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 23941,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 523,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 969,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 113,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 113,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 113,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2101655,
            "range": "± 7678",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3512077,
            "range": "± 11366",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3057761,
            "range": "± 12197",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 22133,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8466,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2333,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2398,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 478,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 520,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1180,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1124,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 983,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1519,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 603,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 620,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 364,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 466,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 585,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 629,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 419768,
            "range": "± 1764",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 490443,
            "range": "± 3268",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 486763,
            "range": "± 3169",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19775260,
            "range": "± 94355",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3842,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 16565,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5989,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20915,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 18599,
            "range": "± 262",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 41772,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3617,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 560,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1853452,
            "range": "± 6236",
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
          "id": "97a8fd3d5b1143ec9334e740ec740b9987597220",
          "message": "Improve reify syntax.",
          "timestamp": "2022-02-08T09:25:53+08:00",
          "tree_id": "0b5454223f0e7bbe83d429a441315b063ddb617e",
          "url": "https://github.com/schungx/rhai/commit/97a8fd3d5b1143ec9334e740ec740b9987597220"
        },
        "date": 1644284251095,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 905844,
            "range": "± 73975",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 174,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 171,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 789,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1639,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1752,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7905996,
            "range": "± 779564",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 628,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 633,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 19124,
            "range": "± 2379",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 19114,
            "range": "± 2226",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 25218,
            "range": "± 3649",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 582,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1041,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 111,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 111,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 106,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2249144,
            "range": "± 287816",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3694667,
            "range": "± 489947",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3288658,
            "range": "± 441701",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 22124,
            "range": "± 3136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8650,
            "range": "± 943",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2656,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2685,
            "range": "± 302",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 552,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 581,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1173,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1153,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1154,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1654,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 615,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 651,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 370,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 479,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 595,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 649,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 480259,
            "range": "± 56506",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 524685,
            "range": "± 34864",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 495216,
            "range": "± 78093",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 20199263,
            "range": "± 1729816",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3939,
            "range": "± 378",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 16541,
            "range": "± 1341",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6462,
            "range": "± 943",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 21268,
            "range": "± 1842",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 18789,
            "range": "± 2195",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 43874,
            "range": "± 5210",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3720,
            "range": "± 519",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 641,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1933214,
            "range": "± 284838",
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
          "id": "83b213b0866735f60f8da79902d27e960c2aa9bb",
          "message": "Unwrap error when caught.",
          "timestamp": "2022-02-08T19:02:40+08:00",
          "tree_id": "65ec49016420cb24aebe10b982115b8d588adc91",
          "url": "https://github.com/schungx/rhai/commit/83b213b0866735f60f8da79902d27e960c2aa9bb"
        },
        "date": 1644325341585,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 903219,
            "range": "± 54970",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 184,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 181,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 799,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1668,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1737,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8327389,
            "range": "± 606083",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 640,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 676,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 20853,
            "range": "± 1863",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 20914,
            "range": "± 1444",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 26430,
            "range": "± 2433",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 580,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1079,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 113,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 116,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 122,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2498489,
            "range": "± 44901",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4070726,
            "range": "± 350277",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3535506,
            "range": "± 395654",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24612,
            "range": "± 2699",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9364,
            "range": "± 1237",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2700,
            "range": "± 321",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2637,
            "range": "± 326",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 540,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 593,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1302,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1261,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1203,
            "range": "± 182",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1770,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 732,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 724,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 399,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 543,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 641,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 683,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 451645,
            "range": "± 39658",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 544511,
            "range": "± 46151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 524855,
            "range": "± 68123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21484492,
            "range": "± 2001197",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4423,
            "range": "± 352",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 19178,
            "range": "± 985",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 7030,
            "range": "± 324",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 24471,
            "range": "± 959",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 21535,
            "range": "± 1424",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 47143,
            "range": "± 4038",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4020,
            "range": "± 302",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 639,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2042222,
            "range": "± 169967",
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
          "id": "5e7db6e1051bf2c75d78258b33704c57d4236a53",
          "message": "Use new version of rustyline.",
          "timestamp": "2022-02-08T22:16:12+08:00",
          "tree_id": "f0a72e9b9072f5ca25ec54f00ae69880764463d0",
          "url": "https://github.com/schungx/rhai/commit/5e7db6e1051bf2c75d78258b33704c57d4236a53"
        },
        "date": 1644330847486,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 956780,
            "range": "± 94474",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 187,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 180,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 807,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1704,
            "range": "± 818",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1741,
            "range": "± 1096",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 9236046,
            "range": "± 600822",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 636,
            "range": "± 208",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 702,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 21874,
            "range": "± 4651",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 22090,
            "range": "± 2759",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 28074,
            "range": "± 10015",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 671,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1177,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 117,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 118,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 117,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2587308,
            "range": "± 331594",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4438035,
            "range": "± 215887",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3849643,
            "range": "± 215701",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25955,
            "range": "± 5365",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9660,
            "range": "± 3754",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2734,
            "range": "± 746",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2799,
            "range": "± 858",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 569,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 621,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1401,
            "range": "± 384",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1373,
            "range": "± 278",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1246,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1786,
            "range": "± 329",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 695,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 721,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 431,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 516,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 703,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 764,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 478901,
            "range": "± 92007",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 574737,
            "range": "± 28856",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 574149,
            "range": "± 56625",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24931491,
            "range": "± 2328984",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4714,
            "range": "± 265",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 19686,
            "range": "± 1358",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 7278,
            "range": "± 1493",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 25749,
            "range": "± 1480",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 22676,
            "range": "± 1425",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 50448,
            "range": "± 3914",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4281,
            "range": "± 366",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 721,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2233063,
            "range": "± 207904",
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
          "id": "e5a673b3ae6bdb2b5dc8c8bcfa379c365a98768c",
          "message": "Add position info for closures.",
          "timestamp": "2022-02-09T13:40:51+08:00",
          "tree_id": "d769405d24ebcc8bab61bbf18634afb7e72ed333",
          "url": "https://github.com/schungx/rhai/commit/e5a673b3ae6bdb2b5dc8c8bcfa379c365a98768c"
        },
        "date": 1644386970253,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 791512,
            "range": "± 71741",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 146,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 140,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 701,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1459,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1490,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7340482,
            "range": "± 22599",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 546,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 584,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18453,
            "range": "± 237",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17653,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 23818,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 528,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 966,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 103,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 102,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 102,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1976232,
            "range": "± 7815",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3617276,
            "range": "± 9082",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3113369,
            "range": "± 9806",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 22128,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8302,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2371,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2412,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 488,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 530,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1251,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1243,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1052,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1535,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 621,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 605,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 354,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 451,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 587,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 632,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 412023,
            "range": "± 2736",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 473648,
            "range": "± 3445",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 473883,
            "range": "± 2311",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 20369053,
            "range": "± 122987",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3912,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15746,
            "range": "± 184",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6231,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20008,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17678,
            "range": "± 280",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 39593,
            "range": "± 473",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3613,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 688,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1855523,
            "range": "± 7244",
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
          "id": "d23d1159abdc776e6550031b67be9135189d2997",
          "message": "Fix positions.",
          "timestamp": "2022-02-10T17:55:32+08:00",
          "tree_id": "59d2fd18ba3bc0433e3d5f5887b6deea2e8b7a6f",
          "url": "https://github.com/schungx/rhai/commit/d23d1159abdc776e6550031b67be9135189d2997"
        },
        "date": 1644488559355,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 961395,
            "range": "± 92182",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 188,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 182,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 840,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1680,
            "range": "± 295",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1740,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8823099,
            "range": "± 988744",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 650,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 690,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 21942,
            "range": "± 3230",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 20638,
            "range": "± 3073",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 28943,
            "range": "± 4471",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 640,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1143,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 119,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 120,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 120,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2547853,
            "range": "± 383360",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4440009,
            "range": "± 836349",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3944934,
            "range": "± 665260",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 26331,
            "range": "± 3663",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9868,
            "range": "± 1693",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2930,
            "range": "± 534",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2889,
            "range": "± 599",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 578,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 636,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1395,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1401,
            "range": "± 236",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1229,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1851,
            "range": "± 224",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 733,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 731,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 452,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 563,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 705,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 824,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 491003,
            "range": "± 65007",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 572568,
            "range": "± 115318",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 562128,
            "range": "± 91391",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24301446,
            "range": "± 3110176",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4592,
            "range": "± 788",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 19070,
            "range": "± 3630",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 7154,
            "range": "± 1329",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 23607,
            "range": "± 2835",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 21415,
            "range": "± 3802",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 47911,
            "range": "± 8943",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4045,
            "range": "± 588",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 721,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2128902,
            "range": "± 223602",
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
          "id": "41caa233bb6324a7ba9b7930da18c7858b1fffe8",
          "message": "Fix string parsing.",
          "timestamp": "2022-02-10T18:24:04+08:00",
          "tree_id": "25eb481b60b34cea5c766361a2a043fa02335385",
          "url": "https://github.com/schungx/rhai/commit/41caa233bb6324a7ba9b7930da18c7858b1fffe8"
        },
        "date": 1644489107509,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 932446,
            "range": "± 98232",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 178,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 178,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 814,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1736,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1764,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8633486,
            "range": "± 27822",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 659,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 701,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 21456,
            "range": "± 249",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 20886,
            "range": "± 522",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 27732,
            "range": "± 294",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 661,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1135,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 144,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 144,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 143,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2522121,
            "range": "± 11583",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4254118,
            "range": "± 15003",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3721094,
            "range": "± 13249",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 26099,
            "range": "± 5048",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9797,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2781,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2835,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 580,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 624,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1352,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1340,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1217,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1730,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 715,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 710,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 412,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 515,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 679,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 689,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 478703,
            "range": "± 3995",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 574353,
            "range": "± 8463",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 566393,
            "range": "± 17922",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22506449,
            "range": "± 116829",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4549,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 18791,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 7033,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 23753,
            "range": "± 262",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 20910,
            "range": "± 233",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 48991,
            "range": "± 951",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4254,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 686,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2142474,
            "range": "± 14855",
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
          "id": "d300fdb34eac820bbf5c13c4409af5e400eb61e9",
          "message": "List out examples.",
          "timestamp": "2022-02-12T11:48:16+08:00",
          "tree_id": "81fcbdf31b41f38545ee896691e82aa999700cfa",
          "url": "https://github.com/schungx/rhai/commit/d300fdb34eac820bbf5c13c4409af5e400eb61e9"
        },
        "date": 1644638388890,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 757758,
            "range": "± 130462",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 158,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 152,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 685,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1436,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1469,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7217334,
            "range": "± 26355",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 546,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 585,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18354,
            "range": "± 216",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17877,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 23759,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 540,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 961,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 103,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 103,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 103,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2063234,
            "range": "± 2319",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3506557,
            "range": "± 6577",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3058469,
            "range": "± 10256",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 21705,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8097,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2341,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2382,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 481,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 520,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1176,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1137,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1015,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1474,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 598,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 580,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 347,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 428,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 566,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 599,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 399144,
            "range": "± 1135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 470845,
            "range": "± 1720",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 463375,
            "range": "± 801",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19975103,
            "range": "± 21612",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3858,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 16017,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5886,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20188,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17989,
            "range": "± 223",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 40902,
            "range": "± 491",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3502,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 551,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1763980,
            "range": "± 4203",
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
          "id": "2caf686e8a35e8747bdf9c8e4658e045485a9b43",
          "message": "Fix links.",
          "timestamp": "2022-02-12T11:50:53+08:00",
          "tree_id": "f02feca40e582a39425dfda93f6be6da794f2b35",
          "url": "https://github.com/schungx/rhai/commit/2caf686e8a35e8747bdf9c8e4658e045485a9b43"
        },
        "date": 1644638838664,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 754339,
            "range": "± 11234",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 180,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 179,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 718,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1450,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1501,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7219833,
            "range": "± 9943",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 548,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 583,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18535,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17367,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 23774,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 541,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1009,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 108,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 108,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 108,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2058920,
            "range": "± 1345",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3519203,
            "range": "± 4598",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3061827,
            "range": "± 2233",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 21776,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8070,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2359,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2422,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 495,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 534,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1167,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1135,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1046,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1475,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 623,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 619,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 363,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 436,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 566,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 624,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 399249,
            "range": "± 1038",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 472225,
            "range": "± 3378",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 465710,
            "range": "± 3647",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19957435,
            "range": "± 10268",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3766,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15684,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5892,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19986,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17856,
            "range": "± 288",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 40846,
            "range": "± 468",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3458,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 553,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1770411,
            "range": "± 3910",
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
          "id": "5bb6ce835f97bb428bb1a03e00a22a8859e989c0",
          "message": "Run var def filter during parsing.",
          "timestamp": "2022-02-13T18:46:25+08:00",
          "tree_id": "bf00dd3312213f38f8b569c1940de159a80676a6",
          "url": "https://github.com/schungx/rhai/commit/5bb6ce835f97bb428bb1a03e00a22a8859e989c0"
        },
        "date": 1644750202072,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 1045311,
            "range": "± 116749",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 199,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 200,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 910,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1898,
            "range": "± 310",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1882,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 9980619,
            "range": "± 1504273",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 701,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 755,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 23716,
            "range": "± 5786",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 22791,
            "range": "± 2555",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 31038,
            "range": "± 4034",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 688,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1238,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 129,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 129,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 129,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2767483,
            "range": "± 347482",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4746320,
            "range": "± 711456",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 4141251,
            "range": "± 951978",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 28911,
            "range": "± 4951",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 10533,
            "range": "± 1165",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 3123,
            "range": "± 303",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 3319,
            "range": "± 583",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 627,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 685,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1531,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1526,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1361,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1994,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 780,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 767,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 456,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 544,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 740,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 763,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 520317,
            "range": "± 74589",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 614528,
            "range": "± 91843",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 606210,
            "range": "± 100948",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26322181,
            "range": "± 1845942",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4935,
            "range": "± 1472",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 20153,
            "range": "± 2431",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 7553,
            "range": "± 1236",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 26286,
            "range": "± 2823",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 22771,
            "range": "± 2991",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 51572,
            "range": "± 6761",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4449,
            "range": "± 385",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 745,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2277439,
            "range": "± 277596",
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
          "id": "fb9964e1a32cd1d9cac9377a64c163d4964e39b0",
          "message": "Revise on_def_var API.",
          "timestamp": "2022-02-15T10:56:05+08:00",
          "tree_id": "08f8a78764aef9cf3fdec761e518b7fe6c9f2756",
          "url": "https://github.com/schungx/rhai/commit/fb9964e1a32cd1d9cac9377a64c163d4964e39b0"
        },
        "date": 1644894821619,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 978764,
            "range": "± 89955",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 193,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 185,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 847,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1770,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1823,
            "range": "± 217",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 9093054,
            "range": "± 632138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 671,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 711,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 22532,
            "range": "± 3382",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 21945,
            "range": "± 5015",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 29810,
            "range": "± 5509",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 657,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1265,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 123,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 118,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 123,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2620135,
            "range": "± 352849",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4512692,
            "range": "± 488783",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3927791,
            "range": "± 470991",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 27025,
            "range": "± 2926",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 10226,
            "range": "± 1068",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2879,
            "range": "± 253",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2938,
            "range": "± 338",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 595,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 648,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1407,
            "range": "± 435",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1472,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1328,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1893,
            "range": "± 227",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 784,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 746,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 440,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 531,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 722,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 761,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 500035,
            "range": "± 46599",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 581791,
            "range": "± 50660",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 577831,
            "range": "± 42205",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25341918,
            "range": "± 2035507",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4729,
            "range": "± 358",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 19028,
            "range": "± 1985",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 7413,
            "range": "± 1377",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 25755,
            "range": "± 4072",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 22036,
            "range": "± 1713",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 50140,
            "range": "± 10019",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4092,
            "range": "± 435",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 732,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2209836,
            "range": "± 354592",
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
          "id": "84face341acae0102c3a57a1fb6b454f252e48ea",
          "message": "Fix doc comments.",
          "timestamp": "2022-02-15T15:49:03+08:00",
          "tree_id": "60a1a9d3d7134cc81c0a21be29ed2e94eea22d7b",
          "url": "https://github.com/schungx/rhai/commit/84face341acae0102c3a57a1fb6b454f252e48ea"
        },
        "date": 1644926850904,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 966058,
            "range": "± 106790",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 209,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 172,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 845,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1646,
            "range": "± 215",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1717,
            "range": "± 193",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8481596,
            "range": "± 646123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 611,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 664,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 21210,
            "range": "± 2050",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 20907,
            "range": "± 4185",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 29502,
            "range": "± 5495",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 604,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1066,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 115,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 113,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 113,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2440900,
            "range": "± 417446",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4148604,
            "range": "± 495294",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3647426,
            "range": "± 621521",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25440,
            "range": "± 5015",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9223,
            "range": "± 1111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2623,
            "range": "± 437",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2660,
            "range": "± 346",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 540,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 599,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1347,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1316,
            "range": "± 171",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1155,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1771,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 683,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 676,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 387,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 501,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 639,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 667,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 461202,
            "range": "± 61033",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 535527,
            "range": "± 49080",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 526698,
            "range": "± 53018",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22793823,
            "range": "± 1926032",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4419,
            "range": "± 414",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 18450,
            "range": "± 2140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6786,
            "range": "± 552",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 24335,
            "range": "± 2060",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 20509,
            "range": "± 1771",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 46379,
            "range": "± 5105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3980,
            "range": "± 355",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 687,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2095082,
            "range": "± 276780",
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
          "id": "3db918e89a860b700652fbef764e7057d0805897",
          "message": "Doc fixup.",
          "timestamp": "2022-02-15T19:56:42+08:00",
          "tree_id": "483cc9cd84d7d1b62114e98f9165bb9ad18bbe13",
          "url": "https://github.com/schungx/rhai/commit/3db918e89a860b700652fbef764e7057d0805897"
        },
        "date": 1644927631272,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 1065829,
            "range": "± 120161",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 195,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 186,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 951,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1788,
            "range": "± 684",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1808,
            "range": "± 282",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 9356251,
            "range": "± 753044",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 664,
            "range": "± 316",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 761,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 23721,
            "range": "± 4741",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 23260,
            "range": "± 3547",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 30656,
            "range": "± 2518",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 684,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1195,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 130,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 129,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 130,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2890702,
            "range": "± 355899",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4916751,
            "range": "± 724455",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 4081513,
            "range": "± 723657",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 28144,
            "range": "± 2803",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 10822,
            "range": "± 4550",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 3133,
            "range": "± 884",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 3057,
            "range": "± 514",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 612,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 675,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1544,
            "range": "± 380",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1537,
            "range": "± 371",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1404,
            "range": "± 468",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 2050,
            "range": "± 499",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 755,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 767,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 456,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 563,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 726,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 772,
            "range": "± 194",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 522689,
            "range": "± 54441",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 612666,
            "range": "± 117665",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 576364,
            "range": "± 37829",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26140124,
            "range": "± 2345045",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 5074,
            "range": "± 800",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 19956,
            "range": "± 3247",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 7508,
            "range": "± 1346",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 26290,
            "range": "± 6383",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 23509,
            "range": "± 6457",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 53493,
            "range": "± 12593",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4536,
            "range": "± 1140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 789,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2325589,
            "range": "± 197992",
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
          "id": "cf0660e36b5c41ac0e5014fca97ab575cef2168f",
          "message": "Expand StmtBlock inline size.",
          "timestamp": "2022-02-16T12:57:26+08:00",
          "tree_id": "ca6c00aa429dd6123eb481882aa7cfbe6b707bcf",
          "url": "https://github.com/schungx/rhai/commit/cf0660e36b5c41ac0e5014fca97ab575cef2168f"
        },
        "date": 1644988400948,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 1027967,
            "range": "± 156851",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 223,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 200,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 863,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1826,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1807,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 9834170,
            "range": "± 1152942",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 684,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 743,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 24332,
            "range": "± 1855",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 23499,
            "range": "± 2073",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 31619,
            "range": "± 3669",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 673,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1271,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 127,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 127,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 125,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2737465,
            "range": "± 215852",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4708454,
            "range": "± 541355",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 4102126,
            "range": "± 244144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 27987,
            "range": "± 5147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 10444,
            "range": "± 845",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 3056,
            "range": "± 230",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 3012,
            "range": "± 457",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 620,
            "range": "± 383",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 687,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1506,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1476,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1342,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 2014,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 831,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 835,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 449,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 544,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 735,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 736,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 508003,
            "range": "± 57535",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 623052,
            "range": "± 139039",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 587027,
            "range": "± 131729",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25910555,
            "range": "± 2321604",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4872,
            "range": "± 437",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 19917,
            "range": "± 3380",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 7548,
            "range": "± 1110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 26171,
            "range": "± 1552",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 23220,
            "range": "± 1654",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 52222,
            "range": "± 3858",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4470,
            "range": "± 242",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 774,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2252878,
            "range": "± 168094",
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
          "id": "0d2e3d82f37baf0d539dd2620593cc85dde94c25",
          "message": "Reduce size of Stmt.",
          "timestamp": "2022-02-16T17:51:14+08:00",
          "tree_id": "7af6f2f3b4c926b88ee54fa55d899e4ad1cd9c33",
          "url": "https://github.com/schungx/rhai/commit/0d2e3d82f37baf0d539dd2620593cc85dde94c25"
        },
        "date": 1645005500411,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 777159,
            "range": "± 133435",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 155,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 152,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 685,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1459,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1491,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7357760,
            "range": "± 124807",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 550,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 586,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18805,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17778,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 23795,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 517,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 945,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 103,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 103,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 102,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2057265,
            "range": "± 5379",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3517493,
            "range": "± 4367",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3081922,
            "range": "± 3399",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 21599,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8038,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2361,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2459,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 481,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 544,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1177,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1149,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 994,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1482,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 581,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 596,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 350,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 435,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 569,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 601,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 399905,
            "range": "± 822",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 470545,
            "range": "± 3395",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 461125,
            "range": "± 2135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19687465,
            "range": "± 23085",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3758,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15596,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5872,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20692,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 18241,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 41741,
            "range": "± 545",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3550,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 573,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1779242,
            "range": "± 4539",
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
          "id": "bb04fab0110abff552d9aaf167e5b7770707b5f3",
          "message": "Optimize variable shadowing.",
          "timestamp": "2022-02-18T15:04:46+08:00",
          "tree_id": "f19ef816d3193e758b4793c5e81bf79d2afcd21c",
          "url": "https://github.com/schungx/rhai/commit/bb04fab0110abff552d9aaf167e5b7770707b5f3"
        },
        "date": 1645171561563,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 779359,
            "range": "± 166246",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 151,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 145,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 677,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1421,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1449,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7167039,
            "range": "± 13068",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 545,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 576,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18816,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 18275,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 23877,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 505,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 947,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 102,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 102,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 102,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2018488,
            "range": "± 1302",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3522647,
            "range": "± 5285",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3049528,
            "range": "± 5771",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 21405,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7959,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2401,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2455,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 509,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 527,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1177,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1112,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1015,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1478,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 618,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 612,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 343,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 455,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 557,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 646,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 396212,
            "range": "± 5731",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 462793,
            "range": "± 1540",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 458738,
            "range": "± 1644",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19864095,
            "range": "± 140043",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3740,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 16358,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5954,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20908,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 18783,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 41579,
            "range": "± 431",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3599,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 566,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1763202,
            "range": "± 3271",
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
          "id": "67a663881861370e8d60f1eb975caa7a86741564",
          "message": "Allow variable to overwrite constant when shadowing.",
          "timestamp": "2022-02-18T19:14:42+08:00",
          "tree_id": "6b23175f5d9ff59fcfc648e55aecc92eea83bbe8",
          "url": "https://github.com/schungx/rhai/commit/67a663881861370e8d60f1eb975caa7a86741564"
        },
        "date": 1645242560923,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 687761,
            "range": "± 134684",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 132,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 127,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 595,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1263,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1284,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6285417,
            "range": "± 135628",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 482,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 507,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16632,
            "range": "± 363",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15657,
            "range": "± 265",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 21165,
            "range": "± 835",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 455,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 850,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 90,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 90,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 90,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1811935,
            "range": "± 38526",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3107492,
            "range": "± 39854",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2687873,
            "range": "± 83967",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 19032,
            "range": "± 857",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7070,
            "range": "± 464",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2110,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2152,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 440,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 465,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1023,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 993,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 884,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1315,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 506,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 524,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 303,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 378,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 488,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 521,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 349647,
            "range": "± 5580",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 407562,
            "range": "± 4226",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 403442,
            "range": "± 7548",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 17423687,
            "range": "± 106190",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3281,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14142,
            "range": "± 204",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5236,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18309,
            "range": "± 296",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16375,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36753,
            "range": "± 877",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3012,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 499,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1543290,
            "range": "± 25393",
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
          "id": "73f10b8adca5acac66eeacdded12d17f058f628e",
          "message": "Minor housekeeping.",
          "timestamp": "2022-02-24T10:36:20+08:00",
          "tree_id": "c6ceaa1e3e7b8f0a3724587d5eadf91588e4b2bf",
          "url": "https://github.com/schungx/rhai/commit/73f10b8adca5acac66eeacdded12d17f058f628e"
        },
        "date": 1645670905600,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 785154,
            "range": "± 152221",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 151,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 145,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 695,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1437,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1471,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7258183,
            "range": "± 17632",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 557,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 582,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18562,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17931,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 23823,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 521,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 965,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 111,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 111,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 111,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2064942,
            "range": "± 1313",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3562531,
            "range": "± 88446",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3105348,
            "range": "± 2282",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 22103,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8285,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2425,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2525,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 488,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 530,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1199,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1168,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1075,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1564,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 625,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 627,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 344,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 441,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 555,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 590,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 402567,
            "range": "± 708",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 478762,
            "range": "± 3425",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 475952,
            "range": "± 1071",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 20057730,
            "range": "± 12372",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3827,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 16098,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6015,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20976,
            "range": "± 542",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 18621,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 41422,
            "range": "± 444",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3527,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 591,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1816630,
            "range": "± 6961",
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
          "id": "23c74cac61d27d83c2c2586d07fe96728b2bf911",
          "message": "Use boxed slices.",
          "timestamp": "2022-02-25T08:38:03+08:00",
          "tree_id": "ff9a0e00b4db9cb969e7302347d0d8eb29de22cb",
          "url": "https://github.com/schungx/rhai/commit/23c74cac61d27d83c2c2586d07fe96728b2bf911"
        },
        "date": 1645750633777,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 1043700,
            "range": "± 95724",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 214,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 209,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 910,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1879,
            "range": "± 257",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1929,
            "range": "± 257",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 9442594,
            "range": "± 1016070",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 690,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 755,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 24659,
            "range": "± 5687",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 23604,
            "range": "± 2603",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 31255,
            "range": "± 4943",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 706,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1257,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 146,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 142,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 145,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2743241,
            "range": "± 253338",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4544566,
            "range": "± 625944",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3968054,
            "range": "± 509212",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 28143,
            "range": "± 3109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 10618,
            "range": "± 1765",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2998,
            "range": "± 253",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 3079,
            "range": "± 356",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 627,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 719,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1489,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1443,
            "range": "± 186",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1335,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1935,
            "range": "± 317",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 780,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 784,
            "range": "± 328",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 456,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 576,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 739,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 783,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 519580,
            "range": "± 52545",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 629789,
            "range": "± 69232",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 627466,
            "range": "± 74594",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26211603,
            "range": "± 2994763",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 5063,
            "range": "± 688",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 20539,
            "range": "± 1814",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 7912,
            "range": "± 790",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 26639,
            "range": "± 4795",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 23511,
            "range": "± 2186",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 55242,
            "range": "± 11094",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4449,
            "range": "± 530",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 833,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2299449,
            "range": "± 299032",
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
          "id": "8205547d8a24a7cad6c58a071c796c37e9f40376",
          "message": "Use bitflags.",
          "timestamp": "2022-02-25T11:42:59+08:00",
          "tree_id": "5b8e490762c61e31c36641dfc35f3f43488f1bd6",
          "url": "https://github.com/schungx/rhai/commit/8205547d8a24a7cad6c58a071c796c37e9f40376"
        },
        "date": 1645761585820,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 962543,
            "range": "± 8660",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 185,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 180,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 814,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1778,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1812,
            "range": "± 502",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8824879,
            "range": "± 408982",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 677,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 711,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 22831,
            "range": "± 1829",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 21323,
            "range": "± 1490",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 27156,
            "range": "± 2272",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 643,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1133,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 136,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 136,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 127,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2484457,
            "range": "± 236278",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4167096,
            "range": "± 123699",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3501749,
            "range": "± 256857",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25384,
            "range": "± 3660",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 10010,
            "range": "± 1144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2928,
            "range": "± 294",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2993,
            "range": "± 338",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 604,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 626,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1340,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1312,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1223,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1722,
            "range": "± 430",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 730,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 747,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 423,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 509,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 680,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 711,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 481181,
            "range": "± 39772",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 547518,
            "range": "± 92544",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 576772,
            "range": "± 1314",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22531284,
            "range": "± 3448305",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4680,
            "range": "± 298",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 19420,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 7489,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 24815,
            "range": "± 2370",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 22343,
            "range": "± 279",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 49906,
            "range": "± 724",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4301,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 687,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2210811,
            "range": "± 187144",
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
          "id": "9ef522b6997026146dedc6b8cb858bf0fb00022d",
          "message": "Use SmartString in parsing.",
          "timestamp": "2022-02-26T17:28:58+08:00",
          "tree_id": "2d757ede11e44d3e63964792746aadc7be3fe9e4",
          "url": "https://github.com/schungx/rhai/commit/9ef522b6997026146dedc6b8cb858bf0fb00022d"
        },
        "date": 1645868687448,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 974254,
            "range": "± 88830",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 187,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 183,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 817,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1707,
            "range": "± 459",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1786,
            "range": "± 379",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 9294276,
            "range": "± 926017",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 649,
            "range": "± 217",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 719,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 21065,
            "range": "± 7698",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 20879,
            "range": "± 4053",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 25560,
            "range": "± 8817",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 651,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1194,
            "range": "± 312",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 129,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 131,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 128,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2644548,
            "range": "± 140468",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4427106,
            "range": "± 318643",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3794529,
            "range": "± 545125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 26154,
            "range": "± 5689",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 10029,
            "range": "± 1578",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2805,
            "range": "± 479",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2896,
            "range": "± 750",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 591,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 645,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1408,
            "range": "± 343",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1373,
            "range": "± 411",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1261,
            "range": "± 440",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1821,
            "range": "± 332",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 755,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 745,
            "range": "± 402",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 415,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 530,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 702,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 701,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 488959,
            "range": "± 106577",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 600723,
            "range": "± 63785",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 570261,
            "range": "± 106480",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25048918,
            "range": "± 1409191",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3919,
            "range": "± 286",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 17972,
            "range": "± 6132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6098,
            "range": "± 1016",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 23571,
            "range": "± 6035",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 20349,
            "range": "± 6412",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 45224,
            "range": "± 21722",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3736,
            "range": "± 673",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 640,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2231361,
            "range": "± 171238",
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
          "id": "61e6403ac6a7e7214e03de1514a8717289c514a5",
          "message": "Fix bug.",
          "timestamp": "2022-02-26T17:44:39+08:00",
          "tree_id": "f69504b9cf8d8ce3351c86cec7440ed843c31270",
          "url": "https://github.com/schungx/rhai/commit/61e6403ac6a7e7214e03de1514a8717289c514a5"
        },
        "date": 1645869412679,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 791665,
            "range": "± 191649",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 158,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 150,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 685,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1462,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1502,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7326528,
            "range": "± 15874",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 558,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 589,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17667,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17322,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 21662,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 551,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 935,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 116,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 116,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 115,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2094553,
            "range": "± 4543",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3470342,
            "range": "± 6859",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2983178,
            "range": "± 4575",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 22279,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8309,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2419,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2478,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 499,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 541,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1179,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1164,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1108,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1524,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 613,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 601,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 349,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 426,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 566,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 600,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 402585,
            "range": "± 1379",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 487040,
            "range": "± 7449",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 483355,
            "range": "± 2012",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 20113369,
            "range": "± 15920",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3163,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14788,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5172,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19535,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17174,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 38648,
            "range": "± 664",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3190,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 527,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1862178,
            "range": "± 24996",
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
          "id": "b17e891b63b36b5d37408cf370ef86ea8d54f182",
          "message": "Reduce size of Token.",
          "timestamp": "2022-02-26T23:18:47+08:00",
          "tree_id": "7eb182afd9c9c5753d0d748da0903fd46f11d0ba",
          "url": "https://github.com/schungx/rhai/commit/b17e891b63b36b5d37408cf370ef86ea8d54f182"
        },
        "date": 1645889720931,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 875569,
            "range": "± 107906",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 168,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 165,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 746,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1625,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1668,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7994409,
            "range": "± 690637",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 597,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 666,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 19221,
            "range": "± 6123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 18169,
            "range": "± 2065",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 23037,
            "range": "± 3676",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 609,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1147,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 124,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 136,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 129,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2246110,
            "range": "± 320945",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3818019,
            "range": "± 575108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3291713,
            "range": "± 559910",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 23994,
            "range": "± 3672",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8948,
            "range": "± 1674",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2600,
            "range": "± 280",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2714,
            "range": "± 418",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 569,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 632,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1204,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1234,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1112,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1640,
            "range": "± 171",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 672,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 662,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 402,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 452,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 614,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 661,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 437942,
            "range": "± 39120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 546050,
            "range": "± 58067",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 528194,
            "range": "± 79628",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 20469577,
            "range": "± 2261474",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3313,
            "range": "± 369",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15410,
            "range": "± 2116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5556,
            "range": "± 740",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20513,
            "range": "± 2697",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 18168,
            "range": "± 2703",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 43586,
            "range": "± 11764",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3312,
            "range": "± 323",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 541,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1995437,
            "range": "± 220931",
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
          "id": "aee92f3b7bb66ec1044f12b5ced349732bcde557",
          "message": "Move parser into Engine.",
          "timestamp": "2022-02-28T14:37:46+08:00",
          "tree_id": "49dab5dce73d27bb6e7efee4c4b8d76e7927a20e",
          "url": "https://github.com/schungx/rhai/commit/aee92f3b7bb66ec1044f12b5ced349732bcde557"
        },
        "date": 1646030711868,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 970427,
            "range": "± 30047",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 186,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 186,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 817,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1765,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1840,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8758218,
            "range": "± 155698",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 687,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 750,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 20834,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 20419,
            "range": "± 353",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 25135,
            "range": "± 753",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 636,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1126,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 138,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 138,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 137,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2507463,
            "range": "± 42320",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4176149,
            "range": "± 65539",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3590399,
            "range": "± 106447",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 26282,
            "range": "± 1824",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 10055,
            "range": "± 718",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2917,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 3001,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 611,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 665,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1388,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1340,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1221,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1755,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 708,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 736,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 422,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 513,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 678,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 699,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 484933,
            "range": "± 31843",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 587760,
            "range": "± 20963",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 587120,
            "range": "± 2500",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23337251,
            "range": "± 678115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3769,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 17875,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6168,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 23782,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 20648,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 46737,
            "range": "± 525",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3804,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 618,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2211773,
            "range": "± 6903",
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
          "id": "83755bf936d25129d280112543207b8062d596dc",
          "message": "Refine doc comments.",
          "timestamp": "2022-03-01T15:34:15+08:00",
          "tree_id": "6bffb0259112b41521ab8b0e04511cbe31316038",
          "url": "https://github.com/schungx/rhai/commit/83755bf936d25129d280112543207b8062d596dc"
        },
        "date": 1646143207882,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 962084,
            "range": "± 86869",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 188,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 178,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 787,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1684,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1714,
            "range": "± 205",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8661942,
            "range": "± 894664",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 646,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 702,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 19358,
            "range": "± 2970",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 19506,
            "range": "± 2798",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 24385,
            "range": "± 3036",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 688,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1113,
            "range": "± 184",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 128,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 130,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 127,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2531202,
            "range": "± 340364",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4178814,
            "range": "± 510606",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3608353,
            "range": "± 484524",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 27300,
            "range": "± 3275",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9475,
            "range": "± 1445",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2816,
            "range": "± 411",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2832,
            "range": "± 316",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 586,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 659,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1466,
            "range": "± 271",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1380,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1248,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1803,
            "range": "± 209",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 686,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 703,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 395,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 479,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 651,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 754,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 475182,
            "range": "± 55126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 561619,
            "range": "± 62007",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 565447,
            "range": "± 76693",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24053814,
            "range": "± 3112030",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3620,
            "range": "± 636",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 17332,
            "range": "± 2246",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6166,
            "range": "± 894",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 22533,
            "range": "± 2712",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 20201,
            "range": "± 3571",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 43390,
            "range": "± 5691",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3481,
            "range": "± 428",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 603,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2138337,
            "range": "± 319982",
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
          "id": "0e9a16e437b0cbe7504a58593241a991d3e60f0a",
          "message": "Add checks for is_empty.",
          "timestamp": "2022-03-03T13:02:57+08:00",
          "tree_id": "4baee4426a6dd71d418271e9b6eecea23438032f",
          "url": "https://github.com/schungx/rhai/commit/0e9a16e437b0cbe7504a58593241a991d3e60f0a"
        },
        "date": 1646284616354,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 914867,
            "range": "± 152774",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 198,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 171,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 761,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1498,
            "range": "± 304",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1555,
            "range": "± 305",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8107228,
            "range": "± 947374",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 704,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 791,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 20008,
            "range": "± 29357",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 19624,
            "range": "± 28867",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 24865,
            "range": "± 18472",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 679,
            "range": "± 194",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1105,
            "range": "± 318",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 113,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 122,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 117,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2588774,
            "range": "± 433192",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4717675,
            "range": "± 983008",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 4021143,
            "range": "± 847401",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 27489,
            "range": "± 3526",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 10240,
            "range": "± 1253",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2836,
            "range": "± 2288",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 3044,
            "range": "± 617",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 646,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 661,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1531,
            "range": "± 246",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1444,
            "range": "± 530",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1335,
            "range": "± 280",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1923,
            "range": "± 712",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 757,
            "range": "± 313",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 749,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 426,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 540,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 681,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 725,
            "range": "± 171",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 494124,
            "range": "± 100723",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 559925,
            "range": "± 103958",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 583319,
            "range": "± 65818",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25808702,
            "range": "± 2922018",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3425,
            "range": "± 1049",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 16367,
            "range": "± 4159",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6045,
            "range": "± 1455",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 23326,
            "range": "± 3756",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 19114,
            "range": "± 4822",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 43911,
            "range": "± 5384",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3509,
            "range": "± 598",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 593,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2121878,
            "range": "± 208127",
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
          "id": "0335035b0f220862f4615ff32295023bd6a8f8cd",
          "message": "Fix bug with eager optimization of method calls.",
          "timestamp": "2022-03-04T12:22:44+08:00",
          "tree_id": "ea9229a822c3d109fda9e0f300f75f082d695ed5",
          "url": "https://github.com/schungx/rhai/commit/0335035b0f220862f4615ff32295023bd6a8f8cd"
        },
        "date": 1646368460426,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 945293,
            "range": "± 159315",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 186,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 180,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 834,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1766,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1803,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8500287,
            "range": "± 21020",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 683,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 721,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 20300,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 19585,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 24718,
            "range": "± 254",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 638,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1222,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 131,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 131,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 131,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2537082,
            "range": "± 5426",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4310942,
            "range": "± 8057",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3724329,
            "range": "± 13358",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 26390,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 10037,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2939,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2995,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 611,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 688,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1410,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1374,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1245,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1775,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 723,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 714,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 425,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 527,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 699,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 712,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 486817,
            "range": "± 3362",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 575672,
            "range": "± 3381",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 571312,
            "range": "± 3364",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23861359,
            "range": "± 630416",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3341,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 17076,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5733,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 22662,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 19858,
            "range": "± 215",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 43863,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3661,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 573,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2171142,
            "range": "± 2366",
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
          "id": "e06c2b2abb0a894530a2b948a388b5b60ed120d4",
          "message": "Remove constants in function call expressions.",
          "timestamp": "2022-03-05T12:06:47+08:00",
          "tree_id": "0235cfc2effa4bb98caf7e14a5bcd2de1e9908d4",
          "url": "https://github.com/schungx/rhai/commit/e06c2b2abb0a894530a2b948a388b5b60ed120d4"
        },
        "date": 1646453969814,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 965119,
            "range": "± 98110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 192,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 183,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 792,
            "range": "± 367",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1864,
            "range": "± 281",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1910,
            "range": "± 365",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 9070259,
            "range": "± 1336384",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 714,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 777,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 20046,
            "range": "± 5685",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 19107,
            "range": "± 6072",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 24363,
            "range": "± 4197",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 672,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1218,
            "range": "± 798",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 130,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 131,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 130,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2703652,
            "range": "± 357639",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4769827,
            "range": "± 457978",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 4246614,
            "range": "± 528884",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 27340,
            "range": "± 3218",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 10223,
            "range": "± 2144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2763,
            "range": "± 319",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2716,
            "range": "± 431",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 626,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 660,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1583,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1475,
            "range": "± 300",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1334,
            "range": "± 218",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1800,
            "range": "± 554",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 700,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 728,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 432,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 507,
            "range": "± 705",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 697,
            "range": "± 714",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 735,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 501779,
            "range": "± 81086",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 644321,
            "range": "± 156314",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 610305,
            "range": "± 69500",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24883413,
            "range": "± 2216463",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3481,
            "range": "± 469",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 16266,
            "range": "± 4305",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5896,
            "range": "± 841",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 22543,
            "range": "± 3040",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 19125,
            "range": "± 8431",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 43638,
            "range": "± 8099",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3603,
            "range": "± 522",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 600,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2225899,
            "range": "± 351472",
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
          "id": "8bda8c64df50a3af7844fd174a334e889fa179fb",
          "message": "Refine data structures",
          "timestamp": "2022-03-05T17:57:23+08:00",
          "tree_id": "99db5b94de290f8efb5d0b3a0eee1f628fbc9609",
          "url": "https://github.com/schungx/rhai/commit/8bda8c64df50a3af7844fd174a334e889fa179fb"
        },
        "date": 1646475671488,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 971199,
            "range": "± 25833",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 189,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 180,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 846,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1966,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2001,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 9001359,
            "range": "± 158855",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 737,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 789,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 19577,
            "range": "± 528",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 19300,
            "range": "± 840",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 24260,
            "range": "± 625",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 698,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1208,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 135,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 135,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 135,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2710188,
            "range": "± 60217",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4790895,
            "range": "± 69808",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 4215389,
            "range": "± 89132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 28201,
            "range": "± 1244",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 10520,
            "range": "± 547",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 3020,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 3065,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 639,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 667,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1460,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1439,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1313,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1869,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 751,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 738,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 422,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 522,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 705,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 734,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 516669,
            "range": "± 20793",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 634341,
            "range": "± 7375",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 623471,
            "range": "± 33895",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23877484,
            "range": "± 586621",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3344,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 16826,
            "range": "± 522",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5815,
            "range": "± 227",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 22192,
            "range": "± 660",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 19393,
            "range": "± 1077",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 44674,
            "range": "± 2579",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3668,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 578,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2242928,
            "range": "± 53131",
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
          "id": "165fbbc855b2a1e7a5cdf3a6aa4137bed8c7feeb",
          "message": "Fix no_module builds.",
          "timestamp": "2022-03-05T18:32:50+08:00",
          "tree_id": "773be966dba34a78a81d075e07bbadbc95a19f73",
          "url": "https://github.com/schungx/rhai/commit/165fbbc855b2a1e7a5cdf3a6aa4137bed8c7feeb"
        },
        "date": 1646540546550,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 957137,
            "range": "± 41411",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 189,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 172,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 819,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1947,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2013,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8799900,
            "range": "± 446633",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 754,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 790,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 19869,
            "range": "± 795",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 19620,
            "range": "± 698",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 24454,
            "range": "± 1509",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 688,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1179,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 143,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 144,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 142,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2663985,
            "range": "± 177883",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4624423,
            "range": "± 300494",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3875655,
            "range": "± 390599",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 27305,
            "range": "± 1920",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 10403,
            "range": "± 939",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2958,
            "range": "± 222",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 3032,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 604,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 645,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1441,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1405,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1263,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1748,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 722,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 721,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 419,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 520,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 694,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 719,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 508541,
            "range": "± 44679",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 629584,
            "range": "± 36314",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 617633,
            "range": "± 20734",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23906264,
            "range": "± 723167",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3313,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 16741,
            "range": "± 1184",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5812,
            "range": "± 276",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 21786,
            "range": "± 1017",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 19008,
            "range": "± 1063",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 44308,
            "range": "± 2500",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3616,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 578,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2258263,
            "range": "± 79740",
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
          "id": "1e4abd012c052a362fc2753a981e55c0ad90d3b2",
          "message": "Minor refactor.",
          "timestamp": "2022-03-09T09:25:55+08:00",
          "tree_id": "442828f5b8c81319a30c11f91ccecb6842c3a14b",
          "url": "https://github.com/schungx/rhai/commit/1e4abd012c052a362fc2753a981e55c0ad90d3b2"
        },
        "date": 1646790072934,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 957616,
            "range": "± 89996",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 186,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 180,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 824,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1949,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2008,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8933549,
            "range": "± 26272",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 741,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 789,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 19569,
            "range": "± 217",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 19117,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 24289,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 686,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1197,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 136,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 136,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 135,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2686246,
            "range": "± 2526",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4721287,
            "range": "± 18890",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 4136146,
            "range": "± 8827",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 28171,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 10448,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 3085,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 3088,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 617,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 669,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1461,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1498,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1394,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1879,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 760,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 745,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 422,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 522,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 711,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 727,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 515045,
            "range": "± 4877",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 636244,
            "range": "± 3485",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 625143,
            "range": "± 3098",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24201911,
            "range": "± 200304",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3402,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 17378,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5802,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 22798,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 19813,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 44844,
            "range": "± 726",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3633,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 579,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2265167,
            "range": "± 9123",
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
          "id": "963af0653e2672cc5784928bfb54c7e07ab75a6a",
          "message": "Fix sleep function.",
          "timestamp": "2022-03-09T09:41:53+08:00",
          "tree_id": "2966b9c0a5e62d5e9f8cb6546d38297aa24b842a",
          "url": "https://github.com/schungx/rhai/commit/963af0653e2672cc5784928bfb54c7e07ab75a6a"
        },
        "date": 1646831793584,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 949031,
            "range": "± 152066",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 170,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 168,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 746,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1845,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1884,
            "range": "± 323",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8745426,
            "range": "± 1579755",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 688,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 754,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17987,
            "range": "± 3198",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 18516,
            "range": "± 4574",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 23943,
            "range": "± 4918",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 630,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1132,
            "range": "± 236",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 132,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 130,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 121,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2557455,
            "range": "± 272517",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4464338,
            "range": "± 442158",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3746426,
            "range": "± 469881",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 26194,
            "range": "± 2554",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9593,
            "range": "± 1233",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2794,
            "range": "± 430",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2827,
            "range": "± 407",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 572,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 618,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1363,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1408,
            "range": "± 249",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1224,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1669,
            "range": "± 305",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 692,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 691,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 407,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 480,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 652,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 667,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 468389,
            "range": "± 76531",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 579728,
            "range": "± 129800",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 554086,
            "range": "± 87979",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21755469,
            "range": "± 2370942",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3038,
            "range": "± 238",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14865,
            "range": "± 2092",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5107,
            "range": "± 620",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19544,
            "range": "± 2906",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17420,
            "range": "± 2448",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 40887,
            "range": "± 3808",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3215,
            "range": "± 293",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 515,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2026155,
            "range": "± 213444",
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
          "id": "a4fbb297409be3683855149aa35597f32633f8eb",
          "message": "Add .gitattributes.",
          "timestamp": "2022-03-14T09:34:28+08:00",
          "tree_id": "e0e0c29345d90ba2cca2cb5fa57c53fa620f5ac4",
          "url": "https://github.com/schungx/rhai/commit/a4fbb297409be3683855149aa35597f32633f8eb"
        },
        "date": 1647222340418,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 867115,
            "range": "± 101551",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 178,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 176,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 715,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1699,
            "range": "± 387",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1691,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8332536,
            "range": "± 744914",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 656,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 701,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17087,
            "range": "± 2195",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16567,
            "range": "± 2072",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 22261,
            "range": "± 2035",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 583,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1052,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 114,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 116,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 115,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2441405,
            "range": "± 196516",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4405207,
            "range": "± 813655",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3671823,
            "range": "± 332503",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24793,
            "range": "± 3753",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8906,
            "range": "± 1036",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2802,
            "range": "± 351",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2949,
            "range": "± 374",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 601,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 624,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1339,
            "range": "± 204",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1253,
            "range": "± 257",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1180,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1650,
            "range": "± 337",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 632,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 624,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 374,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 478,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 608,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 668,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 461756,
            "range": "± 37994",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 563923,
            "range": "± 102050",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 560034,
            "range": "± 53923",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23253739,
            "range": "± 2306424",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3038,
            "range": "± 311",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14274,
            "range": "± 1909",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5240,
            "range": "± 553",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20065,
            "range": "± 3374",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17464,
            "range": "± 2384",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 39849,
            "range": "± 7662",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3214,
            "range": "± 227",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 506,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2026903,
            "range": "± 214859",
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
          "id": "63716759bedc91303d8d2e41d50aa5b57abf13f3",
          "message": "Fix typo.",
          "timestamp": "2022-03-14T11:28:52+08:00",
          "tree_id": "b17cdd09ff82c61e04d45d39180eae860c308265",
          "url": "https://github.com/schungx/rhai/commit/63716759bedc91303d8d2e41d50aa5b57abf13f3"
        },
        "date": 1647229534513,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 1008616,
            "range": "± 182824",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 206,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 203,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 866,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2174,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2169,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 9683844,
            "range": "± 17295",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 785,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 836,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 20304,
            "range": "± 204",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 19847,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 25191,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 761,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1329,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 141,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 141,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 141,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2855095,
            "range": "± 11030",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 5294729,
            "range": "± 16586",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 4430306,
            "range": "± 22663",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 29257,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 11194,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 3182,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 3244,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 649,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 715,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1521,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1490,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1401,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1991,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 780,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 770,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 451,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 554,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 770,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 783,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 568064,
            "range": "± 1830",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 672987,
            "range": "± 11522",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 666247,
            "range": "± 11885",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25696639,
            "range": "± 496689",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3644,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 17582,
            "range": "± 621",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6093,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 22872,
            "range": "± 760",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 19920,
            "range": "± 186",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 46559,
            "range": "± 755",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3871,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 623,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2418864,
            "range": "± 145211",
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
          "id": "61ef115ecbb0ea255ead12814c0e4cfa752539e3",
          "message": "Merge branch 'main' of https://github.com/rhaiscript/rhai",
          "timestamp": "2022-03-18T14:03:29+08:00",
          "tree_id": "62145cbebeea3be408caea2b894d9305c17ab485",
          "url": "https://github.com/schungx/rhai/commit/61ef115ecbb0ea255ead12814c0e4cfa752539e3"
        },
        "date": 1647584075216,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 824934,
            "range": "± 85810",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 151,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 143,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 712,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1802,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1828,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7759415,
            "range": "± 14904",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 665,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 719,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16796,
            "range": "± 283",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16751,
            "range": "± 203",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 21020,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 570,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1017,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 118,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 119,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 118,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2255798,
            "range": "± 6303",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4056007,
            "range": "± 6709",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3534437,
            "range": "± 7888",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24277,
            "range": "± 229",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8935,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2635,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2679,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 537,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 586,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1361,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1364,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1112,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1601,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 643,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 648,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 362,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 476,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 611,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 640,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 432794,
            "range": "± 1758",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 542579,
            "range": "± 4002",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 539929,
            "range": "± 3335",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21711976,
            "range": "± 79329",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3044,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14704,
            "range": "± 459",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5098,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18813,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16419,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35949,
            "range": "± 500",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3333,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 528,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1913878,
            "range": "± 7335",
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
          "id": "d01a6d428f0f770668848f86c83aa77047ba3875",
          "message": "Fix tests.",
          "timestamp": "2022-03-18T17:11:52+08:00",
          "tree_id": "067d9bae31588c7eb1471939340297a32b4eb7f1",
          "url": "https://github.com/schungx/rhai/commit/d01a6d428f0f770668848f86c83aa77047ba3875"
        },
        "date": 1647596060298,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 866474,
            "range": "± 98845",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 160,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 159,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 805,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1648,
            "range": "± 256",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1714,
            "range": "± 293",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8334143,
            "range": "± 541091",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 632,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 684,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16649,
            "range": "± 3085",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16836,
            "range": "± 2903",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 22873,
            "range": "± 6238",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 576,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1092,
            "range": "± 275",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 113,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 114,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 114,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2707294,
            "range": "± 224204",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4580848,
            "range": "± 439353",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3980808,
            "range": "± 398346",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 27603,
            "range": "± 3874",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9660,
            "range": "± 1706",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2953,
            "range": "± 1326",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2708,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 532,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 583,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1346,
            "range": "± 182",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1285,
            "range": "± 321",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1135,
            "range": "± 215",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1638,
            "range": "± 273",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 663,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 655,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 371,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 492,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 634,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 687,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 461479,
            "range": "± 41177",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 549977,
            "range": "± 93250",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 545207,
            "range": "± 84746",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23379611,
            "range": "± 2167228",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3023,
            "range": "± 209",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14229,
            "range": "± 2493",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5119,
            "range": "± 663",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20264,
            "range": "± 1241",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16618,
            "range": "± 3157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 37869,
            "range": "± 9471",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3137,
            "range": "± 445",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 576,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2008304,
            "range": "± 152052",
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
          "id": "fefa633cf0cfc48f46fa32d84d7282e34e36357e",
          "message": "Add type alias support for plugin modules.",
          "timestamp": "2022-03-19T09:43:18+08:00",
          "tree_id": "876181ce7f258e721a0d36e4317c53d88bf785ed",
          "url": "https://github.com/schungx/rhai/commit/fefa633cf0cfc48f46fa32d84d7282e34e36357e"
        },
        "date": 1647655063298,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 1003923,
            "range": "± 138312",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 219,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 217,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 853,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1872,
            "range": "± 466",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2046,
            "range": "± 485",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 9964341,
            "range": "± 1149226",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 762,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 790,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 20387,
            "range": "± 2678",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 20834,
            "range": "± 2833",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_deeply_nested",
            "value": 25213,
            "range": "± 8803",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 687,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1253,
            "range": "± 195",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 140,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 138,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 142,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2843278,
            "range": "± 346428",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4881154,
            "range": "± 642916",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 4177379,
            "range": "± 568583",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 28480,
            "range": "± 7442",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 10055,
            "range": "± 2161",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2918,
            "range": "± 530",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2996,
            "range": "± 668",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 617,
            "range": "± 191",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 720,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1550,
            "range": "± 268",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1518,
            "range": "± 358",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1291,
            "range": "± 249",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1734,
            "range": "± 495",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 742,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 738,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 428,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 528,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 690,
            "range": "± 223",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 678,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 552194,
            "range": "± 158561",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 594063,
            "range": "± 103045",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 604912,
            "range": "± 82016",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25075929,
            "range": "± 4170531",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3501,
            "range": "± 850",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 16908,
            "range": "± 1714",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6020,
            "range": "± 888",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20815,
            "range": "± 3770",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 18777,
            "range": "± 3600",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 45097,
            "range": "± 6991",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3473,
            "range": "± 734",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 619,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2316029,
            "range": "± 367571",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}