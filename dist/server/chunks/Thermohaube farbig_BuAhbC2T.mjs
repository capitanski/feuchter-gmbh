new Proxy({"src":"/custom-folder/Staubhaube Farbig.uwlcHcZp.webp","width":1000,"height":1000,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/webprojekte/feuchter-gmbh-astro/feuchter-gmbh/src/assets/Staubhaube Farbig.webp";
							}
							
							return target[name];
						}
					});

new Proxy({"src":"/custom-folder/Thermohaube farbig.DCA_bGCu.webp","width":1000,"height":1000,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/webprojekte/feuchter-gmbh-astro/feuchter-gmbh/src/assets/Thermohaube farbig.webp";
							}
							
							return target[name];
						}
					});
