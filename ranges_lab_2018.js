let ranges = {
  "RFI": {
    "SB": {
      "title": "RFI from the Small Blind",
      "raise": ["22+", "A2s+", "K2s+", "Q4s+", "J5s+", "T6s+", "96s+",
                "84s+", "74s+", "62s+", "52s+", "42s+", "32s",
                "A2+", "K8+", "Q8+", "J8+", "T8+", "98"]
    },
    "LJ": {
      "title": "RFI from the Low Jack",
      "raise": ["22+", "A2s+", "K9s+", "Q9s+", "J9s+", "T9s+", "98s+",
                "87s+", "76s+", "65s+",
                "AJ+", "KQ"]
    },
    "HJ": {
      "title": "RFI from the High Jack",
      "raise": ["22+", "A2s+", "K8s+", "Q9s+", "J9s+", "T8s+", "97s+",
                "87s+", "76s+", "65s+", "54s+",
                "AT+", "KJ+", "QJ+"]
    },
    "CO": {
      "title": "RFI from the Cut Off",
      "raise": ["22+", "A2s+", "K6s+", "Q8s+", "J8s+", "T8s+", "97s+",
                "86s+", "75s+", "65s+", "54s+",
                "A8+", "A5", "KT+", "QT+", "JT+"]
    },
    "BTN": {
      "title": "RFI from the Button",
      "raise": ["22+", "A2s+", "K2s+", "Q5s+", "J6s+", "T6s+", "96s+",
                "84s+", "74s+", "63s+", "53s+", "43s+", "32s",
                "A2+", "K9+", "Q9+", "J9+", "T9"]
    }
  },

  "RFIvs3Bet": {
    "SB": {
      "vsBB": {
        "title": "RFI Small Blind vs 3-Bet from Big Blind",
        "raise": ["TT+", "AKs", "A2s", "A3s", "A6s", "A7s",
                  "AK"],
        "raise-or-call": ["AQs"],
        "call": ["A8s-AJs", "A5s", "A4s", "K9s-KQs",
                 "AQ", "AJ", "KQ", "Q9s-QJs",
                 "J9s+", "T8s+", "97s+", "87s", "76s",
                 "22-99"]
      }
    },
    "LJ": {
      "vsSB": {
        "title": "RFI Low Jack vs 3-Bet from Small Blind",
        "raise": ["QQ+", "AK", "AKs", "A2s-A5s"],
        "raise-or-call": ["JJ"],
        "raise-or-fold": ["A6s-A9s"],
        "call": ["ATs-AQs", "KTs+", "QTs+", "JTs", "T9s", "98s", "87s", "55-TT", "AQ"],
        "call-or-fold": ["AJ", "J9s", "76s", "44"]
      },
      "vsBB": {
        "title": "RFI Low Jack vs 3-Bet from Big Blind",
        "raise": ["QQ+", "AK", "AKs", "A2s-A5s"],
        "raise-or-call": ["JJ"],
        "raise-or-fold": ["A6s-A9s"],
        "call": ["ATs-AQs", "KJs+", "QJs", "JTs", "T9s", "98s", "87s", "55-TT", "AQ"],
        "call-or-fold": ["KTs", "QTs", "76s", "44"]
      },
      "vsHJ": {
        "title": "RFI Low Jack vs 3-Bet from High Jack",
        "raise": ["QQ+", "AK", "AKs", "A2s-A5s"],
        "raise-or-call": ["JJ"],
        "raise-or-fold": ["A8s-A9s", "AJ"],
        "call": ["ATs-AQs", "KJs+", "QJs", "JTs", "T9s", "98s", "66-TT", "AQ"],
        "call-or-fold": ["KTs", "QTs"]
      },
      "vsCO": {
        "title": "RFI Low Jack vs 3-Bet from Cut Off",
        "raise": ["QQ+", "AK", "AKs", "A2s-A5s"],
        "raise-or-call": ["JJ"],
        "raise-or-fold": ["A8s-A9s", "AJ"],
        "call": ["ATs-AQs", "KJs+", "QJs", "JTs", "T9s", "98s", "66-TT", "AQ"],
        "call-or-fold": ["KTs", "QTs"]
      },
      "vsBTN": {
        "title": "RFI Low Jack vs 3-Bet from Button",
        "raise": ["QQ+", "AK", "AKs", "A2s-A5s"],
        "raise-or-call": ["JJ"],
        "raise-or-fold": ["A6s-A9s", "AJ"],
        "call": ["ATs-AQs", "KTs+", "QTs+", "JTs", "T9s", "98s", "87s", "55-TT", "AQ"]
      }
    },
    "HJ": {
      "vsSB": {
        "title": "RFI High Jack vs 3-Bet from Small Blind",
        "raise": ["QQ+", "AK", "AKs", "A2s-A5s"],
        "raise-or-call": ["JJ"],
        "raise-or-fold": ["A6s-A9s"],
        "call": ["ATs-AQs", "KTs+", "QTs+", "JTs", "T9s", "98s", "87s", "55-TT", "AQ"],
        "call-or-fold": ["K9s", "Q9s", "J9s", "76s", "44", "AJ"]
      },
      "vsBB": {
        "title": "RFI High Jack vs 3-Bet from Big Blind",
        "raise": ["QQ+", "AK", "AKs", "A2s-A5s"],
        "raise-or-call": ["JJ"],
        "raise-or-fold": ["A6s-A9s"],
        "call": ["ATs-AQs", "KTs+", "QTs+", "JTs", "T9s", "98s", "87s", "55-TT", "AQ"],
        "call-or-fold": ["76s", "44"]
      },
      "vsCO": {
        "title": "RFI High Jack vs 3-Bet from Cut Off",
        "raise": ["QQ+", "AK", "AKs", "A2s-A5s"],
        "raise-or-call": ["JJ"],
        "raise-or-fold": ["A6s-A9s", "76s"],
        "call": ["ATs-AQs", "KTs+", "QTs+", "JTs", "T9s", "98s", "87s", "55-TT", "AQ"],
        "call-or-fold": ["K9s", "Q9s", "J9s", "KQ", "AJ"]
      },
      "vsBTN": {
        "title": "RFI High Jack vs 3-Bet from Button",
        "raise": ["QQ+", "AK", "AKs", "A2s-A5s"],
        "raise-or-call": ["JJ"],
        "raise-or-fold": ["A6s-A9s", "76s", "65s", "54s"],
        "call": ["ATs-AQs", "KTs+", "QTs+", "JTs", "T9s", "98s", "87s", "55-TT", "AQ"],
        "call-or-fold": ["K9s", "Q9s", "J9s", "KQ", "AJ", "44"]
      }
    },
    "CO": {
      "vsSB": {
        "title": "RFI Cut Off vs 3-Bet from Small Blind",
        "raise": ["JJ+", "AK", "AKs", "A2s-A4s", "A6s-A8s"],
        "raise-or-call": ["TT"],
        "raise-or-fold": ["86s", "75s", "54s", "AT"],
        "raise-call-or-fold": ["97s", "65s"],
        "call": ["A5s", "A9s-AQs", "K9s+", "Q9s+", "J9s+", "T8s+", "98s", "87s", "76s", "44-99", "AQ", "AJ"]
      },
      "vsBB": {
        "title": "RFI Cut Off vs 3-Bet from Big Blind",
        "raise": ["JJ+", "AK", "AKs", "A2s-A4s"],
        "raise-or-call": ["TT"],
        "raise-or-fold": ["65s", "54s"],
        "raise-call-or-fold": ["A6s-A8s"],
        "call": ["A5s", "A9s-AQs", "KTs+", "QTs+", "JTs", "T9s", "98s", "87s", "76s", "44-99", "AQ", "AJ"],
        "call-or-fold": ["K9s", "Q9s", "J9s", "KQ", "AJ"]
      },
      "vsBTN": {
        "title": "RFI Cut Off vs 3-Bet from Button",
        "raise": ["JJ+", "AK", "AKs", "A2s-A4s", "A6s-A8s"],
        "raise-or-call": ["TT"],
        "raise-or-fold": ["86s", "75s", "54s", "AT"],
        "raise-call-or-fold": ["97s", "65s"],
        "call": ["A5s", "A9s-AQs", "KQ", "K9s+", "Q9s+", "J9s+", "T8s+", "98s", "87s", "76s", "44-99", "AQ", "AJ"]
      }
    },
    "BTN": {
      "vsSB": {
        "title": "RFI Button vs 3-Bet from Small Blind",
        "raise": ["TT+", "AK", "AKs", "A2s-A3s", "A6s-A7s", "86s", "75s", "54s"],
        "raise-or-call": ["AQs"],
        "raise-or-fold": ["K7s-K8s", "Q8s", "J8s", "T7s", "64s"],
        "call": ["A4s-A5s", "A8s-AJs", "K9s+", "Q9s+", "J9s+", "T8s+", "97s+", "87s", "76s", "65s", "22-99", "AJ-AQ", "KQ"],
        "call-or-fold": ["AT", "KJ", "QJ"]
      },
      "vsBB": {
        "title": "RFI Button vs 3-Bet from Big Blind",
        "raise": ["TT+", "AK", "AKs", "A2s-A3s", "A6s-A7s", "54s"],
        "raise-or-fold": ["86s", "75s", "64s", "AT"],
        "call": ["A4s-A5s", "A8s-AQs", "K9s+", "Q9s+", "J9s+", "T8s+", "97s+", "87s", "76s", "65s", "22-99", "AJ-AQ", "KQ"]
      },
    }
  },
  "vsRFI": {
    "vsSB": {
      "BB": {
        "title": "vs RFI: Big Blind vs Small Blind",
        "raise": ["TT+", "AQ+", "ATs+", "KJs+", "QJs", "JTs", "T9s", "98s", "87s"],
        "raise-or-call": ["KTs", "QTs", "J9s", "T7s-T8s", "96s-97s", "84s-86s", "74s+", "63s+", "53s+", "43s", "AJ", "KQ", "99"],
        "call": ["A2s-A9s", "K2s-K9s", "Q2s-Q9s", "J2s-J8s", "T2s-T6s", "92s-95s", "82s-83s", "72s-73s", "62s", "52s", "42s", "32s", "22-88",
                 "A2-AT", "K4-KJ", "Q5-QJ", "J7+", "T7+", "97+", "86+", "75+", "64+", "54"]
      }
    },
    "vsLJ": {
      "SB": {
        "title": "vs RFI: Small Blind vs Low Jack",
        "raise": ["QQ+", "AK", "AKs"],
        "raise-or-call": ["AJs-AQs", "KQs", "TT-JJ"],
        "raise-or-fold": ["A4s-A5s", "87s", "76s"],
        "call": ["ATs", "KTs-KJs", "QTs+", "JTs", "T9s", "98s", "55-99", "AQ"]
      },
      "BB": {
        "title": "vs RFI: Big Blind vs Low Jack",
        "raise": ["JJ+", "AK", "AKs"],
        "raise-or-call": ["AJs-AQs", "KQs", "TT", "75s", "64s+", "54s"],
        "call": ["A2s-ATs", "K5s-KJs", "Q8s+", "J8s+", "T7s+", "97s+", "86s+", "76s", "22-99", "AT-AQ", "KT+", "QT+", "JT"]
      },
      "HJ": {
        "title": "vs RFI: High Jack vs Low Jack",
        "raise": ["QQ+", "AK", "AKs"],
        "raise-or-call": ["AJs-AQs", "KQs", "TT-JJ", "AQ"],
        "raise-or-fold": ["A4s-A5s", "76s", "65s", "AJ"],
        "call": ["ATs", "KJs", "QJs", "JTs", "T9s", "98s", "87s", "55-99"],
        "call-or-fold": ["KTs", "QTs"]
      },
      "CO": {
        "title": "vs RFI: Cut Off vs Low Jack",
        "raise": ["QQ+", "AK", "AKs", "A5s"],
        "raise-or-call": ["AJs-AQs", "KQs", "AQ", "TT-JJ", "76s"],
        "raise-or-fold": ["A2s-A4s", "65s", "54s"],
        "call": ["ATs", "KTs-KJs", "QTs+", "JTs", "T9s", "98s", "87s", "55-99"],
        "call-or-fold": ["44"]
      },
      "BTN": {
        "title": "vs RFI: Button vs Low Jack",
        "raise": ["QQ+", "AK", "AKs", "A2s-A5s", "65s", "54s"],
        "raise-or-call": ["AJs-AQs", "KQs", "AQ", "TT-JJ"],
        "raise-or-fold": ["A6s-A8s"],
        "raise-call-or-fold": ["AJ"],
        "call": ["A9s-ATs", "KTs-KJs", "QTs+", "JTs", "T9s", "98s", "87s", "76s", "22-99"],
        "call-or-fold": ["KQ", "J9s"]
      }
    },
    "vsHJ": {
      "SB": {
        "title": "vs RFI: Small Blind vs High Jack",
        "raise": ["JJ+", "AK", "AQs+", "A4s-A5s"],
        "raise-or-call": ["AJs", "KQs", "TT"],
        "raise-or-fold": ["A3s", "76s", "65s", "54s"],
        "call": ["ATs", "AQ", "KTs-KJs", "QTs+", "JTs", "T9s", "98s", "87s", "55-99"],
        "call-or-fold": ["44"]
      },
      "BB": {
        "title": "vs RFI: Big Blind vs High Jack",
        "raise": ["JJ+", "AK", "AKs"],
        "raise-or-call": ["AJs-AQs", "KQs", "TT", "75s", "64s+", "54s"],
        "call": ["A2s-ATs", "K4s-KJs", "Q7s+", "J7s+", "T7s+", "96s+", "85s+", "76s", "22-99", "AT-AQ", "KT+", "QT+", "JT"]
      },
      "CO": {
        "title": "vs RFI: Cut Off vs High Jack",
        "raise": ["QQ+", "AK", "AKs", "A2s-A5s", "76s"],
        "raise-or-call": ["AJs-AQs", "KQs", "AQ", "TT-JJ"],
        "raise-or-fold": ["A6s-A9s", "K9s", "Q9s", "J9s", "AJ", "KQ", "65s", "54s"],
        "call": ["ATs", "KTs-KJs", "QTs+", "JTs", "T9s", "98s", "87s", "55-99"],
        "call-or-fold": ["44"]
      },
      "BTN": {
        "title": "vs RFI: Button vs High Jack",
        "raise": ["QQ+", "AK", "AKs", "A2s-A5s", "65s", "54s"],
        "raise-or-call": ["AJs-AQs", "KQs", "TT-JJ", "AQ"],
        "raise-or-fold": ["A6s-A8s", "86s", "75s", "AT"],
        "raise-call-or-fold": ["T8s", "97s", "76s"],
        "call": ["A9s-ATs", "K9s-KJs", "Q9s+", "J9s+", "T9s", "98s", "87s", "22-99", "KQ", "AJ"]
      }
    },
    "vsCO": {
      "SB": {
        "title": "vs RFI: Small Blind vs Cut Off",
        "raise": ["A2s+", "KTs+", "QTs+", "JTs", "T9s", "98s", "87s", "76s", "55+", "AQ+"],
        "raise-or-fold": ["K9s", "Q9s", "J9s", "KQ", "AJ", "T8s", "65s", "54s", "22-44"]
      },
      "BB": {
        "title": "vs RFI: Big Blind vs Cut Off",
        "raise": ["TT+", "AJs+", "AK", "KQs"],
        "raise-or-call": ["ATs", "KJs", "QJs", "JTs", "AQ", "99", "74s+", "64s+", "53s+", "43s"],
        "call": ["A2s-A9s", "K2s-KTs", "Q5s-QTs", "J7s-J9s", "T7s+", "96s+", "85s+", "22-88", "A8-AJ", "A5", "KT+", "QT+", "JT"]
      },
      "BTN": {
        "title": "vs RFI: Button vs Cut Off",
        "raise": ["TT+", "AJs+", "AQ+", "KQs", "A6s-A7s", "A2s-A3s", "86s", "75s", "65s", "54s"],
        "raise-or-call": ["KJs", "QJs", "JTs"],
        "raise-or-fold": ["K8s", "Q8s", "J8s", "64s", "43s"],
        "raise-call-or-fold": ["AT"],
        "call": ["A4s-A5s", "A8s-ATs", "K9s-KTs", "Q9s-QTs", "J9s", "T8s+", "97s+", "87s", "76s", "22-99", "KQ", "AJ"],
        "call-or-fold": ["KJ", "QJ"]
      }
    },
    "vsBTN": {
      "SB": {
        "title": "vs RFI: Small Blind vs Button",
        "raise": ["A2s+", "K9s+", "Q9s+", "J9s+", "T8s+", "98s", "87s", "76s", "65s", "22+", "AJ+", "KQ"],
        "raise-or-fold": ["AT", "KJ", "QJ", "97s", "86s", "54s"]
      },
      "BB": {
        "title": "vs RFI: Big Blind vs Button",
        "raise": ["99+", "ATs+", "AQ+", "KJs+", "QJs", "JTs"],
        "raise-or-call": ["A8s-A9s", "A4s-A5s", "KTs", "QTs", "J9s", "T9s", "98s", "87s", "74s+", "64s+", "53s+", "43s", "AJ", "KQ", "88"],
        "call": ["A2s-A3s", "A6s-A7s", "K2s-K9s", "Q2s-Q9s", "J5s-J8s", "T6s-T8s", "95s-97s", "84s-86s", "73s", "63s", "52s", "42s", "32s", "22-77", "A3-AT", "K9-KJ", "Q9+", "J9+", "T9", "98", "87"]
      },
    }
  },
  "cold4bet": {
    "CO": {
      "vsHJ": {
        "title": "Cold 4-Bet: CO vs HJ 3-Bet",
        "raise": ["KK+", "AK", "AKs"],
        "raise-or-call": ["QQ"],
        "raise-or-fold": ["A4s-A5s", "ATs", "KJs", "AQ"],
        "call": ["AJs-AQs", "KQs", "TT-JJ"],
        "call-or-fold": ["99"]
      }
    },
    "BTN": {
      "vsHJ": {
        "title": "Cold 4-Bet: BTN vs HJ 3-Bet",
        "raise": ["KK+", "AK", "AKs"],
        "raise-or-call": ["QQ"],
        "raise-or-fold": ["A4s-A5s", "ATs", "KJs", "AQ"],
        "call": ["AJs-AQs", "KQs", "TT-JJ"],
        "call-or-fold": ["99"]
      },
      "vsCO": {
        "title": "Cold 4-Bet: BTN vs CO 3-Bet",
        "raise": ["KK+", "AK", "AKs"],
        "raise-or-call": ["QQ"],
        "raise-or-fold": ["A2s-A5s", "A8s-ATs", "KJs", "AQ", "JTs"],
        "call": ["AJs-AQs", "KQs", "QJs", "99-JJ"],
        "call-or-fold": ["88"]
      }
    },
    "SB": {
      "vsHJ": {
        "title": "Cold 4-Bet: Small Blind vs HJ 3-Bet",
        "raise": ["JJ+", "AQs+", "AK"],
        "raise-or-fold": ["AJs", "KQs", "QJs", "AQ", "TT"]
      },
      "vsCO": {
        "title": "Cold 4-Bet: Small Blind vs CO 3-Bet",
        "raise": ["TT+", "AJs+", "AK", "KQs"],
        "raise-or-fold": ["ATs", "KJs", "QJs", "JTs", "AQ", "99"]
      },
      "vsBTN": {
        "title": "Cold 4-Bet: Small Blind vs BTN 3-Bet",
        "raise": ["TT+", "AJs+", "AQ+", "KQs"],
        "raise-or-fold": ["ATs", "KJs", "QJs", "JTs", "99"]
      }
    },
    "BB": {
      "vsHJ": {
        "title": "Cold 4-Bet: Big Blind vs HJ 3-Bet",
        "raise": ["JJ+", "AQs+", "AK"],
        "raise-or-fold": ["AJs", "KQs", "QJs", "AQ", "TT"]
      },
      "vsCO": {
        "title": "Cold 4-Bet: Big Blind vs CO 3-Bet",
        "raise": ["TT+", "AJs+", "AK", "KQs"],
        "raise-or-fold": ["ATs", "KJs", "QJs", "JTs", "AQ", "99"]
      },
      "vsBTN": {
        "title": "Cold 4-Bet: Big Blind vs BTN 3-Bet",
        "raise": ["TT+", "AJs+", "AQ+", "KQs"],
        "raise-or-fold": ["ATs", "KJs", "QJs", "JTs", "99"]
      }
    },
    "BBvsSB": {
      "vsLJHJ": {
        "title": "Cold 4-Bet: Big Blind vs Small Blind 3-Bet and LJ/HJ open",
        "raise": ["KK+", "AKs", "AK"],
        "raise-or-fold": ["A4s-A5s", "ATs-AJs", "AQ"],
        "call": ["AQs", "KQs", "TT-QQ"]
      },
      "vsCO": {
        "title": "Cold 4-Bet: Big Blind vs Small Blind 3-Bet and CO open",
        "raise": ["QQ+", "AK", "AKs"],
        "raise-or-fold": ["ATs", "A2s-A5s", "KJs", "T9s", "98s", "AQ"],
        "call": ["AJs-AQs", "KQs", "QJs", "99-JJ"],
        "call-or-fold": ["JTs", "88"]
      },
      "vsBTN": {
        "title": "Cold 4-Bet: Big Blind vs Small Blind 3-Bet and BTN open",
        "raise": ["JJ+", "AK", "AKs"],
        "raise-or-call": ["AQs", "TT"],
        "raise-or-fold": ["A2s-A5s", "A8s-A9s", "AJ", "98s", "87s", "76s"],
        "call": ["ATs-AJs", "KJs+", "QJs", "JTs", "T9s", "AQ", "77-99"],
        "call-or-fold": ["66"]
      }
    }
  }
}
