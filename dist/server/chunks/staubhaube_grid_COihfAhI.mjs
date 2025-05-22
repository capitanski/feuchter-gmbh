const Transportloesungen = new Proxy({"src":"/custom-folder/schutzwand_grid.DSQAWzn9.webp","width":3000,"height":3000,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/Produkte/schutzwand_grid.webp";
							}
							
							return target[name];
						}
					});

const Thermohaube = new Proxy({"src":"/custom-folder/thermohaube_grid.DyR9Ezaw.webp","width":1501,"height":1501,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/Produkte/thermohaube_grid.webp";
							}
							
							return target[name];
						}
					});

const Staubhaube = new Proxy({"src":"/custom-folder/staubhaube_grid.Dmf3611O.webp","width":3000,"height":3000,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/Produkte/staubhaube_grid.webp";
							}
							
							return target[name];
						}
					});

export { Staubhaube as S, Transportloesungen as T, Thermohaube as a };
