window.BENCHMARK_DATA = {
  "lastUpdate": 1594640618705,
  "repoUrl": "https://github.com/schungx/rhai",
  "entries": {
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "175c3ccaec6c7c8a0247f87beda28bda5ba06437",
          "message": "OOP support.",
          "timestamp": "2020-06-26T10:39:18+08:00",
          "tree_id": "eb3171f32c5e285a996519673da09eeb5230e707",
          "url": "https://github.com/schungx/rhai/commit/175c3ccaec6c7c8a0247f87beda28bda5ba06437"
        },
        "date": 1593139334884,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 103568,
            "range": "± 10663",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 92,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 83,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 289,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2434,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2230,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6167050,
            "range": "± 555183",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 662,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 690,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15914,
            "range": "± 1476",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12322,
            "range": "± 1331",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 298,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 529,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 63,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 794,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 58,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1784029,
            "range": "± 271133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2684848,
            "range": "± 200835",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2279394,
            "range": "± 160591",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2647,
            "range": "± 194",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2695,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 456,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 483,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 782,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 765,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 275,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 272,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 207,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 302,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 534,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 383,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 394236,
            "range": "± 39612",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21207378,
            "range": "± 2329162",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2981,
            "range": "± 298",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12560,
            "range": "± 1643",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3878,
            "range": "± 390",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14413,
            "range": "± 619",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13847,
            "range": "± 1919",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34021,
            "range": "± 881",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2411,
            "range": "± 490",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 361,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1570331,
            "range": "± 107405",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "aac04a5e537941ebc1687122cb6e610f60e65581",
          "message": "Remove modules from Scope and use separate stack.",
          "timestamp": "2020-06-27T23:56:24+08:00",
          "tree_id": "465a92535d0032f3747a67a78b1f58f8b12b53a3",
          "url": "https://github.com/schungx/rhai/commit/aac04a5e537941ebc1687122cb6e610f60e65581"
        },
        "date": 1593274179676,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 85589,
            "range": "± 17095",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 75,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 73,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 243,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2299,
            "range": "± 433",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2158,
            "range": "± 361",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5651108,
            "range": "± 771618",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 632,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 705,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 12073,
            "range": "± 5455",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 9878,
            "range": "± 2418",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 247,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 485,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 54,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 673,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 51,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1492709,
            "range": "± 324295",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2350916,
            "range": "± 437008",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1920129,
            "range": "± 383075",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2269,
            "range": "± 415",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2253,
            "range": "± 483",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 391,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 401,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 678,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 671,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 245,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 237,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 183,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 265,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 470,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 328,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 320120,
            "range": "± 61582",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19134162,
            "range": "± 2681366",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2435,
            "range": "± 393",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10388,
            "range": "± 2770",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3224,
            "range": "± 489",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 11985,
            "range": "± 2998",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 11322,
            "range": "± 3345",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 27612,
            "range": "± 5489",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1867,
            "range": "± 402",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 298,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1326754,
            "range": "± 317618",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "063851a6adda77e327a7d28a33fa6f0bb76cd0b2",
          "message": "Merge branch 'tokenizer'",
          "timestamp": "2020-06-28T15:51:37+08:00",
          "tree_id": "8d8ec98b54926d6f0f6a0003febb89cd7eba4e16",
          "url": "https://github.com/schungx/rhai/commit/063851a6adda77e327a7d28a33fa6f0bb76cd0b2"
        },
        "date": 1593330918376,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 101069,
            "range": "± 6923",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 92,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 91,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 280,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2433,
            "range": "± 229",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2219,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6308140,
            "range": "± 637231",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 659,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 687,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15929,
            "range": "± 4412",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12324,
            "range": "± 758",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 307,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 543,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 67,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 812,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 64,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1807634,
            "range": "± 189808",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2768093,
            "range": "± 214668",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2286468,
            "range": "± 98869",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2643,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2731,
            "range": "± 449",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 461,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 487,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 826,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 803,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 296,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 292,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 216,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 314,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 567,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 387,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 395743,
            "range": "± 22932",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21913676,
            "range": "± 1657449",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2909,
            "range": "± 297",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12720,
            "range": "± 848",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3955,
            "range": "± 414",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14612,
            "range": "± 1489",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14174,
            "range": "± 1664",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34546,
            "range": "± 2179",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2497,
            "range": "± 246",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 367,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1572721,
            "range": "± 155113",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "d6a08be2231b8f95809f689c1ad7867b6ac8ef61",
          "message": "Refactor.",
          "timestamp": "2020-06-29T23:55:28+08:00",
          "tree_id": "7ef56ce0a3a24c8995bb64c86eb922935b0e8e01",
          "url": "https://github.com/schungx/rhai/commit/d6a08be2231b8f95809f689c1ad7867b6ac8ef61"
        },
        "date": 1593446371049,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 102238,
            "range": "± 67220",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 98,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 85,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 272,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2436,
            "range": "± 507",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2326,
            "range": "± 294",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6551828,
            "range": "± 690086",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 698,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 749,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15530,
            "range": "± 1887",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12524,
            "range": "± 1848",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 329,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 551,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 83,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 842,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 77,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2075402,
            "range": "± 157644",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2973456,
            "range": "± 198159",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2585537,
            "range": "± 317360",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2722,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2750,
            "range": "± 251",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 492,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 520,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 858,
            "range": "± 193",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 838,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 313,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 312,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 224,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 296,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 567,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 387,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 425518,
            "range": "± 28600",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22340613,
            "range": "± 2359905",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2866,
            "range": "± 350",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12192,
            "range": "± 1108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3892,
            "range": "± 618",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 13984,
            "range": "± 1557",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13548,
            "range": "± 2037",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34121,
            "range": "± 3642",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2469,
            "range": "± 300",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 340,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1716024,
            "range": "± 166218",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "e614790897346c368dd3e38f25c7a196b3d7fb28",
          "message": "Enable function pointers even under no_function.",
          "timestamp": "2020-06-30T18:34:58+08:00",
          "tree_id": "427458e3e15e5d852855b8f20a00355fa1670ee3",
          "url": "https://github.com/schungx/rhai/commit/e614790897346c368dd3e38f25c7a196b3d7fb28"
        },
        "date": 1593522225147,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 108003,
            "range": "± 18351",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 94,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 91,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 300,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2708,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2524,
            "range": "± 305",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6796964,
            "range": "± 834924",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 726,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 789,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16303,
            "range": "± 3411",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12334,
            "range": "± 1219",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 349,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 613,
            "range": "± 66",
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
            "value": 928,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 79,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2127069,
            "range": "± 176651",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3307386,
            "range": "± 334688",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2780803,
            "range": "± 359690",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2962,
            "range": "± 325",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2933,
            "range": "± 445",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 517,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 560,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 917,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 892,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 332,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 332,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 250,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 326,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 624,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 410,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 452963,
            "range": "± 37424",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25267226,
            "range": "± 3884857",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3106,
            "range": "± 635",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12711,
            "range": "± 1996",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4022,
            "range": "± 555",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14912,
            "range": "± 2538",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14570,
            "range": "± 2473",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35294,
            "range": "± 4421",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2545,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 398,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1844264,
            "range": "± 238592",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "467b109c23d4283392f17ba6acccc21855d8d05e",
          "message": "Move benchmark.yml to correct location.",
          "timestamp": "2020-07-04T15:43:48+08:00",
          "tree_id": "647d06f4aaa49d768f1c9fe4f5ab6f709191b8bd",
          "url": "https://github.com/schungx/rhai/commit/467b109c23d4283392f17ba6acccc21855d8d05e"
        },
        "date": 1593848892663,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 99479,
            "range": "± 7618",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 92,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 87,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 268,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2441,
            "range": "± 308",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2265,
            "range": "± 278",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6578212,
            "range": "± 728762",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 691,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 733,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15429,
            "range": "± 1618",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12099,
            "range": "± 800",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 327,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 592,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 81,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 857,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 78,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2051134,
            "range": "± 193715",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2961468,
            "range": "± 255916",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2549822,
            "range": "± 198759",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2675,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2677,
            "range": "± 465",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 507,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 512,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 824,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 829,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 315,
            "range": "± 257",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 301,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 229,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 293,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 561,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 388,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 432282,
            "range": "± 36223",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22740466,
            "range": "± 1867644",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2987,
            "range": "± 262",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12376,
            "range": "± 1155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4122,
            "range": "± 427",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14345,
            "range": "± 2599",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13505,
            "range": "± 992",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34145,
            "range": "± 2005",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2443,
            "range": "± 345",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 379,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1720705,
            "range": "± 118304",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "d626bf9f5bacfd8d8fb082b03f12fe33c60055b8",
          "message": "Refine no_function feature.",
          "timestamp": "2020-07-04T16:21:15+08:00",
          "tree_id": "dbfeb1a2fd830f941f26d2adcbe871c72cbb4b1f",
          "url": "https://github.com/schungx/rhai/commit/d626bf9f5bacfd8d8fb082b03f12fe33c60055b8"
        },
        "date": 1593851020220,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 103770,
            "range": "± 8512",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 95,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 94,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 281,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2610,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2421,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7037805,
            "range": "± 389246",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 716,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 764,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15981,
            "range": "± 2585",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12742,
            "range": "± 403",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 335,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 585,
            "range": "± 62",
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
            "value": 882,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 81,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2119946,
            "range": "± 108557",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3078569,
            "range": "± 105003",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2608947,
            "range": "± 122696",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2814,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2879,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 506,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 548,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 885,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 859,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 313,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 311,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 233,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 305,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 578,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 394,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 441856,
            "range": "± 21512",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23512821,
            "range": "± 871610",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2946,
            "range": "± 196",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12751,
            "range": "± 1527",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3947,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14542,
            "range": "± 1008",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14117,
            "range": "± 2127",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35687,
            "range": "± 2144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2529,
            "range": "± 1058",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 367,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1766464,
            "range": "± 90592",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a8b5a7f6b34d9fddae4b57aa38842ffaa5ae8cb6",
          "message": "Merge pull request #15 from alvinhochun/serde\n\nAdd `serde` example",
          "timestamp": "2020-07-04T22:39:15+08:00",
          "tree_id": "9b519ef74b7b212346069aab72e8c4985f32b5d4",
          "url": "https://github.com/schungx/rhai/commit/a8b5a7f6b34d9fddae4b57aa38842ffaa5ae8cb6"
        },
        "date": 1593873793959,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 97946,
            "range": "± 9006",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 89,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 87,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 269,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2462,
            "range": "± 370",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2272,
            "range": "± 369",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6243593,
            "range": "± 715989",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 677,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 720,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15596,
            "range": "± 1279",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12102,
            "range": "± 1163",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 306,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 582,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 80,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 840,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 77,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1975057,
            "range": "± 162576",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2913257,
            "range": "± 290539",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2479869,
            "range": "± 157323",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2632,
            "range": "± 289",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2656,
            "range": "± 236",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 513,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 504,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 827,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 811,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 301,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 296,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 223,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 286,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 554,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 380,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 410697,
            "range": "± 38858",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21667558,
            "range": "± 2188552",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2768,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11980,
            "range": "± 1136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3763,
            "range": "± 470",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 13823,
            "range": "± 1525",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13404,
            "range": "± 940",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 32924,
            "range": "± 3836",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2392,
            "range": "± 282",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 349,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1680801,
            "range": "± 259850",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "936a3ff44aabb261f133ba780c4890159d4bba83",
          "message": "Add feature to disable symbols.",
          "timestamp": "2020-07-05T15:23:51+08:00",
          "tree_id": "63887e4cb44e18a72020fd76c9d185a931bbb148",
          "url": "https://github.com/schungx/rhai/commit/936a3ff44aabb261f133ba780c4890159d4bba83"
        },
        "date": 1593934151311,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 102823,
            "range": "± 15289",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 92,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 86,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 292,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2613,
            "range": "± 546",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2366,
            "range": "± 234",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6600805,
            "range": "± 773700",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 686,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 727,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15872,
            "range": "± 2363",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12208,
            "range": "± 1487",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 332,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 562,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 78,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 883,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 74,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1998791,
            "range": "± 497589",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3141289,
            "range": "± 241618",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2642722,
            "range": "± 243019",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2744,
            "range": "± 622",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2772,
            "range": "± 352",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 486,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 517,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 907,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 874,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 332,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 317,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 222,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 300,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 579,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 387,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 430078,
            "range": "± 54112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23977342,
            "range": "± 2169603",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2888,
            "range": "± 270",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11746,
            "range": "± 1225",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3876,
            "range": "± 462",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 13567,
            "range": "± 1873",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13188,
            "range": "± 1804",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 33395,
            "range": "± 3930",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2351,
            "range": "± 310",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 375,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1655659,
            "range": "± 236347",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "e390dd73e6f759b7be9088942295aa4b370efca5",
          "message": "Add custom operators.",
          "timestamp": "2020-07-05T17:41:45+08:00",
          "tree_id": "55dc1b5a2ad747760cda35581ad5043a9569a5ff",
          "url": "https://github.com/schungx/rhai/commit/e390dd73e6f759b7be9088942295aa4b370efca5"
        },
        "date": 1593942374672,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 97985,
            "range": "± 16931",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 91,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 84,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 266,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2487,
            "range": "± 395",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2305,
            "range": "± 281",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6463500,
            "range": "± 842964",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 681,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 738,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15453,
            "range": "± 2054",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12836,
            "range": "± 2302",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 334,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 573,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 82,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 853,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 81,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2056888,
            "range": "± 196421",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3059842,
            "range": "± 420776",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2486023,
            "range": "± 317533",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2786,
            "range": "± 361",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2763,
            "range": "± 495",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 500,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 546,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 833,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 807,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 302,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 292,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 231,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 289,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 561,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 394,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 441285,
            "range": "± 61373",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22505221,
            "range": "± 2206277",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3064,
            "range": "± 547",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12803,
            "range": "± 1637",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3917,
            "range": "± 659",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14061,
            "range": "± 2746",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13798,
            "range": "± 1930",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34362,
            "range": "± 4778",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2550,
            "range": "± 463",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 368,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1692386,
            "range": "± 232280",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "a27f89b524f9fbfb0e19ef30cfbcc6fababc0a22",
          "message": "Add new register_fn_raw API.",
          "timestamp": "2020-07-05T23:08:44+08:00",
          "tree_id": "d86296325dc7962d75751e1549ab7942d720929c",
          "url": "https://github.com/schungx/rhai/commit/a27f89b524f9fbfb0e19ef30cfbcc6fababc0a22"
        },
        "date": 1593962002150,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 92573,
            "range": "± 23907",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 79,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 79,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 285,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2487,
            "range": "± 964",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2333,
            "range": "± 523",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6495144,
            "range": "± 952425",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 621,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 677,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 13995,
            "range": "± 3553",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 11294,
            "range": "± 2555",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 293,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 572,
            "range": "± 150",
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
            "value": 893,
            "range": "± 191",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 59,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1779459,
            "range": "± 331995",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2708929,
            "range": "± 614595",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2300879,
            "range": "± 499775",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2698,
            "range": "± 781",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2683,
            "range": "± 566",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 439,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 478,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 823,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 743,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 287,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 274,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 195,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 277,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 531,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 347,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 390974,
            "range": "± 100019",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21251826,
            "range": "± 3043057",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2780,
            "range": "± 657",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11355,
            "range": "± 2493",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3644,
            "range": "± 916",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 13265,
            "range": "± 3461",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13020,
            "range": "± 2953",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 30495,
            "range": "± 5924",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2359,
            "range": "± 439",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 398,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1606333,
            "range": "± 407738",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "3e45d5d9a5c91c719748ed15a0054437095731aa",
          "message": "Refine docs and API.",
          "timestamp": "2020-07-06T13:01:57+08:00",
          "tree_id": "6a534f0fafa024968b3f6445f5188d0f0cb0641b",
          "url": "https://github.com/schungx/rhai/commit/3e45d5d9a5c91c719748ed15a0054437095731aa"
        },
        "date": 1594011843918,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 103813,
            "range": "± 13121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 95,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 104,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 280,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2585,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2430,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6736849,
            "range": "± 1799082",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 714,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 776,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17462,
            "range": "± 1664",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13051,
            "range": "± 5759",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 363,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 636,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 83,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 958,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 80,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2034597,
            "range": "± 665466",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2956664,
            "range": "± 225220",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2495800,
            "range": "± 142695",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2809,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2881,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 496,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 549,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 901,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 888,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 313,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 308,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 230,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 298,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 567,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 396,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 440603,
            "range": "± 8961",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24153896,
            "range": "± 1927792",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3068,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12956,
            "range": "± 323",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4023,
            "range": "± 662",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15215,
            "range": "± 4547",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 18536,
            "range": "± 5477",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36357,
            "range": "± 2349",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2603,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 395,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1797481,
            "range": "± 134629",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "de934e62549ec597f35872f1db41b5dfd745c3ee",
          "message": "Merge pull request #16 from alvinhochun/serde\n\nHandle deserialization of all integer and impl. serde for all enum types",
          "timestamp": "2020-07-06T21:30:42+08:00",
          "tree_id": "55d5dbe2724b0a3c0984925d5359074cf53573ab",
          "url": "https://github.com/schungx/rhai/commit/de934e62549ec597f35872f1db41b5dfd745c3ee"
        },
        "date": 1594042339519,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 86762,
            "range": "± 842",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 79,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 87,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 232,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2223,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2061,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5534111,
            "range": "± 7133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 599,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 649,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14595,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 10913,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 295,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 520,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 61,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 750,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 59,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1670700,
            "range": "± 2927",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2438405,
            "range": "± 2388",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2073395,
            "range": "± 1675",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2376,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2452,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 416,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 451,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 752,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 738,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 260,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 256,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 190,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 248,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 475,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 328,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 367080,
            "range": "± 754",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 20491424,
            "range": "± 51447",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2580,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10931,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3423,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 12565,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 12573,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 30537,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2173,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 325,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1478860,
            "range": "± 10780",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "f5ff759fcc2255837e2b9b8eda09b364c21e86fe",
          "message": "Merge branch 'master' of https://github.com/schungx/rhai",
          "timestamp": "2020-07-06T21:31:03+08:00",
          "tree_id": "f4df606540c68942bc81aae97de9c60ac2b59afa",
          "url": "https://github.com/schungx/rhai/commit/f5ff759fcc2255837e2b9b8eda09b364c21e86fe"
        },
        "date": 1594042411413,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 103980,
            "range": "± 10805",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 95,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 92,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 280,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2582,
            "range": "± 443",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2436,
            "range": "± 451",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6845411,
            "range": "± 399839",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 713,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 827,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17548,
            "range": "± 868",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12880,
            "range": "± 3284",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 353,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 629,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 74,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 920,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 71,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2028189,
            "range": "± 176595",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3029008,
            "range": "± 270680",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2531809,
            "range": "± 203496",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2797,
            "range": "± 275",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2842,
            "range": "± 411",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 500,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 540,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 938,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 897,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 323,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 316,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 226,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 312,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 567,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 418,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 452553,
            "range": "± 46347",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24427112,
            "range": "± 2185031",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3108,
            "range": "± 208",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13013,
            "range": "± 2710",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3994,
            "range": "± 692",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14995,
            "range": "± 3055",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15316,
            "range": "± 2427",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36420,
            "range": "± 5770",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2682,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 382,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1792299,
            "range": "± 266832",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "2b3f10f2c5f839cb869b3188443ff31f7690b412",
          "message": "Define functions anywhere during parsing.",
          "timestamp": "2020-07-06T22:57:50+08:00",
          "tree_id": "0135717891b4c064b8e24451436ba5573f6ec07d",
          "url": "https://github.com/schungx/rhai/commit/2b3f10f2c5f839cb869b3188443ff31f7690b412"
        },
        "date": 1594047951105,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 103339,
            "range": "± 1882",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 95,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 103,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 278,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2569,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2437,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6718094,
            "range": "± 609583",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 710,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 775,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17478,
            "range": "± 728",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12960,
            "range": "± 2560",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 355,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 632,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 74,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 906,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 70,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2046722,
            "range": "± 370057",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2959812,
            "range": "± 242710",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2550787,
            "range": "± 461233",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2793,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2855,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 497,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 543,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 907,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 894,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 314,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 312,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 229,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 297,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 572,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 394,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 445924,
            "range": "± 88491",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24167426,
            "range": "± 2213969",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3069,
            "range": "± 725",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12842,
            "range": "± 980",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4012,
            "range": "± 338",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14911,
            "range": "± 3168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14935,
            "range": "± 2754",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35677,
            "range": "± 998",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2708,
            "range": "± 4604",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 426,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1790504,
            "range": "± 59222",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "ff6d205c1dd198c701e8582d2ee3ab0924b9f1c7",
          "message": "Make Modules::set_raw_fn public.",
          "timestamp": "2020-07-07T22:59:23+08:00",
          "tree_id": "dd9bdf2ae5828f9766fd0dffda6b8059be20f97f",
          "url": "https://github.com/schungx/rhai/commit/ff6d205c1dd198c701e8582d2ee3ab0924b9f1c7"
        },
        "date": 1594134090791,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 86497,
            "range": "± 1269",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 81,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 85,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 232,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2196,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2065,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5616340,
            "range": "± 8388",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 594,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 650,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14590,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 10813,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 295,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 526,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 61,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 759,
            "range": "± 3",
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
            "value": 1683615,
            "range": "± 3088",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2446268,
            "range": "± 7471",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2086686,
            "range": "± 6233",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2356,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2421,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 416,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 457,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 756,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 741,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 262,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 260,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 192,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 249,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 494,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 328,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 368041,
            "range": "± 1615",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 20449618,
            "range": "± 72564",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2568,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10640,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3372,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 12440,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 12366,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 29726,
            "range": "± 277",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2167,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 330,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1480424,
            "range": "± 3699",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "703cc414b871651d7674941a9fd2a171dd35d9cf",
          "message": "Allow mutating a module-qualified function's first argument if it is a variable.",
          "timestamp": "2020-07-08T13:06:00+08:00",
          "tree_id": "9433617b0a66740b78f8d2c0e6c6126ea40cf13d",
          "url": "https://github.com/schungx/rhai/commit/703cc414b871651d7674941a9fd2a171dd35d9cf"
        },
        "date": 1594184976625,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 78150,
            "range": "± 12545",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 74,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 71,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 228,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1936,
            "range": "± 269",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1833,
            "range": "± 251",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5402838,
            "range": "± 1681136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 561,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 615,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 13336,
            "range": "± 2569",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 9606,
            "range": "± 1449",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 278,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 481,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 74,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 908,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 70,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2054329,
            "range": "± 90292",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2972539,
            "range": "± 220265",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2013915,
            "range": "± 297948",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2236,
            "range": "± 619",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2157,
            "range": "± 430",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 389,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 439,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 723,
            "range": "± 278",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 717,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 251,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 249,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 178,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 238,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 416,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 331,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 355719,
            "range": "± 105215",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 18580061,
            "range": "± 2474401",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2451,
            "range": "± 536",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10036,
            "range": "± 1558",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 2998,
            "range": "± 749",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 11412,
            "range": "± 2364",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 11838,
            "range": "± 2936",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 26370,
            "range": "± 3692",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2176,
            "range": "± 478",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 298,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1410063,
            "range": "± 223610",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "f36b4a69ae4ad6be03674c25d6297de3bc8058c3",
          "message": "FIXED - method calls inside dot chain.",
          "timestamp": "2020-07-09T22:21:07+08:00",
          "tree_id": "43731aa90ad54f8160648037a6cccc794770b20f",
          "url": "https://github.com/schungx/rhai/commit/f36b4a69ae4ad6be03674c25d6297de3bc8058c3"
        },
        "date": 1594304629562,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 103275,
            "range": "± 6981",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 97,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 91,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 282,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2619,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2443,
            "range": "± 450",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6990800,
            "range": "± 249121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 719,
            "range": "± 279",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 783,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17392,
            "range": "± 2599",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12685,
            "range": "± 4688",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 347,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 623,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 74,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 907,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 70,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2045066,
            "range": "± 415811",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3053824,
            "range": "± 356742",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2575803,
            "range": "± 205387",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2801,
            "range": "± 877",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2867,
            "range": "± 751",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 502,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 548,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 917,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 907,
            "range": "± 254",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 325,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 331,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 235,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 309,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 601,
            "range": "± 346",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 446,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 445394,
            "range": "± 26770",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24148755,
            "range": "± 2076697",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3509,
            "range": "± 237",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14065,
            "range": "± 1017",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4295,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15790,
            "range": "± 930",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16055,
            "range": "± 1664",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 39679,
            "range": "± 6219",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2849,
            "range": "± 431",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 421,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1832930,
            "range": "± 323390",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "2a8d63fd5f0e6fb3ca19a0584243c9292abae38a",
          "message": "Refine custom syntax.",
          "timestamp": "2020-07-11T15:09:17+08:00",
          "tree_id": "32a5b08e31d0c5bb16cc98edd8ab524346dcf67e",
          "url": "https://github.com/schungx/rhai/commit/2a8d63fd5f0e6fb3ca19a0584243c9292abae38a"
        },
        "date": 1594451528710,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 81989,
            "range": "± 13487",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 78,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 71,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 229,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2066,
            "range": "± 452",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1902,
            "range": "± 1077",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5416383,
            "range": "± 897022",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 557,
            "range": "± 326",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 577,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14608,
            "range": "± 2078",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 10706,
            "range": "± 3967",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 273,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 485,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 52,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 805,
            "range": "± 401",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 52,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1537553,
            "range": "± 206710",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2373910,
            "range": "± 374390",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2005718,
            "range": "± 267361",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2354,
            "range": "± 872",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2191,
            "range": "± 249",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 375,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 427,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 743,
            "range": "± 454",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 670,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 237,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 237,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 191,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 233,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 433,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 303,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 332660,
            "range": "± 69317",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19584740,
            "range": "± 2726956",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2337,
            "range": "± 497",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 9152,
            "range": "± 1519",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3019,
            "range": "± 559",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 11183,
            "range": "± 2658",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 11105,
            "range": "± 1489",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 25804,
            "range": "± 4905",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1881,
            "range": "± 253",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 294,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1396562,
            "range": "± 241547",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "8449f8c55e55401e6cf404b234f848c0a8ce0f3b",
          "message": "Make API chainable.",
          "timestamp": "2020-07-12T11:46:53+08:00",
          "tree_id": "fd0bb90ff6083cce08ba9b7a5edca41c0b2376db",
          "url": "https://github.com/schungx/rhai/commit/8449f8c55e55401e6cf404b234f848c0a8ce0f3b"
        },
        "date": 1594525762043,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 102318,
            "range": "± 3561",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 95,
            "range": "± 6",
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
            "value": 277,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2597,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2462,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6836835,
            "range": "± 295066",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 715,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 794,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17250,
            "range": "± 1709",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12800,
            "range": "± 3195",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 351,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 624,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 74,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 920,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 71,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2072629,
            "range": "± 236975",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3024199,
            "range": "± 215637",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2580953,
            "range": "± 174963",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2790,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2914,
            "range": "± 389",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 502,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 551,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 907,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 901,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 320,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 315,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 233,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 314,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 583,
            "range": "± 209",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 411,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 444533,
            "range": "± 56106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24217200,
            "range": "± 1538322",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3035,
            "range": "± 1324",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12625,
            "range": "± 864",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4003,
            "range": "± 245",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14561,
            "range": "± 994",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14924,
            "range": "± 1004",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34741,
            "range": "± 905",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2479,
            "range": "± 986",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 380,
            "range": "± 223",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1841180,
            "range": "± 101559",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "adc96e24bd4239177f2e565c460bca9ad62aec30",
          "message": "Fix all features.",
          "timestamp": "2020-07-13T19:38:50+08:00",
          "tree_id": "a0ad3a3e852f6133753e213f1016279a428dc03d",
          "url": "https://github.com/schungx/rhai/commit/adc96e24bd4239177f2e565c460bca9ad62aec30"
        },
        "date": 1594640617673,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 99768,
            "range": "± 7896",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 92,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 93,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 259,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2459,
            "range": "± 470",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2337,
            "range": "± 202",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6543780,
            "range": "± 769868",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 695,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 747,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16551,
            "range": "± 2525",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12097,
            "range": "± 2070",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 329,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 600,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 70,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 873,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 67,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1974726,
            "range": "± 327128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2840202,
            "range": "± 477534",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2403429,
            "range": "± 344929",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2658,
            "range": "± 313",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2691,
            "range": "± 304",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 498,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 522,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 874,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 855,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 302,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 303,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 218,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 282,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 546,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 387,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 415956,
            "range": "± 28766",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23647213,
            "range": "± 2093523",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2843,
            "range": "± 360",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11969,
            "range": "± 1202",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3825,
            "range": "± 298",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14021,
            "range": "± 952",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14226,
            "range": "± 1789",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 32620,
            "range": "± 4519",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2365,
            "range": "± 360",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 377,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1726389,
            "range": "± 157830",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}