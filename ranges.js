// GTO Wizard 25NL ranges
let ranges = {
  "RFI": {
    "SB": {
      "title": "RFI from the Small Blind",
      "raise": ["22+", "A2s+", "K2s+", "Q2s+", "J4s+", "T6s+", "96s+",
                "85s+", "75s+", "64s+", "54s",
                "A3+", "K8+", "Q9+", "J9+", "T9+"],
      "raise-or-fold": ["A2", "T8", "98", "53s"],
    },
    "LJ": {
      "title": "RFI from the Low Jack",
      "raise": ["77+", "A2s+", "K5s+", "Q9s+", "JTs+",
                "AT+", "KJ+"],
      "raise75-or-fold": ["QJ"],
      "raise25-or-fold": ["55-66", "T9s", "76s", "65s", "54s"],
      "raise-or-fold": ["K4s", "A9", "A5", "KT"]
    },
    "HJ": {
      "title": "RFI from the High Jack",
      "raise": ["66+", "A2s+", "K3s+", "Q8s+", "J9s+",
                "A9+", "KT+", "QJ"],
      "raise75-or-fold": ["55", "A5"],
      "raise25-or-fold": ["44", "Q6s-Q7s", "J8s", "76s", "65s", "54s",],
      "raise-or-fold": ["T9s", "A8", "QT"],
    },
    "CO": {
      "title": "RFI from the Cut Off",
      "raise": ["44+", "A2s+", "K2s+", "Q6s+", "J7s+", "T8s+", "98s+",
                "A8+", "A5", "KT+", "QT+", "JT"],
      "raise75-or-fold": ["A7"],
      "raise25-or-fold": ["33", "76s", "65s", "54s", "A6", "A4"],
      "raise-or-fold": ["Q5s", "K9"],
    },
    "BTN": {
      "title": "RFI from the Button",
      "raise": ["22+", "A2s+", "K2s+", "Q2s+", "J4s+", "T6s+", "96s+",
                "85s+", "75s+", "64s+", "54s",
                "A3+", "K8+", "Q9+", "J9+", "T8+", "98"],
      "raise75-or-fold": ["T5s", "98"],
      "raise-or-fold": ["53s", "K7", "J8"]
    }
  },

  "RFIvs3Bet": {
    "SB": {
      "vsBB": {
        "title": "RFI Small Blind vs 3-Bet from Big Blind",
        "raise": ["TT+", "AQs+", "AK", "AT", "K5s"],
        "call": ["A7s-AJs", "K9s+", "QTs+", "JTs", "T9s", "55-88"],
        "call10-or-fold": ["T8s", "98s", "87s", "76s", "65s", "54s"],
        "call25-or-fold": ["K8s", "33-44"],
        "call90-or-fold": ["J9s"],
        "raise-or-call": ["A4s", "Q9s", "99"], 
        "raise-or-fold": ["K7s", "QJ"],
        "raise10-or-fold": ["A2s", "KT", "QT"],
        "raise10-or-call": ["A5s"],
        "raise50-call25-or-fold": ["A3s"],
        "raise75-or-fold": ["KJ"],
        "raise90-or-call": ["A6s", "AJ-AQ", "KQ"]
      }
    },
    "LJ": {
      "vsSB": {
        "title": "RFI Low Jack vs 3-Bet from Small Blind",
        "raise": ["KK+", "AKs"],
        "raise-or-call": ["AK", "QQ"],
        "call": ["AQs", "T9s", "87s", "76s", "65s", "54s"],
        "raise10-or-fold": ["ATs", "A6s-A7s", "A4s", "K6s-K9s", "AQ"],
        "raise25-or-fold": ["AQ", "A8s-A9s", "A3s"],
        "raise25-call10-or-fold": ["KQs", "A5s"],
        "raise75-call10-or-fold": ["KJs"],
        "raise10-call10-or-fold": ["AJs"],
        "raise75-or-fold": ["KTs"],
        "call75-or-fold": ["JJ"],
        "call10-or-fold": ["77-TT"],
        "call25-or-fold": ["44-66"]

      },
      "vsBB": {
        "title": "RFI Low Jack vs 3-Bet from Big Blind",
        "raise": ["KK+", "AKs"],
        "raise-or-call": ["A4s"],
        "raise10-or-fold": ["A6s-A7s", "K6s-K9s", "AQ", "KQ"],
        "raise75-or-call": ["AK"],
        "raise25-or-call": ["ATs", "A5s"],
        "raise25-or-fold": ["A2s-A3s"],
        "raise10-call10-or-fold": ["KJs", "A8s"],
        "raise25-call10-or-fold": ["A9s"],
        "call": ["QQ", "AJs-AQs", "KQs", "T9s", "87s", "76s", "65s", "54s"],
        "call-or-fold": ["77-99"],
        "call10-or-fold": ["KTs", "QJs", "JTs"],
        "call25-or-fold": ["77-TT"],
        "call75-or-fold": ["JJ", "44-66"]
      },
      "vsHJ": {
        "title": "RFI Low Jack vs 3-Bet from High Jack",
        "raise": ["KK+", "AKs"],
        "raise75-or-call": ["QQ", "AJs", "AK"],
        "raise25-or-call": ["JJ", "AQs"],
        "raise50-call10-or-fold": ["ATs", "A5s"],
        "raise75-call10-or-fold": ["KJs"],
        "raise90-or-call": ["KQs"],
        "raise25-or-fold": ["A4s", "AQ"],
        "raise10-call10-or-fold": ["77-TT"],
        "raise10-call25-or-fold": ["66"],
        "raise-or-fold": ["KTs"],
        "call": ["44-55", "T9s", "87s", "76s", "65s", "54s"],
        "call10-or-fold": ["JTs"]

      },
      "vsCO": {
        "title": "RFI Low Jack vs 3-Bet from Cut Off",
        "raise": ["KK+", "AKs"],
        "raise25-or-call": ["JJ", "AQs", "76s"],
        "raise75-or-call": ["AJs", "AK"],
        "raise-or-fold": ["ATs"],
        "raise25-or-fold": ["AQ", "A4s-A5s"],
        "raise75-or-fold": ["KTs-KJs"],
        "raise10-or-fold": ["A6s-A8s", "K6s-K9s"],
        "raise90-or-call": ["QQ"],
        "raise10-call10-or-fold": ["77-TT"],
        "raise50-call10-or-fold": ["KQs"],
        "call25-or-fold": ["66"],
        "call75-or-fold": ["44-55", "65s", "54s"], 
        "call": ["87s"],
        "call-or-fold": ["T9s"],
        "call10-or-fold": ["JTs"]
      },
      "vsBTN": {
        "title": "RFI Low Jack vs 3-Bet from Button",
        "raise": ["KK+", "AKs", "KTs"],
        "call": ["AQs", "44-55", "T9s", "87s", "76s", "65s", "54s"],
        "call25-or-fold": ["66-99", "JTs"],
        "raise75-or-call": ["AJs", "AK", "KQs", "QQ"],
        "raise75-call10-or-fold": ["KJs"],
        "raise25-call10-or-fold": ["ATs"],
        "raise25-or-fold": ["A7s-A9s", "A4s", "K9s"],
        "raise25-call10-or-fold": ["A5s", "ATs"],
        "raise25-or-call": ["JJ"],
        "raise10-call25-or-fold": ["TT"],
        "raise10-or-fold": ["A6s", "A3s", "K6s-K8s"],
        "raise-or-fold": ["AQ"]
      }
    },
    "HJ": {
      "vsSB": {
        "title": "RFI High Jack vs 3-Bet from Small Blind",
        "raise": ["QQ+", "AKs", "KJs"],
        "raise-or-call": ["AJs", "JJ"],
        "raise75-or-fold": ["ATs", "KTs"],
        "raise25-or-fold": ["AQ", "A6s-A8s", "K9s"],
        "raise10-or-fold": ["A9s", "K6s-K8s"],
        "raise10-call10-or-fold": ["A5s"],
        "raise75-or-call": ["AK"],
        "call": ["AQs", "76s", "65s", "54s"],
        "call-or-fold": ["KQs", "87s"],
        "call25-or-fold": ["55-TT", "T9s", "JTs"],
        "call10-or-fold": ["44"]
      },
      "vsBB": {
        "title": "RFI High Jack vs 3-Bet from Big Blind",
        "raise": ["KK+", "AKs"],
        "raise-or-call": ["AK"],
        "call-or-fold": ["88-TT"],
        "call": ["ATs-AQs", "KQs", "76s", "65s", "54s"],
        "call25-or-fold": ["44-77", "QJs", "T9s"],
        "raise25-call10-or-fold": ["A8s-A9s"],
        "raise25-or-fold": ["A6s-A7s", "AQ", "K9s"],
        "raise10-call50-or-fold": ["A5s", "KJs"],
        "raise25-call25-or-fold": ["KTs"],
        "raise25-or-call": ["QQ"],
        "raise10-or-call": ["JJ"],
        "call10-or-fold": ["A4s", "QTs"],
        "raise10-or-fold": ["A2s-A3s", "K3s", "K5s-K7s", "KQ"]

      },
      "vsCO": {
        "title": "RFI High Jack vs 3-Bet from Cut Off",
        "raise": ["QQ+", "AKs", "KTs-KJs"],
        "raise-or-call": ["JJ", "76s"],
        "raise-or-fold": ["ATs"],
        "raise90-or-call": ["AJs"],
        "raise75-or-call": ["KQs", "AK"],
        "raise25-or-call": ["AQs"],
        "raise10-or-fold": ["A7s-A8s"],
        "raise25-or-fold": ["A5s-A6s", "K6s-K7s", "K9s"],
        "raise10-call10-or-fold": ["77-TT"],
        "raise75-or-fold": ["AQ"],
        "call": ["44", "65s", "54s"],
        "call10-or-fold": ["JTs", "T9s", "55-66"],
      },
      "vsBTN": {
        "title": "RFI High Jack vs 3-Bet from Button",
        "raise": ["QQ+", "AKs", "AQ", "KTs"],
        "raise90-or-call": ["AK"],
        "raise75-or-call": ["KQs", "JJ"],
        "raise75-or-fold": ["KJs"],
        "raise-or-call": ["AJs"],
        "raise-or-fold": ["ATs"],
        "raise10-or-fold": ["A9s"],
        "raise25-or-fold": ["A5s-A8s", "K9s", "K5s"],
        "raise10-or-fold": ["A9s", "K6s-K8s", "KQ"],
        "raise25-call25-or-fold": ["TT"],
        "raise10-call25-or-fold": ["88-99"],
        "call10-or-fold": ["55-77", "JTs", "T9s"],
        "call": ["AQs", "44", "76s", "65s", "54s"],
      }
    },
    "CO": {
      "vsSB": {
        "title": "RFI Cut Off vs 3-Bet from Small Blind",
        "raise": ["JJ+", "AKs", "AK", "KTs"],
        "raise-or-call": [],
        "raise25-or-call": ["TT"],
        "raise10-or-fold": ["A6s", "K9s"],
        "raise-or-fold": ["A7s-A9s"],
        "raise25-or-fold": ["KQ", "KT"],
        "raise25-call25-or-fold": [],
        "raise75-or-call": ["AQ", "KJs"],
        "raise25-call50-or-fold": [],
        "raise90-or-call": ["ATs"],
        "call": ["AJs-AQs", "KQs", "65s", "54s"],
        "call10-or-fold": ["JTs", "T9s", "33-55"],
        "call25-or-fold": ["66-99"],
        "call-or-fold": ["76s"],
        "call75-or-fold": []
      },
      "vsBB": {
        "title": "RFI Cut Off vs 3-Bet from Big Blind",
        "raise": ["KK+", "AKs"],
        "call": ["ATs-AQs", "KJs+", "76s", "65s"],
        "call75-or-fold": ["TT", "A5s", "QJs"],
        "call-or-fold": ["77-99", "54s"],
        "call25-or-fold": ["66", "QTs"],
        "call10-or-fold": ["44-55", "JTs"],
        "raise25-or-call": ["JJ"],
        "raise75-or-call": ["QQ", "AK"],
        "raise-or-fold": ["AQ"],
        "raise25-or-fold": ["KJ", "K6s"],
        "raise10-or-fold": ["AJ", "A7-A8", "A4-A5", "A6s-A7s", "KQ"],
        "raise10-call50-or-fold": ["A9s", "KTs"],
        "raise-or-call": ["A8s"]
      },
      "vsBTN": {
        "title": "RFI Cut Off vs 3-Bet from Button",
        "raise": ["JJ+", "AQ+", "AKs", "KJs"],
        "raise-or-call": ["KQs", "TT", "AJs"],
        "raise90-or-call": ["ATs", "KTs"],
        "raise25-call50-or-fold": [],
        "raise-or-fold": ["A7s", "K5s"],
        "raise25-or-fold": ["A5s-A6s", "KQ"],
        "raise10-or-fold": ["A4s", "A8s-A9s", "K9s", "AJ", "KJ"],
        "raise25-call25-or-fold": ["99"],
        "raise10-call25-or-fold": ["88"],
        "raise10-call10-or-fold": ["44-55"],
        "raise25-or-call": ["54s"],
        "call": ["AQs", "33"],
        "call-or-fold": ["76s"],
        "call10-or-fold": ["QTs", "JTs", "66-77", "T9s", "98s"],
        "call25-or-fold": [],
        "call75-or-fold": ["65s"]
      }
    },
    "BTN": {
      "vsSB": {
        "title": "RFI Button vs 3-Bet from Small Blind",
        "raise": ["JJ+", "AKs", "AK", "KQ"],
        "raise-or-call": ["A9s", "QJs"],
        "raise25-or-call": ["AQ", "KTs"],
        "raise75-or-call": ["AQs", "TT", "QTs"],
        "raise-or-fold": ["K9s", "AJ"],
        "raise25-or-fold": ["A6s"],
        "raise75-or-fold": ["A7s-A8s"],
        "raise50-call25-or-fold": [],
        "raise25-call25-or-fold": [],
        "raise10-or-fold": ["AT"],
        "raise10-call50-or-fold": ["77"],
        "raise10-or-call": ["88"],
        "raise-call-or-fold": ["A5s"],
        "raise25-call10-or-fold": ["A4s"],
        "call": ["ATs-AJs", "KJs+", "99"],
        "call-or-fold": ["JTs", "T9s", "66", "54s"],
        "call25-or-fold": ["98s", "76s", "65s", "22-44"]
      },
      "vsBB": {
        "title": "RFI Button vs 3-Bet from Big Blind",
        "raise": ["JJ+", "AKs", "AK"],
        "raise-or-call": ["AQs", "AQ"],
        "raise25-or-call": [],
        "raise75-or-call": [],
        "raise90-or-call": ["KQ"],
        "raise-or-fold": ["AJ"],
        "raise10-or-fold": ["A6s", "A4"],
        "raise10-call10-or-fold": ["A7s"],
        "raise10-or-call": ["A8s", "TT"],
        "raise25-or-fold": ["A5", "AT"],
        "raise50-call25-or-fold": [],
        "raise25-call25-or-fold": [],
        "call": ["A9s-AJs", "KTs+", "QTs+", "JTs", "88-99", "A5s"],
        "call-or-fold": ["66", "K9s"],
        "call10-or-fold": ["44", "65s", "54s", "T9s"],
        "call25-or-fold": ["55", "A4s", "76s"],
        "call75-or-fold": ["77"]
      },
    }
  },
  "vsRFI": {
    "vsSB": {
      "BB": {
        "title": "vs RFI: Big Blind vs Small Blind",
        "raise": ["99+", "AQ+", "AJs+", "KTs+", "J2s", "T4s-T5s", "A3", "K7"],
        "raise10-or-call": ["A2s-A4s", "87s", "76s", "KT"],
        "raise25-or-call": ["44", "66-88", "ATs", "Q4s", "JTs", "98s", "65s", "54s", "A5", "JT"],
        "raise-or-call": ["55", "A5s", "Q3s", "J6s", "T9s", "A7", "T6s", "K9", "QT", "J9", "T9"],
        "raise75-or-call": ["QJs", "Q2s", "J3s-J5s", "A4", "A6", "Q9", "T8"],
        "call": ["22-33", "A6s-A9s", "K2s-K9s", "Q5s-QTs", "J7s-J9s", "T7s-T8s", "96s-97s", "85s-86s", "74s-75s", "63s-64s", "52s-53s", "43s",
                 "A8-AJ", "KJ+", "QJ"],
        "raise25-or-fold": ["K5-K6", "Q8", "J8"],
        "raise-or-fold": ["K8"],
        "raise75-or-fold": ["A2"],
        "call25-or-fold": ["42s", "98"],
      }
    },
    "vsLJ": {
      "SB": {
        "title": "vs RFI: Small Blind vs Low Jack",
        "raise": ["JJ+", "AK", "AQs+", "A4s-A5s", "KQs+"],
        "raise-or-fold": ["KTs", "KQ"],
        "raise75-or-fold": ["AQ", "A3s"],
        "raise25-or-fold": ["ATs-AJs", "A8s", "A6s", "KJs", "K7s-K8s", "K5s-K6s"],
        "raise10-or-fold": ["A2s", "K9s", "K4s", "66-TT", "76s", "65s", "54s"]
      },
      "BB": {
        "title": "vs RFI: Big Blind vs Low Jack",
        "raise": ["QQ+", "AKs", "AK"],
        "call": ["22-44", "77-JJ", "A8s-AQs", "A5s", "K9s-KQs", "J9s+", "T9s", "T7s", "98s", "87s", "AJ-AQ"],
        "raise10-or-call": ["55-66", "K8s", "QJs", "J8s", "T8s", "96s-97s", "86s", "74s+", "63s+", "52s+", "42s+", "A9-AT", "KJ-KQ", "QJ"],
        "raise25-or-call": ["A7s", "K7s", "K4s", "Q6s-QTs"],
        "raise-or-call": ["A6s", "A2s-A4s", "K5s-K6s", "K2s-K3s"],
        "raise-or-fold": ["A5"]
      },
      "HJ": {
        "title": "vs RFI: High Jack vs Low Jack",
        "raise": ["JJ+", "AQ+", "A9s+", "A3s-A4s", "KJs+", "KQ"],
        "raise-or-fold": ["A5s", "KTs"],
        "raise25-or-fold": ["TT", "A6s-A9s", "76s", "65s", "54s"],
        "raise75-or-fold": ["K5s"],
        "raise10-or-fold": ["66-99", "T9s", "87s"],
      },
      "CO": {
        "title": "vs RFI: Cut Off vs Low Jack",
        "raise": ["JJ+", "AQ+", "AQs+", "A3s-A4s", "KJs+", "KQ"],
        "raise75-or-fold": ["ATs-AJs", "A5s"],
        "raise25-or-fold": ["A7s-A8s"],
        "raise10-or-fold": ["66-TT", "A9s", "K4s", "K6s-K8s", "76s", "65s", "54s"],
        "raise-or-fold": ["88", "A2s", "A6s", "KTs", "K5s"],

      },
      "BTN": {
        "title": "vs RFI: Button vs Low Jack",
        "raise": ["QQ+", "AKs", "A2s-A4s", "AK", "KQ"],
        "raise25-or-call": ["99-JJ", "KJs+"],
        "raise-or-call": ["AQ", "AQs", "A5s", "KTs"],
        "raise25-call50-or-fold": ["88"],
        "raise10-or-call": ["ATs-AJs"],
        "raise75-or-call": ["QJs"],
        "raise75-or-fold": ["A6s"],
        "raise25-or-fold": ["A7s", "K4s", "K6s-K9s", "QTs"],
        "raise-or-fold": ["A8s", "K5s"],
        "raise50-call25-or-fold": ["A9s"],
        "raise10-or-fold": ["AJ", "KJ", "76s", "65s", "54s"],
        "call25-or-fold": ["JTs", "33-55"],
        "raise10-call10-or-fold": ["66-77"],
      }
    },
    "vsHJ": {
      "SB": {
        "title": "vs RFI: Small Blind vs High Jack",
        "raise": ["JJ+", "AQ+", "AJs+", "A3s-A4s", "KJs+"],
        "raise-or-fold": ["88", "ATs", "A5s", "A2s", "KTs"],
        "raise25-or-fold": ["TT", "A6s-A7s", "K4s", "K6s-K7s", "AJ", "KJ"],
        "raise10-or-fold": ["55-99", "K8s"]
      },
      "BB": {
        "title": "vs RFI: Big Blind vs High Jack",
        "raise": ["QQ+", "AK", "AKs"],
        "call": ["22-33", "88-TT", "A8s-AJs", "A5s", "K8s-KQs", "QTs+", "J8s-J9s", "T8s", "97s+", "85s+", "53s+", "AT-AQ"],
        "raise10-or-call": ["JJ", "44-77", "AQs", "A4s", "A7s", "K7s", "Q5s", "JTs", "J7s", "T9s", "T7s", "96s", "74s+", "64s+", "52s", "42s+",
                            "A9", "KT-KJ", "QT"],
        "raise25-or-call": ["A6s", "K2s", "K5s-K6s", "Q7s-Q9s", "Q4s", "KQ", "QJ"],
        "raise-or-call": ["A2s-A3s", "K4s", "Q6s"],
        "raise75-or-call": ["K3s"],
        "call-or-fold": ["Q3s", "T6s", "JT"],
        "raise10-or-fold": ["A7-A8"],
        "raise25-or-fold": ["Q2s", "A4"],
        "raise-or-fold": ["A5"]
      },
      "CO": {
        "title": "vs RFI: Cut Off vs High Jack",
        "raise": ["JJ+", "AQ+", "ATs+", "A2s-A4s", "KJs+", "KQ"],
        "raise25-or-fold": ["K4s-K5s", "AJ", "TT"],
        "raise10-or-fold": ["66-99", "A9s", "K6s-K7s", "76s", "65s", "54s"],
        "raise-or-fold": ["A5s-A8s"],
      },
      "BTN": {
        "title": "vs RFI: Button vs High Jack",
        "raise": ["QQ+", "AK", "AKs", "A2s-A4s", "KQ"],
        "raise-or-call": ["AQs", "JJ", "AQ", "A5s", "QJs"],
        "raise10-or-call": ["99", "KQs+"],
        "raise25-or-call": ["TT", "ATs", "KTs-KJs"],
        "raise-or-fold": ["A8s", "KJ"],
        "raise10-or-fold": ["K8s", "KT"],
        "raise25-call25-or-fold": ["A9s"],
        "raise25-call10-or-fold": ["QTs"],
        "raise25-call50-or-fold": ["88"],
        "raise25-or-fold": ["K5s-K7s"],
        "raise75-or-fold": ["A6s-A7s", "K4s", "AJ"],
        "raise10-call25-or-fold": ["JTs"],
        "raise10-call10-or-fold": ["76s", "65s", "54s"],
        "raise-call-or-fold": ["66-77"],
        "call": ["AJs"],
        "call10-or-fold": ["33-55"]
      }
    },
    "vsCO": {
      "SB": {
        "title": "vs RFI: Small Blind vs Cut Off",
        "raise": ["TT+", "AQ+", "ATs+", "A2s-A5s", "KTs+", "QTs+", "JTs", "T9s", "AJ", "KQ"],
        "raise-or-fold": ["A6s", "K6s", "KJ"],
        "raise75-or-fold": [],
        "raise25-or-fold": ["KT", "66"],
        "raise10-or-fold": ["77-99", "A9s", "A7s", "K3s"],

      },
      "BB": {
        "title": "vs RFI: Big Blind vs Cut Off",
        "raise": ["QQ+", "AK", "AKs", "K2s"],
        "call": ["22", "88-99", "A3s-A4s", "A6s-AJs", "K7s-KQs", "Q9s+", "J8s+", "T6s+", "96s+", "85s+", "74s+", "63s+", "52s+", "42s+",
                 "A9-AQ", "KT"],
        "call-or-fold": ["J5s"],
        "call25-or-fold": ["J4s", "95s", "T9"],
        "raise10-or-call": ["33-77", "TT", "AQs", "K6s", "Q7s-Q8s", "Q4s", "K9", "QT", "JT"],
        "raise25-or-call": ["A5s", "A2s", "K4s-K5s", "J6s-J7s", "A8", "KJ+"],
        "raise75-or-call": ["Q6s", "JJ"],
        "raise-or-call": ["K3s", "Q5s", "Q2s-Q3s", "A5", "QJ"],
        "raise25-or-fold": ["A4"],
        "raise10-or-fold": ["A3", "A6"],
        "raise-call-or-fold": ["A7"],

      },
      "BTN": {
        "title": "vs RFI: Button vs Cut Off",
        "raise": ["JJ+", "AK", "AQs+", "A2s-A3s", "A6s", "AJ", "KJ+"],
        "raise-or-call": ["AJs", "KJs+", "TT", "QJs"],
        "raise25-or-call": ["ATs", "KTs", "99"],
        "raise75-or-call": ["A4s-A5s", "A8s-A9s", "AQ"],
        "raise75-or-fold": ["A7s", "AT"],
        "raise-or-fold": ["K9s"],
        "raise10-call25-or-fold": ["77-88"],
        "raise25-call10-or-fold": ["66"],
        "raise10-or-fold": ["K3s-K4s", "QJ"],
        "raise25-or-fold": ["K5s-K6s", "KT"],
        "raise10-call10-or-fold": ["76s", "65s", "54s"],
        "raise25-call25-or-fold": ["QTs", "JTs"],
        "call10-or-fold": ["44-55"],

      }
    },
    "vsBTN": {
      "SB": {
        "title": "vs RFI: Small Blind vs Button",
        "raise": ["99+", "AT+", "KJ", "A8s+", "A4s-A5s", "K9s+", "QTs+", "JTs", "KQ"],
        "raise-or-fold": ["K8s"],
        "raise10-or-fold": ["55", "K7s", "T9s", "65s", "54s", "KT"],
        "raise25-or-fold": ["66-77", "A6s", "QJ"],
        "raise75-or-fold": ["88", "A2s-A3s", "A7s"]
      },
      "BB": {
        "title": "vs RFI: Big Blind vs Button",
        "raise": ["JJ+", "AK", "AQs+"],
        "call": ["22-44", "A6s-AJs", "A2s-A3s", "K6s-KJs", "Q9s+", "Q7s", "J8s+", "J3s", "T7s+", "95s-97s", "85s-86s", "74s-75s", "63s-64s", "52s-53s", "42s+",
                 "A8-A9", "AJ", "K9"],
        "raise75-or-call": ["TT", "KQs", "A5s", "K2s", "J5s"],
        "raise-or-call": ["A4s", "J2s", "A3", "KJ"],
        "raise-or-fold": ["A2"],
        "raise10-or-call": ["55-99", "K3s-K5s", "Q6s", "Q8s", "J6s-J7s", "T5s-T6s", "98s", "87s", "76s", "65s", "54s", "A7", "AT", "AQ", "KQ", "Q9"],
        "raise25-or-call": ["Q2s-Q4s", "Q5s", "J4s", "A4-A6", "K8", "KT", "QT+", "J9+"],
        "raise10-or-fold": ["K5-K6"],
        "raise25-call10-or-fold": ["K7", "T9"],
        "raise10-call25-or-fold": ["T8"],
        "call75-or-fold": ["T4s"],
        "call-or-fold": ["84s"],
        "call25-or-fold": ["32s", "98", "87"],
        "call10-or-fold": ["76"]
      },
    }
  },

  "vs4Bet": {
    "BB": {
      "vsSB": {
        "title": "Big Blind vs 4-Bet from Small Blind",
        "jam": ["99-KK", "AQs+", "AK", "44-55"],
        "jam-or-call": ["88", "66"],
        "jam25-or-call": ["AA", "A5s"],
        "jam75-or-call": ["QJs", "77"],
        "jam90-or-call": ["AQ", "KTs-KJS", "55"],
        "call": ["ATs-AJs", "KQs", "JTs", "T9s", "98s", "87s", "76s", "65s", "54s", "A2s-A4s"]
      },
      "vsLJ": {
        "title": "Big Blind vs 4-Bet from Low Jack",
        "jam": ["KK+", "AKs", "AK", "55-66"],
        "jam75-or-call": ["QQ"],
        "call": ["76s", "65s", "54s"]
      },
      "vsHJ": {
        "title": "Big Blind vs 4-Bet from High Jack",
        "jam": ["KK+", "AKs", "AK", "JJ", "44-55"],
        "jam75-or-call": ["QQ", "66-77"],
        "call": ["A4s", "AQs", "JTs", "T9s", "76s", "65s", "54s"]
      },
      "vsCO": {
        "title": "Big Blind vs 4-Bet from Cut Off",
        "jam": ["TT+", "AKs", "AK", "33-77", "A5s"],
        "call": ["AQs", "T9s", "65s"]
      },
      "vsBTN": {
        "title": "Big Blind vs 4-Bet from Button",
        "jam": ["TT+", "AKs", "AK", "A4s-A5s", "55", "77-99"],
        "jam90-or-call": ["AQs", "KQs", "66"],
        "jam75-or-call": ["AJs"],
        "call": ["AQ"]
      }
    },
    "SB": {
      "vsLJ": {
        "title": "Small Blind vs 4-Bet from Low Jack",
        "jam": ["KK+", "AKs", "AK"],
        "jam75-or-call": ["QQ", "66-77"],
        "jam25-call25-or-fold": ["JJ"],
        "jam10-or-call": ["TT"],
        "jam25-or-call": ["99"],
        "jam-or-call": ["88"],
        "call75-or-fold": ["AQs"],
        "call25-or-fold": ["ATs-AJs"],
        "call10-or-fold": ["KJs+", "A5s"],
        "call": ["76s", "65s", "54s"]
      },
      "vsHJ": {
        "title": "Small Blind vs 4-Bet from High Jack",
        "jam": ["QQ+", "AKs", "AK", "55"],
        "jam90-or-call": ["JJ", "AQs"],
        "jam75-or-call": ["TT", "66-77"],
        "jam10-or-fold": ["A5s"],
        "jam-or-call": ["88-99"],
        "call10-or-fold": ["AJs", "KQs"]
      },
      "vsCO": {
        "title": "Small Blind vs 4-Bet from Cut Off",
        "jam": ["JJ+", "AKs", "AK", "AJs"],
        "jam90-or-call": ["AQs"],
        "jam-or-fold": ["KQs", "A5s"],
        "jam-or-call": ["77", "99"],
        "jam75-or-call": ["66", "88", "TT"],
        "call10-or-fold": ["KJs"]

      },
      "vsBTN": {
        "title": "Small Blind vs 4-Bet from Button",
        "jam": ["TT+", "AKs", "AK", "KJs"],
        "jam75-or-call": ["AQs"],
        "jam-or-call": ["ATs-AJs", "66-77"],
        "jam25-or-call": ["KQs", "88-99"],
        "jam50-call10-or-fold": ["A5s"],
        "jam50-call25-or-fold": ["AQ"],
        "call10-or-fold": ["KTs"],
        "call25-or-fold": ["QJs", "JTs"],
        "call": ["T9s", "55", "65s", "54s"]
        
      },
    },
    "BTN": {
      "vsLJ": {
        "title": "Button vs 4-Bet from Low Jack",
        "jam": ["KK", "AKs", "AK"],
        "jam25-call25-or-fold": ["A5s"],
        "jam75-or-call": ["AA", "QQ"],
        "jam25-or-call": ["99"],
        "call-or-fold": ["TT"],
        "jam-or-call": ["66-88"],
        "call": ["ATs-AQs", "KJs+", "JJ", "T9s", "54s"],
        "call75-or-fold": ["76s", "65s"]
      },
      "vsHJ": {
        "title": "Button vs 4-Bet from High Jack",
        "jam": ["QQ+", "AKs", "AK"],
        "jam75-or-call": ["JJ", "AA", "66-88"],
        "jam25-or-call": ["99"],
        "call": ["ATs-AQs", "KJs+", "JTs", "TT", "76s", "65s", "54s"],
        "jam50-call10-or-fold": ["A5s"],
        "call10-or-fold": ["QJs", "KTs", "A4s"],
      },
      "vsCO": {
        "title": "Button vs 4-Bet from Cut Off",
        "jam": ["JJ-KK", "AKs", "AK"],
        "jam10-or-call": ["88"],
        "jam25-or-call": ["TT"],
        "jam75-or-call": ["AJs", "AA", "KQs"],
        "jam90-or-call": ["A4s-A5s"],
        "jam-or-call": ["66-77"],
        "call": ["AQs", "ATs", "KJs", "JTs", "T9s", "99", "76s", "65s", "54s"],
        "call10-or-fold": ["A9s"],
        "call25-or-fold": ["KTs", "QJs"],


      },
    },
    "CO": {
      "vsLJ": {
        "title": "Cut Off vs 4-Bet from Low Jack",
        "jam": ["KK", "AKs", "AK"],
        "jam75-or-call": ["AA", "QQ"],
        "jam10-call25-or-fold": ["A5s"],
        "jam10-or-call": ["99-TT"],
        "jam-or-call": ["66-88"],
        "call25-or-fold": ["KQs", "AJs", "ATs"],        
        "call10-or-fold": ["KJs", "KTs"],
        "call75-or-fold": ["JJ"],
        "call": ["AQs", "T9s", "87s", "76s", "65s", "54s"],
      },
      "vsHJ": {
        "title": "Cut Off vs 4-Bet from High Jack",
        "jam": ["KK", "AKs", "AK"],
        "jam75-or-call": ["AA", "QQ", "66-88"],
        "jam-call-or-fold": ["A5s"],
        "jam-or-call": ["JJ"],
        "call": ["AQs", "99-TT", "76s", "65s", "54s"],
        "call25-or-fold": ["AJs", "KJs+"],
        "call10-or-fold": ["ATs", "KTs"],
      }
    },
    "HJ": {
      "vsLJ": {
        "title": "High Jack vs 4-Bet from Low Jack",
        "jam": ["KK", "AKs", "AK"],
        "jam-or-call": ["AA"],
        "jam25-or-call": ["QQ"],
        "jam10-or-call": ["66"],
        "jam-call-or-fold": ["A5s"],
        "call": ["AQs", "77-99", "T9s", "87s", "76s", "65s", "54s"],
        "call75-or-fold": ["TT-JJ"],
        "call-or-fold": ["AJs", "KQs"],
        "call10-or-fold": ["ATs", "KJs", "KTs", "A4s"]
      }
    }
  }
}
