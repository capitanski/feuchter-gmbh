const Arrow = new Proxy({"src":"/custom-folder/Arrow_sand.Dau0G9DC.svg","width":243,"height":429,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/felix/Desktop/feuchter-gmbh/feuchter-gmbh/src/assets/Arrow_sand.svg";
							}
							
							return target[name];
						}
					});

export { Arrow as A };
