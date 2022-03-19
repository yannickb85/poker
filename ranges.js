let ranges = {
  "RFI": {
    "SB": {
      "title": "RFI from the Small Blind",
      "raise": ["22+", "A2s+", "K2s+", "Q4s+", "J6s+", "T7s+", "97s+",
                "87s", "76s", "65s", "54s",
                "A5+", "K8+", "Q9+", "J9+", "T9+"],
      "raise-or-fold": ["Q2s-Q3s", "J4s-J5s", "T6s", "96s", "86s", "75s",
                        "A2-A4", "K7", "Q8", "J8", "T8", "98"],
    },
    "LJ": {
      "title": "RFI from the Low Jack",
      "raise": ["77+", "A2s+", "K9s+", "Q9s+", "J9s+", "T9s",
                "AT+", "KJ+"],
      "raise-or-fold": ["55-66", "K8s", "98s", "87s", "76s", "65s+",]
    },
    "HJ": {
      "title": "RFI from the High Jack",
      "raise": ["55+", "A2s+", "K9s+", "Q9s+", "J9s+", "T9s", "98s",
                "87s", "76s", "65s", "54s",
                "AT+", "KJ+"],
      "raise-or-fold": ["33-44", "K7s-K8s", "T8s", "QJ"]
    },
    "CO": {
      "title": "RFI from the Cut Off",
      "raise": ["22+", "A2s+", "K6s+", "Q8s+", "J9s+", "T9s+", "98s+",
                "87s+", "76s+", "65s+", "54s+",
                "A9+", "KJ+", "QJ+"],
      "raise-or-fold": ["K3s-K5s", "Q6s-Q7s", "J7s-J8s", "T7s-T8s",
                        "97s", "86s", "A8", "KT", "QT", "JT"]
    },
    "BTN": {
      "title": "RFI from the Button",
      "raise": ["22+", "A2s+", "K2s+", "Q4s+", "J6s+", "T7s+", "97s+",
                "87s+", "76s+", "65s+", "54s+",
                "A5+", "K8+", "Q9+", "J9+", "T9"],
      "raise-or-fold": ["Q2s-Q3s", "J4s-J5s", "T6s", "96s", "86s", "75s",
                        "A4", "J8", "T8", "98"]
    }
  },

  "RFIvs3Bet": {
    "SB": {
      "vsBB": {
        "title": "RFI Small Blind vs 3-Bet from Big Blind",
        "raise": ["TT+", "AQs+", "A2s",
                  "AT-AJ", "AK"],
        "raise-or-call": ["A3s-A4s", "AQ", "KJ+"],
        "call": ["A5s-AJs", "K8s-KQs", "Q9s-QJs",
                 "J9s+", "T8s+", "55-99",
                 "KQ"],
        "call-or-fold": ["K7s", "Q8s", "J8s", "98s", "87s", "76s", "65s",
                         "54s", "22-44"],
        "raise-call-or-fold": ["K6s", "QJ"]
      }
    },
    "LJ": {
      "vsSB": {
        "title": "RFI Low Jack vs 3-Bet from Small Blind",
        "raise": ["KK+", "AKs"],
        "raise-or-call": ["JJ-QQ", "AJs", "KJs+", "AK"],
        "raise-or-fold": ["A9s", "AQ"],
        "call": ["AQs", "TT"],
        "call-or-fold": ["55-99", "ATs", "A4s", "QTs+", "JTs", "76s", "65s"],
        "raise-call-or-fold": ["A5s", "KTs"]
      },
      "vsBB": {
        "title": "RFI Low Jack vs 3-Bet from Big Blind",
        "raise": ["AA"],
        "raise-or-call": ["KK", "AKs", "ATs-AJs", "KJs", "AK"],
        "raise-or-fold": ["A9s", "A3s"],
        "call": ["TT-QQ", "AQs", "KQs"],
        "call-or-fold": ["55-99", "QJs", "JTs", "T9s", "87s", "76s", "65s"],
        "raise-call-or-fold": ["A4s-A5s", "KTs"]
      },
      "vsHJ": {
        "title": "RFI Low Jack vs 3-Bet from High Jack",
        "raise": ["KK+", "AKs"],
        "raise-or-call": ["JJ-QQ", "AJs", "KQs", "AK"],
        "raise-or-fold": ["AQ"],
        "call": ["AQs", "TT"],
        "call-or-fold": ["55-99", "QJs", "JTs", "T9s", "98s", "87s", "76s", "65s"],
        "raise-call-or-fold": ["ATs", "KTs-KJs", "A5s"]
      },
      "vsCO": {
        "title": "RFI Low Jack vs 3-Bet from Cut Off",
        "raise": ["KK+", "AKs"],
        "raise-or-call": ["JJ-QQ", "AJs", "KQs", "AK"],
        "raise-or-fold": ["AQ"],
        "call": ["AQs", "TT"],
        "call-or-fold": ["55-99", "QJs", "JTs", "T9s", "98s", "87s", "76s", "65s"],
        "raise-call-or-fold": ["ATs", "KTs-KJs", "A5s"]
      },
      "vsBTN": {
        "title": "RFI Low Jack vs 3-Bet from Button",
        "raise": ["KK+", "AKs"],
        "raise-or-call": ["JJ-QQ", "AJs", "KJs-KQs", "AK"],
        "raise-or-fold": ["AQ"],
        "call": ["AQs", "TT"],
        "call-or-fold": ["55-99", "A4s", "QTs+", "JTs", "T9s", "98s", "87s", "76s", "65s"],
        "raise-call-or-fold": ["ATs", "KTs", "A5s"]
      }
    },
    "HJ": {
      "vsSB": {
        "title": "RFI High Jack vs 3-Bet from Small Blind",
        "raise": ["KK+", "AKs"],
        "raise-or-call": ["JJ-QQ", "AJs", "KTs+", "AQ+"],
        "raise-or-fold": ["AJ"],
        "call": ["99-TT", "AQs"],
        "call-or-fold": ["33-88", "ATs", "QTs+", "JTs", "T9s", "98s", "87s", "76s", "65s", "54s"],
        "raise-call-or-fold": ["A4s-A5s"]
      },
      "vsBB": {
        "title": "RFI High Jack vs 3-Bet from Big Blind",
        "raise": ["KK+", "AKs"],
        "raise-or-call": ["A5s", "ATs", "KTs-KJs", "AK"],
        "raise-or-fold": ["A9s", "K9s", "AQ"],
        "call": ["TT-QQ", "AJs-AQs", "KQs"],
        "call-or-fold": ["33-99", "QTs+", "JTs", "T9s", "87s", "76s", "65s", "54s"],
        "raise-call-or-fold": ["A4s"]
      },
      "vsCO": {
        "title": "RFI High Jack vs 3-Bet from Cut Off",
        "raise": ["QQ+", "AK", "AKs", "KJs"],
        "raise-or-call": ["TT-JJ", "AJs", "KQs", "AQ"],
        "raise-or-fold": ["KTs"],
        "call": ["AQs"],
        "call-or-fold": ["33-99", "QJs", "JTs", "T9s", "98s", "87s", "76s", "65s", "54s"],
        "raise-call-or-fold": ["A5s", "ATs"]
      },
      "vsBTN": {
        "title": "RFI High Jack vs 3-Bet from Button",
        "raise": ["QQ+", "AK", "AKs", "KTs-KJs"],
        "raise-or-call": ["TT-JJ", "AJs", "KQs", "AQ"],
        "raise-or-fold": ["A4s"],
        "call": ["AQs"],
        "call-or-fold": ["33-99", "QJs", "JTs", "T9s", "98s", "87s", "76s", "65s", "54s"],
        "raise-call-or-fold": ["A5s", "ATs"]
      }
    },
    "CO": {
      "vsSB": {
        "title": "RFI Cut Off vs 3-Bet from Small Blind",
        "raise": ["KK+", "AKs"],
        "raise-or-call": ["JJ-QQ", "KTs", "AQ+"],
        "raise-or-fold": ["A8s", "AJ"],
        "raise-call-or-fold": ["A9s", "A3s-A4s", "K9s", "KQ"],
        "call": ["88-TT", "ATs-AQs", "KJs-KQs", "QJs", "JTs", "87s", "76s"],
        "call-or-fold": ["22-77", "QTs", "T9s", "98s", "65s", "54s"]
      },
      "vsBB": {
        "title": "RFI Cut Off vs 3-Bet from Big Blind",
        "raise": ["KK+", "AKs"],
        "raise-or-call": ["QQ", "A9s", "A5s", "AQ+"],
        "raise-or-fold": ["AJ"],
        "raise-call-or-fold": ["A8s", "A3s-A4s", "K9s", "KQ"],
        "call": ["99-JJ", "ATs-AQs", "KTs-KQs", "QTs+", "JTs"],
        "call-or-fold": ["22-88", "T9s", "87s", "76s", "65s", "54s"]
      },
      "vsBTN": {
        "title": "RFI Cut Off vs 3-Bet from Button",
        "raise": ["JJ+", "AK", "AKs"],
        "raise-or-call": ["TT", "ATs-AJs", "KTs-KJs", "QJs", "AQ"],
        "raise-or-fold": ["AJ"],
        "raise-call-or-fold": ["A4s-A5s", "K9s", "JTs", "KQ"],
        "call": ["88-99", "AQs", "KQs", "87s", "76s", "65s", "54s"],
        "call-or-fold": ["22-77", "A9s", "QTs", "T9s", "98s"]
      }
    },
    "BTN": {
      "vsSB": {
        "title": "RFI Button vs 3-Bet from Small Blind",
        "raise": ["QQ+", "AKs"],
        "raise-or-call": ["TT-JJ", "A4s", "A8s-A9s", "K9s", "J9s", "54s",
                          "AK", "AJ", "KQ"],
        "raise-or-fold": ["A6s", "K5s", "AT", "KJ"],
        "call": ["22-99", "A5s", "ATs-AQs", "KTs-KQs", "QTs+", "JTs", "T9s", "87s", "76s", "65s", "AQ"],
        "call-or-fold": ["K6s-K8s", "T8s", "97s+"],
        "raise-call-or-fold": ["A7s", "A3s", "Q9s"]
      },
      "vsBB": {
        "title": "RFI Button vs 3-Bet from Big Blind",
        "raise": ["QQ+", "AKs", "AK"],
        "raise-or-call": ["JJ", "A4s", "A7s-A8s", "T8s", 
                          "AJ", "KQ"],
        "raise-or-fold": ["A2s", "K5s", "AT"],
        "call": ["66-TT", "A5s", "A9s-AQs", "K9s-KQs", "QTs+", "J9s+", "T9s", "98s", "87s", "AQ"],
        "call-or-fold": ["22-55", "K6s-K8s", "76s", "65s", "54s"],
        "raise-call-or-fold": ["A6s", "A3s", "Q9s", "KJ"]
      },
    }
  },
  "vsRFI": {
    "vsSB": {
      "BB": {
        "title": "vs RFI: Big Blind vs Small Blind",
        "raise": ["TT+", "AQ+", "AQs+", "A4s-A5s"],
        "raise-or-call": ["88-99", "ATs-AJs", "A2s-A3s", "KTs+", "Q9s+", "J8s+", "T8s+", "98s", "87s", "76s", "65s", "54s", "AJ", "A2-A4", "KJ+", "K6", ],
        "call": ["22-77", "A6s-A9s", "K2s-K9s", "Q2s-Q8s", "J2s-J7s", "T2s-T7s", "95s-97s", "85s-86s", "74s-75s", "62s-63s", "52s-53s", "42s+", "32s",
                 "A5-AT", "K7-KT", "Q8+", "J8+", "T9"],
        "call-or-fold": ["84s", "73s", "T8", "98", "87", "76", "65"]
      }
    },
    "vsLJ": {
      "SB": {
        "title": "vs RFI: Small Blind vs Low Jack",
        "raise": ["99+", "AK", "ATs+", "A5s", "KTs+", "QJs"],
        "raise-or-fold": ["AQ", "QTs", "JTs"],
      },
      "BB": {
        "title": "vs RFI: Big Blind vs Low Jack",
        "raise": ["QQ+", "AK", "AKs"],
        "raise-or-call": ["A8s-AQs", "A2s-A5s", "KTs+", "K6s-K7s", "Q9s+", "JJ", "JTs", "87s", "76s", "65s", "54s"],
        "call": ["A6s-A7s", "K8s-K9s", "K2s-K5s", "Q6s-Q8s", "J8s-J9s", "T7s+", "96s+", "86s", "75s", "64s", "53s", "43s", "22-TT", "AT-AQ", "KJ+"],
        "call-or-fold": ["Q3s-Q5s", "J7s", "52s", "42s", "QJ"]
      },
      "HJ": {
        "title": "vs RFI: High Jack vs Low Jack",
        "raise": ["TT+", "AQ+", "AJs+", "A4s-A5s", "KJs+", "QJs"],
        "raise-or-fold": ["A9s-ATs", "KTs", "99", "76s", "65s", "54s"],
      },
      "CO": {
        "title": "vs RFI: Cut Off vs Low Jack",
        "raise": ["99+", "AQ+", "A9s+", "A4s-A5s", "KTs+", "QJs"],
        "raise-or-fold": ["88", "QTs", "76s", "65s", "54s", "KQ"],

      },
      "BTN": {
        "title": "vs RFI: Button vs Low Jack",
        "raise": ["QQ+", "AK", "AKs", "A4s-A5s", "QTs+"],
        "raise-or-call": ["AQs", "A8s-A9s", "A3s", "KTs", "T9s", "AQ", "KQ", "TT-JJ"],
        "raise-or-fold": ["K9s", "AJ"],
        "raise-call-or-fold": ["98s", "87s", "76s", "65s", "54s"],
        "call": ["ATs-AJs", "KJs+", "JTs", "66-99"],
        "call-or-fold": ["22-55"]
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
        "raise": ["QQ+", "AK", "AKs"],
        "raise-or-call": ["A8s-AQs", "A2s-A5s", "KTs+", "K6s-K7s", "Q9s+", "TT-JJ", "JTs", "87s", "76s", "65s", "54s"],
        "call": ["A6s-A7s", "K8s-K9s", "K2s-K5s", "Q6s-Q8s", "J8s-J9s", "T7s+", "96s+", "86s", "75s", "64s", "53s", "43s", "22-99", "AT-AQ", "KJ+", "QJ"],
        "call-or-fold": ["Q3s-Q5s", "J7s", "85s", "74s", "63s", "52s", "42s", "A9", "KT", "QT", "JT"]
      },
      "CO": {
        "title": "vs RFI: Cut Off vs High Jack",
        "raise": ["88+", "AQ+", "A9s+", "A4s-A5s", "KTs+", "QTs+", "JTs", "KQ"],
        "raise-or-fold": ["76s", "65s", "54s", "AJ"],
      },
      "BTN": {
        "title": "vs RFI: Button vs High Jack",
        "raise": ["QQ+", "AK", "AKs", "A4s-A5s", "QTs+"],
        "raise-or-call": ["AQs", "A8s-A9s", "A3s", "KTs+", "Q9s", "J9s+", "T9s", "AQ", "KQ", "TT-JJ"],
        "raise-or-fold": ["A6s", "K9s", "AJ"],
        "raise-call-or-fold": ["A7s", "98s", "87s", "76s", "65s", "54s"],
        "call": ["ATs-AJs", "66-99"],
        "call-or-fold": ["22-55"]
      }
    },
    "vsCO": {
      "SB": {
        "title": "vs RFI: Small Blind vs Cut Off",
        "raise": ["99+", "AQ+", "ATs+", "A5s", "KTs+", "QTs+", "JTs"],
        "raise-or-fold": ["77-88", "A9s", "A4s", "K9s", "J9s", "T9s", "AJ"],
      },
      "BB": {
        "title": "vs RFI: Big Blind vs Cut Off",
        "raise": ["JJ+", "AK", "AQs+"],
        "raise-or-call": ["ATs-AJs", "A2s-A5s", "KTs+", "K6s-K7s", "Q9s+", "Q4s-Q5s", "TT", "J9s+", "T9s", "87s", "76s", "65s", "54s", "KQ"],
        "call": ["A6s-A9s", "K8s-K9s", "K2s-K5s", "Q6s-Q8s", "J7s-J8s", "T7s-T8s", "96s+", "86s", "75s", "64s", "53s", "43s", "22-99", "A9-AQ", "KT-KJ", "QT+", "JT"],
        "call-or-fold": ["Q3s", "J6s", "85s", "74s", "63s", "52s", "42s", "A8", "A5"]
      },
      "BTN": {
        "title": "vs RFI: Button vs Cut Off",
        "raise": ["QQ+", "AK", "AQs+", "QTs+"],
        "raise-or-call": ["A3s-AJs", "KTs+", "Q9s", "J9s+", "T9s", "AJ-AQ", "KQ", "55-JJ"],
        "raise-or-fold": ["K8s", "AT", "KJ"],
        "raise-call-or-fold": ["A2s", "K9s", "98s", "87s", "76s", "65s", "54s"],
        "call-or-fold": ["22-44"]
      }
    },
    "vsBTN": {
      "SB": {
        "title": "vs RFI: Small Blind vs Button",
        "raise": ["77+", "AJ+", "A8s+", "A4s-A5s", "K9s+", "QTs+", "J9s+", "T9s", "KQ"],
        "raise-or-fold": ["55-66", "A7s", "Q9s", "AT", "KJ"],
      },
      "BB": {
        "title": "vs RFI: Big Blind vs Button",
        "raise": ["TT+", "AK", "AQs+", "J9s+", "T9s"],
        "raise-or-call": ["ATs-AJs", "A2s-A5s", "K9s+", "K6s-K7s", "Q8s+", "88-99", "J7s-J8s", 
                          "T6s-T8s", "97s+", "87s", "76s", "65s", "54s", "KJ+", "AT-AQ"],
        "call": ["A6s-A9s", "K8s", "K2s-K5s", "Q2s-Q7s", "J4s-J6s", "96s", "85s-86s", "74s-75s", "64s", "53s", "43s", "22-77", "A7-A9", "A5", "K9-KT", "QT+", "J9+", "T9"],
        "call-or-fold": ["63s", "52s", "42s", "A6", "A4", "K8", "Q9", "T8", "98", "87", "76", "65"]
      },
    }
  },
  "cold4bet": {
    "CO": {
      "vsHJ": {
        "title": "Cold 4-Bet: CO vs HJ 3-Bet",
        "raise": ["QQ+", "AK", "AKs"],
        "raise-or-call": ["AQs", "A5s", "KQs"]
      }
    },
    "BTN": {
      "vsHJ": {
        "title": "Cold 4-Bet: BTN vs HJ 3-Bet",
        "raise": ["QQ+", "AK", "AKs"],
        "raise-or-fold": ["AQs", "A5s", "KQs", "JJ"],
      },
      "vsCO": {
        "title": "Cold 4-Bet: BTN vs CO 3-Bet",
        "raise": ["QQ+", "AK", "AQs+", "KQs"],
        "raise-or-fold": ["A5s", "KJs", "AQ", "TT-JJ"],
      }
    },
    "SB": {
      "vsHJ": {
        "title": "Cold 4-Bet: Small Blind vs HJ 3-Bet",
        "raise": ["QQ+", "AKs", "AK"],
        "raise-or-fold": ["AQs", "KQs", "A5s"]
      },
      "vsCO": {
        "title": "Cold 4-Bet: Small Blind vs CO 3-Bet",
        "raise": ["QQ+", "AQs+", "AK", "KQs"],
        "raise-or-fold": ["KJs", "A5s", "JJ"]
      },
      "vsBTN": {
        "title": "Cold 4-Bet: Small Blind vs BTN 3-Bet",
        "raise": ["QQ+", "AQs+", "AK", "KQs"],
        "raise-or-fold": ["AJs", "KJs", "TT-JJ", "AQ"]
      }
    },
    "BB": {
      "vsHJ": {
        "title": "Cold 4-Bet: Big Blind vs HJ 3-Bet",
        "raise": ["QQ+", "AKs", "AK"],
        "raise-or-fold": ["AQs", "A5s", "KQs", "JJ"]
      },
      "vsCO": {
        "title": "Cold 4-Bet: Big Blind vs CO 3-Bet",
        "raise": ["QQ+", "AQs+", "AK", "KQs"],
        "raise-or-fold": ["A5s", "KJs", "JJ", "AQ"]
      },
      "vsBTN": {
        "title": "Cold 4-Bet: Big Blind vs BTN 3-Bet",
        "raise": ["QQ+", "AQs+", "AK", "KQs"],
        "raise-or-fold": ["AJs", "KJs", "TT-JJ", "AQ"]
      }
    },
    "BBvsSB": {
      "vsLJHJ": {
        "title": "Cold 4-Bet: Big Blind vs Small Blind 3-Bet and MP open",
        "raise": ["TT+", "AJs+", "AK", "KJs+"],
        "raise-or-fold": ["AQ"],
      },
      "vsCO": {
        "title": "Cold 4-Bet: Big Blind vs Small Blind 3-Bet and CO open",
        "raise": ["TT+", "AJs+", "AK", "KJs+"],
        "raise-or-fold": ["ATs", "AQ"],
      },
      "vsBTN": {
        "title": "Cold 4-Bet: Big Blind vs Small Blind 3-Bet and BTN open",
        "raise": ["TT+", "AJs+", "AQ+", "KJs+"],
        "raise-or-fold": ["ATs", "KTs", "99"],
      }
    }
  }
}
