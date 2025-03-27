const Scribble = new Proxy({"src":"/custom-folder/projekte.Dqd8J574.jpg","width":1920,"height":1080,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/projekte.jpg";
							}
							
							return target[name];
						}
					});

export { Scribble as S };
