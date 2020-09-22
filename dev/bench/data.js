window.BENCHMARK_DATA = {
  "lastUpdate": 1600769034216,
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
          "id": "d119e13b7936d88349a08805e481a0908796255f",
          "message": "Allow binding of this pointer in FnPtr calls.",
          "timestamp": "2020-07-17T10:18:07+08:00",
          "tree_id": "398119f67a7deaa3721a6ee4df2c4a1d5d4bf7b7",
          "url": "https://github.com/schungx/rhai/commit/d119e13b7936d88349a08805e481a0908796255f"
        },
        "date": 1594952431964,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 101124,
            "range": "± 10290",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 90,
            "range": "± 4",
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
            "value": 293,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2592,
            "range": "± 613",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2422,
            "range": "± 222",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6657075,
            "range": "± 305592",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 676,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 735,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16386,
            "range": "± 2501",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12108,
            "range": "± 728",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 339,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 604,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 69,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 899,
            "range": "± 118",
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
            "value": 1945713,
            "range": "± 458660",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3031420,
            "range": "± 190674",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2505832,
            "range": "± 538201",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2768,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2866,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 483,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 526,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 897,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 869,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 317,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 331,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 234,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 308,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 583,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 405,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 425018,
            "range": "± 16401",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24189306,
            "range": "± 1348385",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2933,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12679,
            "range": "± 2821",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3900,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 13982,
            "range": "± 1510",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14048,
            "range": "± 9988",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 33900,
            "range": "± 10877",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2391,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 399,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1733535,
            "range": "± 125171",
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
          "id": "2f33edb7620b5b0b1ff98dcbb93ca091419eeedc",
          "message": "FIx no_std.",
          "timestamp": "2020-07-19T09:10:22+08:00",
          "tree_id": "1f8a6d2aaa6fe7bc43dc223a56c1854e4dc9d59c",
          "url": "https://github.com/schungx/rhai/commit/2f33edb7620b5b0b1ff98dcbb93ca091419eeedc"
        },
        "date": 1595121173278,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 102802,
            "range": "± 9601",
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
            "value": 89,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 294,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2650,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2445,
            "range": "± 305",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7198211,
            "range": "± 892885",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 741,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 803,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17261,
            "range": "± 3297",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12599,
            "range": "± 3033",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 349,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 617,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 74,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 910,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 71,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2063040,
            "range": "± 274219",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3174256,
            "range": "± 619448",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2591450,
            "range": "± 341538",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2927,
            "range": "± 683",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2956,
            "range": "± 292",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 518,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 564,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 933,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 897,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 322,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 333,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 232,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 310,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 575,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 401,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 458644,
            "range": "± 18441",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24570825,
            "range": "± 2150456",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3135,
            "range": "± 3142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12811,
            "range": "± 721",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4051,
            "range": "± 324",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14671,
            "range": "± 2504",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14827,
            "range": "± 880",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35267,
            "range": "± 6372",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2501,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 382,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1868623,
            "range": "± 97856",
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
          "id": "cf36dc5a57d8d060e41e59e3093ea8059356781e",
          "message": "Support for anonymous functions.",
          "timestamp": "2020-07-19T17:14:55+08:00",
          "tree_id": "f667609bda8aaa01d9e3fae69b1cb3fc857b694b",
          "url": "https://github.com/schungx/rhai/commit/cf36dc5a57d8d060e41e59e3093ea8059356781e"
        },
        "date": 1595150374191,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 89259,
            "range": "± 14835",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 80,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 79,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 291,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2453,
            "range": "± 450",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2262,
            "range": "± 294",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6366559,
            "range": "± 933842",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 645,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 665,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14946,
            "range": "± 2931",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 11058,
            "range": "± 2299",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 315,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 541,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 65,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 819,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 59,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1720923,
            "range": "± 294467",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2676161,
            "range": "± 505120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2192045,
            "range": "± 348761",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2459,
            "range": "± 461",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2428,
            "range": "± 430",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 444,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 470,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 798,
            "range": "± 228",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 772,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 285,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 283,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 207,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 277,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 527,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 357,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 394347,
            "range": "± 61300",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22224141,
            "range": "± 4033134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2837,
            "range": "± 550",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10795,
            "range": "± 1828",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3552,
            "range": "± 547",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 12213,
            "range": "± 2952",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 12549,
            "range": "± 2868",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 30389,
            "range": "± 6780",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2207,
            "range": "± 437",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 355,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1591274,
            "range": "± 196306",
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
          "id": "a5fa8322e915e405d5f3120f7ac6d1caf6a96697",
          "message": "Avoid pulling in std for no-std.",
          "timestamp": "2020-07-20T20:23:35+08:00",
          "tree_id": "6d924c26b20daddb5fb7d8ee954a4630c79cb60b",
          "url": "https://github.com/schungx/rhai/commit/a5fa8322e915e405d5f3120f7ac6d1caf6a96697"
        },
        "date": 1595247959590,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 101829,
            "range": "± 8500",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 96,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 88,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 282,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2594,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2441,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6888475,
            "range": "± 326877",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 712,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 772,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17602,
            "range": "± 1116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13014,
            "range": "± 5234",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 345,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 617,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 72,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 903,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 69,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2030708,
            "range": "± 125029",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2988778,
            "range": "± 141152",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2546858,
            "range": "± 222773",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2802,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2863,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 497,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 544,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 921,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 882,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 311,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 307,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 228,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 303,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 573,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 403,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 443999,
            "range": "± 34072",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24139489,
            "range": "± 1739261",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3101,
            "range": "± 373",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12920,
            "range": "± 578",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4098,
            "range": "± 726",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14859,
            "range": "± 1445",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15001,
            "range": "± 862",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35688,
            "range": "± 3324",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2541,
            "range": "± 302",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 385,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1836176,
            "range": "± 167548",
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
          "id": "e6c3f8134ddabdbfc047589b3e161ed2bb7d30e5",
          "message": "Avoid copying property name for map property access.",
          "timestamp": "2020-07-21T20:59:12+08:00",
          "tree_id": "db90ac69d30d95848d48441cf6dc10ee7ef91275",
          "url": "https://github.com/schungx/rhai/commit/e6c3f8134ddabdbfc047589b3e161ed2bb7d30e5"
        },
        "date": 1595336826617,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 106187,
            "range": "± 4205",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 99,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 92,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 297,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2706,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2546,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7194480,
            "range": "± 842993",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 751,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 807,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17809,
            "range": "± 4125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13386,
            "range": "± 702",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 375,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 655,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 76,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 968,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 72,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2133521,
            "range": "± 417374",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3124610,
            "range": "± 275331",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2708551,
            "range": "± 173222",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2867,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2904,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 485,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 528,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 936,
            "range": "± 493",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 931,
            "range": "± 351",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 332,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 327,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 247,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 321,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 607,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 426,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 464568,
            "range": "± 13074",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25487052,
            "range": "± 1557726",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3202,
            "range": "± 358",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13675,
            "range": "± 607",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4225,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15485,
            "range": "± 9145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15684,
            "range": "± 890",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 37388,
            "range": "± 1957",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2636,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 396,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1905007,
            "range": "± 548058",
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
          "id": "61a1355c59134a31523c75344b450d5fac6d0107",
          "message": "Add no-std example.",
          "timestamp": "2020-07-21T22:32:24+08:00",
          "tree_id": "62e758fc7ceda89a7290c1b99dca9f5a7d1d969a",
          "url": "https://github.com/schungx/rhai/commit/61a1355c59134a31523c75344b450d5fac6d0107"
        },
        "date": 1595342178912,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 99236,
            "range": "± 23658",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 114,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 106,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 339,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2519,
            "range": "± 569",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2329,
            "range": "± 651",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6399330,
            "range": "± 1484727",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 671,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 714,
            "range": "± 166",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17737,
            "range": "± 4757",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 11345,
            "range": "± 1336",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 375,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 564,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 79,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 862,
            "range": "± 204",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 64,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2152758,
            "range": "± 560144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2898888,
            "range": "± 701743",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2370357,
            "range": "± 429562",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2987,
            "range": "± 852",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 3030,
            "range": "± 1072",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 428,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 543,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 961,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 966,
            "range": "± 226",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 301,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 348,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 262,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 282,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 580,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 441,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 488334,
            "range": "± 143184",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23823486,
            "range": "± 5352558",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2892,
            "range": "± 730",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11824,
            "range": "± 2969",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4349,
            "range": "± 3235",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15833,
            "range": "± 3507",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13809,
            "range": "± 3626",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34320,
            "range": "± 8772",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2568,
            "range": "± 565",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 364,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1955011,
            "range": "± 181297",
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
          "id": "839738b97eb5cb8f4a8294c7a975e0e6e6521c73",
          "message": "Change no_std sample to bare-bones.",
          "timestamp": "2020-07-22T11:43:58+08:00",
          "tree_id": "cc10d555f83da3f94d174cfa0a210cddb402f11b",
          "url": "https://github.com/schungx/rhai/commit/839738b97eb5cb8f4a8294c7a975e0e6e6521c73"
        },
        "date": 1595389722079,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 93880,
            "range": "± 12589",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 86,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 82,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 263,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2417,
            "range": "± 261",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2222,
            "range": "± 280",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6275230,
            "range": "± 607805",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 655,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 706,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15566,
            "range": "± 1657",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12042,
            "range": "± 1511",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 319,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 579,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 66,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 842,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 65,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1875099,
            "range": "± 174199",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2777315,
            "range": "± 299135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2353964,
            "range": "± 227745",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2490,
            "range": "± 327",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2515,
            "range": "± 257",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 420,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 455,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 820,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 818,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 290,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 285,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 208,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 283,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 525,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 363,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 411572,
            "range": "± 57214",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22095849,
            "range": "± 2146116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2832,
            "range": "± 322",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11814,
            "range": "± 1510",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3762,
            "range": "± 551",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 13550,
            "range": "± 1369",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13670,
            "range": "± 1311",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 33617,
            "range": "± 4467",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2316,
            "range": "± 325",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 348,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1730630,
            "range": "± 347410",
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
          "id": "35374f5b3bedf76d07abb544c103acc8d3c78355",
          "message": "Simplify custom syntax.",
          "timestamp": "2020-07-22T13:08:51+08:00",
          "tree_id": "4ab35c159b277761216df4e195f2d3e92129ce7a",
          "url": "https://github.com/schungx/rhai/commit/35374f5b3bedf76d07abb544c103acc8d3c78355"
        },
        "date": 1595394807600,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 94689,
            "range": "± 9364",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 90,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 84,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 274,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2496,
            "range": "± 244",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2338,
            "range": "± 333",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6591886,
            "range": "± 677953",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 678,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 759,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16021,
            "range": "± 1649",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 11791,
            "range": "± 1319",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 334,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 600,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 70,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 887,
            "range": "± 561",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 67,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1933199,
            "range": "± 278598",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2891809,
            "range": "± 303131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2414667,
            "range": "± 215062",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2572,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2673,
            "range": "± 400",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 436,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 492,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 852,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 855,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 306,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 309,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 221,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 278,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 570,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 379,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 416300,
            "range": "± 43675",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22634322,
            "range": "± 1793038",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2913,
            "range": "± 299",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11773,
            "range": "± 925",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3908,
            "range": "± 493",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 13641,
            "range": "± 1377",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13613,
            "range": "± 1231",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 33318,
            "range": "± 3715",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2322,
            "range": "± 209",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 367,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1754233,
            "range": "± 260776",
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
          "id": "6d551f15962224ad158388f8dd9edc406c2d6de8",
          "message": "Add currying support.",
          "timestamp": "2020-07-22T23:12:09+08:00",
          "tree_id": "296566550cbaacabd91e2caa9d428896e1302086",
          "url": "https://github.com/schungx/rhai/commit/6d551f15962224ad158388f8dd9edc406c2d6de8"
        },
        "date": 1595431052163,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 96281,
            "range": "± 16840",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 90,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 84,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 270,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2418,
            "range": "± 451",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2329,
            "range": "± 381",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6822518,
            "range": "± 706457",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 694,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 741,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16080,
            "range": "± 9534",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 11839,
            "range": "± 1819",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 346,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 606,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 68,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 899,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 66,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1933200,
            "range": "± 285969",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2874158,
            "range": "± 339826",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2389335,
            "range": "± 202829",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2588,
            "range": "± 297",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2673,
            "range": "± 239",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 441,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 478,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 851,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 886,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 311,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 308,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 217,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 285,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 563,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 395,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 441631,
            "range": "± 53146",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23594554,
            "range": "± 2217116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2928,
            "range": "± 380",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12373,
            "range": "± 2059",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3990,
            "range": "± 674",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14320,
            "range": "± 2447",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14602,
            "range": "± 1368",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34150,
            "range": "± 4899",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2480,
            "range": "± 229",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 387,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1796629,
            "range": "± 94720",
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
          "id": "7b22276ea82be9a7c4806e43adf46a77471d4558",
          "message": "Merge pull request #17 from Eliah-Lakhin/master\n\nFnPtr::call_dynamic that fixes issues with curry-ed lambdas when they are called dynamically",
          "timestamp": "2020-07-23T10:01:16+08:00",
          "tree_id": "2836b030ffcf99df7fdd175127092cafe4aac280",
          "url": "https://github.com/schungx/rhai/commit/7b22276ea82be9a7c4806e43adf46a77471d4558"
        },
        "date": 1595469885995,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 78934,
            "range": "± 15118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 78,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 74,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 238,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2134,
            "range": "± 285",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1868,
            "range": "± 514",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5460549,
            "range": "± 940942",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 546,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 608,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 12709,
            "range": "± 6591",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 9232,
            "range": "± 1497",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 277,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 486,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 55,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 688,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 55,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1505352,
            "range": "± 305941",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2330071,
            "range": "± 289711",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1948110,
            "range": "± 324101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2172,
            "range": "± 305",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2339,
            "range": "± 1100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 345,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 402,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 723,
            "range": "± 482",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 689,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 251,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 256,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 176,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 231,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 466,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 300,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 348886,
            "range": "± 39352",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 20086018,
            "range": "± 1917152",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2334,
            "range": "± 440",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 9211,
            "range": "± 2377",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3270,
            "range": "± 1105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10946,
            "range": "± 1721",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 11131,
            "range": "± 1749",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 27680,
            "range": "± 10549",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1964,
            "range": "± 357",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 363,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1407110,
            "range": "± 207814",
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
          "id": "dc7f847a8e374a0527b28e49f871df089b198554",
          "message": "Merge branch 'master' of https://github.com/schungx/rhai",
          "timestamp": "2020-07-23T10:13:10+08:00",
          "tree_id": "5433b61b079ae446216eb1f535552e9de8f87421",
          "url": "https://github.com/schungx/rhai/commit/dc7f847a8e374a0527b28e49f871df089b198554"
        },
        "date": 1595470728989,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 104341,
            "range": "± 14767",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 97,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 88,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 302,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2717,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2399,
            "range": "± 405",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7149398,
            "range": "± 546838",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 723,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 778,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16089,
            "range": "± 1611",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12252,
            "range": "± 1472",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 370,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 656,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 72,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 911,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 70,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2038892,
            "range": "± 169908",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3077261,
            "range": "± 251766",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2560409,
            "range": "± 257276",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2773,
            "range": "± 457",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2910,
            "range": "± 465",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 478,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 522,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 888,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 864,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 325,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 310,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 222,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 294,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 557,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 399,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 433411,
            "range": "± 48113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24746750,
            "range": "± 2426516",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2856,
            "range": "± 368",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11556,
            "range": "± 1381",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3786,
            "range": "± 426",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 13849,
            "range": "± 2272",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13586,
            "range": "± 1980",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 31981,
            "range": "± 4422",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2301,
            "range": "± 338",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 388,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1724630,
            "range": "± 241926",
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
          "distinct": false,
          "id": "bff266d4e1f35deef9e24d465266005df05b7305",
          "message": "Move function calling to separate source file.",
          "timestamp": "2020-07-23T18:40:42+08:00",
          "tree_id": "ec4e70264fc99d4cecc12c9301c6f66845c9ed7d",
          "url": "https://github.com/schungx/rhai/commit/bff266d4e1f35deef9e24d465266005df05b7305"
        },
        "date": 1595501549877,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 87887,
            "range": "± 12601",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 85,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 78,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 245,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2331,
            "range": "± 493",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2134,
            "range": "± 304",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6045259,
            "range": "± 1061875",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 634,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 664,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14425,
            "range": "± 1923",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 10935,
            "range": "± 2147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 321,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 570,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 63,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 804,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 60,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1764008,
            "range": "± 335141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2651613,
            "range": "± 375027",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2223487,
            "range": "± 356920",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2379,
            "range": "± 421",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2476,
            "range": "± 387",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 394,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 428,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 814,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 841,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 296,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 286,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 197,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 267,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 484,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 359,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 400614,
            "range": "± 100927",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22699213,
            "range": "± 3187389",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2647,
            "range": "± 342",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10965,
            "range": "± 1645",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3624,
            "range": "± 671",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 12864,
            "range": "± 2378",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14718,
            "range": "± 773",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35189,
            "range": "± 2082",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2511,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 384,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1864062,
            "range": "± 93106",
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
          "id": "2b0aacde23780e7399fcb53a6b712074203be67a",
          "message": "Fix Module::set_indexer_set_fn.",
          "timestamp": "2020-07-24T23:16:54+08:00",
          "tree_id": "de8802d2c0b74392dc2e2720ddf3ab2514e066d4",
          "url": "https://github.com/schungx/rhai/commit/2b0aacde23780e7399fcb53a6b712074203be67a"
        },
        "date": 1595604158899,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 107193,
            "range": "± 18063",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 99,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 102,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 339,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2754,
            "range": "± 447",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2575,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7300237,
            "range": "± 1027003",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 723,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 791,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17192,
            "range": "± 1624",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12591,
            "range": "± 1980",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 374,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 697,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 75,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 988,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 72,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2131283,
            "range": "± 413047",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3212667,
            "range": "± 401964",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2650464,
            "range": "± 272537",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2869,
            "range": "± 300",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2891,
            "range": "± 405",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 472,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 532,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 988,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 975,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 357,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 355,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 243,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 322,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 611,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 439,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 487142,
            "range": "± 98268",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 28728783,
            "range": "± 2501064",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3125,
            "range": "± 313",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13019,
            "range": "± 1731",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4101,
            "range": "± 474",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14956,
            "range": "± 2557",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15054,
            "range": "± 2538",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36206,
            "range": "± 6319",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2571,
            "range": "± 495",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 424,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1907603,
            "range": "± 266306",
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
          "id": "463d669ab50fe07c2f54ad70ec610a5c9fa073b3",
          "message": "Avoid shadowing indexer errors.",
          "timestamp": "2020-07-25T09:55:33+08:00",
          "tree_id": "1e4c8904358cebb73fa2f439bfb797fcf72f2606",
          "url": "https://github.com/schungx/rhai/commit/463d669ab50fe07c2f54ad70ec610a5c9fa073b3"
        },
        "date": 1595647346003,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 103350,
            "range": "± 69674",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 96,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 89,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 287,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2616,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2477,
            "range": "± 229",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6844420,
            "range": "± 463216",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 681,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 759,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16719,
            "range": "± 876",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12952,
            "range": "± 1780",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 367,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 648,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 73,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 936,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 69,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1992297,
            "range": "± 188508",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2976258,
            "range": "± 242098",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2529617,
            "range": "± 1025707",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2696,
            "range": "± 344",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2713,
            "range": "± 240",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 459,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 497,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 920,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 915,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 328,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 351,
            "range": "± 45",
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
            "value": 309,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 591,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 413,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 469711,
            "range": "± 35470",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25598259,
            "range": "± 1633882",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2935,
            "range": "± 368",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12184,
            "range": "± 1588",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4118,
            "range": "± 659",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14889,
            "range": "± 1138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14965,
            "range": "± 2514",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35509,
            "range": "± 2798",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2566,
            "range": "± 415",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 388,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1839231,
            "range": "± 325988",
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
          "id": "9d900a672231d952202207d0c727af2e93b3c772",
          "message": "Remove _Private.",
          "timestamp": "2020-07-25T16:09:13+08:00",
          "tree_id": "c8f6c1d6024b58fdc1fcc07854811044867e389e",
          "url": "https://github.com/schungx/rhai/commit/9d900a672231d952202207d0c727af2e93b3c772"
        },
        "date": 1595664896999,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 104424,
            "range": "± 12365",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 100,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 94,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 302,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2701,
            "range": "± 244",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2528,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7320660,
            "range": "± 185618",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 744,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 801,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17896,
            "range": "± 400",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13382,
            "range": "± 866",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 380,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 679,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 77,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 977,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 73,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2144520,
            "range": "± 68648",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3165039,
            "range": "± 204848",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2647056,
            "range": "± 110613",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2846,
            "range": "± 249",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2930,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 479,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 522,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 987,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 992,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 355,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 352,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 238,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 322,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 591,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 431,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 481308,
            "range": "± 15278",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 27694515,
            "range": "± 1183513",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3300,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13528,
            "range": "± 471",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4274,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15545,
            "range": "± 747",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15804,
            "range": "± 518",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 37511,
            "range": "± 1048",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2630,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 407,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1921975,
            "range": "± 91407",
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
          "id": "c530792d00ebbe93ca9d7cdff63895feb63c3f2e",
          "message": "Add repoTree and repoHome macros.",
          "timestamp": "2020-07-25T16:36:50+08:00",
          "tree_id": "21356b144391f3e9a731196f99253f5ad08a29bf",
          "url": "https://github.com/schungx/rhai/commit/c530792d00ebbe93ca9d7cdff63895feb63c3f2e"
        },
        "date": 1595666475840,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 97996,
            "range": "± 25585",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 97,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 87,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 272,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2569,
            "range": "± 447",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2437,
            "range": "± 297",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6828749,
            "range": "± 652228",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 707,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 747,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16365,
            "range": "± 1473",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12263,
            "range": "± 1485",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 353,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 614,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 72,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 904,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 70,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1985225,
            "range": "± 166934",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2885095,
            "range": "± 387768",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2452849,
            "range": "± 206261",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2736,
            "range": "± 683",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2717,
            "range": "± 303",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 446,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 501,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 916,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 928,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 332,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 326,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 215,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 300,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 542,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 395,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 453684,
            "range": "± 76187",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25651200,
            "range": "± 2393233",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2988,
            "range": "± 356",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12797,
            "range": "± 1582",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3823,
            "range": "± 601",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14412,
            "range": "± 1514",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14617,
            "range": "± 1585",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35969,
            "range": "± 4254",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2542,
            "range": "± 274",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 387,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1777805,
            "range": "± 226446",
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
          "id": "f601cc8c0a2d13e11fe0070dbc22f6c4b23c89ec",
          "message": "Restore benchmark.yml.",
          "timestamp": "2020-07-25T16:51:29+08:00",
          "tree_id": "d357eff8e55f84f27a89eb9cc2fe909066d39d92",
          "url": "https://github.com/schungx/rhai/commit/f601cc8c0a2d13e11fe0070dbc22f6c4b23c89ec"
        },
        "date": 1595667247211,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 98996,
            "range": "± 3312",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 95,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 90,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 297,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2620,
            "range": "± 883",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2440,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7067427,
            "range": "± 385737",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 693,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 751,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16182,
            "range": "± 561",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12054,
            "range": "± 908",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 362,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 648,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 69,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 930,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 66,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1952248,
            "range": "± 135581",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2997128,
            "range": "± 250509",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2481887,
            "range": "± 194896",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2678,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2767,
            "range": "± 501",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 451,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 498,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 923,
            "range": "± 371",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 933,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 344,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 336,
            "range": "± 29",
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
            "value": 307,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 571,
            "range": "± 69",
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
            "value": 454488,
            "range": "± 41160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 27444378,
            "range": "± 1995758",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3085,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12253,
            "range": "± 761",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3969,
            "range": "± 274",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14285,
            "range": "± 3661",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14508,
            "range": "± 966",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34001,
            "range": "± 3157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2428,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 380,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1829347,
            "range": "± 270362",
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
          "id": "7f1859b6ed035254e190433510d9e82463d1a49a",
          "message": "Merge branch 'master' of https://github.com/jonathandturner/rhai",
          "timestamp": "2020-07-25T18:29:41+08:00",
          "tree_id": "21a9290a4be8db6b9ff8e92aef6cd8ddea70bbc7",
          "url": "https://github.com/schungx/rhai/commit/7f1859b6ed035254e190433510d9e82463d1a49a"
        },
        "date": 1595673407777,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 93646,
            "range": "± 11768",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 105,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 94,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 280,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2485,
            "range": "± 401",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2330,
            "range": "± 295",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6683485,
            "range": "± 1033005",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 677,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 725,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16850,
            "range": "± 5791",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 11873,
            "range": "± 1647",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 357,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 616,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 76,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 921,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 72,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1956530,
            "range": "± 153161",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2836458,
            "range": "± 241347",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2444457,
            "range": "± 340891",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2635,
            "range": "± 511",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2740,
            "range": "± 692",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 455,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 472,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 906,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 908,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 317,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 319,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 220,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 289,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 555,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 406,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 443476,
            "range": "± 49934",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25762899,
            "range": "± 3334397",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2957,
            "range": "± 461",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12339,
            "range": "± 2119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3892,
            "range": "± 504",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14452,
            "range": "± 2348",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14259,
            "range": "± 2019",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34299,
            "range": "± 4433",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2439,
            "range": "± 401",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 367,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1742209,
            "range": "± 244140",
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
          "id": "6b600704a3a40946bde12e6298eb6c2fefb8b509",
          "message": "Avoid warnings.",
          "timestamp": "2020-07-26T15:53:22+08:00",
          "tree_id": "45f9b1d4387060d9971317796de9aa8cd77c3b93",
          "url": "https://github.com/schungx/rhai/commit/6b600704a3a40946bde12e6298eb6c2fefb8b509"
        },
        "date": 1595750191408,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 101225,
            "range": "± 3391",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 97,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 91,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 287,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2580,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2432,
            "range": "± 1140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7008091,
            "range": "± 315604",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 719,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 780,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17111,
            "range": "± 3473",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12649,
            "range": "± 1379",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 373,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 671,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 73,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 961,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 69,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2060147,
            "range": "± 57890",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3037777,
            "range": "± 172117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2548288,
            "range": "± 94526",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2723,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2782,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 456,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 500,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 942,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 958,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 344,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 344,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 226,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 307,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 567,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 409,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 462331,
            "range": "± 41815",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26509576,
            "range": "± 1174959",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3136,
            "range": "± 298",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12984,
            "range": "± 501",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4096,
            "range": "± 223",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14957,
            "range": "± 389",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15212,
            "range": "± 4419",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36057,
            "range": "± 9295",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2548,
            "range": "± 371",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 394,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1854032,
            "range": "± 71664",
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
          "id": "1e8978f921caa85743c0253224c5f17239e0e03f",
          "message": "Revert \"Delete benchmark.yml\"\n\nThis reverts commit 5dc244ddc8cd37e0ebbef0d54f8161d729cc3973.",
          "timestamp": "2020-07-26T16:35:13+08:00",
          "tree_id": "45f9b1d4387060d9971317796de9aa8cd77c3b93",
          "url": "https://github.com/schungx/rhai/commit/1e8978f921caa85743c0253224c5f17239e0e03f"
        },
        "date": 1595752707980,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 101763,
            "range": "± 13798",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 100,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 105,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 308,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2609,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2457,
            "range": "± 346",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7059778,
            "range": "± 303321",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 722,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 780,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16849,
            "range": "± 845",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12706,
            "range": "± 584",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 377,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 675,
            "range": "± 149",
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
            "value": 954,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 71,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2054580,
            "range": "± 64434",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3050630,
            "range": "± 49765",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2560355,
            "range": "± 64844",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2756,
            "range": "± 933",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2808,
            "range": "± 241",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 462,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 508,
            "range": "± 320",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 950,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 960,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 345,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 345,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 227,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 311,
            "range": "± 230",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 569,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 408,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 465444,
            "range": "± 54515",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26801347,
            "range": "± 2031518",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3174,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13149,
            "range": "± 536",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4121,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15073,
            "range": "± 1336",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15310,
            "range": "± 12290",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36053,
            "range": "± 1094",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2586,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 383,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1843026,
            "range": "± 38122",
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
          "id": "ec5082c328b677c31f35c0ab9aecccff8e272b4e",
          "message": "Better handling of reserved keywords.",
          "timestamp": "2020-07-26T22:25:30+08:00",
          "tree_id": "0a51846a00193c93680fc66b9f2fa30d8a2374bb",
          "url": "https://github.com/schungx/rhai/commit/ec5082c328b677c31f35c0ab9aecccff8e272b4e"
        },
        "date": 1595773719968,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 81101,
            "range": "± 13620",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 78,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 74,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 231,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2061,
            "range": "± 263",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2060,
            "range": "± 426",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5715491,
            "range": "± 965766",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 590,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 651,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 297,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 504,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 56,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1773524,
            "range": "± 308453",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2476107,
            "range": "± 441865",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2154087,
            "range": "± 303133",
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
          "id": "057f6435a45aa1160faf0cd3c62956b7d6505f11",
          "message": "Add public_only parameter to module function methods.",
          "timestamp": "2020-07-27T18:10:45+08:00",
          "tree_id": "77b19b96d5b03b8edb7b6cbec17f8bc15e4f5043",
          "url": "https://github.com/schungx/rhai/commit/057f6435a45aa1160faf0cd3c62956b7d6505f11"
        },
        "date": 1595844858567,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 85736,
            "range": "± 15569",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 86,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 80,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 266,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2174,
            "range": "± 358",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2159,
            "range": "± 425",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6158751,
            "range": "± 947226",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 603,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 638,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 332,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 560,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 58,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1713952,
            "range": "± 262985",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2596735,
            "range": "± 312642",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2133570,
            "range": "± 280802",
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
          "id": "b63ff56e096f73eacc28d6cc7eaefda6d25af9fe",
          "message": "Make sure we keep the starting position of each statement (for future uses).",
          "timestamp": "2020-07-28T10:26:20+08:00",
          "tree_id": "a40023b01a9b10b67feba68b9bb5642ec632b6d9",
          "url": "https://github.com/schungx/rhai/commit/b63ff56e096f73eacc28d6cc7eaefda6d25af9fe"
        },
        "date": 1595904856351,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 96224,
            "range": "± 14529",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 93,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 85,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 264,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2402,
            "range": "± 390",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2205,
            "range": "± 248",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6360801,
            "range": "± 861588",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 683,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 715,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 356,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 647,
            "range": "± 136",
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
            "value": 2034626,
            "range": "± 271323",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2973554,
            "range": "± 391096",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2554842,
            "range": "± 393453",
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
          "distinct": false,
          "id": "411539f3be1db5f8467bd66fbd282af85bdad4df",
          "message": "Minimize usage of downcast_ref.",
          "timestamp": "2020-07-28T19:11:46+08:00",
          "tree_id": "f6b5aa1355e46b0dc826e22f2cb839c043b5c9f4",
          "url": "https://github.com/schungx/rhai/commit/411539f3be1db5f8467bd66fbd282af85bdad4df"
        },
        "date": 1595934916521,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 81146,
            "range": "± 9492",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 72,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 71,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 229,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2013,
            "range": "± 477",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1975,
            "range": "± 251",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5860525,
            "range": "± 1017476",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 635,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 687,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 308,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 557,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 53,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1705601,
            "range": "± 219822",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2502147,
            "range": "± 356440",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2161938,
            "range": "± 359064",
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
          "id": "e2daba55d7a170980013cc370d5525a20312f8f5",
          "message": "Refine unicode-xid-ident feature writeup.",
          "timestamp": "2020-07-29T13:57:17+08:00",
          "tree_id": "8e87b0fd96f0ab7ca13f0a3c2a4f4d996eac58cb",
          "url": "https://github.com/schungx/rhai/commit/e2daba55d7a170980013cc370d5525a20312f8f5"
        },
        "date": 1596002383631,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 102680,
            "range": "± 75856",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 97,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 91,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 289,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2600,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2434,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7258415,
            "range": "± 254433",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 725,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 779,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 386,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 702,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 71,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2370208,
            "range": "± 77594",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3163945,
            "range": "± 315948",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2707159,
            "range": "± 87275",
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
          "id": "afbcd0fc0b56cc6820e857017eeb86734f79aae6",
          "message": "Replace StaticVec with SmallVec.",
          "timestamp": "2020-07-29T16:10:06+08:00",
          "tree_id": "db9b94820494836901bff78659b1f098132f003c",
          "url": "https://github.com/schungx/rhai/commit/afbcd0fc0b56cc6820e857017eeb86734f79aae6"
        },
        "date": 1596010510411,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 93247,
            "range": "± 18817",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 87,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 89,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 265,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2398,
            "range": "± 545",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2245,
            "range": "± 472",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7210447,
            "range": "± 806577",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 657,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 685,
            "range": "± 221",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 12346,
            "range": "± 2859",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 10976,
            "range": "± 2468",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 328,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 615,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 69,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 844,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 64,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1971348,
            "range": "± 451307",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2716088,
            "range": "± 458880",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2336745,
            "range": "± 365305",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2472,
            "range": "± 577",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2452,
            "range": "± 403",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 397,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 421,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 835,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 867,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 330,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 317,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 210,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 319,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 641,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 388,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 445479,
            "range": "± 74741",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24824744,
            "range": "± 2138781",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2333,
            "range": "± 376",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 9607,
            "range": "± 1489",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3614,
            "range": "± 724",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 12307,
            "range": "± 1960",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 11246,
            "range": "± 3258",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 31316,
            "range": "± 13680",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2231,
            "range": "± 474",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 328,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1620927,
            "range": "± 332645",
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
          "id": "a5a3bbd39951d953ea684349204a727d50117df3",
          "message": "Merge pull request #19 from Eliah-Lakhin/closures\n\nAutocurry feature",
          "timestamp": "2020-07-29T21:24:43+08:00",
          "tree_id": "f8719671991f473ae789158036055744363e052e",
          "url": "https://github.com/schungx/rhai/commit/a5a3bbd39951d953ea684349204a727d50117df3"
        },
        "date": 1596029211511,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 86146,
            "range": "± 641",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 82,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 74,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 241,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2225,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2083,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5965884,
            "range": "± 5940",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 603,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 648,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 13277,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 11301,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 308,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 554,
            "range": "± 2",
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
            "value": 766,
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
            "value": 1817753,
            "range": "± 2633",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2495633,
            "range": "± 13041",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2105225,
            "range": "± 1058",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2265,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2318,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 383,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 430,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 765,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 800,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 289,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 286,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 191,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 275,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 533,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 345,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 409076,
            "range": "± 872",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23074469,
            "range": "± 59222",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2320,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10269,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3313,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 12517,
            "range": "± 186",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 12069,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 31668,
            "range": "± 301",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2256,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 309,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1605272,
            "range": "± 2700",
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
          "id": "8299adf95c5cffd3d40f5de94e309b6822e76196",
          "message": "Add docs for auto-currying.",
          "timestamp": "2020-07-29T22:43:57+08:00",
          "tree_id": "846960d7c70dbc512802f475a026cf78fb431e7b",
          "url": "https://github.com/schungx/rhai/commit/8299adf95c5cffd3d40f5de94e309b6822e76196"
        },
        "date": 1596034078125,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 88694,
            "range": "± 16589",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 93,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 83,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 254,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2175,
            "range": "± 215",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1942,
            "range": "± 304",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5983124,
            "range": "± 751113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 599,
            "range": "± 272",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 590,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 13252,
            "range": "± 1433",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 11166,
            "range": "± 1210",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 292,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 500,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 52,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 729,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 54,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1592481,
            "range": "± 229914",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2368108,
            "range": "± 593551",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1993264,
            "range": "± 306027",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2270,
            "range": "± 666",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2170,
            "range": "± 278",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 350,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 375,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 674,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 754,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 259,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 267,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 180,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 262,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 485,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 326,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 369730,
            "range": "± 45492",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22450753,
            "range": "± 2417133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2103,
            "range": "± 223",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8933,
            "range": "± 1603",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 2910,
            "range": "± 1263",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 11258,
            "range": "± 3165",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 11045,
            "range": "± 1229",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 25943,
            "range": "± 4359",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2097,
            "range": "± 402",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 290,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1469677,
            "range": "± 180979",
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
          "id": "721c578407bf197ba79c1b07d988aaaef29d61b2",
          "message": "Use HashMap for externals.",
          "timestamp": "2020-07-29T23:34:48+08:00",
          "tree_id": "4ce537f5da8976fa4eeefdd4206c24759b5000de",
          "url": "https://github.com/schungx/rhai/commit/721c578407bf197ba79c1b07d988aaaef29d61b2"
        },
        "date": 1596037335700,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 96896,
            "range": "± 15524",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 108,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 84,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 293,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2765,
            "range": "± 429",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2378,
            "range": "± 473",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7103039,
            "range": "± 1211665",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 672,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 704,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15383,
            "range": "± 3171",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12548,
            "range": "± 1843",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 342,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 635,
            "range": "± 115",
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
            "value": 904,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 76,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2164689,
            "range": "± 249632",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3243857,
            "range": "± 306444",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2591337,
            "range": "± 295831",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2666,
            "range": "± 407",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2720,
            "range": "± 535",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 445,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 519,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 888,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 932,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 356,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 345,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 235,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 318,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 673,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 433,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 455104,
            "range": "± 85943",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 27389809,
            "range": "± 3668076",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2567,
            "range": "± 447",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12247,
            "range": "± 2302",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3666,
            "range": "± 494",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14442,
            "range": "± 2318",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13576,
            "range": "± 1723",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 33405,
            "range": "± 5071",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2855,
            "range": "± 673",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 370,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1920760,
            "range": "± 199022",
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
          "id": "98b294c699a163a74551eda7a3a88dfb1e16e9ae",
          "message": "Implement capturing.",
          "timestamp": "2020-07-30T18:18:28+08:00",
          "tree_id": "741112edc9a5ae5fde8332f6a909068316475251",
          "url": "https://github.com/schungx/rhai/commit/98b294c699a163a74551eda7a3a88dfb1e16e9ae"
        },
        "date": 1596104732983,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 82473,
            "range": "± 34776",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 75,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 68,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 225,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1922,
            "range": "± 288",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1812,
            "range": "± 548",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6058319,
            "range": "± 1462307",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 576,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 555,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 11445,
            "range": "± 1627",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 9741,
            "range": "± 2014",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 277,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 521,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 57,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 748,
            "range": "± 259",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 52,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1701727,
            "range": "± 379767",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2552921,
            "range": "± 953947",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2011927,
            "range": "± 592795",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2308,
            "range": "± 429",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2308,
            "range": "± 698",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 336,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 374,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 717,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 826,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 302,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 309,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 201,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 273,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 540,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 304,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 387579,
            "range": "± 106747",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21885069,
            "range": "± 2138739",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2056,
            "range": "± 294",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 9064,
            "range": "± 4196",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 2795,
            "range": "± 267",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 11577,
            "range": "± 4843",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 10774,
            "range": "± 2651",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 26194,
            "range": "± 9418",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2042,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 284,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1459208,
            "range": "± 361844",
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
          "id": "cb005506e2f3984dc3e8f5c0f225f3d0ec25ab0b",
          "message": "Simplify function calling.",
          "timestamp": "2020-07-31T12:11:16+08:00",
          "tree_id": "5248d5b7a83f244b9304d13aaf914e65fa53f9fb",
          "url": "https://github.com/schungx/rhai/commit/cb005506e2f3984dc3e8f5c0f225f3d0ec25ab0b"
        },
        "date": 1596169002606,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 98697,
            "range": "± 18356",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 90,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 81,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 283,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2505,
            "range": "± 420",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2363,
            "range": "± 299",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6919361,
            "range": "± 1119272",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 696,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 725,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15527,
            "range": "± 2744",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12585,
            "range": "± 1992",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 356,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 629,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 66,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 873,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 63,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1955737,
            "range": "± 267336",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2848580,
            "range": "± 417960",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2391221,
            "range": "± 295974",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2549,
            "range": "± 335",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2556,
            "range": "± 385",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 430,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 494,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 861,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 910,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 338,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 337,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 212,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 331,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 632,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 386,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 470362,
            "range": "± 77109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26638651,
            "range": "± 3153097",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2649,
            "range": "± 443",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11805,
            "range": "± 1665",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3746,
            "range": "± 624",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14362,
            "range": "± 2346",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14144,
            "range": "± 1728",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36941,
            "range": "± 6885",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2708,
            "range": "± 453",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 391,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1844557,
            "range": "± 222500",
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
          "id": "49392d57d7d3dfe1cbb105c0c8ac0f2b8eee71c0",
          "message": "Fix no_std feature.",
          "timestamp": "2020-07-31T12:40:16+08:00",
          "tree_id": "868c58111a09fccd6edf678822055b0d4c02247b",
          "url": "https://github.com/schungx/rhai/commit/49392d57d7d3dfe1cbb105c0c8ac0f2b8eee71c0"
        },
        "date": 1596170926668,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 95936,
            "range": "± 13115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 94,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 89,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 269,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2467,
            "range": "± 267",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2330,
            "range": "± 533",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6761293,
            "range": "± 743433",
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
            "value": 731,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15509,
            "range": "± 1694",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13210,
            "range": "± 1440",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 350,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 650,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 70,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 862,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 66,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2054660,
            "range": "± 265901",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2850345,
            "range": "± 286328",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2391993,
            "range": "± 294781",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2577,
            "range": "± 235",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2606,
            "range": "± 448",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 430,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 508,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 908,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 958,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 343,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 353,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 219,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 326,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 614,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 398,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 481679,
            "range": "± 47902",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25583964,
            "range": "± 2518294",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2758,
            "range": "± 547",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12737,
            "range": "± 1428",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3804,
            "range": "± 337",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15097,
            "range": "± 1187",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14958,
            "range": "± 1375",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36618,
            "range": "± 3534",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2853,
            "range": "± 817",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 377,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1852342,
            "range": "± 166231",
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
          "distinct": false,
          "id": "dd0177f588e4f940aa3b57f1771db27f926153d9",
          "message": "Allow deprecated API.",
          "timestamp": "2020-08-03T10:07:52+08:00",
          "tree_id": "eed7705f596c6489bb87600b0b47f32d5e6f7cd2",
          "url": "https://github.com/schungx/rhai/commit/dd0177f588e4f940aa3b57f1771db27f926153d9"
        },
        "date": 1596529965960,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 84698,
            "range": "± 998",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 82,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 74,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 243,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2231,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2080,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5949992,
            "range": "± 10501",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 600,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 643,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 13715,
            "range": "± 330",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 11733,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 308,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 555,
            "range": "± 1",
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
            "value": 766,
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
            "value": 1795278,
            "range": "± 8389",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2499646,
            "range": "± 2413",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2082446,
            "range": "± 1915",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2299,
            "range": "± 585",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2357,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 381,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 434,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 780,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 812,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 295,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 293,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 197,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 275,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 530,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 342,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 404374,
            "range": "± 1402",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22220261,
            "range": "± 25385",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2433,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10596,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3250,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 12805,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 12468,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 31313,
            "range": "± 273",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2432,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 317,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1581776,
            "range": "± 2411",
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
          "distinct": false,
          "id": "4878a695030e91e4454e0fb67449c6ba91fb01cf",
          "message": "Add docs for closures.",
          "timestamp": "2020-08-04T16:27:55+08:00",
          "tree_id": "a051b7a3ecc0c8d0f489e87fdf32546e31f3754d",
          "url": "https://github.com/schungx/rhai/commit/4878a695030e91e4454e0fb67449c6ba91fb01cf"
        },
        "date": 1596530470689,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 106758,
            "range": "± 9351",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 108,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 89,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 283,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2694,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2496,
            "range": "± 262",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7839482,
            "range": "± 328084",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 758,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 797,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16415,
            "range": "± 1702",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13883,
            "range": "± 1247",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 375,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 675,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 75,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 959,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 72,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2535856,
            "range": "± 179244",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3425981,
            "range": "± 261277",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2947212,
            "range": "± 179048",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2764,
            "range": "± 191",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2816,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 518,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 572,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 948,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 980,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 353,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 349,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 257,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 345,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 639,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 430,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 503674,
            "range": "± 75809",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26431195,
            "range": "± 2160050",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2860,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12680,
            "range": "± 759",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3947,
            "range": "± 761",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15730,
            "range": "± 1705",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15130,
            "range": "± 910",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 37650,
            "range": "± 4496",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2977,
            "range": "± 217",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 381,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2031047,
            "range": "± 290475",
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
          "id": "ac90b7f246769f51e6189f75e02e7dceed54897f",
          "message": "Revert \"Delete benchmark.yml\"\n\nThis reverts commit 06a9ca205742ebfa81b4dbcb66875579fbcf90ee.",
          "timestamp": "2020-08-04T17:24:22+08:00",
          "tree_id": "a051b7a3ecc0c8d0f489e87fdf32546e31f3754d",
          "url": "https://github.com/schungx/rhai/commit/ac90b7f246769f51e6189f75e02e7dceed54897f"
        },
        "date": 1596533500649,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 112642,
            "range": "± 8782",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 109,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 97,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 322,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2874,
            "range": "± 350",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2647,
            "range": "± 360",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8574411,
            "range": "± 667066",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 763,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 836,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16570,
            "range": "± 1723",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14134,
            "range": "± 1090",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 413,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 731,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 83,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 1027,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 81,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2685909,
            "range": "± 272880",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3705718,
            "range": "± 307840",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3204693,
            "range": "± 361779",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2927,
            "range": "± 227",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2948,
            "range": "± 493",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 512,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 561,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1006,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1062,
            "range": "± 205",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 390,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 378,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 257,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 372,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 704,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 459,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 529846,
            "range": "± 77939",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 30353053,
            "range": "± 2294228",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2928,
            "range": "± 191",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12686,
            "range": "± 1163",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4000,
            "range": "± 423",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15568,
            "range": "± 1975",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15320,
            "range": "± 2049",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 37925,
            "range": "± 5381",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3044,
            "range": "± 623",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 406,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2113246,
            "range": "± 336864",
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
          "id": "9f302d4ef5dab3cb570cd15d089e6940b9e5702e",
          "message": "Update docs and tests.",
          "timestamp": "2020-08-04T18:39:24+08:00",
          "tree_id": "9a542dcca45234ccf161c8af3001700d5472e5cc",
          "url": "https://github.com/schungx/rhai/commit/9f302d4ef5dab3cb570cd15d089e6940b9e5702e"
        },
        "date": 1596537791338,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 103595,
            "range": "± 18343",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 91,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 95,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 280,
            "range": "± 208",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2486,
            "range": "± 306",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2352,
            "range": "± 530",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7655461,
            "range": "± 678304",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 760,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 756,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15430,
            "range": "± 1428",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13629,
            "range": "± 4745",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 354,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 622,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 73,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 899,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 68,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2394824,
            "range": "± 200256",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3320230,
            "range": "± 318901",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2774526,
            "range": "± 279462",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2583,
            "range": "± 443",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2597,
            "range": "± 186",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 466,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 505,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 902,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 903,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 348,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 344,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 219,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 312,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 592,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 388,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 490187,
            "range": "± 38734",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25770583,
            "range": "± 1944425",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2658,
            "range": "± 223",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12217,
            "range": "± 1333",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3715,
            "range": "± 1227",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14594,
            "range": "± 1586",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14625,
            "range": "± 1517",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36191,
            "range": "± 3140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2801,
            "range": "± 303",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 371,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1921680,
            "range": "± 132439",
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
          "id": "8a0d0e3e201936a354c59897ff51e02f4cbb9cba",
          "message": "Unbox error return for Engine::register_custom_syntax.",
          "timestamp": "2020-08-05T10:00:20+08:00",
          "tree_id": "9da55ed2c62b55941ff0812b8e01d5879d4244d1",
          "url": "https://github.com/schungx/rhai/commit/8a0d0e3e201936a354c59897ff51e02f4cbb9cba"
        },
        "date": 1596593121249,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 111067,
            "range": "± 5971",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 107,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 94,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 318,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2845,
            "range": "± 360",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2676,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8534358,
            "range": "± 428779",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 776,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 832,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16432,
            "range": "± 1005",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13947,
            "range": "± 602",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 422,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 725,
            "range": "± 60",
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
            "value": 1022,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 74,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2606975,
            "range": "± 208154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3748495,
            "range": "± 304780",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3165481,
            "range": "± 133290",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2849,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2906,
            "range": "± 182",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 510,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 564,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 988,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1049,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 390,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 381,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 255,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 363,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 695,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 452,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 531321,
            "range": "± 32089",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 29640773,
            "range": "± 2458983",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2970,
            "range": "± 285",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12758,
            "range": "± 877",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3960,
            "range": "± 248",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15659,
            "range": "± 1311",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15464,
            "range": "± 1602",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 40116,
            "range": "± 3987",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3088,
            "range": "± 337",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 423,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2106972,
            "range": "± 171385",
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
          "id": "f791c64f9631c63530c46ff98ea068564b14022f",
          "message": "Remove plugins feature.",
          "timestamp": "2020-08-05T17:02:30+08:00",
          "tree_id": "5e96576b44f7ef465c031207ff3a8882c0511b4c",
          "url": "https://github.com/schungx/rhai/commit/f791c64f9631c63530c46ff98ea068564b14022f"
        },
        "date": 1596618461143,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 104759,
            "range": "± 7384",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 96,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 88,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 279,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2693,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2522,
            "range": "± 204",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7998258,
            "range": "± 271988",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 759,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 802,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16544,
            "range": "± 2196",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14070,
            "range": "± 924",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 372,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 672,
            "range": "± 45",
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
            "value": 949,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 71,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2544296,
            "range": "± 176133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3388301,
            "range": "± 243179",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2947948,
            "range": "± 126214",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2810,
            "range": "± 229",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2849,
            "range": "± 240",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 495,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 547,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 937,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 972,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 353,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 349,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 236,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 342,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 649,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 431,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 499157,
            "range": "± 38082",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26755236,
            "range": "± 1786383",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2883,
            "range": "± 209",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12607,
            "range": "± 782",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3949,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15728,
            "range": "± 1003",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15104,
            "range": "± 455",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36346,
            "range": "± 2844",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2971,
            "range": "± 242",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 384,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2055097,
            "range": "± 95779",
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
          "id": "ae11dbbefe003ff614ef6aef7049b9f15c9ce8e6",
          "message": "Fix feature flags.",
          "timestamp": "2020-08-05T22:53:01+08:00",
          "tree_id": "c019133cc2c81f869d32cc4209dc49410e890d80",
          "url": "https://github.com/schungx/rhai/commit/ae11dbbefe003ff614ef6aef7049b9f15c9ce8e6"
        },
        "date": 1596639490508,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 99038,
            "range": "± 14030",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 102,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 93,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 266,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2531,
            "range": "± 463",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2343,
            "range": "± 358",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7469689,
            "range": "± 1036141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 758,
            "range": "± 383",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 761,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15346,
            "range": "± 2704",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12774,
            "range": "± 2837",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 361,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 662,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 71,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 904,
            "range": "± 171",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 68,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2408401,
            "range": "± 351716",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3308381,
            "range": "± 323584",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2815630,
            "range": "± 356998",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2602,
            "range": "± 318",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2703,
            "range": "± 461",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 469,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 509,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 887,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 943,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 337,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 328,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 223,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 317,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 611,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 389,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 467995,
            "range": "± 69923",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24917993,
            "range": "± 2324934",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2738,
            "range": "± 554",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11824,
            "range": "± 1543",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3747,
            "range": "± 386",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15305,
            "range": "± 1073",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14229,
            "range": "± 1764",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35878,
            "range": "± 5539",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2806,
            "range": "± 614",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 374,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1911795,
            "range": "± 209826",
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
          "id": "ffe52bf437c8f9a658a99d0acf20de2545afa5cc",
          "message": "Allow omitting the alias in import statement.",
          "timestamp": "2020-08-05T23:23:53+08:00",
          "tree_id": "70c98d77e0fd267bde52907e6721b4397e298cb6",
          "url": "https://github.com/schungx/rhai/commit/ffe52bf437c8f9a658a99d0acf20de2545afa5cc"
        },
        "date": 1596641186395,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 106387,
            "range": "± 5181",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 103,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 93,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 328,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2801,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2600,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8348333,
            "range": "± 179563",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 790,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 844,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16924,
            "range": "± 388",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14378,
            "range": "± 413",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 395,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 710,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 79,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 997,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 75,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2707158,
            "range": "± 251638",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3633017,
            "range": "± 225803",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3107638,
            "range": "± 179481",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2906,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2935,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 518,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 579,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 985,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1016,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 368,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 365,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 246,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 354,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 672,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 441,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 527269,
            "range": "± 9622",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 27892337,
            "range": "± 543689",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2932,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13150,
            "range": "± 1906",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4011,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15925,
            "range": "± 517",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15520,
            "range": "± 384",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 38424,
            "range": "± 7185",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3050,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 403,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2131503,
            "range": "± 198158",
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
          "id": "fff08d29b6e6e8ee6fa020157e61699b1e889d65",
          "message": "Fix CI.",
          "timestamp": "2020-08-06T00:01:16+08:00",
          "tree_id": "fafe84e4db083952c82928013bb55d56e54d297b",
          "url": "https://github.com/schungx/rhai/commit/fff08d29b6e6e8ee6fa020157e61699b1e889d65"
        },
        "date": 1596643452054,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 104427,
            "range": "± 10846",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 99,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 90,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 282,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2674,
            "range": "± 223",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2494,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8068380,
            "range": "± 692979",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 762,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 812,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16923,
            "range": "± 1781",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14515,
            "range": "± 1128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 382,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 684,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 74,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 968,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 72,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2601614,
            "range": "± 377010",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3703962,
            "range": "± 227130",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3010312,
            "range": "± 613766",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2774,
            "range": "± 364",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2854,
            "range": "± 610",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 501,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 559,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 943,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 974,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 352,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 349,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 235,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 338,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 658,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 425,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 502530,
            "range": "± 57263",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26717372,
            "range": "± 1808449",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2835,
            "range": "± 364",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12499,
            "range": "± 717",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3878,
            "range": "± 380",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15388,
            "range": "± 5579",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14734,
            "range": "± 2735",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36773,
            "range": "± 3920",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2917,
            "range": "± 471",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 382,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2074604,
            "range": "± 116858",
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
          "id": "41b41ff834e114778689207aac9224a014eca91c",
          "message": "Fix tests.",
          "timestamp": "2020-08-06T00:24:25+08:00",
          "tree_id": "d4b9c865d1004cfb67a5b356aef73f20afd67324",
          "url": "https://github.com/schungx/rhai/commit/41b41ff834e114778689207aac9224a014eca91c"
        },
        "date": 1596644989388,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 109833,
            "range": "± 16035",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 103,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 90,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 298,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2753,
            "range": "± 400",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2618,
            "range": "± 447",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8527152,
            "range": "± 861177",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 774,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 791,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15732,
            "range": "± 2039",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13407,
            "range": "± 1718",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 372,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 684,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 73,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 1018,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 69,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2502693,
            "range": "± 266862",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3521032,
            "range": "± 953498",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3004905,
            "range": "± 429672",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2870,
            "range": "± 283",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2897,
            "range": "± 372",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 522,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 548,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 989,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1007,
            "range": "± 194",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 384,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 375,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 259,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 374,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 686,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 458,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 504836,
            "range": "± 91768",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 29318502,
            "range": "± 2781720",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2892,
            "range": "± 327",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12479,
            "range": "± 1894",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3794,
            "range": "± 642",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15485,
            "range": "± 1985",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14607,
            "range": "± 1964",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35569,
            "range": "± 5715",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2839,
            "range": "± 345",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 399,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2042889,
            "range": "± 179255",
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
          "id": "c55435ce817e8af490c84c7d22194476692a28da",
          "message": "no_closure when no_function.",
          "timestamp": "2020-08-06T10:38:31+08:00",
          "tree_id": "50316a5bc42dbdccc61a67394b55e3c142cbab98",
          "url": "https://github.com/schungx/rhai/commit/c55435ce817e8af490c84c7d22194476692a28da"
        },
        "date": 1596681834612,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 105859,
            "range": "± 16248",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 110,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 90,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 312,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2820,
            "range": "± 376",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2596,
            "range": "± 441",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8018016,
            "range": "± 988070",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 837,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 853,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16334,
            "range": "± 3077",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13452,
            "range": "± 2386",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 381,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 689,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 73,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 962,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 72,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2448781,
            "range": "± 424898",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3506746,
            "range": "± 528517",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2948258,
            "range": "± 391638",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2821,
            "range": "± 510",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2827,
            "range": "± 507",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 483,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 518,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 970,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1000,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 370,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 378,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 231,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 348,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 678,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 454,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 511504,
            "range": "± 55007",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 28572657,
            "range": "± 2633788",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2857,
            "range": "± 471",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12348,
            "range": "± 1489",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3842,
            "range": "± 578",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15382,
            "range": "± 2458",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15148,
            "range": "± 2071",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36201,
            "range": "± 5921",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2904,
            "range": "± 394",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 418,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2019971,
            "range": "± 189766",
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
          "id": "efe964f0096cc63cf6a0b57e3ac418393a3ced4f",
          "message": "Fix writeup.",
          "timestamp": "2020-08-06T21:10:41+08:00",
          "tree_id": "03c3358aecd7c58702f2d66ecb670a6f26e55e80",
          "url": "https://github.com/schungx/rhai/commit/efe964f0096cc63cf6a0b57e3ac418393a3ced4f"
        },
        "date": 1596719650992,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 89772,
            "range": "± 16792",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 113,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 88,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 259,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2317,
            "range": "± 302",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2226,
            "range": "± 312",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7187051,
            "range": "± 804539",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 632,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 696,
            "range": "± 206",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14027,
            "range": "± 2148",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12126,
            "range": "± 2076",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 330,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 601,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 61,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 814,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 57,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2173139,
            "range": "± 175082",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3411520,
            "range": "± 511175",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2778138,
            "range": "± 321200",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2431,
            "range": "± 360",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2463,
            "range": "± 482",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 436,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 517,
            "range": "± 302",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 866,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 879,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 334,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 330,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 205,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 325,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 602,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 365,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 457411,
            "range": "± 61193",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24934968,
            "range": "± 1218972",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2384,
            "range": "± 682",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10860,
            "range": "± 2896",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3484,
            "range": "± 542",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 13609,
            "range": "± 5482",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13355,
            "range": "± 1126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 30569,
            "range": "± 5118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2658,
            "range": "± 437",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 338,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1742498,
            "range": "± 102749",
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
          "id": "b8b1efd2413bc23cf20372543ea3881a4b399fb6",
          "message": "Add note on `&T` parameters.",
          "timestamp": "2020-08-06T21:11:24+08:00",
          "tree_id": "37a25cf682c3db7f2d37be0301e4b48cd966e814",
          "url": "https://github.com/schungx/rhai/commit/b8b1efd2413bc23cf20372543ea3881a4b399fb6"
        },
        "date": 1596719825203,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 103585,
            "range": "± 7938",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 111,
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
            "value": 305,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2634,
            "range": "± 253",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2442,
            "range": "± 218",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7815907,
            "range": "± 624241",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 723,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 762,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16402,
            "range": "± 2054",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13746,
            "range": "± 1278",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 386,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 694,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 69,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 941,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 64,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2383613,
            "range": "± 295021",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3457197,
            "range": "± 628449",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2892377,
            "range": "± 294658",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2785,
            "range": "± 326",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2821,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 487,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 532,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 937,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1012,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 366,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 364,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 232,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 346,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 638,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 417,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 496306,
            "range": "± 95123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 28397689,
            "range": "± 2108138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2888,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12383,
            "range": "± 1562",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3751,
            "range": "± 423",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14929,
            "range": "± 1998",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14603,
            "range": "± 2114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34505,
            "range": "± 3904",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2851,
            "range": "± 302",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 376,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1960310,
            "range": "± 300980",
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
          "id": "130bcfe2931839f067005b7a17c787a4db5d89f7",
          "message": "Fix serde.",
          "timestamp": "2020-08-06T21:19:54+08:00",
          "tree_id": "6dde4c9e490fea4292970dee26e29b9905dbf4e8",
          "url": "https://github.com/schungx/rhai/commit/130bcfe2931839f067005b7a17c787a4db5d89f7"
        },
        "date": 1596720154340,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 105150,
            "range": "± 8836",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 95,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 90,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 293,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2629,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2466,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8033478,
            "range": "± 455717",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 752,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 799,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16329,
            "range": "± 590",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14045,
            "range": "± 1315",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 377,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 683,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 73,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 965,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 70,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2607525,
            "range": "± 140493",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3558422,
            "range": "± 257803",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2982278,
            "range": "± 353309",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2790,
            "range": "± 432",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2817,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 495,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 543,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 949,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 995,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 363,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 361,
            "range": "± 19",
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
            "value": 341,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 645,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 420,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 501594,
            "range": "± 19120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26852554,
            "range": "± 1807648",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2829,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12863,
            "range": "± 1360",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3928,
            "range": "± 620",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15544,
            "range": "± 648",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15588,
            "range": "± 3404",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36961,
            "range": "± 1408",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2955,
            "range": "± 266",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 382,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2005710,
            "range": "± 67533",
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
          "id": "261a1f3f66b748d3c60512895052d4e6961e7ed2",
          "message": "Do not run doc tests for only_i32.",
          "timestamp": "2020-08-06T22:36:36+08:00",
          "tree_id": "4fbd30b64fbca2a2dcf80da2fb1ec7c752a191c7",
          "url": "https://github.com/schungx/rhai/commit/261a1f3f66b748d3c60512895052d4e6961e7ed2"
        },
        "date": 1596724809352,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 102702,
            "range": "± 27147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 94,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 97,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 319,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2754,
            "range": "± 684",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2569,
            "range": "± 293",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8062136,
            "range": "± 843813",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 718,
            "range": "± 222",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 765,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16779,
            "range": "± 3487",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13714,
            "range": "± 1129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 366,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 661,
            "range": "± 354",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 68,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 947,
            "range": "± 217",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 65,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2497755,
            "range": "± 1276259",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3552603,
            "range": "± 458246",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2996696,
            "range": "± 187228",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2708,
            "range": "± 551",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2773,
            "range": "± 438",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 470,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 522,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1012,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 968,
            "range": "± 355",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 362,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 355,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 231,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 347,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 682,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 416,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 504346,
            "range": "± 119179",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 29042497,
            "range": "± 3783980",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2753,
            "range": "± 766",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12077,
            "range": "± 3234",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3768,
            "range": "± 748",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14770,
            "range": "± 15283",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14723,
            "range": "± 4958",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35604,
            "range": "± 18645",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2798,
            "range": "± 658",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 376,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2009740,
            "range": "± 216137",
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
          "id": "b604ea3e9389534950737ef6540d674a1e48e0d9",
          "message": "Fix serde doc test.",
          "timestamp": "2020-08-06T22:47:10+08:00",
          "tree_id": "c8a83d1a47f9197a25fb4dd2c38b8313bcb2b094",
          "url": "https://github.com/schungx/rhai/commit/b604ea3e9389534950737ef6540d674a1e48e0d9"
        },
        "date": 1596725625414,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 100863,
            "range": "± 16172",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 99,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 87,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 286,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2473,
            "range": "± 291",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2342,
            "range": "± 277",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7630941,
            "range": "± 768525",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 683,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 728,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15618,
            "range": "± 2945",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12292,
            "range": "± 2197",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 351,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 657,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 68,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 912,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 67,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2367658,
            "range": "± 573981",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3280593,
            "range": "± 448717",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2796488,
            "range": "± 384620",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2884,
            "range": "± 382",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2894,
            "range": "± 361",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 450,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 502,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 925,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 942,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 353,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 346,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 223,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 340,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 636,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 409,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 478527,
            "range": "± 63951",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26785799,
            "range": "± 2880111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2645,
            "range": "± 425",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11381,
            "range": "± 1489",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3715,
            "range": "± 540",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14119,
            "range": "± 1887",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13891,
            "range": "± 2295",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34127,
            "range": "± 5914",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2644,
            "range": "± 302",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 369,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1921415,
            "range": "± 448291",
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
          "id": "5a1a141ce367d4f78f9cb0b8fe9d1d02fe84f87e",
          "message": "Improve shared value treatment.",
          "timestamp": "2020-08-08T16:24:10+08:00",
          "tree_id": "1bf684898b3b2d0a853409d7ab6095cf16bf26fe",
          "url": "https://github.com/schungx/rhai/commit/5a1a141ce367d4f78f9cb0b8fe9d1d02fe84f87e"
        },
        "date": 1596875198733,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 103368,
            "range": "± 8847",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 87,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 89,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 284,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2590,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2432,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7729272,
            "range": "± 371576",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 716,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 768,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16462,
            "range": "± 973",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13953,
            "range": "± 1046",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 376,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 674,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 74,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 939,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 70,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2377308,
            "range": "± 241068",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3363321,
            "range": "± 107359",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2851101,
            "range": "± 180616",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2557,
            "range": "± 359",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2585,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 469,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 518,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 949,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 979,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 355,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 352,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 233,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 337,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 642,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 414,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 499420,
            "range": "± 43144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26873150,
            "range": "± 1505550",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2841,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12623,
            "range": "± 648",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3911,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15551,
            "range": "± 901",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14926,
            "range": "± 2024",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36262,
            "range": "± 1933",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2853,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 370,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1951274,
            "range": "± 217604",
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
          "id": "f68c5a699db404c643f61f484003825ea1c37d4c",
          "message": "Fix sync feature.",
          "timestamp": "2020-08-08T17:04:21+08:00",
          "tree_id": "36cbb463f25066c976b711190b397b9786fc5414",
          "url": "https://github.com/schungx/rhai/commit/f68c5a699db404c643f61f484003825ea1c37d4c"
        },
        "date": 1596877585984,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 85955,
            "range": "± 1001",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 71,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 68,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 229,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2212,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2075,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6291389,
            "range": "± 6932",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 595,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 638,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 13691,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 11662,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 310,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 557,
            "range": "± 1",
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
            "value": 794,
            "range": "± 4",
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
            "value": 1960503,
            "range": "± 3066",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2774829,
            "range": "± 964",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2342623,
            "range": "± 1635",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2163,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2185,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 389,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 430,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 787,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 813,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 296,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 294,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 193,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 280,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 533,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 347,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 417598,
            "range": "± 884",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22784584,
            "range": "± 64112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2391,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10636,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3263,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 13004,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 12359,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 30596,
            "range": "± 288",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2381,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 329,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1630343,
            "range": "± 14137",
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
          "id": "e66873bb83c4f3a831f7ffa569eaa4156182ee94",
          "message": "Merge pull request #27 from Eliah-Lakhin/capturing-bug\n\nFunction names capturing as external variables bug",
          "timestamp": "2020-08-08T22:52:20+08:00",
          "tree_id": "695465117dd07686537308d865e873e770959f5f",
          "url": "https://github.com/schungx/rhai/commit/e66873bb83c4f3a831f7ffa569eaa4156182ee94"
        },
        "date": 1596898537403,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 102726,
            "range": "± 16218",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 86,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 83,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 277,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2536,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2410,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7500635,
            "range": "± 831355",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 722,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 753,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16310,
            "range": "± 526",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13886,
            "range": "± 1088",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 373,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 663,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 74,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 932,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 69,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2313692,
            "range": "± 121025",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3343073,
            "range": "± 161021",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2781179,
            "range": "± 111986",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2574,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2593,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 467,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 516,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 938,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 965,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 350,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 346,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 239,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 330,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 646,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 416,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 513504,
            "range": "± 21731",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26227986,
            "range": "± 983589",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2787,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12578,
            "range": "± 531",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3902,
            "range": "± 356",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15488,
            "range": "± 684",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14785,
            "range": "± 760",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36367,
            "range": "± 2195",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2871,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 368,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1961040,
            "range": "± 58801",
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
          "id": "da3cce58d3e8ae8f962df7e4de76180cd0f1f9f9",
          "message": "Minor refactor.",
          "timestamp": "2020-08-08T22:59:05+08:00",
          "tree_id": "ed83b92a1739af4b25793ea3087c6c4def3fd224",
          "url": "https://github.com/schungx/rhai/commit/da3cce58d3e8ae8f962df7e4de76180cd0f1f9f9"
        },
        "date": 1596898902373,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 104525,
            "range": "± 5001",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 87,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 82,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 280,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2593,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2438,
            "range": "± 318",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7672943,
            "range": "± 597536",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 734,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 760,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16029,
            "range": "± 504",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13710,
            "range": "± 367",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 376,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 674,
            "range": "± 14",
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
            "value": 961,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 70,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2370165,
            "range": "± 95421",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3353233,
            "range": "± 168860",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2844715,
            "range": "± 540499",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2559,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2593,
            "range": "± 942",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 470,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 512,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 934,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 992,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 358,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 355,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 233,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 335,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 647,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 416,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 502694,
            "range": "± 89879",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26916462,
            "range": "± 2124239",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2885,
            "range": "± 264",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13050,
            "range": "± 1547",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3995,
            "range": "± 528",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15998,
            "range": "± 2016",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15376,
            "range": "± 1325",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 37108,
            "range": "± 4047",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2901,
            "range": "± 297",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 374,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1990842,
            "range": "± 266249",
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
          "id": "dbf5cd13c85c06639500f7798ca4f111e093c761",
          "message": "Merge pull request #28 from Eliah-Lakhin/closure-bugs\n\nFalse-positive capturing prevention bug fix",
          "timestamp": "2020-08-09T22:05:40+08:00",
          "tree_id": "fb0955aa7d96d0879f0fa8e2108328a389b0d5bf",
          "url": "https://github.com/schungx/rhai/commit/dbf5cd13c85c06639500f7798ca4f111e093c761"
        },
        "date": 1596982218186,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 96725,
            "range": "± 10437",
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
            "value": 79,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 261,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2454,
            "range": "± 249",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2302,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7269931,
            "range": "± 564155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 683,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 724,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14934,
            "range": "± 1253",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12575,
            "range": "± 1018",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 358,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 635,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 71,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 894,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 65,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2223833,
            "range": "± 264764",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3057328,
            "range": "± 363800",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2532779,
            "range": "± 271721",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2333,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2389,
            "range": "± 191",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 438,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 480,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 870,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 947,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 346,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 349,
            "range": "± 37",
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
            "value": 331,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 630,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 411,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 476637,
            "range": "± 45093",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25156679,
            "range": "± 1174291",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2691,
            "range": "± 237",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11784,
            "range": "± 1194",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3692,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14549,
            "range": "± 985",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14156,
            "range": "± 1090",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 32937,
            "range": "± 3832",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2702,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 367,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1842990,
            "range": "± 126744",
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
          "id": "564d3bc3390a38b485bbce2d44ca76dcd9e510a6",
          "message": "Add more closure tests.",
          "timestamp": "2020-08-09T22:12:50+08:00",
          "tree_id": "092d100b1cf72db1168e4ebfeef01bd1dc3973f2",
          "url": "https://github.com/schungx/rhai/commit/564d3bc3390a38b485bbce2d44ca76dcd9e510a6"
        },
        "date": 1596982537906,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 106390,
            "range": "± 15333",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 86,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 83,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 270,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2611,
            "range": "± 302",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2439,
            "range": "± 259",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7672910,
            "range": "± 683623",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 733,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 763,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16233,
            "range": "± 1619",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13809,
            "range": "± 1133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 374,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 673,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 73,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 974,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 70,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2379147,
            "range": "± 103187",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3304460,
            "range": "± 332517",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2793594,
            "range": "± 152493",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2564,
            "range": "± 539",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2601,
            "range": "± 312",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 474,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 519,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 931,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 986,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 358,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 356,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 231,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 335,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 648,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 417,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 502343,
            "range": "± 39481",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26966130,
            "range": "± 1711527",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2933,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13979,
            "range": "± 1923",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4236,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 16939,
            "range": "± 1591",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16371,
            "range": "± 1716",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 41472,
            "range": "± 1805",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3330,
            "range": "± 934",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 379,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1973345,
            "range": "± 265984",
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
          "id": "f9807a3c1e70dcb2362da99a2eb439569ba4ef99",
          "message": "Remove content on avoiding &mut ImmutableString which is invalid.",
          "timestamp": "2020-08-15T00:10:14+08:00",
          "tree_id": "c7232573fc7e9c10f5d0e6156bd3c0e6156a210c",
          "url": "https://github.com/schungx/rhai/commit/f9807a3c1e70dcb2362da99a2eb439569ba4ef99"
        },
        "date": 1597461378824,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 103990,
            "range": "± 7202",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 96,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 81,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 276,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2573,
            "range": "± 343",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2412,
            "range": "± 423",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7622895,
            "range": "± 1053051",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 726,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 760,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16231,
            "range": "± 3221",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13823,
            "range": "± 538",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 371,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 669,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 72,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 952,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 70,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2350484,
            "range": "± 152148",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3276251,
            "range": "± 158447",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2772431,
            "range": "± 74677",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2573,
            "range": "± 274",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2588,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 474,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 514,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 936,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 980,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 364,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 361,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 233,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 340,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 649,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 419,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 495288,
            "range": "± 13490",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26740855,
            "range": "± 952883",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2832,
            "range": "± 270",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12471,
            "range": "± 833",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3960,
            "range": "± 1475",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15331,
            "range": "± 875",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14824,
            "range": "± 861",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36052,
            "range": "± 6503",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2813,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 371,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1955306,
            "range": "± 407537",
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
          "id": "ac6d519d28052906f7e08928be3ce137c20c0aeb",
          "message": "Fix bug that consumes first argument in module-qualified call.",
          "timestamp": "2020-08-20T16:26:10+08:00",
          "tree_id": "c7a4d47e3457d4d491173e2b2bf5abf2ba498749",
          "url": "https://github.com/schungx/rhai/commit/ac6d519d28052906f7e08928be3ce137c20c0aeb"
        },
        "date": 1597912288974,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 100546,
            "range": "± 16851",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 82,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 80,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 258,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2494,
            "range": "± 376",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2301,
            "range": "± 700",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7163429,
            "range": "± 1071251",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 678,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 702,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15049,
            "range": "± 3589",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12385,
            "range": "± 2701",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 364,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 621,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 63,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 866,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 61,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2134809,
            "range": "± 386409",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3035631,
            "range": "± 505560",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2510228,
            "range": "± 401105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2312,
            "range": "± 497",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2274,
            "range": "± 389",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 424,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 474,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 911,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 926,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 350,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 348,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 223,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 314,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 622,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 388,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 453762,
            "range": "± 63988",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25843663,
            "range": "± 3242379",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2533,
            "range": "± 440",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11545,
            "range": "± 2838",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3623,
            "range": "± 494",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 13831,
            "range": "± 3281",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13368,
            "range": "± 2601",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 31728,
            "range": "± 6273",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2458,
            "range": "± 454",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 329,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1809330,
            "range": "± 331614",
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
          "id": "24610688d30d4467b02b8c247bde6405f1b13577",
          "message": "Fix no_std build.",
          "timestamp": "2020-08-20T17:02:25+08:00",
          "tree_id": "9afc9418af2512e0a52b2de6b35ee89044f0fbb7",
          "url": "https://github.com/schungx/rhai/commit/24610688d30d4467b02b8c247bde6405f1b13577"
        },
        "date": 1597914321970,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 92609,
            "range": "± 7836",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 83,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 76,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 265,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2417,
            "range": "± 325",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2248,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7207697,
            "range": "± 519443",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 678,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 729,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15274,
            "range": "± 9152",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12745,
            "range": "± 4217",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 352,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 624,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 69,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 872,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 65,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2235579,
            "range": "± 186285",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3085423,
            "range": "± 261387",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2592681,
            "range": "± 488201",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2363,
            "range": "± 205",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2537,
            "range": "± 1832",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 439,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 478,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 871,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 913,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 338,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 331,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 220,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 327,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 636,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 403,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 494924,
            "range": "± 98565",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25324781,
            "range": "± 1473697",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2665,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11719,
            "range": "± 688",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3612,
            "range": "± 305",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14466,
            "range": "± 1516",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13826,
            "range": "± 918",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 33176,
            "range": "± 3533",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2618,
            "range": "± 293",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 362,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1867631,
            "range": "± 161677",
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
          "id": "0ece75aba364226d531c2f4f6409c598f01b2f30",
          "message": "Allow module access in closures.",
          "timestamp": "2020-08-22T22:44:24+08:00",
          "tree_id": "dcd48f9b1c7c326e6c43452bb784d476ba617d5f",
          "url": "https://github.com/schungx/rhai/commit/0ece75aba364226d531c2f4f6409c598f01b2f30"
        },
        "date": 1598108216315,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 94579,
            "range": "± 15938",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 73,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 73,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 231,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2161,
            "range": "± 360",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2181,
            "range": "± 336",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6546360,
            "range": "± 993203",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 637,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 683,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14900,
            "range": "± 2107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13626,
            "range": "± 2815",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 325,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 585,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 70,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 796,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 66,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2021421,
            "range": "± 344301",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2821983,
            "range": "± 333078",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2523987,
            "range": "± 438298",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2237,
            "range": "± 355",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2225,
            "range": "± 442",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 408,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 474,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 820,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 852,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 311,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 324,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 202,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 315,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 584,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 370,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 420225,
            "range": "± 70499",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22881365,
            "range": "± 3029957",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2475,
            "range": "± 388",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10765,
            "range": "± 2140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3404,
            "range": "± 799",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 13662,
            "range": "± 2274",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13305,
            "range": "± 2392",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 30752,
            "range": "± 5593",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2442,
            "range": "± 364",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 341,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1747046,
            "range": "± 267899",
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
          "id": "177a0de23cd44f0145af68f7ffe6b8b1cb26521b",
          "message": "Fix closure test.",
          "timestamp": "2020-08-22T23:01:25+08:00",
          "tree_id": "089e4ab734bca55336d5e882d780b65757f88a53",
          "url": "https://github.com/schungx/rhai/commit/177a0de23cd44f0145af68f7ffe6b8b1cb26521b"
        },
        "date": 1598108632311,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 84941,
            "range": "± 11187",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 73,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 69,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 219,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2123,
            "range": "± 186",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1915,
            "range": "± 327",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6380641,
            "range": "± 429407",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 615,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 611,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 13454,
            "range": "± 1633",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 11463,
            "range": "± 2199",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 316,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 544,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 59,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 777,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 60,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1991470,
            "range": "± 219154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2754020,
            "range": "± 208679",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2374938,
            "range": "± 338638",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2090,
            "range": "± 411",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2034,
            "range": "± 315",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 383,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 435,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 784,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 793,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 299,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 319,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 188,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 273,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 534,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 350,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 419971,
            "range": "± 104794",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22353971,
            "range": "± 1642461",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2265,
            "range": "± 330",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10211,
            "range": "± 1225",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3169,
            "range": "± 964",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 12688,
            "range": "± 2093",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 12741,
            "range": "± 2137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 29215,
            "range": "± 4046",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2321,
            "range": "± 449",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 296,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1663264,
            "range": "± 238867",
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
          "id": "e2f271644a4ba7512bb9df798ff29fe60bf1b607",
          "message": "Expand packages and raw Engine write-up.",
          "timestamp": "2020-08-23T17:22:39+08:00",
          "tree_id": "d0eb7487f0e6648a320917b532bb4de01715be3c",
          "url": "https://github.com/schungx/rhai/commit/e2f271644a4ba7512bb9df798ff29fe60bf1b607"
        },
        "date": 1598174783879,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 103733,
            "range": "± 8676",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 90,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 82,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 278,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2571,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2450,
            "range": "± 319",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7758625,
            "range": "± 684083",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 737,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 767,
            "range": "± 303",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16245,
            "range": "± 1838",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13857,
            "range": "± 2527",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 372,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 677,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 75,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 925,
            "range": "± 270",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 71,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2333762,
            "range": "± 244251",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3343080,
            "range": "± 405301",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2789740,
            "range": "± 548616",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2584,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2580,
            "range": "± 306",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 468,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 520,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 933,
            "range": "± 361",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 990,
            "range": "± 1036",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 359,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 354,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 235,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 347,
            "range": "± 202",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 644,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 421,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 498471,
            "range": "± 54343",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26745381,
            "range": "± 2936048",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2836,
            "range": "± 329",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12714,
            "range": "± 1854",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3904,
            "range": "± 1193",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15891,
            "range": "± 1175",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15304,
            "range": "± 2217",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36035,
            "range": "± 10167",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2783,
            "range": "± 432",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 374,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1958356,
            "range": "± 258795",
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
          "id": "7cd345b128f0cf913b1416fa058089efc0ac5678",
          "message": "Fix bug in closure capture for no_object.",
          "timestamp": "2020-08-23T17:46:39+08:00",
          "tree_id": "149c5813c7c3e272de5be27b7cdae7adf3803f4f",
          "url": "https://github.com/schungx/rhai/commit/7cd345b128f0cf913b1416fa058089efc0ac5678"
        },
        "date": 1598176194955,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 95573,
            "range": "± 8160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 83,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 82,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 258,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2505,
            "range": "± 325",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2313,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7292156,
            "range": "± 365078",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 698,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 729,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14895,
            "range": "± 1953",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13127,
            "range": "± 1024",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 353,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 631,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 71,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 900,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 67,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2365528,
            "range": "± 137850",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3224055,
            "range": "± 246214",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2782800,
            "range": "± 237821",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2430,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2399,
            "range": "± 248",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 451,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 482,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 890,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 929,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 342,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 352,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 224,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 314,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 618,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 395,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 471582,
            "range": "± 36793",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25279309,
            "range": "± 1267234",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2709,
            "range": "± 585",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12109,
            "range": "± 1064",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3696,
            "range": "± 394",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14951,
            "range": "± 1078",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14419,
            "range": "± 726",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34823,
            "range": "± 2424",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2670,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 343,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1854860,
            "range": "± 80174",
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
          "id": "790878f2094fd09aea168fcaa5a256daf1f0686e",
          "message": "Add missing operators for f32.",
          "timestamp": "2020-08-25T09:27:47+08:00",
          "tree_id": "51581123053fdf6cf96aff0ca5f9ad5b7c82e3ae",
          "url": "https://github.com/schungx/rhai/commit/790878f2094fd09aea168fcaa5a256daf1f0686e"
        },
        "date": 1598319026184,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 101941,
            "range": "± 6237",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 85,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 81,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 277,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2556,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2398,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7631889,
            "range": "± 552200",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 719,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 751,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15934,
            "range": "± 984",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13487,
            "range": "± 646",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 374,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 667,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 72,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 929,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 69,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2302174,
            "range": "± 172541",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3210645,
            "range": "± 169063",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2757679,
            "range": "± 250336",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2569,
            "range": "± 357",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2610,
            "range": "± 1663",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 471,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 514,
            "range": "± 334",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 953,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 972,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 355,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 352,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 232,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 331,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 654,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 413,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 506370,
            "range": "± 32123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26762648,
            "range": "± 2221433",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2791,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12143,
            "range": "± 1132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3822,
            "range": "± 385",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15164,
            "range": "± 2425",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14501,
            "range": "± 1523",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35417,
            "range": "± 6039",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2708,
            "range": "± 257",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 378,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1940507,
            "range": "± 147595",
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
          "id": "402c85ca65ae00a01f90989a765d0734ae47edfe",
          "message": "Fix no_std build.",
          "timestamp": "2020-08-25T09:41:52+08:00",
          "tree_id": "f81e45ba351f7ca5c6b303390e7efe7009ff95a2",
          "url": "https://github.com/schungx/rhai/commit/402c85ca65ae00a01f90989a765d0734ae47edfe"
        },
        "date": 1598320075503,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 88541,
            "range": "± 20519",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 72,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 69,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 224,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2102,
            "range": "± 392",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1889,
            "range": "± 823",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6221922,
            "range": "± 1204814",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 635,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 621,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 12868,
            "range": "± 3109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12545,
            "range": "± 2963",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 314,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 557,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 61,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 788,
            "range": "± 206",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 57,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1983591,
            "range": "± 407877",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2692091,
            "range": "± 523461",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2273308,
            "range": "± 446971",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2049,
            "range": "± 420",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2098,
            "range": "± 407",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 382,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 431,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 775,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 805,
            "range": "± 171",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 314,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 261,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 193,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 283,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 532,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 341,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 409995,
            "range": "± 97159",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22407765,
            "range": "± 6035690",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2246,
            "range": "± 444",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10356,
            "range": "± 2426",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3150,
            "range": "± 608",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 12402,
            "range": "± 2293",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 12112,
            "range": "± 2398",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 30511,
            "range": "± 9119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2296,
            "range": "± 485",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 333,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1628141,
            "range": "± 336473",
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
          "id": "ee3781e86e0c000abf04585b6113ce71580901f1",
          "message": "Simplify error handling code.",
          "timestamp": "2020-08-31T11:46:32+08:00",
          "tree_id": "c8f2986fb3e9ec9bb21fb2220cdce08a27bf2be2",
          "url": "https://github.com/schungx/rhai/commit/ee3781e86e0c000abf04585b6113ce71580901f1"
        },
        "date": 1598846173631,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 138919,
            "range": "± 1172",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 93,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 87,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 269,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2556,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2398,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7853366,
            "range": "± 15613",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 720,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 756,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16000,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13521,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 370,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 686,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 74,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 944,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 70,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2414999,
            "range": "± 5905",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3315977,
            "range": "± 9020",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2871372,
            "range": "± 3385",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2561,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2597,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 465,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 520,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 928,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 991,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 358,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 357,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 236,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 341,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 639,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 416,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 504819,
            "range": "± 2495",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26512000,
            "range": "± 84736",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2759,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12219,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3850,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15100,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14625,
            "range": "± 234",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34685,
            "range": "± 304",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2720,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 383,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1942685,
            "range": "± 6637",
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
          "id": "91b4f8a6bc7dcfeeb81137d271efc20da224cbff",
          "message": "Fix no-std build.",
          "timestamp": "2020-08-31T12:09:52+08:00",
          "tree_id": "e04bc60a6867c3462ce33c9142ae01d6dde21f9e",
          "url": "https://github.com/schungx/rhai/commit/91b4f8a6bc7dcfeeb81137d271efc20da224cbff"
        },
        "date": 1598847221244,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 135554,
            "range": "± 7812",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 86,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 81,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 271,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2515,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2362,
            "range": "± 358",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7874004,
            "range": "± 263144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 717,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 769,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15579,
            "range": "± 858",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13099,
            "range": "± 557",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 372,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 675,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 75,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 925,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 71,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2550999,
            "range": "± 708988",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3409732,
            "range": "± 41967",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2959034,
            "range": "± 338837",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2535,
            "range": "± 2067",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2632,
            "range": "± 1567",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 467,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 522,
            "range": "± 270",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 920,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 983,
            "range": "± 166",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 356,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 355,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 239,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 349,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 660,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 421,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 504587,
            "range": "± 11810",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26500150,
            "range": "± 1611862",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2823,
            "range": "± 487",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11967,
            "range": "± 1764",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3887,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15157,
            "range": "± 670",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14616,
            "range": "± 451",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34484,
            "range": "± 2330",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2754,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 386,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1977441,
            "range": "± 356500",
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
          "id": "6dac069c156de333b505d1255497337f24b6f87f",
          "message": "Merge pull request #47 from jhwgh1968/plugin_doc_updates\n\nBook updates for Plugins",
          "timestamp": "2020-09-01T14:26:32+08:00",
          "tree_id": "d5694ffb7bb2efc431b8e1ddd6d3617386333aae",
          "url": "https://github.com/schungx/rhai/commit/6dac069c156de333b505d1255497337f24b6f87f"
        },
        "date": 1598941960210,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 141030,
            "range": "± 42481",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 85,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 87,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 294,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2554,
            "range": "± 709",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2398,
            "range": "± 353",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8021772,
            "range": "± 847422",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 726,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 758,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15789,
            "range": "± 4392",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13375,
            "range": "± 6314",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 387,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 694,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 74,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 935,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 70,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2400591,
            "range": "± 415162",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3266604,
            "range": "± 652560",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2886154,
            "range": "± 486007",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2535,
            "range": "± 953",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2578,
            "range": "± 1012",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 471,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 518,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 939,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 993,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 355,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 360,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 241,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 336,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 642,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 412,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 504287,
            "range": "± 120282",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26046742,
            "range": "± 2193493",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2753,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12249,
            "range": "± 1037",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3821,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15046,
            "range": "± 731",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14608,
            "range": "± 597",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34828,
            "range": "± 2841",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2686,
            "range": "± 208",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 376,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1932258,
            "range": "± 67940",
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
          "id": "ce00ce77f0b92e25769b5884db3fffadd50773cb",
          "message": "Merge pull request #48 from jhwgh1968/export_visibility_attrs\n\nImplement export_* attributes for macros",
          "timestamp": "2020-09-02T16:05:34+08:00",
          "tree_id": "4e7c60fadd51f6bd83befc40228b50e834a6d067",
          "url": "https://github.com/schungx/rhai/commit/ce00ce77f0b92e25769b5884db3fffadd50773cb"
        },
        "date": 1599034047390,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 94705,
            "range": "± 19300",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 58,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 56,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 189,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2044,
            "range": "± 787",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1660,
            "range": "± 539",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5692649,
            "range": "± 936106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 507,
            "range": "± 633",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 539,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10780,
            "range": "± 3839",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 9124,
            "range": "± 1816",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 262,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 475,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 59,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 654,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 49,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1778185,
            "range": "± 376776",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2409048,
            "range": "± 366058",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2101736,
            "range": "± 374256",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1756,
            "range": "± 315",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1775,
            "range": "± 503",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 328,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 356,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 639,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 682,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 247,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 261,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 165,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 237,
            "range": "± 244",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 458,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 292,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 351251,
            "range": "± 76805",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19268149,
            "range": "± 2538709",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1880,
            "range": "± 327",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8377,
            "range": "± 2981",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 2612,
            "range": "± 918",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10305,
            "range": "± 2010",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 10431,
            "range": "± 8602",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 25486,
            "range": "± 7741",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1834,
            "range": "± 550",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 255,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1516344,
            "range": "± 429075",
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
          "id": "2737fe8aa3b6a491b9a1420a9540ff35eab1719c",
          "message": "Merge pull request #49 from jhwgh1968/export_prefix_fix\n\nFix for export_prefix attribute on module macros",
          "timestamp": "2020-09-03T13:15:29+08:00",
          "tree_id": "a670e8f7f9e270f559f9605244bbf7f0fdfe46df",
          "url": "https://github.com/schungx/rhai/commit/2737fe8aa3b6a491b9a1420a9540ff35eab1719c"
        },
        "date": 1599110453922,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 142067,
            "range": "± 8066",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 85,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 80,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 274,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2593,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2411,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7803813,
            "range": "± 331653",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 716,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 743,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15510,
            "range": "± 1198",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13451,
            "range": "± 334",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 373,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 678,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 73,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 932,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 69,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2393572,
            "range": "± 83117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3283013,
            "range": "± 118988",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2863587,
            "range": "± 108850",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2542,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2577,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 466,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 512,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 937,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 980,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 348,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 352,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 240,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 342,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 685,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 420,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 505775,
            "range": "± 15426",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26350657,
            "range": "± 739174",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2777,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12058,
            "range": "± 952",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3836,
            "range": "± 280",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15419,
            "range": "± 374",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14408,
            "range": "± 839",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34742,
            "range": "± 1687",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2730,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 362,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1967188,
            "range": "± 89733",
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
          "id": "ae953315fe0835616459c3cf107a0fc10807973b",
          "message": "Refine plugins doc.",
          "timestamp": "2020-09-04T15:42:31+08:00",
          "tree_id": "5d545bec106a20abdb01020519828daa77605c07",
          "url": "https://github.com/schungx/rhai/commit/ae953315fe0835616459c3cf107a0fc10807973b"
        },
        "date": 1599205782799,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 143747,
            "range": "± 13153",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 102,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 78,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 292,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2677,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2522,
            "range": "± 343",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8079540,
            "range": "± 730871",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 710,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 749,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15578,
            "range": "± 2723",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13150,
            "range": "± 1407",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 386,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 736,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 72,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 966,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 68,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2362449,
            "range": "± 135441",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3400505,
            "range": "± 279055",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2924401,
            "range": "± 237061",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2580,
            "range": "± 237",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2645,
            "range": "± 259",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 471,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 510,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 954,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1007,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 372,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 370,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 245,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 366,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 695,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 436,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 515580,
            "range": "± 40683",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 29355523,
            "range": "± 2578280",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2776,
            "range": "± 400",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12194,
            "range": "± 759",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3791,
            "range": "± 345",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14589,
            "range": "± 1435",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14170,
            "range": "± 1359",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34630,
            "range": "± 2355",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2640,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 386,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1976469,
            "range": "± 164724",
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
          "distinct": false,
          "id": "99b822863093178c378b4ef03d86b8347c66e3a7",
          "message": "Use smallvec/union for nightly builds.",
          "timestamp": "2020-09-05T17:55:35+08:00",
          "tree_id": "54364be735c310fd6021c2a29bc6c6553f900a67",
          "url": "https://github.com/schungx/rhai/commit/99b822863093178c378b4ef03d86b8347c66e3a7"
        },
        "date": 1599389504497,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 130584,
            "range": "± 19162",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 78,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 85,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 268,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2455,
            "range": "± 677",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2106,
            "range": "± 592",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7523054,
            "range": "± 2035798",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 761,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 672,
            "range": "± 195",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14752,
            "range": "± 4617",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 11918,
            "range": "± 3665",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 323,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 616,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 62,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 1037,
            "range": "± 332",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 58,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2131592,
            "range": "± 605116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3733206,
            "range": "± 926433",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2888278,
            "range": "± 738002",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 3092,
            "range": "± 1010",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2624,
            "range": "± 742",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 402,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 483,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 881,
            "range": "± 248",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 878,
            "range": "± 288",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 357,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 336,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 273,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 348,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 588,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 386,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 602751,
            "range": "± 132692",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26990187,
            "range": "± 6899150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3001,
            "range": "± 1200",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11451,
            "range": "± 3315",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3320,
            "range": "± 950",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14839,
            "range": "± 5244",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16015,
            "range": "± 6281",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 32285,
            "range": "± 8773",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2437,
            "range": "± 465",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 351,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1778367,
            "range": "± 533012",
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
          "distinct": false,
          "id": "d527ef7dbfb1cae37090978016a463f32a891864",
          "message": "Remove SC from codegen authors, add jhwgh1968 to Rhai authors.",
          "timestamp": "2020-09-09T09:12:28+08:00",
          "tree_id": "cac662ac97dfac7b26e9bb0275cf17d183adc465",
          "url": "https://github.com/schungx/rhai/commit/d527ef7dbfb1cae37090978016a463f32a891864"
        },
        "date": 1599615384637,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 146614,
            "range": "± 24421",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 83,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 82,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 303,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2737,
            "range": "± 304",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2563,
            "range": "± 245",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8327656,
            "range": "± 1233678",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 731,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 768,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16223,
            "range": "± 1492",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13739,
            "range": "± 1305",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 393,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 718,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 72,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 973,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 66,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2461688,
            "range": "± 142357",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3532452,
            "range": "± 218354",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3004950,
            "range": "± 594831",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2624,
            "range": "± 219",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2650,
            "range": "± 714",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 487,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 521,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 981,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1030,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 383,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 379,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 247,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 357,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 692,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 447,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 533086,
            "range": "± 58544",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 29621444,
            "range": "± 2106017",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2818,
            "range": "± 433",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12710,
            "range": "± 1073",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3996,
            "range": "± 600",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15682,
            "range": "± 1907",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15438,
            "range": "± 1104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34465,
            "range": "± 9702",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2762,
            "range": "± 512",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 385,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1990064,
            "range": "± 197519",
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
          "id": "36fe02558e5e8f18a6918cee7f45f59345077d1d",
          "message": "Fix tests output.",
          "timestamp": "2020-09-11T22:45:15+08:00",
          "tree_id": "eb049e3c30a879e9601d206fb86eea45b174262e",
          "url": "https://github.com/schungx/rhai/commit/36fe02558e5e8f18a6918cee7f45f59345077d1d"
        },
        "date": 1599835763822,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 140589,
            "range": "± 20462",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 84,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 80,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 265,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2528,
            "range": "± 242",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2362,
            "range": "± 240",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7774401,
            "range": "± 956748",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 721,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 741,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16058,
            "range": "± 762",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13695,
            "range": "± 1826",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 381,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 677,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 73,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 932,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 69,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2472970,
            "range": "± 259815",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3376623,
            "range": "± 360636",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2885518,
            "range": "± 120695",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2573,
            "range": "± 217",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2645,
            "range": "± 456",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 476,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 503,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 947,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 995,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 340,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 359,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 242,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 350,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 658,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 427,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 509833,
            "range": "± 64597",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26230326,
            "range": "± 2566861",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2819,
            "range": "± 1174",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12889,
            "range": "± 606",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3614,
            "range": "± 611",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15451,
            "range": "± 1392",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15118,
            "range": "± 990",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36252,
            "range": "± 2656",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2809,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 352,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1966679,
            "range": "± 229634",
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
          "id": "b311688fee00292bb0563d72ac8c7e680aaf31ba",
          "message": "Fix test.",
          "timestamp": "2020-09-11T22:56:19+08:00",
          "tree_id": "7cde433ac9780782b39f42681bb32cd5c66e7096",
          "url": "https://github.com/schungx/rhai/commit/b311688fee00292bb0563d72ac8c7e680aaf31ba"
        },
        "date": 1599837056019,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 120408,
            "range": "± 30781",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 71,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 66,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 249,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2278,
            "range": "± 612",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2093,
            "range": "± 490",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7120643,
            "range": "± 431968",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 585,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 657,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14265,
            "range": "± 1703",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 11393,
            "range": "± 2365",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 321,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 576,
            "range": "± 231",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 63,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 796,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 57,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2103579,
            "range": "± 217478",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3023623,
            "range": "± 363535",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2582333,
            "range": "± 398531",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2306,
            "range": "± 244",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2273,
            "range": "± 315",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 410,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 426,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 834,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 838,
            "range": "± 166",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 327,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 316,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 226,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 315,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 580,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 376,
            "range": "± 244",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 450599,
            "range": "± 59142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25107844,
            "range": "± 1650238",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2360,
            "range": "± 652",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10656,
            "range": "± 1147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3330,
            "range": "± 640",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 12674,
            "range": "± 2456",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 12381,
            "range": "± 2813",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 30880,
            "range": "± 3481",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2352,
            "range": "± 330",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 329,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1738535,
            "range": "± 267810",
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
          "distinct": false,
          "id": "5879f467d8a51f07ab70c261282e179de2d8af08",
          "message": "Merge pull request #55 from jhwgh1968/getters_setters\n\nReorganize get/set/index code into FnSpecialAccess",
          "timestamp": "2020-09-13T17:37:28+08:00",
          "tree_id": "359163e06f5c5ed9542d48f040c3f1d128494416",
          "url": "https://github.com/schungx/rhai/commit/5879f467d8a51f07ab70c261282e179de2d8af08"
        },
        "date": 1599991307804,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 151567,
            "range": "± 22716",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 114,
            "range": "± 10",
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
            "value": 298,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2690,
            "range": "± 271",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2564,
            "range": "± 244",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8503342,
            "range": "± 665334",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 722,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 756,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15738,
            "range": "± 2645",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13337,
            "range": "± 1047",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 420,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 701,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 75,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 1057,
            "range": "± 523",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 71,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2493421,
            "range": "± 169590",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3578915,
            "range": "± 349688",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2970484,
            "range": "± 179554",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2672,
            "range": "± 230",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2730,
            "range": "± 345",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 499,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 527,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1106,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1006,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 388,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 387,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 255,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 369,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 715,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 454,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 533086,
            "range": "± 51448",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 30166969,
            "range": "± 2462051",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2752,
            "range": "± 577",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12099,
            "range": "± 1517",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3923,
            "range": "± 617",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15475,
            "range": "± 2365",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14753,
            "range": "± 1444",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36848,
            "range": "± 5256",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2798,
            "range": "± 581",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 391,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2047903,
            "range": "± 394729",
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
          "id": "db59aed14ecb19fe9ab21fba2cdbb06ade12f09b",
          "message": "Fix bug in optimizer for if statements with empty true blocks.",
          "timestamp": "2020-09-14T22:24:55+08:00",
          "tree_id": "b77dafef6e87f9e632835c2797a6e0468d0c234e",
          "url": "https://github.com/schungx/rhai/commit/db59aed14ecb19fe9ab21fba2cdbb06ade12f09b"
        },
        "date": 1600093863660,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 147175,
            "range": "± 13346",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 90,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 91,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 299,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2791,
            "range": "± 244",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2623,
            "range": "± 331",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8479272,
            "range": "± 555077",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 777,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 822,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16392,
            "range": "± 1517",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13598,
            "range": "± 1372",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 414,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 743,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 86,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 1044,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 83,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2464218,
            "range": "± 171090",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3546914,
            "range": "± 236546",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3023954,
            "range": "± 260213",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2666,
            "range": "± 321",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2730,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 496,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 538,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1012,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1060,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 394,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 390,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 256,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 376,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 710,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 460,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 548185,
            "range": "± 53420",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 30334990,
            "range": "± 2198551",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2906,
            "range": "± 287",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12653,
            "range": "± 863",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3944,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15752,
            "range": "± 1263",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15676,
            "range": "± 1441",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36929,
            "range": "± 1776",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2976,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 414,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2071693,
            "range": "± 108783",
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
          "id": "88e788208b9f50730e55f752959c219a80a78c00",
          "message": "Merge pull request #57 from Eliah-Lakhin/set-fn-4-mut-bug\n\nFixes bug in Module::set_fn_4_mut",
          "timestamp": "2020-09-15T11:24:16+08:00",
          "tree_id": "c0106a32f3a29a2c03691ab917d138a4d7c2810b",
          "url": "https://github.com/schungx/rhai/commit/88e788208b9f50730e55f752959c219a80a78c00"
        },
        "date": 1600140743498,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 129279,
            "range": "± 22125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 77,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 68,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 268,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2496,
            "range": "± 301",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2234,
            "range": "± 539",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7175176,
            "range": "± 1109811",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 621,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 636,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 13449,
            "range": "± 2434",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 11083,
            "range": "± 2374",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 344,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 654,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 62,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 883,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 61,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2126654,
            "range": "± 377632",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3318850,
            "range": "± 696333",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2574003,
            "range": "± 420856",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2345,
            "range": "± 407",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2250,
            "range": "± 337",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 401,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 443,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 867,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 921,
            "range": "± 234",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 359,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 333,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 222,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 308,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 582,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 377,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 446670,
            "range": "± 87669",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25437769,
            "range": "± 4555950",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2352,
            "range": "± 462",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10808,
            "range": "± 2270",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3344,
            "range": "± 542",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 12504,
            "range": "± 2514",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 12755,
            "range": "± 2241",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 29598,
            "range": "± 6716",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2395,
            "range": "± 443",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 343,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1694932,
            "range": "± 319710",
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
          "id": "29124a8543632c2b3e32a48e3cdfc9f349ed2568",
          "message": "Restore benchmark.yml.",
          "timestamp": "2020-09-15T12:14:57+08:00",
          "tree_id": "14b42a973f14c6b15a010c2c1f0aa915876bc824",
          "url": "https://github.com/schungx/rhai/commit/29124a8543632c2b3e32a48e3cdfc9f349ed2568"
        },
        "date": 1600143611079,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 146067,
            "range": "± 1764",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 86,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 85,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 269,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2550,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2390,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7903014,
            "range": "± 12529",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 719,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 776,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15965,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13687,
            "range": "± 1600",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 378,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 679,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 74,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 936,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 70,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2450891,
            "range": "± 6832",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3512617,
            "range": "± 13830",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3032493,
            "range": "± 13047",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2532,
            "range": "± 2368",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2584,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 466,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 512,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 966,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 995,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 362,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 363,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 243,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 349,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 659,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 436,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 516212,
            "range": "± 99197",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26567963,
            "range": "± 107403",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2758,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12237,
            "range": "± 526",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3812,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14982,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14644,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35094,
            "range": "± 278",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2716,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 377,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1968043,
            "range": "± 9723",
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
          "id": "b0d86d8bf2effa2ec65f438685374fb7bcab22be",
          "message": "Revert \"Delete benchmark.yml\"\n\nThis reverts commit 83a2b401075d1ad508e9f76f1b34241e4def0e42.",
          "timestamp": "2020-09-15T12:23:57+08:00",
          "tree_id": "926f6a30c103ae6e31aceb97c6c1a6ff41afb1c4",
          "url": "https://github.com/schungx/rhai/commit/b0d86d8bf2effa2ec65f438685374fb7bcab22be"
        },
        "date": 1600144229898,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 135006,
            "range": "± 17654",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 76,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 74,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 274,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2457,
            "range": "± 249",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2311,
            "range": "± 282",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7646544,
            "range": "± 886131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 661,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 689,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 13954,
            "range": "± 2677",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12210,
            "range": "± 1680",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 363,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 632,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 65,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 886,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 62,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2212657,
            "range": "± 389618",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3157864,
            "range": "± 411374",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2720392,
            "range": "± 380865",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2328,
            "range": "± 275",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2340,
            "range": "± 275",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 438,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 479,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 908,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 947,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 358,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 354,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 243,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 336,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 650,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 419,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 525101,
            "range": "± 41302",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 27493944,
            "range": "± 5337664",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2594,
            "range": "± 362",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12132,
            "range": "± 1610",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3558,
            "range": "± 529",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14229,
            "range": "± 4909",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13326,
            "range": "± 1605",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35316,
            "range": "± 6567",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2716,
            "range": "± 454",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 331,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1720016,
            "range": "± 274968",
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
          "id": "aed70db303e7db9dea5298404691334287757adc",
          "message": "Revert \"Delete benchmark.yml\"\n\nThis reverts commit d547562c14df13f32ae4876f5b3b30cec4276ac3.",
          "timestamp": "2020-09-15T12:30:40+08:00",
          "tree_id": "926f6a30c103ae6e31aceb97c6c1a6ff41afb1c4",
          "url": "https://github.com/schungx/rhai/commit/aed70db303e7db9dea5298404691334287757adc"
        },
        "date": 1600144638469,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 136755,
            "range": "± 18853",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 79,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 72,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 248,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2314,
            "range": "± 277",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2163,
            "range": "± 257",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7174499,
            "range": "± 823992",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 641,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 690,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14310,
            "range": "± 1771",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 11978,
            "range": "± 1045",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 346,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 611,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 69,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 854,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 68,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2243840,
            "range": "± 200382",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2985737,
            "range": "± 383772",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2477589,
            "range": "± 243790",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2287,
            "range": "± 328",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2310,
            "range": "± 349",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 432,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 464,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 903,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 921,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 334,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 345,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 226,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 327,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 607,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 396,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 473522,
            "range": "± 58491",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25402505,
            "range": "± 2425102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2493,
            "range": "± 288",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11214,
            "range": "± 1392",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3460,
            "range": "± 408",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 13798,
            "range": "± 1649",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13422,
            "range": "± 1832",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 31762,
            "range": "± 3607",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2430,
            "range": "± 238",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 337,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1842359,
            "range": "± 231657",
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
          "id": "b795ce9f45f1344f37f3bdcb46210e8c51cb95b4",
          "message": "Refine docs.",
          "timestamp": "2020-09-18T11:52:23+08:00",
          "tree_id": "3aeb9b5c4d0e6bdbb69fedb1aad344019c2edfb2",
          "url": "https://github.com/schungx/rhai/commit/b795ce9f45f1344f37f3bdcb46210e8c51cb95b4"
        },
        "date": 1600401390153,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 110677,
            "range": "± 33523",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 93,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 78,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 279,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2500,
            "range": "± 249",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2339,
            "range": "± 812",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7825452,
            "range": "± 878835",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 713,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 739,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15071,
            "range": "± 718",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13154,
            "range": "± 1066",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 371,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 674,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 72,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 911,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 68,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2370916,
            "range": "± 80199",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3266859,
            "range": "± 147650",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2797717,
            "range": "± 108644",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2470,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2517,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 463,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 505,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 922,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 971,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 357,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 353,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 235,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 340,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 641,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 419,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 513996,
            "range": "± 31691",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26131100,
            "range": "± 1030146",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2698,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12044,
            "range": "± 365",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3777,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14948,
            "range": "± 910",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14362,
            "range": "± 584",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35782,
            "range": "± 540",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2700,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 366,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1966624,
            "range": "± 59965",
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
          "id": "39546b70533d09f6158a4a6222e84127701cecbc",
          "message": "Enable &str and String parameters in module functions.",
          "timestamp": "2020-09-19T18:12:23+08:00",
          "tree_id": "0ad46166319ec04ae1253fe66824048237a57b08",
          "url": "https://github.com/schungx/rhai/commit/39546b70533d09f6158a4a6222e84127701cecbc"
        },
        "date": 1600511595654,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 106159,
            "range": "± 24320",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 72,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 63,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 240,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2127,
            "range": "± 822",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2022,
            "range": "± 348",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6566690,
            "range": "± 1069901",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 565,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 598,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 12291,
            "range": "± 2232",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 9686,
            "range": "± 2943",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 302,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 521,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 51,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 713,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 56,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2250070,
            "range": "± 301649",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2854113,
            "range": "± 703464",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2392364,
            "range": "± 533768",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2059,
            "range": "± 837",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2506,
            "range": "± 275",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 442,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 421,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 777,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 791,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 315,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 295,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 186,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 284,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 588,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 338,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 406716,
            "range": "± 73842",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23076606,
            "range": "± 2294710",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2220,
            "range": "± 320",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10222,
            "range": "± 3485",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3149,
            "range": "± 553",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 11428,
            "range": "± 2824",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13031,
            "range": "± 3394",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 33894,
            "range": "± 7314",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2776,
            "range": "± 300",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 393,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1961236,
            "range": "± 282674",
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
          "distinct": false,
          "id": "a49b58002a4a67517b6f2cc14431cdf510b80318",
          "message": "Fix doc tests.",
          "timestamp": "2020-09-20T15:55:11+08:00",
          "tree_id": "91c40c5a601c9e843d94baa97a15d4051ac29cdf",
          "url": "https://github.com/schungx/rhai/commit/a49b58002a4a67517b6f2cc14431cdf510b80318"
        },
        "date": 1600589590421,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 106618,
            "range": "± 9412",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 89,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 68,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 236,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2192,
            "range": "± 380",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2059,
            "range": "± 328",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6842046,
            "range": "± 1111031",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 607,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 627,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 13754,
            "range": "± 2473",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 11619,
            "range": "± 2076",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 320,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 579,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 65,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 793,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 64,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2071657,
            "range": "± 236312",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2844362,
            "range": "± 377774",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2417019,
            "range": "± 319603",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2467,
            "range": "± 2656",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2229,
            "range": "± 360",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 395,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 434,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 795,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 878,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 304,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 304,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 205,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 295,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 566,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 364,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 452456,
            "range": "± 72651",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22623040,
            "range": "± 2748578",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2327,
            "range": "± 449",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10115,
            "range": "± 1205",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3233,
            "range": "± 366",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 12801,
            "range": "± 1618",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 12244,
            "range": "± 1819",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 31483,
            "range": "± 8683",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2260,
            "range": "± 291",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 324,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1779659,
            "range": "± 280474",
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
          "id": "e89cec2829273aa0453d29e244fd89ea48e80f7e",
          "message": "Revert \"Delete benchmark.yml\"\n\nThis reverts commit 44416ecb05181726e2e80de488945d583aad5b3f.",
          "timestamp": "2020-09-20T18:42:17+08:00",
          "tree_id": "91c40c5a601c9e843d94baa97a15d4051ac29cdf",
          "url": "https://github.com/schungx/rhai/commit/e89cec2829273aa0453d29e244fd89ea48e80f7e"
        },
        "date": 1600598908713,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 111127,
            "range": "± 19665",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 85,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 75,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 285,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2680,
            "range": "± 623",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2498,
            "range": "± 445",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7932308,
            "range": "± 1068546",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 727,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 739,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15601,
            "range": "± 2984",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13110,
            "range": "± 2138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 387,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 693,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 71,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 939,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 68,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2296513,
            "range": "± 304803",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3283860,
            "range": "± 499985",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2840979,
            "range": "± 306665",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2526,
            "range": "± 318",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2532,
            "range": "± 431",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 459,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 494,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 926,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1005,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 366,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 362,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 251,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 360,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 691,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 430,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 510913,
            "range": "± 91660",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 31210151,
            "range": "± 2751410",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2836,
            "range": "± 303",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12556,
            "range": "± 1345",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3721,
            "range": "± 438",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14347,
            "range": "± 1989",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13743,
            "range": "± 2138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 33825,
            "range": "± 5865",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2672,
            "range": "± 377",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 384,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1894408,
            "range": "± 218607",
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
          "id": "748d4d2f36731d816e8ba10ca4e1279cac91bdbf",
          "message": "Merge pull request #59 from jhwgh1968/rusfmt_ci\n\nNew CI Job for Formatting",
          "timestamp": "2020-09-21T09:24:03+08:00",
          "tree_id": "2a333e366eb819b405528bd25757455b87b3237f",
          "url": "https://github.com/schungx/rhai/commit/748d4d2f36731d816e8ba10ca4e1279cac91bdbf"
        },
        "date": 1600651698367,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 93425,
            "range": "± 11761",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 83,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 61,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 217,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2134,
            "range": "± 1066",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1877,
            "range": "± 484",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6472056,
            "range": "± 1196322",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 562,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 633,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 12646,
            "range": "± 2700",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 10801,
            "range": "± 2413",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 324,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 558,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 56,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 786,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 55,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1945576,
            "range": "± 502176",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2721947,
            "range": "± 370287",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2349003,
            "range": "± 567101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2017,
            "range": "± 435",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2082,
            "range": "± 499",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 375,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 381,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 743,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 861,
            "range": "± 228",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 302,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 294,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 191,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 287,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 561,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 352,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 439986,
            "range": "± 78733",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23300399,
            "range": "± 3179752",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2211,
            "range": "± 523",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 9395,
            "range": "± 1506",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3157,
            "range": "± 602",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 11711,
            "range": "± 2684",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 11497,
            "range": "± 2328",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 26948,
            "range": "± 5631",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2319,
            "range": "± 780",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 326,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1530702,
            "range": "± 361777",
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
          "id": "83f9df2852f9288eb603b06fcd53b0cb715cf839",
          "message": "Fix op-assignment overrides.",
          "timestamp": "2020-09-21T16:15:52+08:00",
          "tree_id": "a77baabed9c43d61a19aaa7877cbf72c9efe8dee",
          "url": "https://github.com/schungx/rhai/commit/83f9df2852f9288eb603b06fcd53b0cb715cf839"
        },
        "date": 1600676361088,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 91092,
            "range": "± 27225",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 68,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 62,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 208,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1928,
            "range": "± 408",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1818,
            "range": "± 495",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6312011,
            "range": "± 1149849",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 517,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 569,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 12386,
            "range": "± 5186",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 9847,
            "range": "± 2313",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 286,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 511,
            "range": "± 194",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 56,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 714,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 51,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1960219,
            "range": "± 373078",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2962140,
            "range": "± 793250",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2515732,
            "range": "± 636886",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2011,
            "range": "± 686",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1979,
            "range": "± 438",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 375,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 412,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 767,
            "range": "± 194",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 685,
            "range": "± 184",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 266,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 273,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 189,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 294,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 491,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 340,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 405834,
            "range": "± 103345",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21007004,
            "range": "± 3882531",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2149,
            "range": "± 705",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11034,
            "range": "± 2874",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3439,
            "range": "± 1017",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 12165,
            "range": "± 3871",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 10469,
            "range": "± 2277",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 25006,
            "range": "± 7540",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1863,
            "range": "± 352",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 292,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1486968,
            "range": "± 245261",
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
          "id": "8095ebc9e4a162e3cefe99dbb9635c822b6e49a8",
          "message": "Remove unused imports.",
          "timestamp": "2020-09-21T18:00:46+08:00",
          "tree_id": "c4a5ecd894909bcc78d4ab100b514c8bf4cf2147",
          "url": "https://github.com/schungx/rhai/commit/8095ebc9e4a162e3cefe99dbb9635c822b6e49a8"
        },
        "date": 1600682909244,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 93862,
            "range": "± 20821",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 66,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 59,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 236,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2073,
            "range": "± 330",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1810,
            "range": "± 500",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6428657,
            "range": "± 1576322",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 587,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 617,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 11442,
            "range": "± 2742",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 9841,
            "range": "± 2328",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 277,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 562,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 57,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 766,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 59,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2026403,
            "range": "± 475315",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2917223,
            "range": "± 497162",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2736979,
            "range": "± 928192",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2606,
            "range": "± 710",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2651,
            "range": "± 909",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 475,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 519,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 978,
            "range": "± 506",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1037,
            "range": "± 308",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 389,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 324,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 260,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 380,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 712,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 486,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 547502,
            "range": "± 67596",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 31449776,
            "range": "± 2372583",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2897,
            "range": "± 324",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12364,
            "range": "± 1957",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3977,
            "range": "± 939",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14940,
            "range": "± 2417",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14160,
            "range": "± 1905",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34850,
            "range": "± 6571",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2643,
            "range": "± 387",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 381,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2027909,
            "range": "± 234082",
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
          "id": "870ff812037dfc32f53ba986d896b9c6ec22d57f",
          "message": "Remove diag_test.",
          "timestamp": "2020-09-22T12:14:38+08:00",
          "tree_id": "7afdb9abe287b0c34d00daa883b6caa879b48034",
          "url": "https://github.com/schungx/rhai/commit/870ff812037dfc32f53ba986d896b9c6ec22d57f"
        },
        "date": 1600749125578,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 115522,
            "range": "± 9274",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 81,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 79,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 263,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2538,
            "range": "± 236",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2323,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7830724,
            "range": "± 336887",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 713,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 764,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15758,
            "range": "± 3085",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13370,
            "range": "± 574",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 376,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 674,
            "range": "± 27",
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
            "value": 930,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 69,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2404598,
            "range": "± 89725",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3435322,
            "range": "± 129398",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3064338,
            "range": "± 109654",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2491,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2553,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 465,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 503,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 930,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 984,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 351,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 356,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 234,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 347,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 654,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 426,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 501885,
            "range": "± 48623",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26010206,
            "range": "± 694899",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2803,
            "range": "± 236",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12009,
            "range": "± 953",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3672,
            "range": "± 561",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14370,
            "range": "± 934",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14292,
            "range": "± 647",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34950,
            "range": "± 2067",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2732,
            "range": "± 188",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 363,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1942723,
            "range": "± 86667",
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
          "id": "4719a4ccee3e44c58687aa384add61cedc865b66",
          "message": "Update dependencies.",
          "timestamp": "2020-09-22T17:58:04+08:00",
          "tree_id": "050cc2bbc1bf9137068d5831012e0de23e59b682",
          "url": "https://github.com/schungx/rhai/commit/4719a4ccee3e44c58687aa384add61cedc865b66"
        },
        "date": 1600769032109,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 128191,
            "range": "± 30629",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 81,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 81,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 321,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2545,
            "range": "± 729",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2400,
            "range": "± 428",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8202946,
            "range": "± 1314165",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 755,
            "range": "± 184",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 810,
            "range": "± 257",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15085,
            "range": "± 2250",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14505,
            "range": "± 5381",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 407,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 742,
            "range": "± 244",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 68,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 918,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 65,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2353111,
            "range": "± 351871",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3577089,
            "range": "± 516008",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3116961,
            "range": "± 450457",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2529,
            "range": "± 733",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2580,
            "range": "± 515",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 462,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 565,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1037,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 974,
            "range": "± 208",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 360,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 404,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 267,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 387,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 740,
            "range": "± 182",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 472,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 572962,
            "range": "± 121994",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 29939965,
            "range": "± 4319641",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2676,
            "range": "± 628",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11779,
            "range": "± 3970",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3709,
            "range": "± 1013",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14181,
            "range": "± 3041",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14217,
            "range": "± 2921",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 33518,
            "range": "± 8828",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2922,
            "range": "± 795",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 365,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2151752,
            "range": "± 454439",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}