window.BENCHMARK_DATA = {
  "lastUpdate": 1589854814953,
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
      }
    ]
  }
}