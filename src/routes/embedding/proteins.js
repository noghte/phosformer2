/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var proteins = [{
    id: "1",
    text: "PK",
    expanded: true,
    items: [{
            id: "1_1",
            text: "AGC",
            items: [{
                    id: "1_1_1",
                    text: "Akt",
                    items: [{
                            id: "1_1_1_1",
                            text: "AKT1"
                        }, {
                            id: "1_1_1_2",
                            text: "AKT2"
                        }, {
                            id: "1_1_1_3",
                            text: "AKT3"
                        }]
                }, {
                    id: "1_1_2",
                    text: "DMPK",
                    items: [{
                            id: "1_1_2_1",
                            text: "GEK",
                            items: [{
                                    id: "1_1_2_1_1",
                                    text: "DMPK1 (DMPK)"
                                }, {
                                    id: "1_1_2_1_2",
                                    text: "DMPK2 (CDC42BPG)"
                                }, {
                                    id: "1_1_2_1_3",
                                    text: "MRCKa (CDC42BPA)"
                                }, {
                                    id: "1_1_2_1_4",
                                    text: "MRCKb (CDC42BPB)"
                                }]

                        }, {
                            id: "1_1_2_2",
                            text: "ROCK",
                            items: [{
                                    id: "1_1_2_2_1",
                                    text: "ROCK1"
                                }, {
                                    id: "1_1_2_2_2",
                                    text: "ROCK2"
                                }]
                        }, {
                            id: "1_1_2_3",
                            text: "CRIK(CIT)"
                        }]
                }, {
                    id: "1_1_3",
                    text: "GRK",
                    items: [{
                            id: "1_1_3_1",
                            text: "BARK",
                            items: [{
                                    id: "1_1_3_1_1",
                                    text: "BARK1 (GRK2)"
                                }, {
                                    id: "1_1_3_1_2",
                                    text: "BARK2 (GRK3)"
                                }]

                        }, {
                            id: "1_1_3_2",
                            text: "GRK",
                            items: [{
                                    id: "1_1_3_2_1",
                                    text: "GPRK4 (GRK4)"
                                }, {
                                    id: "1_1_3_2_2",
                                    text: "GPRK5 (GRK5)"
                                }, {
                                    id: "1_1_3_2_3",
                                    text: "GPRK6 (GRK6)"
                                }, {
                                    id: "1_1_3_2_4",
                                    text: "GPRK7 (GRK7)"
                                }, {
                                    id: "1_1_3_2_5",
                                    text: "RHOK (GRK1)"
                                }]

                        }]
                }, {
                    id: "1_1_4",
                    text: "MAST",
                    items: [{
                            id: "1_1_4_1",
                            text: "MAST1"
                        }, {
                            id: "1_1_4_2",
                            text: "MAST2"
                        }, {
                            id: "1_1_4_3",
                            text: "MAST3"
                        }, {
                            id: "1_1_4_4",
                            text: "MAST4"
                        }, {
                            id: "1_1_4_5",
                            text: "MASTL"
                        }]
                }, {
                    id: "1_1_5",
                    text: "NDR",
                    items: [{
                            id: "1_1_5_1",
                            text: "LATS1"
                        }, {
                            id: "1_1_5_2",
                            text: "LATS2"
                        }, {
                            id: "1_1_5_3",
                            text: "NDR1 (STK38)"
                        }, {
                            id: "1_1_5_4",
                            text: "NDR2 (STK38L)"
         
                        }]
                }, {
                    id: "1_1_6",
                    text: "PDK1",
                    items: [{
                            id: "1_1_6_1",
                            text: "PDK1 (PDPK1)"
                        
         
                        }]
                }, {
                    id: "1_1_7",
                    text: "PKA",
                    items: [{
                            id: "1_1_7_1",
                            text: "PKACa (PRKACA)"
                        }, {
                            id: "1_1_7_2",
                            text: "PKACb (PRKACB)"
                        }, {
                            id: "1_1_7_3",
                            text: "PKACg (PRKACG)"
                        }, {
                            id: "1_1_7_4",
                            text: "PRKX"
         
                        }, {
                            id: "1_1_7_5",
                            text: "PRKY"
                        }]
                }, {
                    id: "1_1_8",
                    text: "PKC",
                    items: [{
                            id: "1_1_8_1",
                            text: "PKCa",
                            items: [{
                                    id: "1_1_8_1_1",
                                    text: "PKACa (PRKACA)"
                                }, {
                                    id: "1_1_8_1_2",
                                    text: "PKACb (PRKACB)"
                                }, {
                                    id: "1_1_8_1_3",
                                    text: "PKACg (PRKACG)"
                                }]

                        }, {
                            id: "1_1_8_2",
                            text: "PKCd",
                            items: [{
                                    id: "1_1_8_2_1",
                                    text: "PKCd (PRKCD)"
                                }, {
                                    id: "1_1_8_2_2",
                                    text: "PKCt (PRKCQ)"
                                }]

                        }, {
                            id: "1_1_8_3",
                            text: "PKCh",
                            items: [{
                                    id: "1_1_8_3_1",
                                    text: "PKCe (PRKCE)"
                                }, {
                                    id: "1_1_8_3_2",
                                    text: "PKCh (PRKCH)"
                                }]

                        }, {
                            id: "1_1_8_4",
                            text: "PKCi",
                            items: [{
                                    id: "1_1_8_4_1",
                                    text: "PKCi (PRKCI)"
                                }, {
                                    id: "1_1_8_4_2",
                                    text: "PKCz (PRKCZ)"
                                }]

                        }]
                }, {
                    id: "1_1_9",
                    text: "PKG",
                    items: [{
                            id: "1_1_9_1",
                            text: "PKG1 (PRKG1)"
                        }, {
                            id: "1_1_9_2",
                            text: "PKG2 (PRKG2)"
                        }]

                }, {
                    id: "1_1_10",
                    text: "PKN",
                    items: [{
                            id: "1_1_10_1",
                            text: "PKN1"
                        }, {
                            id: "1_1_10_2",
                            text: "PKN2"
                        }, {
                            id: "1_1_10_3",
                            text: "PKN3"
                        }]
                }, {
                    id: "1_1_11",
                    text: "RSK",
                    items: [{
                            id: "1_1_11_1",
                            text: "MSK",
                            items: [{
                                id: "1_1_11_1_1",
                                text: "MSK1 (RPS6KA5)"
                            }, {
                                id: "1_1_11_1_2",
                                text: "MSK2 (RPS6KA4)"
                            }]

                        }, {
                            id: "1_1_11_2",
                            text: "RSKp70",
                            items: [{
                                id: "1_1_11_2_1",
                                text: "p70S6K (RPS6KB1)"
                            }, {
                                id: "1_1_11_2_2",
                                text: "p70S6Kb (RPS6KB2)"
                            }]

                        }, {
                            id: "1_1_11_3",
                            text: "RSKp90",
                            items: [{
                                id: "1_1_11_3_1",
                                text: "RSK1 (RPS6KA1)"
                            }, {
                                id: "1_1_11_3_2",
                                text: "RSK2 (RPS6KA3)"
                            }, {
                                id: "1_1_11_3_3",
                                text: "RSK3 (RPS6KA2)"
                            }, {
                                id: "1_1_11_3_4",
                                text: "RSK4 (RPS6KA6)"
                            }]

                        }]
                }, {
                    id: "1_1_12",
                    text: "RSKL",
                        items: [{
                            id: "1_1_12_1",
                            text: "RSKL1 (RPS6KC1)"
                        }, {
                            id: "1_1_12_2",
                            text: "RSKL2 (RPS6KL1)"
                        }]
                }, {
                    id: "1_1_13",
                    text: "RSKR",
                            items: [{
                                id: "1_1_13_1",
                                text: "SgK494 (SGK494)"
                            }]

                }, {
                    id: "1_1_14",
                    text: "SGK",
                            items: [{
                                id: "1_1_14_1",
                                text: "SGK1"
                            }, {
                                id: "1_1_14_2",
                                text: "SGK2"
                            }, {
                                id: "1_1_14_3",
                                text: "SGK3"
                            }]

                }, {
                    id: "1_1_15",
                    text: "YANK",
                            items: [{
                                id: "1_1_15_1",
                                text: "YANK1 (STK32A)"
                            }, {
                                id: "1_1_15_2",
                                text: "YANK2 (STK32B)"
                            }, {
                                id: "1_1_15_3",
                                text: "YANK3 (STK32C)"
                            }]

                }]
        }, {
            id: "1_2",
            text: "CAMK",
            items: [{
                    id: "1_2_1",
                    text: "CAMK1",
                            items: [{
                                    id: "1_2_1_1",
                                    text: "CaMK1a (CAMK1)"
                                }, {
                                    id: "1_2_1_2",
                                    text: "CaMK1b (PNCK)"
                                }, {
                                    id: "1_2_1_3",
                                    text: "CaMK1d (CAMK1D)"
                                }, {
                                    id: "1_2_1_4",
                                    text: "CaMK1g (CAMK1G)"
                                }, {
                                    id: "1_2_1_5",
                                    text: "CaMK4 (CAMK4)"
                                }]


                }, {
                    id: "1_2_2",
                    text: "CAMK2",
                            items: [{
                                    id: "1_2_2_1",
                                    text: "CaMK2a (CAMK2A)"
                                }, {
                                    id: "1_2_2_2",
                                    text: "CaMK2b (CAMK2B)"
                                }, {
                                    id: "1_2_2_3",
                                    text: "CaMK2d (CAMK2D)"
                                }, {
                                    id: "1_2_2_4",
                                    text: "CaMK2g (CAMK2G)"
                                }]
                }, {
                    id: "1_2_3",
                    text: "CAMKL",
                    items: [{
                            id: "1_2_3_1",
                            text: "AMPK",
                            items: [{
                                    id: "1_2_3_1_1",
                                    text: "AMPKa1 (PRKAA1)"
                                }, {
                                    id: "1_2_3_1_2",
                                    text: "AMPKa2 (PRKAA2)"
                                }]
                        }, {
                            id: "1_2_3_2",
                            text: "BRSK",
                            items: [{
                                    id: "1_2_3_2_1",
                                    text: "BRSK1"
                                }, {
                                    id: "1_2_3_2_2",
                                    text: "BRSK2"
                                }]
                        }, {
                            id: "1_2_3_3",
                            text: "CHK1",
                            items: [{
                                    id: "1_2_3_3_1",
                                    text: "CHK1 (CHEK1)"
                                }]
                        }, {
                            id: "1_2_3_4",
                            text: "HUNK",
                            items: [{
                                    id: "1_2_3_4_1",
                                    text: "HUNK"
                                }]
                        }, {
                            id: "1_2_3_5",
                            text: "LKB",
                            items: [{
                                    id: "1_2_3_5_1",
                                    text: "LKB1 (STK11)"
                                }]
                        }, {
                            id: "1_2_3_6",
                            text: "MARK",
                            items: [{
                                    id: "1_2_3_6_1",
                                    text: "MARK1"
                                },{
                                    id: "1_2_3_6_2",
                                    text: "MARK2"
                                },{
                                    id: "1_2_3_6_3",
                                    text: "MARK3"
                                },{
                                    id: "1_2_3_6_4",
                                    text: "MARK4"
                                }]
                        }, {
                            id: "1_2_3_7",
                            text: "MELK",
                            items: [{
                                    id: "1_2_3_7_1",
                                    text: "MELK"
                                }]
                        }, {
                            id: "1_2_3_8",
                            text: "NIM1",
                            items: [{
                                    id: "1_2_3_8_1",
                                    text: "NIM1 (NIM1K)"
                                }]
                        }, {
                            id: "1_2_3_9",
                            text: "NuaK",
                            items: [{
                                    id: "1_2_3_9_1",
                                    text: "NuaK1 (NUAK1)"
                                },{
                                    id: "1_2_3_9_2",
                                    text: "NuaK2 (NUAK2)"
                                }]
                        }, {
                            id: "1_2_3_10",
                            text: "PASK",
                            items: [{
                                    id: "1_2_3_10_1",
                                    text: "PASK"
                                }]
                        }, {
                            id: "1_2_3_11",
                            text: "QIK",
                            items: [{
                                    id: "1_2_3_11_1",
                                    text: "QIK (SIK2)"
                                },{
                                    id: "1_2_3_11_2",
                                    text: "QSK (SIK3)"
                                },{
                                    id: "1_2_3_11_3",
                                    text: "SIK (SIK1)"
                                }]
                        }, {
                            id: "1_2_3_12",
                            text: "SNRK",
                            items: [{
                                    id: "1_2_3_12_1",
                                    text: "SNRK"
                                }]
                        }]
                }, {
                    id: "1_2_4",
                    text: "CASK",
                            items: [{
                                    id: "1_2_4_1",
                                    text: "CASK"
                                }]
                }, {
                    id: "1_2_5",
                    text: "DAPK",
                            items: [{
                                    id: "1_2_5_1",
                                    text: "DAPK1"
                                },{
                                    id: "1_2_5_2",
                                    text: "DAPK2"
                                },{
                                    id: "1_2_5_3",
                                    text: "DAPK3"
                                },{
                                    id: "1_2_5_4",
                                    text: "DRAK1 (STK17A)"
                                },{
                                    id: "1_2_5_5",
                                    text: "DRAK2 (STK17B)"
                                }]
                }, {
                    id: "1_2_6",
                    text: "DCAMKL",
                            items: [{
                                    id: "1_2_6_1",
                                    text: "DCAMKL1 (DCLK1)"
                                },{
                                    id: "1_2_6_2",
                                    text: "DCAMKL2 (DCLK2)"
                                },{
                                    id: "1_2_6_3",
                                    text: "DCAMKL3 (DCLK3)"
                                }]

                }, {
                    id: "1_2_7",
                    text: "MAPKAPK",
                    items: [{
                            id: "1_2_7_1",
                            text: "MK2",
                            items: [{
                                    id: "1_2_7_1_1",
                                    text: "MAPKAPK2"
                                },{
                                    id: "1_2_7_1_2",
                                    text: "MAPKAPK3"
                                }]
                        }, {
                            id: "1_2_7_2",
                            text: "MK5",
                            items: [{
                                    id: "1_2_7_2_1",
                                    text: "MAPKAPK5"
                                }]
                        }, {
                            id: "1_2_7_3",
                            text: "MNK",
                            items: [{
                                    id: "1_2_7_3_1",
                                    text: "MNK1 (MKNK1)"
                                },{
                                    id: "1_2_7_3_2",
                                    text: "MNK2 (MKNK2)"
                                }]
                        }]
                }, {
                    id: "1_2_8",
                    text: "MLCK",
                            items: [{
                                    id: "1_2_8_1",
                                    text: "SgK085 (MYLK4)"
                                },{
                                    id: "1_2_8_2",
                                    text: "TTN"
                                },{
                                    id: "1_2_8_3",
                                    text: "caMLCK (MYLK3)"
                                },{
                                    id: "1_2_8_4",
                                    text: "skMLCK (MYLK2)"
                                },{
                                    id: "1_2_8_5",
                                    text: "smMLCK (MYLK)"
                                }]
                }, {
                    id: "1_2_9",
                    text: "PHK",
                            items: [{
                                    id: "1_2_9_1",
                                    text: "PHKg1 (PHKG1)"
                                },{
                                    id: "1_2_9_2",
                                    text: "PHKg2 (PHKG2)"
                                }]
                }, {
                    id: "1_2_10",
                    text: "PIM",
                            items: [{
                                    id: "1_2_10_1",
                                    text: "PIM1"
                                },{
                                    id: "1_2_10_2",
                                    text: "PIM2"
                                },{
                                    id: "1_2_10_3",
                                    text: "PIM3"
                                }]
                }, {
                    id: "1_2_11",
                    text: "PKD",
                            items: [{
                                    id: "1_2_11_1",
                                    text: "PKD1 (PRKD1)"
                                },{
                                    id: "1_2_11_2",
                                    text: "PKD2 (PRKD2)"
                                },{
                                    id: "1_2_11_3",
                                    text: "PKD3 (PRKD3)"
                                }]
                }, {
                    id: "1_2_12",
                    text: "PSK",
                            items: [{
                                    id: "1_2_12_1",
                                    text: "PSKH1"
                                },{
                                    id: "1_2_12_2",
                                    text: "PSKH1"
                                }]
                }, {
                    id: "1_2_13",
                    text: "RAD53",
                            items: [{
                                    id: "1_2_13_1",
                                    text: "CHK2 (CHEK2)"
                                }]
                }, {
                    id: "1_2_14",
                    text: "RSKb",
                    items: [{
                            id: "1_2_14_1",
                            text: "MSKb",
                            items: [{
                                    id: "1_2_14_1_1",
                                    text: "MSK1_b (RPS6KA5)"
                                },{
                                    id: "1_2_14_1_2",
                                    text: "MSK2_b (RPS6KA4)"
                                }]

                        }, {
                            id: "1_2_14_2",
                            text: "RSKb",
                            items: [{
                                    id: "1_2_14_2_1",
                                    text: "RSK1_b (RPS6KA1)"
                                },{
                                    id: "1_2_14_2_2",
                                    text: "RSK2_b (RPS6KA3)"
                                },{
                                    id: "1_2_14_2_3",
                                    text: "RSK3_b (RPS6KA2)"
                                },{
                                    id: "1_2_14_2_4",
                                    text: "RSK4_b (RPS6KA6)"
                                }]

                        }]
                }, {
                    id: "1_2_15",
                    text: "SgK495",
                            items: [{
                                    id: "1_2_15_1",
                                    text: "SgK495 (STK40)"
                                }]
                }, {
                    id: "1_2_16",
                    text: "STK33",
                            items: [{
                                    id: "1_2_16_1",
                                    text: "STK33"
                                }]
                }, {
                    id: "1_2_17",
                    text: "Trbl",
                            items: [{
                                    id: "1_2_17_1",
                                    text: "Trb1 (TRIB1)"
                                },{
                                    id: "1_2_17_2",
                                    text: "Trb2 (TRIB2)"
                                },{
                                    id: "1_2_17_3",
                                    text: "Trb3 (TRIB3)"
                                }]
                }, {
                    id: "1_2_18",
                    text: "Trio",
                            items: [{
                                    id: "1_2_18_1",
                                    text: "Obscn (OBSCN)"
                                },{
                                    id: "1_2_18_2",
                                    text: "Obscn_b (OBSCN)"
                                },{
                                    id: "1_2_18_3",
                                    text: "SPEG"
                                },{
                                    id: "1_2_18_4",
                                    text: "SPEG_b (SPEG)"
                                },{
                                    id: "1_2_18_5",
                                    text: "Trad (KALRN)"
                                },{
                                    id: "1_2_18_6",
                                    text: "Trio (TRIO)"
                                }]
                }, {
                    id: "1_2_19",
                    text: "TSSK",
                            items: [{
                                    id: "1_2_19_1",
                                    text: "SSTK (TSSK6)"
                                },{
                                    id: "1_2_19_2",
                                    text: "TSSK1 (TSSK1B)"
                                },{
                                    id: "1_2_19_3",
                                    text: "TSSK2"
                                },{
                                    id: "1_2_19_4",
                                    text: "TSSK3"
                                },{
                                    id: "1_2_19_5",
                                    text: "TSSK4"
                                }]
                }, {
                    id: "1_2_20",
                    text: "CAMK-Unique",
                            items: [{
                                    id: "1_2_20_1",
                                    text: "VACAMKL (CAMKV)"
                                }]

                }]
        }, {
            id: "1_3",
            text: "CK1",
            items: [{
                    id: "1_3_1",
                    text: "CK1",
                            items: [{
                                    id: "1_3_1_1",
                                    text: "CK1a (CSNK1A1)"
                                },{
                                    id: "1_3_1_2",
                                    text: "CK1a2 (CSNK1A1L)"
                                },{
                                    id: "1_3_1_3",
                                    text: "CK1d (CSNK1D)"
                                },{
                                    id: "1_3_1_4",
                                    text: "CK1e (CSNK1E)"
                                },{
                                    id: "1_3_1_5",
                                    text: "CK1g1 (CSNK1G1)"
                                },{
                                    id: "1_3_1_6",
                                    text: "CK1g2 (CSNK1G2)"
                                },{
                                    id: "1_3_1_7",
                                    text: "CK1g3 (CSNK1G3)"
                                }]
                }, {
                    id: "1_3_2",
                    text: "TTBK",
                            items: [{
                                    id: "1_3_2_1",
                                    text: "TTBK1"
                                },{
                                    id: "1_3_2_2",
                                    text: "TTBK2"
                                }]

                }, {
                    id: "1_3_3",
                    text: "VRK",
                            items: [{
                                    id: "1_3_3_1",
                                    text: "VRK1"
                                },{
                                    id: "1_3_3_2",
                                    text: "VRK2"
                                },{
                                    id: "1_3_3_3",
                                    text: "VRK3"
                                }]

                }]
        }, {
            id: "1_4",
            text: "CMGC",
            items: [{
                    id: "1_4_1",
                    text: "CDK",
                    items: [{
                            id: "1_4_1_1",
                            text: "CDC2",
                            items: [{
                                    id: "1_4_1_1_1",
                                    text: "CDC2 (CDK1)"
                                }]
                        }, {
                            id: "1_4_1_2",
                            text: "CDK2",
                            items: [{
                                    id: "1_4_1_2_1",
                                    text: "CDK2"
                                },{
                                    id: "1_4_1_2_2",
                                    text: "CDK3"
                                }]

                        }, {
                            id: "1_4_1_3",
                            text: "CDK4",
                            items: [{
                                    id: "1_4_1_3_1",
                                    text: "CDK4"
                                },{
                                    id: "1_4_1_3_2",
                                    text: "CDK6"
                                }]

                        }, {
                            id: "1_4_1_4",
                            text: "CDK5",
                            items: [{
                                    id: "1_4_1_4_1",
                                    text: "CDK5"
                                }]

                        }, {
                            id: "1_4_1_5",
                            text: "CDK7",
                            items: [{
                                    id: "1_4_1_5_1",
                                    text: "CDK7"
                                }]

                        }, {
                            id: "1_4_1_6",
                            text: "CDK8",
                            items: [{
                                    id: "1_4_1_6_1",
                                    text: "CDK11 (CDK19)"
                                },{
                                    id: "1_4_1_6_2",
                                    text: "CDK8"
                                }]

                        }, {
                            id: "1_4_1_7",
                            text: "CDK9",
                            items: [{
                                    id: "1_4_1_7_1",
                                    text: "CDK9"
                                }]

                        }, {
                            id: "1_4_1_8",
                            text: "CDK10",
                            items: [{
                                    id: "1_4_1_8_1",
                                    text: "CDK10"
                                }]

                        }, {
                            id: "1_4_1_9",
                            text: "CDK11",
                            items: [{
                                    id: "1_4_1_9_1",
                                    text: "PITSLRE (CDK11B)"
                                }]

                        }, {
                            id: "1_4_1_10",
                            text: "CRK7",
                            items: [{
                                    id: "1_4_1_10_1",
                                    text: "CHED (CDK13)"
                                },{
                                    id: "1_4_1_10_2",
                                    text: "CRK7 (CDK12)"
                                }]

                        }, {
                            id: "1_4_1_11",
                            text: "PCTAIRE",
                            items: [{
                                    id: "1_4_1_11_1",
                                    text: "PCTAIRE1 (CDK16)"
                                },{
                                    id: "1_4_1_11_2",
                                    text: "PCTAIRE2 (CDK17)"
                                },{
                                    id: "1_4_1_11_3",
                                    text: "PCTAIRE3 (CDK18)"
                                }]


                        }, {
                            id: "1_4_1_12",
                            text: "PFTAIRE",
                            items: [{
                                    id: "1_4_1_12_1",
                                    text: "PFTAIRE1 (CDK14)"
                                },{
                                    id: "1_4_1_12_2",
                                    text: "PFTAIRE2 (CDK15)"
                                }]


                        }, {
                            id: "1_4_1_13",
                            text: "CCRK (CDK20)"

                        }]
                }, {
                    id: "1_4_2",
                    text: "CDKL",
                            items: [{
                                    id: "1_4_2_1",
                                    text: "CDKL1"
                                },{
                                    id: "1_4_2_2",
                                    text: "CDKL2"
                                },{
                                    id: "1_4_2_3",
                                    text: "CDKL3"
                                },{
                                    id: "1_4_2_4",
                                    text: "CDKL4"
                                },{
                                    id: "1_4_2_5",
                                    text: "CDKL5"
                                }]

                }, {
                    id: "1_4_3",
                    text: "CK2",
                            items: [{
                                    id: "1_4_3_1",
                                    text: "CK2a1 (CSNK2A1)"
                                },{
                                    id: "1_4_3_2",
                                    text: "CK2a2 (CSNK2A2)"
                                }]


                }, {
                    id: "1_4_4",
                    text: "CLK",
                            items: [{
                                    id: "1_4_4_1",
                                    text: "CLK1"
                                },{
                                    id: "1_4_4_2",
                                    text: "CLK2"
                                },{
                                    id: "1_4_4_3",
                                    text: "CLK3"
                                },{
                                    id: "1_4_4_4",
                                    text: "CLK4"
                                }]

                }, {
                    id: "1_4_5",
                    text: "DYRK",
                    items: [{
                            id: "1_4_5_1",
                            text: "DYRK1",
                            items: [{
                                    id: "1_4_5_1_1",
                                    text: "DYRK1A"
                                },{
                                    id: "1_4_5_1_2",
                                    text: "DYRK1B"
                                }]

                        }, {
                            id: "1_4_5_2",
                            text: "DYRK2",
                            items: [{
                                    id: "1_4_5_2_1",
                                    text: "DYRK2"
                                },{
                                    id: "1_4_5_2_2",
                                    text: "DYRK3"
                                },{
                                    id: "1_4_5_2_3",
                                    text: "DYRK4"
                                }]

                        }, {
                            id: "1_4_5_3",
                            text: "HIPK",
                            items: [{
                                    id: "1_4_5_3_1",
                                    text: "HIPK1"
                                },{
                                    id: "1_4_5_3_2",
                                    text: "HIPK2"
                                },{
                                    id: "1_4_5_3_3",
                                    text: "HIPK3"
                                },{
                                    id: "1_4_5_3_4",
                                    text: "HIPK4"
                                }]

                        }, {
                            id: "1_4_5_4",
                            text: "PRP4",
                            items: [{
                                    id: "1_4_5_4_1",
                                    text: "PRP4 (PRPF4B)"
                                }]

                        }]

                }, {
                    id: "1_4_6",
                    text: "GSK",
                    items: [{
                            id: "1_4_6_1",
                            text: "GSK3A"
                        }, {
                            id: "1_4_6_2",
                            text: "GSK3B"

                        }]

                }, {
                    id: "1_4_7",
                    text: "MAPK",
                    items: [{
                            id: "1_4_7_1",
                            text: "ERK1",
                            items: [{
                                    id: "1_4_7_1_1",
                                    text: "Erk1 (MAPK3)"
                                },{
                                    id: "1_4_7_1_2",
                                    text: "Erk2 (MAPK1)"
                                }]
                        }, {
                            id: "1_4_7_2",
                            text: "ERK3",
                            items: [{
                                    id: "1_4_7_2_1",
                                    text: "Erk3 (MAPK6)"
                                },{
                                    id: "1_4_7_2_2",
                                    text: "Erk4 (MAPK4)"
                                }]

                        }, {
                            id: "1_4_7_3",
                            text: "ERK5",
                            items: [{
                                    id: "1_4_7_3_1",
                                    text: "Erk5 (MAPK7)"
                                }]

                        }, {
                            id: "1_4_7_4",
                            text: "ERK7",
                            items: [{
                                    id: "1_4_7_4_1",
                                    text: "Erk7 (MAPK15)"
                                }]

                        }, {
                            id: "1_4_7_5",
                            text: "JNK",
                            items: [{
                                    id: "1_4_7_5_1",
                                    text: "JNK1 (MAPK8)"
                                },{
                                    id: "1_4_7_5_2",
                                    text: "JNK2 (MAPK9)"
                                },{
                                    id: "1_4_7_5_3",
                                    text: "JNK3 (MAPK10)"
                                }]

                        }, {
                            id: "1_4_7_6",
                            text: "nmo",
                            items: [{
                                    id: "1_4_7_6_1",
                                    text: "NLK"
                                }]

                        }, {
                            id: "1_4_7_7",
                            text: "p38",
                            items: [{
                                    id: "1_4_7_7_1",
                                    text: "p38a (MAPK14)"
                                },{
                                    id: "1_4_7_7_2",
                                    text: "p38b (MAPK11)"
                                },{
                                    id: "1_4_7_7_3",
                                    text: "p38d (MAPK13)"
                                },{
                                    id: "1_4_7_7_4",
                                    text: "p38g (MAPK12)"
                                }]

                        }]
                }, {
                    id: "1_4_8",
                    text: "RCK",
                            items: [{
                                    id: "1_4_8_1",
                                    text: "ICK"
                                },{
                                    id: "1_4_8_2",
                                    text: "MAK"
                                },{
                                    id: "1_4_8_3",
                                    text: "MOK"
                                }]


                }, {
                    id: "1_4_9",
                    text: "SRPK",
                            items: [{
                                    id: "1_4_9_1",
                                    text: "MSSK1 (SRPK3)"
                                },{
                                    id: "1_4_9_2",
                                    text: "SRPK1"
                                },{
                                    id: "1_4_9_3",
                                    text: "SRPK2"
                                }]

                }]
        }, {
            id: "1_6",
            text: "RGC",
            items: [{
                    id: "1_6_1",
                    text: "RGC",
                            items: [{
                                    id: "1_6_1_1",
                                    text: "ANPa (NPR1)"
                                },{
                                    id: "1_6_1_2",
                                    text: "ANPb (NPR2)"
                                },{
                                    id: "1_6_1_3",
                                    text: "CYGD (GUCY2D)"
                                },{
                                    id: "1_6_1_4",
                                    text: "CYGF (GUCY2F)"
                                },{
                                    id: "1_6_1_5",
                                    text: "HSER (GUCY2C)"
                                }]
                }]
        }, {
            id: "1_7",
            text: "STE",
            items: [{
                    id: "1_7_1",
                    text: "STE7",
                            items: [{
                                    id: "1_7_1_1",
                                    text: "MAP2K1"
                                },{
                                    id: "1_7_1_2",
                                    text: "MAP2K2"
                                },{
                                    id: "1_7_1_3",
                                    text: "MAP2K3"
                                },{
                                    id: "1_7_1_4",
                                    text: "MAP2K4"
                                },{
                                    id: "1_7_1_5",
                                    text: "MAP2K5"
                                },{
                                    id: "1_7_1_6",
                                    text: "MAP2K6"
                                },{
                                    id: "1_7_1_7",
                                    text: "MAP2K7"
                                }]
                }, {
                    id: "1_7_2",
                    text: "STE11",
                            items: [{
                                    id: "1_7_2_1",
                                    text: "MAP3K1"
                                },{
                                    id: "1_7_2_2",
                                    text: "MAP3K2"
                                },{
                                    id: "1_7_2_3",
                                    text: "MAP3K3"
                                },{
                                    id: "1_7_2_4",
                                    text: "MAP3K4"
                                },{
                                    id: "1_7_2_5",
                                    text: "MAP3K5"
                                },{
                                    id: "1_7_2_6",
                                    text: "MAP3K6"
                                },{
                                    id: "1_7_2_7",
                                    text: "MAP3K7 (MAP3K15)"
                                },{
                                    id: "1_7_2_8",
                                    text: "MAP3K19"
                                }]


                }, {
                    id: "1_7_3",
                    text: "STE20",
                    items: [{
                            id: "1_7_3_1",
                            text: "FRAY",
                            items: [{
                                    id: "1_7_3_1_1",
                                    text: "OSR1 (OXSR1)"
                                },{
                                    id: "1_7_3_1_2",
                                    text: "STLK3 (STK39)"
                                }]
                        }, {
                            id: "1_7_3_2",
                            text: "KHS",
                            items: [{
                                    id: "1_7_3_2_1",
                                    text: "GCK (MAP4K2)"
                                },{
                                    id: "1_7_3_2_2",
                                    text: "HPK1 (MAP4K1)"
                                },{
                                    id: "1_7_3_2_3",
                                    text: "KHS1 (MAP4K5)"
                                },{
                                    id: "1_7_3_2_4",
                                    text: "KHS2 (MAP4K3)"
                                }]


                        }, {
                            id: "1_7_3_3",
                            text: "MSN",
                            items: [{
                                    id: "1_7_3_3_1",
                                    text: "HGK (MAP4K4)"
                                },{
                                    id: "1_7_3_3_2",
                                    text: "MINK (MINK1)"
                                },{
                                    id: "1_7_3_3_3",
                                    text: "NRK"
                                },{
                                    id: "1_7_3_3_4",
                                    text: "TNIK"
                                }]



                        }, {
                            id: "1_7_3_4",
                            text: "MST",
                            items: [{
                                    id: "1_7_3_4_1",
                                    text: "MST1 (STK4)"
                                },{
                                    id: "1_7_3_4_2",
                                    text: "MST2 (STK3)"
                                }]

                        }, {
                            id: "1_7_3_5",
                            text: "NinaC",
                            items: [{
                                    id: "1_7_3_5_1",
                                    text: "MYO3A"
                                },{
                                    id: "1_7_3_5_2",
                                    text: "MYO3B"
                                }]

                        }, {
                            id: "1_7_3_6",
                            text: "PAKA",
                            items: [{
                                    id: "1_7_3_6_1",
                                    text: "PAK1"
                                },{
                                    id: "1_7_3_6_2",
                                    text: "PAK2"
                                },{
                                    id: "1_7_3_6_3",
                                    text: "PAK3"
                                }]



                        }, {
                            id: "1_7_3_7",
                            text: "PAKB",
                            items: [{
                                    id: "1_7_3_7_1",
                                    text: "PAK4"
                                },{
                                    id: "1_7_3_7_2",
                                    text: "PAK5"
                                },{
                                    id: "1_7_3_7_3",
                                    text: "PAK6"
                                }]

                        }, {
                            id: "1_7_3_8",
                            text: "SLK",
                            items: [{
                                    id: "1_7_3_8_1",
                                    text: "LOK (STK10)"
                                },{
                                    id: "1_7_3_8_2",
                                    text: "SLK"
                                }]

                        }, {
                            id: "1_7_3_9",
                            text: "STLK",
                            items: [{
                                    id: "1_7_3_9_1",
                                    text: "STLK5 (STRADA)"
                                },{
                                    id: "1_7_3_9_2",
                                    text: "STLK6 (STRADB)"
                                }]

                        }, {
                            id: "1_7_3_10",
                            text: "TAO",
                            items: [{
                                    id: "1_7_3_10_1",
                                    text: "TAO1 (TAOK1)"
                                },{
                                    id: "1_7_3_10_2",
                                    text: "TAO2 (TAOK2)"
                                },{
                                    id: "1_7_3_10_3",
                                    text: "TAO3 (TAOK3)"
                                }]

                        }, {
                            id: "1_7_3_11",
                            text: "YSK",
                            items: [{
                                    id: "1_7_3_11_1",
                                    text: "MST3 (STK24)"
                                },{
                                    id: "1_7_3_11_2",
                                    text: "MST4 (STK26)"
                                },{
                                    id: "1_7_3_11_3",
                                    text: "YSK1 (STK25)"
                                }]

                        }]

                }, {
                    id: "1_7_4",
                    text: "STE-Unique",
                            items: [{
                                    id: "1_7_4_1",
                                    text: "COT (MAP3K8)"
                                },{
                                    id: "1_7_4_2",
                                    text: "GCN2_b (EIF2AK4)"
                                },{
                                    id: "1_7_4_3",
                                    text: "NIK (MAP3K14)"
                                }]

                }]
        },{
            id: "1_8",
            text: "TK",
            items: [{
                    id: "1_8_1",
                    text: "Abl",
                            items: [{
                                    id: "1_8_1_1",
                                    text: "ABL1"
                                },{
                                    id: "1_8_1_2",
                                    text: "ABL2"
                                }]
                }, {
                    id: "1_8_2",
                    text: "Ack",
                            items: [{
                                    id: "1_8_2_1",
                                    text: "ACK (TNK2)"
                                },{
                                    id: "1_8_2_2",
                                    text: "TNK1"
                                }]

                }, {
                    id: "1_8_3",
                    text: "ALK",
                            items: [{
                                    id: "1_8_3_1",
                                    text: "ALK"
                                },{
                                    id: "1_8_3_2",
                                    text: "LTK"
                                }]


                }, {
                    id: "1_8_4",
                    text: "Axl",
                            items: [{
                                    id: "1_8_4_1",
                                    text: "AXL"
                                },{
                                    id: "1_8_4_2",
                                    text: "MER (MERTK)"
                                },{
                                    id: "1_8_4_3",
                                    text: "TYRO3"
                                }]

                }, {
                    id: "1_8_5",
                    text: "CCK4",
                            items: [{
                                    id: "1_8_5_1",
                                    text: "CCK4 (PTK7)"
                                }]

                }, {
                    id: "1_8_6",
                    text: "Csk",
                            items: [{
                                    id: "1_8_6_1",
                                    text: "CSK"
                                },{
                                    id: "1_8_6_2",
                                    text: "CTK (MATK)"
                                }]

                }, {
                    id: "1_8_7",
                    text: "DDR",
                            items: [{
                                    id: "1_8_7_1",
                                    text: "DDR1"
                                },{
                                    id: "1_8_7_2",
                                    text: "DDR2"
                                }]

                }, {
                    id: "1_8_8",
                    text: "EGFR Family",
                            items: [{
                                    id: "1_8_8_1",
                                    text: "EGFR"
                                },{
                                    id: "1_8_8_2",
                                    text: "ErbB2 (ERBB2)"
                                },{
                                    id: "1_8_8_3",
                                    text: "ErbB3 (ERBB3)"
                                },{
                                    id: "1_8_8_4",
                                    text: "ErbB4 (ERBB4)"
                                }]

                }, {
                    id: "1_8_9",
                    text: "Eph",
                            items: [{
                                    id: "1_8_9_1",
                                    text: "EphA1 (EPHA1)"
                                },{
                                    id: "1_8_9_2",
                                    text: "EphA2 (EPHA2)"
                                },{
                                    id: "1_8_9_3",
                                    text: "EphA3 (EPHA3)"
                                },{
                                    id: "1_8_9_4",
                                    text: "EphA4 (EPHA4)"
                                },{
                                    id: "1_8_9_5",
                                    text: "EphA5 (EPHA5)"
                                },{
                                    id: "1_8_9_6",
                                    text: "EphA6 (EPHA6)"
                                },{
                                    id: "1_8_9_7",
                                    text: "EphA7 (EPHA7)"
                                },{
                                    id: "1_8_9_8",
                                    text: "EphA8 (EPHA8)"
                                },{
                                    id: "1_8_9_9",
                                    text: "EphA10 (EPHA10)"
                                },{
                                    id: "1_8_9_10",
                                    text: "EphB1 (EPHB1)"
                                },{
                                    id: "1_8_9_11",
                                    text: "EphB2 (EPHB2)"
                                },{
                                    id: "1_8_9_12",
                                    text: "EphB3 (EPHB3)"
                                },{
                                    id: "1_8_9_13",
                                    text: "EphB4 (EPHB4)"
                                },{
                                    id: "1_8_9_14",
                                    text: "EphB6 (EPHB6)"
                                }]

                }, {
                    id: "1_8_10",
                    text: "FAK",
                            items: [{
                                    id: "1_8_10_1",
                                    text: "FAK (PTK2)"
                                },{
                                    id: "1_8_10_2",
                                    text: "PYK2 (PTK2B)"
                                }]

                }, {
                    id: "1_8_11",
                    text: "Fer",
                            items: [{
                                    id: "1_8_11_1",
                                    text: "FER"
                                },{
                                    id: "1_8_11_2",
                                    text: "FES"
                                }]

                }, {
                    id: "1_8_12",
                    text: "FGFR",
                            items: [{
                                    id: "1_8_12_1",
                                    text: "FGFR1"
                                },{
                                    id: "1_8_12_2",
                                    text: "FGFR2"
                                },{
                                    id: "1_8_12_3",
                                    text: "FGFR3"
                                },{
                                    id: "1_8_12_4",
                                    text: "FGFR4"
                                }]

                }, {
                    id: "1_8_13",
                    text: "InsR",
                            items: [{
                                    id: "1_8_13_1",
                                    text: "IGF1R"
                                },{
                                    id: "1_8_13_2",
                                    text: "INSR"
                                },{
                                    id: "1_8_13_3",
                                    text: "IRR (INSRR)"
                                }]


                }, {
                    id: "1_8_14",
                    text: "Jak",
                            items: [{
                                    id: "1_8_14_1",
                                    text: "JAK1"
                                },{
                                    id: "1_8_14_2",
                                    text: "JAK2"
                                },{
                                    id: "1_8_14_3",
                                    text: "JAK3"
                                },{
                                    id: "1_8_14_4",
                                    text: "JAK4"
                                }]

                }, {
                    id: "1_8_15",
                    text: "JakB",
                            items: [{
                                    id: "1_8_15_1",
                                    text: "JAK1_b (JAK1)"
                                },{
                                    id: "1_8_15_2",
                                    text: "JAK2_b (JAK2)"
                                },{
                                    id: "1_8_15_3",
                                    text: "JAK3_b (JAK3)"
                                },{
                                    id: "1_8_15_4",
                                    text: "TYK2_b (TYK2)"
                                }]

                }, {
                    id: "1_8_16",
                    text: "Lmr",
                            items: [{
                                    id: "1_8_16_1",
                                    text: "LMR1 (AATK)"
                                },{
                                    id: "1_8_16_2",
                                    text: "LMR2 (LMTK2)"
                                },{
                                    id: "1_8_16_3",
                                    text: "LMR3 (LMTK3)"
                                }]

                }, {
                    id: "1_8_17",
                    text: "Met",
                            items: [{
                                    id: "1_8_17_1",
                                    text: "MET"
                                },{
                                    id: "1_8_17_2",
                                    text: "RON (MST1R)"
                                }]

                }, {
                    id: "1_8_18",
                    text: "Musk",
                            items: [{
                                    id: "1_8_18_1",
                                    text: "MUSK"
                                }]

                }, {
                    id: "1_8_19",
                    text: "PDGFR",
                            items: [{
                                    id: "1_8_19_1",
                                    text: "FLT3"
                                },{
                                    id: "1_8_19_2",
                                    text: "FMS (CSF1R)"
                                },{
                                    id: "1_8_19_3",
                                    text: "KIT"
                                },{
                                    id: "1_8_19_4",
                                    text: "PDGFRa (PDGFRA)"
                                },{
                                    id: "1_8_19_5",
                                    text: "PDGFRb (PDGFRB)"
                                }]


                }, {
                    id: "1_8_20",
                    text: "Ret",
                            items: [{
                                    id: "1_8_20_1",
                                    text: "RET"
                                }]

                }, {
                    id: "1_8_21",
                    text: "Ror",
                            items: [{
                                    id: "1_8_21_1",
                                    text: "ROR1"
                                },{
                                    id: "1_8_21_2",
                                    text: "ROR2"
                                }]

                }, {
                    id: "1_8_22",
                    text: "Ryk",
                            items: [{
                                    id: "1_8_22_1",
                                    text: "RYK"
                                }]

                }, {
                    id: "1_8_23",
                    text: "Sev",
                            items: [{
                                    id: "1_8_23_1",
                                    text: "ROS (ROS1)"
                                }]

                }, {
                    id: "1_8_24",
                    text: "Src",
                            items: [{
                                    id: "1_8_24_1",
                                    text: "BLK"
                                },{
                                    id: "1_8_24_2",
                                    text: "BRK (PTK6)"
                                },{
                                    id: "1_8_24_3",
                                    text: "FGR"
                                },{
                                    id: "1_8_24_4",
                                    text: "FRK"
                                },{
                                    id: "1_8_24_5",
                                    text: "FYN"
                                },{
                                    id: "1_8_24_6",
                                    text: "HCK"
                                },{
                                    id: "1_8_24_7",
                                    text: "LCK"
                                },{
                                    id: "1_8_24_8",
                                    text: "LYN"
                                },{
                                    id: "1_8_24_9",
                                    text: "SRC"
                                },{
                                    id: "1_8_24_10",
                                    text: "SRM (SRMS)"
                                },{
                                    id: "1_8_24_11",
                                    text: "YES (YES1)"
                                }]


                }, {
                    id: "1_8_25",
                    text: "Syk",
                            items: [{
                                    id: "1_8_25_1",
                                    text: "SYK"
                                },{
                                    id: "1_8_25_2",
                                    text: "ZAP70"
                                }]

                }, {
                    id: "1_8_26",
                    text: "Tec",
                            items: [{
                                    id: "1_8_26_1",
                                    text: "BMX"
                                },{
                                    id: "1_8_26_2",
                                    text: "BTK"
                                },{
                                    id: "1_8_26_3",
                                    text: "ITK"
                                },{
                                    id: "1_8_26_4",
                                    text: "TEC"
                                },{
                                    id: "1_8_26_5",
                                    text: "TXK"
                                }]


                }, {
                    id: "1_8_27",
                    text: "Tie",
                            items: [{
                                    id: "1_8_27_1",
                                    text: "TIE1"
                                },{
                                    id: "1_8_27_2",
                                    text: "TIE2 (TEK)"
                                }]

                }, {
                    id: "1_8_28",
                    text: "Trk",
                            items: [{
                                    id: "1_8_28_1",
                                    text: "TRKA (NTRK1)"
                                },{
                                    id: "1_8_28_2",
                                    text: "TRKB (NTRK2)"
                                },{
                                    id: "1_8_28_3",
                                    text: "TRKC (NTRK3)"
                                }]

                }, {
                    id: "1_8_29",
                    text: "VEGFR",
                            items: [{
                                    id: "1_8_29_1",
                                    text: "FLT1"
                                },{
                                    id: "1_8_29_2",
                                    text: "FLT4"
                                },{
                                    id: "1_8_29_3",
                                    text: "KDR"
                                }]

                }, {
                    id: "1_8_30",
                    text: "TK-Unique",
                            items: [{
                                    id: "1_8_30_1",
                                    text: "SuRTK106 (STYK1)"
                                }]

                }]
        }, {
            id: "1_9",
            text: "TKL",
            items: [{
                    id: "1_9_1",
                    text: "IRAK",
                            items: [{
                                    id: "1_9_1_1",
                                    text: "IRAK1"
                                },{
                                    id: "1_9_1_2",
                                    text: "IRAK2"
                                },{
                                    id: "1_9_1_3",
                                    text: "IRAK3"
                                },{
                                    id: "1_9_1_4",
                                    text: "IRAK4"
                                }]
                },{
                    id: "1_9_2",
                    text: "LISK",
                    items: [{
                        id: "1_9_2_1",
                        text: "LIMK",
                            items: [{
                                    id: "1_9_2_1_1",
                                    text: "LIMK1"
                                },{
                                    id: "1_9_2_1_2",
                                    text: "LIMK2"
                                }]
                    },{
                        id: "1_9_2_2",
                        text: "TESK",
                            items: [{
                                    id: "1_9_2_2_1",
                                    text: "TESK1"
                                },{
                                    id: "1_9_2_2_2",
                                    text: "TESK2"
                                }]
                    }]
                },{
                    id: "1_9_3",
                    text: "LRRK",
                            items: [{
                                    id: "1_9_3_1",
                                    text: "LRRK1"
                                },{
                                    id: "1_9_3_2",
                                    text: "LRRK2"
                                }]
                },{
                    id: "1_9_4",
                    text: "MLK",
                    items: [{
                        id: "1_9_4_1",
                        text: "HH498",
                            items: [{
                                    id: "1_9_4_1_1",
                                    text: "HH498 (TNNI3K)"
                                }]

                    },{
                        id: "1_9_4_2",
                        text: "ILK",
                            items: [{
                                    id: "1_9_4_2_1",
                                    text: "ILK"
                                }]

                    },{
                        id: "1_9_4_3",
                        text: "LZK",
                            items: [{
                                    id: "1_9_4_3_1",
                                    text: "DLK (MAP3K12)"
                                },{
                                    id: "1_9_4_3_2",
                                    text: "LZK (MAP3K13)"
                                }]
                    },{
                        id: "1_9_4_4",
                        text: "MLK",
                            items: [{
                                    id: "1_9_4_4_1",
                                    text: "MLK1 (MAP3K9)"
                                },{
                                    id: "1_9_4_4_2",
                                    text: "MLK2 (MAP3K10)"
                                },{
                                    id: "1_9_4_4_3",
                                    text: "MLK3 (MAP3K11)"
                                },{
                                    id: "1_9_4_4_4",
                                    text: "MLK4 (MAP3K21)"
                                }]
                    },{
                        id: "1_9_4_5",
                        text: "TAK1",
                            items: [{
                                    id: "1_9_4_5_1",
                                    text: "TAK1 (MAP3K7)"
                                }]
                    },{
                        id: "1_9_4_6",
                        text: "ZAK",
                            items: [{
                                    id: "1_9_4_6_1",
                                    text: "ZAK (MAP3K20)"
                                }]
                    }]
                },{
                    id: "1_9_5",
                    text: "RAF",
                    items: [{
                        id: "1_9_5_1",
                        text: "KSR",
                            items: [{
                                    id: "1_9_5_1_1",
                                    text: "KSR1"
                                }]
                        },{
                            id: "1_9_5_2",
                            text: "ARAF"
                        },{
                            id: "1_9_5_3",
                            text: "BRAF"
                        },{
                            id: "1_9_5_4",
                            text: "KSR2"
                        },{
                            id: "1_9_5_5",
                            text: "RAF1"
                        }]
            },{
                    id: "1_9_6",
                    text: "RIPK",
                    items: [{
                            id: "1_9_6_1",
                            text: "ANKRD3 (RIPK4)"
                        },{
                            id: "1_9_6_2",
                            text: "RIPK1"
                        },{
                            id: "1_9_6_3",
                            text: "RIPK2"
                        },{
                            id: "1_9_6_4",
                            text: "RIPK3"
                        },{
                            id: "1_9_6_5",
                            text: "SgK288 (ANKK1)"
                        }]
            },{
                    id: "1_9_7",
                    text: "STKR",
                    items: [{
                        id: "1_9_7_1",
                        text: "STKR1",
                        items: [{
                            id: "1_9_7_1_1",
                            text: "ALK1 (ACVRL1)"
                        },{
                            id: "1_9_7_1_2",
                            text: "ALK2 (ACVR1)"
                        },{
                            id: "1_9_7_1_3",
                            text: "ALK4 (ACVR1B)"
                        },{
                            id: "1_9_7_1_4",
                            text: "ALK7 (ACVR1C)"
                        },{
                            id: "1_9_7_1_5",
                            text: "BMPR1A"
                        },{
                            id: "1_9_7_1_6",
                            text: "BMPR1B"
                        },{
                            id: "1_9_7_1_7",
                            text: "TGFbR1 (TGFBR1)"
                        }]
                    },{
                        id: "1_9_7_2",
                        text: "STKR2",
                        items: [{
                            id: "1_9_7_2_1",
                            text: "ACTR2 (ACVR2A)"
                        },{
                            id: "1_9_7_2_2",
                            text: "ACTR2B (ACVR2B)"
                        },{
                            id: "1_9_7_2_3",
                            text: "BMPR2"
                        },{
                            id: "1_9_7_2_4",
                            text: "MISR2 (AMHR2)"
                        },{
                            id: "1_9_7_2_5",
                            text: "TGFbR2 (TGFBR2)"
                        }]
                    }]
            },{
                    id: "1_9_8",
                    text: "TKL-Unique",
                        items: [{
                            id: "1_9_8_1",
                            text: "MLKL"
                        }]
            }]
        }, {
            id: "1_5",
            text: "Other",
            items: [{
                    id: "1_5_1",
                    text: "Aur",
                            items: [{
                                    id: "1_5_1_1",
                                    text: "AurA (AURKA)"
                                },{
                                    id: "1_5_1_2",
                                    text: "AurB (AURKB)"
                                },{
                                    id: "1_5_1_3",
                                    text: "AurC (AURKC)"
                                }]
                }, {
                    id: "1_5_2",
                    text: "BUB",
                            items: [{
                                    id: "1_5_2_1",
                                    text: "BUB1"
                                },{
                                    id: "1_5_2_2",
                                    text: "BUBR1 (BUB1B)"
                                }]
                }, {
                    id: "1_5_3",
                    text: "CAMKK",
                    items: [{
                            id: "1_5_3_1",
                            text: "CAMKK-meta",
                            items: [{
                                    id: "1_5_3_1_1",
                                    text: "CaMKK1 (CAMKK1)"
                                },{
                                    id: "1_5_3_1_2",
                                    text: "CaMKK2 (CAMKK2)"
                                }]
                        }]
                }, {
                    id: "1_5_4",
                    text: "CDC7",
                            items: [{
                                    id: "1_5_4_1",
                                    text: "CDC7"
                                }]
                }, {
                    id: "1_5_5",
                    text: "Dusty",
                            items: [{
                                    id: "1_5_5_1",
                                    text: "SgK496 (DSTYK)"
                                }]
                }, {
                    id: "1_5_6",
                    text: "Haspin",
                            items: [{
                                    id: "1_5_6_1",
                                    text: "Haspin (HASPIN)"
                                }]
                }, {
                    id: "1_5_7",
                    text: "IKK",
                            items: [{
                                    id: "1_5_7_1",
                                    text: "IKKa (CHUK)"
                                },{
                                    id: "1_5_7_2",
                                    text: "IKKb (IKBKB)"
                                },{
                                    id: "1_5_7_3",
                                    text: "IKKe (IKBKE)"
                                },{
                                    id: "1_5_7_4",
                                    text: "TBK1"
                                }]
                }, {
                    id: "1_5_8",
                    text: "IRE",
                            items: [{
                                    id: "1_5_8_1",
                                    text: "IRE1 (ERN1)"
                                },{
                                    id: "1_5_8_2",
                                    text: "IRE2 (ERN2)"
                                }]
                }, {
                    id: "1_5_9",
                    text: "KIS",
                            items: [{
                                    id: "1_5_9_1",
                                    text: "KIS (UHMK1)"
                                }]
                }, {
                    id: "1_5_10",
                    text: "MOS",
                            items: [{
                                    id: "1_5_10_1",
                                    text: "MOS"
                                }]
                }, {
                    id: "1_5_11",
                    text: "NAK",
                            items: [{
                                    id: "1_5_11_1",
                                    text: "AAK1"
                                },{
                                    id: "1_5_11_2",
                                    text: "BIKE (BMP2K)"
                                },{
                                    id: "1_5_11_3",
                                    text: "GAK"
                                },{
                                    id: "1_5_11_4",
                                    text: "MPSK1 (STK16)"
                                }]
                }, {
                    id: "1_5_12",
                    text: "NEK",
                            items: [{
                                    id: "1_5_12_1",
                                    text: "NEK1"
                                },{
                                    id: "1_5_12_2",
                                    text: "NEK2"
                                },{
                                    id: "1_5_12_3",
                                    text: "NEK3"
                                },{
                                    id: "1_5_12_4",
                                    text: "NEK4"
                                },{
                                    id: "1_5_12_5",
                                    text: "NEK5"
                                },{
                                    id: "1_5_12_6",
                                    text: "NEK6"
                                },{
                                    id: "1_5_12_7",
                                    text: "NEK7"
                                },{
                                    id: "1_5_12_8",
                                    text: "NEK8"
                                },{
                                    id: "1_5_12_9",
                                    text: "NEK9"
                                },{
                                    id: "1_5_12_10",
                                    text: "NEK10"
                                },{
                                    id: "1_5_12_11",
                                    text: "NEK11"
                                }]
                }, {
                    id: "1_5_13",
                    text: "NKF1",
                            items: [{
                                    id: "1_5_13_1",
                                    text: "SBK (SBK1)"
                                },{
                                    id: "1_5_13_2",
                                    text: "SgK069 (SBK2)"
                                },{
                                    id: "1_5_13_3",
                                    text: "SgK110 (SBK3)"
                                }]
                }, {
                    id: "1_5_14",
                    text: "NKF2",
                            items: [{
                                    id: "1_5_14_1",
                                    text: "PINK1"
                                }]

                }, {
                    id: "1_5_15",
                    text: "NKF3",
                            items: [{
                                    id: "1_5_15_1",
                                    text: "SgK223 (PRAG1)"
                                },{
                                    id: "1_5_15_2",
                                    text: "SgK269 (PEAK1)"
                                }]
                }, {
                    id: "1_5_16",
                    text: "NKF4",
                            items: [{
                                    id: "1_5_16_1",
                                    text: "CLIK1 (STK35)"
                                },{
                                    id: "1_5_16_2",
                                    text: "CLIK1L (PDIK1L)"
                                }]
                }, {
                    id: "1_5_17",
                    text: "NKF5",
                            items: [{
                                    id: "1_5_17_1",
                                    text: "SgK307 (TEX14)"
                                },{
                                    id: "1_5_17_2",
                                    text: "SgK424 (Tex14)"
                                }]
                }, {
                    id: "1_5_18",
                    text: "NRBP",
                            items: [{
                                    id: "1_5_18_1",
                                    text: "NRBP1"
                                },{
                                    id: "1_5_18_2",
                                    text: "NRBP2"
                                }]
                }, {
                    id: "1_5_19",
                    text: "PAN3",
                            items: [{
                                    id: "1_5_19_1",
                                    text: "PAN3"
                                }]
                }, {
                    id: "1_5_20",
                    text: "PEK",
                    items: [{
                            id: "1_5_20_1",
                            text: "GCN2",
                            items: [{
                                    id: "1_5_20_1_1",
                                    text: "GCN2 (EIF2AK4)"
                                }]
                        }, {
                            id: "1_5_20_2",
                            text: "PEK",
                            items: [{
                                    id: "1_5_20_2_1",
                                    text: "PEK (EIF2AK3)"
                                }]
                        }, {
                            id: "1_5_20_3",
                            text: "HRI (EIF2AK1)"
                        }, {
                            id: "1_5_20_4",
                            text: "PKR (EIF2AK2)"
                        }]
                }, {
                    id: "1_5_21",
                    text: "PLK",
                            items: [{
                                    id: "1_5_21_1",
                                    text: "PLK1"
                                },{
                                    id: "1_5_21_2",
                                    text: "PLK2"
                                },{
                                    id: "1_5_21_3",
                                    text: "PLK3"
                                },{
                                    id: "1_5_21_4",
                                    text: "PLK4"
                                }]
                }, {
                    id: "1_5_22",
                    text: "SCY1",
                            items: [{
                                    id: "1_5_22_1",
                                    text: "SCYL1"
                                },{
                                    id: "1_5_22_2",
                                    text: "SCYL2"
                                },{
                                    id: "1_5_22_3",
                                    text: "SCYL3"
                                }]
                }, {
                    id: "1_5_23",
                    text: "SgK071",
                            items: [{
                                    id: "1_5_23_1",
                                    text: "SgK071 (STKLD1)"
                                }]
                }, {
                    id: "1_5_24",
                    text: "SgK493",
                            items: [{
                                    id: "1_5_24_1",
                                    text: "SgK493 (PKDCC)"
                                }]

                }, {
                    id: "1_5_25",
                    text: "Slob",
                            items: [{
                                    id: "1_5_25_1",
                                    text: "Slob (PXK)"
                                }]
                }, {
                    id: "1_5_26",
                    text: "TBCK",
                            items: [{
                                    id: "1_5_26_1",
                                    text: "TBCK"
                                }]

                }, {
                    id: "1_5_27",
                    text: "TLK",
                            items: [{
                                    id: "1_5_27_1",
                                    text: "TLK1"
                                },{
                                    id: "1_5_27_2",
                                    text: "TLK2"
                                }]
                }, {
                    id: "1_5_28",
                    text: "TOPK",
                            items: [{
                                    id: "1_5_28_1",
                                    text: "PBK"
                                }]
                }, {
                    id: "1_5_29",
                    text: "TTK",
                            items: [{
                                    id: "1_5_29_1",
                                    text: "TTK"
                                }]
                }, {
                    id: "1_5_30",
                    text: "ULK",
                            items: [{
                                    id: "1_5_30_1",
                                    text: "Fused (STK36)"
                                },{
                                    id: "1_5_30_2",
                                    text: "ULK1"
                                },{
                                    id: "1_5_30_3",
                                    text: "ULK2"
                                },{
                                    id: "1_5_30_4",
                                    text: "ULK3"
                                },{
                                    id: "1_5_30_5",
                                    text: "ULK4"
                                }]
                }, {
                    id: "1_5_31",
                    text: "VPS15",
                            items: [{
                                    id: "1_5_31_1",
                                    text: "PIK3R4"
                                }]
                }, {
                    id: "1_5_32",
                    text: "WEE",
                            items: [{
                                    id: "1_5_32_1",
                                    text: "MYT1 (PKMYT1)"
                                },{
                                    id: "1_5_32_2",
                                    text: "Wee1 (WEE1)"
                                },{
                                    id: "1_5_32_3",
                                    text: "Wee1B (WEE2)"
                                }]
                }, {
                    id: "1_5_33",
                    text: "WNK",
                            items: [{
                                    id: "1_5_33_1",
                                    text: "Wnk1 (WNK1)"
                                },{
                                    id: "1_5_33_2",
                                    text: "Wnk2 (WNK2)"
                                },{
                                    id: "1_5_33_3",
                                    text: "Wnk3 (WNK3)"
                                },{
                                    id: "1_5_33_4",
                                    text: "Wnk4 (WNK4)"
                                }]
                }, {
                    id: "1_5_34",
                    text: "Other-Unique",
                            items: [{
                                    id: "1_5_34_1",
                                    text: "RNAseL (RNASEL)"
                                },{
                                    id: "1_5_34_2",
                                    text: "SgK196 (POMK)"
                                },{
                                    id: "1_5_34_3",
                                    text: "SgK396 (STK31)"
                                }]
                }, {
                    id: "1_5_35",
                    text: "Bud32",
                    items: [{
                            id: "1_5_35_1",
                            text: "PRPK (TP53RK)"
                        }]
                }]
        }, {
            id: "1_10",
            text: "Atypical",
            items: [{
                    id: "1_10_1",
                    text: "ABC1",
                    items: [{
                        id: "1_10_1_1",
                        text: "ABC1-A",
                        items: [{
                                id: "1_10_1_1_1",
                                text: "ADCK3 (COQ8A)"
                            },{
                                id: "1_10_1_1_2",
                                text: "ADCK4 (COQ8B)"
                            }]
                    },{
                        id: "1_10_1_2",
                        text: "ABC1-B",
                        items: [{
                                id: "1_10_1_2_1",
                                text: "ADCK1"
                            }]

                    },{
                        id: "1_10_1_3",
                        text: "ABC1-C",
                        items: [{
                                id: "1_10_1_3_1",
                                text: "ADCK2"
                            }]

                    },{
                        id: "1_10_1_4",
                        text: "ABC1-D",
                        items: [{
                                id: "1_10_1_4_1",
                                text: "ADCK5"
                            }]

                    }]
                },{
                    id: "1_10_2",
                    text: "Alpha",
                    items: [{
                        id: "1_10_2_1",
                        text: "ChaK",
                        items: [{
                                id: "1_10_2_1_1",
                                text: "ChaK1 (TRPM7)"
                            },{
                                id: "1_10_2_1_2",
                                text: "ChaK2 (TRPM6)"
                            }]
                    },{
                        id: "1_10_2_2",
                        text: "eEF2K",
                        items: [{
                                id: "1_10_2_2_1",
                                text: "eEF2K (EEF2K)"
                            }]
                    },{
                        id: "1_10_2_3",
                        text: "AlphaK1 (ALPK1)"
                    },{
                        id: "1_10_2_4",
                        text: "AlphaK2 (ALPK2)"
                    },{
                        id: "1_10_2_5",
                        text: "AlphaK3 (ALPK3)"
                    }]
                },{
                    id: "1_10_3",
                    text: "BAZ",
                        items: [{
                                id: "1_10_3_1",
                                text: "BAZ1A"
                            },{
                                id: "1_10_3_2",
                                text: "BAZ1B"
                            }]
                },{
                    id: "1_10_4",
                    text: "BCR",
                        items: [{
                                id: "1_10_4_1",
                                text: "ABR"
                            },{
                                id: "1_10_4_2",
                                text: "BCR"
                            }]
                },{
                    id: "1_10_5",
                    text: "BLVRA",
                        items: [{
                                id: "1_10_5_1",
                                text: "BLVRA"
                            }]
                },{
                    id: "1_10_6",
                    text: "BRD",
                        items: [{
                                id: "1_10_6_1",
                                text: "BRD2"
                            },{
                                id: "1_10_6_2",
                                text: "BRD3"
                            },{
                                id: "1_10_6_3",
                                text: "BRD4"
                            },{
                                id: "1_10_6_4",
                                text: "BRDT"
                            }]
                },{
                    id: "1_10_7",
                    text: "Col4A3BP",
                        items: [{
                                id: "1_10_7_1",
                                text: "Col4A3BP (COL4A3BP)"
                            }]
                },{
                    id: "1_10_8",
                    text: "FAST",
                        items: [{
                                id: "1_10_8_1",
                                text: "FASTK"
                            }]
                },{
                    id: "1_10_9",
                    text: "G11",
                        items: [{
                                id: "1_10_9_1",
                                text: "G11 (STK19)"
                            }]
                },{
                    id: "1_10_10",
                    text: "GTF2F1",
                        items: [{
                                id: "1_10_10_1",
                                text: "GTF2F1"
                            }]
                },{
                    id: "1_10_11",
                    text: "PDHK",
                        items: [{
                                id: "1_10_11_1",
                                text: "BCKDK"
                            },{
                                id: "1_10_11_2",
                                text: "PDHK1 (PDK1)"
                            },{
                                id: "1_10_11_3",
                                text: "PDHK2 (PDK2)"
                            },{
                                id: "1_10_11_4",
                                text: "PDHK3 (PDK3)"
                            },{
                                id: "1_10_11_5",
                                text: "PDHK4 (PDK4)"
                            }]
                },{
                    id: "1_10_12",
                    text: "PIKK",
                    items: [{
                        id: "1_10_12_1",
                        text: "ATM"
                    },{
                        id: "1_10_12_2",
                        text: "ATR"
                    },{
                        id: "1_10_12_3",
                        text: "DNAPK",
                        items: [{
                                id: "1_10_12_3_1",
                                text: "DNAPK (PRKDC)"
                            }]
                    },{
                        id: "1_10_12_4",
                        text: "FRAP",
                        items: [{
                                id: "1_10_12_4_1",
                                text: "FRAP (MTOR)"
                            }]
                    },{
                        id: "1_10_12_5",
                        text: "SMG1"
                    },{
                        id: "1_10_12_6",
                        text: "TRRAP"
                    }]
                },{
                    id: "1_10_13",
                    text: "RIO",
                    items: [{
                        id: "1_10_13_1",
                        text: "RIO1"
                    },{
                        id: "1_10_13_2",
                        text: "RIO2"
                    },{
                        id: "1_10_13_3",
                        text: "RIO3"
                    }]
                    
                },{
                    id: "1_10_14",
                    text: "TAF1",
                        items: [{
                                id: "1_10_14_1",
                                text: "TAF1"
                            },{
                                id: "1_10_14_2",
                                text: "TAF1L"
                            }]
                },{
                    id: "1_10_15",
                    text: "TIF1",
                        items: [{
                                id: "1_10_15_1",
                                text: "TIF1a (TRIM24)"
                            },{
                                id: "1_10_15_2",
                                text: "TIF1b (TRIM28)"
                            },{
                                id: "1_10_15_3",
                                text: "TIF1D (TRIM66)"
                            },{
                                id: "1_10_15_4",
                                text: "TIF1g (TRIM33)"
                            }]
                }]

        }]
    }]