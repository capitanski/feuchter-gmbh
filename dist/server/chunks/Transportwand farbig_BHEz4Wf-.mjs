new Proxy({"src":"/custom-folder/Transportwand farbig.1DEYGJBS.webp","width":1000,"height":1000,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/webprojekte/feuchter-gmbh-astro/feuchter-gmbh/src/assets/Produkte/Transportwand farbig.webp";
							}
							
							return target[name];
						}
					});
