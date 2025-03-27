const Arrow = new Proxy({"src":"/custom-folder/Arrow_sand.BLqrtg_Z.svg","width":243,"height":429,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/Arrow_sand.svg";
							}
							
							return target[name];
						}
					});

export { Arrow as A };
