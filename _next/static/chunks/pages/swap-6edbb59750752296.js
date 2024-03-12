(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[8503], {
		85014: function(n, e, t) {
			"use strict";
			t.r(e), t.d(e, {
				default: function() {
					return a
				}
			});
			var r = t(42765),
				o = t(63761),
				i = t(19785);

			function a(n, e) {
				(0, i.Z)(2, arguments);
				var t = (0, r.Z)(e);
				return (0, o.default)(n, 7 * t)
			}
		},
		93035: function(n, e, t) {
			"use strict";
			t.d(e, {
				Z: function() {
					return i
				}
			});
			var r = t(66700),
				o = t(19785);

			function i(n) {
				(0, o.Z)(1, arguments);
				var e = (0, r.default)(n);
				return e.setSeconds(0, 0), e
			}
		},
		65032: function(n, e, t) {
			"use strict";
			t.r(e), t.d(e, {
				default: function() {
					return a
				}
			});
			var r = t(42765),
				o = t(85014),
				i = t(19785);

			function a(n, e) {
				(0, i.Z)(2, arguments);
				var t = (0, r.Z)(e);
				return (0, o.default)(n, -t)
			}
		},
		26139: function(n, e, t) {
			var r = t(73326),
				o = t(36060),
				i = t(67326),
				a = t(93746),
				u = o(function(n) {
					return i(r(n, 1, a, !0))
				});
			n.exports = u
		},
		68994: function(n, e, t) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/swap", function() {
				return t(34682)
			}])
		},
		35676: function(n, e, t) {
			"use strict";
			t.d(e, {
				A: function() {
					return f
				}
			});
			var r = t(70865),
				o = t(96670),
				i = t(87394),
				a = t(52322),
				u = t(35892),
				s = t(90717),
				c = t(752),
				l = t(15498),
				d = t(393),
				p = t(17339),
				m = {
					variant: "danger",
					disabled: !1,
					children: (0, a.jsx)(p.Z, {
						children: "Wrong Network"
					})
				},
				f = function(n) {
					var e = (0, l.g)().isWrongNetwork,
						t = (0, i.Z)((0, s.c)(), 1)[0],
						p = (0, c.b9)(d.v);
					return (0, a.jsx)(u.Z, (0, r.Z)((0, o.Z)((0, r.Z)({}, n), {
						onClick: function(t) {
							if (e) p(!1);
							else {
								var r;
								null === (r = n.onClick) || void 0 === r || r.call(n, t)
							}
						}
					}), t && {
						disabled: !0
					}, e && m))
				}
		},
		15691: function(n, e, t) {
			"use strict";
			t.d(e, {
				Z: function() {
					return i
				}
			});
			var r = t(87332),
				o = t(94579);

			function i() {
				var n, e, t = (0, o.gq)();
				return null === (n = (0, r.Wk)(t, "getCurrentBlockTimestamp")) || void 0 === n ? void 0 : null === (e = n.result) || void 0 === e ? void 0 : e[0]
			}
		},
		8992: function(n, e, t) {
			"use strict";
			t.d(e, {
				Z: function() {
					return a
				}
			});
			var r = t(2784),
				o = t(43997),
				i = t(15691);

			function a() {
				var n = (0, o.v9)(function(n) {
						return n.user.userDeadline
					}),
					e = (0, i.Z)();
				return (0, r.useMemo)(function() {
					if (e && n) return e.add(n)
				}, [e, n])
			}
		},
		34682: function(n, e, t) {
			"use strict";
			t.r(e), t.d(e, {
				default: function() {
					return o3
				}
			});
			var r, o, i, a, u, s, c, l, d, p, m, f, h = t(52322),
				x = t(93616),
				g = t(47842),
				v = t(87394),
				y = t(55294),
				b = t(36986),
				j = t(70701),
				C = t(48964),
				Z = t(80198),
				T = t(60974),
				w = t(91558),
				A = t(52594),
				k = t(2784),
				S = t(81895),
				I = t(88685),
				P = t(65058),
				U = t(752),
				E = t(80307),
				N = t(27032),
				M = t(29347),
				D = t(15498),
				F = (0, k.createContext)({
					isChartSupported: !1,
					isStableSupported: !1,
					isAccessTokenSupported: !1,
					isChartExpanded: !1,
					isChartDisplayed: !1,
					setIsChartExpanded: null,
					setIsChartDisplayed: null
				}),
				L = [N.a_.BSC, N.a_.BSC_TESTNET, N.a_.ARBITRUM],
				B = [N.a_.BSC],
				R = [N.a_.BSC_TESTNET, N.a_.BSC],
				O = function(n) {
					var e = n.children,
						t = (0, b.Z)().isMobile,
						r = (0, D.g)().chainId,
						o = (0, v.Z)((0, M.vD)(t), 2),
						i = o[0],
						a = o[1],
						u = (0, v.Z)((0, k.useState)(i), 2),
						s = u[0],
						c = u[1],
						l = (0, v.Z)((0, k.useState)(!1), 2),
						d = l[0],
						p = l[1],
						m = (0, k.useMemo)(function() {
							return !r || L.includes(r)
						}, [r]),
						f = (0, k.useMemo)(function() {
							return !r || R.includes(r)
						}, [r]),
						x = (0, k.useMemo)(function() {
							return B.includes(r)
						}, [r]);
					(0, k.useEffect)(function() {
						a(s)
					}, [s, a]);
					var g = (0, k.useMemo)(function() {
						return {
							isChartSupported: m,
							isStableSupported: f,
							isAccessTokenSupported: x,
							isChartDisplayed: s,
							setIsChartDisplayed: c,
							isChartExpanded: d,
							setIsChartExpanded: p
						}
					}, [m, f, x, s, c, d, p]);
					return (0, h.jsx)(F.Provider, {
						value: g,
						children: e
					})
				},
				_ = (0, E.Z)("pcs:isHotTokensDisplay", !1),
				z = (0, E.Z)("pcs:isHotTokensDisplayETH", !0),
				q = (0, P.cn)(!1),
				G = function() {
					var n = (0, b.Z)().isMobile,
						e = (0, k.useContext)(F).isChartSupported;
					return (0, U.KO)(n ? q : e ? _ : z)
				},
				W = t(30412),
				V = t(7014),
				X = t(12995),
				H = t(97769),
				Q = t(26232),
				$ = t(92228),
				Y = t(75435),
				K = t(92050),
				J = t(3411),
				nn = t(97584),
				ne = t(35892),
				nt = t(47243),
				nr = t(57374),
				no = t(7378),
				ni = t(70865),
				na = t(96670),
				nu = t(18019),
				ns = function(n) {
					return (0, h.jsxs)(nu.Z, (0, na.Z)((0, ni.Z)({
						viewBox: "0 0 24 24",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg"
					}, n), {
						children: [(0, h.jsx)("path", {
							d: "M8.65 3.35002L5.86 6.14002C5.54 6.45002 5.76 6.99002 6.21 6.99002H8V13C8 13.55 8.45 14 9 14C9.55 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35 3.35002C9.16 3.16002 8.84 3.16002 8.65 3.35002Z"
						}), (0, h.jsx)("path", {
							d: "M16 11V17.01H17.8C18.24 17.01 18.47 17.55 18.15 17.86L15.36 20.64C15.16 20.83 14.85 20.83 14.65 20.64L11.86 17.86C11.54 17.55 11.76 17.01 12.21 17.01H14V11C14 10.45 14.45 10 15 10C15.55 10 16 10.45 16 11Z"
						})]
					}))
				},
				nc = t(22414),
				nl = t(69133),
				nd = t(53620),
				np = t(4073),
				nm = t(9370),
				nf = t(39993),
				nh = t(89079),
				nx = t(34498),
				ng = t.n(nx),
				nv = t(66513),
				ny = t(59913),
				nb = t(95846),
				nj = t(74282),
				nC = t(10106),
				nZ = t(10933);

			function nT() {
				var n = (0, $.Z)(["\n  display: grid;\n  grid-gap: 1em;\n  align-items: center;\n\n  padding: 0 24px;\n\n  grid-template-columns: 4fr 1fr 1fr 1fr;\n\n  @media screen and (max-width: 900px) {\n    grid-template-columns: 2fr repeat(3, 1fr);\n    & :nth-child(4) {\n      display: none;\n    }\n  }\n\n  @media screen and (max-width: 800px) {\n    grid-template-columns: 2fr repeat(3, 1fr);\n    & :nth-child(6) {\n      display: none;\n    }\n  }\n\n  @media screen and (max-width: 670px) {\n    grid-template-columns: 2fr 1fr 1fr 1fr;\n    & :nth-child(4) {\n      display: block;\n    }\n  }\n"]);
				return nT = function() {
					return n
				}, n
			}

			function nw() {
				var n = (0, $.Z)(["\n  text-decoration: none;\n  :hover {\n    cursor: pointer;\n    opacity: 0.7;\n  }\n"]);
				return nw = function() {
					return n
				}, n
			}

			function nA() {
				var n = (0, $.Z)(["\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  @media screen and (max-width: 670px) {\n    width: 16px;\n    height: 16px;\n  }\n"]);
				return nA = function() {
					return n
				}, n
			}

			function nk() {
				var n = (0, $.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 5px;\n"]);
				return nk = function() {
					return n
				}, n
			}

			function nS() {
				var n = (0, $.Z)(["\n  padding: 4px 8px;\n  border-radius: 8px;\n  width: 25px;\n  height: 25px;\n  margin-left: 3px;\n  border-color: ", ";\n  background: ", ";\n  path {\n    fill: ", ";\n  }\n  &.is-asc {\n    background: ", ";\n    path:first-child {\n      fill: rgba(255, 255, 255, 1);\n    }\n    path:last-child {\n      fill: rgba(255, 255, 255, 0.3);\n    }\n  }\n  &.is-desc {\n    background: ", ";\n    path:first-child {\n      fill: rgba(255, 255, 255, 0.3);\n    }\n    path:last-child {\n      fill: rgba(255, 255, 255, 1);\n    }\n  }\n"]);
				return nS = function() {
					return n
				}, n
			}
			var nI = J.ZP.div.withConfig({
					componentId: "sc-9a9ed4ee-0"
				})(nT()),
				nP = (0, J.ZP)(nn.Z).withConfig({
					componentId: "sc-9a9ed4ee-1"
				})(nw()),
				nU = (0, J.ZP)(nm.X).withConfig({
					componentId: "sc-9a9ed4ee-2"
				})(nA()),
				nE = (0, J.ZP)(nj._J).withConfig({
					componentId: "sc-9a9ed4ee-3"
				})(nk()),
				nN = (0, J.ZP)(ne.Z).withConfig({
					componentId: "sc-9a9ed4ee-4"
				})(nS(), function(n) {
					return n.theme.colors.cardBorder
				}, function(n) {
					var e = n.theme;
					return e.isDark ? e.colors.backgroundDisabled : e.colors.input
				}, function(n) {
					return n.theme.isDark ? "rgba(255, 255, 255, 0.2)" : "#B4ACCF"
				}, function(n) {
					var e = n.theme;
					return e.isDark ? e.colors.input : e.colors.textSubtle
				}, function(n) {
					var e = n.theme;
					return e.isDark ? e.colors.input : e.colors.textSubtle
				}),
				nM = function() {
					var n = (0, h.jsxs)(nI, {
						children: [(0, h.jsx)(nt.Z, {}), (0, h.jsx)(nt.Z, {}), (0, h.jsx)(nt.Z, {}), (0, h.jsx)(nt.Z, {}), (0, h.jsx)(nt.Z, {}), (0, h.jsx)(nt.Z, {}), (0, h.jsx)(nt.Z, {}), (0, h.jsx)(nt.Z, {}), (0, h.jsx)(nt.Z, {})]
					});
					return (0, h.jsxs)(h.Fragment, {
						children: [n, n, n]
					})
				},
				nD = function(n) {
					var e = n.tokenData,
						t = n.type,
						r = n.handleOutputSelect,
						o = (0, y.$G)().t,
						i = (0, nh.ZP)().theme,
						a = (0, b.Z)(),
						u = a.isXs,
						s = a.isSm,
						c = a.isMobile,
						l = (0, nv.U1)(),
						d = (0, D.g)().chainId,
						p = (0, nv.qg)(),
						m = (0, np.UJ)(e.address);
					return m ? (0, h.jsx)(nP, {
						to: "/info".concat(ny.Dw[d], "/tokens/").concat(m, "?chain=").concat(nf.M[d]).concat(l.replace("?", "&")),
						children: (0, h.jsxs)(nI, {
							children: [(0, h.jsxs)(j.Z, {
								alignItems: "center",
								children: [(0, h.jsx)(nU, {
									size: "24px",
									address: m,
									chainName: p
								}), (u || s) && (0, h.jsx)(nr.Z, {
									ml: "8px",
									children: e.symbol
								}), !u && !s && (0, h.jsxs)(j.Z, {
									marginLeft: "10px",
									children: [(0, h.jsx)(nr.Z, {
										children: e.name
									}), (0, h.jsxs)(nr.Z, {
										ml: "8px",
										children: ["(", e.symbol, ")"]
									})]
								})]
							}), ("priceChange" === t || "liquidity" === t) && (0, h.jsxs)(nr.Z, {
								fontWeight: 400,
								children: ["$", (0, nb.d)(e.priceUSD, {
									notation: "standard"
								})]
							}), "liquidity" !== t && (0, h.jsx)(nr.Z, {
								fontWeight: 400,
								children: (0, h.jsx)(nC.Z, {
									value: e.priceUSDChange,
									fontWeight: 400
								})
							}), "volume" === t && (0, h.jsxs)(nr.Z, {
								fontWeight: 400,
								children: ["$", (0, nb.d)(e.volumeUSD)]
							}), "liquidity" === t && (0, h.jsxs)(nr.Z, {
								fontWeight: 400,
								children: ["$", (0, nb.d)(e.liquidityUSD)]
							}), (0, h.jsxs)(j.Z, {
								alignItems: "center",
								children: [(0, h.jsx)(ne.Z, {
									variant: "text",
									scale: "sm",
									p: "0",
									onClick: function(n) {
										n.stopPropagation(), n.preventDefault(), r(new N.WU(d, m, e.decimals, e.symbol)), (0, nZ.n0)(e.symbol)
									},
									style: {
										color: i.colors.textSubtle
									},
									children: o("Trade")
								}), !c && (0, h.jsxs)(h.Fragment, {
									children: [(0, h.jsx)(nr.Z, {
										pl: "8px",
										pr: "4px",
										lineHeight: "100%",
										color: "rgba(122, 110, 170, 0.3)",
										children: "|"
									}), (0, h.jsx)(no.Z, {
										color: i.colors.textSubtle
									})]
								})]
							})]
						})
					}) : null
				},
				nF = {
					name: "name",
					volumeUSD: "volumeUSD",
					liquidityUSD: "liquidityUSD",
					priceUSD: "priceUSD",
					priceUSDChange: "priceUSDChange",
					priceUSDChangeWeek: "priceUSDChangeWeek"
				},
				nL = function(n) {
					var e = n.tokenDatas,
						t = n.maxItems,
						r = void 0 === t ? 10 : t,
						o = n.defaultSortField,
						i = void 0 === o ? nF.volumeUSD : o,
						a = n.type,
						u = n.handleOutputSelect,
						s = (0, v.Z)((0, k.useState)(nF[i]), 2),
						c = s[0],
						l = s[1],
						d = (0, b.Z)().isMobile;
					(0, k.useEffect)(function() {
						i && (l(i), C(1))
					}, [i]);
					var p = (0, v.Z)((0, k.useState)(!0), 2),
						m = p[0],
						f = p[1],
						x = (0, y.$G)().t,
						g = (0, v.Z)((0, k.useState)(1), 2),
						j = g[0],
						C = g[1],
						Z = (0, v.Z)((0, k.useState)(1), 2),
						T = Z[0],
						w = Z[1];
					(0, k.useEffect)(function() {
						var n = 1;
						e && (e.length % r == 0 && (n = 0), w(Math.floor(e.length / r) + n))
					}, [r, e]);
					var A = (0, k.useMemo)(function() {
							return e ? ng()(e, function(n) {
								return n[c]
							}, m ? "desc" : "asc").slice(r * (j - 1), j * r) : []
						}, [e, r, j, m, c]),
						S = (0, k.useCallback)(function(n) {
							l(n), f(c !== n || !m)
						}, [m, c]),
						I = (0, k.useCallback)(function(n) {
							return c === n ? m ? "is-desc" : "is-asc" : ""
						}, [m, c]);
					return e ? (0, h.jsxs)(nj.y6, {
						children: [(0, h.jsxs)(nI, {
							children: [(0, h.jsx)(nE, {
								color: "secondary",
								fontSize: "12px",
								bold: !0,
								onClick: function() {
									return S(nF.name)
								},
								textTransform: "uppercase",
								children: x("Token Name")
							}), ("priceChange" === a || "liquidity" === a) && (0, h.jsxs)(nE, {
								color: "secondary",
								fontSize: "12px",
								bold: !0,
								onClick: function() {
									return S(nF.priceUSD)
								},
								textTransform: "uppercase",
								children: [x("Price"), " ", (0, h.jsx)(nN, {
									scale: "sm",
									variant: "subtle",
									className: I(nF.priceUSD),
									children: (0, h.jsx)(ns, {})
								})]
							}), "liquidity" !== a && (0, h.jsxs)(nE, {
								color: "secondary",
								fontSize: "12px",
								bold: !0,
								onClick: function() {
									return S(nF.priceUSDChange)
								},
								textTransform: "uppercase",
								children: [x("Change"), " ", (0, h.jsx)(nN, {
									scale: "sm",
									variant: "subtle",
									className: I(nF.priceUSDChange),
									children: (0, h.jsx)(ns, {})
								})]
							}), "liquidity" === a && (0, h.jsxs)(nE, {
								color: "secondary",
								fontSize: "12px",
								bold: !0,
								onClick: function() {
									return S(nF.liquidityUSD)
								},
								textTransform: "uppercase",
								children: [x("Liquidity"), (0, h.jsx)(nN, {
									scale: "sm",
									variant: "subtle",
									className: I(nF.liquidityUSD),
									children: (0, h.jsx)(ns, {})
								})]
							}), "volume" === a && (0, h.jsxs)(nE, {
								color: "secondary",
								fontSize: "12px",
								bold: !0,
								onClick: function() {
									return S(nF.volumeUSD)
								},
								textTransform: "uppercase",
								children: [x("Volume 24H"), " ", (0, h.jsx)(nN, {
									scale: "sm",
									variant: "subtle",
									className: I(nF.volumeUSD),
									children: (0, h.jsx)(ns, {})
								})]
							})]
						}), (0, h.jsx)(nj.SS, {}), A.length > 0 ? (0, h.jsxs)(h.Fragment, {
							children: [A.map(function(n, e) {
								return n ? (0, h.jsxs)(k.Fragment, {
									children: [(0, h.jsx)(nD, {
										index: (j - 1) * 10 + e,
										tokenData: n,
										type: a,
										handleOutputSelect: u
									}), (0, h.jsx)(nj.SS, {})]
								}, n.address) : null
							}), !d && (0, h.jsxs)(nj.Ob, {
								children: [(0, h.jsx)(nj.Eh, {
									onClick: function() {
										C(1 === j ? j : j - 1)
									},
									children: (0, h.jsx)(nc.Z, {
										color: 1 === j ? "textDisabled" : "primary"
									})
								}), (0, h.jsx)(nr.Z, {
									children: x("Page %page% of %maxPage%", {
										page: j,
										maxPage: T
									})
								}), (0, h.jsx)(nj.Eh, {
									onClick: function() {
										C(j === T ? j : j + 1)
									},
									children: (0, h.jsx)(nl.Z, {
										color: j === T ? "textDisabled" : "primary"
									})
								})]
							})]
						}) : (0, h.jsxs)(h.Fragment, {
							children: [(0, h.jsx)(nM, {}), (0, h.jsx)(nd.ZP, {})]
						})]
					}) : (0, h.jsx)(nt.Z, {})
				},
				nB = t(65905),
				nR = t(1898),
				nO = function() {
					var n = (0, U.Dv)(nR.Ti)[nB.gi].current;
					return (0, k.useMemo)(function() {
						return n ? n.tokens.map(function(n) {
							return n.address.toLowerCase()
						}) : []
					}, [n])
				},
				n_ = ["0x56b251d4b493ee3956e3f899d36b7290902d2326", "0x82af49447d8a07e3bd95bd0d56f35241523fbab1"],
				nz = ["0x97749c9b61f878a880dfe312d2594ae07aed7656", "0xc21223249ca28397b4b6541dffaecc539bff0c59"],
				nq = function() {
					var n = (0, D.g)().chainId;
					nO();
					var e = (0, nv.ZF)(n === N.a_.ARBITRUM ? n_ : n === N.a_.CRONOS ? nz : n_, !1);
					return (0, nv.bm)(), e
				};

			function nG() {
				var n = (0, $.Z)(["\n  padding-top: 10px;\n  ", " {\n    width: 725px;\n    padding: 24px;\n    box-sizing: border-box;\n    background: ", ";\n    border: 1px solid ", ";\n    border-radius: 32px;\n  }\n"]);
				return nG = function() {
					return n
				}, n
			}

			function nW() {
				var n = (0, $.Z)(["\n  padding: 0px 24px 12px;\n  ", " {\n    margin-bottom: 24px;\n  }\n"]);
				return nW = function() {
					return n
				}, n
			}
			var nV = J.ZP.div.withConfig({
					componentId: "sc-394e9c06-0"
				})(nG(), function(n) {
					return n.theme.mediaQueries.lg
				}, function(n) {
					return n.theme.isDark ? "rgba(39, 38, 44, 0.5)" : "rgba(255, 255, 255, 0.5)"
				}, function(n) {
					return n.theme.colors.cardBorder
				}),
				nX = J.ZP.div.withConfig({
					componentId: "sc-394e9c06-1"
				})(nW(), function(n) {
					return n.theme.mediaQueries.lg
				}),
				nH = (c = {}, (0, g.Z)(c, N.a_.BSC, 1e5), (0, g.Z)(c, N.a_.ETHEREUM, 5e4), (0, g.Z)(c, N.a_.ARBITRUM, 500), (0, g.Z)(c, N.a_.CRONOS, 500), c),
				nQ = (0, k.memo)(function(n) {
					var e = n.handleOutputSelect,
						t = (0, D.g)().chainId,
						r = nq(),
						o = (0, v.Z)((0, k.useState)(0), 2),
						i = o[0],
						a = o[1],
						u = (0, b.Z)().isMobile,
						s = (0, k.useMemo)(function() {
							return r.filter(function(n) {
								return 0 !== n.priceUSD && 0 !== n.priceUSDChange && 0 !== n.volumeUSD && n.liquidityUSD >= nH[t]
							})
						}, [r, t]),
						c = (0, y.$G)().t;
					return (0, h.jsxs)(nV, {
						children: [(0, h.jsx)(nX, {
							children: (0, h.jsxs)(Y.Z, {
								activeIndex: i,
								onItemClick: a,
								fullWidth: !0,
								scale: "sm",
								variant: "subtle",
								children: [(0, h.jsx)(K.Z, {
									children: c(t === N.a_.BSC ? "Price Change" : "Liquidity")
								}), (0, h.jsx)(K.Z, {
									children: c("Volume (24H)")
								})]
							})
						}), 0 === i ? (0, h.jsx)(nL, {
							tokenDatas: s,
							type: t === N.a_.BSC ? "priceChange" : "liquidity",
							defaultSortField: t === N.a_.BSC ? "priceUSDChange" : "liquidityUSD",
							maxItems: u ? 100 : 6,
							handleOutputSelect: e
						}) : (0, h.jsx)(nL, {
							tokenDatas: s,
							type: "volume",
							defaultSortField: "volumeUSD",
							maxItems: u ? 100 : 6,
							handleOutputSelect: e
						})]
					})
				}),
				n$ = t(83768),
				nY = t(5632),
				nK = t(2303),
				nJ = t(59348),
				n0 = {
					pokemoney: new N.Z$(N.a_.BSC, "0x32ff5b4C3B1744F0344D96fA2f87799Ed2805749", 18, "PMY", "Pokemoney Coin", ""),
					free: new N.Z$(N.a_.BSC, "0x880BCe9321c79cAc1D290De6d31DDE722C606165", 8, "FREE", "Freedom Protocol Token", ""),
					safemoon: new N.Z$(N.a_.BSC, "0x8076C74C5e3F5852037F31Ff0093Eeb8c8ADd8D3", 9, "SAFEMOON", "Safemoon Token", "https://safemoon.net/"),
					gala: new N.Z$(N.a_.BSC, "0x7dDEE176F665cD201F93eEDE625770E2fD911990", 18, "GALA", "pTokens GALA", "https://games.gala.com/"),
					xcad: new N.Z$(N.a_.BSC, "0x431e0cD023a32532BF3969CddFc002c00E98429d", 18, "XCAD", "Chainport.io-Peg XCAD Token", "https://xcadnetwork.com/")
				},
				n1 = nJ.ds.bondly,
				n9 = nJ.ds.itam,
				n2 = nJ.ds.ccar,
				n5 = nJ.ds.bttold,
				n4 = nJ.ds.abnbc,
				n6 = nJ.ds.ageur,
				n3 = n0.pokemoney,
				n8 = n0.free,
				n7 = {
					safemoon: n0.safemoon,
					bondly: n1,
					itam: n9,
					ccar: n2,
					bttold: n5,
					pokemoney: n3,
					free: n8,
					gala: n0.gala,
					abnbc: n4,
					ageur: n6,
					xcad: n0.xcad
				},
				en = Object.values(n7),
				ee = t(55844),
				et = t(75830),
				er = t(81166),
				eo = t(42429),
				ei = t(2654),
				ea = t(44427),
				eu = function() {
					var n = (0, y.$G)().t;
					return (0, h.jsx)(h.Fragment, {
						children: (0, h.jsxs)(nr.Z, {
							children: [n("SAFEMOON has been migrated to"), " ", (0, h.jsx)(ea.Z, {
								style: {
									display: "inline"
								},
								external: !0,
								href: "https://bscscan.com/address/0x42981d0bfbAf196529376EE702F2a9Eb9092fcB5",
								children: n("a new contract address.")
							}), " ", n("Trading on the old address may result in the complete loss of your assets. For more information please refer to"), " ", (0, h.jsxs)(ea.Z, {
								style: {
									display: "inline"
								},
								external: !0,
								href: "https://twitter.com/safemoon/status/1477770592031887360",
								children: [n("Safemoon's announcement"), "."]
							})]
						})
					})
				},
				es = function() {
					var n = (0, y.$G)().t;
					return (0, h.jsx)(h.Fragment, {
						children: (0, h.jsxs)(nr.Z, {
							children: [n("ITAM has been rebranded as ITAM CUBE."), " ", (0, h.jsx)(ea.Z, {
								style: {
									display: "inline"
								},
								external: !0,
								href: "https://itam.network/swap",
								children: n("Please proceed to ITAM bridge to conduct a one-way swap of your ITAM tokens.")
							}), " ", n("All transfers of the old ITAM token will be disabled after the swap.")]
						})
					})
				},
				ec = function() {
					var n = (0, y.$G)().t;
					return (0, h.jsx)(nr.Z, {
						children: n("Warning: BONDLY has been compromised. Please remove liquidity until further notice.")
					})
				},
				el = t(76844),
				ed = function(n) {
					var e = n.handleContinueClick,
						t = (0, y.$G)().t,
						r = (0, v.Z)((0, k.useState)(!1), 2),
						o = r[0],
						i = r[1];
					return (0, h.jsx)(h.Fragment, {
						children: (0, h.jsxs)(j.Z, {
							justifyContent: "space-between",
							children: [(0, h.jsx)("label", {
								htmlFor: "acknowledgement",
								children: (0, h.jsxs)(j.Z, {
									alignItems: "center",
									children: [(0, h.jsx)(el.Z, {
										id: "acknowledgement",
										name: "confirmed",
										type: "checkbox",
										checked: o,
										onChange: function() {
											return i(!o)
										},
										scale: "sm"
									}), (0, h.jsx)(nr.Z, {
										ml: "10px",
										style: {
											userSelect: "none"
										},
										children: t("I understand")
									})]
								})
							}), (0, h.jsx)(ne.Z, {
								disabled: !o,
								onClick: e,
								children: t("Continue")
							})]
						})
					})
				},
				ep = function() {
					var n = (0, y.$G)().t;
					return (0, h.jsx)(h.Fragment, {
						children: (0, h.jsxs)(nr.Z, {
							children: [n("Crypto Cars (CCAR) has been migrated to"), " ", (0, h.jsx)(ea.Z, {
								style: {
									display: "inline"
								},
								external: !0,
								href: "https://bscscan.com/token/0x322e5015Cc464Ada7f99dE7131CE494dE1834396",
								children: n("a new contract address.")
							}), " ", n("Trading on the old address may result in the complete loss of your assets. For more information please refer to"), " ", (0, h.jsx)(ea.Z, {
								style: {
									display: "inline"
								},
								external: !0,
								href: "https://t.me/Crypto_Cars_Official/465037",
								children: n("the announcement.")
							})]
						})
					})
				},
				em = t(98757),
				ef = function() {
					var n = (0, y.$G)().t;
					return (0, h.jsxs)(h.Fragment, {
						children: [(0, h.jsx)(nr.Z, {
							children: n("Please note that this is the old BTT token, which has been swapped to the new BTT tokens in the following ratio:")
						}), (0, h.jsx)(nr.Z, {
							children: "1 BTT (OLD) = 1,000 BTT (NEW)"
						}), (0, h.jsxs)(nr.Z, {
							mb: "8px",
							children: [n("Trade the new BTT token"), " ", (0, h.jsx)(ea.Z, {
								style: {
									display: "inline"
								},
								href: "https://pancakeswap.finance/swap?outputCurrency=0x352Cb5E19b12FC216548a2677bD0fce83BaE434B",
								children: n("here")
							})]
						}), (0, h.jsx)(em.Z, {
							href: "https://medium.com/@BitTorrent/tutorial-how-to-swap-bttold-to-btt-453264d7142",
							children: n("For more details on the swap, please refer here.")
						})]
					})
				},
				eh = function() {
					var n = (0, y.$G)().t;
					return (0, h.jsx)(h.Fragment, {
						children: (0, h.jsx)(nr.Z, {
							children: n("Suspicious rugpull token")
						})
					})
				},
				ex = function() {
					var n = (0, y.$G)().t;
					return (0, h.jsx)(h.Fragment, {
						children: (0, h.jsx)(nr.Z, {
							children: n("Risk Warning: This token is subject to high price risk. Please do your own research before trading this token. Please also note that as of 24 June 2022 there is also a reflection fee for every transfer of FREE ranging from 2.5 to 5% per trade/transfer.")
						})
					})
				},
				eg = function() {
					var n = (0, y.$G)().t;
					return (0, h.jsxs)(h.Fragment, {
						children: [(0, h.jsx)(nr.Z, {
							children: n("Warning: The pGALA token pool is not a valid token trading pair - please stop buying.")
						}), (0, h.jsx)(em.Z, {
							href: "https://twitter.com/pNetworkDeFi/status/1588266897061031936",
							children: n("For more info, please see pGALA’s twitter.")
						})]
					})
				},
				ev = function() {
					var n = (0, y.$G)().t;
					return (0, h.jsxs)(h.Fragment, {
						children: [(0, h.jsx)(nr.Z, {
							children: n("Warning: aBNB token from Ankr has been exploited. Please proceed with caution. We do not recommend users to trade the token.")
						}), (0, h.jsx)(em.Z, {
							href: "https://twitter.com/ankr/status/1598503332477280256",
							children: n("Learn More")
						})]
					})
				},
				ey = function() {
					var n = (0, y.$G)().t;
					return (0, h.jsxs)(h.Fragment, {
						children: [(0, h.jsxs)(nr.Z, {
							mb: "16px",
							children: [n("Please exercise due caution when trading / providing liquidity for the agEUR token. The protocol was recently affected by the"), " ", (0, h.jsx)(ea.Z, {
								style: {
									display: "inline"
								},
								external: !0,
								href: "https://twitter.com/eulerfinance/status/1635218198042918918",
								children: n("Euler hack")
							})]
						}), (0, h.jsxs)(nr.Z, {
							children: [n("For more information, please refer to Angle Protocol’s"), " ", (0, h.jsxs)(ea.Z, {
								style: {
									display: "inline"
								},
								external: !0,
								href: "https://twitter.com/AngleProtocol/status/1635293731082612738",
								children: [n("announcement"), "."]
							})]
						})]
					})
				},
				eb = function() {
					var n = (0, y.$G)().t;
					return (0, h.jsx)(h.Fragment, {
						children: (0, h.jsxs)(nr.Z, {
							children: [n("XCAD is now using a new bridge provider and has migrated to a new XCAD token on BSC."), (0, h.jsx)("br", {}), n("You can obtain the new token either by swapping your old tokens on MadMeerkatFinance or bridging them to ETH and back to BSC using the new bridge provider."), (0, h.jsx)("br", {}), n("For more info, click"), " ", (0, h.jsx)(ea.Z, {
								style: {
									display: "inline"
								},
								external: !0,
								href: "https://blog.xcadnetwork.com/xcad-network-bsc-token-migration-wormhole-partnership-3c73aaabe4ba",
								children: n("here")
							}), (0, h.jsx)("br", {}), (0, h.jsxs)(ea.Z, {
								external: !0,
								href: "https://bscscan.com/token/0xa026ad2ceda16ca5fc28fd3c72f99e2c332c8a26",
								children: [n("New token contract address"), "."]
							})]
						})
					})
				};

			function ej() {
				var n = (0, $.Z)(["\n  max-width: 440px;\n"]);
				return ej = function() {
					return n
				}, n
			}

			function eC() {
				var n = (0, $.Z)(["\n  align-items: flex-start;\n  justify-content: flex-start;\n"]);
				return eC = function() {
					return n
				}, n
			}
			var eZ = (0, J.ZP)(er.F0).withConfig({
					componentId: "sc-f68fb95c-0"
				})(ej()),
				eT = (0, J.ZP)(eo.Z).withConfig({
					componentId: "sc-f68fb95c-1"
				})(eC()),
				ew = function(n) {
					var e, t = n.swapCurrency,
						r = n.onDismiss,
						o = (0, y.$G)().t,
						i = (0, nh.ZP)().theme,
						a = (e = {}, (0, g.Z)(e, n7.safemoon.address, {
							symbol: n7.safemoon.symbol,
							component: (0, h.jsx)(eu, {})
						}), (0, g.Z)(e, n7.bondly.address, {
							symbol: n7.bondly.symbol,
							component: (0, h.jsx)(ec, {})
						}), (0, g.Z)(e, n7.itam.address, {
							symbol: n7.itam.symbol,
							component: (0, h.jsx)(es, {})
						}), (0, g.Z)(e, n7.ccar.address, {
							symbol: n7.ccar.symbol,
							component: (0, h.jsx)(ep, {})
						}), (0, g.Z)(e, n7.bttold.address, {
							symbol: n7.bttold.symbol,
							component: (0, h.jsx)(ef, {})
						}), (0, g.Z)(e, n7.pokemoney.address, {
							symbol: n7.pokemoney.symbol,
							component: (0, h.jsx)(eh, {})
						}), (0, g.Z)(e, n7.free.address, {
							symbol: n7.free.symbol,
							component: (0, h.jsx)(ex, {})
						}), (0, g.Z)(e, n7.gala.address, {
							symbol: n7.gala.symbol,
							component: (0, h.jsx)(eg, {})
						}), (0, g.Z)(e, n7.abnbc.address, {
							symbol: n7.abnbc.symbol,
							component: (0, h.jsx)(ev, {})
						}), (0, g.Z)(e, n7.ageur.address, {
							symbol: n7.ageur.symbol,
							component: (0, h.jsx)(ey, {})
						}), (0, g.Z)(e, n7.xcad.address, {
							symbol: n7.xcad.symbol,
							component: (0, h.jsx)(eb, {})
						}), e)[t.address];
					return (0, h.jsxs)(eZ, {
						minWidth: "280px",
						children: [(0, h.jsx)(er.xB, {
							background: i.colors.gradientCardHeader,
							children: (0, h.jsx)(ei.Z, {
								p: "12px 24px",
								children: o("Notice for trading %symbol%", {
									symbol: a.symbol
								})
							})
						}), (0, h.jsxs)(er.fe, {
							p: "24px",
							children: [(0, h.jsx)(eT, {
								variant: "warning",
								mb: "24px",
								children: (0, h.jsx)(nd.ZP, {
									children: a.component
								})
							}), (0, h.jsx)(ed, {
								handleContinueClick: r
							})]
						})]
					})
				};

			function eA() {
				var n, e = (0, nY.useRouter)(),
					t = (0, et.Z)(),
					r = t.chainId,
					o = t.isWrongNetwork,
					i = (0, X.dU)(),
					a = i[V.gN.INPUT].currencyId,
					u = i[V.gN.OUTPUT].currencyId,
					s = (0, v.Z)((0, k.useState)(null), 2),
					c = s[0],
					l = s[1],
					d = [(0, W.U8)(a), (0, W.U8)(u)],
					p = d[0],
					m = d[1],
					f = (0, k.useMemo)(function() {
						return null !== (n = [p, m].filter(function(n) {
							return null == n ? void 0 : n.isToken
						})) && void 0 !== n ? n : []
					}, [p, m]),
					x = (0, W.e_)(),
					g = (0, nK.Z)(["token-list"]).data,
					y = (0, k.useMemo)(function() {
						return !o && f && g ? f.filter(function(n) {
							return !(((0, np.UJ)(n.address) || "") in x) && n.chainId === r
						}) : []
					}, [r, x, o, g, f]),
					b = (0, v.Z)((0, n$.Z)((0, h.jsx)(ew, {
						swapCurrency: c
					}), !1), 1)[0],
					j = (0, v.Z)((0, n$.Z)((0, h.jsx)(ee.Z, {
						tokens: y,
						onCancel: function() {
							return e.push("/swap")
						}
					})), 1)[0];
				(0, k.useEffect)(function() {
					c && b()
				}, [c]);
				var C = (0, k.useCallback)(function(n) {
					en.some(function(e) {
						return e.equals(n)
					}) ? l(n) : l(null)
				}, []);
				return (0, k.useEffect)(function() {
					y.length > 0 && j()
				}, [y.length]), C
			}
			var ek = t(85164),
				eS = t(45791),
				eI = t(94980),
				eP = t(77837),
				eU = t(98788),
				eE = t(90581),
				eN = t(21218),
				eM = t(96397),
				eD = t(39309),
				eF = t(45680),
				eL = t(30195);
			(r = l || (l = {})).RFQ_REQUEST = "RFQ_REQUEST", r.RFQ_RESPONSE = "RFQ_RESPONSE", r.ORDER_BOOK_PRICE_RESPONSE = "ORDER_BOOK_PRICE_RESPONSE", r.RFQ_SUCCESS = "RFQ_SUCCESS", r.RFQ_ERROR = "RFQ_ERROR";
			var eB = eL.z.object({
					messageType: eL.z.nativeEnum(l),
					message: eL.z.object({
						makerSideToken: eL.z.string(),
						takerSideToken: eL.z.string(),
						makerSideTokenAmount: eL.z.string(),
						takerSideTokenAmount: eL.z.string(),
						rfqId: eL.z.string(),
						mmId: eL.z.string().optional(),
						signature: eL.z.string(),
						quoteExpiry: eL.z.number()
					})
				}),
				eR = "https://linked-pool.pancakeswap.com/quote-service",
				eO = (o = (0, eU.Z)(function(n) {
					return (0, eF.__generator)(this, function(e) {
						switch (e.label) {
							case 0:
								return e.trys.push([0, 3, , 4]), [4, fetch("".concat(eR, "/order-book-price"), {
									method: "POST",
									headers: {
										"Content-Type": "application/json"
									},
									body: JSON.stringify(n)
								})];
							case 1:
								return [4, e.sent().json()];
							case 2:
								return [2, e.sent()];
							case 3:
								return [2, Promise.reject(e.sent())];
							case 4:
								return [2]
						}
					})
				}), function(n) {
					return o.apply(this, arguments)
				}),
				e_ = (i = (0, eU.Z)(function(n) {
					return (0, eF.__generator)(this, function(e) {
						switch (e.label) {
							case 0:
								return e.trys.push([0, 3, , 4]), [4, fetch("".concat(eR, "/rfq"), {
									method: "POST",
									headers: {
										"Content-Type": "application/json"
									},
									body: JSON.stringify(n)
								})];
							case 1:
								return [4, e.sent().json()];
							case 2:
								return [2, e.sent()];
							case 3:
								return [2, Promise.reject(e.sent())];
							case 4:
								return [2]
						}
					})
				}), function(n) {
					return i.apply(this, arguments)
				}),
				ez = (a = (0, eU.Z)(function(n) {
					var e, t, r, o, i, a;
					return (0, eF.__generator)(this, function(u) {
						switch (u.label) {
							case 0:
								return [4, fetch("".concat(eR, "/rfq/").concat(n), {
									method: "GET",
									headers: {
										Accept: "application/json",
										"Content-Type": "application/json"
									}
								})];
							case 1:
								return [4, (e = u.sent()).json()];
							case 2:
								if ((null == (t = u.sent()) ? void 0 : t.messageType) === l.RFQ_ERROR) {
									if ((null == t ? void 0 : null === (r = t.message) || void 0 === r ? void 0 : r.error) === "RFQ not found") throw new eG(null == t ? void 0 : null === (o = t.message) || void 0 === o ? void 0 : o.error, 404 !== e.status);
									if (null == t ? void 0 : null === (i = t.message) || void 0 === i ? void 0 : i.error.includes(eW.originMessage)) throw new eW;
									throw new eq(null == t ? void 0 : null === (a = t.message) || void 0 === a ? void 0 : a.error)
								}
								return eB.parse(t), [2, t]
						}
					})
				}), function(n) {
					return a.apply(this, arguments)
				}),
				eq = function(n) {
					(0, eN.Z)(t, n);
					var e = (0, eD.Z)(t);

					function t(n) {
						var r;
						return (0, eE.Z)(this, t), (r = e.call(this, n)).internalError = n, r.message = "Unable request a quote", r
					}
					return t
				}((0, eM.Z)(Error)),
				eG = function(n) {
					(0, eN.Z)(t, n);
					var e = (0, eD.Z)(t);

					function t(n, r) {
						var o;
						return (0, eE.Z)(this, t), (o = e.call(this)).internalError = n, r ? o.message = "Quoting" : o.message = "Cannot find quote now. Please try again later.", o.shouldRetry = r, o
					}
					return t
				}(eq),
				eW = function(n) {
					(0, eN.Z)(t, n);
					var e = (0, eD.Z)(t);

					function t() {
						var n;
						return (0, eE.Z)(this, t), (n = e.call(this)).shouldRetry = !1, n.message = "Insufficient liquidity. Please try again later.", n
					}
					return t
				}(eq);
			eW.originMessage = "insufficient_liquidity";
			var eV = t(59656),
				eX = t(18734),
				eH = t(61054),
				eQ = t(94579),
				e$ = t(7642),
				eY = t.n(e$),
				eK = t(88005),
				eJ = (0, t(58194).getAddress)("0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"),
				e0 = {
					1: !0,
					5: !0,
					56: !0
				},
				e1 = eK.Z.mmLinkedPool,
				e9 = (d = {}, (0, g.Z)(d, N.a_.ETHEREUM, {
					"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48": "USDC",
					"0xdAC17F958D2ee523a2206206994597C13D831ec7": "USDT",
					"0x6B175474E89094C44Da98b954EedeAC495271d0F": "DAI",
					"0x4Fabb145d64652a948d72533023f6E7A623C7C53": "BUSD"
				}), (0, g.Z)(d, N.a_.BSC, {
					"0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56": "BUSD",
					"0x55d398326f99059fF775485246999027B3197955": "USDT",
					"0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d": "USDC"
				}), (0, g.Z)(d, N.a_.GOERLI, {}), d),
				e2 = (p = {}, (0, g.Z)(p, N.a_.BSC, "0x2008b6c3D07B061A84F790C035c2f6dC11A0be70"), (0, g.Z)(p, N.a_.ETHEREUM, "0x2008b6c3D07B061A84F790C035c2f6dC11A0be70"), (0, g.Z)(p, N.a_.GOERLI, "0x13414B047539298D5aeD429722211681eAAb43B7"), p);

			function e5(n) {
				var e, t, r, o, i, a, u, s, c, l, d = n ? eH.yC.subtract(n.route.pairs.reduce(function(n) {
						return n.multiply(eH.yC)
					}, eH.yC)) : void 0,
					p = e9[null == n ? void 0 : null === (e = n.inputAmount) || void 0 === e ? void 0 : null === (t = e.currency) || void 0 === t ? void 0 : t.chainId],
					m = Boolean((null == n ? void 0 : null === (r = n.inputAmount) || void 0 === r ? void 0 : null === (o = r.currency) || void 0 === o ? void 0 : o.isToken) && (null == n ? void 0 : null === (i = n.outputAmount) || void 0 === i ? void 0 : null === (a = i.currency) || void 0 === a ? void 0 : a.isToken) && p[null == n ? void 0 : null === (u = n.inputAmount) || void 0 === u ? void 0 : null === (s = u.currency) || void 0 === s ? void 0 : s.address] && p[null == n ? void 0 : null === (c = n.outputAmount) || void 0 === c ? void 0 : null === (l = c.currency) || void 0 === l ? void 0 : l.address]),
					f = N.fI ? N.fI : void 0,
					h = new N.iA(5, 1e4),
					x = new N.iA(1, 1e4);
				return {
					priceImpactWithoutFee: f,
					realizedLPFee: d && n && (m ? n.inputAmount.multiply(x) : n.inputAmount.multiply(h))
				}
			}

			function e4(n) {
				var e = n.inputAmount,
					t = n.outputAmount;
				return new N.tA(e.currency, t.currency, e.quotient, t.quotient)
			}
			var e6 = function(n, e) {
					var t;
					if (!n || !e) return t;
					try {
						t = (0, eV.parseUnits)(n, e).toString()
					} catch (r) {
						t = (0, eV.parseUnits)(eY()(n).toFixed(e), e).toString()
					} finally {
						return t
					}
				},
				e3 = function(n, e, t, r, o) {
					return e && t && r && o ? {
						tradeType: n ? N.YL.EXACT_INPUT : N.YL.EXACT_OUTPUT,
						inputAmount: N.ih.fromRawAmount(e, N.QA.BigInt(r)),
						outputAmount: N.ih.fromRawAmount(t, N.QA.BigInt(o)),
						route: {
							input: e,
							output: t,
							pairs: [],
							path: [e, t]
						}
					} : null
				},
				e8 = function(n, e, t, r) {
					var o, i, a, u = (0, et.Z)().account;
					t && (t.current = "".concat(null == n ? void 0 : n.networkId, "/").concat(null == n ? void 0 : n.makerSideToken, "/").concat(null == n ? void 0 : n.takerSideToken, "/").concat(null == n ? void 0 : n.makerSideTokenAmount, "/").concat(null == n ? void 0 : n.takerSideTokenAmount));
					var s = Boolean(e && u && n && (null == n ? void 0 : n.trader) && ((null == n ? void 0 : n.makerSideTokenAmount) && (null == n ? void 0 : n.makerSideTokenAmount) !== "0" || (null == n ? void 0 : n.takerSideTokenAmount) && (null == n ? void 0 : n.takerSideTokenAmount) !== "0")),
						c = (0, eP.a)(["RFQ/".concat(t.current)], function() {
							return e_(n)
						}, {
							refetchInterval: 2e4,
							retry: !0,
							refetchOnWindowFocus: !1,
							enabled: s
						}),
						l = c.data,
						d = c.refetch,
						p = c.isLoading;
					return (null == l ? void 0 : null === (o = l.message) || void 0 === o ? void 0 : o.rfqId) || (r.current = !1), {
						rfqId: null !== (a = null == l ? void 0 : null === (i = l.message) || void 0 === i ? void 0 : i.rfqId) && void 0 !== a ? a : "",
						refreshRFQ: d,
						rfqUserInputCache: t.current,
						isLoading: s && p
					}
				},
				e7 = function(n, e, t, r, o, i, a) {
					var u = (0, k.useDeferredValue)(n),
						s = Boolean((0, eS.Nr)(o, 300) && u),
						c = (0, v.Z)((0, k.useState)({
							error: null,
							data: null,
							isLoading: !1
						}), 2),
						d = c[0],
						p = d.error,
						m = d.data,
						f = d.isLoading,
						h = c[1],
						x = (0, eP.a)(["RFQ/".concat(u)], function() {
							return ez(u)
						}, {
							enabled: s,
							staleTime: 1 / 0,
							retry: function(n, e) {
								return e instanceof eq ? e.shouldRetry : n < 4
							}
						}),
						g = x.error,
						y = x.data,
						b = x.isLoading,
						j = e === V.gN.INPUT;
					return (0, k.useEffect)(function() {
						h(function(n) {
							if (!s) return {
								error: null,
								data: null,
								isLoading: !1
							};
							var e = n.data;
							return {
								error: g,
								data: n && b ? e : y,
								isLoading: b
							}
						})
					}, [g, y, b, s]), (0, k.useMemo)(function() {
						if (p && p instanceof Error && (null == p ? void 0 : p.message)) return a && (a.current = !1), {
							rfq: null,
							trade: null,
							quoteExpiry: null,
							refreshRFQ: null,
							error: p,
							rfqId: n,
							isLoading: s && f
						};
						if ((null == m ? void 0 : m.messageType) === l.RFQ_RESPONSE) {
							var e, o, u, c;
							return a && (a.current = !0), {
								rfq: null == m ? void 0 : m.message,
								rfqId: n,
								trade: e3(j, t, r, null == m ? void 0 : null === (e = m.message) || void 0 === e ? void 0 : e.takerSideTokenAmount, null == m ? void 0 : null === (o = m.message) || void 0 === o ? void 0 : o.makerSideTokenAmount),
								quoteExpiry: null !== (c = null == m ? void 0 : null === (u = m.message) || void 0 === u ? void 0 : u.quoteExpiry) && void 0 !== c ? c : null,
								refreshRFQ: i,
								isLoading: s && f
							}
						}
						return a && (a.current = !1), {
							rfq: null,
							trade: null,
							quoteExpiry: null,
							isLoading: s && f,
							refreshRFQ: null
						}
					}, [null == m ? void 0 : m.message, null == m ? void 0 : m.messageType, s, p, t, j, f, a, r, i, n])
				},
				tn = function(n) {
					var e = n.independentField,
						t = n.trade,
						r = n.v2Trade,
						o = n.tradeWithMM,
						i = n.isExpertMode,
						a = void 0 !== i && i;
					return (0, k.useMemo)(function() {
						var n, i, u, s, c, l, d, p, m = e === V.gN.INPUT;
						return !(a || !o || o.inputAmount.equalTo(N.xE) || o.outputAmount.equalTo(N.xE)) && (!r && !t && !!o || (r && !t ? (null == r || !r.outputAmount || null == r || !r.inputAmount) && !!o || m && o.outputAmount.greaterThan(null !== (n = null == r ? void 0 : r.outputAmount) && void 0 !== n ? n : N.xE) || !m && o.inputAmount.lessThan(null !== (i = null == r ? void 0 : r.inputAmount) && void 0 !== i ? i : N.xE) : !r && t ? (null == t || !t.outputAmount || null == t || !t.inputAmount) && !!o || m && o.outputAmount.greaterThan(null !== (u = null == t ? void 0 : t.outputAmount) && void 0 !== u ? u : N.xE) || !m && o.inputAmount.lessThan(null !== (s = null == t ? void 0 : t.inputAmount) && void 0 !== s ? s : N.xE) : m && o.outputAmount.greaterThan(null !== (c = null == t ? void 0 : t.outputAmount) && void 0 !== c ? c : N.xE) && o.outputAmount.greaterThan(null !== (l = null == r ? void 0 : r.outputAmount) && void 0 !== l ? l : N.xE) || !m && o.inputAmount.lessThan(null !== (d = null == t ? void 0 : t.inputAmount) && void 0 !== d ? d : N.xE) && o.inputAmount.lessThan(null !== (p = null == r ? void 0 : r.inputAmount) && void 0 !== p ? p : N.xE)))
					}, [t, r, o, a, e])
				},
				te = t(76954),
				tt = t(81231),
				tr = t(44257),
				to = function(n, e, t, r, o, i) {
					var a = (0, et.Z)(),
						u = a.account,
						s = a.chainId;
					return (0, k.useMemo)(function() {
						return n && s && r && o && o && e && t ? {
							networkId: s,
							takerSideToken: (null == r ? void 0 : r.isToken) ? r.address : i ? eJ : r.wrapped.address,
							makerSideToken: (null == o ? void 0 : o.isToken) ? o.address : i ? eJ : o.wrapped.address,
							takerSideTokenAmount: e === V.gN.INPUT && t && "0" !== t ? e6(t, r.decimals) : void 0,
							makerSideTokenAmount: e === V.gN.OUTPUT && t && "0" !== t ? e6(t, null == o ? void 0 : o.decimals) : void 0,
							trader: null != u ? u : "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
						} : null
					}, [s, r, o, e, t, u, n, i])
				},
				ti = t(49425),
				ta = t(47186),
				tu = function() {
					var n = (0, et.Z)().chainId;
					return (0, k.useMemo)(function() {
						return Boolean(e0[n])
					}, [n])
				},
				ts = {
					1: nB.GX,
					56: nB.JA
				},
				tc = function(n) {
					var e = (0, U.Dv)(nR.Ti)[null != n ? n : ""];
					return (0, k.useMemo)(function() {
						var n = {};
						return (null == e ? void 0 : e.current) && (null == e || e.current.tokens.forEach(function(e) {
							n[e.address.toLowerCase()] = e.address.toLowerCase()
						})), n
					}, [e])
				},
				tl = function(n, e) {
					var t = (0, et.Z)().chainId,
						r = tc(ts[t]),
						o = tu(),
						i = (0, ta.mA)(),
						a = i.connector,
						u = i.isConnected;
					return (0, k.useMemo)(function() {
						var i;
						return !(!o || !t || !r || !n || !e || u && ((null == a ? void 0 : a.id) === ti.Mt.Blocto || (null == a ? void 0 : a.id) === "safe" || Boolean(null === (i = window.ethereum) || void 0 === i ? void 0 : i.isBlocto))) && (t !== N.a_.BSC || !n.isToken || !e.isToken || !e9[t][n.address] || !e9[t][e.address]) && !!r[(n.isToken ? n.address : (0, n.wrapped.address)).toLowerCase()] && !!r[(e.isToken ? e.address : (0, n.wrapped.address)).toLowerCase()]
					}, [o, t, r, n, e, u, null == a ? void 0 : a.id])
				},
				td = ["0xaE4EC9901c3076D0DdBe76A520F9E90a6227aCB7", "0xf164fC0Ec4E93095b804a4795bBe1e041497b92a", "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"],
				tp = function(n, e, t, r) {
					var o = (0, v.Z)((0, tr.k)(), 1)[0],
						i = "".concat(null == n ? void 0 : n.networkId, "/").concat(null == n ? void 0 : n.makerSideToken, "/").concat(null == n ? void 0 : n.takerSideToken, "/").concat(null == n ? void 0 : n.makerSideTokenAmount, "/").concat(null == n ? void 0 : n.takerSideTokenAmount),
						a = "".concat(null == e ? void 0 : e.networkId, "/").concat(null == e ? void 0 : e.makerSideToken, "/").concat(null == e ? void 0 : e.takerSideToken, "/").concat(null == e ? void 0 : e.makerSideTokenAmount, "/").concat(null == e ? void 0 : e.takerSideTokenAmount),
						u = Boolean(o && n && n.trader && (n.makerSideTokenAmount || n.takerSideTokenAmount) && "0" !== n.makerSideTokenAmount && "0" !== n.takerSideTokenAmount && !(Boolean(null == r ? void 0 : r.current) && Boolean(a === (null == t ? void 0 : t.current) && (null == t ? void 0 : t.current) !== void 0))),
						s = (0, eP.a)(["orderBook/".concat(i)], function() {
							return eO(n)
						}, {
							refetchInterval: 5e3,
							enabled: u
						}),
						c = s.data,
						l = s.isLoading;
					return {
						data: o ? c : void 0,
						isLoading: u && l
					}
				},
				tm = function(n, e, t, r) {
					var o, i = (0, y.$G)().t,
						a = (0, et.Z)().account,
						u = (0, k.useRef)(""),
						s = (0, k.useRef)(!1),
						c = tl(t, r),
						l = to(c, n, e, t, r),
						d = to(c, n, e, t, r, !0),
						p = tp(l, d, u, s),
						m = p.data,
						f = p.isLoading,
						h = null != a ? a : null,
						x = (0, tt.K5)(null != a ? a : void 0, (0, k.useMemo)(function() {
							return [null != t ? t : void 0, null != r ? r : void 0]
						}, [t, r])),
						b = n === V.gN.INPUT,
						j = b ? t : r,
						C = (0, k.useMemo)(function() {
							return (0, te.Z)(e, null != j ? j : void 0)
						}, [e, j]),
						Z = (0, k.useMemo)(function() {
							if (!t || !r || !m || !(null == m ? void 0 : null === (n = m.message) || void 0 === n ? void 0 : n.takerSideTokenAmount)) return null;
							var n, e = (null == m ? void 0 : m.message) || {};
							return e3(b, t, r, e.takerSideTokenAmount, e.makerSideTokenAmount)
						}, [t, b, m, r]),
						T = (0, k.useMemo)(function() {
							var n;
							return n = {}, (0, g.Z)(n, V.gN.INPUT, x[0]), (0, g.Z)(n, V.gN.OUTPUT, x[1]), n
						}, [x]),
						w = (0, k.useMemo)(function() {
							var n;
							return n = {}, (0, g.Z)(n, V.gN.INPUT, null != t ? t : void 0), (0, g.Z)(n, V.gN.OUTPUT, null != r ? r : void 0), n
						}, [t, r]),
						A = (0, k.useMemo)(function() {
							var n;
							return Z && (n = {}, (0, g.Z)(n, V.gN.INPUT, Z.inputAmount), (0, g.Z)(n, V.gN.OUTPUT, Z.outputAmount), n)
						}, [Z]),
						S = (0, v.Z)((0, k.useMemo)(function() {
							return [T[V.gN.INPUT], A ? A[V.gN.INPUT] : null]
						}, [T, A]), 2),
						I = S[0],
						P = S[1],
						U = (0, k.useMemo)(function() {
							a || (e = i("Connect Wallet")), C || (e = null != e ? e : i("Enter an amount")), w[V.gN.INPUT] && w[V.gN.OUTPUT] || (e = null != e ? e : i("Select a token"));
							var n, e, t, r = (0, np.UJ)(h);
							return h && r ? (-1 !== td.indexOf(r) || Z && (Z.route.path.some(function(n) {
								return n.isToken && n.address === r
							}) || Z.route.pairs.some(function(n) {
								var e;
								return (null == n ? void 0 : null === (e = n.liquidityToken) || void 0 === e ? void 0 : e.address) === r
							}))) && (e = null != e ? e : i("Invalid recipient")) : e = null != e ? e : i("Enter a recipient"), I && P && I.lessThan(P) && (e = i("Insufficient %symbol% balance", {
								symbol: P.currency.symbol
							})), (null == m ? void 0 : null === (n = m.message) || void 0 === n ? void 0 : n.error) && (e = null == m ? void 0 : null === (t = m.message) || void 0 === t ? void 0 : t.error), e
						}, [a, P, I, Z, w, null == m ? void 0 : null === (o = m.message) || void 0 === o ? void 0 : o.error, C, i, h]);
					return (0, k.useMemo)(function() {
						return {
							trade: Z,
							parsedAmount: C,
							currencyBalances: T,
							currencies: w,
							inputError: U,
							mmParam: d,
							rfqUserInputPath: u,
							isRFQLive: s,
							isLoading: f
						}
					}, [Z, w, T, U, f, d, C])
				},
				tf = function(n, e) {
					var t = (0, k.useRef)(!1),
						r = (0, v.Z)((0, k.useState)(null), 2),
						o = r[0],
						i = r[1];
					return (0, k.useEffect)(function() {
						var r;
						return t.current = !1, n && (r = setInterval(function() {
								var r = Math.floor((1e3 * n - Date.now()) / 1e3 % 60);
								i(r > 0 ? r : null), !t.current && r && r > 0 && 24 === r && e && (null == e || e(), t.current = !0)
							}, 1e3)),
							function() {
								r && (clearInterval(r), i(null))
							}
					}, [n, e]), o
				},
				th = t(53496),
				tx = t(59741),
				tg = t(73490),
				tv = (0, k.memo)(function(n) {
					var e = n.title,
						t = n.subtitle;
					return (0, h.jsxs)(tg.p, {
						width: "100%",
						alignItems: "center",
						flexDirection: "column",
						padding: "24px",
						borderBottom: "1",
						children: [(0, h.jsx)(tg.p, {
							display: "flex",
							width: "100%",
							alignItems: "center",
							justifyContent: "space-between",
							children: e
						}), t]
					})
				}),
				ty = (0, k.memo)(function(n) {
					var e = n.children;
					return (0, h.jsx)(ei.Z, {
						as: "h2",
						children: e
					})
				}),
				tb = (0, k.memo)(function(n) {
					var e = n.children;
					return (0, h.jsx)(nr.Z, {
						color: "textSubtle",
						fontSize: "14px",
						textAlign: "center",
						children: e
					})
				}),
				tj = t(97989),
				tC = t(69546),
				tZ = function(n) {
					return (0, h.jsxs)(nu.Z, (0, na.Z)((0, ni.Z)({
						viewBox: "0 0 24 24"
					}, n), {
						children: [(0, h.jsx)("path", {
							d: "M22.5 2l-20 20",
							stroke: "currentColor",
							strokeWidth: 2,
							strokeLinecap: "round"
						}), (0, h.jsx)("path", {
							fillRule: "evenodd",
							clipRule: "evenodd",
							d: "M7.66 20.372A7.966 7.966 0 0012.5 22c4.42 0 8-3.58 8-8 0-1.935-.332-3.793-.94-5.527l-2.851 2.851c.192.935.291 1.902.291 2.876.01 2.65-2.14 4.8-4.79 4.8a3.253 3.253 0 01-2.268-.909L7.66 20.372zM17.099 3.87a17.38 17.38 0 00-1.908-2.16c-.35-.34-.94-.02-.84.46.19.94.39 2.18.39 3.29 0 .292-.027.576-.08.848l2.438-2.438zM11.81 9.16c-.155.02-.315.031-.48.031-1.54 0-2.8-.93-3.35-2.26-.1-.2-.14-.32-.2-.54-.11-.42-.66-.55-.9-.18-.18.27-.35.54-.51.83A13.772 13.772 0 004.5 14c0 .752.104 1.48.298 2.17L11.81 9.16z"
						})]
					}))
				},
				tT = t(12076),
				tw = t(1741),
				tA = t(27540),
				tk = t(31578),
				tS = t(26297),
				tI = function(n) {
					return (0, h.jsxs)(nu.Z, (0, na.Z)((0, ni.Z)({
						id: "arrow_loading",
						viewBox: "0 0 24 24"
					}, n), {
						children: [(0, h.jsx)("path", {
							stroke: "none",
							fill: "#D7CAEC",
							d: "M16.2751 7.78995C13.932 5.44681 10.133 5.44681 7.78986 7.78995C7.02853 8.55128 6.51457 9.4663 6.24798 10.4351C6.24473 10.4499 6.24114 10.4646 6.23719 10.4793C6.17635 10.7064 6.12938 10.9339 6.09577 11.161C5.83159 12.9457 6.39255 14.7026 7.52624 15.9944C7.61054 16.0901 7.69842 16.1838 7.78986 16.2752C8.08307 16.5685 8.39909 16.825 8.7322 17.0448C9.25533 17.3892 9.84172 17.6568 10.4798 17.8278C10.7386 17.8971 10.9979 17.9484 11.2565 17.9825C12.9537 18.2061 14.6187 17.6866 15.8747 16.6415C16.0123 16.5265 16.1459 16.4044 16.2751 16.2752C16.2848 16.2655 16.2947 16.2561 16.3047 16.2469C17.0123 15.531 17.5491 14.627 17.8283 13.5851C17.9712 13.0517 18.5196 12.7351 19.053 12.878C19.5865 13.021 19.9031 13.5693 19.7602 14.1028C19.3141 15.7676 18.3745 17.1684 17.1409 18.1899C16.1883 18.9822 15.0949 19.5189 13.9515 19.8002C11.8607 20.3147 9.6028 19.9749 7.7328 18.7809C7.06855 18.3579 6.47841 17.8432 5.97519 17.2589C5.12341 16.2738 4.55173 15.1302 4.26015 13.9324C4.01698 12.9416 3.96104 11.8931 4.12168 10.8379C4.36697 9.20484 5.1183 7.63309 6.37564 6.37574C9.49984 3.25154 14.5652 3.25154 17.6894 6.37574L18.2332 6.91959L18.2337 5.49951C18.2338 5.05769 18.5921 4.69964 19.034 4.69979C19.4758 4.69995 19.8338 5.05825 19.8337 5.50007L19.8325 9.03277L19.8322 9.8325L19.0325 9.83249L18.9401 9.83249C18.8146 9.85665 18.6854 9.85665 18.5599 9.83248L15.5005 9.83245C15.0587 9.83245 14.7005 9.47427 14.7005 9.03244C14.7005 8.59062 15.0587 8.23245 15.5005 8.23245L16.7176 8.23246L16.2751 7.78995Z"
						}), (0, h.jsxs)("defs", {
							children: [(0, h.jsx)("path", {
								id: "arrow",
								stroke: "none",
								fill: "none",
								d: "M16.2751 7.78995C13.932 5.44681 10.133 5.44681 7.78986 7.78995C7.02853 8.55128 6.51457 9.4663 6.24798 10.4351C6.24473 10.4499 6.24114 10.4646 6.23719 10.4793C6.17635 10.7064 6.12938 10.9339 6.09577 11.161C5.83159 12.9457 6.39255 14.7026 7.52624 15.9944C7.61054 16.0901 7.69842 16.1838 7.78986 16.2752C8.08307 16.5685 8.39909 16.825 8.7322 17.0448C9.25533 17.3892 9.84172 17.6568 10.4798 17.8278C10.7386 17.8971 10.9979 17.9484 11.2565 17.9825C12.9537 18.2061 14.6187 17.6866 15.8747 16.6415C16.0123 16.5265 16.1459 16.4044 16.2751 16.2752C16.2848 16.2655 16.2947 16.2561 16.3047 16.2469C17.0123 15.531 17.5491 14.627 17.8283 13.5851C17.9712 13.0517 18.5196 12.7351 19.053 12.878C19.5865 13.021 19.9031 13.5693 19.7602 14.1028C19.3141 15.7676 18.3745 17.1684 17.1409 18.1899C16.1883 18.9822 15.0949 19.5189 13.9515 19.8002C11.8607 20.3147 9.6028 19.9749 7.7328 18.7809C7.06855 18.3579 6.47841 17.8432 5.97519 17.2589C5.12341 16.2738 4.55173 15.1302 4.26015 13.9324C4.01698 12.9416 3.96104 11.8931 4.12168 10.8379C4.36697 9.20484 5.1183 7.63309 6.37564 6.37574C9.49984 3.25154 14.5652 3.25154 17.6894 6.37574L18.2332 6.91959L18.2337 5.49951C18.2338 5.05769 18.5921 4.69964 19.034 4.69979C19.4758 4.69995 19.8338 5.05825 19.8337 5.50007L19.8325 9.03277L19.8322 9.8325L19.0325 9.83249L18.9401 9.83249C18.8146 9.85665 18.6854 9.85665 18.5599 9.83248L15.5005 9.83245C15.0587 9.83245 14.7005 9.47427 14.7005 9.03244C14.7005 8.59062 15.0587 8.23245 15.5005 8.23245L16.7176 8.23246L16.2751 7.78995Z"
							}), (0, h.jsx)("clipPath", {
								id: "arrow-clip",
								children: (0, h.jsx)("use", {
									xlinkHref: "#arrow"
								})
							})]
						})]
					}))
				},
				tP = function(n) {
					var e = n.disabled,
						t = n.duration,
						r = (0, tS.Z)(n, ["disabled", "duration"]);
					return e ? (0, h.jsx)(tI, (0, ni.Z)({}, r)) : (0, h.jsxs)(nu.Z, (0, na.Z)((0, ni.Z)({
						id: "arrow_loading",
						viewBox: "0 0 24 24"
					}, r), {
						children: [(0, h.jsx)("path", {
							stroke: "none",
							fill: "#7A6EAA",
							d: "M16.2751 7.78995C13.932 5.44681 10.133 5.44681 7.78986 7.78995C7.02853 8.55128 6.51457 9.4663 6.24798 10.4351C6.24473 10.4499 6.24114 10.4646 6.23719 10.4793C6.17635 10.7064 6.12938 10.9339 6.09577 11.161C5.83159 12.9457 6.39255 14.7026 7.52624 15.9944C7.61054 16.0901 7.69842 16.1838 7.78986 16.2752C8.08307 16.5685 8.39909 16.825 8.7322 17.0448C9.25533 17.3892 9.84172 17.6568 10.4798 17.8278C10.7386 17.8971 10.9979 17.9484 11.2565 17.9825C12.9537 18.2061 14.6187 17.6866 15.8747 16.6415C16.0123 16.5265 16.1459 16.4044 16.2751 16.2752C16.2848 16.2655 16.2947 16.2561 16.3047 16.2469C17.0123 15.531 17.5491 14.627 17.8283 13.5851C17.9712 13.0517 18.5196 12.7351 19.053 12.878C19.5865 13.021 19.9031 13.5693 19.7602 14.1028C19.3141 15.7676 18.3745 17.1684 17.1409 18.1899C16.1883 18.9822 15.0949 19.5189 13.9515 19.8002C11.8607 20.3147 9.6028 19.9749 7.7328 18.7809C7.06855 18.3579 6.47841 17.8432 5.97519 17.2589C5.12341 16.2738 4.55173 15.1302 4.26015 13.9324C4.01698 12.9416 3.96104 11.8931 4.12168 10.8379C4.36697 9.20484 5.1183 7.63309 6.37564 6.37574C9.49984 3.25154 14.5652 3.25154 17.6894 6.37574L18.2332 6.91959L18.2337 5.49951C18.2338 5.05769 18.5921 4.69964 19.034 4.69979C19.4758 4.69995 19.8338 5.05825 19.8337 5.50007L19.8325 9.03277L19.8322 9.8325L19.0325 9.83249L18.9401 9.83249C18.8146 9.85665 18.6854 9.85665 18.5599 9.83248L15.5005 9.83245C15.0587 9.83245 14.7005 9.47427 14.7005 9.03244C14.7005 8.59062 15.0587 8.23245 15.5005 8.23245L16.7176 8.23246L16.2751 7.78995Z"
						}), (0, h.jsxs)("defs", {
							children: [(0, h.jsx)("path", {
								id: "arrow",
								stroke: "none",
								fill: "none",
								d: "M16.2751 7.78995C13.932 5.44681 10.133 5.44681 7.78986 7.78995C7.02853 8.55128 6.51457 9.4663 6.24798 10.4351C6.24473 10.4499 6.24114 10.4646 6.23719 10.4793C6.17635 10.7064 6.12938 10.9339 6.09577 11.161C5.83159 12.9457 6.39255 14.7026 7.52624 15.9944C7.61054 16.0901 7.69842 16.1838 7.78986 16.2752C8.08307 16.5685 8.39909 16.825 8.7322 17.0448C9.25533 17.3892 9.84172 17.6568 10.4798 17.8278C10.7386 17.8971 10.9979 17.9484 11.2565 17.9825C12.9537 18.2061 14.6187 17.6866 15.8747 16.6415C16.0123 16.5265 16.1459 16.4044 16.2751 16.2752C16.2848 16.2655 16.2947 16.2561 16.3047 16.2469C17.0123 15.531 17.5491 14.627 17.8283 13.5851C17.9712 13.0517 18.5196 12.7351 19.053 12.878C19.5865 13.021 19.9031 13.5693 19.7602 14.1028C19.3141 15.7676 18.3745 17.1684 17.1409 18.1899C16.1883 18.9822 15.0949 19.5189 13.9515 19.8002C11.8607 20.3147 9.6028 19.9749 7.7328 18.7809C7.06855 18.3579 6.47841 17.8432 5.97519 17.2589C5.12341 16.2738 4.55173 15.1302 4.26015 13.9324C4.01698 12.9416 3.96104 11.8931 4.12168 10.8379C4.36697 9.20484 5.1183 7.63309 6.37564 6.37574C9.49984 3.25154 14.5652 3.25154 17.6894 6.37574L18.2332 6.91959L18.2337 5.49951C18.2338 5.05769 18.5921 4.69964 19.034 4.69979C19.4758 4.69995 19.8338 5.05825 19.8337 5.50007L19.8325 9.03277L19.8322 9.8325L19.0325 9.83249L18.9401 9.83249C18.8146 9.85665 18.6854 9.85665 18.5599 9.83248L15.5005 9.83245C15.0587 9.83245 14.7005 9.47427 14.7005 9.03244C14.7005 8.59062 15.0587 8.23245 15.5005 8.23245L16.7176 8.23246L16.2751 7.78995Z"
							}), (0, h.jsx)("clipPath", {
								id: "arrow-clip",
								children: (0, h.jsx)("use", {
									xlinkHref: "#arrow"
								})
							})]
						}), (0, h.jsx)("g", {
							clipPath: "url(#arrow-clip)",
							children: (0, h.jsx)("circle", {
								cx: "12",
								cy: "12",
								r: "5",
								transform: "rotate(365,12,12)",
								fill: "none",
								stroke: "#D7CAEC",
								strokeWidth: "16",
								strokeDasharray: "30",
								strokeDashoffset: "0",
								children: (0, h.jsx)("animate", {
									attributeName: "stroke-dashoffset",
									values: "0;-30",
									begin: "arrow_loading.click; 0.7s",
									repeatCount: "indefinite",
									dur: "".concat(t || 6.3, "s")
								})
							})
						}), (0, h.jsx)("use", {
							xlinkHref: "#arrow"
						}), (0, h.jsx)("animateTransform", {
							id: "transform_0",
							attributeName: "transform",
							attributeType: "XML",
							type: "rotate",
							from: "0 0 0",
							to: "-10 0 0",
							dur: "0.07s",
							begin: "arrow_loading.click;",
							repeatCount: "1"
						}), (0, h.jsx)("animateTransform", {
							id: "transform_1",
							attributeName: "transform",
							attributeType: "XML",
							type: "rotate",
							from: "-45 0 0",
							to: "390 0 0",
							dur: "0.6s",
							begin: "transform_0.end",
							repeatCount: "1"
						}), (0, h.jsx)("animateTransform", {
							id: "transform_2",
							attributeName: "transform",
							attributeType: "XML",
							type: "rotate",
							from: "390 0 0",
							to: "360 0 0",
							dur: "0.15s",
							begin: "transform_1.end",
							repeatCount: "1"
						})]
					}))
				},
				tU = t(68646),
				tE = t(84779),
				tN = t(74877),
				tM = t(66582),
				tD = t(30688);

			function tF() {
				var n = (0, $.Z)(["\n  color: ", ";\n  overflow: hidden;\n"]);
				return tF = function() {
					return n
				}, n
			}
			var tL = (0, J.ZP)(th.Z).withConfig({
					componentId: "sc-4346abb-0"
				})(tF(), function(n) {
					return n.theme.colors.textSubtle
				}),
				tB = (0, E.Z)("pcs::mobileShowOnceTokenHighlightV2", !0),
				tR = (0, k.memo)(function(n) {
					var e = n.subtitle,
						t = n.title,
						r = n.hasAmount,
						o = n.onRefreshPrice,
						i = (0, y.$G)().t,
						a = (0, D.g)().chainId,
						u = (0, v.Z)((0, U.KO)(tB), 2),
						s = u[0],
						c = u[1],
						l = (0, v.Z)((0, k.useState)(!1), 2),
						d = l[0],
						p = l[1],
						m = (0, tx.Z)((0, h.jsx)(nr.Z, {
							children: i("Check out the top traded tokens")
						}), (0, ni.Z)({
							placement: tM.tq ? "top" : "bottom",
							trigger: tM.tq ? "focus" : "hover"
						}, tM.tq && {
							manualVisible: d
						})),
						f = m.tooltip,
						x = m.tooltipVisible,
						g = m.targetRef,
						b = (0, k.useContext)(F),
						C = b.isChartSupported,
						Z = b.isChartDisplayed,
						T = b.setIsChartDisplayed,
						w = (0, v.Z)((0, eI.zu)(), 1)[0],
						A = (0, v.Z)((0, tN.pW)(), 1)[0],
						S = function() {
							T(function(n) {
								return !n
							})
						},
						I = (0, v.Z)((0, n$.Z)((0, h.jsx)(tU.Z, {})), 1)[0],
						P = (0, v.Z)(G(), 2),
						E = P[0],
						N = P[1],
						M = (0, k.useCallback)(function() {
							p(!1)
						}, []);
					(0, k.useEffect)(function() {
						tM.tq && !s && (p(!0), c(!0))
					}, [s, c]), (0, k.useEffect)(function() {
						return document.body.addEventListener("click", M),
							function() {
								document.body.removeEventListener("click", M)
							}
					}, [M]);
					var L = (0, h.jsxs)(j.Z, {
						width: "100%",
						alignItems: "center",
						justifyContent: "space-between",
						flexDirection: "column",
						children: [(0, h.jsx)(j.Z, {
							flexDirection: "column",
							alignItems: "flex-start",
							width: "100%",
							marginBottom: 15,
							children: (0, h.jsx)(ty, {
								children: t
							})
						}), (0, h.jsx)(j.Z, {
							justifyContent: "start",
							width: "100%",
							height: "17px",
							alignItems: "center",
							mb: "14px",
							children: (0, h.jsx)(tb, {
								children: e
							})
						}), (0, h.jsxs)(j.Z, {
							width: "100%",
							justifyContent: "end",
							children: [C && T && (0, h.jsx)(tL, {
								onClick: function() {
									!Z && E && N(!1), S()
								},
								variant: "text",
								scale: "sm",
								children: Z ? (0, h.jsx)(tj.Z, {
									color: "textSubtle"
								}) : (0, h.jsx)(tC.Z, {
									width: "24px",
									color: "textSubtle"
								})
							}), (0, h.jsx)(tL, {
								variant: "text",
								scale: "sm",
								onClick: function() {
									!E && Z && S(), N(!E)
								},
								children: E ? (0, h.jsx)(tZ, {
									color: "textSubtle",
									width: "24px"
								}) : (0, h.jsxs)(h.Fragment, {
									children: [(0, h.jsx)(tT.Z, {
										ref: g,
										onClick: function() {
											return p(!1)
										},
										display: "flex",
										style: {
											justifyContent: "center"
										},
										children: (0, h.jsx)(tw.Z, {
											color: "textSubtle",
											width: "24px"
										})
									}), x && (!tM.tq || d) && f]
								})
							}), (0, h.jsx)(tA.Z, {
								show: w || A,
								children: (0, h.jsx)(tE.Z, {
									color: "textSubtle",
									mr: "0",
									mode: tD.a.SWAP_LIQUIDITY
								})
							}), (0, h.jsx)(th.Z, {
								onClick: I,
								variant: "text",
								scale: "sm",
								children: (0, h.jsx)(tk.Z, {
									color: "textSubtle",
									width: "24px"
								})
							}), (0, h.jsx)(th.Z, {
								variant: "text",
								scale: "sm",
								onClick: o,
								children: (0, h.jsx)(tP, {
									disabled: !r,
									color: "textSubtle",
									width: "27px",
									duration: eH.qI[a] ? eH.qI[a] / 1e3 : void 0
								})
							})]
						})]
					});
					return (0, h.jsx)(tv, {
						title: L,
						subtitle: (0, h.jsx)(h.Fragment, {})
					})
				}),
				tO = function(n) {
					var e = n.refreshDisabled,
						t = n.onRefresh,
						r = (0, y.$G)().t,
						o = (0, k.useCallback)(function() {
							e || t()
						}, [t, e]);
					return (0, h.jsx)(tR, {
						title: r("Swap"),
						subtitle: r("Trade tokens in an instant"),
						hasAmount: !e,
						onRefreshPrice: o
					})
				},
				t_ = t(64843),
				tz = t(50433),
				tq = t(97735),
				tG = t(78379),
				tW = t(84528),
				tV = t(79026),
				tX = t(33657),
				tH = (0, k.memo)(function(n) {
					var e = n.children;
					return (0, h.jsx)(tX.im, {
						id: "swap-page",
						style: {
							minHeight: "412px"
						},
						children: (0, h.jsx)(tV.sg, {
							gap: "sm",
							children: e
						})
					})
				}),
				tQ = t(97299),
				t$ = t(60803),
				tY = t(8129),
				tK = t(8216),
				tJ = t(70372),
				t0 = (0, k.memo)(function(n) {
					var e = n.path;
					return (0, h.jsx)(j.Z, {
						flexWrap: "wrap",
						width: "100%",
						justifyContent: "flex-end",
						alignItems: "center",
						children: e.map(function(n, t) {
							var r = t === e.length - 1,
								o = n.isToken ? (0, tJ.Bv)(n) : n;
							return (0, h.jsxs)(k.Fragment, {
								children: [(0, h.jsx)(j.Z, {
									alignItems: "end",
									children: (0, h.jsx)(nr.Z, {
										fontSize: "14px",
										ml: "0.125rem",
										mr: "0.125rem",
										color: "textSubtle",
										children: o.symbol
									})
								}), !r && (0, h.jsx)(tK.Z, {
									width: "12px"
								})]
							}, "".concat(o.symbol, "_").concat(t))
						})
					})
				}),
				t1 = t(97629),
				t9 = t(70229);

			function t2() {
				var n = (0, $.Z)(["\n  position: relative;\n  flex-direction: row;\n\n  &:before {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 0;\n    width: 100%;\n    height: 3px;\n    border-top: 3px dotted ", ";\n    transform: translateY(-50%);\n    z-index: 1;\n  }\n\n  ", " {\n    min-width: 400px;\n  }\n"]);
				return t2 = function() {
					return n
				}, n
			}

			function t5() {
				var n = (0, $.Z)(["\n  position: relative;\n  border-radius: 50px;\n  display: flex;\n  flex-direction: row;\n  padding: 2px 4px;\n  background-color: ", ";\n  z-index: 2;\n  svg,\n  img {\n    &:first-child {\n      margin-bottom: 2px;\n      ", " {\n        margin-bottom: 0px;\n        margin-right: 2px;\n      }\n    }\n  }\n  &.isStableSwap,\n  &.highlight {\n    background-color: ", ";\n  }\n  ", " {\n    padding: 4px 8px;\n  }\n"]);
				return t5 = function() {
					return n
				}, n
			}

			function t4() {
				var n = (0, $.Z)(["\n  font-size: 14px;\n  line-height: 16px;\n  color: ", ";\n  position: absolute;\n  transform: translateY(-50%);\n  white-space: nowrap;\n  left: 50%;\n  transform: translateX(-50%);\n  top: calc(100% + 3px);\n  font-weight: ", ";\n\n  ", " {\n    font-size: 16px;\n    line-height: 20px;\n  }\n"]);
				return t4 = function() {
					return n
				}, n
			}

			function t6() {
				var n = (0, $.Z)(["\n  position: relative;\n  padding: 2px;\n  background: linear-gradient(180deg, #53dee9 0%, #7645d9 76.22%);\n  border-radius: 50%;\n  z-index: 2;\n"]);
				return t6 = function() {
					return n
				}, n
			}
			var t3 = ek.mh.isStableSwapPair,
				t8 = (0, J.ZP)(j.Z).withConfig({
					componentId: "sc-a3ac9d34-0"
				})(t2(), function(n) {
					return n.theme.colors.backgroundDisabled
				}, function(n) {
					return n.theme.mediaQueries.md
				}),
				t7 = (0, J.ZP)(nd.ZP).withConfig({
					componentId: "sc-a3ac9d34-1"
				})(t5(), function(n) {
					return n.theme.colors.backgroundDisabled
				}, function(n) {
					return n.theme.mediaQueries.md
				}, function(n) {
					return n.theme.colors.secondary
				}, function(n) {
					return n.theme.mediaQueries.md
				}),
				rn = J.ZP.div.withConfig({
					componentId: "sc-a3ac9d34-2"
				})(t4(), function(n) {
					return n.theme.colors.text
				}, function(n) {
					return n.fontWeight || "normal"
				}, function(n) {
					return n.theme.mediaQueries.md
				}),
				re = (0, J.ZP)(tg.p).withConfig({
					componentId: "sc-a3ac9d34-3"
				})(t6()),
				rt = function(n) {
					var e = n.pairs,
						t = n.path,
						r = n.inputCurrency,
						o = n.outputCurrency,
						i = n.isMM,
						a = void 0 !== i && i,
						u = (0, y.$G)().t,
						s = (0, tx.Z)((0, h.jsx)(nr.Z, {
							children: r.symbol
						}), {
							placement: "right"
						}),
						c = s.targetRef,
						l = s.tooltip,
						d = s.tooltipVisible,
						p = (0, tx.Z)((0, h.jsx)(nr.Z, {
							children: o.symbol
						}), {
							placement: "right"
						}),
						m = p.targetRef,
						f = p.tooltip,
						x = p.tooltipVisible;
					return (0, h.jsxs)(t8, {
						justifyContent: "space-between",
						alignItems: "center",
						children: [(0, h.jsx)(re, {
							ref: c,
							children: (0, h.jsx)(t1.X, {
								size: "44px",
								currency: r
							})
						}), d && l, e && t && !a && e.map(function(n, i) {
							var a = t3(n);
							return (0, h.jsxs)(t7, {
								className: a && "isStableSwap",
								children: [(0, h.jsx)(t1.X, {
									size: "32px",
									currency: 0 === i ? r : t[i]
								}), (0, h.jsx)(t1.X, {
									size: "32px",
									currency: i === e.length - 1 ? o : t[i + 1]
								}), (0, h.jsx)(rn, {
									children: a ? u("StableSwap") : "V2"
								})]
							}, "tradingPairIds".concat(a ? n.stableSwapAddress : n.liquidityToken.address))
						}), a && t && (0, h.jsxs)(t7, {
							children: [(0, h.jsx)(t1.X, {
								size: "32px",
								currency: r
							}), (0, h.jsx)(t1.X, {
								size: "32px",
								currency: o
							}), (0, h.jsx)(rn, {
								children: u("Market Maker")
							})]
						}), (0, h.jsx)(re, {
							ref: m,
							children: (0, h.jsx)(t1.X, {
								size: "44px",
								currency: o
							})
						}), x && f]
					})
				},
				rr = t(49980);

			function ro(n, e) {
				var t, r = (0, rr.P4)(e);
				return t = {}, (0, g.Z)(t, V.gN.INPUT, n && ek.Fn.maximumAmountIn(n, r)), (0, g.Z)(t, V.gN.OUTPUT, n && ek.Fn.minimumAmountOut(n, r)), t
			}

			function ri(n) {
				if (!n) return {
					priceImpactWithoutFee: void 0,
					lpFeeAmount: null
				};
				var e = n.routes,
					t = n.outputAmount,
					r = n.inputAmount,
					o = new N.gG(0),
					i = N.ih.fromRawAmount(n.outputAmount.wrapped.currency, 0),
					a = !0,
					u = !1,
					s = void 0;
				try {
					for (var c, l = e[Symbol.iterator](); !(a = (c = l.next()).done); a = !0) {
						var d = c.value,
							p = d.inputAmount,
							m = d.pools,
							f = d.percent,
							h = N.yC.subtract(m.reduce(function(n, e) {
								return ek.Fn.isV2Pool(e) ? n.multiply(eH.Zw) : ek.Fn.isStablePool(e) ? n.multiply(N.yC.subtract(e.fee)) : ek.Fn.isV3Pool(e) ? n.multiply(N.yC.subtract(ra(e.fee))) : n
							}, N.yC));
						o = o.add(h.multiply(new N.gG(f, 100)));
						var x = ek.Fn.getMidPrice(d);
						i = i.add(x.quote(p.wrapped))
					}
				} catch (n) {
					u = !0, s = n
				} finally {
					try {
						a || null == l.return || l.return()
					} finally {
						if (u) throw s
					}
				}
				if (N.QA.equal(i.quotient, N.xE)) return {
					priceImpactWithoutFee: void 0,
					lpFeeAmount: null
				};
				var g = i.subtract(t.wrapped).divide(i);
				return {
					priceImpactWithoutFee: new N.gG(g.numerator, g.denominator).subtract(o),
					lpFeeAmount: r.multiply(o)
				}
			}

			function ra(n) {
				return new N.gG(n, N.QA.multiply(eH.PM, N.QA.BigInt(100)))
			}
			var ru = (0, k.memo)(function(n) {
					var e = n.isOpen,
						t = n.onDismiss,
						r = n.routes,
						o = (0, y.$G)().t;
					return (0, h.jsx)(Z.kw, {
						closeOnOverlayClick: !0,
						isOpen: e,
						onDismiss: t,
						minHeight: "0",
						children: (0, h.jsx)(T.ZP, {
							title: (0, h.jsxs)(j.Z, {
								justifyContent: "center",
								children: [o("Route"), " ", (0, h.jsx)(tQ.s, {
									text: o("Routing through these tokens resulted in the best price for your trade."),
									ml: "4px",
									placement: "top-start"
								})]
							}),
							style: {
								minHeight: "0"
							},
							bodyPadding: "24px",
							children: (0, h.jsxs)(tV.Tz, {
								gap: "48px",
								children: [r.map(function(n, e) {
									return (0, h.jsx)(rs, {
										route: n
									}, e)
								}), (0, h.jsx)(t9.D, {})]
							})
						})
					})
				}),
				rs = (0, k.memo)(function(n) {
					var e = n.route,
						t = (0, y.$G)().t,
						r = e.path,
						o = e.pools,
						i = e.inputAmount,
						a = e.outputAmount,
						u = i.currency,
						s = a.currency,
						c = (0, tx.Z)((0, h.jsx)(nr.Z, {
							children: u.symbol
						}), {
							placement: "right"
						}),
						l = c.targetRef,
						d = c.tooltip,
						p = c.tooltipVisible,
						m = (0, tx.Z)((0, h.jsx)(nr.Z, {
							children: s.symbol
						}), {
							placement: "right"
						}),
						f = m.targetRef,
						x = m.tooltip,
						g = m.tooltipVisible,
						b = (0, k.useMemo)(function() {
							if (r.length <= 1) return [];
							for (var n = [], e = 0; e < r.length - 1; e += 1) n.push([r[e], r[e + 1]]);
							return n
						}, [r]),
						j = b.length > 0 ? b.map(function(n, e) {
							var r = (0, v.Z)(n, 2),
								i = r[0],
								a = r[1],
								u = o[e],
								s = ek.Fn.isV3Pool(u),
								c = ek.Fn.isV2Pool(u),
								l = c ? "v2_".concat(u.reserve0.currency.symbol, "_").concat(u.reserve1.currency.symbol) : u.address,
								d = c ? "V2" : s ? "V3 (".concat(ra(u.fee).toSignificant(6), "%)") : t("StableSwap"),
								p = "".concat(i.symbol, "/").concat(a.symbol).concat(s ? " (".concat(ra(u.fee).toSignificant(6), "%)") : "");
							return (0, h.jsx)(rc, {
								pair: n,
								text: d,
								className: s && "highlight",
								tooltipText: p
							}, l)
						}) : null;
					return (0, h.jsx)(tV.Tz, {
						gap: "24px",
						children: (0, h.jsxs)(t8, {
							justifyContent: "space-between",
							alignItems: "center",
							children: [(0, h.jsxs)(re, {
								size: {
									xs: "32px",
									md: "48px"
								},
								ref: l,
								children: [(0, h.jsx)(t1.X, {
									size: "100%",
									currency: u
								}), (0, h.jsxs)(rn, {
									fontWeight: "bold",
									children: [e.percent, "%"]
								})]
							}), p && d, j, (0, h.jsx)(re, {
								size: {
									xs: "32px",
									md: "48px"
								},
								ref: f,
								children: (0, h.jsx)(t1.X, {
									size: "100%",
									currency: s
								})
							}), g && x]
						})
					})
				});

			function rc(n) {
				var e = n.pair,
					t = n.text,
					r = n.className,
					o = n.tooltipText,
					i = (0, v.Z)(e, 2),
					a = i[0],
					u = i[1],
					s = (0, tx.Z)(o);
				return (0, h.jsxs)(t7, {
					className: r,
					ref: s.targetRef,
					children: [s.tooltipVisible && s.tooltip, (0, h.jsx)(tg.p, {
						size: {
							xs: "24px",
							md: "32px"
						},
						children: (0, h.jsx)(t1.X, {
							size: "100%",
							currency: a
						})
					}), (0, h.jsx)(tg.p, {
						size: {
							xs: "24px",
							md: "32px"
						},
						children: (0, h.jsx)(t1.X, {
							size: "100%",
							currency: u
						})
					}), (0, h.jsx)(rn, {
						children: t
					})]
				})
			}

			function rl() {
				var n = (0, $.Z)(["\n  padding: 4px 24px 0;\n"]);
				return rl = function() {
					return n
				}, n
			}
			var rd = (0, J.ZP)(tY.m0).withConfig({
					componentId: "sc-7786c0b4-0"
				})(rl()),
				rp = (0, k.memo)(function(n) {
					var e = n.routes,
						t = void 0 === e ? [] : e,
						r = (0, y.$G)().t,
						o = (0, Z.R0)();
					if (!t.length) return null;
					var i = t.length;
					return (0, h.jsx)(h.Fragment, {
						children: (0, h.jsxs)(rd, {
							children: [(0, h.jsxs)("span", {
								style: {
									display: "flex",
									alignItems: "center"
								},
								children: [(0, h.jsx)(nr.Z, {
									fontSize: "14px",
									color: "textSubtle",
									children: r("Route")
								}), (0, h.jsx)(tQ.s, {
									text: r("Route is automatically calculated based on your routing preference to achieve the best price for your trade."),
									ml: "4px",
									placement: "top-start"
								})]
							}), (0, h.jsx)(nd.ZP, {
								onClick: o.onOpen,
								role: "button",
								children: (0, h.jsxs)("span", {
									style: {
										display: "flex",
										alignItems: "center"
									},
									children: [i > 1 ? (0, h.jsx)(nr.Z, {
										fontSize: "14px",
										children: r("%count% Separate Routes", {
											count: i
										})
									}) : (0, h.jsx)(rm, {
										route: t[0]
									}), (0, h.jsx)(th.Z, {
										ml: "8px",
										variant: "text",
										color: "textSubtle",
										scale: "xs",
										children: (0, h.jsx)(t$.Z, {
											width: "16px",
											height: "16px",
											color: "textSubtle"
										})
									})]
								})
							}), (0, h.jsx)(ru, (0, na.Z)((0, ni.Z)({}, o), {
								routes: t
							}))]
						})
					})
				});

			function rm(n) {
				var e = n.route.path;
				return (0, h.jsx)(tY.m0, {
					children: (0, h.jsx)(t0, {
						path: e
					})
				})
			}
			var rf = t(47233),
				rh = t(77713);

			function rx(n) {
				var e = n.priceImpact;
				return (0, h.jsx)(tX.y, {
					fontSize: "14px",
					severity: (0, rr.oX)(e),
					children: e ? e.lessThan(eH.IS) ? "<0.01%" : "".concat(e.toFixed(2), "%") : "-"
				})
			}

			function rg() {
				var n = (0, $.Z)(["\n  margin-top: 24px;\n  padding: 16px;\n  border-radius: ", ";\n  border: 1px solid ", ";\n  background-color: ", ";\n"]);
				return rg = function() {
					return n
				}, n
			}
			var rv = (0, J.ZP)(tV.Tz).withConfig({
					componentId: "sc-e5b7d211-0"
				})(rg(), function(n) {
					return n.theme.radii.default
				}, function(n) {
					return n.theme.colors.cardBorder
				}, function(n) {
					return n.theme.colors.background
				}),
				ry = (0, k.memo)(function(n) {
					var e, t, r = n.priceImpact,
						o = n.lpFee,
						i = n.inputAmount,
						a = n.outputAmount,
						u = n.tradeType,
						s = n.executionPrice,
						c = n.slippageAdjustedAmounts,
						l = n.isEnoughInputBalance,
						d = n.onConfirm,
						p = n.swapErrorMessage,
						m = n.disabledConfirm,
						f = (0, y.$G)().t,
						x = (0, v.Z)((0, k.useState)(!1), 2),
						g = x[0],
						b = x[1],
						j = (0, rr.oX)(r);
					return (0, h.jsxs)(h.Fragment, {
						children: [(0, h.jsxs)(rv, {
							children: [(0, h.jsxs)(tY.m0, {
								align: "center",
								children: [(0, h.jsx)(nr.Z, {
									fontSize: "14px",
									children: f("Price")
								}), (0, h.jsxs)(nr.Z, {
									fontSize: "14px",
									style: {
										justifyContent: "center",
										alignItems: "center",
										display: "flex",
										textAlign: "right",
										paddingLeft: "10px"
									},
									children: [s && i && a ? g ? "".concat((0, tz.T4)(s.invert(), 6), " ").concat(i.currency.symbol, " / ").concat(a.currency.symbol) : "".concat((0, tz.T4)(s, 6), " ").concat(a.currency.symbol, " / ").concat(i.currency.symbol) : "", (0, h.jsx)(tX.k0, {
										onClick: function() {
											return b(!g)
										},
										children: (0, h.jsx)(rh.Z, {
											width: "14px"
										})
									})]
								})]
							}), (0, h.jsxs)(tY.m0, {
								children: [(0, h.jsxs)(tY.DA, {
									children: [(0, h.jsx)(nr.Z, {
										fontSize: "14px",
										children: f(u === N.YL.EXACT_INPUT ? "Minimum received" : "Maximum sold")
									}), (0, h.jsx)(tQ.s, {
										text: f("Your transaction will revert if there is a large, unfavorable price movement before it is confirmed."),
										ml: "4px",
										placement: "top"
									})]
								}), (0, h.jsxs)(tY.DA, {
									children: [(0, h.jsx)(nr.Z, {
										fontSize: "14px",
										children: u === N.YL.EXACT_INPUT ? null !== (e = (0, tz.dN)(c[V.gN.OUTPUT], 4)) && void 0 !== e ? e : "-" : null !== (t = (0, tz.dN)(c[V.gN.INPUT], 4)) && void 0 !== t ? t : "-"
									}), (0, h.jsx)(nr.Z, {
										fontSize: "14px",
										marginLeft: "4px",
										children: u === N.YL.EXACT_INPUT ? a.currency.symbol : i.currency.symbol
									})]
								})]
							}), (0, h.jsxs)(tY.m0, {
								children: [(0, h.jsxs)(tY.DA, {
									children: [(0, h.jsx)(nr.Z, {
										fontSize: "14px",
										children: f("Price Impact")
									}), (0, h.jsx)(tQ.s, {
										text: f("The difference between the market price and your price due to trade size."),
										ml: "4px",
										placement: "top"
									})]
								}), (0, h.jsx)(rx, {
									priceImpact: r
								})]
							}), (0, h.jsxs)(tY.m0, {
								children: [(0, h.jsxs)(tY.DA, {
									children: [(0, h.jsx)(nr.Z, {
										fontSize: "14px",
										children: f("Trading Fee")
									}), (0, h.jsx)(tQ.s, {
										text: (0, h.jsxs)(h.Fragment, {
											children: [(0, h.jsx)(nr.Z, {
												children: f("Fee ranging from 0.1% to 0.01% depending on the pool fee tier. You can check the fee tier by clicking the magnifier icon under the “Route” section.")
											}), (0, h.jsx)(nr.Z, {
												mt: "12px",
												children: (0, h.jsx)(ea.Z, {
													style: {
														display: "inline"
													},
													ml: "4px",
													external: !0,
													href: "https://docs.pancakeswap.finance/products/pancakeswap-exchange/faq#what-will-be-the-trading-fee-breakdown-for-v3-exchange",
													children: f("Fee Breakdown and Tokenomics")
												})
											})]
										}),
										ml: "4px",
										placement: "top"
									})]
								}), (0, h.jsx)(nr.Z, {
									fontSize: "14px",
									textAlign: "right",
									children: o ? "".concat((0, tz.dN)(o, 6), " ").concat(i.currency.symbol) : "-"
								})]
							})]
						}), (0, h.jsxs)(tY.BA, {
							children: [(0, h.jsx)(ne.Z, {
								variant: j > 2 ? "danger" : "primary",
								onClick: d,
								disabled: m,
								mt: "12px",
								id: "confirm-swap-or-send",
								width: "100%",
								children: f(j > 2 || u === N.YL.EXACT_OUTPUT && !l ? "Swap Anyway" : "Confirm Swap")
							}), p ? (0, h.jsx)(tX.rn, {
								error: p
							}) : null]
						})]
					})
				}),
				rb = t(11104),
				rj = t(1429),
				rC = t(65594);

			function rZ(n) {
				var e = n.inputAmount,
					t = n.outputAmount,
					r = n.tradeType,
					o = n.priceImpactWithoutFee,
					i = n.slippageAdjustedAmounts,
					a = n.isEnoughInputBalance,
					u = n.recipient,
					s = n.showAcceptChanges,
					c = n.onAcceptChanges,
					l = n.allowedSlippage,
					d = (0, y.$G)().t,
					p = (0, rr.oX)(o),
					m = s && r === N.YL.EXACT_OUTPUT && a ? "primary" : r !== N.YL.EXACT_OUTPUT || a ? "text" : "failure",
					f = r === N.YL.EXACT_INPUT ? (0, tz.dN)(i[V.gN.OUTPUT], 6) : (0, tz.dN)(i[V.gN.INPUT], 6),
					x = r === N.YL.EXACT_INPUT ? t.currency.symbol : e.currency.symbol,
					g = (0, k.useMemo)(function() {
						return r === N.YL.EXACT_INPUT ? d("Output is estimated. You will receive at least %amount% %symbol% or the transaction will revert.", {
							amount: f,
							symbol: x
						}) : d("Input is estimated. You will sell at most %amount% %symbol% or the transaction will revert.", {
							amount: f,
							symbol: x
						})
					}, [d, r, f, x]),
					b = u ? (0, rC.Z)(u) : "",
					j = d("Output will be sent to %recipient%", {
						recipient: b
					}),
					C = (0, v.Z)(j.split(b), 2),
					Z = C[0],
					T = C[1];
				return (0, h.jsxs)(tV.Tz, {
					gap: "md",
					children: [(0, h.jsxs)(tY.m0, {
						align: "flex-end",
						children: [(0, h.jsxs)(tY.DA, {
							gap: "4px",
							children: [(0, h.jsx)(t1.X, {
								currency: e.currency,
								size: "24px",
								style: {
									marginRight: "12px"
								}
							}), (0, h.jsx)(tX.Ld, {
								fontSize: "24px",
								color: m,
								children: (0, tz.dN)(e, 6)
							})]
						}), (0, h.jsx)(tY.DA, {
							gap: "0px",
							children: (0, h.jsx)(nr.Z, {
								fontSize: "24px",
								ml: "10px",
								children: e.currency.symbol
							})
						})]
					}), (0, h.jsx)(tY.DA, {
						children: (0, h.jsx)(rb.Z, {
							width: "16px",
							ml: "4px"
						})
					}), (0, h.jsxs)(tY.m0, {
						align: "flex-end",
						children: [(0, h.jsxs)(tY.DA, {
							gap: "4px",
							children: [(0, h.jsx)(t1.X, {
								currency: t.currency,
								size: "24px"
							}), (0, h.jsx)(tX.Ld, {
								fontSize: "24px",
								color: p > 2 ? "failure" : s && r === N.YL.EXACT_INPUT ? "primary" : "text",
								children: (0, tz.dN)(t, 6)
							})]
						}), (0, h.jsx)(tY.DA, {
							children: (0, h.jsx)(nr.Z, {
								fontSize: "24px",
								ml: "10px",
								children: t.currency.symbol
							})
						})]
					}), s ? (0, h.jsx)(tX.ly, {
						justify: "flex-start",
						gap: "0px",
						children: (0, h.jsxs)(tY.m0, {
							children: [(0, h.jsxs)(tY.DA, {
								children: [(0, h.jsx)(rj.Z, {
									mr: "8px"
								}), (0, h.jsxs)(nr.Z, {
									bold: !0,
									children: [" ", d("Price Updated")]
								})]
							}), (0, h.jsx)(ne.Z, {
								onClick: c,
								children: d("Accept")
							})]
						})
					}) : null, (0, h.jsxs)(tV.Tz, {
						justify: "flex-start",
						gap: "sm",
						style: {
							padding: "24px 0 0 0px"
						},
						children: [(0, h.jsxs)(tY.DA, {
							style: {
								width: "100%"
							},
							children: [(0, h.jsx)(nr.Z, {
								color: "secondary",
								bold: !0,
								textTransform: "uppercase",
								children: d("Slippage Tolerance")
							}), (0, h.jsx)(nr.Z, {
								bold: !0,
								color: "primary",
								ml: "auto",
								textAlign: "end",
								children: "number" == typeof l ? "".concat((0, rr.P4)(l).toFixed(2), "%") : l
							})]
						}), r === N.YL.EXACT_OUTPUT && !a && (0, h.jsx)(nr.Z, {
							small: !0,
							color: "failure",
							textAlign: "left",
							style: {
								width: "100%"
							},
							children: d("Insufficient input token balance. Your transaction may fail.")
						}), (0, h.jsx)(nr.Z, {
							small: !0,
							color: "textSubtle",
							textAlign: "left",
							style: {
								maxWidth: "320px"
							},
							children: g
						})]
					}), null !== u ? (0, h.jsx)(tV.Tz, {
						justify: "flex-start",
						gap: "sm",
						style: {
							padding: "12px 0 0 0px"
						},
						children: (0, h.jsxs)(nr.Z, {
							color: "textSubtle",
							children: [Z, (0, h.jsx)("b", {
								title: u,
								children: b
							}), T]
						})
					}) : null]
				})
			}
			var rT = (0, k.memo)(function(n) {
					var e = n.trade,
						t = n.originalTrade,
						r = n.onAcceptChanges,
						o = n.allowedSlippage,
						i = n.onConfirm,
						a = n.recipient,
						u = n.currencyBalances,
						s = (0, k.useMemo)(function() {
							return Boolean(e && t && (e.tradeType !== t.tradeType || !e.inputAmount.currency.equals(t.inputAmount.currency) || !e.inputAmount.equalTo(t.inputAmount) || !e.outputAmount.currency.equals(t.outputAmount.currency) || !e.outputAmount.equalTo(t.outputAmount)))
						}, [t, e]),
						c = (0, k.useMemo)(function() {
							return ro(e, o)
						}, [e, o]),
						l = (0, k.useMemo)(function() {
							return ri(e)
						}, [e]),
						d = l.priceImpactWithoutFee,
						p = l.lpFeeAmount,
						m = (0, k.useMemo)(function() {
							return ek.Fn.getExecutionPrice(e)
						}, [e]),
						f = (0, k.useMemo)(function() {
							if ((null == e ? void 0 : e.tradeType) !== N.YL.EXACT_OUTPUT) return null;
							var n = !!(u && u[V.gN.INPUT]),
								t = n && u[V.gN.INPUT].currency.isNative,
								r = n ? t ? (0, tW.i)(u[V.gN.INPUT]) : u[V.gN.INPUT] : null;
							return !!r && !!c && !!c[V.gN.INPUT] && (r.greaterThan(c[V.gN.INPUT]) || r.equalTo(c[V.gN.INPUT]))
						}, [u, e, c]),
						x = (0, k.useCallback)(function() {
							return e ? (0, h.jsx)(rZ, {
								inputAmount: e.inputAmount,
								outputAmount: e.outputAmount,
								tradeType: e.tradeType,
								priceImpactWithoutFee: d,
								allowedSlippage: o,
								slippageAdjustedAmounts: c,
								isEnoughInputBalance: f,
								recipient: a,
								showAcceptChanges: s,
								onAcceptChanges: r
							}) : null
						}, [d, o, r, a, s, e, c, f]),
						g = (0, k.useCallback)(function() {
							return e ? (0, h.jsx)(ry, {
								tradeType: e.tradeType,
								inputAmount: e.inputAmount,
								outputAmount: e.outputAmount,
								onConfirm: i,
								lpFee: p,
								priceImpact: d,
								executionPrice: m,
								slippageAdjustedAmounts: c,
								disabledConfirm: s,
								isEnoughInputBalance: f
							}) : null
						}, [i, s, f, c, p, d, e, m]);
					return (0, h.jsx)(rf.p, {
						topContent: x,
						bottomContent: g
					})
				}),
				rw = t(23067),
				rA = (0, k.memo)(function(n) {
					var e = n.currency;
					return (0, k.useContext)(F).isAccessTokenSupported && (null == e ? void 0 : e.isToken) ? (0, h.jsx)(nd.ZP, {
						children: (0, h.jsx)(rw.Z, {
							token: e
						})
					}) : null
				}),
				rk = t(4597);

			function rS() {
				var n = (0, X.dU)(),
					e = n[V.gN.INPUT].currencyId,
					t = n[V.gN.OUTPUT].currencyId,
					r = (0, X.dU)().typedValue,
					o = (0, W.U8)(e),
					i = (0, W.U8)(t);
				return (0, rk.hN)(o, i, r)
			}

			function rI() {
				var n = (0, v.Z)((0, eI.zu)(), 1)[0],
					e = rS();
				return n && !e
			}
			var rP = t(72546);

			function rU(n) {
				var e = (0, v.Z)((0, eI.eq)(), 1)[0];
				return (0, k.useMemo)(function() {
					return ro(n, e)
				}, [e, n])
			}
			var rE = ["0xaE4EC9901c3076D0DdBe76A520F9E90a6227aCB7", "0xf164fC0Ec4E93095b804a4795bBe1e041497b92a", "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"],
				rN = t(42938),
				rM = t(18733),
				rD = t(1005),
				rF = t(28612),
				rL = t(92319),
				rB = t(48891),
				rR = t(67881),
				rO = t(50990);

			function r_(n) {
				return /^0x0*$/.test(n)
			}
			var rz = function(n) {
					(0, eN.Z)(t, n);
					var e = (0, eD.Z)(t);

					function t() {
						return (0, eE.Z)(this, t), e.apply(this, arguments)
					}
					return t
				}((0, eM.Z)(Error)),
				rq = function(n) {
					(0, eN.Z)(t, n);
					var e = (0, eD.Z)(t);

					function t() {
						return (0, eE.Z)(this, t), e.apply(this, arguments)
					}
					return t
				}((0, eM.Z)(Error));
			(u = m || (m = {}))[u.INVALID = 0] = "INVALID", u[u.LOADING = 1] = "LOADING", u[u.VALID = 2] = "VALID";
			var rG = t(80263);

			function rW() {
				var n = (0, $.Z)(["\n  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.1);\n  .icon-up-down {\n    display: none;\n  }\n  &:hover {\n    background-color: ", ";\n    .icon-down {\n      display: none;\n    }\n    .icon-up-down {\n      display: block;\n    }\n  }\n"]);
				return rW = function() {
					return n
				}, n
			}
			var rV = (0, J.ZP)(th.Z).withConfig({
					componentId: "sc-30d1c0d7-0"
				})(rW(), function(n) {
					return n.theme.colors.primary
				}),
				rX = function(n) {
					return (0, h.jsxs)(rV, (0, na.Z)((0, ni.Z)({
						variant: "light",
						scale: "sm"
					}, n), {
						children: [(0, h.jsx)(rb.Z, {
							className: "icon-down",
							color: "background"
						}), (0, h.jsx)(rG.Z, {
							className: "icon-up-down",
							color: "background"
						})]
					}))
				},
				rH = (0, k.memo)(function() {
					var n = (0, y.$G)().t,
						e = (0, v.Z)((0, eI.zu)(), 1)[0],
						t = (0, S._)(),
						r = t.onSwitchTokens,
						o = t.onChangeRecipient,
						i = (0, X.dU)(),
						a = i.recipient,
						u = i[V.gN.INPUT].currencyId,
						s = i[V.gN.OUTPUT].currencyId,
						c = rI(),
						l = (0, k.useCallback)(function() {
							r(), (0, w.Z)("inputCurrency", s), (0, w.Z)("outputCurrency", u)
						}, [r, u, s]);
					return (0, h.jsx)(tV.Tz, {
						justify: "space-between",
						children: (0, h.jsxs)(tY.BA, {
							justify: e ? "space-between" : "center",
							style: {
								padding: "0 1rem",
								marginTop: "1em"
							},
							children: [(0, h.jsx)(rX, {
								onClick: l
							}), c && null === a ? (0, h.jsx)(ne.Z, {
								variant: "text",
								id: "add-recipient-button",
								onClick: function() {
									return o("")
								},
								children: n("+ Add a send (optional)")
							}) : null]
						})
					})
				}),
				rQ = t(41372);

			function r$() {
				var n = (0, $.Z)(["\n  display: flex;\n  flex-flow: column nowrap;\n  position: relative;\n  border-radius: 1.25rem;\n  background-color: ", ";\n  z-index: 1;\n  width: 100%;\n"]);
				return r$ = function() {
					return n
				}, n
			}

			function rY() {
				var n = (0, $.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 1.25rem;\n  border: 1px solid ", ";\n  transition: border-color 300ms ", ",\n    color 500ms ", ";\n  background-color: ", ";\n"]);
				return rY = function() {
					return n
				}, n
			}

			function rK() {
				var n = (0, $.Z)(["\n  flex: 1;\n  padding: 1rem;\n"]);
				return rK = function() {
					return n
				}, n
			}

			function rJ() {
				var n = (0, $.Z)(["\n  font-size: 1.25rem;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  background-color: ", ";\n  transition: color 300ms ", ";\n  color: ", ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 500;\n  width: 100%;\n  ::placeholder {\n    color: ", ";\n  }\n  padding: 0px;\n  -webkit-appearance: textfield;\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  ::placeholder {\n    color: ", ";\n  }\n"]);
				return rJ = function() {
					return n
				}, n
			}
			var r0 = J.ZP.div.withConfig({
					componentId: "sc-7e62a880-0"
				})(r$(), function(n) {
					return n.theme.colors.backgroundAlt
				}),
				r1 = J.ZP.div.withConfig({
					componentId: "sc-7e62a880-1"
				})(rY(), function(n) {
					var e = n.error,
						t = n.theme;
					return e ? t.colors.failure : t.colors.background
				}, function(n) {
					return n.error ? "step-end" : "step-start"
				}, function(n) {
					return n.error ? "step-end" : "step-start"
				}, function(n) {
					return n.theme.colors.backgroundAlt
				}),
				r9 = J.ZP.div.withConfig({
					componentId: "sc-7e62a880-2"
				})(rK()),
				r2 = J.ZP.input.withConfig({
					componentId: "sc-7e62a880-3"
				})(rJ(), function(n) {
					return n.theme.colors.backgroundAlt
				}, function(n) {
					return n.error ? "step-end" : "step-start"
				}, function(n) {
					var e = n.error,
						t = n.theme;
					return e ? t.colors.failure : t.colors.primary
				}, function(n) {
					return n.theme.colors.textDisabled
				}, function(n) {
					return n.theme.colors.textDisabled
				});

			function r5(n) {
				var e = n.id,
					t = n.value,
					r = n.onChange,
					o = (0, D.g)().chainId,
					i = (0, y.$G)().t,
					a = (0, np.UJ)(t) ? t : void 0,
					u = (0, k.useCallback)(function(n) {
						r(n.target.value.replace(/\s+/g, ""))
					}, [r]),
					s = Boolean(t.length > 0 && !a);
				return (0, h.jsx)(r0, {
					id: e,
					children: (0, h.jsx)(r1, {
						error: s,
						children: (0, h.jsx)(r9, {
							children: (0, h.jsxs)(tV.Tz, {
								gap: "md",
								children: [(0, h.jsxs)(tY.m0, {
									children: [(0, h.jsx)(nr.Z, {
										children: i("Recipient")
									}), a && o && (0, h.jsxs)(ea.Z, {
										external: !0,
										small: !0,
										href: (0, np.C)(a, "address", o),
										children: ["(", i("View on %site%", {
											site: (0, np.X0)(o)
										}), o === N.a_.BSC && (0, h.jsx)(rQ.Z, {
											color: "primary",
											ml: "4px"
										}), ")"]
									})]
								}), (0, h.jsx)(r2, {
									className: "recipient-address-input",
									type: "text",
									autoComplete: "off",
									autoCorrect: "off",
									autoCapitalize: "off",
									spellCheck: "false",
									placeholder: i("Wallet Address"),
									error: s,
									pattern: "^(0x[a-fA-F0-9]{40})$",
									onChange: u,
									value: t
								})]
							})
						})
					})
				})
			}
			var r4 = (0, k.memo)(function() {
				var n = (0, y.$G)().t,
					e = (0, X.dU)().recipient,
					t = (0, S._)().onChangeRecipient;
				return rI() && null !== e ? (0, h.jsxs)(h.Fragment, {
					children: [(0, h.jsxs)(tY.BA, {
						justify: "space-between",
						style: {
							padding: "0 1rem"
						},
						children: [(0, h.jsx)(tX.nR, {
							clickable: !1,
							children: (0, h.jsx)(rb.Z, {
								width: "16px"
							})
						}), (0, h.jsx)(ne.Z, {
							variant: "text",
							id: "remove-recipient-button",
							onClick: function() {
								return t(null)
							},
							children: n("- Remove send")
						})]
					}), (0, h.jsx)(r5, {
						id: "recipient",
						value: e,
						onChange: t
					})]
				}) : null
			});

			function r6(n) {
				var e = n.pricingAndSlippage,
					t = n.inputAmount,
					r = n.outputAmount,
					o = n.tradeLoading,
					i = n.swapCommitButton,
					a = (0, t_.Ge)().account,
					u = (0, y.$G)().t,
					s = eA(),
					c = (0, X.dU)(),
					l = c.independentField,
					d = c.typedValue,
					p = c[V.gN.INPUT].currencyId,
					m = c[V.gN.OUTPUT].currencyId,
					f = rS(),
					x = (0, W.U8)(p),
					g = (0, W.U8)(m),
					b = (0, S._)(),
					j = b.onCurrencySelection,
					C = b.onUserInput,
					Z = (0, v.Z)((0, tt.K5)(a, [x, g]), 1)[0],
					T = (0, k.useMemo)(function() {
						return (0, tW.i)(Z)
					}, [Z]),
					A = (0, X.jj)(),
					P = (0, k.useCallback)(function(n) {
						return C(V.gN.INPUT, n)
					}, [C]),
					U = (0, k.useCallback)(function(n) {
						return C(V.gN.OUTPUT, n)
					}, [C]),
					E = (0, k.useCallback)(function(n) {
						T && C(V.gN.INPUT, T.multiply(new N.gG(n, 100)).toExact())
					}, [T, C]),
					M = (0, k.useCallback)(function() {
						T && C(V.gN.INPUT, T.toExact())
					}, [T, C]),
					D = (0, k.useCallback)(function(n, e, t, r) {
						j(e, n), s(n);
						var o = e === V.gN.INPUT,
							i = (0, I.H)(n);
						i === (o ? r : t) && (0, w.Z)(o ? "outputCurrency" : "inputCurrency", o ? t : r), (0, w.Z)(o ? "inputCurrency" : "outputCurrency", i)
					}, [j, s]),
					F = (0, k.useCallback)(function(n) {
						return D(n, V.gN.INPUT, p, m)
					}, [D, p, m]),
					L = (0, k.useCallback)(function(n) {
						return D(n, V.gN.OUTPUT, p, m)
					}, [D, p, m]),
					B = l === V.gN.INPUT,
					R = (0, k.useMemo)(function() {
						return d && (B ? d : (0, tz.dN)(t) || "")
					}, [d, B, t]),
					O = (0, k.useMemo)(function() {
						return d && (B ? (0, tz.dN)(r) || "" : d)
					}, [d, B, r]);
				return (0, h.jsxs)(tH, {
					children: [(0, h.jsx)(tq.Z, {
						id: "swap-currency-input",
						showUSDPrice: !0,
						showMaxButton: !0,
						showCommonBases: !0,
						inputLoading: !f && !!d && !B && o,
						currencyLoading: !A,
						label: u(B || f ? "From" : "From (estimated)"),
						value: f ? d : R,
						maxAmount: T,
						showQuickInputButton: !0,
						currency: x,
						onUserInput: P,
						onPercentInput: E,
						onMax: M,
						onCurrencySelect: F,
						otherCurrency: g,
						commonBasesType: tG.L0.SWAP_LIMITORDER
					}), (0, h.jsx)(rA, {
						currency: x
					}), (0, h.jsx)(rH, {}), (0, h.jsx)(tq.Z, {
						id: "swap-currency-output",
						showUSDPrice: !0,
						showCommonBases: !0,
						showMaxButton: !1,
						inputLoading: !f && !!d && B && o,
						currencyLoading: !A,
						label: u(B && !f ? "To (estimated)" : "To"),
						value: f ? d : O,
						currency: g,
						onUserInput: U,
						onCurrencySelect: L,
						otherCurrency: g,
						commonBasesType: tG.L0.SWAP_LIMITORDER
					}), (0, h.jsx)(rA, {
						currency: g
					}), (0, h.jsx)(r4, {}), e, i]
				})
			}
			var r3 = t(59915),
				r8 = t(53624),
				r7 = function(n) {
					return (0, h.jsx)(nr.Z, (0, ni.Z)({
						fontSize: "12px",
						bold: !0,
						color: "secondary"
					}, n))
				},
				on = function(n) {
					var e = n.allowedSlippage,
						t = n.price,
						r = n.onSlippageClick,
						o = n.allowedSlippageSlot,
						i = (0, y.$G)().t,
						a = (0, eS.tm)();
					return (0, h.jsxs)(tV.Tz, {
						gap: "sm",
						py: "0px",
						px: "16px",
						children: [(0, h.jsx)(r3.m0, {
							alignItems: "center",
							children: t
						}), "number" == typeof e && (0, h.jsxs)(r3.m0, {
							alignItems: "center",
							children: [(0, h.jsxs)(r7, {
								children: [i("Slippage Tolerance"), r ? (0, h.jsx)(th.Z, {
									scale: "sm",
									variant: "text",
									onClick: r,
									children: (0, h.jsx)(r8.Z, {
										color: "primary",
										width: "10px"
									})
								}) : null]
							}), a && (null != o ? o : (0, h.jsxs)(nr.Z, {
								bold: !0,
								color: "primary",
								children: [e / 100, "%"]
							}))]
						})]
					})
				},
				oe = t(86831),
				ot = t(45054),
				or = t(51301);

			function oo(n) {
				var e, t, r, o, i = n.price,
					a = n.loading,
					u = (0, v.Z)((0, k.useState)(!1), 2),
					s = u[0],
					c = u[1],
					l = s ? (0, tz.T4)(i, 6) : (0, tz.T4)(null == i ? void 0 : i.invert(), 6),
					d = Boolean((null == i ? void 0 : i.baseCurrency) && (null == i ? void 0 : i.quoteCurrency));
				return (0, h.jsx)(nr.Z, {
					fontSize: "14px",
					style: {
						justifyContent: "center",
						alignItems: "center",
						display: "flex",
						opacity: a ? .6 : 1
					},
					children: d ? (0, h.jsxs)(h.Fragment, {
						children: ["1 ".concat(s ? null == i ? void 0 : null === (e = i.baseCurrency) || void 0 === e ? void 0 : e.symbol : null == i ? void 0 : null === (t = i.quoteCurrency) || void 0 === t ? void 0 : t.symbol), (0, h.jsx)(oe.Z, {
							width: "14px",
							height: "14px",
							color: "textSubtle",
							ml: "4px",
							mr: "4px"
						}), "".concat(l, " ").concat(s ? null == i ? void 0 : null === (r = i.quoteCurrency) || void 0 === r ? void 0 : r.symbol : null == i ? void 0 : null === (o = i.baseCurrency) || void 0 === o ? void 0 : o.symbol), a ? (0, h.jsx)(tg.p, {
							className: or.tg,
							children: (0, h.jsx)(ot.Z, {
								width: "12px",
								height: "12px"
							})
						}) : (0, h.jsx)(tg.p, {
							role: "button",
							className: or.tg,
							onClick: function() {
								return c(!s)
							},
							children: (0, h.jsx)(rh.Z, {
								width: "14px"
							})
						})]
					}) : "-"
				})
			}
			var oi = (0, k.memo)(function(n) {
				var e = n.priceLoading,
					t = n.price,
					r = n.showSlippage,
					o = (0, y.$G)().t,
					i = (0, v.Z)((0, eI.eq)(), 1)[0],
					a = rS(),
					u = (0, v.Z)((0, n$.Z)((0, h.jsx)(t9.ZP, {
						mode: tD.a.SWAP_LIQUIDITY
					})), 1)[0];
				if (a) return null;
				var s = t ? (0, h.jsxs)(h.Fragment, {
					children: [(0, h.jsx)(r7, {
						children: o("Price")
					}), (0, h.jsx)(oo, {
						price: t,
						loading: e
					})]
				}) : null;
				return (0, h.jsx)(on, {
					price: s,
					allowedSlippage: void 0 === r || r ? i : void 0,
					onSlippageClick: u
				})
			});

			function oa(n) {
				return null != n
			}
			var ou = function(n) {
					var e, t, r;
					return t = (e = (0, v.Z)((0, k.useState)(function() {
						return oa && oa(n) ? n : void 0
					}), 2))[0], r = e[1], (0, k.useEffect)(function() {
						r(function(e) {
							return !oa || oa(n) ? n : e
						})
					}, [oa, n]), t
				},
				os = (0, k.memo)(function(n) {
					var e, t, r = n.inputAmount,
						o = n.outputAmount,
						i = n.tradeType,
						a = n.slippageAdjustedAmounts,
						u = n.priceImpactWithoutFee,
						s = n.realizedLPFee,
						c = n.isMM,
						l = (0, y.$G)().t,
						d = i === N.YL.EXACT_INPUT;
					return (0, h.jsxs)(tV.Tz, {
						style: {
							padding: "0 24px"
						},
						children: [(0, h.jsxs)(tY.m0, {
							children: [(0, h.jsxs)(tY.DA, {
								children: [(0, h.jsx)(nr.Z, {
									fontSize: "14px",
									color: "textSubtle",
									children: l(d ? "Minimum received" : "Maximum sold")
								}), (0, h.jsx)(tQ.s, {
									text: l("Your transaction will revert if there is a large, unfavorable price movement before it is confirmed."),
									ml: "4px",
									placement: "top"
								})]
							}), (0, h.jsx)(tY.DA, {
								children: (0, h.jsx)(nr.Z, {
									fontSize: "14px",
									children: d ? null !== (e = "".concat((0, tz.dN)(a[V.gN.OUTPUT], 4), " ").concat(o.currency.symbol)) && void 0 !== e ? e : "-" : null !== (t = "".concat((0, tz.dN)(a[V.gN.INPUT], 4), " ").concat(r.currency.symbol)) && void 0 !== t ? t : "-"
								})
							})]
						}), u && (0, h.jsxs)(tY.m0, {
							style: {
								padding: "4px 0 0 0"
							},
							children: [(0, h.jsxs)(tY.DA, {
								children: [(0, h.jsx)(nr.Z, {
									fontSize: "14px",
									color: "textSubtle",
									children: l("Price Impact")
								}), (0, h.jsx)(tQ.s, {
									text: (0, h.jsxs)(h.Fragment, {
										children: [(0, h.jsxs)(nr.Z, {
											children: [(0, h.jsx)(nr.Z, {
												bold: !0,
												display: "inline-block",
												children: l("AMM")
											}), ": ".concat(l("The difference between the market price and estimated price due to trade size."))]
										}), (0, h.jsxs)(nr.Z, {
											mt: "10px",
											children: [(0, h.jsx)(nr.Z, {
												bold: !0,
												display: "inline-block",
												children: l("MM")
											}), ": ".concat(l("No slippage against quote from market maker"))]
										})]
									}),
									ml: "4px",
									placement: "top"
								})]
							}), void 0 !== c && c ? (0, h.jsx)(nr.Z, {
								color: "textSubtle",
								children: "--"
							}) : (0, h.jsx)(rx, {
								priceImpact: u
							})]
						}), s && (0, h.jsxs)(tY.m0, {
							style: {
								padding: "4px 0 0 0"
							},
							children: [(0, h.jsxs)(tY.DA, {
								children: [(0, h.jsx)(nr.Z, {
									fontSize: "14px",
									color: "textSubtle",
									children: l("Trading Fee")
								}), (0, h.jsx)(tQ.s, {
									text: (0, h.jsxs)(h.Fragment, {
										children: [(0, h.jsxs)(nr.Z, {
											mb: "12px",
											children: [(0, h.jsx)(nr.Z, {
												bold: !0,
												display: "inline-block",
												children: l("AMM")
											}), ":", " ", l("Fee ranging from 0.1% to 0.01% depending on the pool fee tier. You can check the fee tier by clicking the magnifier icon under the “Route” section.")]
										}), (0, h.jsx)(nr.Z, {
											mt: "12px",
											children: (0, h.jsx)(ea.Z, {
												style: {
													display: "inline"
												},
												ml: "4px",
												external: !0,
												href: "https://docs.pancakeswap.finance/products/pancakeswap-exchange/faq#what-will-be-the-trading-fee-breakdown-for-v3-exchange",
												children: l("Fee Breakdown and Tokenomics")
											})
										}), (0, h.jsxs)(nr.Z, {
											mt: "10px",
											children: [(0, h.jsx)(nr.Z, {
												bold: !0,
												display: "inline-block",
												children: l("MM")
											}), ":", " ", l("MadMeerkatFinance does not charge any fees for trades. However, the market makers charge an implied fee of 0.05% (non-stablecoin) / 0.01% (stablecoin) factored into the quotes provided by them.")]
										})]
									}),
									ml: "4px",
									placement: "top"
								})]
							}), (0, h.jsx)(nr.Z, {
								fontSize: "14px",
								children: "".concat((0, tz.dN)(s, 4), " ").concat(r.currency.symbol)
							})]
						})]
					})
				}),
				oc = (0, k.memo)(function(n) {
					var e = n.pairs,
						t = n.path,
						r = n.priceImpactWithoutFee,
						o = n.realizedLPFee,
						i = n.slippageAdjustedAmounts,
						a = n.inputAmount,
						u = n.outputAmount,
						s = n.tradeType,
						c = n.hasStablePair,
						l = n.isMM,
						d = void 0 !== l && l,
						p = (0, y.$G)().t,
						m = (0, v.Z)((0, k.useState)(!1), 2),
						f = m[0],
						x = m[1],
						g = Boolean(t && t.length > 1);
					return (0, h.jsx)(tV.Tz, {
						gap: "0px",
						children: a && (0, h.jsxs)(h.Fragment, {
							children: [(0, h.jsx)(os, {
								inputAmount: a,
								outputAmount: u,
								tradeType: s,
								slippageAdjustedAmounts: i,
								priceImpactWithoutFee: r,
								realizedLPFee: o,
								hasStablePair: c,
								isMM: d
							}), g && (0, h.jsx)(h.Fragment, {
								children: (0, h.jsxs)(tY.m0, {
									style: {
										padding: "0 24px"
									},
									children: [(0, h.jsxs)("span", {
										style: {
											display: "flex",
											alignItems: "center"
										},
										children: [(0, h.jsx)(nr.Z, {
											fontSize: "14px",
											color: "textSubtle",
											children: p("Route")
										}), (0, h.jsx)(tQ.s, {
											text: p("Routing through these tokens resulted in the best price for your trade."),
											ml: "4px",
											placement: "top"
										})]
									}), (0, h.jsx)(t0, {
										path: t
									}), (0, h.jsx)(t$.Z, {
										style: {
											cursor: "pointer"
										},
										onClick: function() {
											return x(!0)
										}
									}), (0, h.jsx)(Z.kw, {
										closeOnOverlayClick: !0,
										isOpen: f,
										onDismiss: function() {
											return x(!1)
										},
										children: (0, h.jsxs)(T.ZP, {
											title: (0, h.jsxs)(j.Z, {
												justifyContent: "center",
												children: [p("Route"), " ", (0, h.jsx)(tQ.s, {
													text: p("Route is automatically calculated based on your routing preference to achieve the best price for your trade."),
													ml: "4px",
													placement: "top"
												})]
											}),
											onDismiss: function() {
												return x(!1)
											},
											children: [(0, h.jsx)(rt, {
												isMM: d,
												inputCurrency: a.currency,
												pairs: e,
												path: t,
												outputCurrency: u.currency
											}), (0, h.jsx)(j.Z, {
												mt: "3em",
												width: "100%",
												justifyContent: "center",
												children: (0, h.jsx)(t9.D, {})
											})]
										})
									})]
								})
							})]
						})
					})
				});

			function ol() {
				var n = (0, $.Z)(["\n  margin-top: ", ";\n  padding-top: 16px;\n  padding-bottom: 16px;\n  width: 100%;\n  max-width: 400px;\n  border-radius: 20px;\n  background-color: ", ";\n\n  transform: ", ";\n  transition: transform 300ms ease-in-out;\n"]);
				return ol = function() {
					return n
				}, n
			}
			var od = J.ZP.div.withConfig({
				componentId: "sc-1fcde45a-0"
			})(ol(), function(n) {
				return n.show ? "16px" : 0
			}, function(n) {
				return n.theme.colors.invertedContrast
			}, function(n) {
				return n.show ? "translateY(0%)" : "translateY(-100%)"
			});

			function op(n) {
				var e = n.loaded,
					t = n.mmTrade,
					r = ou(null == t ? void 0 : t.trade);
				return (0, h.jsx)(od, {
					show: e,
					children: (0, h.jsx)(tV.Tz, {
						gap: "0px",
						children: r && (0, h.jsx)(oc, {
							pairs: null == r ? void 0 : r.route.pairs,
							path: null == r ? void 0 : r.route.path,
							slippageAdjustedAmounts: null == t ? void 0 : t.slippageAdjustedAmounts,
							realizedLPFee: null == t ? void 0 : t.realizedLPFee,
							inputAmount: null == t ? void 0 : t.inputAmount,
							outputAmount: null == t ? void 0 : t.outputAmount,
							tradeType: null == t ? void 0 : t.tradeType,
							priceImpactWithoutFee: null == t ? void 0 : t.priceImpactWithoutFee,
							isMM: !0
						})
					})
				})
			}
			var om = (0, k.memo)(function(n) {
					var e = n.loaded,
						t = n.trade,
						r = rU(t),
						o = rS(),
						i = (0, k.useMemo)(function() {
							return ri(t)
						}, [t]),
						a = i.priceImpactWithoutFee,
						u = i.lpFeeAmount,
						s = (0, k.useMemo)(function() {
							return null == t ? void 0 : t.routes.some(function(n) {
								return n.pools.some(ek.Fn.isStablePool)
							})
						}, [t]);
					if (o || !e || !t) return null;
					var c = t.inputAmount,
						l = t.outputAmount,
						d = t.tradeType,
						p = t.routes;
					return (0, h.jsx)(od, {
						show: e,
						children: (0, h.jsxs)(tV.Tz, {
							gap: "0px",
							children: [(0, h.jsx)(os, {
								slippageAdjustedAmounts: r,
								inputAmount: c,
								outputAmount: l,
								tradeType: d,
								priceImpactWithoutFee: a,
								realizedLPFee: u,
								hasStablePair: s
							}), (0, h.jsx)(rp, {
								routes: p
							})]
						})
					})
				}),
				of = t(83440),
				oh = t(31951),
				ox = t(35676),
				og = t(38898),
				ov = t(55794),
				oy = t(87285),
				ob = t(8992);

			function oj() {
				var n = (0, $.Z)(["\n  width: 50%;\n"]);
				return oj = function() {
					return n
				}, n
			}

			function oC() {
				var n = (0, $.Z)(["\n  min-width: 20px;\n  min-height: 20px;\n  background-color: ", ";\n  border-radius: 50%;\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 8px;\n  font-size: 12px;\n"]);
				return oC = function() {
					return n
				}, n
			}

			function oZ() {
				var n = (0, $.Z)(["\n  width: calc(100% - 20px);\n  display: flex;\n  align-items: center;\n"]);
				return oZ = function() {
					return n
				}, n
			}

			function oT() {
				var n = (0, $.Z)(["\n  width: 100%;\n  height: 2px;\n  background: linear-gradient(\n    90deg,\n    ", "\n      0%,\n    ", "\n      80%\n  );\n  opacity: 0.6;\n"]);
				return oT = function() {
					return n
				}, n
			}
			var ow = (0, J.ZP)(tY.m0).withConfig({
					componentId: "sc-fa5970c9-0"
				})(oj()),
				oA = J.ZP.div.withConfig({
					componentId: "sc-fa5970c9-1"
				})(oC(), function(n) {
					var e = n.theme,
						t = n.confirmed;
					return n.disabled ? e.colors.backgroundDisabled : t ? e.colors.success : e.colors.primary
				}),
				ok = J.ZP.div.withConfig({
					componentId: "sc-fa5970c9-2"
				})(oZ()),
				oS = J.ZP.div.withConfig({
					componentId: "sc-fa5970c9-3"
				})(oT(), function(n) {
					var e = n.theme,
						t = n.prevConfirmed;
					return n.disabled ? e.colors.backgroundDisabled : t ? e.colors.success : e.colors.primary
				}, function(n) {
					var e = n.theme,
						t = n.prevConfirmed;
					return n.disabled ? e.colors.backgroundDisabled : t ? e.colors.primary : e.colors.backgroundDisabled
				});

			function oI(n) {
				var e = n.steps,
					t = n.disabled,
					r = void 0 !== t && t,
					o = (0, tS.Z)(n, ["steps", "disabled"]);
				return (0, h.jsx)(tV.Tz, (0, na.Z)((0, ni.Z)({
					justify: "center"
				}, o), {
					children: (0, h.jsxs)(ow, {
						children: [e.map(function(n, t) {
							return (0, h.jsxs)(ok, {
								children: [(0, h.jsx)(oA, {
									confirmed: n,
									disabled: r || !e[t - 1] && 0 !== t,
									children: n ? "✓" : t + 1
								}), (0, h.jsx)(oS, {
									prevConfirmed: n,
									disabled: r
								})]
							}, t)
						}), (0, h.jsx)(oA, {
							disabled: r || !e[e.length - 1],
							children: e.length + 1
						})]
					})
				}))
			}
			var oP = t(49255),
				oU = t(7700),
				oE = function(n) {
					var e = n.children,
						t = n.handleDismiss,
						r = (0, y.$G)().t;
					return (0, h.jsx)(T.ZP, {
						title: r("Confirm Swap"),
						headerBackground: "gradientCardHeader",
						onDismiss: t,
						children: e
					})
				},
				oN = t(94121),
				oM = function(n) {
					var e = n.onDismiss,
						t = n.message,
						r = n.openSettingModal,
						o = null == t ? void 0 : t.includes("This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance."),
						i = (0, k.useCallback)(function() {
							null == e || e(), o && r && r()
						}, [o, e, r]),
						a = (0, y.$G)().t;
					return o ? (0, h.jsx)(oN.h, {
						message: (0, h.jsxs)(h.Fragment, {
							children: [(0, h.jsxs)(nr.Z, {
								mb: "16px",
								children: [a("This transaction will not succeed either due to price movement or fee on transfer. Try increasing your"), " ", (0, h.jsx)(nr.Z, {
									bold: !0,
									display: "inline",
									style: {
										cursor: "pointer"
									},
									onClick: i,
									children: (0, h.jsx)("u", {
										children: a("slippage tolerance.")
									})
								})]
							}), (0, h.jsx)(em.Z, {
								href: "https://docs.pancakeswap.finance/products/pancakeswap-exchange/trade-guide",
								style: {
									width: "100%",
									justifyContent: "center"
								},
								children: a("What are the potential issues with the token?")
							})]
						})
					}) : (0, h.jsx)(oN.h, {
						message: t,
						onDismiss: e
					})
				},
				oD = (0, k.memo)(function(n) {
					var e = n.trade,
						t = n.originalTrade,
						r = n.currencyBalances,
						o = n.onAcceptChanges,
						i = n.onConfirm,
						a = n.onDismiss,
						u = n.customOnDismiss,
						s = n.swapErrorMessage,
						c = n.attemptingTxn,
						l = n.txHash,
						d = n.openSettingModal,
						p = (0, D.g)().chainId,
						m = (0, y.$G)().t,
						f = (0, v.Z)((0, eI.eq)(), 1)[0],
						x = (0, X.dU)().recipient,
						g = (0, k.useCallback)(function() {
							u && u(), null == a || a()
						}, [u, a]),
						b = c || l ? null : s ? (0, h.jsx)(oM, {
							openSettingModal: d,
							onDismiss: a,
							message: s
						}) : (0, h.jsx)(rT, {
							trade: e,
							currencyBalances: r,
							originalTrade: t,
							onAcceptChanges: o,
							allowedSlippage: f,
							onConfirm: i,
							recipient: x
						}),
						j = (0, k.useMemo)(function() {
							var n, t, r, o, i, a, u, s;
							return m("Swapping %amountA% %symbolA% for %amountB% %symbolB%", {
								amountA: null !== (i = (0, tz.dN)(null == e ? void 0 : e.inputAmount, 6)) && void 0 !== i ? i : "",
								symbolA: null !== (a = null == e ? void 0 : null === (n = e.inputAmount) || void 0 === n ? void 0 : null === (t = n.currency) || void 0 === t ? void 0 : t.symbol) && void 0 !== a ? a : "",
								amountB: null !== (u = (0, tz.dN)(null == e ? void 0 : e.outputAmount, 6)) && void 0 !== u ? u : "",
								symbolB: null !== (s = null == e ? void 0 : null === (r = e.outputAmount) || void 0 === r ? void 0 : null === (o = r.currency) || void 0 === o ? void 0 : o.symbol) && void 0 !== s ? s : ""
							})
						}, [m, e]);
					return p ? (0, h.jsxs)(oE, {
						handleDismiss: g,
						children: [c ? (0, h.jsx)(oP.P, {
							pendingText: j
						}) : l ? (0, h.jsx)(oU.r, {
							chainId: p,
							hash: l,
							onDismiss: g,
							currencyToAdd: null == e ? void 0 : e.outputAmount.currency
						}) : null, b]
					}) : null
				}),
				oF = (0, t9.h7)(t9.ZP),
				oL = (0, k.memo)(function(n) {
					var e, t, r, o, i, a, u, s, c, l, d, p, f, x, b, j, C, Z, T, w, A, I, P, U, E, M, D, F, L, B, R, O, _, z, q, G, H, Q, $, Y, K, J, nn, nt, no, nu, ns, nc, nl, nm, nf, nh, nx, ng, nv, ny, nb, nj, nC, nT = n.trade,
						nw = n.tradeError,
						nA = n.tradeLoading,
						nk = (0, y.$G)().t,
						nS = (0, et.Z)().account,
						nI = (0, v.Z)((0, eI.zu)(), 1)[0],
						nP = (0, X.dU)(),
						nU = nP.typedValue,
						nE = nP.independentField,
						nN = nP[V.gN.INPUT].currencyId,
						nM = nP[V.gN.OUTPUT].currencyId,
						nD = (0, W.U8)(nN),
						nF = (0, W.U8)(nM),
						nL = (0, of .mP)(nD, nF),
						nB = (0, S._)().onUserInput,
						nR = (0, rk.ZP)(nD, nF, nU),
						nO = nR.wrapType,
						n_ = nR.execute,
						nz = nR.inputError,
						nq = nO !== rk.kC.NOT_APPLICABLE,
						nG = (0, v.Z)((0, tN.pW)(), 2),
						nW = nG[0],
						nV = nG[1],
						nX = rU(nT),
						nH = ek.Cu[null == nT ? void 0 : null === (nb = nT.inputAmount) || void 0 === nb ? void 0 : nb.currency.chainId],
						nQ = nX[V.gN.INPUT],
						nY = (0, tt.K5)(null != nS ? nS : void 0, [null != nD ? nD : void 0, null != nF ? nF : void 0]),
						nK = (nj = {}, (0, g.Z)(nj, V.gN.INPUT, nY[0]), (0, g.Z)(nj, V.gN.OUTPUT, nY[1]), nj),
						nJ = (0, v.Z)((0, oy.qL)(nQ, nH), 2),
						n0 = nJ[0],
						n1 = nJ[1],
						n9 = (0, k.useMemo)(function() {
							return !nq && ri(nT)
						}, [nq, nT]).priceImpactWithoutFee,
						n2 = (e = nT, t = nK, a = (0, y.$G)().t, u = (0, t_.Ge)().account, c = (s = (0, X.dU)()).independentField, l = s.typedValue, d = null === (r = t[V.gN.INPUT]) || void 0 === r ? void 0 : r.currency, p = null === (o = t[V.gN.OUTPUT]) || void 0 === o ? void 0 : o.currency, f = rU(e), x = u || null, b = c === V.gN.INPUT ? d : p, j = (0, te.Z)(l, null != b ? b : void 0), u || (i = a("Connect Wallet")), j || (i = null != i ? i : a("Enter an amount")), d && p || (i = null != i ? i : a("Select a token")), C = (0, np.UJ)(x), x && C ? (-1 !== rE.indexOf(C) || e && e.routes.some(function(n) {
							return n.path.some(function(n) {
								return n.isToken && n.address === C
							})
						})) && (i = null != i ? i : a("Invalid recipient")) : i = null != i ? i : a("Enter a recipient"), T = (Z = [t[V.gN.INPUT], f ? f[V.gN.INPUT] : null])[0], w = Z[1], T && w && T.lessThan(w) && (i = a("Insufficient %symbol% balance", {
							symbol: w.currency.symbol
						})), i),
						n5 = (M = (E = (0, X.dU)()).independentField, D = E.typedValue, F = null === (A = nK[V.gN.INPUT]) || void 0 === A ? void 0 : A.currency, L = null === (I = nK[V.gN.OUTPUT]) || void 0 === I ? void 0 : I.currency, B = M === V.gN.INPUT ? F : L, R = (0, te.Z)(D, null != B ? B : void 0), nq ? (P = {}, (0, g.Z)(P, V.gN.INPUT, R), (0, g.Z)(P, V.gN.OUTPUT, R), P) : (U = {}, (0, g.Z)(U, V.gN.INPUT, M === V.gN.INPUT ? R : null == nT ? void 0 : nT.inputAmount), (0, g.Z)(U, V.gN.OUTPUT, M === V.gN.OUTPUT ? R : null == nT ? void 0 : nT.outputAmount), U))[nE],
						n4 = (_ = (O = {
							trade: nT,
							deadline: (0, ob.Z)()
						}).trade, z = O.deadline, q = O.feeOptions, G = (0, y.$G)().t, Q = (H = (0, et.Z)()).account, $ = H.chainId, Y = (0, rM.J)(), K = (0, v.Z)((0, eI.eq)() || [rN.gv], 1)[0], J = (0, k.useMemo)(function() {
							return (0, rr.P4)(K)
						}, [K]), nt = null === (nn = (0, X.dU)().recipient) ? Q : nn, nu = (no = (0, et.Z)()).account, ns = no.chainId, nc = (0, rM.J)(), nl = null === nn ? nu : nn, nm = (0, k.useMemo)(function() {
							if (!_ || !nl || !nc || !nu || !ns) return [];
							var n = ns ? ek.Cu[ns] : void 0;
							if (!n) return [];
							var e = ek.cH.swapCallParameters(_, {
									fee: q,
									recipient: nl,
									slippageTolerance: J,
									deadlineOrPreviousBlockhash: null == z ? void 0 : z.toString()
								}),
								t = e.value;
							return [{
								address: n,
								calldata: e.calldata,
								value: t
							}]
						}, [nu, J, ns, z, q, nc, nl, _]), ny = (nf = (0, y.$G)().t, nh = (0, rB.h7)(), nx = (0, v.Z)((0, eI.eq)() || [rN.gv], 1)[0], nv = null === (ng = (0, X.dU)().recipient) ? Q : ng, (0, k.useMemo)(function() {
							var n;
							return _ && Y && Q && $ && (rF.Signer.isSigner(Y) || Y instanceof rD.r) ? {
								callback: (n = (0, eU.Z)(function() {
									var n, e, t, r, o, i, a, u;
									return (0, eF.__generator)(this, function(s) {
										switch (s.label) {
											case 0:
												return [4, Promise.all(nm.map(function(n) {
													var e = n.address,
														t = n.calldata,
														r = n.value,
														o = !r || r_(r) ? {
															from: Q,
															to: e,
															data: t
														} : {
															from: Q,
															to: e,
															data: t,
															value: r
														};
													return Y.estimateGas(o).then(function(e) {
														return {
															call: n,
															gasEstimate: e
														}
													}).catch(function(e) {
														return console.debug("Gas estimate failed, trying eth_call to extract error", n), Y.call(o).then(function(t) {
															return console.debug("Unexpected successful call after failed estimate gas", n, e, t), {
																call: n,
																error: nf("Unexpected issue with estimating the gas.Please try again.")
															}
														}).catch(function(e) {
															return console.debug("Call threw error", n, e), {
																call: n,
																error: (0, rL.e)(e, nf)
															}
														})
													})
												}))];
											case 1:
												if (!(e = (n = s.sent()).find(function(n, e, t) {
														return "gasEstimate" in n && (e === t.length - 1 || "gasEstimate" in t[e + 1])
													}))) {
													if ((t = n.filter(function(n) {
															return "error" in n
														})).length > 0) throw t[t.length - 1].error;
													if (!(r = n.find(function(n) {
															return !("error" in n)
														}))) throw Error(nf("Unexpected error. Could not estimate gas for the swap."));
													e = r
												}
												return i = (o = e.call).address, a = o.calldata, u = o.value, [2, (rF.Signer.isSigner(Y) ? Y : Y.getSigner()).sendTransaction((0, ni.Z)({
													from: Q,
													to: i,
													data: a
												}, "gasEstimate" in e ? {
													gasLimit: (0, np.yC)(e.gasEstimate)
												} : {}, u && !r_(u) ? {
													value: u
												} : {})).then(function(n) {
													if (a !== n.data) throw new rz(nf("Your swap was modified through your wallet. If this was a mistake, please cancel immediately or risk losing your funds."));
													var e = _.inputAmount.currency.symbol,
														t = _.outputAmount.currency.symbol,
														r = (0, rr.P4)(nx),
														o = _.tradeType === N.YL.EXACT_INPUT ? (0, tz.dN)(_.inputAmount, 3) : (0, tz.dN)(ek.Fn.maximumAmountIn(_, r), 3),
														i = _.tradeType === N.YL.EXACT_OUTPUT ? (0, tz.dN)(_.outputAmount, 3) : (0, tz.dN)(ek.Fn.minimumAmountOut(_, r), 3),
														u = "Swap ".concat(_.tradeType === N.YL.EXACT_OUTPUT ? "max." : "", " ").concat(o, " ").concat(e, " for ").concat(_.tradeType === N.YL.EXACT_INPUT ? "min." : "", " ").concat(i, " ").concat(t),
														s = nv && (0, np.UJ)(nv) ? (0, rC.Z)(nv) : nv;
													return nh(n, {
														summary: ng === Q ? u : "".concat(u, " to ").concat(s),
														translatableSummary: {
															text: _.tradeType === N.YL.EXACT_OUTPUT ? ng === Q ? "Swap max. %inputAmount% %inputSymbol% for %outputAmount% %outputSymbol%" : "Swap max. %inputAmount% %inputSymbol% for %outputAmount% %outputSymbol% to %recipientAddress%" : ng === Q ? "Swap %inputAmount% %inputSymbol% for min. %outputAmount% %outputSymbol%" : "Swap %inputAmount% %inputSymbol% for min. %outputAmount% %outputSymbol% to %recipientAddress%",
															data: (0, ni.Z)({
																inputAmount: o,
																inputSymbol: e,
																outputAmount: i,
																outputSymbol: t
															}, ng !== Q && {
																recipientAddress: s
															})
														},
														type: "swap"
													}), (0, rR.M)({
														chainId: $,
														inputAmount: o,
														outputAmount: i,
														input: _.inputAmount.currency,
														output: _.outputAmount.currency,
														type: "V3SmartSwap"
													}), (0, rR.u)({
														account: Q,
														chainId: $,
														hash: n.hash
													}), n
												}).catch(function(n) {
													if ((0, rO.Z)(n)) throw new rq(nf("Transaction rejected"));
													if (console.error("Swap failed", n, i, a, u), n instanceof rz) throw n;
													throw Error("Swap failed: ".concat((0, rL.e)(n, nf)))
												})]
										}
									})
								}), function() {
									return n.apply(this, arguments)
								})
							} : {
								callback: null
							}
						}, [Q, $, Y, nm, _, nf, nh, nx, nv, ng])).callback, (0, k.useMemo)(function() {
							return _ && Y && Q && $ && ny ? nt ? {
								state: m.VALID,
								callback: (0, eU.Z)(function() {
									return (0, eF.__generator)(this, function(n) {
										return [2, ny()]
									})
								})
							} : null !== nn ? {
								state: m.INVALID,
								error: G("Invalid recipient")
							} : {
								state: m.LOADING
							} : {
								state: m.INVALID,
								error: G("Missing dependencies")
							}
						}, [_, Q, $, ny, nt, nn, Y, G])),
						n6 = n4.callback,
						n3 = n4.error,
						n8 = (0, v.Z)((0, k.useState)({
							tradeToConfirm: void 0,
							attemptingTxn: !1,
							swapErrorMessage: void 0,
							txHash: void 0
						}), 2),
						n7 = n8[0],
						en = n7.tradeToConfirm,
						ee = n7.swapErrorMessage,
						er = n7.attemptingTxn,
						ei = n7.txHash,
						ea = n8[1],
						eu = (0, v.Z)((0, k.useState)(!1), 2),
						es = eu[0],
						ec = eu[1],
						el = (0, k.useCallback)(function() {
							ea({
								tradeToConfirm: en,
								attemptingTxn: er,
								swapErrorMessage: ee,
								txHash: ei
							}), ei && nB(V.gN.INPUT, "")
						}, [er, nB, ee, en, ei, ea]),
						ed = (0, k.useCallback)(function() {
							(!n9 || function(n, e, t, r) {
								if (!n.lessThan(e)) {
									var o = "confirm";
									return window.prompt(r('This swap has a price impact of at least %amount%%. Please type the word "%word%" to continue with this swap.', {
										amount: e.toFixed(0),
										word: o
									})) === o
								}
								return !!n.lessThan(t) || window.confirm(r("This swap has a price impact of at least %amount%%. Please confirm that you would like to continue with this swap.", {
									amount: t.toFixed(0)
								}))
							}(n9, eH.EV, eH.Uf, nk)) && n6 && (ea({
								attemptingTxn: !0,
								tradeToConfirm: en,
								swapErrorMessage: void 0,
								txHash: void 0
							}), n6().then(function(n) {
								ea({
									attemptingTxn: !1,
									tradeToConfirm: en,
									swapErrorMessage: void 0,
									txHash: n.hash
								})
							}).catch(function(n) {
								if (n instanceof rq) {
									el();
									return
								}
								ea({
									attemptingTxn: !1,
									tradeToConfirm: en,
									swapErrorMessage: "string" == typeof n ? n : n.message,
									txHash: void 0
								})
							}))
						}, [n9, n6, en, nk, ea, el]),
						ep = (0, k.useCallback)(function() {
							ea({
								tradeToConfirm: nT,
								swapErrorMessage: ee,
								txHash: ei,
								attemptingTxn: er
							})
						}, [er, ee, nT, ei, ea]),
						em = (0, v.Z)((0, k.useState)(!1), 2),
						ef = em[0],
						eh = em[1],
						ex = (0, v.Z)((0, n$.Z)((0, h.jsx)(oF, {
							customOnDismiss: function() {
								return eh(!0)
							},
							mode: tD.a.SWAP_LIQUIDITY
						})), 1)[0],
						eg = (0, v.Z)((0, n$.Z)((0, h.jsx)(oD, {
							trade: nT,
							originalTrade: en,
							currencyBalances: nK,
							onAcceptChanges: ep,
							attemptingTxn: er,
							txHash: ei,
							onConfirm: ed,
							swapErrorMessage: ee,
							customOnDismiss: el,
							openSettingModal: ex
						}), !0, !0, "confirmSwapModal"), 1)[0],
						ev = (0, k.useCallback)(function() {
							nI ? ed() : (ea({
								tradeToConfirm: nT,
								attemptingTxn: !1,
								swapErrorMessage: void 0,
								txHash: void 0
							}), eg()), (0, nZ.K2)()
						}, [nI, ed, eg, nT]);
					(0, k.useEffect)(function() {
						ef && (eh(!1), ea(function(n) {
							return (0, na.Z)((0, ni.Z)({}, n), {
								swapErrorMessage: void 0
							})
						}), eg())
					}, [ef, eg, ea]), (0, k.useEffect)(function() {
						ec(!1)
					}, [null == nT ? void 0 : nT.inputAmount.currency]), (0, k.useEffect)(function() {
						n0 === oy.UK.PENDING && ec(!0)
					}, [n0, es]);
					var ey = (0, rr.oX)(n9);
					if (nL) return (0, h.jsx)(ne.Z, {
						width: "100%",
						disabled: !0,
						children: nk("Unsupported Asset")
					});
					if (!nS) return (0, h.jsx)(og.Z, {
						width: "100%"
					});
					if (nq) return (0, h.jsx)(ox.A, {
						width: "100%",
						disabled: Boolean(nz),
						onClick: n_,
						children: null != nz ? nz : nO === rk.kC.WRAP ? "Wrap" : nO === rk.kC.UNWRAP ? "Unwrap" : null
					});
					var eb = !((null == nT ? void 0 : nT.routes.length) > 0) || nw,
						ej = Boolean(nD && nF && (null == n5 ? void 0 : n5.greaterThan(eH.iV)));
					if (eb && ej) return (0, h.jsxs)(tV.Tz, {
						gap: "12px",
						children: [(0, h.jsx)(oh.h2, {
							style: {
								textAlign: "center",
								padding: "0.75rem"
							},
							children: (0, h.jsx)(nr.Z, {
								color: "textSubtle",
								children: nk("Insufficient liquidity for this trade.")
							})
						}), nW && (0, h.jsx)(eo.Z, {
							variant: "warning",
							icon: (0, h.jsx)(h.Fragment, {}),
							children: (0, h.jsxs)(tV.Tz, {
								gap: "8px",
								children: [(0, h.jsx)(eo.Y, {
									children: nk("Unable to establish trading route due to customized routing.")
								}), (0, h.jsxs)(tY.BA, {
									gap: "4px",
									children: [(0, h.jsx)(t9.D, {
										buttonProps: {
											scale: "xs",
											p: 0
										},
										showRedDot: !1,
										children: nk("Check your settings")
									}), (0, h.jsx)(eo.Y, {
										children: nk("or")
									}), (0, h.jsx)(ne.Z, {
										variant: "text",
										scale: "xs",
										p: "0",
										onClick: nV,
										children: nk("Reset to default")
									})]
								})]
							})
						})]
					});
					var eC = !n2 && (n0 === oy.UK.NOT_APPROVED || n0 === oy.UK.PENDING || es && n0 === oy.UK.APPROVED) && !(ey > 3 && !nI),
						eZ = !n2 && !nA,
						eT = n0 === oy.UK.APPROVED,
						ew = eC ? (0, h.jsxs)(h.Fragment, {
							children: [(0, h.jsxs)(tY.m0, {
								children: [(0, h.jsx)(ox.A, {
									variant: n0 === oy.UK.APPROVED ? "success" : "primary",
									onClick: n1,
									disabled: n0 !== oy.UK.NOT_APPROVED || es,
									width: "48%",
									children: n0 === oy.UK.PENDING ? (0, h.jsxs)(tY.BA, {
										gap: "6px",
										justify: "center",
										children: [nk("Enabling"), " ", (0, h.jsx)(ov.Z, {
											stroke: "white"
										})]
									}) : es && eT ? nk("Enabled") : nk("Enable %asset%", {
										asset: null !== (nC = null == nD ? void 0 : nD.symbol) && void 0 !== nC ? nC : ""
									})
								}), (0, h.jsx)(ox.A, {
									variant: eZ && ey > 2 ? "danger" : "primary",
									onClick: function() {
										ev()
									},
									width: "48%",
									id: "swap-button",
									disabled: !eZ || !eT || ey > 3 && !nI,
									children: ey > 3 && !nI ? nk("Price Impact High") : ey > 2 ? nk("Swap Anyway") : nk("Swap")
								})]
							}), (0, h.jsx)(tV.sg, {
								style: {
									marginTop: "1rem"
								},
								children: (0, h.jsx)(oI, {
									steps: [n0 === oy.UK.APPROVED]
								})
							}), nI && ee ? (0, h.jsx)(tX.rn, {
								error: ee
							}) : null]
						}) : (0, h.jsxs)(h.Fragment, {
							children: [(0, h.jsx)(ox.A, {
								variant: eZ && ey > 2 && !n3 ? "danger" : "primary",
								onClick: function() {
									ev()
								},
								id: "swap-button",
								width: "100%",
								disabled: !eZ || ey > 3 && !nI || !!n3 || !eT,
								children: n2 || (ey > 3 && !nI ? nk("Price Impact Too High") : ey > 2 ? nk("Swap Anyway") : nk("Swap"))
							}), nI && ee ? (0, h.jsx)(tX.rn, {
								error: ee
							}) : null]
						});
					return (0, h.jsx)(nd.ZP, {
						mt: "0.25rem",
						children: ew
					})
				}),
				oB = t(61898),
				oR = t(50930),
				oO = t(74998);
			(s = f || (f = {}))[s.INVALID = 0] = "INVALID", s[s.LOADING = 1] = "LOADING", s[s.VALID = 2] = "VALID";
			var o_ = t(98909),
				oz = t(6022);

			function oq() {
				var n = (0, $.Z)(["\n  margin-top: 24px;\n  padding: 16px;\n  border-radius: ", ";\n  border: 1px solid ", ";\n  background-color: ", ";\n"]);
				return oq = function() {
					return n
				}, n
			}
			var oG = (0, J.ZP)(tV.Tz).withConfig({
				componentId: "sc-8d05e13f-0"
			})(oq(), function(n) {
				return n.theme.radii.default
			}, function(n) {
				return n.theme.colors.cardBorder
			}, function(n) {
				return n.theme.colors.background
			});

			function oW(n) {
				var e, t, r, o, i = n.trade,
					a = n.slippageAdjustedAmounts,
					u = n.isEnoughInputBalance,
					s = n.onConfirm,
					c = n.swapErrorMessage,
					l = n.disabledConfirm,
					d = n.isMM,
					p = n.isRFQReady,
					m = void 0 !== p && p,
					f = (0, y.$G)().t,
					x = (0, v.Z)((0, k.useState)(!1), 2),
					g = x[0],
					b = x[1],
					j = (0, k.useMemo)(function() {
						return e5(i)
					}, [i]),
					C = j.priceImpactWithoutFee,
					Z = j.realizedLPFee,
					T = (0, rr.oX)(C),
					w = "".concat((100 * oz.om).toFixed(2), "%"),
					A = "".concat((100 * oz.BY).toFixed(2), "%"),
					S = "".concat((100 * oz.hT).toFixed(4), "%"),
					I = "".concat((100 * oz.xy).toFixed(4), "%");
				return (0, h.jsxs)(h.Fragment, {
					children: [(0, h.jsxs)(oG, {
						children: [(0, h.jsxs)(tY.m0, {
							align: "center",
							children: [(0, h.jsx)(nr.Z, {
								fontSize: "14px",
								children: f("Price")
							}), (0, h.jsxs)(nr.Z, {
								fontSize: "14px",
								style: {
									justifyContent: "center",
									alignItems: "center",
									display: "flex",
									textAlign: "right",
									paddingLeft: "10px"
								},
								children: [i ? g ? "".concat(e4(i).invert().toSignificant(6), " ").concat(i.inputAmount.currency.symbol, " / ").concat(i.outputAmount.currency.symbol) : "".concat(e4(i).toSignificant(6), " ").concat(i.outputAmount.currency.symbol, " / ").concat(i.inputAmount.currency.symbol) : "", (0, h.jsx)(tX.k0, {
									onClick: function() {
										return b(!g)
									},
									children: (0, h.jsx)(rh.Z, {
										width: "14px"
									})
								})]
							})]
						}), (0, h.jsxs)(tY.m0, {
							children: [(0, h.jsxs)(tY.DA, {
								children: [(0, h.jsx)(nr.Z, {
									fontSize: "14px",
									children: f(i.tradeType === N.YL.EXACT_INPUT ? "Minimum received" : "Maximum sold")
								}), (0, h.jsx)(tQ.s, {
									text: f("Your transaction will revert if there is a large, unfavorable price movement before it is confirmed."),
									ml: "4px",
									placement: "top"
								})]
							}), (0, h.jsxs)(tY.DA, {
								children: [(0, h.jsx)(nr.Z, {
									fontSize: "14px",
									children: i.tradeType === N.YL.EXACT_INPUT ? null !== (r = null === (e = a[V.gN.OUTPUT]) || void 0 === e ? void 0 : e.toSignificant(4)) && void 0 !== r ? r : "-" : null !== (o = null === (t = a[V.gN.INPUT]) || void 0 === t ? void 0 : t.toSignificant(4)) && void 0 !== o ? o : "-"
								}), (0, h.jsx)(nr.Z, {
									fontSize: "14px",
									marginLeft: "4px",
									children: i.tradeType === N.YL.EXACT_INPUT ? i.outputAmount.currency.symbol : i.inputAmount.currency.symbol
								})]
							})]
						}), (0, h.jsxs)(tY.m0, {
							children: [(0, h.jsxs)(tY.DA, {
								children: [(0, h.jsx)(nr.Z, {
									fontSize: "14px",
									children: f("Price Impact")
								}), (0, h.jsx)(tQ.s, {
									text: (0, h.jsxs)(h.Fragment, {
										children: [(0, h.jsxs)(nr.Z, {
											children: [(0, h.jsx)(nr.Z, {
												bold: !0,
												display: "inline-block",
												children: f("AMM")
											}), ": ".concat(f("The difference between the market price and estimated price due to trade size."))]
										}), (0, h.jsxs)(nr.Z, {
											mt: "10px",
											children: [(0, h.jsx)(nr.Z, {
												bold: !0,
												display: "inline-block",
												children: f("MM")
											}), ": ".concat(f("No slippage against quote from market maker"))]
										})]
									}),
									ml: "4px",
									placement: "top"
								})]
							}), void 0 !== d && d ? (0, h.jsx)(nr.Z, {
								color: "textSubtle",
								children: "--"
							}) : (0, h.jsx)(rx, {
								priceImpact: C
							})]
						}), (0, h.jsxs)(tY.m0, {
							children: [(0, h.jsxs)(tY.DA, {
								children: [(0, h.jsx)(nr.Z, {
									fontSize: "14px",
									children: f("Trading Fee")
								}), (0, h.jsx)(tQ.s, {
									text: (0, h.jsxs)(h.Fragment, {
										children: [(0, h.jsxs)(nr.Z, {
											mb: "12px",
											children: [(0, h.jsx)(nr.Z, {
												bold: !0,
												display: "inline-block",
												children: f("AMM")
											}), ": ", f("For each non-stableswap trade, a %amount% fee is paid", {
												amount: w
											})]
										}), (0, h.jsxs)(nr.Z, {
											children: ["- ", f("%amount% to LP token holders", {
												amount: A
											})]
										}), (0, h.jsxs)(nr.Z, {
											children: ["- ", f("%amount% to the Treasury", {
												amount: S
											})]
										}), (0, h.jsxs)(nr.Z, {
											children: ["- ", f("%amount% towards MMF buyback and burn", {
												amount: I
											})]
										}), (0, h.jsxs)(nr.Z, {
											mt: "12px",
											children: [f("For each stableswap trade, refer to the fee table"), (0, h.jsx)(ea.Z, {
												style: {
													display: "inline"
												},
												ml: "4px",
												external: !0,
												href: "https://docs.pancakeswap.finance/products/stableswap#stableswap-fees",
												children: f("here.")
											})]
										}), (0, h.jsxs)(nr.Z, {
											mt: "10px",
											children: [(0, h.jsx)(nr.Z, {
												bold: !0,
												display: "inline-block",
												children: f("MM")
											}), ":", " ", f("MadMeerkatFinance does not charge any fees for trades. However, the market makers charge an implied fee of 0.05% (non-stablecoin) / 0.01% (stablecoin) factored into the quotes provided by them.")]
										})]
									}),
									ml: "4px",
									placement: "top"
								})]
							}), (0, h.jsx)(nr.Z, {
								fontSize: "14px",
								children: Z ? "".concat(null == Z ? void 0 : Z.toSignificant(6), " ").concat(i.inputAmount.currency.symbol) : "-"
							})]
						})]
					}), (0, h.jsxs)(tY.BA, {
						children: [(0, h.jsx)(ne.Z, {
							variant: T > 2 ? "danger" : "primary",
							onClick: s,
							disabled: l || !m,
							mt: "12px",
							id: "confirm-swap-or-send",
							width: "100%",
							children: m ? f(T > 2 || i.tradeType === N.YL.EXACT_OUTPUT && !u ? "Swap Anyway" : "Confirm Swap") : (0, h.jsx)(o_.b, {
								children: f("Checking RFQ with MM")
							})
						}), c ? (0, h.jsx)(tX.rn, {
							error: c
						}) : null]
					})]
				})
			}
			var oV = t(69924),
				oX = (0, k.memo)(function() {
					var n = (0, y.$G)().t,
						e = (0, tx.Z)((0, h.jsx)(nr.Z, {
							width: "266px",
							fontSize: "16px",
							children: n("The Market Maker (MM) is currently executing for your trade, there is no slippage against the quote from MM.")
						}), {
							placement: "top-end",
							trigger: "hover",
							tooltipOffset: [-3, 0]
						}),
						t = e.tooltip,
						r = e.tooltipVisible,
						o = e.targetRef;
					return (0, h.jsxs)(h.Fragment, {
						children: [(0, h.jsxs)(nr.Z, {
							ref: o,
							color: "textSubtle",
							display: "flex",
							fontSize: "14px",
							style: {
								gap: 5
							},
							children: ["-- ", (0, h.jsx)(oV.Z, {
								width: "13px"
							})]
						}), r && t]
					})
				}),
				oH = (0, k.memo)(function(n) {
					var e = n.trade,
						t = n.originalTrade,
						r = n.onAcceptChanges,
						o = n.onConfirm,
						i = n.recipient,
						a = n.currencyBalances,
						u = n.isRFQReady,
						s = (0, k.useMemo)(function() {
							return Boolean(e && t && (e.tradeType !== t.tradeType || !e.inputAmount.currency.equals(t.inputAmount.currency) || !e.inputAmount.equalTo(t.inputAmount) || !e.outputAmount.currency.equals(t.outputAmount.currency) || !e.outputAmount.equalTo(t.outputAmount)))
						}, [t, e]),
						c = (0, k.useMemo)(function() {
							var n;
							return n = {}, (0, g.Z)(n, V.gN.INPUT, null == e ? void 0 : e.inputAmount), (0, g.Z)(n, V.gN.OUTPUT, null == e ? void 0 : e.outputAmount), n
						}, [e]),
						l = (0, k.useMemo)(function() {
							return e5(e)
						}, [e]).priceImpactWithoutFee,
						d = (0, k.useMemo)(function() {
							if ((null == e ? void 0 : e.tradeType) !== N.YL.EXACT_OUTPUT) return null;
							var n = !!(a && a[V.gN.INPUT]),
								t = n && a[V.gN.INPUT].currency.isNative,
								r = n ? t ? (0, tW.i)(a[V.gN.INPUT]) : a[V.gN.INPUT] : null;
							return !!r && !!c && !!c[V.gN.INPUT] && (r.greaterThan(c[V.gN.INPUT]) || r.equalTo(c[V.gN.INPUT]))
						}, [a, e, c]),
						p = (0, k.useCallback)(function() {
							return e ? (0, h.jsx)(rZ, {
								inputAmount: e.inputAmount,
								outputAmount: e.outputAmount,
								tradeType: e.tradeType,
								priceImpactWithoutFee: l,
								allowedSlippage: (0, h.jsx)(oX, {}),
								slippageAdjustedAmounts: c,
								isEnoughInputBalance: d,
								recipient: i,
								showAcceptChanges: s,
								onAcceptChanges: r
							}) : null
						}, [l, r, i, s, e, c, d]),
						m = (0, k.useCallback)(function() {
							return e ? (0, h.jsx)(oW, {
								isMM: !0,
								isRFQReady: u,
								onConfirm: o,
								trade: e,
								disabledConfirm: s,
								slippageAdjustedAmounts: c,
								isEnoughInputBalance: d
							}) : null
						}, [o, s, e, d, c, u]);
					return (0, h.jsx)(rf.p, {
						topContent: p,
						bottomContent: m
					})
				}),
				oQ = function(n) {
					var e = n.onDismiss,
						t = n.message,
						r = n.openSettingModal,
						o = null == t ? void 0 : t.includes("This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance."),
						i = (0, k.useCallback)(function() {
							null == e || e(), o && r && r()
						}, [o, e, r]),
						a = (0, y.$G)().t;
					return o ? (0, h.jsx)(oN.h, {
						message: (0, h.jsxs)(h.Fragment, {
							children: [(0, h.jsxs)(nr.Z, {
								mb: "16px",
								children: [a("This transaction will not succeed either due to price movement or fee on transfer. Try increasing your"), " ", (0, h.jsx)(nr.Z, {
									bold: !0,
									display: "inline",
									style: {
										cursor: "pointer"
									},
									onClick: i,
									children: (0, h.jsx)("u", {
										children: a("slippage tolerance.")
									})
								})]
							}), (0, h.jsx)(em.Z, {
								href: "https://docs.pancakeswap.finance/products/pancakeswap-exchange/trade-guide",
								style: {
									width: "100%",
									justifyContent: "center"
								},
								children: a("What are the potential issues with the token?")
							})]
						})
					}) : (0, h.jsx)(oN.h, {
						message: t,
						onDismiss: e
					})
				},
				o$ = (0, k.memo)(function(n) {
					var e = n.trade,
						t = n.originalTrade,
						r = n.currencyBalances,
						o = n.onAcceptChanges,
						i = n.onConfirm,
						a = n.onDismiss,
						u = n.customOnDismiss,
						s = n.recipient,
						c = n.swapErrorMessage,
						l = n.attemptingTxn,
						d = n.txHash,
						p = n.openSettingModal,
						m = n.isRFQReady,
						f = (0, D.g)().chainId,
						x = (0, y.$G)().t,
						g = (0, v.Z)((0, k.useState)(function() {
							return ""
						}), 2),
						b = g[0],
						j = g[1],
						C = (0, k.useCallback)(function() {
							u && u(), null == a || a()
						}, [u, a]);
					(0, k.useEffect)(function() {
						d && j(d)
					}, [d]);
					var Z = (0, k.useCallback)(function() {
							return c ? (0, h.jsx)(oQ, {
								openSettingModal: p,
								onDismiss: a,
								message: c
							}) : (0, h.jsx)(oH, {
								isRFQReady: m,
								trade: e,
								currencyBalances: r,
								originalTrade: t,
								onAcceptChanges: o,
								onConfirm: i,
								recipient: s
							})
						}, [e, t, o, i, s, c, a, p, r, m]),
						T = (0, k.useMemo)(function() {
							var n, t, r, o, i, a, u, s, c, l;
							return x("Swapping %amountA% %symbolA% for %amountB% %symbolB%", {
								amountA: null !== (u = null == e ? void 0 : null === (n = e.inputAmount) || void 0 === n ? void 0 : n.toSignificant(6)) && void 0 !== u ? u : "",
								symbolA: null !== (s = null == e ? void 0 : null === (t = e.inputAmount) || void 0 === t ? void 0 : null === (r = t.currency) || void 0 === r ? void 0 : r.symbol) && void 0 !== s ? s : "",
								amountB: null !== (c = null == e ? void 0 : null === (o = e.outputAmount) || void 0 === o ? void 0 : o.toSignificant(6)) && void 0 !== c ? c : "",
								symbolB: null !== (l = null == e ? void 0 : null === (i = e.outputAmount) || void 0 === i ? void 0 : null === (a = i.currency) || void 0 === a ? void 0 : a.symbol) && void 0 !== l ? l : ""
							})
						}, [x, e]);
					return f ? (0, h.jsx)(oE, {
						handleDismiss: C,
						children: l ? (0, h.jsx)(oP.P, {
							pendingText: T
						}) : d || b ? (0, h.jsx)(oU.r, {
							chainId: f,
							hash: d,
							onDismiss: C,
							currencyToAdd: null == e ? void 0 : e.outputAmount.currency
						}) : Z()
					}) : null
				}),
				oY = (0, t9.h7)(t9.ZP);

			function oK(n) {
				var e, t, r, o, i, a, u, s, c, l, d, p, m, x, g, b, j, C, Z, T, w = n.swapIsUnsupported,
					A = n.account,
					S = n.showWrap,
					I = n.wrapInputError,
					P = n.onWrap,
					U = n.wrapType,
					E = n.approval,
					F = n.approveCallback,
					L = n.approvalSubmitted,
					B = n.currencies,
					R = n.isExpertMode,
					O = n.rfqTrade,
					_ = n.swapInputError,
					z = n.currencyBalances,
					q = n.recipient,
					G = n.onUserInput,
					W = (0, y.$G)().t,
					X = (e = O.trade, t = O.rfq, o = (r = (0, et.Z)()).account, i = r.chainId, a = null != q ? q : o, u = (0, ob.Z)(), s = (0, D.g)().chainId, c = (0, eQ.cq)(e1[s], eX, !0), l = e2[i], (0, k.useMemo)(function() {
						if (!e || !a || !o || !i || !u || !l || !t || !c) return [];
						var n, r, s, d, p = [];
						return p.push((r = e.inputAmount.currency.isNative, s = e.outputAmount.currency.isNative, (0, oB.Z)(!(r && s), "ETHER_IN_OUT"), (0, oB.Z)(t, "RFQ_REQUIRED"), (0, oB.Z)(t.trader !== eJ, "RFQ_REQUIRED"), d = [l, {
							nonce: null == t ? void 0 : t.nonce,
							user: a,
							baseToken: null == t ? void 0 : t.takerSideToken,
							quoteToken: null == t ? void 0 : t.makerSideToken,
							baseTokenAmount: null == t ? void 0 : t.takerSideTokenAmount,
							quoteTokenAmount: null == t ? void 0 : t.makerSideTokenAmount,
							expiryTimestamp: null == t ? void 0 : t.quoteExpiry.toString()
						}, t.signature], r && (n = t.takerSideTokenAmount), {
							methodName: "swap",
							args: d,
							value: n
						})), p.map(function(n) {
							return {
								parameters: n,
								contract: c
							}
						})
					}, [o, i, c, u, a, e, t, l])),
					H = (d = O.trade, m = (p = (0, et.Z)()).account, x = p.chainId, g = (0, M.Fh)(), b = (0, y.$G)().t, j = (0, rB.h7)(), C = null === q ? m : q, (0, k.useMemo)(function() {
						var n;
						return d && m && x ? C ? {
							state: f.VALID,
							callback: (n = (0, eU.Z)(function() {
								var n, e, t, r, o, i, a, u, s, c;
								return (0, eF.__generator)(this, function(l) {
									switch (l.label) {
										case 0:
											return [4, Promise.all(X.map(function(n) {
												var e, t = n.parameters,
													r = t.methodName,
													o = t.args,
													i = t.value,
													a = n.contract,
													u = !i || (0, oO.Z)(i) ? {} : {
														value: i
													};
												return (e = a.estimateGas)[r].apply(e, (0, oR.Z)(o).concat([u])).then(function(e) {
													return {
														call: n,
														gasEstimate: e
													}
												}).catch(function(e) {
													var t;
													return console.error("Gas estimate failed, trying eth_call to extract error", n), (t = a.callStatic)[r].apply(t, (0, oR.Z)(o).concat([u])).then(function(t) {
														return console.error("Unexpected successful call after failed estimate gas", n, e, t), {
															call: n,
															error: b("Unexpected issue with estimating the gas. Please try again.")
														}
													}).catch(function(e) {
														return console.error("Call threw error", n, e), {
															call: n,
															error: (0, rL.e)(e, b)
														}
													})
												})
											}))];
										case 1:
											if (!(e = (n = l.sent()).find(function(n, e, t) {
													return "gasEstimate" in n && (e === t.length - 1 || "gasEstimate" in t[e + 1])
												}))) {
												if ((t = n.filter(function(n) {
														return "error" in n
													})).length > 0) throw Error(t[t.length - 1].error);
												throw Error(b("Unexpected error. Could not estimate gas for the swap."))
											}
											return o = (r = e.call).contract, a = (i = r.parameters).methodName, u = i.args, s = i.value, c = e.gasEstimate, [2, o[a].apply(o, (0, oR.Z)(u).concat([(0, ni.Z)({
												gasLimit: (0, np.yC)(c),
												gasPrice: g
											}, s && !(0, oO.Z)(s) ? {
												value: s,
												from: m
											} : {
												from: m
											})])).then(function(n) {
												var e = d.inputAmount.currency.symbol,
													t = d.outputAmount.currency.symbol,
													r = d.inputAmount.toSignificant(3),
													o = d.outputAmount.toSignificant(3),
													i = "Swap ".concat(d.tradeType === N.YL.EXACT_OUTPUT ? "max." : "", " ").concat(r, " ").concat(e, " for ").concat(d.tradeType === N.YL.EXACT_INPUT ? "min." : "", " ").concat(o, " ").concat(t),
													a = q && (0, np.UJ)(q) ? (0, rC.Z)(q) : q;
												return j(n, {
													summary: C === m ? i : "".concat(i, " to ").concat(a),
													translatableSummary: {
														text: d.tradeType === N.YL.EXACT_OUTPUT ? C === m ? "Swap max. %inputAmount% %inputSymbol% for %outputAmount% %outputSymbol%" : "Swap max. %inputAmount% %inputSymbol% for %outputAmount% %outputSymbol% to %recipientAddress%" : C === m ? "Swap %inputAmount% %inputSymbol% for min. %outputAmount% %outputSymbol%" : "Swap %inputAmount% %inputSymbol% for min. %outputAmount% %outputSymbol% to %recipientAddress%",
														data: (0, ni.Z)({
															inputAmount: r,
															inputSymbol: e,
															outputAmount: o,
															outputSymbol: t
														}, C !== m && {
															recipientAddress: a
														})
													},
													type: "swap"
												}), (0, rR.M)({
													chainId: x,
													inputAmount: r,
													outputAmount: o,
													input: d.inputAmount.currency,
													output: d.outputAmount.currency,
													type: "MarketMakerSwap"
												}), (0, rR.u)({
													account: m,
													chainId: x,
													hash: n.hash
												}), n.hash
											}).catch(function(n) {
												if ((0, rO.Z)(n)) throw Error("Transaction rejected.");
												throw console.error("Swap failed", n, a, u, s), Error(b("Swap failed: %message%", {
													message: (0, rL.e)(n, b)
												}))
											})]
									}
								})
							}), function() {
								return n.apply(this, arguments)
							}),
							error: null
						} : null !== q ? {
							state: f.INVALID,
							callback: null,
							error: "Invalid recipient"
						} : {
							state: f.LOADING,
							callback: null,
							error: null
						} : {
							state: f.INVALID,
							callback: null,
							error: "Missing dependencies"
						}
					}, [d, m, x, C, q, X, b, j, g])),
					Q = H.callback,
					$ = H.error,
					Y = (0, v.Z)((0, k.useState)({
						tradeToConfirm: void 0,
						attemptingTxn: !1,
						swapErrorMessage: void 0,
						txHash: void 0
					}), 2),
					K = Y[0],
					J = K.tradeToConfirm,
					nn = K.swapErrorMessage,
					nt = K.attemptingTxn,
					nr = K.txHash,
					no = Y[1],
					nu = (0, k.useCallback)(function() {
						Q && (no({
							attemptingTxn: !0,
							tradeToConfirm: J,
							swapErrorMessage: void 0,
							txHash: void 0
						}), Q().then(function(n) {
							no({
								attemptingTxn: !1,
								tradeToConfirm: J,
								swapErrorMessage: void 0,
								txHash: n
							})
						}).catch(function(n) {
							no({
								attemptingTxn: !1,
								tradeToConfirm: J,
								swapErrorMessage: n.message,
								txHash: void 0
							})
						}))
					}, [Q, J, no]),
					ns = (0, k.useCallback)(function() {
						no({
							tradeToConfirm: O.trade,
							swapErrorMessage: nn,
							txHash: nr,
							attemptingTxn: nt
						})
					}, [nt, nn, O, nr, no]),
					nc = (0, k.useCallback)(function() {
						no({
							tradeToConfirm: J,
							attemptingTxn: nt,
							swapErrorMessage: nn,
							txHash: nr
						}), nr && G(V.gN.INPUT, "")
					}, [nt, G, nn, J, nr, no]),
					nl = (0, v.Z)((0, k.useState)(!1), 2),
					nd = nl[0],
					nm = nl[1],
					nf = (0, v.Z)((0, n$.Z)((0, h.jsx)(oY, {
						customOnDismiss: function() {
							return nm(!0)
						},
						mode: tD.a.SWAP_LIQUIDITY
					})), 1)[0],
					nh = (0, v.Z)((0, n$.Z)((0, h.jsx)(o$, {
						trade: O.trade,
						originalTrade: J,
						currencyBalances: z,
						onAcceptChanges: ns,
						attemptingTxn: nt,
						txHash: nr,
						recipient: q,
						onConfirm: nu,
						swapErrorMessage: nn || !O.trade && W("Unable request a quote"),
						customOnDismiss: nc,
						openSettingModal: nf,
						isRFQReady: Boolean(O.rfq) && !O.isLoading
					}), !0, !0, "MMconfirmSwapModal"), 1)[0],
					nx = (0, k.useCallback)(function() {
						R ? nu() : (no({
							tradeToConfirm: O.trade,
							attemptingTxn: !1,
							swapErrorMessage: void 0,
							txHash: void 0
						}), nh()), (0, nZ.K2)()
					}, [R, nu, nh, O]);
				if ((0, k.useEffect)(function() {
						nd && (nm(!1), no(function(n) {
							return (0, na.Z)((0, ni.Z)({}, n), {
								swapErrorMessage: void 0
							})
						}), nh())
					}, [nd, nh, no]), w) return (0, h.jsx)(ne.Z, {
					width: "100%",
					disabled: !0,
					children: W("Unsupported Asset")
				});
				if (!A) return (0, h.jsx)(og.Z, {
					width: "100%"
				});
				if (S) return (0, h.jsx)(ox.A, {
					width: "100%",
					disabled: Boolean(I),
					onClick: P,
					children: null != I ? I : U === rk.kC.WRAP ? "Wrap" : U === rk.kC.UNWRAP ? "Unwrap" : null
				});
				var ng = !_ && (E === oy.UK.NOT_APPROVED || E === oy.UK.PENDING || L && E === oy.UK.APPROVED),
					nv = !_,
					ny = E === oy.UK.APPROVED;
				return ng ? (0, h.jsxs)(h.Fragment, {
					children: [(0, h.jsxs)(tY.m0, {
						children: [(0, h.jsx)(ox.A, {
							variant: E === oy.UK.APPROVED ? "success" : "primary",
							onClick: F,
							disabled: E !== oy.UK.NOT_APPROVED || L,
							width: "48%",
							children: E === oy.UK.PENDING ? (0, h.jsxs)(tY.BA, {
								gap: "6px",
								justify: "center",
								children: [W("Enabling"), " ", (0, h.jsx)(ov.Z, {
									stroke: "white"
								})]
							}) : L && ny ? W("Enabled") : W("Enable %asset%", {
								asset: null !== (T = null === (Z = B[V.gN.INPUT]) || void 0 === Z ? void 0 : Z.symbol) && void 0 !== T ? T : ""
							})
						}), (0, h.jsx)(ox.A, {
							variant: "primary",
							onClick: function() {
								nx()
							},
							width: "48%",
							id: "swap-button",
							disabled: !nv || !ny,
							children: W("Swap")
						})]
					}), (0, h.jsx)(tV.sg, {
						style: {
							marginTop: "1rem"
						},
						children: (0, h.jsx)(oI, {
							steps: [E === oy.UK.APPROVED]
						})
					}), R && nn ? (0, h.jsx)(tX.rn, {
						error: nn
					}) : null]
				}) : (0, h.jsxs)(h.Fragment, {
					children: [(0, h.jsx)(ox.A, {
						variant: "primary",
						onClick: function() {
							nx()
						},
						id: "swap-button",
						width: "100%",
						disabled: !O.rfq || !nv || !!$ || !ny,
						children: _ || W("Swap")
					}), R && nn ? (0, h.jsx)(tX.rn, {
						error: nn
					}) : null]
				})
			}

			function oJ(n) {
				var e = n.mmOrderBookTrade,
					t = n.mmRFQTrade,
					r = n.mmQuoteExpiryRemainingSec,
					o = n.mmTradeInfo,
					i = (0, X.dU)(),
					a = i.typedValue,
					u = i.recipient,
					s = i[V.gN.INPUT].currencyId,
					c = i[V.gN.OUTPUT].currencyId,
					l = (0, W.U8)(s),
					d = (0, W.U8)(c),
					p = (0, et.Z)().account,
					m = (0, v.Z)((0, eI.zu)(), 1)[0],
					f = (0, k.useMemo)(function() {
						var n;
						return n = {}, (0, g.Z)(n, V.gN.INPUT, null != l ? l : void 0), (0, g.Z)(n, V.gN.OUTPUT, null != d ? d : void 0), n
					}, [l, d]),
					x = (0, of .mP)(null == f ? void 0 : f.INPUT, null == f ? void 0 : f.OUTPUT),
					y = (0, rk.ZP)(l, d, a),
					b = y.wrapType,
					j = y.execute,
					C = y.inputError,
					Z = b !== rk.kC.NOT_APPLICABLE,
					T = (0, v.Z)((0, oy.qL)(null == o ? void 0 : o.slippageAdjustedAmounts[V.gN.INPUT], null == o ? void 0 : o.routerAddress), 2),
					w = T[0],
					A = T[1],
					I = (0, v.Z)((0, k.useState)(!1), 2),
					P = I[0],
					U = I[1];
				(0, k.useEffect)(function() {
					U(!1)
				}, [s]), (0, k.useEffect)(function() {
					w === oy.UK.PENDING && U(!0)
				}, [w, P]);
				var E = (0, S._)().onUserInput;
				return (0, h.jsx)(oK, {
					showWrap: Z,
					approval: w,
					swapIsUnsupported: x,
					account: p,
					approvalSubmitted: P,
					onWrap: j,
					approveCallback: A,
					currencies: f,
					currencyBalances: null == e ? void 0 : e.currencyBalances,
					isExpertMode: m,
					mmQuoteExpiryRemainingSec: r,
					rfqTrade: t,
					swapInputError: null == e ? void 0 : e.swapInputError,
					wrapType: b,
					wrapInputError: C,
					recipient: u,
					onUserInput: E
				})
			}

			function o0() {
				var n, e, t, r, o, i, a, u, s, c, l, d, p, m, f, x, y, b, j, C, Z, T, w, A, S, I, P = function() {
						var n = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).maxHops,
							e = (0, X.dU)(),
							t = e.independentField,
							r = e.typedValue,
							o = e[V.gN.INPUT].currencyId,
							i = e[V.gN.OUTPUT].currencyId,
							a = (0, W.U8)(o),
							u = (0, W.U8)(i),
							s = t === V.gN.INPUT,
							c = s ? a : u,
							l = s ? N.YL.EXACT_INPUT : N.YL.EXACT_OUTPUT,
							d = (0, te.Z)(r, null != c ? c : void 0),
							p = (0, v.Z)((0, eI.RO)(), 1)[0],
							m = (0, v.Z)((0, tN.fq)(), 1)[0],
							f = (0, v.Z)((0, tN.IV)(), 1)[0],
							h = (0, v.Z)((0, tN.U3)(), 1)[0],
							x = (0, v.Z)((0, tN.s4)(), 1)[0],
							g = (0, rP.ZU)({
								amount: d,
								currency: s ? u : a,
								baseCurrency: c,
								tradeType: l,
								maxHops: p ? 1 : n,
								maxSplits: m ? void 0 : 0,
								v2Swap: f,
								v3Swap: h,
								stableSwap: x,
								type: "all"
							}),
							y = g.isLoading,
							b = g.trade,
							j = g.refresh,
							C = g.syncing,
							Z = g.isStale,
							T = g.error;
						return {
							refresh: j,
							syncing: C,
							isStale: Z,
							error: T,
							isLoading: (0, k.useDeferredValue)(y || r && !b && !T),
							trade: r ? b : null
						}
					}(),
					U = P.isLoading,
					E = P.trade,
					M = P.refresh,
					D = P.syncing,
					F = P.isStale,
					L = P.error,
					B = (T = (Z = (0, X.dU)()).independentField, w = Z.typedValue, A = Z[V.gN.INPUT].currencyId, S = Z[V.gN.OUTPUT].currencyId, n = (0, W.U8)(A), e = (0, W.U8)(S), a = (0, v.Z)((0, eI.zu)(), 1)[0], u = Boolean((0, nY.useRouter)().query["dev-mode"]), s = (0, v.Z)((0, eI.eq)(), 1)[0], l = (c = (0, et.Z)()).account, d = c.chainId, p = tm(T, (0, eS.Nr)(w, 300), n, e), m = tn({
						independentField: T,
						trade: E,
						v2Trade: null,
						tradeWithMM: null == p ? void 0 : p.trade,
						isExpertMode: a
					}), x = (f = e8((!p.inputError || u) && (null == p ? void 0 : p.mmParam), m, null == p ? void 0 : p.rfqUserInputPath, null == p ? void 0 : p.isRFQLive)).refreshRFQ, y = e7(f.rfqId, T, n, e, m, x, null == p ? void 0 : p.isRFQLive), b = tn({
						independentField: T,
						trade: E,
						v2Trade: null,
						tradeWithMM: null == y ? void 0 : y.trade,
						isExpertMode: a
					}), r = (t = {
						mmTrade: (null == y ? void 0 : y.trade) || (null == p ? void 0 : p.trade),
						allowedSlippage: s,
						chainId: d,
						mmSwapInputError: null == p ? void 0 : p.inputError
					}).mmTrade, o = t.chainId, i = t.mmSwapInputError, j = (0, k.useMemo)(function() {
						var n;
						return r ? {
							trade: r,
							tradeType: r.tradeType,
							route: r.route,
							inputAmount: r.inputAmount,
							outputAmount: r.outputAmount,
							slippageAdjustedAmounts: (n = {}, (0, g.Z)(n, V.gN.INPUT, r && r.inputAmount), (0, g.Z)(n, V.gN.OUTPUT, r && r.outputAmount), n),
							executionPrice: new N.tA(r.inputAmount.currency, r.outputAmount.currency, r.inputAmount.quotient, r.outputAmount.quotient),
							routerAddress: e1[o],
							priceImpactWithoutFee: N.fI,
							realizedLPFee: e5(r).realizedLPFee,
							inputError: i
						} : null
					}, [r, o, i]), C = tf((null == y ? void 0 : y.trade) ? null == y ? void 0 : y.quoteExpiry : null, b ? null == y ? void 0 : y.refreshRFQ : void 0), {
						mmTradeInfo: j,
						isMMBetter: l ? b : m,
						mmQuoteExpiryRemainingSec: C,
						mmOrderBookTrade: p,
						mmRFQTrade: y
					}),
					R = B.isMMBetter ? null == B ? void 0 : null === (I = B.mmTradeInfo) || void 0 === I ? void 0 : I.trade : E,
					O = !U,
					_ = (0, k.useMemo)(function() {
						return E && ek.Fn.getExecutionPrice(E)
					}, [E]);
				return (0, h.jsxs)(h.Fragment, {
					children: [(0, h.jsx)(tO, {
						onRefresh: M,
						refreshDisabled: !O || D || !F
					}), (0, h.jsx)(r6, {
						tradeLoading: !O,
						pricingAndSlippage: (0, h.jsx)(oi, {
							priceLoading: U,
							price: _,
							showSlippage: !B.isMMBetter
						}),
						inputAmount: null == R ? void 0 : R.inputAmount,
						outputAmount: null == R ? void 0 : R.outputAmount,
						swapCommitButton: (null == B ? void 0 : B.isMMBetter) ? (0, h.jsx)(oJ, (0, ni.Z)({}, B)) : (0, h.jsx)(oL, {
							trade: E,
							tradeError: L,
							tradeLoading: !O
						})
					}), B.isMMBetter ? (0, h.jsx)(op, {
						loaded: !B.mmOrderBookTrade.isLoading,
						mmTrade: B.mmTradeInfo
					}) : (0, h.jsx)(om, {
						loaded: O,
						trade: E
					})]
				})
			}

			function o1() {
				var n = (0, $.Z)(["\n  flex-shrink: 0;\n  height: fit-content;\n  padding: 0 16px;\n\n  ", " {\n    padding: 0 40px;\n  }\n\n  ", " {\n    ", ";\n  }\n"]);
				return o1 = function() {
					return n
				}, n
			}

			function o9() {
				var n = (0, $.Z)(["\n  width: 328px;\n"]);
				return o9 = function() {
					return n
				}, n
			}
			var o2 = (0, J.ZP)(j.Z).withConfig({
					componentId: "sc-b674ed03-0"
				})(o1(), function(n) {
					return n.theme.mediaQueries.lg
				}, function(n) {
					return n.theme.mediaQueries.xxl
				}, function(n) {
					return n.$isChartExpanded ? "padding: 0 120px" : "padding: 0 40px"
				}),
				o5 = (0, J.ZP)(nd.ZP).withConfig({
					componentId: "sc-b674ed03-1"
				})(o9());

			function o4() {
				var n, e = (0, b.Z)().isDesktop,
					t = (0, k.useContext)(F),
					r = t.isChartExpanded,
					o = t.isChartDisplayed,
					i = t.setIsChartDisplayed,
					a = t.setIsChartExpanded,
					u = t.isChartSupported,
					s = (0, v.Z)(G(), 2),
					c = s[0],
					l = s[1],
					d = (0, y.$G)().t,
					p = (0, X.dU)(),
					m = p[V.gN.INPUT].currencyId,
					f = p[V.gN.OUTPUT].currencyId,
					x = (0, W.U8)(m),
					P = (0, W.U8)(f),
					U = (n = {}, (0, g.Z)(n, V.gN.INPUT, null != x ? x : void 0), (0, g.Z)(n, V.gN.OUTPUT, null != P ? P : void 0), n),
					E = (0, X.yF)(m, x, f, P),
					N = eA();
				(0, X.jj)();
				var M = (0, S._)().onCurrencySelection,
					D = (0, k.useCallback)(function(n) {
						M(V.gN.OUTPUT, n), N(n);
						var e = (0, I.H)(n);
						e === m && (0, w.Z)("inputCurrency", f), (0, w.Z)("outputCurrency", e)
					}, [m, f, M, N]);
				return (0, h.jsx)(H.Z, {
					removePadding: r,
					hideFooterOnDesktop: r,
					children: (0, h.jsxs)(j.Z, {
						width: ["328px", "100%"],
						height: "100%",
						justifyContent: "center",
						position: "relative",
						alignItems: "flex-start",
						children: [e && u && (0, h.jsx)(Q.Z, {
							inputCurrencyId: m,
							inputCurrency: U[V.gN.INPUT],
							outputCurrencyId: f,
							outputCurrency: U[V.gN.OUTPUT],
							isChartExpanded: r,
							setIsChartExpanded: a,
							isChartDisplayed: o,
							currentSwapPrice: E
						}), !e && u && (0, h.jsx)(C.Z, {
							content: (0, h.jsx)(Q.Z, {
								inputCurrencyId: m,
								inputCurrency: U[V.gN.INPUT],
								outputCurrencyId: f,
								outputCurrency: U[V.gN.OUTPUT],
								isChartExpanded: r,
								setIsChartExpanded: a,
								isChartDisplayed: o,
								currentSwapPrice: E,
								isFullWidthContainer: !0,
								isMobile: !0
							}),
							isOpen: o,
							setIsOpen: i
						}), e && c && (0, h.jsx)(nQ, {
							handleOutputSelect: D
						}), (0, h.jsx)(Z.kw, {
							isOpen: !e && c,
							onDismiss: function() {
								return l(!1)
							},
							children: (0, h.jsx)(T.ZP, {
								style: {
									padding: 0
								},
								title: d("Top Token"),
								onDismiss: function() {
									return l(!1)
								},
								bodyPadding: "0px",
								children: (0, h.jsx)(nQ, {
									handleOutputSelect: function(n) {
										D(n), l(!1)
									}
								})
							})
						}), (0, h.jsx)(j.Z, {
							flexDirection: "column",
							children: (0, h.jsx)(o2, {
								$isChartExpanded: r,
								children: (0, h.jsx)(o5, {
									mt: r ? "24px" : "0",
									children: (0, h.jsx)(A.j, {
										children: (0, h.jsx)(o0, {})
									})
								})
							})
						})]
					})
				})
			}
			var o6 = function() {
				return (0, h.jsx)(O, {
					children: (0, h.jsx)(o4, {})
				})
			};
			o6.chains = x.vo;
			var o3 = o6
		},
		10933: function(n, e, t) {
			"use strict";
			t.d(e, {
				IP: function() {
					return p
				},
				K2: function() {
					return l
				},
				Of: function() {
					return d
				},
				n0: function() {
					return c
				}
			}), (r = a || (a = {})).EventTracking = "eventTracking", r.Swap = "swap", r.AddLiquidity = "addLiquidity", r.Farm = "stakeFarm", (o = u || (u = {})).TokenHighlight = "TokenHighlight", o.Swap = "Swap", o.AddLiquidity = "AddLiquidity", o.Farm = "Farm", (i = s || (s = {})).ClickTradeButton = "Click Trade Button", i.ClickSwapButton = "Click Swap Button", i.ClickAddLiquidityButton = "Click Add Liquidity Button", i.ClickStakeButton = "Click Stake Button", null == window || window.dataLayer;
			var r, o, i, a, u, s, c = function(n) {
					var e;
					console.info("---TokenHeightLightTrade---"), null == window || null === (e = window.dataLayer) || void 0 === e || e.push({
						event: a.EventTracking,
						action: s.ClickTradeButton,
						category: u.TokenHighlight,
						label: n
					})
				},
				l = function() {
					var n;
					console.info("---Swap---"), null == window || null === (n = window.dataLayer) || void 0 === n || n.push({
						event: a.Swap,
						action: s.ClickSwapButton,
						category: u.Swap
					})
				},
				d = function() {
					var n;
					console.info("---Stake---"), null == window || null === (n = window.dataLayer) || void 0 === n || n.push({
						event: a.Farm,
						action: s.ClickStakeButton,
						category: u.Farm
					})
				},
				p = function() {
					var n;
					console.info("---AddLiquidity---"), null == window || null === (n = window.dataLayer) || void 0 === n || n.push({
						event: a.AddLiquidity,
						action: s.ClickAddLiquidityButton,
						category: u.AddLiquidity
					})
				}
		},
		67881: function(n, e, t) {
			"use strict";
			t.d(e, {
				M: function() {
					return i
				},
				u: function() {
					return o
				}
			});
			var r = t(42029),
				o = function(n) {
					var e = n.account,
						t = n.hash,
						r = n.chainId;
					fetch("/api/_log/".concat(e, "/").concat(r, "/").concat(t))
				},
				i = function(n) {
					var e = n.input,
						t = n.output,
						o = n.inputAmount,
						i = n.outputAmount,
						a = n.chainId,
						u = n.type;
					try {
						r.cM.info(u, {
							inputAddress: e.isToken ? e.address.toLowerCase() : e.symbol,
							outputAddress: t.isToken ? t.address.toLowerCase() : t.symbol,
							inputAmount: o,
							outputAmount: i,
							chainId: a
						})
					} catch (n) {}
				}
		},
		92319: function(n, e, t) {
			"use strict";

			function r(n, e) {
				for (; n;) t = null !== (u = null !== (a = null !== (i = n.reason) && void 0 !== i ? i : null === (r = n.data) || void 0 === r ? void 0 : r.message) && void 0 !== a ? a : n.message) && void 0 !== u ? u : t, n = null !== (s = n.error) && void 0 !== s ? s : null === (o = n.data) || void 0 === o ? void 0 : o.originalError;
				(null == t ? void 0 : t.indexOf("execution reverted: ")) === 0 && (t = t.substring(20));
				var t, r, o, i, a, u, s, c = function(n) {
					return [n, "(".concat(t, ")")].join(" ")
				};
				switch (t) {
					case "PancakeRouter: EXPIRED":
						return c(e("The transaction could not be sent because the deadline has passed. Please check that your transaction deadline is not too low."));
					case "PancakeRouter: INSUFFICIENT_OUTPUT_AMOUNT":
					case "PancakeRouter: EXCESSIVE_INPUT_AMOUNT":
					case "PancakeRouter: INSUFFICIENT_A_AMOUNT":
					case "PancakeRouter: INSUFFICIENT_B_AMOUNT":
					case "swapMulti: incorrect user balance":
					case "Pancake: K":
						return c(e("This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance."));
					case "TransferHelper: TRANSFER_FROM_FAILED":
						return c(e("The input token cannot be transferred. There may be an issue with the input token."));
					case "Pancake: TRANSFER_FAILED":
						return c(e("The output token cannot be transferred. There may be an issue with the output token."));
					case "Too little received":
					case "Too much requested":
					case "STF":
						return e("This transaction will not succeed due to price movement. Try increasing your slippage tolerance. Note: fee on transfer and rebase tokens are incompatible with Pancakeswap V3.");
					case "TF":
						return e("The output token cannot be transferred. There may be an issue with the output token. Note: fee on transfer and rebase tokens are incompatible with Pancakeswap V3.");
					default:
						if ((null == t ? void 0 : t.indexOf("undefined is not an object")) !== -1) return console.error(n, t), e("An error occurred when trying to execute this operation. You may need to increase your slippage tolerance. If that does not work, there may be an incompatibility with the token you are trading.");
						return e("Unknown error%reason%. Try increasing your slippage tolerance.", {
							reason: t ? ': "'.concat(t, '"') : ""
						})
				}
			}
			t.d(e, {
				e: function() {
					return r
				}
			})
		},
		9370: function(n, e, t) {
			"use strict";
			t.d(e, {
				X: function() {
					return g
				},
				g: function() {
					return y
				}
			});
			var r = t(70865),
				o = t(26297),
				i = t(92228),
				a = t(52322),
				u = t(27032),
				s = t(56360),
				c = t(2784),
				l = t(59913),
				d = t(3411),
				p = t(4073),
				m = t(88813);

			function f() {
				var n = (0, i.Z)(["\n  width: ", ";\n  height: ", ";\n  border-radius: ", ";\n  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);\n  background-color: #faf9fa;\n  color: ", ";\n"]);
				return f = function() {
					return n
				}, n
			}

			function h() {
				var n = (0, i.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 32px;\n"]);
				return h = function() {
					return n
				}, n
			}
			var x = (0, d.ZP)(s.Z).withConfig({
					componentId: "sc-1a1a8bbc-0"
				})(f(), function(n) {
					return n.size
				}, function(n) {
					return n.size
				}, function(n) {
					return n.size
				}, function(n) {
					return n.theme.colors.text
				}),
				g = function(n) {
					var e = n.address,
						t = n.size,
						i = n.chainName,
						s = void 0 === i ? "BSC" : i,
						d = (0, o.Z)(n, ["address", "size", "chainName"]),
						f = (0, c.useMemo)(function() {
							return (0, m.Z)(new u.WU(l.Pi[s], e, 18, ""))
						}, [e, s]),
						h = "https://".concat("BSC" === s ? "tokens." : "", "pancakeswap.finance/images/").concat("BSC" === s ? "" : "".concat(s, "/tokens/")).concat((0, p.UJ)(e), ".png");
					return (0, a.jsx)(x, (0, r.Z)({
						size: void 0 === t ? "24px" : t,
						srcs: [h, f],
						alt: "token logo",
						useFilledIcon: !0
					}, d))
				},
				v = d.ZP.div.withConfig({
					componentId: "sc-1a1a8bbc-1"
				})(h()),
				y = function(n) {
					var e = n.address0,
						t = n.address1,
						r = n.size,
						o = void 0 === r ? 16 : r,
						i = n.chainName,
						u = void 0 === i ? "ARB" : i;
					return (0, a.jsxs)(v, {
						children: [e && (0, a.jsx)(g, {
							address: e,
							size: "".concat(o.toString(), "px"),
							chainName: u
						}), t && (0, a.jsx)(g, {
							address: t,
							size: "".concat(o.toString(), "px"),
							chainName: u
						})]
					})
				}
		},
		74282: function(n, e, t) {
			"use strict";
			t.d(e, {
				Eh: function() {
					return h
				},
				Ob: function() {
					return f
				},
				SS: function() {
					return x
				},
				_J: function() {
					return p
				},
				y6: function() {
					return m
				}
			});
			var r = t(92228),
				o = t(3411),
				i = t(57374),
				a = t(70701);

			function u() {
				var n = (0, r.Z)(["\n  cursor: pointer;\n"]);
				return u = function() {
					return n
				}, n
			}

			function s() {
				var n = (0, r.Z)(["\n  width: 100%;\n  padding-top: 16px;\n  flex-direction: column;\n  gap: 16px;\n  background-color: ", ";\n  border-radius: ", ";\n  border: 1px solid ", ";\n  ", " {\n    border-radius: ", ";\n  }\n"]);
				return s = function() {
					return n
				}, n
			}

			function c() {
				var n = (0, r.Z)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 0.2em;\n  margin-bottom: 1.2em;\n"]);
				return c = function() {
					return n
				}, n
			}

			function l() {
				var n = (0, r.Z)(["\n  color: ", ";\n  padding: 0 20px;\n  :hover {\n    cursor: pointer;\n  }\n"]);
				return l = function() {
					return n
				}, n
			}

			function d() {
				var n = (0, r.Z)(["\n  height: 1px;\n  background-color: ", ";\n  width: 100%;\n"]);
				return d = function() {
					return n
				}, n
			}
			var p = (0, o.ZP)(i.Z).withConfig({
					componentId: "sc-8182cc4-0"
				})(u()),
				m = (0, o.ZP)(a.Z).withConfig({
					componentId: "sc-8182cc4-1"
				})(s(), function(n) {
					return n.theme.card.background
				}, function(n) {
					return n.theme.radii[0]
				}, function(n) {
					return n.theme.colors.cardBorder
				}, function(n) {
					return n.theme.mediaQueries.md
				}, function(n) {
					return n.theme.radii.card
				}),
				f = o.ZP.div.withConfig({
					componentId: "sc-8182cc4-2"
				})(c()),
				h = o.ZP.div.withConfig({
					componentId: "sc-8182cc4-3"
				})(l(), function(n) {
					return n.theme.colors.primary
				}),
				x = o.ZP.div.withConfig({
					componentId: "sc-8182cc4-4"
				})(d(), function(n) {
					return n.theme.colors.cardBorder
				})
		},
		10106: function(n, e, t) {
			"use strict";
			var r = t(70865),
				o = t(96670),
				i = t(26297),
				a = t(52322),
				u = t(57374);
			e.Z = function(n) {
				var e = n.value,
					t = (0, i.Z)(n, ["value"]);
				if (!e || Number.isNaN(e)) return (0, a.jsx)(u.Z, (0, o.Z)((0, r.Z)({}, t), {
					children: "-"
				}));
				var s = e < 0;
				return (0, a.jsxs)(u.Z, (0, o.Z)((0, r.Z)({}, t), {
					color: s ? "failure" : "success",
					children: [s ? "↓" : "↑", Math.abs(e).toFixed(2), "%"]
				}))
			}
		},
		33657: function(n, e, t) {
			"use strict";
			t.d(e, {
				Ld: function() {
					return Z
				},
				im: function() {
					return y
				},
				k0: function() {
					return C
				},
				ly: function() {
					return k
				},
				nR: function() {
					return b
				},
				rn: function() {
					return A
				},
				y: function() {
					return j
				}
			});
			var r = t(92228),
				o = t(52322),
				i = t(70701),
				a = t(57374),
				u = t(1429),
				s = t(79026),
				c = t(3411);

			function l() {
				var n = (0, r.Z)(["\n  position: relative;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 1rem;\n"]);
				return l = function() {
					return n
				}, n
			}

			function d() {
				var n = (0, r.Z)(["\n          :hover {\n            cursor: pointer;\n            opacity: 0.8;\n          }\n        "]);
				return d = function() {
					return n
				}, n
			}

			function p() {
				var n = (0, r.Z)(["\n  padding: 2px;\n\n  ", "\n"]);
				return p = function() {
					return n
				}, n
			}

			function m() {
				var n = (0, r.Z)(["\n  color: ", ";\n"]);
				return m = function() {
					return n
				}, n
			}

			function f() {
				var n = (0, r.Z)(["\n  height: 22px;\n  width: 22px;\n  background-color: ", ";\n  border: none;\n  border-radius: 50%;\n  padding: 0.2rem;\n  font-size: 0.875rem;\n  font-weight: 400;\n  margin-left: 0.4rem;\n  cursor: pointer;\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  float: right;\n\n  :hover {\n    background-color: ", ";\n  }\n  :focus {\n    background-color: ", ";\n    outline: none;\n  }\n"]);
				return f = function() {
					return n
				}, n
			}

			function h() {
				var n = (0, r.Z)(["\n  width: 220px;\n"]);
				return h = function() {
					return n
				}, n
			}

			function x() {
				var n = (0, r.Z)(["\n  background-color: ", ";\n  border-radius: 1rem;\n  display: flex;\n  align-items: center;\n  font-size: 0.825rem;\n  width: 100%;\n  padding: 3rem 1.25rem 1rem 1rem;\n  margin-top: -2rem;\n  color: ", ";\n  z-index: -1;\n  p {\n    padding: 0;\n    margin: 0;\n    font-weight: 500;\n  }\n"]);
				return x = function() {
					return n
				}, n
			}

			function g() {
				var n = (0, r.Z)(["\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n  border-radius: 12px;\n  min-width: 48px;\n  height: 48px;\n"]);
				return g = function() {
					return n
				}, n
			}

			function v() {
				var n = (0, r.Z)(["\n  background-color: ", ";\n  padding: 0.5rem;\n  border-radius: 12px;\n  margin-top: 8px;\n"]);
				return v = function() {
					return n
				}, n
			}
			var y = (0, c.ZP)(i.Z).withConfig({
					componentId: "sc-a4590656-0"
				})(l()),
				b = c.ZP.div.withConfig({
					componentId: "sc-a4590656-1"
				})(p(), function(n) {
					return n.clickable ? (0, c.iv)(d()) : null
				}),
				j = (0, c.ZP)(a.Z).withConfig({
					componentId: "sc-a4590656-2"
				})(m(), function(n) {
					var e = n.theme,
						t = n.severity;
					return 3 === t || 4 === t ? e.colors.failure : 2 === t ? e.colors.warning : 1 === t ? e.colors.text : e.colors.success
				}),
				C = c.ZP.button.withConfig({
					componentId: "sc-a4590656-3"
				})(f(), function(n) {
					return n.theme.colors.background
				}, function(n) {
					return n.theme.colors.text
				}, function(n) {
					return n.theme.colors.dropdown
				}, function(n) {
					return n.theme.colors.dropdown
				}),
				Z = (0, c.ZP)(a.Z).attrs({
					ellipsis: !0
				}).withConfig({
					componentId: "sc-a4590656-4"
				})(h()),
				T = c.ZP.div.withConfig({
					componentId: "sc-a4590656-5"
				})(x(), function(n) {
					var e = n.theme;
					return "".concat(e.colors.failure33)
				}, function(n) {
					return n.theme.colors.failure
				}),
				w = c.ZP.div.withConfig({
					componentId: "sc-a4590656-6"
				})(g(), function(n) {
					var e = n.theme;
					return "".concat(e.colors.failure33)
				});

			function A(n) {
				var e = n.error;
				return (0, o.jsxs)(T, {
					children: [(0, o.jsx)(w, {
						children: (0, o.jsx)(u.Z, {
							width: "24px"
						})
					}), (0, o.jsx)("p", {
						children: e
					})]
				})
			}
			var k = (0, c.ZP)(s.Tz).withConfig({
				componentId: "sc-a4590656-7"
			})(v(), function(n) {
				var e = n.theme;
				return "".concat(e.colors.warning33)
			})
		},
		1741: function(n, e, t) {
			"use strict";
			var r = t(70865),
				o = t(96670),
				i = t(52322);
			t(2784);
			var a = t(18019);
			e.Z = function(n) {
				return (0, i.jsx)(a.Z, (0, o.Z)((0, r.Z)({
					viewBox: "0 0 16 16"
				}, n), {
					children: (0, i.jsx)("path", {
						d: "M11.3933 3.03997C10.9266 2.35331 10.3933 1.71331 9.79329 1.13997C9.55996 0.913306 9.16663 1.12664 9.23329 1.44664C9.35996 2.07331 9.49329 2.89997 9.49329 3.63997C9.49329 5.01331 8.59329 6.12664 7.21996 6.12664C6.19329 6.12664 5.35329 5.50664 4.98663 4.61997C4.91996 4.48664 4.89329 4.40664 4.85329 4.25997C4.77996 3.97997 4.41329 3.89331 4.25329 4.13997C4.13329 4.31997 4.01996 4.49997 3.91329 4.69331C3.11996 6.05331 2.66663 7.63997 2.66663 9.33331C2.66663 12.28 5.05329 14.6666 7.99996 14.6666C10.9466 14.6666 13.3333 12.28 13.3333 9.33331C13.3333 7.00664 12.6133 4.84664 11.3933 3.03997ZM7.80663 12.6666C6.61996 12.6666 5.65996 11.7333 5.65996 10.5733C5.65996 9.49331 6.35996 8.73331 7.53329 8.49331C8.51329 8.29331 9.51996 7.87331 10.22 7.21331C10.4066 7.03997 10.7133 7.11997 10.7666 7.36664C10.92 8.04664 11 8.75331 11 9.46664C11.0066 11.2333 9.57329 12.6666 7.80663 12.6666Z"
					})
				}))
			}
		},
		53624: function(n, e, t) {
			"use strict";
			var r = t(70865),
				o = t(96670),
				i = t(52322);
			t(2784);
			var a = t(18019);
			e.Z = function(n) {
				return (0, i.jsx)(a.Z, (0, o.Z)((0, r.Z)({
					viewBox: "0 0 19 19"
				}, n), {
					children: (0, i.jsx)("path", {
						d: "M0 15.46V18.5C0 18.78 0.22 19 0.5 19H3.54C3.67 19 3.8 18.95 3.89 18.85L14.81 7.94L11.06 4.19L0.15 15.1C0.0500001 15.2 0 15.32 0 15.46ZM17.71 5.04C18.1 4.65 18.1 4.02 17.71 3.63L15.37 1.29C14.98 0.899998 14.35 0.899998 13.96 1.29L12.13 3.12L15.88 6.87L17.71 5.04Z"
					})
				}))
			}
		},
		60803: function(n, e, t) {
			"use strict";
			var r = t(70865),
				o = t(96670),
				i = t(52322);
			t(2784);
			var a = t(18019);
			e.Z = function(n) {
				return (0, i.jsx)(a.Z, (0, o.Z)((0, r.Z)({
					viewBox: "0 0 24 24"
				}, n), {
					children: (0, i.jsx)("path", {
						d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z"
					})
				}))
			}
		},
		12076: function(n, e, t) {
			"use strict";
			var r = t(92228),
				o = t(3411),
				i = t(57374);

			function a() {
				var n = (0, r.Z)(["\n  text-decoration: underline dotted;\n  text-decoration-color: ", ";\n  text-underline-offset: 0.1em;\n"]);
				return a = function() {
					return n
				}, n
			}
			var u = (0, o.ZP)(i.Z).withConfig({
				componentId: "sc-5b87ff15-0"
			})(a(), function(n) {
				var e, t = n.theme,
					r = n.decorationColor;
				return "".concat((null == t ? void 0 : t.colors) && r ? t.colors[r] : null == t ? void 0 : null === (e = t.colors) || void 0 === e ? void 0 : e.textSubtle)
			});
			e.Z = u
		},
		47233: function(n, e, t) {
			"use strict";
			t.d(e, {
				p: function() {
					return c
				}
			});
			var r = t(92228),
				o = t(52322),
				i = t(3411),
				a = t(53620);

			function u() {
				var n = (0, r.Z)(["\n  width: 100%;\n"]);
				return u = function() {
					return n
				}, n
			}
			var s = i.ZP.div.withConfig({
				componentId: "sc-6fd4c41d-0"
			})(u());

			function c(n) {
				var e = n.bottomContent,
					t = n.topContent;
				return (0, o.jsxs)(s, {
					children: [(0, o.jsx)(a.ZP, {
						children: t()
					}), (0, o.jsx)(a.ZP, {
						children: e()
					})]
				})
			}
		},
		74998: function(n, e, t) {
			"use strict";

			function r(n) {
				return /^0x0*$/.test(n)
			}
			t.d(e, {
				Z: function() {
					return r
				}
			})
		}
	},
	function(n) {
		n.O(0, [1634, 1986, 5656, 2029, 6063, 5537, 4035, 9511, 278, 1167, 5131, 7735, 2977, 6297, 9774, 2888, 179], function() {
			return n(n.s = 68994)
		}), _N_E = n.O()
	}
]);
//# sourceMappingURL=swap-6edbb59750752296.js.map