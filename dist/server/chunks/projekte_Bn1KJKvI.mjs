const Scribble = new Proxy({"src":"/custom-folder/projekte.CCNIuahq.webp","width":1920,"height":1080,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/webprojekte/feuchter-gmbh-astro/feuchter-gmbh/src/assets/projekte.webp";
							}
							
							return target[name];
						}
					});

export { Scribble as S };
