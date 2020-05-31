window.BENCHMARK_DATA = {
  "lastUpdate": 1590940035829,
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
          "id": "8aa0e2ceb49d75ab4c7ec09fc2aa6a11c10f0e5f",
          "message": "Use StaticVec to avoid most allocations with function arguments.",
          "timestamp": "2020-05-10T21:25:47+08:00",
          "tree_id": "8a21944fec71d39165e1184ff09cd21886ad1028",
          "url": "https://github.com/schungx/rhai/commit/8aa0e2ceb49d75ab4c7ec09fc2aa6a11c10f0e5f"
        },
        "date": 1589117869888,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 66364,
            "range": "± 9037",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 202,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 331,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 344,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1917,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1940,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 622,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 668,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 366,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 694,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 40,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2666,
            "range": "± 2683",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2678,
            "range": "± 534",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 475,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 504,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 819,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1074,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 373,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 380,
            "range": "± 218",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 303,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 285,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 576,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 327,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 742571,
            "range": "± 65355",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26148500,
            "range": "± 1209696",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2656,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10546,
            "range": "± 2619",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3529,
            "range": "± 191",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 30400,
            "range": "± 2197",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2194,
            "range": "± 552",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 262,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2239467,
            "range": "± 140933",
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
          "id": "4a8710a4a94720cd66b0c5976887373d748cdeff",
          "message": "Create NativeCallable trait.",
          "timestamp": "2020-05-11T13:36:50+08:00",
          "tree_id": "2da602ff4b4ea15e4e0df56f11da0fa0f21808b8",
          "url": "https://github.com/schungx/rhai/commit/4a8710a4a94720cd66b0c5976887373d748cdeff"
        },
        "date": 1589175620947,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 54984,
            "range": "± 11834",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 166,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 155,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 262,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1470,
            "range": "± 352",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1573,
            "range": "± 711",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 581,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 480,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 282,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 478,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 32,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2216,
            "range": "± 522",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2174,
            "range": "± 666",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 385,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 407,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 718,
            "range": "± 218",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 887,
            "range": "± 209",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 301,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 305,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 237,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 217,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 455,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 254,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 663932,
            "range": "± 135167",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21143143,
            "range": "± 3420184",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2027,
            "range": "± 380",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 9204,
            "range": "± 1918",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 2976,
            "range": "± 649",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 28615,
            "range": "± 8358",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1717,
            "range": "± 579",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 209,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1815735,
            "range": "± 349634",
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
          "id": "414f3d3c23a77f80565d3c49ef86360e208951d8",
          "message": "Fix bug with calling a pure function method-call style.",
          "timestamp": "2020-05-11T18:55:58+08:00",
          "tree_id": "38dbaf744eb29208f54a7fb23de8e943831f6bb0",
          "url": "https://github.com/schungx/rhai/commit/414f3d3c23a77f80565d3c49ef86360e208951d8"
        },
        "date": 1589194924042,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 62487,
            "range": "± 12460",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 206,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 197,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 318,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1883,
            "range": "± 241",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1848,
            "range": "± 264",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 624,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 586,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 328,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 667,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 36,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2361,
            "range": "± 373",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2447,
            "range": "± 521",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 407,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 436,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 818,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1038,
            "range": "± 182",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 349,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 373,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 282,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 262,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 780,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 302,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 692760,
            "range": "± 138682",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24404582,
            "range": "± 3135525",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2392,
            "range": "± 461",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10261,
            "range": "± 1528",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3079,
            "range": "± 634",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 29074,
            "range": "± 3192",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2172,
            "range": "± 475",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 241,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2064509,
            "range": "± 472652",
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
          "id": "2e2896756530b92092a8db9139dca5b0d1b3d3d2",
          "message": "Fix bug with wrong method call hash.",
          "timestamp": "2020-05-12T10:20:29+08:00",
          "tree_id": "7f3c58357dba4f0cd9ba097670dd91e9ee49fe7c",
          "url": "https://github.com/schungx/rhai/commit/2e2896756530b92092a8db9139dca5b0d1b3d3d2"
        },
        "date": 1589250156400,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 70799,
            "range": "± 2107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 211,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 202,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 349,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1863,
            "range": "± 653",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1876,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 618,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 681,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 368,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 721,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 42,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2650,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2719,
            "range": "± 289",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 450,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 484,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 856,
            "range": "± 288",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1106,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 389,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 391,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 322,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 294,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 923,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 345,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 788624,
            "range": "± 319935",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 27625283,
            "range": "± 2263632",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2762,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10879,
            "range": "± 4096",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3666,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 31666,
            "range": "± 3245",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2265,
            "range": "± 1076",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 271,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2228977,
            "range": "± 73993",
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
          "id": "ec678797593777f9be836c0914a39839c7fec6b9",
          "message": "Derive more standard traits.",
          "timestamp": "2020-05-12T18:48:25+08:00",
          "tree_id": "df9790cd2f977474266d6be0133ababb0cf36100",
          "url": "https://github.com/schungx/rhai/commit/ec678797593777f9be836c0914a39839c7fec6b9"
        },
        "date": 1589280619025,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 68156,
            "range": "± 14416",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 202,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 199,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 331,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1785,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1831,
            "range": "± 753",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 614,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 574,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 354,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 688,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 41,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2531,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2591,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 437,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 467,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 842,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1084,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 377,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 372,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 306,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 284,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 874,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 333,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 749174,
            "range": "± 73271",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26287674,
            "range": "± 2196800",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2727,
            "range": "± 494",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10603,
            "range": "± 430",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3519,
            "range": "± 1546",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 30597,
            "range": "± 17993",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2244,
            "range": "± 352",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 280,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2140503,
            "range": "± 118480",
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
          "id": "996a54279cc60f2fadfcaa55a37dc48f3c047fff",
          "message": "Pre-calculate property getter/setter function names.",
          "timestamp": "2020-05-13T10:19:18+08:00",
          "tree_id": "719851e806e5d3764792818d882c0dfba0c82868",
          "url": "https://github.com/schungx/rhai/commit/996a54279cc60f2fadfcaa55a37dc48f3c047fff"
        },
        "date": 1589336610668,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 67070,
            "range": "± 8759",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 210,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 243,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 339,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1825,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1711,
            "range": "± 242",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 670,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 695,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 331,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 655,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 38,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2563,
            "range": "± 351",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2651,
            "range": "± 401",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 431,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 464,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 797,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1064,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 407,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 367,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 205,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 273,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 570,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 332,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 715422,
            "range": "± 84775",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 27680462,
            "range": "± 2457638",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2832,
            "range": "± 429",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10552,
            "range": "± 1646",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3569,
            "range": "± 437",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 30577,
            "range": "± 3242",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2206,
            "range": "± 310",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 268,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2160731,
            "range": "± 315642",
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
          "id": "30e5e2f034c641709d226d034dae8d5e6093c9cb",
          "message": "Use modules to implement packages.",
          "timestamp": "2020-05-13T19:21:42+08:00",
          "tree_id": "5a899013ee828463fe48a67655da53283e85745c",
          "url": "https://github.com/schungx/rhai/commit/30e5e2f034c641709d226d034dae8d5e6093c9cb"
        },
        "date": 1589369135848,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 200693,
            "range": "± 26382",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 139,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 168,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 375,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1929,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1876,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 633,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 652,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 359,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 711,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 41,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2722,
            "range": "± 266",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2664,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 455,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 495,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 872,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1095,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 401,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 400,
            "range": "± 237",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 223,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 307,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 617,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 348,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 773471,
            "range": "± 46801",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 28858119,
            "range": "± 2789711",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2888,
            "range": "± 333",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10981,
            "range": "± 956",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3705,
            "range": "± 492",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 32147,
            "range": "± 4367",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2458,
            "range": "± 291",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 293,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2293078,
            "range": "± 319538",
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
          "id": "5a02548ebc5aca6434a763ff83df4c12a55c573a",
          "message": "Allocate packages with higher functions capacity.",
          "timestamp": "2020-05-13T19:39:34+08:00",
          "tree_id": "14bfe74014dcef9384789c5b04abbdad1b98fc2e",
          "url": "https://github.com/schungx/rhai/commit/5a02548ebc5aca6434a763ff83df4c12a55c573a"
        },
        "date": 1589370142341,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 121376,
            "range": "± 28041",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 134,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 119,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 276,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1373,
            "range": "± 272",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1352,
            "range": "± 226",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 516,
            "range": "± 196",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 557,
            "range": "± 223",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 260,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 533,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 32,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2013,
            "range": "± 639",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1913,
            "range": "± 524",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 321,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 325,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 655,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 881,
            "range": "± 345",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 289,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 309,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 163,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 215,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 436,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 245,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 601492,
            "range": "± 98275",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21213660,
            "range": "± 3938478",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2198,
            "range": "± 379",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8302,
            "range": "± 1635",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 2763,
            "range": "± 626",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 23850,
            "range": "± 5038",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1721,
            "range": "± 319",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 205,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1681160,
            "range": "± 361236",
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
          "id": "cabceb74982cf4ed332bd70698cc65797d8f82d7",
          "message": "Better handling of errors during function calls.",
          "timestamp": "2020-05-13T21:58:38+08:00",
          "tree_id": "028e916698fcbbee74a4e07f79e18a06b2645f98",
          "url": "https://github.com/schungx/rhai/commit/cabceb74982cf4ed332bd70698cc65797d8f82d7"
        },
        "date": 1589378586505,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 158977,
            "range": "± 22766",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 130,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 153,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 376,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1872,
            "range": "± 237",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1827,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 721,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 750,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 368,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 740,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 41,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2681,
            "range": "± 322",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2670,
            "range": "± 303",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 459,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 490,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 872,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1099,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 401,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 388,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 218,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 306,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 616,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 363,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 778410,
            "range": "± 109699",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 27633575,
            "range": "± 2133060",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2899,
            "range": "± 275",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10820,
            "range": "± 1010",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3575,
            "range": "± 282",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 32137,
            "range": "± 4179",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2399,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 275,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2231768,
            "range": "± 270788",
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
          "id": "5c61827c7ce58b4f28f6f335829fb4278abc35d1",
          "message": "Force-cast local variable names when pushing into scope.",
          "timestamp": "2020-05-14T11:21:56+08:00",
          "tree_id": "f1e81da62a768c22e331e77e66e169933e15ac6b",
          "url": "https://github.com/schungx/rhai/commit/5c61827c7ce58b4f28f6f335829fb4278abc35d1"
        },
        "date": 1589426755834,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 149688,
            "range": "± 24713",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 125,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 140,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 333,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1772,
            "range": "± 277",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1746,
            "range": "± 283",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 684,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 712,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 342,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 677,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 39,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2454,
            "range": "± 534",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2554,
            "range": "± 519",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 413,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 451,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 817,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1054,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 379,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 401,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 207,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 282,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 568,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 319,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 724352,
            "range": "± 177218",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 27115263,
            "range": "± 3219711",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2749,
            "range": "± 515",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10378,
            "range": "± 1694",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3436,
            "range": "± 432",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 30467,
            "range": "± 3972",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2180,
            "range": "± 288",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 261,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2119781,
            "range": "± 325731",
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
          "id": "5d5ceb4049abf4fb050f845b8021a00b9ea151ac",
          "message": "Consolidate all unsafe code under one single file.",
          "timestamp": "2020-05-14T18:27:22+08:00",
          "tree_id": "ef65824842a50c2fb56748ec4467be6e4ff713a4",
          "url": "https://github.com/schungx/rhai/commit/5d5ceb4049abf4fb050f845b8021a00b9ea151ac"
        },
        "date": 1589455854517,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 136740,
            "range": "± 9728",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 125,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 129,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 316,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1633,
            "range": "± 209",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1666,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 623,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 692,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 334,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 659,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 39,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2439,
            "range": "± 257",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2437,
            "range": "± 249",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 407,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 442,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 829,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1062,
            "range": "± 264",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 367,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 373,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 203,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 277,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 562,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 320,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 733574,
            "range": "± 52733",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25289340,
            "range": "± 2431929",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2696,
            "range": "± 429",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10208,
            "range": "± 1044",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3397,
            "range": "± 365",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 28766,
            "range": "± 2399",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2185,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 247,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2046085,
            "range": "± 189612",
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
          "id": "55c97eb64927953a2ef80dcab6c3facc4895c4d9",
          "message": "Add progress tracking and operations limit.",
          "timestamp": "2020-05-15T11:43:32+08:00",
          "tree_id": "f7107f760277cd4a7a87b680e8c97d793c2f94e1",
          "url": "https://github.com/schungx/rhai/commit/55c97eb64927953a2ef80dcab6c3facc4895c4d9"
        },
        "date": 1589514481543,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 135777,
            "range": "± 18735",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 138,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 149,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 315,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1792,
            "range": "± 268",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1812,
            "range": "± 247",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 716,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 723,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 335,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 671,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 43,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2604,
            "range": "± 311",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2609,
            "range": "± 415",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 430,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 452,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 839,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1008,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 366,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 376,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 200,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 290,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 583,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 338,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 753288,
            "range": "± 122285",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26065551,
            "range": "± 3009653",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2638,
            "range": "± 341",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 9952,
            "range": "± 1242",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3857,
            "range": "± 483",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 30857,
            "range": "± 3806",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2233,
            "range": "± 273",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 258,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2211154,
            "range": "± 262707",
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
          "id": "be97047e512c212bad513557d249bd967d5d26fa",
          "message": "Limit modules loading.",
          "timestamp": "2020-05-15T21:40:54+08:00",
          "tree_id": "f0d2622c48dc51580373df9905a54a1a0c112188",
          "url": "https://github.com/schungx/rhai/commit/be97047e512c212bad513557d249bd967d5d26fa"
        },
        "date": 1589550168532,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 142883,
            "range": "± 3992",
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
            "value": 143,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 336,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1924,
            "range": "± 227",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1864,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 743,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 771,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 361,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 712,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 45,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2865,
            "range": "± 236",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2675,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 451,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 488,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 881,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1119,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 394,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 387,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 216,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 296,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 598,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 346,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 776520,
            "range": "± 54986",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 27283047,
            "range": "± 997765",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2861,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10620,
            "range": "± 997",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3512,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 30386,
            "range": "± 987",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2384,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 267,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2292737,
            "range": "± 175347",
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
          "id": "0cb781c1aa11182fca627e774c4b3d417b442b54",
          "message": "Avoid allocation in Target.",
          "timestamp": "2020-05-16T11:42:56+08:00",
          "tree_id": "2ba8b094370d276e8b4d0560f1e252413a7376ab",
          "url": "https://github.com/schungx/rhai/commit/0cb781c1aa11182fca627e774c4b3d417b442b54"
        },
        "date": 1589600784449,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 123064,
            "range": "± 27622",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 117,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 121,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 272,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1721,
            "range": "± 618",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1540,
            "range": "± 344",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 599,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 631,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 294,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 586,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 34,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2425,
            "range": "± 453",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2180,
            "range": "± 581",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 373,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 417,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 711,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 954,
            "range": "± 229",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 359,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 342,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 174,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 250,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 500,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 283,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 640457,
            "range": "± 139396",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22068382,
            "range": "± 3407128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2235,
            "range": "± 365",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8919,
            "range": "± 2029",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 2925,
            "range": "± 532",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 26117,
            "range": "± 5462",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1889,
            "range": "± 305",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 233,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1952779,
            "range": "± 401748",
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
          "id": "a2c50879fe03598ecbc599400b13651a1b578f0b",
          "message": "Fix dropping issues with StaticVec and use it everywhere.",
          "timestamp": "2020-05-17T00:24:07+08:00",
          "tree_id": "42a6f9933ba14e9166c41b95bf379c0b5cea5540",
          "url": "https://github.com/schungx/rhai/commit/a2c50879fe03598ecbc599400b13651a1b578f0b"
        },
        "date": 1589646378018,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 143364,
            "range": "± 4296",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 143,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 131,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 349,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1863,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1858,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 727,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 756,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 355,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 696,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 46,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2674,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2709,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 439,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 471,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 859,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1097,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 409,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 436,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 200,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 296,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 580,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 370,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 760731,
            "range": "± 26287",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26419503,
            "range": "± 925081",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2649,
            "range": "± 312",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10777,
            "range": "± 1004",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3468,
            "range": "± 224",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 30499,
            "range": "± 1028",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2223,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 262,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2208634,
            "range": "± 112665",
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
          "id": "8b5550eeb6b5c98e4e86867810d9c69395c63b22",
          "message": "Complete StaticVec implementation.",
          "timestamp": "2020-05-17T22:19:49+08:00",
          "tree_id": "dc902f880d7630425c944dd8cb31319e16d0d7c9",
          "url": "https://github.com/schungx/rhai/commit/8b5550eeb6b5c98e4e86867810d9c69395c63b22"
        },
        "date": 1589725408521,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 137327,
            "range": "± 18570",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 156,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 130,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 349,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2076,
            "range": "± 204",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2078,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 722,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 627,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 360,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 734,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 47,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2862,
            "range": "± 446",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2836,
            "range": "± 236",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 475,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 501,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 891,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1145,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 420,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 409,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 222,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 317,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 622,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 396,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 802090,
            "range": "± 140113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 29008868,
            "range": "± 3682138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2793,
            "range": "± 365",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12101,
            "range": "± 1617",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3745,
            "range": "± 552",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34192,
            "range": "± 6031",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2561,
            "range": "± 398",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 302,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2335442,
            "range": "± 276547",
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
          "id": "f4a528a88a24782b6878becce9f31a4f430f1790",
          "message": "Add release notes.",
          "timestamp": "2020-05-18T09:36:34+08:00",
          "tree_id": "e78b1dd821968b73adc827ea06d891fc1e7bea25",
          "url": "https://github.com/schungx/rhai/commit/f4a528a88a24782b6878becce9f31a4f430f1790"
        },
        "date": 1589766027049,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 118168,
            "range": "± 20495",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 121,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 118,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 317,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1860,
            "range": "± 266",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1867,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 648,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 665,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 327,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 655,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 40,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2416,
            "range": "± 388",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2478,
            "range": "± 440",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 409,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 439,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 783,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 975,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 371,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 369,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 207,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 276,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 533,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 364,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 705897,
            "range": "± 137844",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25005033,
            "range": "± 3929018",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2530,
            "range": "± 547",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10143,
            "range": "± 2135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3292,
            "range": "± 593",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 30287,
            "range": "± 7811",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2206,
            "range": "± 316",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 266,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2003168,
            "range": "± 294879",
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
          "id": "1824dced69a9b15e6f94bd14d00b9ff157be1c0d",
          "message": "Limit expression/statement nesting depths.",
          "timestamp": "2020-05-18T19:32:22+08:00",
          "tree_id": "b8d39b4b41bc715c12b264b2d32ed1d43c1eebf5",
          "url": "https://github.com/schungx/rhai/commit/1824dced69a9b15e6f94bd14d00b9ff157be1c0d"
        },
        "date": 1589801661387,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 119383,
            "range": "± 68966",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 144,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 134,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 327,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1918,
            "range": "± 319",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1932,
            "range": "± 356",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 621,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 602,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 352,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 691,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 46,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2746,
            "range": "± 356",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2704,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 455,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 485,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 865,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1085,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 383,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 383,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 211,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 308,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 598,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 391,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 759010,
            "range": "± 268097",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26485284,
            "range": "± 3046632",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2833,
            "range": "± 762",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11286,
            "range": "± 739",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3622,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 32715,
            "range": "± 2997",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2547,
            "range": "± 251",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 285,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2276410,
            "range": "± 109369",
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
          "id": "a22f338b03857742f6a650b77885a4a5fb6ac94a",
          "message": "Back out NativeCallable trait.",
          "timestamp": "2020-05-19T10:13:37+08:00",
          "tree_id": "c86deaf151323da159e14e012ad68e2f536a3fc4",
          "url": "https://github.com/schungx/rhai/commit/a22f338b03857742f6a650b77885a4a5fb6ac94a"
        },
        "date": 1589854811195,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 99293,
            "range": "± 14260",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 134,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 131,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 315,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1915,
            "range": "± 298",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1880,
            "range": "± 231",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 692,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 679,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 325,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 676,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 42,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2661,
            "range": "± 411",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2565,
            "range": "± 526",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 417,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 464,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 747,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1065,
            "range": "± 237",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 417,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 413,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 202,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 288,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 572,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 373,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 724599,
            "range": "± 252561",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 27077301,
            "range": "± 4775217",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2921,
            "range": "± 493",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11599,
            "range": "± 2044",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3507,
            "range": "± 595",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 33646,
            "range": "± 5832",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2483,
            "range": "± 535",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 301,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2189158,
            "range": "± 457445",
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
          "id": "3295060dba35440239732ef87b8aa05df9bce63c",
          "message": "Unify all functions under CallableFunction type.",
          "timestamp": "2020-05-19T19:03:06+08:00",
          "tree_id": "1033fe4995fddfec373891da83ec6aae83c107c9",
          "url": "https://github.com/schungx/rhai/commit/3295060dba35440239732ef87b8aa05df9bce63c"
        },
        "date": 1589886311510,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 102848,
            "range": "± 7174",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 128,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 118,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 305,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1940,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1952,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 739,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 625,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 351,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 696,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 45,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2867,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2708,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 447,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 481,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 797,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1059,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 382,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 375,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 204,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 297,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 588,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 370,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 753525,
            "range": "± 21657",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26213940,
            "range": "± 594593",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2822,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11350,
            "range": "± 268",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3605,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 31500,
            "range": "± 3371",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2518,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 303,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2205644,
            "range": "± 44240",
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
          "id": "ab76a69b1242bda3dc3e3cfe851a3855bcb1c995",
          "message": "Avoid repeating empty TypeId's when calculating hash.",
          "timestamp": "2020-05-19T20:07:51+08:00",
          "tree_id": "e2ec0b36efd6285938d3def2b447cec9d6c91790",
          "url": "https://github.com/schungx/rhai/commit/ab76a69b1242bda3dc3e3cfe851a3855bcb1c995"
        },
        "date": 1589890209445,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 107934,
            "range": "± 19683",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 127,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 121,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 314,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1950,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1915,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 623,
            "range": "± 235",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 765,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 359,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 707,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 46,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 3043,
            "range": "± 526",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2702,
            "range": "± 182",
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
            "value": 483,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 816,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1078,
            "range": "± 219",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 386,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 391,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 214,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 305,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 610,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 380,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 820989,
            "range": "± 118257",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26978826,
            "range": "± 1840944",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2968,
            "range": "± 365",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11229,
            "range": "± 1705",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3658,
            "range": "± 312",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 33043,
            "range": "± 4064",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2450,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 288,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2291626,
            "range": "± 194316",
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
          "id": "4a1fd66b9f1d5d1e2f357aba56748b10095a9cbf",
          "message": "Reduce Rc/Arc wrapping for functions.",
          "timestamp": "2020-05-19T22:25:57+08:00",
          "tree_id": "f498732531455b40c0aa14aac006dd751194dd08",
          "url": "https://github.com/schungx/rhai/commit/4a1fd66b9f1d5d1e2f357aba56748b10095a9cbf"
        },
        "date": 1589898485487,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 82800,
            "range": "± 26246",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 94,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 86,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 229,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1465,
            "range": "± 454",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1440,
            "range": "± 228",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 597,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 575,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 277,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 492,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 32,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2175,
            "range": "± 400",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1878,
            "range": "± 544",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 328,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 360,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 564,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 756,
            "range": "± 269",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 313,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 288,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 162,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 228,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 453,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 296,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 618220,
            "range": "± 308722",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 20707470,
            "range": "± 2356662",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1999,
            "range": "± 486",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8424,
            "range": "± 2183",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 2809,
            "range": "± 1182",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 23691,
            "range": "± 6049",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1784,
            "range": "± 542",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 198,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1678791,
            "range": "± 398994",
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
          "id": "5db1fd37122ee587da732300ed48f79535d95e1a",
          "message": "Do not optimize eval_expression scripts.",
          "timestamp": "2020-05-20T00:06:19+08:00",
          "tree_id": "4eab9a618266d150379ff18f71590f001de64d78",
          "url": "https://github.com/schungx/rhai/commit/5db1fd37122ee587da732300ed48f79535d95e1a"
        },
        "date": 1589904988726,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 115422,
            "range": "± 34079",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 122,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 108,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 262,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1921,
            "range": "± 512",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1640,
            "range": "± 385",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 554,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 621,
            "range": "± 236",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 297,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 596,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 33,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2169,
            "range": "± 944",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2389,
            "range": "± 648",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 393,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 425,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 779,
            "range": "± 282",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1065,
            "range": "± 261",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 374,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 371,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 188,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 237,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 528,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 339,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 753428,
            "range": "± 278638",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 27134044,
            "range": "± 6063566",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2359,
            "range": "± 551",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8972,
            "range": "± 1650",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3594,
            "range": "± 1311",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 30305,
            "range": "± 9994",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2131,
            "range": "± 630",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 271,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2184918,
            "range": "± 583994",
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
          "id": "80fcc40710fb9607b949a31a8b24eb48ee05bae9",
          "message": "Use function pointers for iterators.",
          "timestamp": "2020-05-20T19:27:23+08:00",
          "tree_id": "1579c0c1874d0ecd4cb4bcb25876bfde6fdf0d6a",
          "url": "https://github.com/schungx/rhai/commit/80fcc40710fb9607b949a31a8b24eb48ee05bae9"
        },
        "date": 1589974277559,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 129640,
            "range": "± 14366",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 127,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 115,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 344,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1962,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1946,
            "range": "± 194",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 586,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 625,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14243,
            "range": "± 1766",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 11678,
            "range": "± 1218",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 370,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 717,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 49,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 861,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 46,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2804,
            "range": "± 703",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2744,
            "range": "± 259",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 448,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 495,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 927,
            "range": "± 275",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1170,
            "range": "± 208",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 404,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 395,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 223,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 314,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 651,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 398,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 831917,
            "range": "± 164927",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 30551242,
            "range": "± 5025100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2869,
            "range": "± 867",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10419,
            "range": "± 1741",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3947,
            "range": "± 1251",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15215,
            "range": "± 3149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 12039,
            "range": "± 1961",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 31654,
            "range": "± 2727",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2148,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 283,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2427502,
            "range": "± 469239",
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
          "id": "800a7bf2831d91038660ab74f52090b772ade162",
          "message": " Remove unnecessary traits and types.",
          "timestamp": "2020-05-21T17:11:01+08:00",
          "tree_id": "57bbf5c118ba97ba8dbdad25629b4268d8fcd02e",
          "url": "https://github.com/schungx/rhai/commit/800a7bf2831d91038660ab74f52090b772ade162"
        },
        "date": 1590052380006,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 121318,
            "range": "± 47644",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 126,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 117,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 317,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1829,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1819,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 569,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 630,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 13802,
            "range": "± 554",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 10951,
            "range": "± 601",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 362,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 704,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 46,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 815,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 46,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2654,
            "range": "± 305",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2696,
            "range": "± 357",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 450,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 482,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 814,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1076,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 393,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 389,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 216,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 306,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 609,
            "range": "± 25",
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
            "value": 773109,
            "range": "± 28009",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 27173924,
            "range": "± 1796882",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2674,
            "range": "± 362",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10291,
            "range": "± 1403",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3560,
            "range": "± 1849",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14771,
            "range": "± 3549",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 11853,
            "range": "± 1530",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 30721,
            "range": "± 2478",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2154,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 278,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2264353,
            "range": "± 150583",
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
          "id": "2f0ab18b7010804c4d97565dd3e3ed36c5322bc8",
          "message": "Merge register_result_fn and register_dynamic_fn.",
          "timestamp": "2020-05-22T13:09:17+08:00",
          "tree_id": "0e2928331015dcbaac7d8639cdf7a6b139f8a775",
          "url": "https://github.com/schungx/rhai/commit/2f0ab18b7010804c4d97565dd3e3ed36c5322bc8"
        },
        "date": 1590125480413,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 118293,
            "range": "± 3049",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 126,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 124,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 322,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1799,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1763,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 565,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 596,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14365,
            "range": "± 690",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 11219,
            "range": "± 235",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 338,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 661,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 45,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 777,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 45,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2830,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2631,
            "range": "± 410",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 442,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 479,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 781,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1032,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 365,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 366,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 211,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 294,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 594,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 368,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 733656,
            "range": "± 107469",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26237385,
            "range": "± 1708803",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2637,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10003,
            "range": "± 334",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3274,
            "range": "± 439",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 13906,
            "range": "± 2200",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 11509,
            "range": "± 1170",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 30643,
            "range": "± 5176",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2144,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 266,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2214301,
            "range": "± 39160",
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
          "id": "a743c47345ba7891952555ebe6e191d2c430e6b0",
          "message": "Refactor.",
          "timestamp": "2020-05-22T21:50:24+08:00",
          "tree_id": "ff8b8e61940118bf20a242fa3d3fa4e47b72d05b",
          "url": "https://github.com/schungx/rhai/commit/a743c47345ba7891952555ebe6e191d2c430e6b0"
        },
        "date": 1590157092259,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 116343,
            "range": "± 19650",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 127,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 117,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 330,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1802,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1908,
            "range": "± 346",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 570,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 598,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14018,
            "range": "± 991",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 11177,
            "range": "± 952",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 349,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 673,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 46,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 793,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 46,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2776,
            "range": "± 246",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2607,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 442,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 470,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 777,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1041,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 369,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 368,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 208,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 293,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 593,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 364,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 741918,
            "range": "± 75509",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25870449,
            "range": "± 1246157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2667,
            "range": "± 493",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10167,
            "range": "± 834",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3322,
            "range": "± 383",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 13939,
            "range": "± 1203",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 11625,
            "range": "± 1418",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 30945,
            "range": "± 4073",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2167,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 267,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2216863,
            "range": "± 125857",
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
          "id": "b49e1e199a3531a1f79568b0a2511d04aa8c252a",
          "message": "Build-in certain common operators.",
          "timestamp": "2020-05-23T18:59:28+08:00",
          "tree_id": "ea56efb8d96feef39eddb58f85f97ffbf28a6279",
          "url": "https://github.com/schungx/rhai/commit/b49e1e199a3531a1f79568b0a2511d04aa8c252a"
        },
        "date": 1590231838970,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 86525,
            "range": "± 15779",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 114,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 103,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 292,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1682,
            "range": "± 461",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1764,
            "range": "± 374",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 554,
            "range": "± 317",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 560,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 12452,
            "range": "± 1457",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 10032,
            "range": "± 1521",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 274,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 488,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 42,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 706,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 45,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2440,
            "range": "± 519",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2432,
            "range": "± 460",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 402,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 471,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 680,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 754,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 291,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 305,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 203,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 250,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 604,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 345,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 635928,
            "range": "± 75691",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21510005,
            "range": "± 2360695",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2617,
            "range": "± 475",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 9706,
            "range": "± 1656",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3186,
            "range": "± 350",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 13073,
            "range": "± 2610",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 10557,
            "range": "± 2044",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 28781,
            "range": "± 4810",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2004,
            "range": "± 421",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 248,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1841369,
            "range": "± 351803",
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
          "id": "d56634cac7148132196b7480d177ccecf586b17e",
          "message": "Complete built-in operators.",
          "timestamp": "2020-05-24T00:29:06+08:00",
          "tree_id": "2f30d78b9bdb119adab1c0104ca757ca4d7a33be",
          "url": "https://github.com/schungx/rhai/commit/d56634cac7148132196b7480d177ccecf586b17e"
        },
        "date": 1590251614660,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 92684,
            "range": "± 16706",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 111,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 111,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 298,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1572,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1729,
            "range": "± 215",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 530,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 537,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 11590,
            "range": "± 2003",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 9939,
            "range": "± 1161",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 297,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 498,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 41,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 665,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 43,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2579,
            "range": "± 326",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2550,
            "range": "± 314",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 416,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 422,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 663,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 758,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 291,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 291,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 204,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 292,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 558,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 342,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 602769,
            "range": "± 81880",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 20579639,
            "range": "± 2774096",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2442,
            "range": "± 343",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 9054,
            "range": "± 1421",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 2952,
            "range": "± 409",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 12882,
            "range": "± 2301",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 10343,
            "range": "± 1359",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 28258,
            "range": "± 3300",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1981,
            "range": "± 256",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 242,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1745611,
            "range": "± 229923",
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
          "id": "65ee262f1b41521208aefd1748deac99ccc8a765",
          "message": "Refine README.",
          "timestamp": "2020-05-24T12:40:28+08:00",
          "tree_id": "dfee5bb05833b050e3b0df8422f831c64899db6f",
          "url": "https://github.com/schungx/rhai/commit/65ee262f1b41521208aefd1748deac99ccc8a765"
        },
        "date": 1590295494025,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 88491,
            "range": "± 14531",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 100,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 93,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 300,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1608,
            "range": "± 427",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1602,
            "range": "± 382",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 474,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 515,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10717,
            "range": "± 2358",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 9671,
            "range": "± 3415",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 256,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 477,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 37,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 652,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 39,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2289,
            "range": "± 461",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2297,
            "range": "± 437",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 391,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 421,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 666,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 717,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 298,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 291,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 190,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 251,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 532,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 314,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 579790,
            "range": "± 145846",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21326072,
            "range": "± 3591978",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2324,
            "range": "± 382",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8806,
            "range": "± 2528",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 2950,
            "range": "± 656",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 12096,
            "range": "± 2671",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 10058,
            "range": "± 1984",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 27452,
            "range": "± 6040",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1938,
            "range": "± 402",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 239,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1754914,
            "range": "± 467981",
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
          "id": "0374311cf6c2f1bf90e847c58fc93c9e846ed978",
          "message": "Optimize hot path of operators calling.",
          "timestamp": "2020-05-24T16:40:00+08:00",
          "tree_id": "ff888c6a23857d48e8ffbedcded7681bcc2217ef",
          "url": "https://github.com/schungx/rhai/commit/0374311cf6c2f1bf90e847c58fc93c9e846ed978"
        },
        "date": 1590309839273,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 88321,
            "range": "± 16666",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 111,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 92,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 290,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1692,
            "range": "± 352",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1569,
            "range": "± 422",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 484,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 523,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 11197,
            "range": "± 2593",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8578,
            "range": "± 1715",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 275,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 505,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 45,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 674,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 46,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2227,
            "range": "± 470",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2734,
            "range": "± 708",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 402,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 454,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 866,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 781,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 278,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 284,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 196,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 255,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 526,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 302,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 540700,
            "range": "± 91809",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 20853586,
            "range": "± 4066402",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2398,
            "range": "± 563",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8217,
            "range": "± 3272",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 2865,
            "range": "± 628",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 12044,
            "range": "± 3320",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 11179,
            "range": "± 2419",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 26473,
            "range": "± 5329",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1946,
            "range": "± 476",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 229,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1629218,
            "range": "± 490791",
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
          "id": "bbed4c6ef45a986163c75474a1a91a22a12c5c2c",
          "message": "Docs.",
          "timestamp": "2020-05-24T23:42:40+08:00",
          "tree_id": "6ee4d2d91d7e145164ab0e2549d21a8231195a7c",
          "url": "https://github.com/schungx/rhai/commit/bbed4c6ef45a986163c75474a1a91a22a12c5c2c"
        },
        "date": 1590335283405,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 97687,
            "range": "± 11474",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 111,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 104,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 301,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1669,
            "range": "± 258",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1593,
            "range": "± 229",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 554,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 558,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 12398,
            "range": "± 2722",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 10309,
            "range": "± 1611",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 277,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 512,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 43,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 700,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 41,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2400,
            "range": "± 346",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2447,
            "range": "± 341",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 405,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 441,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 712,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 776,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 304,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 298,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 195,
            "range": "± 33",
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
            "value": 536,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 330,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 578884,
            "range": "± 124258",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 20319276,
            "range": "± 2996528",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2421,
            "range": "± 391",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8810,
            "range": "± 1715",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 2840,
            "range": "± 1056",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 12435,
            "range": "± 2584",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 10246,
            "range": "± 1966",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 26721,
            "range": "± 4757",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1895,
            "range": "± 316",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 234,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1744839,
            "range": "± 349814",
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
          "id": "99ea2b33c971efe05b2387607d1b0828da616cd3",
          "message": "Use immutable strings.",
          "timestamp": "2020-05-25T13:44:28+08:00",
          "tree_id": "58fff3c0e9181175a24ff88ea402c04723da10d6",
          "url": "https://github.com/schungx/rhai/commit/99ea2b33c971efe05b2387607d1b0828da616cd3"
        },
        "date": 1590385626133,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 102917,
            "range": "± 10058",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 127,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 116,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 330,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2351,
            "range": "± 247",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2109,
            "range": "± 298",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 604,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 626,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 13431,
            "range": "± 1655",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 11455,
            "range": "± 530",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 300,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 552,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 46,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 822,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 46,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2967,
            "range": "± 390",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2873,
            "range": "± 274",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 441,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 505,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 842,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 893,
            "range": "± 547",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 328,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 327,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 220,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 295,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 622,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 377,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 655072,
            "range": "± 22748",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22937612,
            "range": "± 1228140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2683,
            "range": "± 554",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10311,
            "range": "± 1638",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3384,
            "range": "± 733",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14146,
            "range": "± 936",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 11947,
            "range": "± 1113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 30945,
            "range": "± 894",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2184,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 269,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2011128,
            "range": "± 135713",
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
          "id": "95e67c48bd0735ed7aeb050da0adc5bca4d5724a",
          "message": "Optimize op-assignment statement.",
          "timestamp": "2020-05-25T20:14:31+08:00",
          "tree_id": "610331c8c72b580b3b87f11396e3313710e9a6dd",
          "url": "https://github.com/schungx/rhai/commit/95e67c48bd0735ed7aeb050da0adc5bca4d5724a"
        },
        "date": 1590409123182,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 98806,
            "range": "± 13524",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 121,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 108,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 320,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2132,
            "range": "± 336",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2032,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 576,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 625,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 12605,
            "range": "± 1839",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 10701,
            "range": "± 1339",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 294,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 536,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 46,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 804,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 44,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 916024,
            "range": "± 110719",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 5710857,
            "range": "± 694254",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3301828,
            "range": "± 452203",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2658,
            "range": "± 357",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2892,
            "range": "± 357",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 437,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 489,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 822,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 800,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 320,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 314,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 214,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 286,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 595,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 362,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 372502,
            "range": "± 66847",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22533307,
            "range": "± 1939659",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2540,
            "range": "± 330",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11216,
            "range": "± 1473",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3245,
            "range": "± 338",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 13281,
            "range": "± 1778",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 11280,
            "range": "± 1169",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 30287,
            "range": "± 4373",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2065,
            "range": "± 217",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 251,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1392259,
            "range": "± 160726",
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
          "id": "b34d5fe3a18d0769a3f09abd21ae884d8086b9a4",
          "message": "Complete ImmutableString.",
          "timestamp": "2020-05-26T14:14:03+08:00",
          "tree_id": "406368154af6a3458188c8ef7f10e1fdd968f296",
          "url": "https://github.com/schungx/rhai/commit/b34d5fe3a18d0769a3f09abd21ae884d8086b9a4"
        },
        "date": 1590473930137,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 96314,
            "range": "± 12794",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 112,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 103,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 307,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2136,
            "range": "± 263",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1988,
            "range": "± 268",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 514,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 552,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 12057,
            "range": "± 1926",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 10648,
            "range": "± 1632",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 286,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 510,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 40,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 793,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 42,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 859727,
            "range": "± 138784",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 5631151,
            "range": "± 837925",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2809744,
            "range": "± 319162",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2867,
            "range": "± 408",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2573,
            "range": "± 467",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 417,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 460,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 797,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 784,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 304,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 306,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 199,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 262,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 553,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 346,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 344082,
            "range": "± 47750",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22569151,
            "range": "± 2332657",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2774,
            "range": "± 418",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10122,
            "range": "± 1747",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3344,
            "range": "± 398",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 13009,
            "range": "± 2441",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 11169,
            "range": "± 2745",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 28756,
            "range": "± 5225",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1964,
            "range": "± 302",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 249,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1331144,
            "range": "± 279017",
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
          "id": "24a93ef824081ddecbadb2825d32e4b18309aaed",
          "message": "Add missing imports.",
          "timestamp": "2020-05-26T23:05:44+08:00",
          "tree_id": "ddec08855025349d965449a63a69d33fe5649025",
          "url": "https://github.com/schungx/rhai/commit/24a93ef824081ddecbadb2825d32e4b18309aaed"
        },
        "date": 1590542974405,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 100789,
            "range": "± 26122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 131,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 113,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 322,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2180,
            "range": "± 263",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1964,
            "range": "± 518",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 578,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 596,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 13073,
            "range": "± 2133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 11377,
            "range": "± 1188",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 294,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 558,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 46,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 830,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 45,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 937017,
            "range": "± 106287",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 5674339,
            "range": "± 715253",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2919780,
            "range": "± 310117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2747,
            "range": "± 475",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2954,
            "range": "± 671",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 430,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 491,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 775,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 843,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 324,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 322,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 210,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 280,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 597,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 361,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 375060,
            "range": "± 28983",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22898097,
            "range": "± 2275601",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2602,
            "range": "± 492",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10705,
            "range": "± 1958",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3293,
            "range": "± 400",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 13803,
            "range": "± 939",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 12334,
            "range": "± 1772",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 30094,
            "range": "± 3280",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2095,
            "range": "± 302",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 272,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1367732,
            "range": "± 138177",
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
          "id": "854634afa0bf8ef36e5b19815efe682b8901fde9",
          "message": "Allow native overriding implementation of assignment operators.",
          "timestamp": "2020-05-27T13:22:10+08:00",
          "tree_id": "a7f7229588bb02e9615bc03980b6c3502eb5c9c0",
          "url": "https://github.com/schungx/rhai/commit/854634afa0bf8ef36e5b19815efe682b8901fde9"
        },
        "date": 1590557064252,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 81340,
            "range": "± 43002",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 93,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 87,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 238,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1635,
            "range": "± 755",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1404,
            "range": "± 299",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 517,
            "range": "± 264",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 481,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10571,
            "range": "± 3358",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 7918,
            "range": "± 2109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 248,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 433,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 32,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 664,
            "range": "± 337",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 39,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1457221,
            "range": "± 388151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2267183,
            "range": "± 447610",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1952029,
            "range": "± 494203",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1961,
            "range": "± 1421",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2047,
            "range": "± 591",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 358,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 398,
            "range": "± 216",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 585,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 609,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 268,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 254,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 154,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 227,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 487,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 310,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 388691,
            "range": "± 104180",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 17764592,
            "range": "± 2785110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2137,
            "range": "± 1065",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8391,
            "range": "± 3424",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 2655,
            "range": "± 722",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10974,
            "range": "± 3003",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 8573,
            "range": "± 2582",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 23174,
            "range": "± 17749",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1731,
            "range": "± 684",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 210,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1216784,
            "range": "± 305284",
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
          "id": "acd46851450c3949b203324ea99eee57331f7fd6",
          "message": "Convert function calls to method calls to use &mut first argument.",
          "timestamp": "2020-05-28T23:57:09+08:00",
          "tree_id": "48c949ac675521199e55ee95fc174973b2d18a6e",
          "url": "https://github.com/schungx/rhai/commit/acd46851450c3949b203324ea99eee57331f7fd6"
        },
        "date": 1590681755391,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 79965,
            "range": "± 16353",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 96,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 86,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 264,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1873,
            "range": "± 454",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1586,
            "range": "± 585",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 459,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 494,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10577,
            "range": "± 1833",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 8869,
            "range": "± 1489",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 243,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 451,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 37,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 684,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 38,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1455149,
            "range": "± 261569",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2315115,
            "range": "± 349827",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1856278,
            "range": "± 371860",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2294,
            "range": "± 415",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2298,
            "range": "± 369",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 354,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 389,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 716,
            "range": "± 271",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 666,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 232,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 227,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 173,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 230,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 504,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 308,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 327478,
            "range": "± 85357",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 16483280,
            "range": "± 2389627",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2121,
            "range": "± 391",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 9047,
            "range": "± 1620",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 2702,
            "range": "± 571",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 11580,
            "range": "± 2193",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 10037,
            "range": "± 1527",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 24396,
            "range": "± 5038",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1758,
            "range": "± 448",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 250,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1233824,
            "range": "± 270490",
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
          "id": "9616452c00401f3f33e73b8cacea3a0c4eb58fa6",
          "message": "Fix bug in calling script function in method style.",
          "timestamp": "2020-05-29T00:53:30+08:00",
          "tree_id": "c7bf0acbd45e093cb8b33c4f90a6dc0d227d1f2a",
          "url": "https://github.com/schungx/rhai/commit/9616452c00401f3f33e73b8cacea3a0c4eb58fa6"
        },
        "date": 1590684971692,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 100845,
            "range": "± 15717",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 124,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 118,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 326,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2295,
            "range": "± 593",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2032,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 581,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 626,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 13048,
            "range": "± 660",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 11405,
            "range": "± 1379",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 304,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 561,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 46,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 825,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 45,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1828549,
            "range": "± 204891",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2890823,
            "range": "± 853078",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2407991,
            "range": "± 379958",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2743,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2982,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 443,
            "range": "± 443",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 486,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 863,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 837,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 286,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 282,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 220,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 316,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 618,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 379,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 426303,
            "range": "± 14132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21190869,
            "range": "± 1443661",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2667,
            "range": "± 219",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11515,
            "range": "± 977",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3404,
            "range": "± 471",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14417,
            "range": "± 546",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 12680,
            "range": "± 983",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 30736,
            "range": "± 4149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2199,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 268,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1504603,
            "range": "± 59151",
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
          "id": "e1242df5c8bfea4dd0142c844218dccf890ab17a",
          "message": "Extract copy/restore of first argument in method call.",
          "timestamp": "2020-05-29T18:15:58+08:00",
          "tree_id": "4574c7d250bb5a5be2a35c285c8ff18353c0b123",
          "url": "https://github.com/schungx/rhai/commit/e1242df5c8bfea4dd0142c844218dccf890ab17a"
        },
        "date": 1590747938077,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 106177,
            "range": "± 3852",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 129,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 118,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 344,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2338,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2104,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 603,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 639,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 13696,
            "range": "± 506",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 11936,
            "range": "± 595",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 320,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 589,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 48,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 874,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 49,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1920632,
            "range": "± 76590",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2996385,
            "range": "± 308105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2473693,
            "range": "± 115007",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2866,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 3002,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 462,
            "range": "± 55",
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
            "value": 828,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 851,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 299,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 294,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 222,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 314,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 679,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 392,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 445924,
            "range": "± 71392",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22359421,
            "range": "± 1700761",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2796,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11872,
            "range": "± 587",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3527,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15057,
            "range": "± 589",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 12361,
            "range": "± 550",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 32457,
            "range": "± 3818",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2294,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 280,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1580199,
            "range": "± 87399",
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
          "id": "4c46c7e26ba59a85c8efbd0370d07c63bf187f16",
          "message": "Register property versions of some methods.",
          "timestamp": "2020-05-30T10:30:21+08:00",
          "tree_id": "1edd35900782be0b041577c8d95358ede14d3202",
          "url": "https://github.com/schungx/rhai/commit/4c46c7e26ba59a85c8efbd0370d07c63bf187f16"
        },
        "date": 1590809714090,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 92316,
            "range": "± 18820",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 107,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 95,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 267,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1788,
            "range": "± 618",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1660,
            "range": "± 248",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 469,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 506,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 12040,
            "range": "± 2445",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 9481,
            "range": "± 1706",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 250,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 473,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 42,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 780,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 37,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1486815,
            "range": "± 385171",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2353399,
            "range": "± 424301",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2044511,
            "range": "± 349963",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2329,
            "range": "± 417",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2445,
            "range": "± 350",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 430,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 411,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 694,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 722,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 233,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 232,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 170,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 255,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 527,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 311,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 341011,
            "range": "± 50414",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 18969156,
            "range": "± 2558900",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2137,
            "range": "± 279",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 9319,
            "range": "± 1231",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 2704,
            "range": "± 469",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 11071,
            "range": "± 2157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 10459,
            "range": "± 1579",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 25102,
            "range": "± 5223",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1806,
            "range": "± 273",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 215,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1296328,
            "range": "± 172981",
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
          "id": "c9de37e8d1a930df585d1129d89fc746bde1b1ba",
          "message": "Hash functions only once via custom hasher.",
          "timestamp": "2020-05-31T00:02:23+08:00",
          "tree_id": "3b10c585351a9e78d91202ab4a04919d48654b2a",
          "url": "https://github.com/schungx/rhai/commit/c9de37e8d1a930df585d1129d89fc746bde1b1ba"
        },
        "date": 1590854702766,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 91719,
            "range": "± 9927",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 93,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 85,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 280,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2238,
            "range": "± 349",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1997,
            "range": "± 188",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 586,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 612,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14393,
            "range": "± 838",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 11159,
            "range": "± 1010",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 270,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 483,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 46,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 753,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 46,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1446292,
            "range": "± 403530",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2331057,
            "range": "± 550940",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1929852,
            "range": "± 348350",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2736,
            "range": "± 248",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2817,
            "range": "± 343",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 445,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 482,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 709,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 704,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 247,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 245,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 193,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 250,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 542,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 336,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 345358,
            "range": "± 83153",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 18732263,
            "range": "± 1240872",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2664,
            "range": "± 399",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11298,
            "range": "± 1169",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3231,
            "range": "± 394",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 13092,
            "range": "± 2602",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 12341,
            "range": "± 1320",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 30470,
            "range": "± 2368",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2273,
            "range": "± 292",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 258,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1302375,
            "range": "± 147666",
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
          "id": "76d792011f72d239f81c22012638b95391c87bf5",
          "message": "Add Engine::call_fn_dynamic.",
          "timestamp": "2020-05-31T12:37:19+08:00",
          "tree_id": "4eddb86d66e1565ea2b8f99d2b63b846f76594f1",
          "url": "https://github.com/schungx/rhai/commit/76d792011f72d239f81c22012638b95391c87bf5"
        },
        "date": 1590901720349,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 93718,
            "range": "± 8899",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 96,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 91,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 284,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2335,
            "range": "± 240",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2106,
            "range": "± 166",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 581,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 618,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14863,
            "range": "± 776",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 11358,
            "range": "± 1261",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 283,
            "range": "± 219",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 486,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 46,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 729,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 46,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1449972,
            "range": "± 201930",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2387086,
            "range": "± 156329",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1938379,
            "range": "± 296915",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2763,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2810,
            "range": "± 428",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 449,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 490,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 721,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 730,
            "range": "± 527",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 254,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 248,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 192,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 259,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 556,
            "range": "± 313",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 337,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 349046,
            "range": "± 63512",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19201009,
            "range": "± 1779814",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2649,
            "range": "± 350",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11459,
            "range": "± 498",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3349,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 13029,
            "range": "± 1207",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 12533,
            "range": "± 1595",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 30822,
            "range": "± 5935",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2373,
            "range": "± 2118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 270,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1352594,
            "range": "± 153241",
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
          "id": "d7d49a5196f969ed611079cb5a8ea5f8a267deeb",
          "message": "Fix bug in chained dot/index expression.",
          "timestamp": "2020-05-31T14:27:16+08:00",
          "tree_id": "6becd409b2bb78e1bba38b6a40db684c42f7342e",
          "url": "https://github.com/schungx/rhai/commit/d7d49a5196f969ed611079cb5a8ea5f8a267deeb"
        },
        "date": 1590907949225,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 92209,
            "range": "± 2514",
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
            "value": 90,
            "range": "± 8",
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
            "value": 2272,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2077,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 610,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 636,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14668,
            "range": "± 569",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 11316,
            "range": "± 2546",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 270,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 488,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 46,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 736,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 46,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1441996,
            "range": "± 226318",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2399023,
            "range": "± 179246",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1965884,
            "range": "± 147343",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2808,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2838,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 448,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 491,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 766,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 709,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 254,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 248,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 194,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 259,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 545,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 336,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 343550,
            "range": "± 8431",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19048624,
            "range": "± 613472",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2752,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11879,
            "range": "± 399",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3536,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 13371,
            "range": "± 1982",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 12886,
            "range": "± 489",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 32445,
            "range": "± 784",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2252,
            "range": "± 218",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 279,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1359819,
            "range": "± 130032",
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
          "id": "7fa05f3886eb842de7e569ea885a6413483d477b",
          "message": "Do not print to avoid skewing the run timing.",
          "timestamp": "2020-05-31T15:57:53+08:00",
          "tree_id": "6165edb7e8e4026ee9591f6131866f57899abaf9",
          "url": "https://github.com/schungx/rhai/commit/7fa05f3886eb842de7e569ea885a6413483d477b"
        },
        "date": 1590912933132,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 81460,
            "range": "± 13080",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 88,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 77,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 254,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2071,
            "range": "± 452",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1859,
            "range": "± 412",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 524,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 537,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 13224,
            "range": "± 2292",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 9801,
            "range": "± 1863",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 237,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 431,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 41,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 649,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 42,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1290343,
            "range": "± 183483",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2150418,
            "range": "± 335840",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1721156,
            "range": "± 297857",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2450,
            "range": "± 389",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2615,
            "range": "± 539",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 436,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 425,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 656,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 636,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 225,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 219,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 165,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 219,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 496,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 301,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 313459,
            "range": "± 56801",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 17003897,
            "range": "± 2363614",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2427,
            "range": "± 298",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10207,
            "range": "± 1571",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 2993,
            "range": "± 643",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 11728,
            "range": "± 1607",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 11522,
            "range": "± 1869",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 27434,
            "range": "± 4502",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1999,
            "range": "± 263",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 264,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1163649,
            "range": "± 184066",
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
          "id": "c6e5f672c937ea245d0fe70dfa2660b1b22268f5",
          "message": "More benchmarks and examples.",
          "timestamp": "2020-05-31T23:44:49+08:00",
          "tree_id": "9a21479d78c23b3127ed8bf4a0cfdf63601709cc",
          "url": "https://github.com/schungx/rhai/commit/c6e5f672c937ea245d0fe70dfa2660b1b22268f5"
        },
        "date": 1590940035037,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 93622,
            "range": "± 4891",
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
            "value": 95,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 291,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2264,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2071,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5231663,
            "range": "± 106504",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 575,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 606,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15114,
            "range": "± 1977",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 11317,
            "range": "± 596",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 271,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 487,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 46,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 752,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 46,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1450500,
            "range": "± 103569",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2412521,
            "range": "± 108338",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1959411,
            "range": "± 78050",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2899,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2816,
            "range": "± 305",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 454,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 496,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 740,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 708,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 251,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 246,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 190,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 254,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 545,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 332,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 349920,
            "range": "± 34705",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19481883,
            "range": "± 2008135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2662,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11626,
            "range": "± 528",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3372,
            "range": "± 632",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 13134,
            "range": "± 1095",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 12628,
            "range": "± 1747",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 30892,
            "range": "± 5458",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2182,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 265,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1347005,
            "range": "± 50993",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}