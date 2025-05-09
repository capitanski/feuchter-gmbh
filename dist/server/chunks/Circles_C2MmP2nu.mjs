const Circles = new Proxy({"src":"/custom-folder/Circles.Q2htWEHX.svg","width":1338,"height":913,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/felix/Desktop/feuchter-gmbh/feuchter-gmbh/src/assets/Circles.svg";
							}
							
							return target[name];
						}
					});

export { Circles as C };
