// UpSwing Advanced solver ranges
let ranges = {
  "RFI": {
    "SB": {
      "title": "RFI from the Small Blind",
      "raise": ["22+", "A2s+", "K2s+", "Q2s+", "J4s+", "T6s+", "96s+",
                "85s+", "75s+", "64s+", "54s",
                "A4+", "K8+", "Q9+", "J9+", "T9+"],
      "raise-or-fold": ["J8"],
    },
    "LJ": {
      "title": "RFI from the Low Jack",
      "raise": ["55+", "A2s+", "K8s+", "Q9s+", "J9s+", "T9s",
                "AT+", "KJ+"],
      "raise-or-fold": ["98s", "87s", "76s", "65s",]
    },
    "HJ": {
      "title": "RFI from the High Jack",
      "raise": ["33+", "A2s+", "K7s+", "Q9s+", "J9s+", "T8s+", "98s",
                "87s", "76s", "65s", "54s",
                "AT+", "KJ+", "QJ"],
    },
    "CO": {
      "title": "RFI from the Cut Off",
      "raise": ["22+", "A2s+", "K3s+", "Q6s+", "J7s+", "T7s+", "97s+",
                "86s+", "76s", "65s", "54s",
                "A8+", "KT+", "QT+", "JT"],
    },
    "BTN": {
      "title": "RFI from the Button",
      "raise": ["22+", "A2s+", "K2s+", "Q2s+", "J4s+", "T6s+", "96s+",
                "85s+", "75s+", "64s+", "54s",
                "A4+", "K8+", "Q9+", "J9+", "T8+", "98"],
      "raise-or-fold": ["J8"]
    }
  },

  "RFIvs3Bet": {
    "SB": {
      "vsBB": {
        "title": "RFI Small Blind vs 3-Bet from Big Blind",
        "raise": ["JJ+", "AQs+", "AK"],
        "raise-or-call": ["A2s", "K5s", "KJ+"],
        "raise25-or-call": ["A3s-A4s", "K6s-K7s", "J8s", "98s"],
        "raise75-or-call": ["AT-AJ",],
        "raise-call-jam": ["AQ"],
        "raise-jam": ["TT"],
        "call": ["A5s-AJs", "K8s-KQs", "Q8s+", "J9s+", "T8s+", "97s", "87s", "76s", "65s", "54s", "44-99", "KQ"],
        "call-or-fold": ["86s", "75s", "QJ"],
        "call25-or-fold": ["KT"],
        "call75-or-fold": ["22-33",]
      }
    },
    "LJ": {
      "vsSB": {
        "title": "RFI Low Jack vs 3-Bet from Small Blind",
        "raise": ["AA"],
        "raise-or-call": ["A4s", "KJs"],
        "raise75-or-call": ["KK", "AKs"],
        "raise25-or-call": ["AJs", "A5s", "KTs", "AK"],
        "raise25-or-fold": ["A3s", "AQ", "K9s"],
        "call": ["TT-QQ", "AQs", "ATs", "KQs", "QJs"],
        "call-or-fold": ["55-99", "QTs"],
        "call75-or-fold": ["JTs"],
        "call25-or-fold": ["T9s", "98s", "87s", "76s", "65s"],
        "raise-call-or-fold": []
      },
      "vsBB": {
        "title": "RFI Low Jack vs 3-Bet from Big Blind",
        "raise": ["AA"],
        "raise-or-call": ["KK", "A4s"],
        "raise75-or-call": ["AKs"],
        "raise25-or-call": ["ATs", "A5s", "KTs-KJs", "AK"],
        "raise25-or-fold": ["A3s", "K9s"],
        "call": ["TT-QQ", "AJs-AQs", "KQs", "QJs"],
        "call-or-fold": ["77-99"],
        "call25-or-fold": ["55-66", "JTs", "T9s", "87s", "76s", "65s"],
        "call75-or-fold": ["TT"]
      },
      "vsHJ": {
        "title": "RFI Low Jack vs 3-Bet from High Jack",
        "raise": ["KK+", "AKs"],
        "raise-or-call": ["JJ", "AJs", "A5s"],
        "raise75-or-call": ["QQ", "KJs+", "AK"],
        "raise75-or-fold": ["AQ"],
        "call": ["AQs", "TT"],
        "call-or-fold": ["66-99","JTs"],
        "call25-or-fold": ["55", "QJs", "T9s", "98s", "87s", "76s", "65s"],
        "raise25-call50-or-fold": ["ATs"],
        "raise50-call25-or-fold": ["KTs"]
      },
      "vsCO": {
        "title": "RFI Low Jack vs 3-Bet from Cut Off",
        "raise": ["KK+", "AKs"],
        "raise-or-call": ["JJ", "AJs", "A5s"],
        "raise75-or-call": ["QQ", "KJs+", "AK"],
        "raise75-or-fold": ["AQ"],
        "call": ["AQs", "TT"],
        "call-or-fold": ["66-99","JTs"],
        "call25-or-fold": ["55", "QJs", "T9s", "98s", "87s", "76s", "65s"],
        "raise25-call50-or-fold": ["ATs"],
        "raise50-call25-or-fold": ["KTs"]
      },
      "vsBTN": {
        "title": "RFI Low Jack vs 3-Bet from Button",
        "raise": ["KK+", "AKs"],
        "raise-or-call": ["JJ", "A5s", "KJs-KQs", "AK"],
        "raise25-or-call": ["ATs-AJs"],
        "raise75-or-call": ["QQ", "KTs-KJs"],
        "raise75-or-fold": ["AQ"],
        "call": ["AQs", "88-TT"],
        "call-or-fold": ["55-77", "A9s", "A4s", "QTs+", "T9s"],
        "call75-or-fold": ["JTs"],
        "call25-or-fold": ["98s", "87s", "76s", "65s"],
      }
    },
    "HJ": {
      "vsSB": {
        "title": "RFI High Jack vs 3-Bet from Small Blind",
        "raise": ["KK+", "AKs"],
        "raise-or-call": ["A4s"],
        "raise25-or-call": ["JJ-QQ", "A5s", "KTs", "AQ+"],
        "raise75-or-call": ["AQ"],
        "raise25-or-fold": ["A3s", "K8s-K9s", "AJ"],
        "call": ["99-TT", "ATs-AQs", "KJs+", "QTs+", "JTs", "T9s"],
        "call-or-fold": ["44-88", "87s", "76s"],
        "call25-or-fold": ["33", "98s", "65s", "54s"]
      },
      "vsBB": {
        "title": "RFI High Jack vs 3-Bet from Big Blind",
        "raise": ["AA"],
        "raise-or-call": ["A4s"],
        "raise75-or-call": ["KK", "AKs"],
        "raise25-or-call": ["ATs", "A5s", "KTs-KJs", "AK"],
        "raise-or-fold": ["AQ"],
        "raise25-or-fold": ["A3s", "K8s-K9s"],
        "call": ["TT-QQ", "AJs-AQs", "KQs", "QJs"],
        "call-or-fold": ["66-88", "JTs", "87s", "76s"],
        "call75-or-fold": ["99", "QTs"],
        "call25-or-fold": ["33-55", "T9s", "65s", "54s"],
        "raise-call-or-fold": ["A4s"]
      },
      "vsCO": {
        "title": "RFI High Jack vs 3-Bet from Cut Off",
        "raise": ["QQ+", "AK", "AKs"],
        "raise-or-call": ["JJ", "ATs-AJs", "A5s", "KQs"],
        "raise75-or-call": ["KTs-KJs", "AQ"],
        "raise25-or-call": ["TT", "QJs"],
        "raise25-or-fold": ["KQ"],
        "call": ["AQs"],
        "call-or-fold": ["33-88", "JTs", "87s", "76s"],
        "call25-or-fold": ["T9s", "98s", "65s", "54s"],
        "call75-or-fold": ["99"]
      },
      "vsBTN": {
        "title": "RFI High Jack vs 3-Bet from Button",
        "raise": ["QQ+", "AK", "AKs"],
        "raise-or-call": ["JJ", "ATs", "A4s-A5s", "KJs"],
        "raise75-or-call": ["KTs", "AQ"],
        "raise25-or-call": ["TT", "QTs-QJs", "JTs"],
        "raise-or-fold": ["K9s"],
        "raise25-or-fold": ["KQ"],
        "call": ["88-99", "AJs-AQs", "A9s", "KQs"],
        "call-or-fold": ["33-55", "T9s", "87s", "76s", "65s"],
        "call25-or-fold": ["98s", "54s"],
        "call75-or-fold": ["66-77"]
      }
    },
    "CO": {
      "vsSB": {
        "title": "RFI Cut Off vs 3-Bet from Small Blind",
        "raise": ["KK+", "AKs"],
        "raise-or-call": ["QQ", "A4s", "AQ+"],
        "raise25-or-call": ["JJ"],
        "raise-or-fold": ["K5s", "AJ"],
        "raise25-or-fold": ["A7s-A8s"],
        "raise25-call25-or-fold": ["K9s", "KQ"],
        "raise25-call50-or-fold": ["A3s"],
        "call": ["88-TT", "A9s-AQs", "A5s", "KTs+", "QTs-QJs", "J9s+", "T9s", "98s", "87s", "76s"],
        "call-or-fold": ["22-55"],
        "call75-or-fold": ["66-77", "65s", "54s"]
      },
      "vsBB": {
        "title": "RFI Cut Off vs 3-Bet from Big Blind",
        "raise": ["KK+", "AKs"],
        "raise-or-call": ["QQ", "A4s", "AQ+"],
        "raise-or-fold": ["K5s"],
        "raise25-or-fold": ["A7s-A8s", "AJ"],
        "raise25-call25-or-fold": ["K9s", "KQ"],
        "raise25-call50-or-fold": ["A3s"],
        "call": ["99-JJ", "A9s-AQs", "A5s", "KTs+", "QTs-QJs", "JTs", "T9s"],
        "call-or-fold": ["66", "87s", "76s"],
        "call75-or-fold": ["77-88", "65s"],
        "call25-or-fold": ["22-55", "54s"]
      },
      "vsBTN": {
        "title": "RFI Cut Off vs 3-Bet from Button",
        "raise": ["QQ+", "AK", "AKs"],
        "raise-or-call": ["A4s-A5s", "K9s-KTs"],
        "raise75-or-call": ["JJ", "AQ"],
        "raise25-or-call": ["TT", "ATs", "A8s", "KJs", "QTs+", "JTs", "T9s"],
        "raise25-call50-or-fold": ["J9s"],
        "raise-or-fold": ["AJ"],
        "raise25-or-fold": ["K6s-K7s"],
        "raise25-call25-or-fold": ["KQ"],
        "call": ["44-99", "AJs-AQs", "A9s", "KQs", "87s", "76s", "65s", "54s"],
        "call-or-fold": ["98s"],
        "call25-or-fold": ["A7s", "A3s"],
        "call75-or-fold": ["22-33"]
      }
    },
    "BTN": {
      "vsSB": {
        "title": "RFI Button vs 3-Bet from Small Blind",
        "raise": ["QQ+", "AKs"],
        "raise-or-call": ["AJ"],
        "raise25-or-call": ["TT", "A7s-A8s", "A3s-A4s", "K9s", "Q9s", "J8s", "KQ", "54s"],
        "raise75-or-call": ["JJ", "AK"],
        "raise-or-fold": ["K5s", "AT"],
        "raise25-or-fold": ["Q8s"],
        "raise50-call25-or-fold": ["KJ"],
        "raise25-call25-or-fold": ["A6s"],
        "call": ["22-99", "A9s-AQs", "A5s", "KTs-KQs", "QTs+", "J9s-JTs", "T8s-T9s", "98s", "87s", "76s", "65s", "AQ"],
        "call-or-fold": ["K6s-K8s", "97s", "86s"],
        "call25-or-fold": ["A2s"]
      },
      "vsBB": {
        "title": "RFI Button vs 3-Bet from Big Blind",
        "raise": ["QQ+", "AKs", "AK"],
        "raise-or-call": ["JJ", "Q9s", "AJ"],
        "raise25-or-call": ["A7s", "A3s", "T8s", "AQ", "KQ"],
        "raise25-call25-or-fold": ["A6s"],
        "raise-or-fold": ["K5s"],
        "raise25-or-fold": ["A2s", "J8s", "AT"],
        "call": ["66-TT", "A8s-AQs", "A4s-A5s", "K9s-KQs", "QTs+", "J9s+", "T9s", "98s", "87s"],
        "call-or-fold": ["44", "K6s-K8s", "76s", "65s", "54s"],
        "call25-or-fold": ["22-33", "KJ"],
        "call75-or-fold": ["55"]
      },
    }
  },
  "vsRFI": {
    "vsSB": {
      "BB": {
        "title": "vs RFI: Big Blind vs Small Blind",
        "raise": ["TT+", "AQ+", "AJs+", "A5s", "KJs+"],
        "raise-or-call": ["88-99", "A4s", "K6s", "J2s-J7s", "T9s", "T2s-T6s", "98s", "95s", "87s", "76s", "65s", "54s",
                          "A2-A3", "A6-A7", "K5-K9", "Q8-Q9", "J8-J9", "T8"],
        "raise75-or-call": ["ATs", "KTs"],
        "raise25-or-call": ["77", "A3s", "K9s", "KQ", "QTs+", "JTs", 
                            "AJ", "QT", "JT", "A4-A5"],
        "call": ["22-66", "A2s", "A6s-A9s", "K2s-K5s", "K7s-K8s", "Q2s-Q9s",  "J8s-J9s", "T7s-T8s", "94s", "96s-97s", "84s-86s", "73s-75s", "63s-64s", "52s-53s", "42s+", "32s", 
                 "A8-AT", "KT-KJ", "QJ", "T9", "98", "87", "76", ],
        "call-or-fold": ["93s", "65"],
        "raise25-call25-or-fold": ["K5", "T7", "97"]
      }
    },
    "vsLJ": {
      "SB": {
        "title": "vs RFI: Small Blind vs Low Jack",
        "raise": ["99+", "AK", "ATs+", "A5s", "KTs+", "QTs+", "JTs"],
        "raise-or-fold": ["AQ"],
      },
      "BB": {
        "title": "vs RFI: Big Blind vs Low Jack",
        "raise": ["QQ+", "AKs"],
        "raise-or-call": ["AQs", "A3s-A5s", "KTs-KJs", "QTs+", 
                          "JJ", "JTs", "T9s", "87s", "76s", "65s", "54s"],
        "raise75-or-call": ["KQs",
                            "AK"],
        "raise25-or-call": ["JJ", "A8s-AJs", "A2s", "K6s-K7s", "Q9s", "J8s-J9s", "98s",
                            "AQ"],
        "call": ["22-TT", "A6s-A7s", "K8s-K9s", "K2s-K5s", "Q3s-Q8s", "J7s", "T6s-T8s", "95s-97s", "85s-86s", "74s-75s", "63s-64s", "52s-53s", "42s-43s", 
                 "AT-AJ", "KJ+", "QJ"],
        "call25-or-fold": ["J5s", "84s", "A9", "T9"],
        "call-or-fold": ["Q2s", "J6s", "KT", "QT", "JT"]
      },
      "HJ": {
        "title": "vs RFI: High Jack vs Low Jack",
        "raise": ["99+", "AQ+", "A9s+", "A4s-A5s", "KTs+", "QJs"],
        "raise25-or-fold": ["76s", "65s", "54s"],
      },
      "CO": {
        "title": "vs RFI: Cut Off vs Low Jack",
        "raise": ["99+", "AQ+", "A9s+", "A4s-A5s", "KTs+", "QJs"],
        "raise25-or-fold": ["76s", "65s", "54s"],
        "raise-or-fold": ["88", "QTs", "KQ"],

      },
      "BTN": {
        "title": "vs RFI: Button vs Low Jack",
        "raise": ["KK+", "AKs", "QTs+"],
        "raise-or-call": ["TT-JJ", "A8s-AJs", "A3s", "AJ", "K9s-KTs", "JTs", "T9s", "KQ", "AJ-AQ"],
        "raise75-or-call": ["QQ", "AQs", "A4s-A5s", "QTs-QJs",
                            "AK"],
        "raise25-or-call": ["66-99", "KJs-KQs", "AQ"],                    
        "raise-or-fold": ["Q9s"],
        "raise25-call25-or-fold": ["98s", "87s", "76s", "65s", "54s"],
        "call25-or-fold": ["22-55", "J9s"]
      }
    },
    "vsHJ": {
      "SB": {
        "title": "vs RFI: Small Blind vs High Jack",
        "raise": ["99+", "AQ+", "ATs+", "A5s", "KTs+", "QTs+", "JTs"],
        "raise-or-fold": ["88", "A4s"],
      },
      "BB": {
        "title": "vs RFI: Big Blind vs High Jack",
        "raise": ["QQ+", "AK", "AQs+"],
        "raise-or-call": ["A3s-A5s", "KTs", "T9s", "87s", "76s", "65s", "54s"],
        "raise75-or-call": ["JJ", "KJs+", "QTs+", "JTs"],
        "raise25-or-call": ["TT", "A8s-AJs", "A2s", "K6s-K7s", "Q9s", "J8s-J9s", "T8s", "98s", "AQ"],
        "call": ["A6s-A7s", "K8s-K9s", "K2s-K5s", "Q2s-Q8s", "J6s-J7s", "T6s-T7s", "95s-97s", "85s+", "74s-75s", "63s+", "52s+", "42s+", "22-99", "A9-AJ", "KJ+", "QJ", "KT", "QT", "JT"],
        "call-or-fold": ["J5s", "84s"],
        "call75-or-fold": ["A5"],
        "call25-or-fold": ["A8", "T9", "98", "87"]
      },
      "CO": {
        "title": "vs RFI: Cut Off vs High Jack",
        "raise": ["88+", "AQ+", "A9s+", "A4s-A5s", "KTs+", "QTs+", "JTs", "KQ"],
        "raise-or-fold": ["AJ"],
        "raise25-or-fold": ["76s", "65s", "54s"],
      },
      "BTN": {
        "title": "vs RFI: Button vs High Jack",
        "raise": ["QQ+", "AK", "AKs", "A4s-A5s"],
        "raise-or-call": ["AQs", "A8s-A9s", "AJs", "A3s", "K9s-KTs", "JTs+", "T9s", "AJ-AQ", "77-JJ"],
        "raise25-or-call": ["66", "ATs", "KJs+"],
        "raise75-or-call": ["A4s-A5s", "A7s", "Q9s+", "KQ"],
        "raise-or-fold": ["A6s", "J9s"],
        "raise25-call25-or-fold": ["98s", "87s", "76s", "65s", "54s"],
        "call25-or-fold": ["22-55"]
      }
    },
    "vsCO": {
      "SB": {
        "title": "vs RFI: Small Blind vs Cut Off",
        "raise": ["88+", "AQ+", "A9s+", "A5s", "KTs+", "QTs+", "JTs", "T9s"],
        "raise-or-fold": ["77", "A4s", "K9s", "J9s", "AJ"],
        "raise75-or-fold": ["KQ"]
      },
      "BB": {
        "title": "vs RFI: Big Blind vs Cut Off",
        "raise": ["JJ+", "AK", "AQs+", "JTs"],
        "raise-or-call": ["AJs", "A3s", "K9s-KTs", "AQ", "Q9s", "J8s", "87s", "76s", "65s", "54s"],
        "raise75-or-call": ["TT", "A4s-A5s", "KJs+", "QTs+", "J9s", "T9s"],
        "raise25-or-call": ["99", "A8s-ATs", "A2s", "K6s-K7s", "J7s", "T8s", "97s-98s", "75s", "64s", "AJ", "KQ"],
        "call": ["A6s-A7s", "K8s", "K2s-K5s", "Q2s-Q8s", "J3s-J6s", "T6s-T7s", "95s-96s", "85s+", "74s", "63s", "52s+", "42s+", 
                 "22-88", "A8-AT", "A5", "K9+", "QT-QJ", "JT", "T9"],
        "call-or-fold": ["J2s", "84s", "Q9", "J9", "98", "87", "76"]
      },
      "BTN": {
        "title": "vs RFI: Button vs Cut Off",
        "raise": ["QQ+", "AK", "AQs+", "A4s-A5s"],
        "raise-or-call": ["A8s-A9s", "AJs", "KTs+", "QTs+", "JTs", "T9s", "66-TT"],
        "raise25-or-call": ["ATs", "55"],
        "raise75-or-call": ["JJ", "A3s-A7s", "K9s", "Q9s", "J9s", "AJ-AQ", "KQ"],
        "raise-or-fold": ["K6s-K8s", "Q8s", "AT", "KJ"],
        "raise25-or-fold": ["K5s", "J8s"],
        "raise25-call25-or-fold": ["A2s", "T8s", "98s", "87s", "76s", "65s", "54s"],
        "call25-or-fold": ["22-44"]
      }
    },
    "vsBTN": {
      "SB": {
        "title": "vs RFI: Small Blind vs Button",
        "raise": ["66+", "AJ+", "A7s+", "A4s-A5s", "K9s+", "Q9s+", "J9s+", "T8s+", "KQ"],
        "raise-or-fold": ["55"],
        "raise25-or-fold": ["AT"],
        "raise75-or-fold": ["KJ"]
      },
      "BB": {
        "title": "vs RFI: Big Blind vs Button",
        "raise": ["TT+", "AQ+", "AJs+", "A5s", "KQs", "J8s+", "T8s+"],
        "raise-or-call": ["ATs", "A3s", "K9s-KTs", "AT-AJ", "KJ+", "Q9s", 
                          "88", "J7s", "54s"],
        "raise25-or-call": ["A8s-A9s", "A2s", "K6s-K7s", "T6s-T7s", "Q8s", "97s", "86s", "75s", "64s", "QJ"],
        "raise75-or-call": ["99", "A4s", "KJs", "QTs+", "98s", "87s", "76s", "65s"],
        "call": ["A6s-A7s", "K8s", "K2s-K5s", "Q2s-Q7s", "J2s-J6s", "T2s-T5s", "95s-96s", "84s-85s", "73s-74s", "63s", "52s+", "42s+", "32s", "22-77", "A3-A9", "K6-KT", "Q8-QT", "J8-JT", "T8+", "98", "87", "76", "65"],
        "call-or-fold": ["93s-94s", "A2",]
      },
    }
  },

  "vs4Bet": {
    "BB": {
      "vsSB": {
        "title": "Big Blind vs 4-Bet from Small Blind",
        "raise": ["JJ-QQ", "AKs", "AK"],
        "raise-or-call": ["KK", "TT", "A5s", "AQ"],
        "raise25-or-call": ["99"],
        "raise25-call25-or-fold": ["A4s"],
        "call": ["AA", "AJs-AQs", "KJs+"],
        "call-or-fold": ["88", "K6s", "T9s", "98s", "87s", "76s", "65s", "54s"],
        "call75-or-fold": ["ATs", "KTs"],
        "call25-or-fold": ["77", "A3s", "K9s", "QJs", "QTs", "JTs", "AJ", "KQ"]
      },
      "vsLJ": {
        "title": "Big Blind vs 4-Bet from Low Jack",
        "raise": ["AA", "AKs"],
        "raise75-or-call": ["KK"],
        "raise25-or-call": ["QQ"],
        "raise50-call25-or-fold": ["AK"],
        "raise25-or-fold": ["A5s"],
        "call-or-fold": ["AQs"],
        "call25-or-fold": ["JJ", "ATs-AJs", "JTs", "87s", "76s", "65s", "54s"]
      },
      "vsHJ": {
        "title": "Big Blind vs 4-Bet from High Jack",
        "raise": ["KK+", "AKs", "AK"],
        "raise25-or-call": ["QQ"],
        "raise25-call50-or-fold": ["JJ"],
        "raise25-call25-or-fold": ["A5s"],
        "call": ["AQs"],
        "call25-or-fold": ["TT", "ATs-AJs", "KTs-KJs", "JTs", "T9s", "87s", "76s", "65s", "54s"]
      },
      "vsCO": {
        "title": "Big Blind vs 4-Bet from Cut Off",
        "raise": ["KK", "AKs", "AK"],
        "raise-or-call": ["JJ"],
        "raise25-call50-or-fold": ["TT"],
        "raise75-or-call": ["AA", "QQ"],
        "raise-or-fold": ["A5s"],
        "call": ["AQs"],
        "call-or-fold": ["AJs", "76s"],
        "call25-or-fold": ["99", "ATs", "KTs-KQs", "JTs", "T9s", "87s", "65s", "54s"]
      },
      "vsBTN": {
        "title": "Big Blind vs 4-Bet from Button",
        "raise": ["QQ-KK", "AKs", "AK"],
        "raise-or-call": ["AA", "TT"],
        "raise75-or-call": ["JJ", "A5s"],
        "raise75-or-fold": ["A4s"],
        "raise25-or-fold": ["A3s"],
        "call": ["AJs-AQs", "KQs"],
        "call-or-fold": ["88", "ATs", "KTs", "65s", "54s"],
        "call25-or-fold": ["98s", "AQ"],
        "call75-or-fold": ["99", "KJs", "QJs", "JTs", "T9s", "87s", "76s"]
      }
    },
    "SB": {
      "vsLJ": {
        "title": "Small Blind vs 4-Bet from Low Jack",
        "raise": ["KK+", "AKs"],
        "raise75-or-call": ["AK"],
        "call": ["TT-QQ", "AQs"],
        "call-or-fold": ["ATs-AJs"],
        "raise25-call25-or-fold": ["A5s"]
      },
      "vsHJ": {
        "title": "Small Blind vs 4-Bet from High Jack",
        "raise": ["KK", "AKs", "AK"],
        "raise75-or-call": ["AA"],
        "raise25-or-call": ["JJ-QQ"],
        "call": ["TT", "AQs"],
        "call-or-fold": ["99", "ATs-AJs"],
        "call25-or-fold": ["KTs-KJs"],
        "raise50-call25-or-fold": ["A5s"]
      },
      "vsCO": {
        "title": "Small Blind vs 4-Bet from Cut Off",
        "raise": ["KK", "AKs", "AK"],
        "raise-or-call": ["JJ"],
        "raise75-or-call": ["AA", "QQ", "A5s"],
        "raise25-or-call": ["TT"],
        "raise-or-fold": ["A4s"],
        "call": ["99", "AJs-AQs", "KQs"],
        "call-or-fold": ["88", "ATs"],
        "call25-or-fold": ["T9s"]
      },
      "vsBTN": {
        "title": "Small Blind vs 4-Bet from Button",
        "raise": ["QQ-KK", "AKs", "AK", "A4s-A5s"],
        "raise-or-call": ["TT"],
        "raise75-or-call": ["AA", "JJ"],
        "call": ["88-99", "ATs-AQs", "KJs-KQs", "QJs"],
        "call-or-fold": ["55-66", "KTs", "T9s", "AQ"],
        "call75-or-fold": ["77"]
      },
    },
    "BTN": {
      "vsLJ": {
        "title": "Button vs 4-Bet from Low Jack",
        "raise": ["KK", "AKs"],
        "raise-or-call": ["AA"],
        "raise75-or-call": ["AK"],
        "call75-or-fold": ["QQ", "AQs"],
        "call-or-fold": ["TT-JJ"],
        "call25-or-fold": ["88-99", "ATs-AJs", "A5s", "KJs-KQs", "76s", "65s", "54s"]
      },
      "vsHJ": {
        "title": "Button vs 4-Bet from High Jack",
        "raise": ["KK", "AKs"],
        "raise-or-call": ["QQ"],
        "raise75-or-call": ["AK"],
        "raise25-or-call": ["AA"],
        "call": ["AQs"],
        "call-or-fold": ["99-JJ", "AJs", "A5s"],
        "call25-or-fold": ["88", "ATs", "KTs+", "QJs", "76s", "65s", "54s"]
      },
      "vsCO": {
        "title": "Button vs 4-Bet from Cut Off",
        "raise": ["KK", "AKs", "AK"],
        "raise75-or-call": ["QQ"],
        "raise-or-call": ["JJ"],
        "call": ["AA", "AQs"],
        "call-or-fold": ["88-TT", "AJs", "A5s", "KTs+", "QJs", "JTs"],
        "call25-or-fold": ["66-77", "ATs", "T9s", "87s", "76s", "65s", "54s", "AQ"]
      },
    },
    "CO": {
      "vsLJ": {
        "title": "Cut Off vs 4-Bet from Low Jack",
        "raise": ["KK", "AKs"],
        "raise-or-call": ["AA"],
        "raise75-or-call": ["AK"],
        "raise25-or-call": ["QQ"],
        "call": ["TT-JJ", "AQs"],
        "call75-or-fold": ["AJs"],
        "call-or-fold": ["KJs+"],
        "call25-or-fold": ["A5s", "76s", "65s", "54s"]
      },
      "vsHJ": {
        "title": "Cut Off vs 4-Bet from High Jack",
        "raise": ["KK", "AKs", "AK"],
        "raise75-or-call": ["QQ"],
        "raise25-or-call": ["AA", "JJ"],
        "call": ["TT", "AJs-AQs"],
        "call-or-fold": ["99", "A5s", "KTs+"],
        "call25-or-fold": ["ATs", "76s", "65s"]
      }
    }
  }
}
